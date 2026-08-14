export const CONTACT = {
  /** Display + wa.me digits (spaces optional). */
  whatsapp: "+853 6208 1126",
  /** Display label for Telegram. */
  telegram: "@Empsauna",
  /** Direct open link (t.me). */
  telegramUrl: "https://t.me/Empsauna",
  /** Full LINE add-friend URL (ID: empire_sauna02). */
  line: "https://line.me/ti/p/~empire_sauna02",
  /** LINE ID shown on contact page. */
  lineId: "empire_sauna02",
  /** WeChat ID / display name (from 素材/微信二维码.jpg). */
  wechat: "Empire_Jun",
  waText: {
    "zh-Hant": "你好巨亨，我在官方網站看到，我想預約，可以幫我安排嗎？",
    "zh-CN": "你好巨亨，我在官方网站看到，我想预约，可以帮我安排吗？",
    en: "Hi Empire Sauna, I saw you on the official website and would like to book — can you help arrange it?",
    ja: "こんにちは、巨亨サウナです。公式サイトを見て予約したいのですが、手配をお願いできますか？",
    ko: "안녕하세요 거헝 사우나입니다. 공식 웹사이트에서 보고 예약하고 싶은데, 도와주실 수 있나요?",
  },
};

export type Locale = "zh-Hant" | "zh-CN" | "en" | "ja" | "ko";

export type LocaleMeta = {
  code: Locale;
  /** URL prefix without trailing slash; empty for default (zh-Hant). */
  prefix: string;
  /** Segment used in path matching, e.g. "zh-cn". Empty for default. */
  segment: string;
  /** Native label in the language switcher. */
  label: string;
  /** Compact badge in header. */
  short: string;
  /** Flag emoji for language switcher. */
  flag: string;
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
};

export const LOCALES: LocaleMeta[] = [
  { code: "zh-Hant", prefix: "", segment: "", label: "繁體中文", short: "繁", flag: "🇭🇰", htmlLang: "zh-Hant", hreflang: "zh-Hant", ogLocale: "zh_HK" },
  { code: "zh-CN", prefix: "/zh-cn", segment: "zh-cn", label: "简体中文", short: "简", flag: "🇨🇳", htmlLang: "zh-CN", hreflang: "zh-CN", ogLocale: "zh_CN" },
  { code: "en", prefix: "/en", segment: "en", label: "English", short: "EN", flag: "🇬🇧", htmlLang: "en", hreflang: "en", ogLocale: "en_US" },
  { code: "ja", prefix: "/ja", segment: "ja", label: "日本語", short: "日", flag: "🇯🇵", htmlLang: "ja", hreflang: "ja", ogLocale: "ja_JP" },
  { code: "ko", prefix: "/ko", segment: "ko", label: "한국어", short: "한", flag: "🇰🇷", htmlLang: "ko", hreflang: "ko", ogLocale: "ko_KR" },
];

export const DEFAULT_LOCALE: Locale = "zh-Hant";

const LOCALE_SEGMENTS = LOCALES.map((l) => l.segment).filter(Boolean);
const LOCALE_PREFIX_RE = new RegExp(`^/(${LOCALE_SEGMENTS.join("|")})(?=/|$)`);

export function localeMeta(locale: Locale): LocaleMeta {
  return LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
}

/** Digits only, for wa.me / phone deep links. */
export function phoneDigits(value: string) {
  return value.replace(/[^0-9]/g, "");
}

export function waLink(locale: Locale, prefill?: string) {
  const text = prefill ?? CONTACT.waText[locale];
  return `https://wa.me/${phoneDigits(CONTACT.whatsapp)}?text=${encodeURIComponent(text)}`;
}

