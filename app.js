const shrines = [
  {
    id: "hokkaido-jingu",
    name: "北海道神宮",
    province: "蝦夷国新一宮",
    prefecture: "北海道",
    area: "北海道・東北",
    areaKey: "hokkaido-tohoku",
    address: "北海道札幌市中央区",
    memo: "円山公園に隣接する北海道総鎮守。",
    lat: 43.054,
    lon: 141.3077
  },
  {
    id: "iwakiyama",
    name: "岩木山神社",
    province: "津軽国",
    prefecture: "青森",
    area: "北海道・東北",
    areaKey: "hokkaido-tohoku",
    address: "青森県弘前市",
    memo: "岩木山を望む津軽一宮。",
    lat: 40.626,
    lon: 140.303
  },
  {
    id: "komagata",
    name: "駒形神社",
    province: "陸中国",
    prefecture: "岩手",
    area: "北海道・東北",
    areaKey: "hokkaido-tohoku",
    address: "岩手県奥州市",
    memo: "陸中の一宮として知られる古社。",
    lat: 39.1394,
    lon: 141.1396
  },
  {
    id: "shiogama",
    name: "鹽竈神社",
    province: "陸奥国",
    prefecture: "宮城",
    area: "北海道・東北",
    areaKey: "hokkaido-tohoku",
    address: "宮城県塩竈市",
    memo: "陸奥国一宮。志波彦神社と同じ境内で巡れます。",
    lat: 38.3187,
    lon: 141.0149
  },
  {
    id: "chokaisan",
    name: "鳥海山大物忌神社",
    province: "出羽国",
    prefecture: "山形",
    area: "北海道・東北",
    areaKey: "hokkaido-tohoku",
    address: "山形県飽海郡遊佐町",
    memo: "鳥海山を神体山とする出羽一宮。",
    lat: 39.074,
    lon: 139.88
  },
  {
    id: "isasumi",
    name: "伊佐須美神社",
    province: "岩代国",
    prefecture: "福島",
    area: "北海道・東北",
    areaKey: "hokkaido-tohoku",
    address: "福島県大沼郡会津美里町",
    memo: "会津の巡拝で寄りたい岩代一宮。",
    lat: 37.4579,
    lon: 139.8413
  },
  {
    id: "kashima",
    name: "鹿島神宮",
    province: "常陸国",
    prefecture: "茨城",
    area: "関東",
    areaKey: "kanto",
    address: "茨城県鹿嶋市",
    memo: "東国三社の一社。常陸国一宮。",
    lat: 35.9689,
    lon: 140.6313
  },
  {
    id: "futarayama",
    name: "宇都宮二荒山神社",
    province: "下野国",
    prefecture: "栃木",
    area: "関東",
    areaKey: "kanto",
    address: "栃木県宇都宮市",
    memo: "宇都宮中心部にある下野一宮。",
    lat: 36.5621,
    lon: 139.8848
  },
  {
    id: "nukisaki",
    name: "一之宮貫前神社",
    province: "上野国",
    prefecture: "群馬",
    area: "関東",
    areaKey: "kanto",
    address: "群馬県富岡市",
    memo: "参道を下って社殿へ向かう配置が印象的。",
    lat: 36.2604,
    lon: 138.8918
  },
  {
    id: "hikawa",
    name: "武蔵一宮氷川神社",
    province: "武蔵国",
    prefecture: "埼玉",
    area: "関東",
    areaKey: "kanto",
    address: "埼玉県さいたま市大宮区",
    memo: "長い参道と大宮の地名でも知られる武蔵一宮。",
    lat: 35.9168,
    lon: 139.6308
  },
  {
    id: "tamasaki",
    name: "玉前神社",
    province: "上総国",
    prefecture: "千葉",
    area: "関東",
    areaKey: "kanto",
    address: "千葉県長生郡一宮町",
    memo: "外房の旅程に組み込みやすい上総一宮。",
    lat: 35.3738,
    lon: 140.3925
  },
  {
    id: "katori",
    name: "香取神宮",
    province: "下総国",
    prefecture: "千葉",
    area: "関東",
    areaKey: "kanto",
    address: "千葉県香取市",
    memo: "東国三社の一社。鹿島神宮とあわせて巡れます。",
    lat: 35.8875,
    lon: 140.5296
  },
  {
    id: "samukawa",
    name: "寒川神社",
    province: "相模国",
    prefecture: "神奈川",
    area: "関東",
    areaKey: "kanto",
    address: "神奈川県高座郡寒川町",
    memo: "八方除で知られる相模国一宮。",
    lat: 35.3798,
    lon: 139.3833
  },
  {
    id: "suwa",
    name: "諏訪大社 上社本宮",
    province: "信濃国",
    prefecture: "長野",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "長野県諏訪市",
    memo: "四社を巡る旅程にも展開できる信濃一宮。",
    lat: 36.046,
    lon: 138.118
  },
  {
    id: "asama-yamanashi",
    name: "浅間神社",
    province: "甲斐国",
    prefecture: "山梨",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "山梨県笛吹市",
    memo: "甲斐国一宮。桃畑の多い笛吹エリアにあります。",
    lat: 35.6471,
    lon: 138.6945
  },
  {
    id: "yahiko",
    name: "彌彦神社",
    province: "越後国",
    prefecture: "新潟",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "新潟県西蒲原郡弥彦村",
    memo: "越後国一宮。弥彦山とあわせて巡れます。",
    lat: 37.7061,
    lon: 138.8267
  },
  {
    id: "shirayama",
    name: "白山比咩神社",
    province: "加賀国",
    prefecture: "石川",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "石川県白山市",
    memo: "全国白山神社の総本宮として知られる加賀一宮。",
    lat: 36.4348,
    lon: 136.633
  },
  {
    id: "kehi",
    name: "氣比神宮",
    province: "越前国",
    prefecture: "福井",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "福井県敦賀市",
    memo: "敦賀駅からも巡りやすい越前一宮。",
    lat: 35.6537,
    lon: 136.074
  },
  {
    id: "fujisan-hongu",
    name: "富士山本宮浅間大社",
    province: "駿河国",
    prefecture: "静岡",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "静岡県富士宮市",
    memo: "富士山信仰の中心的な神社。湧玉池も見どころ。",
    lat: 35.2247,
    lon: 138.6109
  },
  {
    id: "mishima",
    name: "三嶋大社",
    province: "伊豆国",
    prefecture: "静岡",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "静岡県三島市",
    memo: "三島駅からアクセスしやすい伊豆一宮。",
    lat: 35.1225,
    lon: 138.9187
  },
  {
    id: "masumida",
    name: "真清田神社",
    province: "尾張国",
    prefecture: "愛知",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "愛知県一宮市",
    memo: "市名にもつながる尾張国一宮。",
    lat: 35.305,
    lon: 136.8026
  },
  {
    id: "toga",
    name: "砥鹿神社",
    province: "三河国",
    prefecture: "愛知",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "愛知県豊川市",
    memo: "三河一宮。本宮山奥宮とあわせた参拝もできます。",
    lat: 34.8633,
    lon: 137.3846
  },
  {
    id: "nangu",
    name: "南宮大社",
    province: "美濃国",
    prefecture: "岐阜",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "岐阜県不破郡垂井町",
    memo: "美濃国一宮。朱塗りの社殿が印象的。",
    lat: 35.37,
    lon: 136.5288
  },
  {
    id: "tsubaki",
    name: "椿大神社",
    province: "伊勢国",
    prefecture: "三重",
    area: "甲信越・北陸・東海",
    areaKey: "chubu",
    address: "三重県鈴鹿市",
    memo: "伊勢国一宮の一社として巡られる猿田彦大神の本宮。",
    lat: 34.9581,
    lon: 136.461
  },
  {
    id: "kamigamo",
    name: "賀茂別雷神社",
    province: "山城国",
    prefecture: "京都",
    area: "関西",
    areaKey: "kansai",
    address: "京都府京都市北区",
    memo: "上賀茂神社。山城一宮の一社。",
    lat: 35.059,
    lon: 135.7525
  },
  {
    id: "shimogamo",
    name: "賀茂御祖神社",
    province: "山城国",
    prefecture: "京都",
    area: "関西",
    areaKey: "kansai",
    address: "京都府京都市左京区",
    memo: "下鴨神社。糺の森とあわせて巡れます。",
    lat: 35.0389,
    lon: 135.7722
  },
  {
    id: "kono",
    name: "籠神社",
    province: "丹後国",
    prefecture: "京都",
    area: "関西",
    areaKey: "kansai",
    address: "京都府宮津市",
    memo: "天橋立とあわせて巡りたい丹後一宮。",
    lat: 35.5834,
    lon: 135.1966
  },
  {
    id: "takebe",
    name: "建部大社",
    province: "近江国",
    prefecture: "滋賀",
    area: "関西",
    areaKey: "kansai",
    address: "滋賀県大津市",
    memo: "瀬田川沿いに鎮座する近江一宮。",
    lat: 34.9742,
    lon: 135.9086
  },
  {
    id: "omiwa",
    name: "大神神社",
    province: "大和国",
    prefecture: "奈良",
    area: "関西",
    areaKey: "kansai",
    address: "奈良県桜井市",
    memo: "三輪山をご神体とする大和国一宮。",
    lat: 34.5288,
    lon: 135.853
  },
  {
    id: "sumiyoshi-osaka",
    name: "住吉大社",
    province: "摂津国",
    prefecture: "大阪",
    area: "関西",
    areaKey: "kansai",
    address: "大阪府大阪市住吉区",
    memo: "反橋でも知られる摂津一宮。",
    lat: 34.6124,
    lon: 135.4938
  },
  {
    id: "hiraoka",
    name: "枚岡神社",
    province: "河内国",
    prefecture: "大阪",
    area: "関西",
    areaKey: "kansai",
    address: "大阪府東大阪市",
    memo: "生駒山麓にある河内一宮。",
    lat: 34.6669,
    lon: 135.6515
  },
  {
    id: "izanagi",
    name: "伊弉諾神宮",
    province: "淡路国",
    prefecture: "兵庫",
    area: "関西",
    areaKey: "kansai",
    address: "兵庫県淡路市",
    memo: "淡路島の巡拝で中心に置きたい淡路一宮。",
    lat: 34.4639,
    lon: 134.8532
  },
  {
    id: "iwa",
    name: "伊和神社",
    province: "播磨国",
    prefecture: "兵庫",
    area: "関西",
    areaKey: "kansai",
    address: "兵庫県宍粟市",
    memo: "播磨国一宮。森に包まれた境内です。",
    lat: 35.12,
    lon: 134.6099
  },
  {
    id: "hinokuma",
    name: "日前神宮・國懸神宮",
    province: "紀伊国",
    prefecture: "和歌山",
    area: "関西",
    areaKey: "kansai",
    address: "和歌山県和歌山市",
    memo: "同一境内に二社が並ぶ紀伊一宮。",
    lat: 34.2348,
    lon: 135.191
  },
  {
    id: "izumo",
    name: "出雲大社",
    province: "出雲国",
    prefecture: "島根",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "島根県出雲市",
    memo: "縁結びで知られる出雲国一宮。",
    lat: 35.401,
    lon: 132.685
  },
  {
    id: "kumano-shimane",
    name: "熊野大社",
    province: "出雲国",
    prefecture: "島根",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "島根県松江市",
    memo: "出雲国一宮の一社。出雲大社とあわせて巡れます。",
    lat: 35.4035,
    lon: 133.0639
  },
  {
    id: "kibitsu",
    name: "吉備津神社",
    province: "備中国",
    prefecture: "岡山",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "岡山県岡山市北区",
    memo: "長い回廊が見どころの備中一宮。",
    lat: 34.6729,
    lon: 133.8507
  },
  {
    id: "itsukushima",
    name: "嚴島神社",
    province: "安芸国",
    prefecture: "広島",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "広島県廿日市市宮島町",
    memo: "海上社殿で知られる安芸一宮。",
    lat: 34.296,
    lon: 132.3198
  },
  {
    id: "sumiyoshi-yamaguchi",
    name: "住吉神社",
    province: "長門国",
    prefecture: "山口",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "山口県下関市",
    memo: "長門国一宮。下関の旅程に組み込みやすい神社。",
    lat: 33.9941,
    lon: 130.9583
  },
  {
    id: "ooasahiko",
    name: "大麻比古神社",
    province: "阿波国",
    prefecture: "徳島",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "徳島県鳴門市",
    memo: "阿波国一宮。大麻山の麓に鎮座します。",
    lat: 34.1696,
    lon: 134.502
  },
  {
    id: "tamura",
    name: "田村神社",
    province: "讃岐国",
    prefecture: "香川",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "香川県高松市",
    memo: "讃岐国一宮。高松市内から巡りやすい立地。",
    lat: 34.2886,
    lon: 134.0388
  },
  {
    id: "oyamazumi",
    name: "大山祇神社",
    province: "伊予国",
    prefecture: "愛媛",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "愛媛県今治市大三島町",
    memo: "しまなみ海道で巡れる伊予一宮。",
    lat: 34.248,
    lon: 133.003
  },
  {
    id: "tosa",
    name: "土佐神社",
    province: "土佐国",
    prefecture: "高知",
    area: "中国・四国",
    areaKey: "chugoku-shikoku",
    address: "高知県高知市",
    memo: "しなね様として親しまれる土佐一宮。",
    lat: 33.5938,
    lon: 133.5868
  },
  {
    id: "sumiyoshi-fukuoka",
    name: "住吉神社",
    province: "筑前国",
    prefecture: "福岡",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "福岡県福岡市博多区",
    memo: "博多駅から近い筑前一宮。",
    lat: 33.5853,
    lon: 130.4173
  },
  {
    id: "hakozaki",
    name: "筥崎宮",
    province: "筑前国",
    prefecture: "福岡",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "福岡県福岡市東区",
    memo: "筑前国一宮の一社。博多周辺であわせて巡れます。",
    lat: 33.6159,
    lon: 130.4215
  },
  {
    id: "kora",
    name: "高良大社",
    province: "筑後国",
    prefecture: "福岡",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "福岡県久留米市",
    memo: "筑後国一宮。筑後平野を見渡す高台にあります。",
    lat: 33.3033,
    lon: 130.5574
  },
  {
    id: "usa",
    name: "宇佐神宮",
    province: "豊前国",
    prefecture: "大分",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "大分県宇佐市",
    memo: "全国八幡宮の総本宮として知られる豊前一宮。",
    lat: 33.5257,
    lon: 131.3767
  },
  {
    id: "aso",
    name: "阿蘇神社",
    province: "肥後国",
    prefecture: "熊本",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "熊本県阿蘇市",
    memo: "阿蘇のカルデラ内に鎮座する肥後一宮。",
    lat: 32.947,
    lon: 131.1163
  },
  {
    id: "tsuno",
    name: "都農神社",
    province: "日向国",
    prefecture: "宮崎",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "宮崎県児湯郡都農町",
    memo: "日向国一宮。宮崎沿岸の旅程に置きやすい神社。",
    lat: 32.253,
    lon: 131.559
  },
  {
    id: "kagoshima",
    name: "鹿児島神宮",
    province: "大隅国",
    prefecture: "鹿児島",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "鹿児島県霧島市",
    memo: "大隅国一宮。霧島方面の巡拝とあわせて。",
    lat: 31.747,
    lon: 130.736
  },
  {
    id: "hirakiki",
    name: "枚聞神社",
    province: "薩摩国",
    prefecture: "鹿児島",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "鹿児島県指宿市",
    memo: "開聞岳を望む薩摩国一宮。",
    lat: 31.236,
    lon: 130.642
  },
  {
    id: "naminoue",
    name: "波上宮",
    province: "琉球国新一宮",
    prefecture: "沖縄",
    area: "九州・沖縄",
    areaKey: "kyushu-okinawa",
    address: "沖縄県那覇市",
    memo: "那覇の海辺に鎮座する琉球八社の一社。",
    lat: 26.2202,
    lon: 127.674
  }
];

