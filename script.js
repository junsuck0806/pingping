const $ = (id) => document.getElementById(id);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const emoji = {
  한식: "🍚", 중식: "🥟", 일식: "🍣", 양식: "🍝", 분식: "🍢", 카페: "☕", 고기: "🥩",
  "펍·생맥주": "🍺", 이자카야: "🍶", "포차·한식주점": "🍢", "치맥·간단안주": "🍗",
  "전·막걸리": "🥞", "칵테일·와인": "🍸", "고기·구이주점": "🥩", "꼬치·양꼬치": "🍢"
};
const LABEL = { category: "종류", area: "동네", tag: "목적" };
// 술집 데이터(type, reason)도 맛집과 같은 항목 이름(category, desc)으로 맞춰서 씁니다.
const norm = (arr) => arr.map((r) => ({ ...r, category: r.category || r.type, desc: r.desc || r.reason }));

const TABS = {
  food: {
    title: "군포에서<br>오늘 뭐 먹지?",
    sub: "산본, 금정, 군포 동네 맛집을 한곳에 모았어요.",
    placeholder: "식당 이름, 메뉴, 동네로 검색",
    random: "오늘의 메뉴 골라줘",
    menuLabel: "대표 메뉴", icon: "🍴", keys: ["category", "area"],
    list: norm(typeof restaurants !== "undefined" ? restaurants : []),
    notice: "", empty: "data.js 파일에서 restaurants 목록을 찾지 못했어요."
  },
  bar: {
    title: "군포에서<br>오늘 어디서 한잔?",
    sub: "산본, 금정 술집 후보를 모임 목적별로 골라보세요.",
    placeholder: "가게 이름, 안주, 동네로 검색",
    random: "오늘의 술집 골라줘",
    menuLabel: "안주", icon: "🍻", keys: ["category", "area", "tag"],
    list: norm(typeof bars !== "undefined" ? bars : []),
    notice: "다이닝코드 검색 결과를 참고한 방문 후보 목록이에요(평점순 랭킹이 아니에요). 가격과 영업 여부는 지도에서 확인하세요. 청소년은 술을 구매하거나 마실 수 없어요.",
    empty: "bars.js 파일에서 bars 목록을 찾지 못했어요."
  }
};

let tab = "food", sel = {}, q = "";
const cur = () => TABS[tab];
const clean = (v) => (v && !String(v).includes("정보 확인 필요")) ? v : "";

function filtered() {
  const k = q.trim().toLowerCase();
  return cur().list.filter((r) =>
    cur().keys.every((key) => !sel[key] || sel[key] === "전체" || r[key] === sel[key]) &&
    (!k || [r.name, r.menu, r.area, r.category, r.tag, r.desc].join(" ").toLowerCase().includes(k)));
}

function item(r) {
  const link = r.link || "https://map.naver.com/p/search/" + encodeURIComponent("군포 " + r.name);
  const pic = r.image
    ? `<img src="${esc(r.image)}" alt="${esc(r.name)}" loading="lazy">`
    : `<div class="ph">${emoji[r.category] || cur().icon}</div>`;
  const tags = [r.area, r.category, r.tag].filter(Boolean).map(esc).join(", ");
  const meta = [
    clean(r.menu) && `${cur().menuLabel}: ${esc(r.menu)}`,
    clean(r.price) && `가격대: ${esc(r.price)}`
  ].filter(Boolean).join("<br>");
  return `<article class="item">${pic}<div class="body">
    <span class="tag">${tags}</span>
    <h3>${esc(r.name)}</h3>
    ${clean(r.desc) ? `<p>${esc(r.desc)}</p>` : ""}
    ${meta ? `<p class="meta">${meta}</p>` : ""}
    <a href="${esc(link)}" target="_blank" rel="noopener">지도에서 보기</a>
  </div></article>`;
}

function renderFilters() {
  $("filters").innerHTML = cur().keys.map((key) => {
    const vals = ["전체", ...new Set(cur().list.map((r) => r[key]).filter(Boolean))];
    return `<div class="filters"><span class="lab">${LABEL[key]}</span>` + vals.map((v) =>
      `<button type="button" class="chip${(sel[key] || "전체") === v ? " on" : ""}" data-k="${key}" data-v="${esc(v)}">${esc(v)}</button>`).join("") + `</div>`;
  }).join("");
  $("filters").querySelectorAll("button").forEach((b) =>
    b.onclick = () => { sel[b.dataset.k] = b.dataset.v; render(); });
}

function render() {
  renderFilters();
  const list = filtered();
  $("count").textContent = `${list.length}곳`;
  $("list").innerHTML = list.length ? list.map(item).join("")
    : `<p class="empty">${cur().list.length ? "조건에 맞는 곳이 없어요. 검색어나 필터를 바꿔보세요." : cur().empty}</p>`;
}

function setTab(name) {
  tab = name; sel = {}; q = "";
  const t = cur();
  document.body.dataset.tab = name;
  document.querySelectorAll("[role=tab]").forEach((b) =>
    b.setAttribute("aria-selected", b.dataset.tab === name));
  $("title").innerHTML = t.title;
  $("sub").textContent = t.sub;
  $("search").placeholder = t.placeholder;
  $("search").value = "";
  $("random").textContent = t.random;
  $("notice").textContent = t.notice;
  $("notice").hidden = !t.notice;
  render();
}

document.querySelectorAll("[role=tab]").forEach((b) => b.onclick = () => setTab(b.dataset.tab));
$("search").oninput = (e) => { q = e.target.value; render(); };
$("random").onclick = () => {
  const list = filtered();
  if (!list.length) return;
  $("list").innerHTML = item(list[Math.floor(Math.random() * list.length)]);
  $("count").textContent = "오늘의 추천";
  $("list").scrollIntoView();
};

setTab(location.hash === "#bar" ? "bar" : "food");