/** Telegram open link (prefills message when supported). */
export function tgLink(locale: Locale, prefill?: string) {
  const text = prefill ?? CONTACT.waText[locale];
  const base = CONTACT.telegramUrl.replace(/\/$/, "");
  if (!text) return base;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}text=${encodeURIComponent(text)}`;
}

export function prefix(locale: Locale) {
  return localeMeta(locale).prefix;
}

/** Strip any locale prefix from a pathname, returning the bare path (always starts with /). */
export function barePath(pathname: string): string {
  const cleaned = pathname.replace(LOCALE_PREFIX_RE, "") || "/";
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

/** Build a locale-prefixed path for the same bare path. */
export function localizedPath(locale: Locale, pathname: string): string {
  const bare = barePath(pathname);
  const p = prefix(locale);
  if (bare === "/") return p ? `${p}/` : "/";
  const withSlash = bare.endsWith("/") ? bare : `${bare}/`;
  return p ? `${p}${withSlash}` : withSlash;
}

export type GalleryItem = {
  src: string;
  caption: Record<Locale, string>;
};

function cap(hant: string, hans: string, en: string, ja: string, ko: string): Record<Locale, string> {
  return { "zh-Hant": hant, "zh-CN": hans, en, ja, ko };
}

export function galleryCaption(item: GalleryItem, locale: Locale) {
  return item.caption[locale] ?? item.caption["zh-Hant"];
}

export const MAP_SRC =
  "https://maps.google.com/maps?q=%E6%BE%B3%E9%96%80%E4%B8%8A%E6%B5%B7%E8%A1%97154%E8%99%9F&z=17&output=embed";

export const GALLERY: GalleryItem[] = [
  // 浴池 / 桑拿
  { src: "/images/cover-bath-pools.webp", caption: cap("大理石浴池", "大理石浴池", "Marble bath pools", "大理石の浴場", "대리석 욕조") },
  { src: "/images/gallery/bath-pools-overview.webp", caption: cap("浴池全景", "浴池全景", "Bath pool overview", "浴場の全景", "욕조 전경") },
  { src: "/images/gallery/bath-pools-showers.webp", caption: cap("淋浴與浴池", "淋浴与浴池", "Showers & pools", "シャワーと浴場", "샤워와 욕조") },
  { src: "/images/gallery/bath-pools-garden.webp", caption: cap("禪意庭園浴池", "禅意庭园浴池", "Zen garden pools", "禅の庭園浴場", "선 정원 욕조") },
  { src: "/images/gallery/bath-pools-faucet.webp", caption: cap("浴池注水細節", "浴池注水细节", "Pool faucet detail", "注水のディテール", "욕조 급수 디테일") },
  { src: "/images/gallery/sauna-wood.webp", caption: cap("木質桑拿房", "木质桑拿房", "Wood sauna room", "木のサウナルーム", "원목 사우나룸") },
  // 大堂 / 入口
  { src: "/images/entrance.webp", caption: cap("巨亨迎賓大堂", "巨亨迎宾大堂", "Empire lobby", "エンパイアのロビー", "거헝 로비") },
  { src: "/images/gallery/lobby-star-ceiling.webp", caption: cap("星空天幕大堂", "星空天幕大堂", "Starry ceiling lobby", "星空天井のロビー", "별하늘 천장 로비") },
  { src: "/images/gallery/lobby-star-elevator.webp", caption: cap("星空天幕與電梯", "星空天幕与电梯", "Starry ceiling & elevator", "星空天井とエレベーター", "별하늘 천장과 엘리베이터") },
  { src: "/images/gallery/lobby-waterfall-screen.webp", caption: cap("瀑布光影屏", "瀑布光影屏", "Waterfall light screen", "滝の光のスクリーン", "폭포 라이트 스크린") },
  { src: "/images/gallery/lobby-art-sofa.webp", caption: cap("大堂藝術休息區", "大堂艺术休息区", "Lobby art lounge", "ロビーのアートラウンジ", "로비 아트 라운지") },
  { src: "/images/gallery/lobby-entrance-hall.webp", caption: cap("門廳與藝術牆", "门厅与艺术墙", "Entrance hall & art wall", "エントランスとアートウォール", "현관과 아트 월") },
  { src: "/images/gallery/reception-desk.webp", caption: cap("接待前台", "接待前台", "Reception desk", "受付カウンター", "리셉션 데스크") },
  // 樓梯 / 走廊
  { src: "/images/grand-staircase.webp", caption: cap("氣派樓梯", "气派楼梯", "Grand staircase", "大階段", "그랜드 계단") },
  { src: "/images/grand-staircase-lg.webp", caption: cap("光柱旋轉樓梯", "光柱旋转楼梯", "Light-column spiral stairs", "光の柱の螺旋階段", "라이트 컬럼 나선 계단") },
  { src: "/images/gallery/staircase-wood.webp", caption: cap("木飾樓梯", "木饰楼梯", "Wood-panelled stairs", "木目の階段", "원목 마감 계단") },
  { src: "/images/gallery/hallway-tree-wall.webp", caption: cap("景觀走廊", "景观走廊", "Scenic hallway", "景観の廊下", "경관 복도") },
  { src: "/images/gallery/hallway-corner-mural.webp", caption: cap("藝術壁畫走廊", "艺术壁画走廊", "Mural hallway", "壁画の廊下", "벽화 복도") },
  { src: "/images/gallery/hallway-blue-wall.webp", caption: cap("樓層走廊", "楼层走廊", "Floor corridor", "フロアの廊下", "층 복도") },
  // 餐廳
  { src: "/images/atrium-restaurant.webp", caption: cap("中庭餐廳", "中庭餐厅", "Atrium restaurant", "アトリウムレストラン", "아트리움 레스토랑") },
  { src: "/images/dining-hall.webp", caption: cap("宴會餐廳", "宴会餐厅", "Dining hall", "ダイニングホール", "연회 레스토랑") },
  { src: "/images/gallery/dining-bar.webp", caption: cap("餐廳吧台", "餐厅吧台", "Restaurant bar", "レストランバー", "레스토랑 바") },
  { src: "/images/gallery/dining-booth.webp", caption: cap("餐廳卡座", "餐厅卡座", "Dining booth", "ダイニングブース", "다이닝 부스") },
  // 休息區
  { src: "/images/recliner-lounge.webp", caption: cap("貴賓躺椅休息區", "贵宾躺椅休息区", "VIP recliner lounge", "VIPリクライニングラウンジ", "VIP 리클라이너 라운지") },
  { src: "/images/gallery/recliner-lounge-wide.webp", caption: cap("躺椅休息區全景", "躺椅休息区全景", "Recliner lounge panorama", "リクライニングラウンジ全景", "리클라이너 라운지 전경") },
  { src: "/images/gallery/vip-recliner-room.webp", caption: cap("VIP 躺椅包房", "VIP 躺椅包房", "VIP recliner room", "VIPリクライニング個室", "VIP 리클라이너 룸") },
  { src: "/images/gallery/locker-room.webp", caption: cap("更衣室", "更衣室", "Locker room", "更衣室", "탈의실") },
  // 客房 / 套房
  { src: "/images/water-bed-suite.webp", caption: cap("水床特色房", "水床特色房", "Waterbed suite", "ウォーターベッド特室", "워터베드 특실") },
  { src: "/images/gallery/room-round-bed-lounge.webp", caption: cap("圓床套房休息區", "圆床套房休息区", "Round-bed suite lounge", "ラウンドベッドスイートのラウンジ", "원형 침대 스위트 라운지") },
  { src: "/images/marble-suite-room.webp", caption: cap("大理石主題套房", "大理石主题套房", "Marble theme suite", "大理石テーマスイート", "대리석 테마 스위트") },
  { src: "/images/marble-suite-lg.webp", caption: cap("套房與淋浴間", "套房与淋浴间", "Suite & shower", "スイートとシャワー", "스위트와 샤워실") },
  { src: "/images/white-marble-room.webp", caption: cap("溫馨套房", "温馨套房", "Cosy suite", "くつろぎのスイート", "아늑한 스위트") },
  { src: "/images/bed-room.webp", caption: cap("主題客房", "主题客房", "Theme guest room", "テーマ客室", "테마 객실") },
  { src: "/images/gallery/room-twin-beds.webp", caption: cap("雙床客房", "双床客房", "Twin-bed room", "ツインベッドルーム", "트윈 베드 룸") },
  { src: "/images/gallery/room-604-entrance.webp", caption: cap("客房入口", "客房入口", "Room entrance", "客室入口", "객실 입구") },
  { src: "/images/gallery/room-blue-suite.webp", caption: cap("藍光套房", "蓝光套房", "Blue-light suite", "ブルーライトスイート", "블루 라이트 스위트") },
  { src: "/images/gallery/room-purple-suite.webp", caption: cap("紫光套房", "紫光套房", "Purple-light suite", "パープルライトスイート", "퍼플 라이트 스위트") },
  { src: "/images/private-shower-room.webp", caption: cap("私人淋浴房", "私人淋浴房", "Private shower room", "プライベートシャワー", "프라이빗 샤워룸") },
  { src: "/images/gallery/bathroom-marble.webp", caption: cap("大理石洗手間", "大理石洗手间", "Marble bathroom", "大理石の洗面所", "대리석 욕실") },
];