const dataMeta = {
  sourceUrl: "https://origamijapan.net/origami/2018/07/25/ichinomiya/",
  secondarySourceUrl: "https://www.japanesewiki.com/jp/shrines/%E4%B8%80%E5%AE%AE.html",
  activeRows: shrines.length
};

let map;
let markerLayer;

const state = {
  selectedId: "kashima",
  filter: "all",
  prefecture: "all",
  query: "",
  records: JSON.parse(localStorage.getItem("ichinomiyaRecords") || "{}")
};

const mapEl = document.querySelector("#map");
const shrineList = document.querySelector("#shrineList");
const searchInput = document.querySelector("#searchInput");
const prefectureFilter = document.querySelector("#prefectureFilter");
const visitedToggle = document.querySelector("#visitedToggle");
const noteInput = document.querySelector("#noteInput");
const detailName = document.querySelector("#detailName");
const detailAddress = document.querySelector("#detailAddress");
const detailProvince = document.querySelector("#detailProvince");
const detailPrefecture = document.querySelector("#detailPrefecture");
const detailArea = document.querySelector("#detailArea");
const detailStatus = document.querySelector("#detailStatus");
const visitedCount = document.querySelector("#visitedCount");
const resultCount = document.querySelector("#resultCount");
const dataSource = document.querySelector("#dataSource");

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function recordFor(id) {
  return state.records[id] || { visited: false, note: "" };
}

