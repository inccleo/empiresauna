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
  waText: "你好巨亨，我想預約，可以幫我安排嗎？",
  waTextHans: "你好巨亨，我想预约，可以帮我安排吗？",
};

/** Digits only, for wa.me / phone deep links. */
export function phoneDigits(value: string) {
  return value.replace(/[^0-9]/g, "");
}

export function waLink(locale: "zh-Hant" | "zh-CN", prefill?: string) {
  const text = prefill ?? (locale === "zh-CN" ? CONTACT.waTextHans : CONTACT.waText);
  return `https://wa.me/${phoneDigits(CONTACT.whatsapp)}?text=${encodeURIComponent(text)}`;
}

/** Telegram open link (prefills message when supported). */
export function tgLink(locale: "zh-Hant" | "zh-CN", prefill?: string) {
  const text = prefill ?? (locale === "zh-CN" ? CONTACT.waTextHans : CONTACT.waText);
  const base = CONTACT.telegramUrl.replace(/\/$/, "");
  if (!text) return base;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}text=${encodeURIComponent(text)}`;
}

export type Locale = "zh-Hant" | "zh-CN";

export function prefix(locale: Locale) {
  return locale === "zh-CN" ? "/zh-cn" : "";
}

export const MAP_SRC =
  "https://maps.google.com/maps?q=%E6%BE%B3%E9%96%80%E4%B8%8A%E6%B5%B7%E8%A1%97154%E8%99%9F&z=17&output=embed";

export const GALLERY = [
  // 浴池 / 桑拿
  { src: "/images/cover-bath-pools.webp", captionHant: "大理石浴池", captionHans: "大理石浴池" },
  { src: "/images/gallery/bath-pools-overview.webp", captionHant: "浴池全景", captionHans: "浴池全景" },
  { src: "/images/gallery/bath-pools-showers.webp", captionHant: "淋浴與浴池", captionHans: "淋浴与浴池" },
  { src: "/images/gallery/bath-pools-garden.webp", captionHant: "禪意庭園浴池", captionHans: "禅意庭园浴池" },
  { src: "/images/gallery/bath-pools-faucet.webp", captionHant: "浴池注水細節", captionHans: "浴池注水细节" },
  { src: "/images/gallery/sauna-wood.webp", captionHant: "木質桑拿房", captionHans: "木质桑拿房" },
  // 大堂 / 入口
  { src: "/images/entrance.webp", captionHant: "巨亨迎賓大堂", captionHans: "巨亨迎宾大堂" },
  { src: "/images/gallery/lobby-star-ceiling.webp", captionHant: "星空天幕大堂", captionHans: "星空天幕大堂" },
  { src: "/images/gallery/lobby-star-elevator.webp", captionHant: "星空天幕與電梯", captionHans: "星空天幕与电梯" },
  { src: "/images/gallery/lobby-waterfall-screen.webp", captionHant: "瀑布光影屏", captionHans: "瀑布光影屏" },
  { src: "/images/gallery/lobby-art-sofa.webp", captionHant: "大堂藝術休息區", captionHans: "大堂艺术休息区" },
  { src: "/images/gallery/lobby-entrance-hall.webp", captionHant: "門廳與藝術牆", captionHans: "门厅与艺术墙" },
  { src: "/images/gallery/reception-desk.webp", captionHant: "接待前台", captionHans: "接待前台" },
  // 樓梯 / 走廊
  { src: "/images/grand-staircase.webp", captionHant: "氣派樓梯", captionHans: "气派楼梯" },
  { src: "/images/grand-staircase-lg.webp", captionHant: "光柱旋轉樓梯", captionHans: "光柱旋转楼梯" },
  { src: "/images/gallery/staircase-wood.webp", captionHant: "木飾樓梯", captionHans: "木饰楼梯" },
  { src: "/images/gallery/hallway-tree-wall.webp", captionHant: "景觀走廊", captionHans: "景观走廊" },
  { src: "/images/gallery/hallway-corner-mural.webp", captionHant: "藝術壁畫走廊", captionHans: "艺术壁画走廊" },
  { src: "/images/gallery/hallway-blue-wall.webp", captionHant: "樓層走廊", captionHans: "楼层走廊" },
  // 餐廳
  { src: "/images/atrium-restaurant.webp", captionHant: "中庭餐廳", captionHans: "中庭餐厅" },
  { src: "/images/dining-hall.webp", captionHant: "宴會餐廳", captionHans: "宴会餐厅" },
  { src: "/images/gallery/dining-bar.webp", captionHant: "餐廳吧台", captionHans: "餐厅吧台" },
  { src: "/images/gallery/dining-booth.webp", captionHant: "餐廳卡座", captionHans: "餐厅卡座" },
  // 休息區
  { src: "/images/recliner-lounge.webp", captionHant: "貴賓躺椅休息區", captionHans: "贵宾躺椅休息区" },
  { src: "/images/gallery/recliner-lounge-wide.webp", captionHant: "躺椅休息區全景", captionHans: "躺椅休息区全景" },
  { src: "/images/gallery/vip-recliner-room.webp", captionHant: "VIP 躺椅包房", captionHans: "VIP 躺椅包房" },
  { src: "/images/gallery/locker-room.webp", captionHant: "更衣室", captionHans: "更衣室" },
  // 客房 / 套房
  { src: "/images/water-bed-suite.webp", captionHant: "水床特色房", captionHans: "水床特色房" },
  { src: "/images/gallery/room-round-bed-lounge.webp", captionHant: "圓床套房休息區", captionHans: "圆床套房休息区" },
  { src: "/images/marble-suite-room.webp", captionHant: "大理石主題套房", captionHans: "大理石主题套房" },
  { src: "/images/marble-suite-lg.webp", captionHant: "套房與淋浴間", captionHans: "套房与淋浴间" },
  { src: "/images/white-marble-room.webp", captionHant: "溫馨套房", captionHans: "温馨套房" },
  { src: "/images/bed-room.webp", captionHant: "主題客房", captionHans: "主题客房" },
  { src: "/images/gallery/room-twin-beds.webp", captionHant: "雙床客房", captionHans: "双床客房" },
  { src: "/images/gallery/room-604-entrance.webp", captionHant: "客房入口", captionHans: "客房入口" },
  { src: "/images/gallery/room-blue-suite.webp", captionHant: "藍光套房", captionHans: "蓝光套房" },
  { src: "/images/gallery/room-purple-suite.webp", captionHant: "紫光套房", captionHans: "紫光套房" },
  { src: "/images/private-shower-room.webp", captionHant: "私人淋浴房", captionHans: "私人淋浴房" },
  { src: "/images/gallery/bathroom-marble.webp", captionHant: "大理石洗手間", captionHans: "大理石洗手间" },
];
