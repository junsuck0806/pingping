<style>
#pingping-alcohol-guide{--ag-bg:#080b12;--ag-card:#111827;--ag-line:#263246;--ag-text:#eef4ff;--ag-muted:#aab7ca;--ag-cyan:#72efff;--ag-pink:#ff78b8;box-sizing:border-box;background:var(--ag-bg);color:var(--ag-text);padding:clamp(18px,3vw,34px);border:1px solid #202d40;border-radius:22px;font-family:inherit;line-height:1.55}
#pingping-alcohol-guide *{box-sizing:border-box}
#pingping-alcohol-guide .ag-eyebrow{color:var(--ag-cyan);letter-spacing:.14em;font-size:.78rem;font-weight:800;text-transform:uppercase}
#pingping-alcohol-guide .ag-title{margin:.35rem 0 .55rem;font-size:clamp(1.6rem,3vw,2.35rem);line-height:1.2}
#pingping-alcohol-guide .ag-intro{color:var(--ag-muted);max-width:850px;margin:0 0 1.2rem}
#pingping-alcohol-guide .ag-statrow{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px}
#pingping-alcohol-guide .ag-stat{border:1px solid var(--ag-line);background:#0d1420;border-radius:999px;padding:6px 11px;color:#d9e7f7;font-size:.86rem}
#pingping-alcohol-guide .ag-stat strong{color:var(--ag-cyan)}
#pingping-alcohol-guide .ag-controls{display:grid;grid-template-columns:minmax(190px,2fr) repeat(3,minmax(130px,1fr));gap:10px;margin:18px 0 14px}
#pingping-alcohol-guide .ag-controls input,#pingping-alcohol-guide .ag-controls select{width:100%;min-width:0;background:#0c1320;color:var(--ag-text);border:1px solid #344156;border-radius:11px;padding:11px 12px;font:inherit}
#pingping-alcohol-guide .ag-controls input:focus,#pingping-alcohol-guide .ag-controls select:focus{outline:2px solid #2a8fa3;outline-offset:1px}
#pingping-alcohol-guide .ag-results{color:var(--ag-muted);font-size:.9rem;margin:8px 0 12px}
#pingping-alcohol-guide .ag-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
#pingping-alcohol-guide .ag-card{display:flex;flex-direction:column;min-width:0;border:1px solid var(--ag-line);border-radius:15px;background:linear-gradient(165deg,#121c2b,#0d121c);padding:15px;transition:transform .15s,border-color .15s}
#pingping-alcohol-guide .ag-card:hover{transform:translateY(-2px);border-color:#3f8392}
#pingping-alcohol-guide .ag-chiprow{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:9px}
#pingping-alcohol-guide .ag-chip{font-size:.75rem;border-radius:999px;padding:4px 8px;border:1px solid #34445b;color:#c8d8ec;background:#101a29}
#pingping-alcohol-guide .ag-chip.ag-accent{color:var(--ag-cyan);border-color:#285a68;background:#10242d}
#pingping-alcohol-guide .ag-card h3{font-size:1.06rem;line-height:1.35;margin:0 0 7px;overflow-wrap:anywhere}
#pingping-alcohol-guide .ag-menu{color:#e2c2db;font-size:.88rem;margin:0 0 8px}
#pingping-alcohol-guide .ag-reason{color:#c4cfde;font-size:.9rem;margin:0 0 12px;flex:1}
#pingping-alcohol-guide .ag-price{color:#91a2ba;font-size:.79rem;margin:0 0 11px}
#pingping-alcohol-guide .ag-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}
#pingping-alcohol-guide .ag-links a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:9px;padding:8px 10px;font-size:.83rem;font-weight:700;border:1px solid #34445b;color:#eaf2ff;background:#151f2d}
#pingping-alcohol-guide .ag-links a:first-child{border-color:#2b6e7d;color:var(--ag-cyan)}
#pingping-alcohol-guide .ag-links a:hover{border-color:var(--ag-pink);color:#fff}
#pingping-alcohol-guide .ag-empty{grid-column:1/-1;border:1px dashed #40506a;border-radius:14px;padding:24px;text-align:center;color:var(--ag-muted)}
#pingping-alcohol-guide .ag-source{margin:20px 0 0;padding-top:14px;border-top:1px solid var(--ag-line);color:var(--ag-muted);font-size:.82rem}
#pingping-alcohol-guide .ag-source a{color:var(--ag-cyan)}
@media(max-width:900px){#pingping-alcohol-guide .ag-controls{grid-template-columns:repeat(2,minmax(0,1fr))}#pingping-alcohol-guide .ag-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){#pingping-alcohol-guide{padding:16px;border-radius:16px}#pingping-alcohol-guide .ag-controls{grid-template-columns:1fr}#pingping-alcohol-guide .ag-grid{grid-template-columns:1fr}}
</style>

<section id="pingping-alcohol-guide" aria-labelledby="pingping-alcohol-title">
  <div class="ag-eyebrow">PINGPING NIGHT GUIDE · GUNPO</div>
  <h2 class="ag-title" id="pingping-alcohol-title">🍻 산본·금정 술집 가이드</h2>
  <p class="ag-intro">학생 모임에서 고르기 쉽게 생맥주·치맥, 이자카야, 포차, 전·막걸리, 칵테일·와인바 후보를 모았어요. 가격이나 별점을 추측해 매기지 않고, 지도에서 최신 메뉴·영업 여부를 확인할 수 있게 연결했어요.</p>
  <div class="ag-statrow"><span class="ag-stat">조사 후보 <strong id="ag-total">72곳</strong></span><span class="ag-stat">산본 중심 · 금정역 인근 포함</span><span class="ag-stat">가격/영업 정보는 방문 전 확인</span></div>
  <div class="ag-controls">
    <input id="ag-search" type="search" placeholder="가게·안주·분위기 검색" aria-label="가게, 안주, 분위기 검색">
    <select id="ag-area" aria-label="지역 필터"><option value="전체">전체 지역</option><option>산본</option><option>금정</option><option>군포·인근</option></select>
    <select id="ag-type" aria-label="종류 필터"><option value="전체">전체 종류</option></select>
    <select id="ag-tag" aria-label="방문 목적 필터"><option value="전체">전체 목적</option></select>
  </div>
  <p id="ag-results" class="ag-results" aria-live="polite">가게 목록을 불러오는 중…</p>
  <div id="ag-grid" class="ag-grid"></div>
  <p class="ag-source">자료 기준: 다이닝코드 검색 결과(<a href="https://www.diningcode.com/list.dc?query=%EC%82%B0%EB%B3%B8%EC%97%AD+%EB%A7%A5%EC%A3%BC" target="_blank" rel="noopener">산본역 맥주</a> · <a href="https://www.diningcode.com/list.dc?query=%EC%82%B0%EB%B3%B8+%ED%8E%8D" target="_blank" rel="noopener">산본 펍</a> · <a href="https://www.diningcode.com/list.dc?query=%EC%82%B0%EB%B3%B8+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC" target="_blank" rel="noopener">산본 이자카야</a> · <a href="https://www.diningcode.com/list.dc?query=%EA%B5%B0%ED%8F%AC%EC%82%B0%EB%B3%B8+%EC%88%A0%EC%A7%91" target="_blank" rel="noopener">군포산본 술집</a> · <a href="https://www.diningcode.com/list.dc?query=%EA%B8%88%EC%A0%95%EC%97%AD+%EC%8B%A4%EB%82%B4%ED%8F%AC%EC%B0%A8" target="_blank" rel="noopener">금정역 실내포차</a> · <a href="https://www.diningcode.com/list.dc?query=%EA%B8%88%EC%A0%95%EC%97%AD+%EC%9D%BC%EC%8B%9D%EC%A7%91" target="_blank" rel="noopener">금정역 일식집</a> · <a href="https://www.diningcode.com/list.dc?query=%EA%B5%B0%ED%8F%AC+%ED%8F%AC%EC%9E%A5%EB%A7%88%EC%B0%A8" target="_blank" rel="noopener">군포 포장마차</a>). 이 목록은 방문 후보를 찾기 위한 조사 목록이며 네이버 평점순 랭킹이 아닙니다. 가격·영업시간·주류 구성·업체 상태는 바뀔 수 있으니 방문 전 <a href="https://map.naver.com/" target="_blank" rel="noopener">네이버 지도</a>에서 재확인하세요. 청소년의 주류 구매·음용은 금지됩니다.</p>
</section>

<script>
(function(){
  const data = [
  {
    "name": "비스트로302",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "생맥주·치킨·버거류",
    "tag": "친구 모임",
    "reason": "맥주와 식사형 안주를 함께 고르기 좋은 펍 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "꼬치마요 산본역점 9호점",
    "area": "산본",
    "type": "이자카야",
    "menu": "숯불꼬치·나베·생맥주/하이볼",
    "tag": "가성비 후보",
    "reason": "꼬치와 국물 안주를 나눠 먹는 캐주얼 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "노가리까는오빠",
    "area": "산본",
    "type": "포차·한식주점",
    "menu": "노가리·마른안주·맥주",
    "tag": "2차·가벼운 한잔",
    "reason": "마른안주 중심으로 2차를 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "보드람치킨 산본역점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "치킨·맥주",
    "tag": "친구 모임",
    "reason": "치킨을 중심으로 여러 명이 나눠 먹기 좋은 선택지",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "더블클릭 산본",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "맥주·안주",
    "tag": "가성비 후보",
    "reason": "산본 맥주집 검색에서 확인된 캐주얼 술집 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "영웅싸롱 산본",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "맥주·안주",
    "tag": "친구 모임",
    "reason": "맥주 중심으로 친구들과 모이기 좋은 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "썬더치킨 산본",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "치킨·맥주",
    "tag": "가성비 후보",
    "reason": "치킨과 맥주 조합을 찾을 때 비교할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "감탄계숯불치킨 군포산본점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "숯불치킨·맥주",
    "tag": "친구 모임",
    "reason": "숯불치킨을 나눠 먹는 캐주얼한 모임 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "브롱스 산본점",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "수제맥주",
    "tag": "맥주 취향 탐색",
    "reason": "일반 생맥주 외에 수제맥주를 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "둘둘치킨 산본점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "치킨·맥주",
    "tag": "친구 모임",
    "reason": "여럿이 치킨 한두 가지를 나누는 자리에 무난한 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "띵크무드 산본",
    "area": "산본",
    "type": "칵테일·와인",
    "menu": "위스키·펍",
    "tag": "분위기/데이트",
    "reason": "맥주집보다 조용한 바 분위기를 원할 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "삼통치킨 산본점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "치킨·맥주",
    "tag": "친구 모임",
    "reason": "치킨과 주류를 함께 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "삼덕통닭 산본역점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "통닭·맥주",
    "tag": "친구 모임",
    "reason": "통닭을 중심으로 한 치맥 모임 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "역전할머니맥주 군포산본점",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "살얼음맥주·안주",
    "tag": "가성비 후보",
    "reason": "가볍게 맥주와 안주를 즐기는 캐주얼한 2차 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "아웃닭 산본역점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "치킨·맥주",
    "tag": "친구 모임",
    "reason": "치킨류를 함께 나누기 좋은 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "금별맥주 산본역점",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "생맥주·피자류 안주",
    "tag": "가성비 후보",
    "reason": "맥주와 대중적인 안주 조합을 찾을 때 비교할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "화락바베큐치킨 군포산본점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "바베큐치킨·맥주",
    "tag": "친구 모임",
    "reason": "바베큐풍 치킨과 맥주를 함께 먹는 자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "크래프트한스 산본점",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "수제맥주·펍 안주",
    "tag": "맥주 취향 탐색",
    "reason": "수제맥주 종류를 경험하고 싶을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "영계소문옛날통닭 산본점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "옛날통닭·맥주",
    "tag": "가성비 후보",
    "reason": "옛날통닭과 맥주를 찾는 캐주얼한 선택지",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "타코비 산본점",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "타코야끼·맥주",
    "tag": "2차·가벼운 한잔",
    "reason": "간단한 타코야끼 안주 중심으로 들를 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "페어링키친 산본",
    "area": "산본",
    "type": "칵테일·와인",
    "menu": "와인바·식사 메뉴",
    "tag": "분위기/데이트",
    "reason": "식사와 와인을 함께 계획할 때 후보; 예산은 메뉴판 확인 권장",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "홀리데이 리믹스 산본",
    "area": "산본",
    "type": "칵테일·와인",
    "menu": "와인바·펍",
    "tag": "분위기/데이트",
    "reason": "분위기 있는 2차 장소로 검색되는 후보; 가격 확인 필요",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "지금보고싶다 산본점",
    "area": "산본",
    "type": "포차·한식주점",
    "menu": "퓨전 안주·주류",
    "tag": "친구 모임",
    "reason": "여럿이 여러 안주를 고르는 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "시장을 여는 사람들 산본",
    "area": "산본",
    "type": "포차·한식주점",
    "menu": "술집 안주",
    "tag": "친구 모임",
    "reason": "산본 술집 검색에서 확인된 캐주얼 주점 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "오늘도맑음 산본",
    "area": "산본",
    "type": "포차·한식주점",
    "menu": "술집 안주·맥주",
    "tag": "분위기/데이트",
    "reason": "분위기 있는 안주 중심 술집 후보; 가격·운영 확인 필요",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "해야해야 산본",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "떡볶이·분식 안주",
    "tag": "가성비 후보",
    "reason": "분식 계열 안주를 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "서유기 산본",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "생맥주·안주",
    "tag": "가성비 후보",
    "reason": "맥주와 간단한 안주를 찾을 때 비교할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "고릴라펍",
    "area": "산본",
    "type": "펍·생맥주",
    "menu": "맥주·피자·감자튀김",
    "tag": "2차·가벼운 한잔",
    "reason": "맥주와 피자·감자튀김 류를 찾는 캐주얼 펍 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "호박주막",
    "area": "산본",
    "type": "포차·한식주점",
    "menu": "한식 안주·막걸리/하이볼",
    "tag": "친구 모임",
    "reason": "한식 안주 선택 폭과 단체 모임을 함께 고려할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "교동전선생 군포산본점",
    "area": "산본",
    "type": "전·막걸리",
    "menu": "모둠전·막걸리",
    "tag": "전통주 입문",
    "reason": "전과 막걸리 조합을 경험하고 싶을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "종로빈대떡 산본역점",
    "area": "산본",
    "type": "전·막걸리",
    "menu": "빈대떡·파전·막걸리",
    "tag": "가성비 후보",
    "reason": "전과 막걸리를 나눠 먹는 전통적인 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "탁사발얼음막걸리",
    "area": "산본",
    "type": "전·막걸리",
    "menu": "막걸리·전/볶음 안주",
    "tag": "전통주 입문",
    "reason": "막걸리 중심 주점을 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "대구생막창이야기 첫번째",
    "area": "산본",
    "type": "고기·구이주점",
    "menu": "생막창·주류",
    "tag": "안주 중심",
    "reason": "고기 안주를 중심으로 술자리를 잡을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "아울 산본",
    "area": "산본",
    "type": "칵테일·와인",
    "menu": "칵테일바",
    "tag": "분위기/데이트",
    "reason": "조용한 칵테일바 분위기를 찾을 때 후보; 1인 예산은 확인 권장",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "오드 산본",
    "area": "산본",
    "type": "칵테일·와인",
    "menu": "와인·칵테일·음악 감상",
    "tag": "분위기/데이트",
    "reason": "음악과 함께 조용히 마실 장소를 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "춘 산본점",
    "area": "산본",
    "type": "이자카야",
    "menu": "사시미·맥주·이자카야 안주",
    "tag": "친구 모임",
    "reason": "일본풍 안주와 술을 함께 즐기는 모임 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "구우젠 산본",
    "area": "산본",
    "type": "이자카야",
    "menu": "꼬치구이·해산물 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "꼬치류 안주를 찾을 때 확인할 이자카야 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "꼬치리다 산본",
    "area": "산본",
    "type": "이자카야",
    "menu": "꼬치류",
    "tag": "2차·가벼운 한잔",
    "reason": "꼬치류를 중심으로 간단히 한잔하려는 경우 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "영춘상회 산본",
    "area": "산본",
    "type": "포차·한식주점",
    "menu": "다양한 안주·단체 모임",
    "tag": "친구 모임",
    "reason": "단체로 모일 공간을 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "손마스로 산본",
    "area": "산본",
    "type": "치맥·간단안주",
    "menu": "통닭·생맥주",
    "tag": "가성비 후보",
    "reason": "통닭과 생맥주를 함께 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "토끼굴 금정역",
    "area": "금정",
    "type": "칵테일·와인",
    "menu": "칵테일·펍",
    "tag": "분위기/데이트",
    "reason": "칵테일 위주로 다른 분위기를 원할 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "BistroG 금정역",
    "area": "금정",
    "type": "칵테일·와인",
    "menu": "와인바·펍",
    "tag": "분위기/데이트",
    "reason": "금정역 와인·펍 검색에서 확인된 후보; 가격 확인 필요",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "누구나홀딱반한닭 금정역점",
    "area": "금정",
    "type": "치맥·간단안주",
    "menu": "치킨·맥주",
    "tag": "친구 모임",
    "reason": "치킨 메뉴를 중심으로 여러 명이 나눠 먹는 자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "오비베어 금정점",
    "area": "금정",
    "type": "펍·생맥주",
    "menu": "맥주·펍 안주",
    "tag": "가성비 후보",
    "reason": "맥주를 가볍게 즐기는 2차 장소로 검색되는 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "하이하이스낵바 금정역점",
    "area": "금정",
    "type": "이자카야",
    "menu": "일본풍 안주·생맥주",
    "tag": "가성비 후보",
    "reason": "다이닝코드 후기에서 간단한 2차 맥주 후보로 언급됨",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "모토이 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "사시미·국물 안주·하이볼",
    "tag": "친구 모임",
    "reason": "회와 국물 안주를 함께 찾을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "키무 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "사시미·나베·튀김",
    "tag": "친구 모임",
    "reason": "일식 안주를 여러 종류로 나누는 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "고르목 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "오코노미야끼·일식 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "일본풍 소규모 이자카야를 찾을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "한주 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "일식 안주·주류",
    "tag": "분위기/데이트",
    "reason": "금정역 인근 분위기형 주점 후보; 메뉴·가격 확인 필요",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "단잔 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "숯불꼬치·생연어사시미",
    "tag": "2차·가벼운 한잔",
    "reason": "꼬치와 사시미를 함께 찾는 이자카야 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "고래전 금정역",
    "area": "금정",
    "type": "전·막걸리",
    "menu": "육전·감자전·전류",
    "tag": "전통주 입문",
    "reason": "전류 안주 중심의 편안한 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "오시오리이 포차 금정역",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "실내포차·오리 안주",
    "tag": "친구 모임",
    "reason": "포차 분위기와 다양한 안주를 찾을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "호호포차",
    "area": "군포·인근",
    "type": "포차·한식주점",
    "menu": "소주·맥주·포차 안주",
    "tag": "가성비 후보",
    "reason": "동네형 포차 분위기를 원하는 경우 후보; 위치·운영 확인 필요",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "깡우동 군포금정역점",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "얼큰우동·어묵우동·주류",
    "tag": "가성비 후보",
    "reason": "늦은 시간 우동과 함께 가볍게 한잔하는 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "그날들 금정역점",
    "area": "금정",
    "type": "이자카야",
    "menu": "사시미·패키지 안주",
    "tag": "친구 모임",
    "reason": "일식 안주와 주류를 함께 찾을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "솥뚜껑파전 금정본점",
    "area": "금정",
    "type": "전·막걸리",
    "menu": "솥뚜껑파전",
    "tag": "전통주 입문",
    "reason": "전과 막걸리 조합을 즐기는 술자리 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "명품압구정닭꼬치 금정1호점",
    "area": "금정",
    "type": "꼬치·양꼬치",
    "menu": "닭꼬치",
    "tag": "2차·가벼운 한잔",
    "reason": "닭꼬치와 간단한 술자리를 찾을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "거미포차 금정역",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "포차 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "금정역 실내포차 검색에서 확인된 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "감성술집 금정역",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "안주·술집",
    "tag": "친구 모임",
    "reason": "금정역 모임형 주점 검색에서 확인된 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "지노포차 금정역",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "포차 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "캐주얼한 포차를 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "대포 금정역",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "포차형 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "금정역 포차 검색에서 확인된 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "갯바위꼼장어세꼬시 금정역",
    "area": "금정",
    "type": "고기·구이주점",
    "menu": "꼼장어·세꼬시",
    "tag": "안주 중심",
    "reason": "해산물·구이류 안주를 원하는 경우 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "다닭다닭 군포점",
    "area": "군포·인근",
    "type": "꼬치·양꼬치",
    "menu": "닭꼬치",
    "tag": "2차·가벼운 한잔",
    "reason": "닭꼬치 중심의 간단한 안주 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "도깨비가마솥통닭 금정역",
    "area": "금정",
    "type": "치맥·간단안주",
    "menu": "가마솥통닭·맥주",
    "tag": "친구 모임",
    "reason": "통닭과 맥주를 함께 찾을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "히읗 금정역",
    "area": "금정",
    "type": "펍·생맥주",
    "menu": "맥주·안주",
    "tag": "2차·가벼운 한잔",
    "reason": "금정역 맥주집 검색에서 확인된 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "포차의신 금정역",
    "area": "금정",
    "type": "포차·한식주점",
    "menu": "야끼소바·술집 안주",
    "tag": "친구 모임",
    "reason": "야끼소바 등 안주 중심 술집 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "요미남 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "스키야키·일식 안주",
    "tag": "친구 모임",
    "reason": "전골형 일식 안주를 나눠 먹는 모임 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "치치 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "쿠시카츠·일식 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "튀김 꼬치류를 찾을 때 확인할 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "이누 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "오코노미야끼·명란크림파스타",
    "tag": "친구 모임",
    "reason": "일본풍 요리 안주를 즐기고 싶을 때 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "갓포야끼 금정역",
    "area": "금정",
    "type": "이자카야",
    "menu": "꼬치·이자카야 안주",
    "tag": "2차·가벼운 한잔",
    "reason": "2차용 꼬치 이자카야로 검색되는 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "신화룡양꼬치 금정역점",
    "area": "금정",
    "type": "꼬치·양꼬치",
    "menu": "양꼬치",
    "tag": "친구 모임",
    "reason": "양꼬치와 술을 함께 먹는 모임 후보",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  },
  {
    "name": "역전할머니맥주 군포금정역점",
    "area": "금정",
    "type": "펍·생맥주",
    "menu": "맥주·안주",
    "tag": "가성비 후보",
    "reason": "캐주얼한 생맥주 2차 후보; 최신 매장 운영 확인 필요",
    "priceNote": "최신 메뉴판·주류 가격 확인 필요",
    "statusNote": "업체명은 디렉터리 검색 결과 기준; 영업 여부는 방문 전 재확인",
    "sources": [
      "DiningCode 지역/업종 검색",
      "네이버 지도 업체명 검색"
    ]
  }
];
  const root = document.getElementById('pingping-alcohol-guide');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';
  const search = root.querySelector('#ag-search');
  const area = root.querySelector('#ag-area');
  const type = root.querySelector('#ag-type');
  const tag = root.querySelector('#ag-tag');
  const grid = root.querySelector('#ag-grid');
  const resultLabel = root.querySelector('#ag-results');
  const totalLabel = root.querySelector('#ag-total');
  totalLabel.textContent = data.length + '곳';
  const types = [...new Set(data.map(x => x.type))].sort((a,b)=>a.localeCompare(b,'ko'));
  const tags = [...new Set(data.map(x => x.tag))].sort((a,b)=>a.localeCompare(b,'ko'));
  types.forEach(v => type.add(new Option(v, v)));
  tags.forEach(v => tag.add(new Option(v, v)));
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function cards(){
    const q = search.value.trim().toLocaleLowerCase('ko');
    const list = data.filter(x => (area.value === '전체' || x.area === area.value)
      && (type.value === '전체' || x.type === type.value)
      && (tag.value === '전체' || x.tag === tag.value)
      && (!q || [x.name,x.area,x.type,x.menu,x.tag,x.reason].join(' ').toLocaleLowerCase('ko').includes(q)));
    resultLabel.textContent = '검색 결과 ' + list.length + '곳 · 총 조사 후보 ' + data.length + '곳';
    if(!list.length){ grid.innerHTML = '<div class="ag-empty">조건에 맞는 가게가 없어요. 검색어나 필터를 바꿔보세요.</div>'; return; }
    grid.innerHTML = list.map(x => {
      const mapUrl = 'https://map.naver.com/p/search/' + encodeURIComponent(x.area + ' ' + x.name);
      const dcUrl = 'https://www.diningcode.com/list.dc?query=' + encodeURIComponent(x.name + ' ' + x.area);
      return `<article class="ag-card">
        <div class="ag-chiprow"><span class="ag-chip">${esc(x.area)}</span><span class="ag-chip">${esc(x.type)}</span><span class="ag-chip ag-accent">${esc(x.tag)}</span></div>
        <h3>${esc(x.name)}</h3>
        <p class="ag-menu">추천 포인트: ${esc(x.menu)}</p>
        <p class="ag-reason">${esc(x.reason)}</p>
        <p class="ag-price">가격·운영: 방문 전 확인 필요</p>
        <div class="ag-links"><a href="${mapUrl}" target="_blank" rel="noopener">네이버 지도 ↗</a><a href="${dcUrl}" target="_blank" rel="noopener">다이닝코드 ↗</a></div>
      </article>`;
    }).join('');
  }
  [search, area, type, tag].forEach(el => el.addEventListener('input', cards));
  [area, type, tag].forEach(el => el.addEventListener('change', cards));
  cards();
})();
</script>