function saveRecords() {
  localStorage.setItem("ichinomiyaRecords", JSON.stringify(state.records));
}

function isVisible(shrine) {
  const record = recordFor(shrine.id);
  const haystack = `${shrine.name} ${shrine.province} ${shrine.prefecture} ${shrine.area} ${shrine.address} ${shrine.memo} ${record.note}`.toLowerCase();
  const matchesQuery = haystack.includes(state.query.toLowerCase());
  const matchesPrefecture = state.prefecture === "all" || shrine.prefecture === state.prefecture;
  const matchesFilter =
    state.filter === "all" ||
    (state.filter === "visited" && record.visited) ||
    (state.filter === "open" && !record.visited);

  return matchesQuery && matchesPrefecture && matchesFilter;
}

function populatePrefectureFilter() {
  const prefectures = [...new Set(shrines.map((shrine) => shrine.prefecture).filter(Boolean))];
  prefectures.forEach((prefecture) => {
    const option = document.createElement("option");
    option.value = prefecture;
    option.textContent = prefecture;
    prefectureFilter.appendChild(option);
  });
}

function syncSelectedShrine() {
  if (shrines.some((shrine) => shrine.id === state.selectedId && isVisible(shrine))) return;
  state.selectedId = shrines.find(isVisible)?.id || "";
}

