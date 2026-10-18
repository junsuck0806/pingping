const $ = (id) => document.getElementById(id);
const emoji = { 한식: "🍚", 중식: "🥟", 일식: "🍣", 양식: "🍝", 분식: "🍢", 카페: "☕", 고기: "🥩" };
let cat = "전체", area = "전체", keyword = "";

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "'" }[c]));

function filtered()
const restaurants = [
  // ===== 산본 =====
  {
    name: "팅팅 산본",
    area: "산본",
    category: "중식",
    menu: "짬뽕",
    price: "정보 확인 필요",
    desc: "중식당. 짬뽕과 중식 메뉴를 찾을 때 확인해 보세요.",
    link: "",
    image: ""
  },
  {
    name: "라멘키분",
    area: "산본",
    category: "일식",
    menu: "돈코츠라멘",
    price: "정보 확인 필요",
    desc: "일본식 라멘 전문점.",
    link: "",
    image: ""
  },
  {
    name: "빙화만두집",
    area: "산본",
    category: "중식",
    menu: "빙화만두, 샤오롱바오",
    price: "정보 확인 필요",
    desc: "만두 메뉴로 알려진 산본의 식당.",
    link: "",
    image: ""
  },
  {
    name: "옥상식당",
    area: "산본",
    category: "일식",
    menu: "마제멘, 버터치킨커리",
    price: "정보 확인 필요",
    desc: "일본 가정식 메뉴를 즐길 수 있는 식당.",
    link: "",
    image: ""
  },
  {
    name: "만복순대국 산본점",
    area: "산본",
    category: "한식",
    menu: "순대국",
    price: "정보 확인 필요",
    desc: "순댓국 전문점.",
    link: "",
    image: ""
  },
  {
    name: "맛찬들왕소금구이 산본직영점",
    area: "산본",
    category: "고기",
    menu: "삼겹살",
    price: "정보 확인 필요",
    desc: "고기 메뉴를 즐길 수 있는 식당.",
    link: "",
    image: ""
  },
  {
    name: "설 산본역",
    area: "산본",
    category: "분식",
    menu: "즉석떡볶이",
    price: "정보 확인 필요",
    desc: "즉석떡볶이 메뉴로 검색되는 식당.",
    link: "",
    image: ""
  },
  {
    name: "브런치빈 산본점",
    area: "산본",
    category: "양식",
    menu: "브런치, 파스타",
    price: "정보 확인 필요",
    desc: "브런치와 파스타 메뉴를 즐길 수 있는 곳.",
    link: "",
    image: ""
  },
  {
    name: "멘츠루 산본본점",
    area: "산본",
    category: "일식",
    menu: "라멘, 아부라소바",
    price: "정보 확인 필요",
    desc: "라멘과 일본식 면 요리 전문점.",
    link: "",
    image: ""
  },
  {
    name: "얼룩말식당",
    area: "산본",
    category: "일식",
    menu: "가지덮밥, 스키야키",
    price: "정보 확인 필요",
    desc: "덮밥과 일본식 식사 메뉴를 찾을 때 확인해 보세요.",
    link: "",
    image: ""
  },
  {
    name: "돈카와치 산본점",
    area: "산본",
    category: "일식",
    menu: "돈카츠",
    price: "정보 확인 필요",
    desc: "돈카츠 전문점.",
    link: "",
    image: ""
  },
  {
    name: "경양카츠 산본점",
    area: "산본",
    category: "양식",
    menu: "카츠, 파스타",
    price: "정보 확인 필요",
    desc: "카츠와 파스타 메뉴가 소개된 식당.",
    link: "",
    image: ""
  },
  {
    name: "상무초밥 산본점",
    area: "산본",
    category: "일식",
    menu: "초밥",
    price: "정보 확인 필요",
    desc: "초밥 전문점.",
    link: "",
    image: ""
  },
  {
    name: "스시이안앤 산본역점",
    area: "산본",
    category: "일식",
    menu: "초밥",
    price: "정보 확인 필요",
    desc: "산본역 인근의 초밥 식당.",
    link: "",
    image: ""
  },
  {
    name: "남도연",
    area: "산본",
    category: "한식",
    menu: "꼬막 요리, 해산물 요리",
    price: "정보 확인 필요",
    desc: "남도식 한식과 해산물 메뉴를 즐길 수 있는 곳.",
    link: "",
    image: ""
  },
  {
    name: "참치나라",
    area: "산본",
    category: "일식",
    menu: "참치회",
    price: "정보 확인 필요",
    desc: "참치회 전문점.",
    link: "",
    image: ""
  },
  {
    name: "석기정 산본점",
    area: "산본",
    category: "한식",
    menu: "돌솥부대찌개",
    price: "정보 확인 필요",
    desc: "부대찌개 메뉴로 알려진 식당.",
    link: "",
    image: ""
  },
  {
    name: "이조숯불갈비",
    area: "산본",
    category: "고기",
    menu: "양념돼지갈비",
    price: "정보 확인 필요",
    desc: "숯불갈비 전문점.",
    link: "",
    image: ""
  },
  {
    name: "우정원 본점",
    area: "산본",
    category: "고기",
    menu: "소고기 구이",
    price: "정보 확인 필요",
    desc: "소고기 구이 전문점.",
    link: "",
    image: ""
  },
  {
    name: "요요연연",
    area: "산본",
    category: "카페",
    menu: "빵",
    price: "정보 확인 필요",
    desc: "빵과 베이커리 메뉴로 알려진 곳.",
    link: "",
    image: ""
  },

  // ===== 금정 =====
  {
    name: "신먹방 털보네생고기 금정역",
    area: "금정",
    category: "고기",
    menu: "삼겹살",
    price: "정보 확인 필요",
    desc: "생고기와 삼겹살을 즐길 수 있는 식당.",
    link: "",
    image: ""
  },
  {
    name: "복아구찜해물탕원조집",
    area: "금정",
    category: "한식",
    menu: "아구찜, 해물탕",
    price: "정보 확인 필요",
    desc: "아구찜과 해물탕 메뉴를 취급하는 식당.",
    link: "",
    image: ""
  },
  {
    name: "더맛있는족발보쌈 금정점",
    area: "금정",
    category: "한식",
    menu: "족발, 보쌈",
    price: "정보 확인 필요",
    desc: "족발과 보쌈 전문점.",
    link: "",
    image: ""
  },
  {
    name: "우동키노야 금정AK플라자점",
    area: "금정",
    category: "일식",
    menu: "우동",
    price: "정보 확인 필요",
    desc: "일본식 우동 전문점.",
    link: "",
    image: ""
  },
  {
    name: "갓포야끼 금정점",
    area: "금정",
    category: "일식",
    menu: "꼬치, 회",
    price: "정보 확인 필요",
    desc: "일식 꼬치와 회 메뉴가 소개된 곳.",
    link: "",
    image: ""
  },
  {
    name: "복성루 훠궈성",
    area: "금정",
    category: "중식",
    menu: "훠궈",
    price: "정보 확인 필요",
    desc: "중국식 훠궈 메뉴를 찾을 때 확인해 보세요.",
    link: "",
    image: ""
  },
  {
    name: "대구생막창이야기",
    area: "산본",
    category: "고기",
    menu: "막창",
    price: "정보 확인 필요",
    desc: "막창 전문점.",
    link: "",
    image: ""
  },
  {
    name: "신화룡양꼬치",
    area: "금정",
    category: "고기",
    menu: "양꼬치, 꿔바로우",
    price: "정보 확인 필요",
    desc: "양꼬치와 중국식 요리 메뉴가 소개된 곳.",
    link: "",
    image: ""
  },
  {
    name: "우정식당",
    area: "금정",
    category: "한식",
    menu: "동태탕",
    price: "정보 확인 필요",
    desc: "동태탕 메뉴로 알려진 한식당.",
    link: "",
    image: ""
  },
  {
    name: "태조순대",
    area: "산본",
    category: "한식",
    menu: "순대국",
    price: "정보 확인 필요",
    desc: "순대와 국밥 메뉴를 찾을 때 확인해 보세요.",
    link: "",
    image: ""
  },
  {
    name: "보리서리",
    area: "금정",
    category: "한식",
    menu: "보리밥정식",
    price: "정보 확인 필요",
    desc: "보리밥 정식 메뉴가 소개된 한식당.",
    link: "",
    image: ""
  },
  {
    name: "미술관전",
    area: "금정",
    category: "한식",
    menu: "전, 육전",
    price: "정보 확인 필요",
    desc: "전 요리와 육전 메뉴가 소개된 곳.",
    link: "",
    image: ""
  },
  {
    name: "목돈72 군포산본점",
    area: "금정",
    category: "고기",
    menu: "목살, 삼겹살",
    price: "정보 확인 필요",
    desc: "돼지고기 구이 전문점.",
    link: "",
    image: ""
  },
  {
    name: "고기도리 금정점",
    area: "금정",
    category: "한식",
    menu: "순대국",
    price: "정보 확인 필요",
    desc: "순댓국 메뉴가 소개된 식당.",
    link: "",
    image: ""
  },
  {
    name: "광명대창집 산본점",
    area: "산본",
    category: "고기",
    menu: "곱창, 막창, 대창",
    price: "정보 확인 필요",
    desc: "곱창과 대창 구이 전문점.",
    link: "",
    image: ""
  },
  {
    name: "두툼돈288 금정역점",
    area: "금정",
    category: "고기",
    menu: "목살, 삼겹살",
    price: "정보 확인 필요",
    desc: "돼지고기 구이 전문점.",
    link: "",
    image: ""
  },
  {
    name: "동양솥밥 산본점",
    area: "산본",
    category: "한식",
    menu: "솥밥",
    price: "정보 확인 필요",
    desc: "다양한 솥밥 메뉴가 소개된 식당.",
    link: "",
    image: ""
  },
  {
    name: "더돌판 산본점",
    area: "산본",
    category: "한식",
    menu: "오징어볶음, 제육볶음",
    price: "정보 확인 필요",
    desc: "돌판 볶음 요리와 식사 메뉴를 즐길 수 있는 곳.",
    link: "",
    image: ""
  },
  {
    name: "하이하이스낵바 금정역점",
    area: "금정",
    category: "분식",
    menu: "정보 확인 필요",
    price: "정보 확인 필요",
    desc: "상세 메뉴는 지도에서 확인해 주세요.",
    link: "",
    image: ""
  },
  {
    name: "라홍방마라탕 산본역점",
    area: "산본",
    category: "중식",
    menu: "마라탕",
    price: "정보 확인 필요",
    desc: "마라탕 전문점.",
    link: "",
    image: ""
  },

  // ===== 군포 =====
  {
    name: "군포식당",
    area: "군포",
    category: "한식",
    menu: "설렁탕, 양지탕",
    price: "정보 확인 필요",
    desc: "오래 알려진 설렁탕 전문 식당.",
    link: "",
    image: ""
  },
  {
    name: "수리산두꺼비",
    area: "군포",
    category: "한식",
    menu: "청국장, 콩탕",
    price: "정보 확인 필요",
    desc: "청국장과 콩 요리로 알려진 한식당.",
    link: "",
    image: ""
  },
  {
    name: "주막보리밥 군포점",
    area: "군포",
    category: "한식",
    menu: "보리밥, 털레기수제비",
    price: "정보 확인 필요",
    desc: "보리밥과 수제비 메뉴를 즐길 수 있는 곳.",
    link: "",
    image: ""
  },
  {
    name: "어부네코다리조림 군포본점",
    area: "군포",
    category: "한식",
    menu: "코다리조림",
    price: "정보 확인 필요",
    desc: "코다리조림 전문점.",
    link: "",
    image: ""
  },
  {
    name: "일품맛소 본점",
    area: "군포",
    category: "고기",
    menu: "소고기 구이",
    price: "정보 확인 필요",
    desc: "소고기 구이 전문점.",
    link: "",
    image: ""
  },
  {
    name: "한세대시골집",
    area: "군포",
    category: "한식",
    menu: "백반, 정식",
    price: "정보 확인 필요",
    desc: "한식 식사와 정식 메뉴가 소개된 곳.",
    link: "",
    image: ""
  },
  {
    name: "숯향기",
    area: "군포",
    category: "고기",
    menu: "돼지갈비, 삼겹살",
    price: "정보 확인 필요",
    desc: "숯불 돼지고기 구이 전문점.",
    link: "",
    image: ""
  },
  {
    name: "저잣거리",
    area: "군포",
    category: "고기",
    menu: "돼지고기 구이",
    price: "정보 확인 필요",
    desc: "돼지고기 구이 메뉴가 소개된 식당.",
    link: "",
    image: ""
  },
  {
    name: "정연성의탕앤찜",
    area: "군포",
    category: "한식",
    menu: "민물매운탕, 어죽",
    price: "정보 확인 필요",
    desc: "매운탕과 어죽 메뉴를 즐길 수 있는 곳.",
    link: "",
    image: ""
  },
  {
    name: "전주감자탕 군포당동점",
    area: "군포",
    category: "한식",
    menu: "감자탕, 뼈해장국",
    price: "정보 확인 필요",
    desc: "감자탕과 뼈해장국 전문점.",
    link: "",
    image: ""
  },
  {
    name: "반월옥",
    area: "군포",
    category: "한식",
    menu: "설렁탕, 갈비탕",
    price: "정보 확인 필요",
    desc: "탕 요리 메뉴가 소개된 식당.",
    link: "",
    image: ""
  },
  {
    name: "평화분식",
    area: "금정",
    category: "분식",
    menu: "김밥",
    price: "정보 확인 필요",
    desc: "김밥과 분식 메뉴를 찾을 때 확인해 보세요.",
    link: "",
    image: ""
  },
  {
    name: "민성베이커리",
    area: "군포",
    category: "카페",
    menu: "빵",
    price: "정보 확인 필요",
    desc: "베이커리 메뉴를 판매하는 곳.",
    link: "",
    image: ""
  },
  {
    name: "빵가득한집",
    area: "군포",
    category: "카페",
    menu: "빵",
    price: "정보 확인 필요",
    desc: "빵과 베이커리 메뉴를 판매하는 곳.",
    link: "",
    image: ""
  }
];
 {
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
