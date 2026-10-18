const $ = (id) => document.getElementById(id);
const emoji = { 한식: "🍚", 중식: "🥟", 일식: "🍣", 양식: "🍝", 분식: "🍢", 카페: "☕", 고기: "🥩" };
let cat = "전체", area = "전체", keyword = "";

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function filtered() {
  const k = keyword.trim().toLowerCase();
  return restaurants.filter((r) =>
    (cat === "전체" || r.category === cat) &&
    (area === "전체" || r.area === area) &&
    (!k || [r.name, r.menu, r.area, r.desc].join(" ").toLowerCase().includes(k)));
}

function item(r) {
  const link = r.link || "https://map.naver.com/p/search/" + encodeURIComponent("군포 " + r.name);
  const pic = r.image
    ? `<img src="${esc(r.image)}" alt="${esc(r.name)}" loading="lazy">`
    : `<div class="ph">${emoji[r.category] || "🍴"}</div>`;
  return `<article class="item">${pic}<div class="body">
    <span class="tag">${esc(r.area)}, ${esc(r.category)}</span>
    <h3>${esc(r.name)}</h3>
    <p>${esc(r.desc)}</p>
    <p class="meta">대표 메뉴: ${esc(r.menu)}<br>가격대: ${esc(r.price)}</p>
    <a href="${esc(link)}" target="_blank" rel="noopener">지도에서 보기</a>
  </div></article>`;
}

function chips(id, key, cur, set) {
  const vals = ["전체", ...new Set(restaurants.map((r) => r[key]).filter(Boolean))];
  $(id).innerHTML = vals.map((v) =>
    `<button type="button" class="chip${v === cur ? " on" : ""}" data-v="${esc(v)}">${esc(v)}</button>`).join("");
  $(id).querySelectorAll("button").forEach((b) => b.onclick = () => { set(b.dataset.v); render(); });
}

function render() {
  chips("categories", "category", cat, (v) => cat = v);
  chips("areas", "area", area, (v) => area = v);
  const list = filtered();
  $("count").textContent = `${list.length}곳`;
  $("list").innerHTML = list.length ? list.map(item).join("")
    : `<p class="empty">조건에 맞는 식당이 없어요. 검색어나 필터를 바꿔보세요.</p>`;
}

$("search").oninput = (e) => { keyword = e.target.value; render(); };
$("random").onclick = () => {
  const list = filtered();
  if (!list.length) return;
  $("list").innerHTML = item(list[Math.floor(Math.random() * list.length)]);
  $("count").textContent = "오늘의 추천";
  $("list").scrollIntoView();
};
render();
