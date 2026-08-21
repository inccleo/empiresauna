import type { Locale } from "../lib/site";

export type NewsCat = "update" | "tip" | "perk";

export type NewsPost = {
  slug: string;
  date: string;
  ts: number;
  cat: NewsCat;
  img: string;
  alt: string;
  titleHant: string;
  titleHans: string;
  titleEn: string;
  titleJa: string;
  titleKo: string;
  excerptHant: string;
  excerptHans: string;
  excerptEn: string;
  excerptJa: string;
  excerptKo: string;
  bodyHant: string[];
  bodyHans: string[];
  bodyEn: string[];
  bodyJa: string[];
  bodyKo: string[];
};

export const NEWS: NewsPost[] = [
  {
    slug: "entry-package-explained",
    date: "2026-08-12",
    ts: Date.parse("2026-08-12T00:00:00+08:00"),
    cat: "update",
    img: "/images/news/entry-package-explained.webp",
    alt: "巨亨桑拿大理石水療護理間 — 雲石牆身、沖身設備與毛巾備品",
    titleHant: "MOP 1,088 淨桑已送 90 分鐘按摩 — 巨亨桑拿入門之選全解（2026 年 8 月）",
    titleHans: "MOP 1,088 净桑已送 90 分钟按摩 — 巨亨桑拿入门之选全解（2026 年 8 月）",
    titleEn: "MOP 1,088 Sauna Entry includes 90-min massage — full guide (Aug 2026)",
    titleJa: "MOP 1,088 浄サウナに90分マッサージ付き — 入門コース全解（2026年8月）",
    titleKo: "MOP 1,088 정사우나에 90분 마사지 포함 — 입문 코스 총정리 (2026년 8월)",
    excerptHant:
      "巨亨桑拿 2026 年 8 月現時菜單中，入門的淨桑項目定價 MOP 1,088 並附送 90 分鐘按摩，且本館免收 10% 服務費。本文解讀這個入門之選實際包含的設施與餐飲、適合的客群與到場時段，並說明想升級時的菜單階梯怎麼看。",
    excerptHans:
      "巨亨桑拿 2026 年 8 月现时菜单中，入门的净桑项目定价 MOP 1,088 并附送 90 分钟按摩，且本馆免收 10% 服务费。本文解读这个入门之选实际包含的设施与餐饮、适合的客群与到场时段，并说明想升级时的菜单阶梯怎么看。",
    excerptEn:
      "On Empire Sauna's August 2026 menu, the entry Sauna package is MOP 1,088 with a 90-minute massage and no 10% service charge. What it includes, who it's for, best arrival times, and how the menu ladder works when you upgrade.",
    excerptJa:
      "巨亨サウナ 2026年8月メニューでは、入門の浄サウナが MOP 1,088 で90分マッサージ付き、サービス料10%なし。含まれる施設と飲食、向いている方、来店時間、アップグレード時のメニュー段階を解説。",
    excerptKo:
      "거헝 사우나 2026년 8월 메뉴 기준, 입문 정사우나는 MOP 1,088에 90분 마사지 포함·봉사료 10% 없음. 포함 시설·식사, 적합한 손님, 방문 시간대, 업그레이드 메뉴 단계를 정리합니다.",
    bodyHant: [
      "本月中旬，我們巨亨桑拿開業將滿三個月。三個月來訊息中被問得最多的一句，出乎意料地不是主題套房，而是：「淨桑 MOP 1,088 真的送 90 分鐘按摩？」— 是真的。本文把這個入門之選一次說清楚（以 2026 年 8 月現時菜單為準）。",
      "## 這 MOP 1,088 包含什麼",
      "- **場內設施** — 大理石浴池與各項桑拿設施，開業於 2026 年 5 月的全新裝修，環境是港幣 8,000 萬投資的水準。",
      "- **90 分鐘按摩** — 淨桑項目隨附，不是另購項目。",
      "- **免費餐飲** — 牛排、海鮮、湯麵等餐點與汽水、啤酒、咖啡、紅牛等飲料，於格調用餐廳免費供應（烈酒、葡萄酒另計）。",
      "- **大堂休息區** — 免費使用；營業時段內可使用大堂休息區。",
      "最重要的一點：本館**免收 10% 服務費**（2026 年 8 月現行定價政策），MOP 1,088 就是您實際支付的數字。實際價格以場館最新菜單為準，最新詳情預約時由專人提供。",
      "## 適合誰",
      "第一次接觸澳門桑拿、想先以較輕預算感受環境的賓客，這是我們最常推薦的起點；深夜抵澳、酒店尚未入住或想省一晚房費的旅客，也可配合[過夜安排](/overnight/)直接在館內休息至天亮。",
      "## 到場時段建議",
      "場館 **營業時間 17:00 至翌日 06:00**（暫非 24 小時，2026 年 8 月現況）。淨桑隨附的 90 分鐘按摩宜安排於營業時段內；傍晚入場、先浴後按再宵夜，是最順的動線。位置在澳門半島上海街，交通詳見[位置頁](/location/)。",
      "## 想升級？菜單階梯這樣看",
      "以 2026 年 8 月現時菜單，淨桑之上為東南亞式 MOP 3,088 – 3,288、台式 MOP 3,988 – 5,288、歐美式 MOP 4,588、日韓寶島 MOP 5,788 – 6,288，全數免收 10% 服務費，詳見[價目頁](/pricing/)。選擇 MOP 3,088 或以上項目，經本站預約另可免費任選兩項「小工」加值服務 — 內容與熱門組合見[預約禮遇一覽](/news/booking-perks/)。無論選哪一級，澳門全區免費專車接送與免入場費均適用（2026 年 8 月現行禮遇）。",
      "## 常見問題",
      "**淨桑可以停留多久？** 場館 營業時間 17:00 – 06:00，具體停留安排預約時由專人按當日情況說明。",
      "**隨附的 90 分鐘按摩是哪種類型？** 細節以場館當日安排為準 — 預約時告知您的偏好，我們會先為您確認。",
      "**除了 MOP 1,088 還有其他費用嗎？** 本館免收 10% 服務費（2026 年 8 月現況）；如需付費獨立休息房或加點服務會另行說明，絕不臨場加收預約時未提及的費用。付款可用現金、刷卡、微信支付或支付寶。",
      "想以最輕鬆的方式認識巨亨桑拿？WhatsApp／Telegram 一句「想試淨桑」，時段與免費專車，我們一次為您安排妥當。",
    ],
    bodyHans: [
      "本月中旬，我们巨亨桑拿开业将满三个月。三个月来讯息中被问得最多的一句，出乎意料地不是主题套房，而是：「净桑 MOP 1,088 真的送 90 分钟按摩？」— 是真的。本文把这个入门之选一次说清楚（以 2026 年 8 月现时菜单为准）。",
      "## 这 MOP 1,088 包含什么",
      "- **场内设施** — 大理石浴池与各项桑拿设施，开业于 2026 年 5 月的全新装修，环境是港币 8,000 万投资的水准。",
      "- **90 分钟按摩** — 净桑项目随附，不是另购项目。",
      "- **免费餐饮** — 牛排、海鲜、汤面等餐点与汽水、啤酒、咖啡、红牛等饮料，于格调用餐厅免费供应（烈酒、葡萄酒另计）。",
      "- **大堂休息区** — 免费使用；营业时段内可使用大堂休息区。",
      "最重要的一点：本馆**免收 10% 服务费**（2026 年 8 月现行定价政策），MOP 1,088 就是您实际支付的数字。实际价格以场馆最新菜单为准，最新详情预约时由专人提供。",
      "## 适合谁",
      "第一次接触澳门桑拿、想先以较轻预算感受环境的宾客，这是我们最常推荐的起点；深夜抵澳、酒店尚未入住或想省一晚房费的旅客，也可配合[过夜安排](/overnight/)直接在馆内休息至天亮。",
      "## 到场时段建议",
      "场馆 **营业时间 17:00 至翌日 06:00**（暂非 24 小时，2026 年 8 月现况）。净桑随附的 90 分钟按摩宜安排于当班时段内；傍晚入场、先浴后按再宵夜，是最顺的动线。位置在澳门半岛上海街，交通详见[位置页](/location/)。",
      "## 想升级？菜单阶梯这样看",
      "以 2026 年 8 月现时菜单，净桑之上为东南亚式 MOP 3,088 – 3,288、台式 MOP 3,988 – 5,288、欧美式 MOP 4,588、日韩宝岛 MOP 5,788 – 6,288，全数免收 10% 服务费，详见[价目页](/pricing/)。选择 MOP 3,088 或以上项目，经本站预约另可免费任选两项「小工」加值服务 — 内容与热门组合见[预约礼遇一览](/news/booking-perks/)。无论选哪一级，澳门全区免费专车接送与免入场费均适用（2026 年 8 月现行礼遇）。",
      "## 常见问题",
      "**净桑可以停留多久？** 营业时间为 17:00 – 06:00，具体停留安排预约时由专人按当日情况说明。",
      "**随附的 90 分钟按摩是哪种类型？** 细节以场馆当日安排为准 — 预约时告知您的偏好，我们会先为您确认。",
      "**除了 MOP 1,088 还有其他费用吗？** 本馆免收 10% 服务费（2026 年 8 月现况）；如需付费独立休息房或加点服务会另行说明，绝不临场加收预约时未提及的费用。付款可用现金、刷卡、微信支付或支付宝。",
      "想以最轻松的方式认识巨亨桑拿？WhatsApp／Telegram 一句「想试净桑」，时段与免费专车，我们一次为您安排妥当。",
    ],
    bodyEn: [
      "Mid-month, Empire Sauna will hit three months since opening. The question we get most isn't about theme suites — it's: \"Does Sauna Entry at MOP 1,088 really include 90 minutes of massage?\" Yes. Here's the full picture (August 2026 menu).",
      "## What's included in MOP 1,088",
      "- **Facilities** — Marble baths and sauna facilities in a May 2026 fit-out at HKD 80 million investment standard.",
      "- **90-minute massage** — Included with Sauna Entry, not sold separately.",
      "- **Complimentary dining** — Steak, seafood, noodles and soft drinks, beer, coffee, Red Bull in the restaurant (spirits and wine extra).",
      "- **Lobby lounge** — Free to use; available during opening hours 17:00 – 06:00.",
      "Most important: **no 10% service charge** (August 2026 policy). MOP 1,088 is what you pay. Final prices follow the venue menu; ask us when booking.",
      "## Who it's for",
      "First-timers who want to experience the venue on a lighter budget; late arrivals who haven't checked into a hotel yet, or travellers saving a night of hotel fees — combine with [overnight options](/overnight/) and rest until morning.",
      "## Suggested arrival window",
      "The venue is **open 17:00 – 06:00**; therapists are on duty **17:00–06:00** (August 2026). Schedule the included 90-minute massage within duty hours; evening entry → bath → massage → late bite is the smoothest flow. On Shanghai Street, Macau Peninsula — see [location](/location/).",
      "## Want to upgrade? Menu ladder",
      "Above Sauna Entry: Southeast Asian MOP 3,088 – 3,288, Taiwanese MOP 3,988–5,288, European & American MOP 4,588, Japan·Korea·Formosa MOP 5,788–6,288 — all without 10% service charge. See [pricing](/pricing/). Packages MOP 3,088+ booked via this site include two free \"extras\" — see [booking perks](/news/booking-perks/). Free city-wide private transfer and no entry fee apply at every tier (August 2026).",
      "## FAQ",
      "**How long can I stay on Sauna Entry?** Open 17:00 – 06:00; exact stay arrangements are confirmed with you when booking.",
      "**What type is the 90-minute massage?** Details follow the day's arrangement — tell us your preference when booking.",
      "**Any fees beyond MOP 1,088?** No 10% service charge (August 2026). Paid private rest rooms or add-ons are disclosed separately. Cash, card, WeChat Pay or Alipay.",
      "Want the easiest way to try Empire Sauna? WhatsApp/Telegram \"I'd like Sauna Entry\" — time slot and free transfer arranged in one go.",
    ],
    bodyJa: [
      "今月中旬、巨亨サウナは開業からまもなく3か月。最も多い質問はテーマスイートではなく、「浄サウナ MOP 1,088 に本当に90分マッサージが付くのか？」— はい、付きます。2026年8月メニューに基づき解説します。",
      "## MOP 1,088 に含まれるもの",
      "- **館内施設** — 大理石浴場と各種サウナ。2026年5月新規内装、HKD 8,000万投資水準。",
      "- **90分マッサージ** — 浄サウナに付帯。別売りではありません。",
      "- **無料飲食** — ステーキ、海鮮、麺類とソフトドリンク、ビール、コーヒー、レッドブルなど（蒸留酒・ワインは別）。",
      "- **ロビーラウンジ** — 無料。営業時間 17:00 – 06:00でいつでも休めます。",
      "最重要：**サービス料10%なし**（2026年8月）。MOP 1,088が実際の支払い額。最新料金は予約時に。",
      "## 向いている方",
      "初めてマカオサウナを試す方、軽い予算で環境を感じたい方。深夜到着でホテル未チェックイン、またはホテル代を節約したい方は[宿泊](/overnight/)と組み合わせて翌朝まで。",
      "## 来店時間の目安",
      "館内は**営業時間 17:00 – 06:00**、セラピスト当番は**17:00〜翌06:00**（2026年8月）。付帯90分マッサージはこの時間内に。夕方入場→入浴→マッサージ→軽食がスムーズ。上海通り・マカオ半島 — [アクセス](/location/)。",
      "## アップグレード？メニュー段階",
      "浄サウナの上は東南アジア式 MOP 3,088 – 3,288、台式 MOP 3,988–5,288、欧米式 MOP 4,588、日韓寶島 MOP 5,788–6,288。すべてサービス料なし。[料金](/pricing/)へ。MOP 3,088以上は当サイト予約で「小工」2つ無料 — [予約特典](/news/booking-perks/)。全区無料送迎・入場料無料は全ランク適用（2026年8月）。",
      "## よくある質問",
      "**浄サウナの滞在時間は？** 営業時間 17:00 – 06:00。詳細は予約時に。",
      "**90分マッサージの種類は？** 当日手配に準じます。希望を予約時にお伝えください。",
      "**MOP 1,088以外の費用は？** サービス料10%なし。有料個室や追加は別途説明。現金・カード・WeChat Pay・Alipay。",
      "いちばん気軽に巨亨を知るなら、WhatsApp／Telegramで「浄サウナを試したい」— 時間と無料送迎を一度に手配します。",
    ],
    bodyKo: [
      "이달 중순, 거헝 사우나는 오픈 3개월을 앞둡니다. 가장 많은 질문은 테마 스위트가 아니라 「정사우나 MOP 1,088에 정말 90분 마사지가 포함되나요?」— 네, 포함입니다. 2026년 8월 메뉴 기준으로 정리합니다.",
      "## MOP 1,088에 포함되는 것",
      "- **매장 시설** — 대리석 욕조와 각종 사우나. 2026년 5월 신규 인테리어, HKD 8,000만 투자 수준.",
      "- **90분 마사지** — 정사우나에 포함. 별도 구매 항목이 아닙니다.",
      "- **무료 식사** — 스테이크, 해산물, 면 요리와 탄산음료, 맥주, 커피, 레드불 등(증류주·와인은 별도).",
      "- **로비 라운지** — 무료. 영업시간 17:00 – 06:00으로 언제든 쉴 수 있습니다.",
      "가장 중요: **봉사료 10% 없음**(2026년 8월). MOP 1,088이 실제 결제액. 최신 요금은 예약 시 확인.",
      "## 누구에게 맞나요",
      "마카오 사우나를 처음 접하거나 가벼운 예산으로 환경을 느끼고 싶은 분. 심야 도착으로 호텔 미체크인, 또는 호텔비를 아끼고 싶은 분은 [숙박](/overnight/)과 함께 아침까지.",
      "## 방문 시간 제안",
      "매장은 **영업시간 17:00 – 06:00**, 테라피스트 근무는 **17:00~익일 06:00**(2026년 8월). 포함 90분 마사지는 이 시간 안에. 저녁 입장→목욕→마사지→야식이 가장 자연스럽습니다. 마카오 반도 상하이 거리 — [위치](/location/).",
      "## 업그레이드? 메뉴 단계",
      "정사우나 위는 동남아식 MOP 3,088 – 3,288, 대식 MOP 3,988–5,288, 구미식 MOP 4,588, 일한보도 MOP 5,788–6,288. 모두 봉사료 없음. [요금](/pricing/) 참고. MOP 3,088 이상은 본 사이트 예약 시 「소공」 2개 무료 — [예약 혜택](/news/booking-perks/). 전 지역 무료 픽업·입장료 무료는 모든 등급에 적용(2026년 8월).",
      "## FAQ",
      "**정사우나는 얼마나 머무를 수 있나요?** 영업시간 17:00 – 06:00. 상세는 예약 시.",
      "**90분 마사지 종류는?** 당일 배정 기준. 선호를 예약 시 알려 주세요.",
      "**MOP 1,088 외 비용은?** 봉사료 10% 없음. 유료 휴게실·추가는 별도 안내. 현금·카드·WeChat Pay·Alipay.",
      "가장 가벼운 방법으로 거헝을 알고 싶다면 WhatsApp/Telegram에 「정사우나 체험」— 시간과 무료 픽업을 한 번에 준비합니다.",
    ],
  },
  {
    slug: "typhoon-season-guide",
    date: "2026-08-01",
    ts: Date.parse("2026-08-01T00:00:00+08:00"),
    cat: "tip",
    img: "/images/news/typhoon-season-guide.webp",
    alt: "巨亨桑拿燭光大理石護理房 — 風雨中的避風港",
    titleHant: "颱風季須知 — 風球期間的到店安排、專車接送與免費改期",
    titleHans: "台风季须知 — 风球期间的到店安排、专车接送与免费改期",
    titleEn: "Typhoon season guide — arrival, transfer & free reschedule",
    titleJa: "台風シーズン案内 — 来店・送迎・無料変更",
    titleKo: "태풍 시즌 안내 — 방문·픽업·무료 일정 변경",
    excerptHant:
      "2026 年颱風季進行中，氣象局預計全年有 5 至 8 個熱帶氣旋影響澳門，8 月初亦曾有風暴掠過並一度懸掛風球。本文說明風球期間巨亨桑拿的到店安排：出發前確認、風雨中的專車接送，以及一則訊息即可完成的免費改期。",
    excerptHans:
      "2026 年台风季进行中，气象局预计全年有 5 至 8 个热带气旋影响澳门，8 月初亦曾有风暴掠过并一度悬挂风球。本文说明风球期间巨亨桑拿的到店安排：出发前确认、风雨中的专车接送，以及一则讯息即可完成的免费改期。",
    excerptEn:
      "Typhoon season 2026 is underway. How Empire Sauna handles storm signals: confirm before you leave, private transfer in the rain, and free reschedule with one message.",
    excerptJa:
      "2026年台風シーズン進行中。風球時の巨亨サウナ来店案内：出発前確認、風雨時の送迎、メッセージ1通で無料変更。",
    excerptKo:
      "2026년 태풍 시즌 진행 중. 풍구 시 거헝 사우나 방문 안내: 출발 전 확인, 비바람 속 픽업, 메시지 한 통으로 무료 일정 변경.",
    bodyHant: [
      "踏入 8 月，正值澳門颱風季的高峰。氣象局預計 2026 年全年有 5 至 8 個熱帶氣旋影響澳門，屬正常至偏多；8 月初已有熱帶風暴掠過廣東沿岸，澳門一度懸掛風球。每逢此類日子，我們最常收到的查詢便是：「今晚是否照常營業？專車是否照常接送？」本文一次說明清楚。",
      "## 兩分鐘看懂風球",
      "- 一號風球 — 僅表示風暴位於附近海域，市面完全如常，行程不受影響。",
      "- 三號風球 — 風勢漸強，市面大致如常，但街上的士難求。此時經本站預約的免費專車最為穩妥。",
      "- 八號或以上風球 — 全澳公共交通停駛，安全為先。請暫緩出行，傳訊息給我們改期即可。",
      "## 暴雨警告期間的安排",
      "夏季除風球外，亦設有暴雨警告。大雨期間並不建議步行前來 — 但專車照常行駛，由酒店大堂上車、場館門口下車。而下大雨的晚上，場內反而格外舒適。",
      "## 留在場內避風 — 營業時間 17:00 – 06:00的優勢",
      "巨亨桑拿 2026 年 8 月現時為 營業時間 17:00 – 06:00。風雨之夜其實是熟客最喜愛的時段：大理石雙浴池冷熱交替，免費餐飲照常供應，貴賓躺椅休息區隨時可以小睡。",
      "## 改期不設任何費用",
      "行程若受天氣影響，改期只需一則訊息，不收取任何費用，原定房型與已選定的「小工」加值服務將順延保留。",
    ],
    bodyHans: [
      "踏入 8 月，正值澳门台风季的高峰。气象局预计 2026 年全年有 5 至 8 个热带气旋影响澳门，属正常至偏多；8 月初已有热带风暴掠过广东沿岸，澳门一度悬挂风球。每逢此类日子，我们最常收到的查询便是：「今晚是否照常营业？专车是否照常接送？」本文一次说明清楚。",
      "## 两分钟看懂风球",
      "- 一号风球 — 仅表示风暴位于附近海域，市面完全如常，行程不受影响。",
      "- 三号风球 — 风势渐强，市面大致如常，但街上的士难求。此时经本站预约的免费专车最为稳妥。",
      "- 八号或以上风球 — 全澳公共交通停驶，安全为先。请暂缓出行，传讯息给我们改期即可。",
      "## 暴雨警告期间的安排",
      "夏季除风球外，亦设有暴雨警告。大雨期间并不建议步行前来 — 但专车照常行驶，由酒店大堂上车、场馆门口下车。而下大雨的晚上，场内反而格外舒适。",
      "## 留在场内避风 — 营业时间 17:00 – 06:00的优势",
      "巨亨桑拿 2026 年 8 月现时为 营业时间 17:00 – 06:00。风雨之夜其实是熟客最喜爱的时段：大理石双浴池冷热交替，免费餐饮照常供应，贵宾躺椅休息区随时可以小睡。",
      "## 改期不设任何费用",
      "行程若受天气影响，改期只需一则讯息，不收取任何费用，原定房型与已选定的「小工」加值服务将顺延保留。",
    ],
    bodyEn: [
      "August is peak typhoon season in Macau. The weather bureau expects 5–8 tropical cyclones to affect Macau in 2026. Early August already saw a storm along the Guangdong coast with signals hoisted. The top question: \"Are you open tonight? Is transfer still on?\" Here's the clear answer.",
      "## Storm signals in two minutes",
      "- Signal 1 — Storm nearby at sea; city runs as normal.",
      "- Signal 3 — Stronger winds; city mostly normal but taxis are scarce. Free private transfer via this site is the safest option.",
      "- Signal 8 or above — Public transport stops. Stay safe; message us to reschedule.",
      "## Rainstorm warnings",
      "Summer also brings rainstorm warnings. Walking is not recommended in heavy rain — but our cars still run, hotel lobby to venue door. Rainy nights are often the cosiest inside.",
      "## Shelter on site — open late into the night",
      "Empire Sauna is open 17:00 – 06:00 (August 2026). Stormy nights are popular with regulars: marble dual baths, free dining, VIP recliner lounge for a nap.",
      "## Free reschedule, no fees",
      "If weather changes your plans, reschedule with one message — no charge. Your room and chosen extras stay reserved.",
    ],
    bodyJa: [
      "8月はマカオ台風シーズンのピーク。気象局は2026年に5〜8個の熱帯低気圧がマカオに影響すると予想。8月初旬にも広東沿岸を通過し風球が掲げられました。「今夜営業？送迎は？」— ここにまとめます。",
      "## 風球を2分で",
      "- 1号 — 近海に嵐。市中は通常。",
      "- 3号 — 風が強まる。市中は概ね通常だがタクシー不足。当サイトの無料送迎が安心。",
      "- 8号以上 — 公共交通停止。安全優先。メッセージで変更を。",
      "## 暴雨警告時",
      "夏は暴雨警告もあります。大雨の徒歩は非推奨 — 送迎は通常運行（ホテルロビー→館入口）。雨の夜は館内が特に快適。",
      "## 館内で嵐を避ける — 17:00 – 06:00の強み",
      "巨亨は営業時間 17:00 – 06:00（2026年8月）。風雨の夜は常連に人気：大理石双浴場、無料飲食、VIPリクライニングで仮眠。",
      "## 変更手数料なし",
      "天候で予定が変わってもメッセージ1通で変更、料金なし。客室と選択済み「小工」は保持。",
    ],
    bodyKo: [
      "8월은 마카오 태풍 시즌 절정입니다. 기상국은 2026년 열대성 저기압 5~8개가 마카오에 영향을 줄 것으로 예상합니다. 8월 초에도 광둥 연안을 지나 풍구가 게양되었습니다. 「오늘 밤 영업하나요? 픽업은요?」— 여기서 정리합니다.",
      "## 풍구 2분 요약",
      "- 1호 — 인근 해상 폭풍. 시내 정상.",
      "- 3호 — 바람 강해짐. 시내는 대체로 정상이나 택시 부족. 본 사이트 무료 픽업이 가장 안전.",
      "- 8호 이상 — 대중교통 중단. 안전 우선. 메시지로 일정 변경.",
      "## 폭우 경보 시",
      "여름에는 폭우 경보도 있습니다. 폭우 중 도보는 비권장 — 픽업은 정상 운행(호텔 로비→매장 입구). 비 오는 밤은 매장이 특히 아늑합니다.",
      "## 매장에서 피신 — 17:00 – 06:00 강점",
      "거헝은 영업시간 17:00 – 06:00(2026년 8월). 비바람 밤은 단골에게 인기: 대리석 쌍욕조, 무료 식사, VIP 리클라이너에서 쪽잠.",
      "## 변경 수수료 없음",
      "날씨로 일정이 바뀌어도 메시지 한 통으로 변경, 비용 없음. 객실과 선택한 「소공」은 유지.",
    ],
  },
  {
    slug: "booking-perks",
    date: "2026-07-29",
    ts: Date.parse("2026-07-29T00:00:00+08:00"),
    cat: "perk",
    img: "/images/news/booking-perks.webp",
    alt: "巨亨桑拿燭光護理房與精油備品 — 「小工」加值服務",
    titleHant: "2026 年 7 月預約禮遇一覽 — 免費兩項「小工」、全區專車、免入場費",
    titleHans: "2026 年 7 月预约礼遇一览 — 免费两项「小工」、全区专车、免入场费",
    titleEn: "July 2026 booking perks — 2 free extras, city transfer, no entry fee",
    titleJa: "2026年7月予約特典 — 小工2つ無料・全区送迎・入場料無料",
    titleKo: "2026년 7월 예약 혜택 — 소공 2개 무료·전 지역 픽업·입장료 면제",
    excerptHant:
      "巨亨桑拿 2026 年 7 月現行的官網預約禮遇完整說明：MOP 3,088 或以上項目免費任選兩項「小工」加值服務（八款逐一介紹及熱門組合）、澳門全區免費專車接送、免收入場費，配合本館免收 10% 服務費 — 價目表上的數字即是您實際支付的數字。領取方式三步完成。",
    excerptHans:
      "巨亨桑拿 2026 年 7 月现行的官网预约礼遇完整说明：MOP 3,088 或以上项目免费任选两项「小工」加值服务（八款逐一介绍及热门组合）、澳门全区免费专车接送、免收入场费，配合本馆免收 10% 服务费 — 价目表上的数字即是您实际支付的数字。领取方式三步完成。",
    excerptEn:
      "Current website booking perks (July 2026): free choice of two VIP extras on packages MOP 3,088+, free private transfer across Macau, no entry fee — plus no 10% service charge at the venue. Three steps to claim.",
    excerptJa:
      "2026年7月現行の公式サイト予約特典：MOP 3,088以上で小工2つ無料、マカオ全区無料送迎、入場料無料。館内サービス料10%なし。受け取りは3ステップ。",
    excerptKo:
      "2026년 7월 현행 웹사이트 예약 혜택: MOP 3,088 이상 소공 2개 무료, 마카오 전 지역 무료 픽업, 입장료 면제. 매장 봉사료 10% 없음. 수령은 3단계.",
    bodyHant: [
      "不少貴賓到店後才得悉預約設有專屬禮遇。為免各位錯過，以下為 2026 年 7 月現行的三項官網預約專屬安排 — 透過本站 WhatsApp、Telegram 或 LINE 預約即可享有，無需代碼、無需截圖，到店報上姓名即可。",
      "## 一、免費任選兩項「小工」加值服務",
      "選擇 MOP 3,088 或以上的項目，可於八款「小工」VIP 加值服務中免費任選兩項，每款約 20 分鐘。熱門組合包括「擦背＋採耳」、「頭部按摩＋足底按摩」、「修手＋修腳」。",
      "## 二、澳門全區免費專車接送",
      "關閘、港珠澳大橋口岸、外港碼頭、各大酒店 — 告知位置後，七人專車前往接載，不設共乘；離開時同樣免費送返。深夜凌晨照常派車。",
      "## 三、免收入場費",
      "一般場館收取的入場費（門票），經本站預約一律免收。配合巨亨本館免收 10% 服務費，賬單不會出現任何額外附加費用。",
      "## 三步領取",
      "1. 傳送訊息 — WhatsApp／Telegram／LINE 任擇其一，告知日期與人數",
      "2. 說明兩項選擇 — 所選的兩項「小工」及接車位置",
      "3. 到店報上姓名 — 禮遇已預先登記，直接入場",
    ],
    bodyHans: [
      "不少贵宾到店后才得悉预约设有专属礼遇。为免各位错过，以下为 2026 年 7 月现行的三项官网预约专属安排 — 透过本站 WhatsApp、Telegram 或 LINE 预约即可享有，无需代码、无需截图，到店报上姓名即可。",
      "## 一、免费任选两项「小工」加值服务",
      "选择 MOP 3,088 或以上的项目，可于八款「小工」VIP 加值服务中免费任选两项，每款约 20 分钟。热门组合包括「擦背＋采耳」、「头部按摩＋足底按摩」、「修手＋修脚」。",
      "## 二、澳门全区免费专车接送",
      "关闸、港珠澳大桥口岸、外港码头、各大酒店 — 告知位置后，七人专车前往接载，不设共乘；离开时同样免费送返。深夜凌晨照常派车。",
      "## 三、免收入场费",
      "一般场馆收取的入场费（门票），经本站预约一律免收。配合巨亨本馆免收 10% 服务费，账单不会出现任何额外附加费用。",
      "## 三步领取",
      "1. 传送讯息 — WhatsApp／Telegram／LINE 任择其一，告知日期与人数",
      "2. 说明两项选择 — 所选的两项「小工」及接车位置",
      "3. 到店报上姓名 — 礼遇已预先登记，直接入场",
    ],
    bodyEn: [
      "Many guests only learn about booking perks after arrival. To avoid missing out, here are the three current website-only perks for July 2026 — book via our WhatsApp, Telegram or LINE, no code or screenshot needed; just give your name at the door.",
      "## 1. Two free VIP extras",
      "On packages MOP 3,088 or above, choose two free VIP extras from eight options (~20 min each). Popular pairs: back scrub + ear cleaning, head + foot massage, manicure + pedicure.",
      "## 2. Free private transfer across Macau",
      "Border Gate, HZMB port, Outer Harbour ferry, major hotels — tell us where you are and a 7-seater private car picks you up (no ride-share). Return transfer free too, including late night.",
      "## 3. No entry fee",
      "Entry fees charged by many venues are waived when booking via this site. Combined with no 10% service charge, your bill has no surprise add-ons.",
      "## Claim in three steps",
      "1. Message us — WhatsApp / Telegram / LINE with date and party size",
      "2. Tell us your two extras and pick-up point",
      "3. Give your name on arrival — perks are pre-registered",
    ],
    bodyJa: [
      "来店後に特典を知る方が少なくありません。2026年7月現行の公式サイト予約限定3特典 — WhatsApp・Telegram・LINE経由で、コードやスクショ不要。到着時に氏名を伝えるだけ。",
      "## 一、小工2つ無料",
      "MOP 3,088以上のコースで、8種の「小工」VIPから2つ無料（各約20分）。人気は「背中のこすり＋耳かき」「ヘッド＋足裏」「ハンド＋フット」。",
      "## 二、マカオ全区無料送迎",
      "関閘、港珠澳大橋口岸、外港埠頭、主要ホテル — 場所を伝えれば7人乗り専用車が迎え（相乗りなし）。帰りも無料、深夜も対応。",
      "## 三、入場料無料",
      "一般的な入場料は当サイト予約で免除。サービス料10%なしと合わせ、請求に余計な加算はありません。",
      "## 受け取り3ステップ",
      "1. メッセージ — WhatsApp／Telegram／LINEで日付と人数",
      "2. 小工2つとピックアップ場所を伝える",
      "3. 到着時に氏名 — 特典は事前登録済み",
    ],
    bodyKo: [
      "방문 후에야 혜택을 아는 손님이 많습니다. 2026년 7월 현행 웹사이트 예약 전용 3가지 혜택 — WhatsApp·Telegram·LINE 경유, 코드·스크린샷 불필요. 도착 시 성함만 말씀하세요.",
      "## 1. 소공 2개 무료",
      "MOP 3,088 이상 코스에서 8종 「소공」 VIP 중 2개 무료(각 약 20분). 인기: 등 스크럽+귀 청소, 헤드+발 마사지, 핸드+풋.",
      "## 2. 마카오 전 지역 무료 픽업",
      "관문, 강주아오대교 출입국장, 외항 터미널, 주요 호텔 — 위치를 알려 주시면 7인승 전용 차량(합승 없음). 귀가도 무료, 심야도 가능.",
      "## 3. 입장료 면제",
      "일반 입장료는 본 사이트 예약 시 면제. 봉사료 10% 없음과 함께 청구서에 숨은 추가 없음.",
      "## 수령 3단계",
      "1. 메시지 — WhatsApp/Telegram/LINE으로 날짜와 인원",
      "2. 소공 2개와 픽업 위치 안내",
      "3. 도착 시 성함 — 혜택은 사전 등록됨",
    ],
  },
  {
    slug: "getting-here",
    date: "2026-07-24",
    ts: Date.parse("2026-07-24T00:00:00+08:00"),
    cat: "tip",
    img: "/images/news/getting-here.webp",
    alt: "巨亨桑拿到店指南",
    titleHant: "到店指南 2026 — 上海街地址、三大口岸路線與免費專車",
    titleHans: "到店指南 2026 — 上海街地址、三大口岸路线与免费专车",
    titleEn: "Getting here 2026 — Shanghai Street, three ports & free transfer",
    titleJa: "来店ガイド 2026 — 上海通り、三大口岸、無料送迎",
    titleKo: "방문 가이드 2026 — 상하이 거리, 3대 출입국장, 무료 픽업",
    excerptHant:
      "巨亨桑拿位於澳門上海街 154 號及 162 號（海冠中心），2026 年 8 月現時 營業時間 17:00 – 06:00。本文詳述由關閘、港珠澳大橋口岸、外港碼頭三條路線的到店方式，並附深夜到店須知、首次到訪流程預覽，以及最便捷的免費專車接送安排。",
    excerptHans:
      "巨亨桑拿位于澳门上海街 154 号及 162 号（海冠中心），2026 年 8 月现时 营业时间 17:00 – 06:00。本文详述由关闸、港珠澳大桥口岸、外港码头三条路线的到店方式，并附深夜到店须知、首次到访流程预览，以及最便捷的免费专车接送安排。",
    excerptEn:
      "Empire Sauna is at Rua de Xangai 154 & 162 (Hoi Kuan Centre), open 17:00 – 06:00. Routes from Border Gate, HZMB and Outer Harbour, late-night tips, first-visit flow, and free private transfer.",
    excerptJa:
      "巨亨サウナはマカオ上海通り154・162号（海冠中心）、営業時間 17:00 – 06:00。関閘・港珠澳大橋・外港の3ルート、深夜来店、初回フロー、無料送迎を解説。",
    excerptKo:
      "거헝 사우나는 마카오 상하이 거리 154·162번(해관 센터), 영업시간 17:00 – 06:00. 관문·강주아오대교·외항 3개 루트, 심야 방문, 첫 방문 흐름, 무료 픽업 안내.",
    bodyHant: [
      "首次到訪的貴賓最常查詢「如何前往」。請先記住地址：澳門上海街 154 號及 162 號（海冠中心），位於澳門半島核心地段，鄰近北京街商圈。乘的士時告知司機「上海街海冠中心」即可。",
      "## 三條路線逐一說明",
      "關閘口岸 — 由珠海過關的主要路線。出閘後依「的士站」指示前往，短程車即達。",
      "港珠澳大橋澳門口岸 — 香港出發最直接的走法：於香港口岸乘金巴，過橋約 40 分鐘，出境後短程車直達市區。",
      "外港客運碼頭 — 乘港澳航線船班抵達後，碼頭距上海街僅數分鐘車程，為三條路線中最近的一條。",
      "## 深夜到店須知",
      "巨亨桑拿 2026 年 8 月現時為 營業時間 17:00 – 06:00，紅眼航班凌晨抵達、尾班船到埗均照常接待。唯一需要留意：深夜街上的士較少，與其在口岸等候，不如直接使用專車安排。",
      "## 最穩妥的方式：免費專車",
      "經本站預約後，告知位置與時間，七人專車直接前往接載：口岸、碼頭、酒店大堂均可，不設共乘。",
      "## 首次到訪？流程預覽",
      "1. 到店報上姓名 — 預約後我們已通知場館，前台直接帶位入場",
      "2. 更衣沐浴 — 儲物櫃存放隨身物品，先到大理石雙浴池熱身",
      "3. 選擇技師 — 於貴賓休息區從容挑選，不設時限",
      "4. 入房享受 — 90 分鐘按摩起，其後享用免費餐飲",
      "5. 休息／離場 — 躺椅區休息完畢，傳訊息安排回程專車",
    ],
    bodyHans: [
      "首次到访的贵宾最常查询「如何前往」。请先记住地址：澳门上海街 154 号及 162 号（海冠中心），位于澳门半岛核心地段，邻近北京街商圈。乘的士时告知司机「上海街海冠中心」即可。",
      "## 三条路线逐一说明",
      "关闸口岸 — 由珠海过关的主要路线。出闸后依「的士站」指示前往，短程车即达。",
      "港珠澳大桥澳门口岸 — 香港出发最直接的走法：于香港口岸乘金巴，过桥约 40 分钟，出境后短程车直达市区。",
      "外港客运码头 — 乘港澳航线船班抵达后，码头距上海街仅数分钟车程，为三条路线中最近的一条。",
      "## 深夜到店须知",
      "巨亨桑拿 2026 年 8 月现时为 营业时间 17:00 – 06:00，红眼航班凌晨抵达、尾班船到埗均照常接待。唯一需要留意：深夜街上的士较少，与其在口岸等候，不如直接使用专车安排。",
      "## 最稳妥的方式：免费专车",
      "经本站预约后，告知位置与时间，七人专车直接前往接载：口岸、码头、酒店大堂均可，不设共乘。",
      "## 首次到访？流程预览",
      "1. 到店报上姓名 — 预约后我们已通知场馆，前台直接带位入场",
      "2. 更衣沐浴 — 储物柜存放随身物品，先到大理石双浴池热身",
      "3. 选择技师 — 于贵宾休息区从容挑选，不设时限",
      "4. 入房享受 — 90 分钟按摩起，其后享用免费餐饮",
      "5. 休息／离场 — 躺椅区休息完毕，传讯息安排回程专车",
    ],
    bodyEn: [
      "First-time guests often ask how to get here. Remember the address: Rua de Xangai 154 & 162 (Hoi Kuan Centre), central Macau Peninsula near Beijing Street. Tell the taxi driver \"Shanghai Street Hoi Kuan Centre\".",
      "## Three main routes",
      "Border Gate — main Zhuhai crossing. Follow taxi signs after exit; short ride.",
      "HZMB Macau port — from Hong Kong: golden bus ~40 min, then short taxi into town.",
      "Outer Harbour ferry — closest of the three; a few minutes by car after the Hong Kong–Macau ferry.",
      "## Late-night arrivals",
      "Open 17:00 – 06:00 (August 2026). Red-eye flights and last ferries are fine. Street taxis are scarce late — private transfer is more reliable.",
      "## Easiest option: free private transfer",
      "After booking via this site, share location and time — 7-seater private car to ports, piers or hotel lobbies, no ride-share.",
      "## First visit? Flow preview",
      "1. Give your name — venue is pre-notified; front desk seats you",
      "2. Change & shower — lockers, then marble dual baths",
      "3. Choose therapist — unhurried in the VIP lounge",
      "4. In-room service — from 90-min massage, then free dining",
      "5. Rest / leave — recliner lounge, then message for return transfer",
    ],
    bodyJa: [
      "初来店で最も多いのが「行き方」。住所：マカオ上海通り154・162号（海冠中心）、マカオ半島中心・北京街商圏近く。タクシーには「上海通り海冠中心」と伝えてください。",
      "## 3つのルート",
      "関閘口岸 — 珠海からの主要ルート。出閘後タクシー乗り場へ。短距離。",
      "港珠澳大橋マカオ口岸 — 香港から金巴約40分、出国後タクシーで市街地へ。",
      "外港客運碼頭 — 港澳フェリー到着後、上海通りまで数分。3ルートで最短。",
      "## 深夜来店",
      "営業時間 17:00 – 06:00（2026年8月）。深夜便・最終船も対応。深夜のタクシーは少ないので送迎が安心。",
      "## いちばん確実：無料送迎",
      "当サイト予約後、場所と時間を伝えれば7人乗り専用車が口岸・埠頭・ホテルロビーへ。相乗りなし。",
      "## 初回フロー",
      "1. 氏名を伝える — 事前連絡済みで案内",
      "2. 更衣・入浴 — ロッカー、大理石双浴場でウォームアップ",
      "3. セラピスト選択 — VIPラウンジでゆっくり",
      "4. 入室 — 90分マッサージから、その後無料飲食",
      "5. 休憩／退店 — リクライニング後、帰路送迎をメッセージ",
    ],
    bodyKo: [
      "첫 방문 손님이 가장 많이 묻는 것은 「가는 방법」입니다. 주소: 마카오 상하이 거리 154·162번(해관 센터), 마카오 반도 중심·베이징 거리 상권 인근. 택시에는 「상하이 거리 해관 센터」라고 하세요.",
      "## 3개 주요 루트",
      "관문 출입국장 — 주하이에서 오는 주요 루트. 출국 후 택시 승강장. 단거리.",
      "강주아오대교 마카오 출입국장 — 홍콩에서 금바 약 40분, 출국 후 택시로 시내.",
      "외항 여객 터미널 — 홍콩–마카오 페리 도착 후 상하이 거리까지 수 분. 3개 중 가장 가깝.",
      "## 심야 방문",
      "영업시간 17:00 – 06:00(2026년 8월). 새벽 항공편·막차 페리도 가능. 심야 택시가 적어 픽업이 더 안전.",
      "## 가장 확실한 방법: 무료 픽업",
      "본 사이트 예약 후 위치와 시간을 알려 주시면 7인승 전용 차량이 출입국장·터미널·호텔 로비로. 합승 없음.",
      "## 첫 방문 흐름",
      "1. 성함 안내 — 사전 통보되어 프론트에서 안내",
      "2. 탈의·샤워 — 사물함, 대리석 쌍욕조로 워밍업",
      "3. 테라피스트 선택 — VIP 라운지에서 여유롭게",
      "4. 입실 — 90분 마사지부터, 이후 무료 식사",
      "5. 휴식/퇴장 — 리클라이너 후 귀가 픽업 메시지",
    ],
  },
];