function initializeMap() {
  if (!window.L) {
    mapEl.textContent = "地図を読み込めませんでした。通信状態を確認してください。";
    return;
  }

  map = L.map(mapEl, {
    zoomControl: true,
    scrollWheelZoom: true,
    worldCopyJump: true,
    maxBounds: [[20, 118], [48, 150]],
    maxBoundsViscosity: .45
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  markerLayer = window.L.markerClusterGroup
    ? L.markerClusterGroup({
        chunkedLoading: true,
        maxClusterRadius: 42,
        showCoverageOnHover: false,
        spiderfyDistanceMultiplier: 1.2
      }).addTo(map)
    : L.layerGroup().addTo(map);

  map.fitBounds([[24, 121], [46, 146]], { padding: [18, 18] });
}

function markerIcon(shrine, index, record) {
  const classes = [
    "shrine-marker",
    record.visited ? "visited" : "",
    shrine.id === state.selectedId ? "active" : ""
  ].filter(Boolean).join(" ");

  return L.divIcon({
    className: "",
    html: `<div class="${classes}"><span>${index + 1}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34]
  });
}

function popupHtml(shrine, record) {
  const status = record.visited ? "参拝済み" : "未参拝";
  return `<strong>${escapeHtml(shrine.name)}</strong>${escapeHtml(shrine.province)} / ${escapeHtml(shrine.address)}<br>${escapeHtml(status)}`;
}

function renderMarkers() {
  if (!markerLayer) return;

  markerLayer.clearLayers();
  shrines.forEach((shrine, index) => {
    if (!isVisible(shrine)) return;

    const record = recordFor(shrine.id);
    const marker = L.marker([shrine.lat, shrine.lon], {
      icon: markerIcon(shrine, index, record),
      title: shrine.name
    });

    marker.bindPopup(popupHtml(shrine, record));
    marker.on("click", () => selectShrine(shrine.id));
    marker.addTo(markerLayer);
  });
}

function fitVisibleOnMap() {
  if (!map || !window.L) return;

  const visibleShrines = shrines.filter(isVisible);
  if (visibleShrines.length === 0) return;

  if (visibleShrines.length === 1) {
    const shrine = visibleShrines[0];
    map.setView([shrine.lat, shrine.lon], 11, { animate: true });
    return;
  }

  const bounds = L.latLngBounds(visibleShrines.map((shrine) => [shrine.lat, shrine.lon]));
  map.fitBounds(bounds.pad(0.18), {
    animate: true,
    maxZoom: 10,
    padding: [24, 24]
  });
}

function focusShrineOnMap(id) {
  if (!map) return;

  const shrine = shrines.find((item) => item.id === id);
  if (!shrine || !isVisible(shrine)) return;
  map.setView([shrine.lat, shrine.lon], Math.max(map.getZoom(), 9), { animate: true });
}

function selectShrine(id) {
  state.selectedId = id;
  render();
  focusShrineOnMap(id);
}

function renderList() {
  const visibleShrines = shrines.filter(isVisible);
  resultCount.textContent = `${visibleShrines.length}社`;
  shrineList.innerHTML = "";

  if (visibleShrines.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "条件に合う神社がありません。";
    shrineList.appendChild(empty);
    return;
  }

  visibleShrines.forEach((shrine) => {
    const record = recordFor(shrine.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `shrine-card ${shrine.id === state.selectedId ? "active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(shrine.name)}</strong>
      <span>${escapeHtml(shrine.province)} / ${escapeHtml(shrine.prefecture)} / ${escapeHtml(shrine.address)}</span>
      <span class="badge ${record.visited ? "visited" : ""}">${record.visited ? "参拝済み" : "未参拝"}</span>
    `;
    button.addEventListener("click", () => selectShrine(shrine.id));
    shrineList.appendChild(button);
  });
}

function renderDetail() {
  const shrine = shrines.find((item) => item.id === state.selectedId);
  const visible = shrine && isVisible(shrine);

  if (!shrine || !visible) {
    detailName.textContent = "ピンか一覧から選択";
    detailAddress.textContent = "表示中の一宮神社を選ぶと、参拝メモを記録できます。";
    detailProvince.textContent = "-";
    detailPrefecture.textContent = "-";
    detailArea.textContent = "-";
    detailStatus.textContent = "-";
    visitedToggle.checked = false;
    visitedToggle.disabled = true;
    noteInput.value = "";
    noteInput.disabled = true;
    return;
  }

  const record = recordFor(shrine.id);
  detailName.textContent = shrine.name;
  detailAddress.textContent = `${shrine.address}。${shrine.memo}`;
  detailProvince.textContent = shrine.province;
  detailPrefecture.textContent = shrine.prefecture;
  detailArea.textContent = shrine.area;
  detailStatus.textContent = record.visited ? "参拝済み" : "未参拝";
  visitedToggle.disabled = false;
  visitedToggle.checked = record.visited;
  noteInput.disabled = false;
  noteInput.value = record.note || "";
}

function renderSummary() {
  visitedCount.textContent = shrines.filter((shrine) => recordFor(shrine.id).visited).length;
}

function renderDataSource() {
  if (!dataSource) return;

  dataSource.innerHTML = `
    データ: 代表的な一宮神社 ${dataMeta.activeRows}社。
    旧国・鎮座地は
    <a href="${escapeHtml(dataMeta.sourceUrl)}" target="_blank" rel="noopener">全国一宮一覧</a>、
    <a href="${escapeHtml(dataMeta.secondarySourceUrl)}" target="_blank" rel="noopener">一宮解説</a>
    を参考にしています。
  `;
}

function render() {
  syncSelectedShrine();
  renderMarkers();
  renderList();
  renderDetail();
  renderSummary();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  render();
  fitVisibleOnMap();
});

prefectureFilter.addEventListener("change", (event) => {
  state.prefecture = event.target.value;
  render();
  fitVisibleOnMap();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    render();
    fitVisibleOnMap();
  });
});

visitedToggle.addEventListener("change", () => {
  if (!state.selectedId) return;
  const current = recordFor(state.selectedId);
  state.records[state.selectedId] = { ...current, visited: visitedToggle.checked };
  saveRecords();
  render();
  focusShrineOnMap(state.selectedId);
});

noteInput.addEventListener("input", () => {
  if (!state.selectedId) return;
  const current = recordFor(state.selectedId);
  state.records[state.selectedId] = { ...current, note: noteInput.value };
  saveRecords();
  renderSummary();
});

initializeMap();
populatePrefectureFilter();
renderDataSource();
render();