export function formatNewsDate(iso: string, locale: Locale) {
  const [y, m, d] = iso.split("-");
  const month = Number(m);
  const day = Number(d);
  if (locale === "en") {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[month - 1]} ${day}, ${y}`;
  }
  if (locale === "ja") return `${y}年${month}月${day}日`;
  if (locale === "ko") return `${y}년 ${month}월 ${day}일`;
  return `${y}年${month}月${day}日`;
}

export function newsTitle(post: NewsPost, locale: Locale) {
  if (locale === "zh-CN") return post.titleHans;
  if (locale === "en") return post.titleEn;
  if (locale === "ja") return post.titleJa;
  if (locale === "ko") return post.titleKo;
  return post.titleHant;
}

export function newsExcerpt(post: NewsPost, locale: Locale) {
  if (locale === "zh-CN") return post.excerptHans;
  if (locale === "en") return post.excerptEn;
  if (locale === "ja") return post.excerptJa;
  if (locale === "ko") return post.excerptKo;
  return post.excerptHant;
}

export function newsBody(post: NewsPost, locale: Locale) {
  if (locale === "zh-CN") return post.bodyHans;
  if (locale === "en") return post.bodyEn;
  if (locale === "ja") return post.bodyJa;
  if (locale === "ko") return post.bodyKo;
  return post.bodyHant;
}
