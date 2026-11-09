const sources = {
  s1: {
    code: "S1",
    type: "档案汇编",
    title: "《南京保卫战档案》（全8册）",
    url: "https://www.las.ac.cn/front/book/detail?id=5f1eea954ac287fb461a925b1ee584e7",
    note: "中国第二历史档案馆编，南京出版社2018年出版。以馆藏档案呈现首都防卫计划、战斗经过、部队调动与撤退等内容。",
  },
  s2: {
    code: "S2",
    type: "史料汇编",
    title: "《南京大屠杀史料集》（全78卷）",
    url: "https://www.nju.edu.cn/info/3191/141901.htm",
    note: "张宪文主编，江苏人民出版社2005—2011年出版。收录中方、日方与第三方文献，可用于交叉核对时间、地点、人物和统计口径。",
  },
  s3: {
    code: "S3",
    type: "档案",
    title: "《中国红十字会南京分会埋尸记录》",
    url: "https://www.saac.gov.cn/zt/2014-12/10/content_77202.htm",
    note: "南京市档案馆藏，1938年。国家档案局2014年“南京大屠杀档案”专题公布。记录施粥、掩埋、施材、施医送药及工作队统计。",
  },
  s4: {
    code: "S4",
    type: "档案",
    title: "《南京慈善机关暨市民鲁甦报告敌人大屠杀概况统计表》",
    url: "http://www.cngongji.cn/2014-12/11/c_1113605597_3.htm",
    note: "南京市档案馆藏，1946年。记录崇善堂、世界红卍字会南京分会等慈善机关掩埋统计及市民证词，存在不同统计口径。",
  },
  s5: {
    code: "S5",
    type: "日记",
    title: "程瑞芳《程瑞芳日记》",
    url: "https://www.19371213.com.cn/learn/zijin/202306/t20230613_3934422.html",
    note: "南京出版社2015年出版。日记时间为1937年12月8日至1938年3月1日，约三万余字，原件藏中国第二历史档案馆。",
  },
  s6: {
    code: "S6",
    type: "日记",
    title: "明妮·魏特琳《魏特琳日记》",
    url: "https://www.19371213.com.cn/research/yjda/201907/t20190722_2231794.html",
    note: "江苏人民出版社2000年出版。记录金陵女子文理学院难民收容所管理、妇女儿童处境及南京沦陷后的见闻。",
  },
  s7: {
    code: "S7",
    type: "日记",
    title: "约翰·拉贝《拉贝日记》",
    url: "https://historymuseum.nju.edu.cn/info/1201/71081.htm",
    note: "江苏人民出版社、江苏教育出版社1997年出版。记录南京安全区国际委员会运作、难民保护和城内局势。",
  },
  s8: {
    code: "S8",
    type: "口述史",
    title: "《南京保卫战老兵口述史》",
    url: "https://yht.nanjing.gov.cn/rednanjing/hsjp/hswy/202504/t20250410_5122050.html",
    note: "张连红、吴先斌、张定胜编，南京出版社2020年出版。收录25位参加南京保卫战老兵的口述调查，包含支前、救护和撤退记忆。",
  },
  s9: {
    code: "S9",
    type: "报刊",
    title: "《南京保卫战中方报纸报道（1937—1938）》",
    url: "http://difangzhi.cssn.cn/fzcb/dqscb/202112/t20211221_5384272.shtml",
    note: "凌曦、唐恺编，南京出版社2021年出版。整理《中央日报》《申报》等20余份中方报纸的报道，可用于比较新闻叙述与档案记录。",
  },
  s10: {
    code: "S10",
    type: "研究",
    title: "《人道主义与民族主义：南京保卫战中的南京安全区国际委员会》",
    url: "https://www.krzzjn.com/show-1232-34401.html",
    note: "张连红撰，《南京政治学院学报》2014年第6期。讨论安全区设立、军事设施撤离、和平斡旋及中外协作。",
  },
  s11: {
    code: "S11",
    type: "研究",
    title: "《南京大屠杀前夕南京的人口变化》",
    url: "https://lswb.njnu.edu.cn/info/1050/9206.htm",
    note: "张连红撰，《民国档案》2004年第3期。讨论战前南京人口统计、居民迁移与留城人口变化。",
  },
  s12: {
    code: "S12",
    type: "纪念馆专题",
    title: "《南京保卫战全史》记录31次战斗",
    url: "https://www.19371213.com.cn/research/publications/202305/t20230509_3906312.html",
    note: "侵华日军南京大屠杀遇难同胞纪念馆发布，介绍《南京保卫战全史》《南京保卫战档案》《南京保卫战老兵口述史》等研究，并展示最后一道作战命令复印件。",
  },
  s13: {
    code: "S13",
    type: "报道",
    title: "《染血的“绿洲”：南京大屠杀中的“难民区”》",
    url: "http://dangshi.people.com.cn/n/2014/1215/c85037-26208132.html",
    note: "人民网党史频道转载《海南日报》报道，记录南京安全区范围、难民收容所、市政粮食与警察支持及难民处境。",
  },
};

const actions = [
  {
    id: "shelter",
    title: "疏散与安置",
    icon: "icon-users",
    description: "机构内迁、居民撤离、难民登记、校舍与教堂转作收容所，以及妇女儿童照护。",
  },
  {
    id: "medical",
    title: "医疗救护",
    icon: "icon-pin",
    description: "急救、护理、担架转运、医院收治、药品器械筹措与伤员分流。",
  },
  {
    id: "transport",
    title: "物资供应与运输",
    icon: "icon-arrow",
    description: "送茶水、饮食和油盐，搬运粮食与燃料，转运伤员并提供车辆、船只和人力。",
  },
  {
    id: "defense",
    title: "工事与城市保障",
    icon: "icon-layers",
    description: "修筑工事、搬运沙袋、修补道路、消防、治安、卫生和公用设施维护。",
  },
  {
    id: "relief",
    title: "慈善救济与掩埋",
    icon: "icon-book",
    description: "施粥、施医、发衣、收容、掩埋尸体、登记死难者与发放救济物资。",
  },
  {
    id: "memory",
    title: "见证与记忆保存",
    icon: "icon-clock",
    description: "日记、证词、照片、战后调查、文物捐赠与口述传承，把经历转化为公共证据。",
  },
];

const sites = [
  {
    id: "xiaguan",
    name: "下关",
    x: 34,
    y: 86,
    categories: ["transport", "relief"],
    confidence: "confirmed",
    period: "1937.12—1938.05",
    title: "下关：渡江、转运与掩埋",
    summary:
      "码头、渡船和江岸构成战前撤离与城陷后掩埋的重要节点。老兵回忆和红十字会档案都把这里记为人员流动与尸体处理集中的区域。",
    context:
      "下关连接长江、码头与城内道路，是战前内迁、伤员转运和城陷前军民争渡的关键出口。交通拥塞与船只管制使同一空间同时容纳撤离、救援与死亡处理。",
    check:
      "渡船数量、军队征用民用船只的时间和普通居民实际登船机会仍需分别核对，不能把“到达下关”直接等同于“成功渡江”。",
    evidence:
      "中国红十字会南京分会第二工作队在1937年12月24日至1938年1月6日前，在下关一带登记掩埋军民尸体3,425具；1938年1月6日至3月31日又记录6,735具。",
    sourceIds: ["s3", "s8"],
  },
  {
    id: "hepingmen",
    name: "和平门",
    x: 53,
    y: 20,
    categories: ["relief"],
    confidence: "confirmed",
    period: "1937.12—1938.05",
    title: "和平门：埋尸与乡人协作",
    summary:
      "红十字会第一工作队在和平门一带与当地乡人联合开展掩埋，统计表按日期和地点记录数量。",
    context:
      "和平门位于城北，是城内外交通与军事防线交会处。红十字会档案在这里记录的重点不是战斗，而是城陷后由慈善人员、当地乡人和临时雇工共同完成的尸体收殓与掩埋。",
    check:
      "掩埋数字反映的是工作队在特定时间、特定区域登记的工作量，不能直接等同于该地点全部死亡人数。",
    evidence:
      "档案记录第一工作队在1937年12月24日至1938年1月6日前掩埋军民尸体5,704具；1938年1月6日至5月31日又记录6,987具。",
    sourceIds: ["s3"],
  },
  {
    id: "ginling",
    name: "金陵女子文理学院",
    x: 30,
    y: 42,
    categories: ["shelter", "memory"],
    confidence: "confirmed",
    period: "1937.12.08—1938.03.01",
    title: "金陵女子文理学院：妇孺避难所",
    summary:
      "程瑞芳协助魏特琳管理难民收容所。她既是收容所工作人员，也是南京大屠杀期间留下连续日记的中国见证者。",
    context:
      "金陵女子文理学院被纳入南京安全区，成为以妇女儿童为主的难民收容所。校舍、围墙、外籍人士身份和中国职员管理共同构成有限的安全空间，但并未阻止日军进入搜捕与施暴。",
    check:
      "难民人数、流动情况和不同日期收容规模在日记、安全区报告与回忆中口径不一，应逐日比对。",
    evidence:
      "《程瑞芳日记》自1937年12月8日写到1938年3月1日，约三万余字，记录难民所管理、妇女儿童处境和城内暴行。",
    sourceIds: ["s5", "s6"],
  },
  {
    id: "nanking-univ",
    name: "金陵大学",
    x: 39,
    y: 52,
    categories: ["shelter", "medical"],
    confidence: "basic",
    period: "1937.11—1938.02",
    title: "金陵大学：校舍转为收容节点",
    summary:
      "南京安全区依托金陵大学等校舍设置难民收容所，中西方人员共同参与管理、登记、物资与秩序维护。",
    context:
      "金陵大学及其附属建筑位于安全区核心区域，校舍被转为难民收容、办公与物资集散空间。学校中外教职员、校工和中国职员共同承担登记、巡查、翻译、搬运和秩序维护。",
    check:
      "现有叙述常以外籍人士为中心，中国职员、校工与难民自身的管理劳动仍需从名册、日记和口述中继续识别。",
    evidence:
      "拉贝、魏特琳日记与南京安全区研究均记录金陵大学校舍在难民收容中的作用；具体人数与每日流量仍需分材料核对。",
    sourceIds: ["s7", "s6", "s10"],
  },
  {
    id: "drum-hospital",
    name: "鼓楼医院",
    x: 43,
    y: 34,
    categories: ["medical"],
    confidence: "basic",
    period: "1937.11—1938.05",
    title: "鼓楼医院：持续收治与救护",
    summary:
      "医院成为安全区医疗救护的重要机构，外籍医生、中国医护和工友共同维持收治、护理与物资筹措。",
    context:
      "战时医疗不仅包括手术和用药，也包括伤员搬运、床位安排、消毒、饮食供应和尸体处理。鼓楼医院因此连接医生、护士、工友、救护人员与安全区物资网络。",
    check:
      "医院收治人数、死亡人数和门诊量需要依据不同统计表核对，日记中的个案不能直接推算总体。",
    evidence:
      "《拉贝日记》《魏特琳日记》及安全区研究记录了鼓楼医院的救治工作；本页不把回忆中的全部病例转化为精确统计。",
    sourceIds: ["s7", "s6", "s10"],
  },
  {
    id: "xinjiekou",
    name: "新街口",
    x: 55,
    y: 53,
    categories: ["transport", "shelter"],
    confidence: "pending",
    period: "1937.12",
    title: "新街口：进入安全区的关键边界",
    summary:
      "安全区东界以中山路为界，新街口是居民进入安全区的重要方位。具体人流路线仍需依据日记、地图和口述材料逐条核验。",
    context:
      "新街口是南京城内重要交通节点。对难民而言，进入安全区并非一次简单移动，而要在空袭、军管、家庭拖累和道路阻断之间寻找可行路径。",
    check:
      "本点位是历史地名示意，不代表所有难民都经过同一路线。具体路线应与日记、地图和口述地点逐条比对。",
    evidence:
      "安全区范围与研究文献明确以中山路为东界；本点位为历史地名示意，不作为精确路线坐标。",
    sourceIds: ["s10", "s7"],
  },
  {
    id: "zhonghuamen",
    name: "中华门",
    x: 53,
    y: 77,
    categories: ["transport", "medical"],
    confidence: "oral",
    period: "1937.12",
    title: "中华门：伤员转运与市民支前",
    summary:
      "老兵吴春祥回忆，南京老百姓为守军送茶水、饮食和油盐，并帮助抬担架。城门一带是物资与伤员流动的重要空间。",
    context:
      "中华门一带是南京保卫战城垣战斗的重要方向。民众支前并不只发生在前线战壕，也发生在城门内外、街道节点和临时救护点之间。",
    check:
      "口述史能够补充行动细节，但具体日期、人数和组织方式仍需战斗详报、报刊和地方记录旁证。",
    evidence:
      "口述史记录民众支援守军的饮食、油盐和担架行动；具体时间、人数和路线仍缺少档案旁证。",
    sourceIds: ["s8", "s9"],
  },
  {
    id: "guanghuamen",
    name: "光华门",
    x: 68,
    y: 57,
    categories: ["transport", "defense"],
    confidence: "oral",
    period: "1937.12",
    title: "光华门：支前与守城补给",
    summary:
      "吴春祥所在新兵连奉命到光华门附近阻击。其回忆提到市民支援茶水、饮食、油盐和担架。",
    context:
      "光华门是南京保卫战激烈争夺的城门之一。城垣战斗把军队、居民、运输者和救护者压缩在狭小空间内，民众支援往往以临时、分散和高度危险的方式出现。",
    check:
      "现有材料主要来自老兵回忆，需要与参战部队战斗详报和同时期报刊相互印证。",
    evidence:
      "口述史提供了支前行动的具体细节，但回忆形成于战后多年，需要与战斗详报、报刊和地点记录互证。",
    sourceIds: ["s8"],
  },
  {
    id: "yuhuatai",
    name: "雨花台",
    x: 61,
    y: 88,
    categories: ["defense", "medical"],
    confidence: "basic",
    period: "1937.12",
    title: "雨花台：前线救护压力",
    summary:
      "战斗最激烈时，伤员后送困难，担架队与临时救护成为城市医疗系统的一部分。",
    context:
      "雨花台是南京南郊重要防线。战斗烈度上升后，前线救护与后方医院之间的运输成为关键环节，担架队和临时救护人员承受了直接炮火风险。",
    check:
      "担架队的人数、组织归属和伤亡情况尚无统一统计，应把军人回忆与医院收治记录放在一起核对。",
    evidence:
      "老兵回忆提到担架队和伤员转运的困难；具体人数、路线与救护组织仍需继续查找战斗详报和医院记录。",
    sourceIds: ["s8", "s1"],
  },
  {
    id: "ninghailu",
    name: "宁海路5号",
    x: 26,
    y: 36,
    categories: ["shelter"],
    confidence: "confirmed",
    period: "1937.11—1938.02",
    title: "宁海路5号：安全区办公处",
    summary:
      "张群将宁海路5号私宅提供给南京安全区国际委员会作为总办公处。",
    context:
      "宁海路5号不仅是办公地点，也是中外人员联络、物资调配和对外交涉的节点。市政资源、私人场所与国际组织在这里发生连接。",
    check:
      "办公处承担的具体协调事项需结合安全区会议记录、往来函件和市政档案继续梳理。",
    evidence:
      "南京市政府曾提供3万担大米、1万担面粉、10万元现金和450名警察支持安全区；这些资源依赖本地行政与社会网络。",
    sourceIds: ["s10", "s7"],
  },
  {
    id: "wutaishan",
    name: "五台山",
    x: 39,
    y: 47,
    categories: ["defense", "shelter"],
    confidence: "basic",
    period: "1937.12",
    title: "五台山：军事设施撤离与安全区边界",
    summary:
      "五台山一带的军事设施撤离经历多轮交涉。直到12月上旬，安全区边界和军事人员撤离仍未完全落实。",
    context:
      "五台山位于安全区附近，军事设施与难民保护空间重叠。军方担心撤离削弱城防，国际委员会则担心军事目标使安全区失去中立性，双方持续交涉。",
    check:
      "安全区边界在不同文件中存在差异，需区分地图标示、双方协议和实际执行情况。",
    evidence:
      "张连红依据《拉贝日记》等材料说明，安全区军事设施撤离缓慢，12月10日前后才明确部分边界。",
    sourceIds: ["s10", "s7"],
  },
  {
    id: "chongshantang",
    name: "崇善堂掩埋队",
    x: 47,
    y: 62,
    categories: ["relief", "memory"],
    confidence: "confirmed",
    period: "1937.12.13—1938.05.01",
    title: "崇善堂：四支掩埋队与16个收尸处",
    summary:
      "崇善堂组织“崇字掩埋队”，在城内外多个收尸处持续作业，形成工作一览表和战后统计。",
    context:
      "崇善堂是南京地方慈善组织。城陷后，慈善机关通过临时雇工、车辆、绳布、棺木和登记表组织收尸，其工作横跨救济、公共卫生与死亡证据保存。",
    check:
      "109,363与112,267两种统计口径需继续核对统计表版本、覆盖范围和转抄关系，不能直接取其中一个数字作为最终结论。",
    evidence:
      "档案记录4支掩埋队、16个收尸处，统计数字出现109,363与112,267两种口径，说明材料形成过程和统计范围会影响结果。",
    sourceIds: ["s4", "s2"],
  },
];

const confidenceLabels = {
  confirmed: "已证实",
  basic: "基本可信",
  oral: "口述待旁证",
  pending: "待考",
};

const confidenceClasses = {
  confirmed: "status-confirmed",
  basic: "status-basic",
  oral: "status-oral",
  pending: "status-pending",
};

const iconForAction = Object.fromEntries(actions.map((action) => [action.id, action.icon]));

let selectedSiteId = "xiaguan";
let activeFilter = "all";
let searchTerm = "";

const markersEl = document.querySelector("#mapMarkers");
const placeListEl = document.querySelector("#placeList");
const detailPanelEl = document.querySelector("#detailPanel");
const resultCountEl = document.querySelector("#resultCount");
const filterGroupEl = document.querySelector("#filterGroup");
const searchInputEl = document.querySelector("#siteSearch");
const aboutDialog = document.querySelector("#aboutDialog");

function sourceButtons(sourceIds, className = "source-chip") {
  return sourceIds
    .map((id) => {
      const source = sources[id];
      return `<a class="${className}" href="${source.url}" target="_blank" rel="noopener">${source.code} · ${source.type}</a>`;
    })
    .join("");
}

function filteredSites() {
  const normalized = searchTerm.trim().toLowerCase();
  return sites.filter((site) => {
    const categoryMatch = activeFilter === "all" || site.categories.includes(activeFilter);
    const haystack = [site.name, site.title, site.summary, site.context, site.check, site.evidence, site.period].join(" ").toLowerCase();
    return categoryMatch && (!normalized || haystack.includes(normalized));
  });
}

function renderMarkers(list) {
  markersEl.innerHTML = list
    .map(
      (site) => `
        <button
          class="map-pin ${site.id === selectedSiteId ? "is-selected" : ""}"
          type="button"
          style="left:${site.x}%;top:${site.y}%;"
          data-site="${site.id}"
          data-confidence="${site.confidence}"
          aria-label="${site.name}：${site.title}"
          aria-pressed="${site.id === selectedSiteId}"
        >
          <svg class="icon" aria-hidden="true"><use href="#icon-pin"></use></svg>
        </button>
      `,
    )
    .join("");
}

function renderPlaceList(list) {
  placeListEl.innerHTML = list
    .map(
      (site) => `
        <button type="button" data-site="${site.id}" class="${site.id === selectedSiteId ? "is-selected" : ""}">
          ${site.name}
        </button>
      `,
    )
    .join("");
}

function renderDetail(site) {
  if (!site) {
    detailPanelEl.innerHTML = `
      <div class="detail-meta"><span class="detail-index">NO RESULT</span></div>
      <h3>没有匹配的点位</h3>
      <p class="detail-summary">请更换关键词或选择“全部”图层。</p>
    `;
    return;
  }

  const labels = site.categories
    .map((id) => actions.find((action) => action.id === id)?.title)
    .filter(Boolean)
    .map((title) => `<span>${title}</span>`)
    .join("");

  detailPanelEl.innerHTML = `
    <div class="detail-meta">
      <span class="detail-index">MAP / ${site.name}</span>
      <span class="status-badge ${confidenceClasses[site.confidence]}">${confidenceLabels[site.confidence]}</span>
    </div>
    <h3>${site.title}</h3>
    <p class="detail-location">
      <svg class="icon" aria-hidden="true"><use href="#icon-clock"></use></svg>
      ${site.period} · 历史地名示意
    </p>
    <p class="detail-summary">${site.summary}</p>
    <p class="detail-context">${site.context}</p>
    <div class="evidence-box">
      <p>证据摘录</p>
      <blockquote>${site.evidence}</blockquote>
    </div>
    <div class="source-chips">${sourceButtons(site.sourceIds)}</div>
    <div class="research-note">
      <strong>仍需核查</strong>
      <span>${site.check}</span>
    </div>
    <div class="detail-tags">${labels}</div>
  `;
}

function renderSites() {
  const list = filteredSites();
  if (!list.some((site) => site.id === selectedSiteId)) {
    selectedSiteId = list[0]?.id ?? "";
  }
  renderMarkers(list);
  renderPlaceList(list);
  renderDetail(sites.find((site) => site.id === selectedSiteId));
  resultCountEl.textContent = `显示 ${list.length} 个点位`;
}

function renderActions() {
  const grid = document.querySelector("#actionGrid");
  grid.innerHTML = actions
    .map((action, index) => {
      const count = sites.filter((site) => site.categories.includes(action.id)).length;
      return `
        <article class="action-card">
          <header>
            <span class="action-icon">
              <svg class="icon" aria-hidden="true"><use href="#${action.icon}"></use></svg>
            </span>
            <span class="action-count">${String(index + 1).padStart(2, "0")} / ${count} 个点位</span>
          </header>
          <h3>${action.title}</h3>
          <p>${action.description}</p>
        </article>
      `;
    })
    .join("");
}

function renderSources() {
  const list = document.querySelector("#sourceList");
  list.innerHTML = Object.entries(sources)
    .map(
      ([id, source]) => `
        <a class="source-item" href="${source.url}" target="_blank" rel="noopener" title="打开原始资料">
          <span class="source-code">${source.code}</span>
          <span class="source-title">${source.title}</span>
          <span class="source-type">${source.type} ↗</span>
        </a>
      `,
    )
    .join("");
}

function handleSiteClick(event) {
  const button = event.target.closest("[data-site]");
  if (!button) return;
  selectedSiteId = button.dataset.site;
  renderSites();
}

filterGroupEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filterGroupEl.querySelectorAll("[data-filter]").forEach((chip) => {
    const active = chip === button;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderSites();
});

searchInputEl.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderSites();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  activeFilter = "all";
  searchTerm = "";
  selectedSiteId = "xiaguan";
  searchInputEl.value = "";
  filterGroupEl.querySelectorAll("[data-filter]").forEach((chip) => {
    const active = chip.dataset.filter === "all";
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderSites();
});

markersEl.addEventListener("click", handleSiteClick);
placeListEl.addEventListener("click", handleSiteClick);

document.querySelector("#aboutButton").addEventListener("click", () => aboutDialog.showModal());
document.querySelector("#closeAboutDialog").addEventListener("click", () => aboutDialog.close());

const askForm = document.querySelector("#askForm");
const askInput = document.querySelector("#askInput");
const askAnswer = document.querySelector("#askAnswer");

function answerSources(ids) {
  return `<div>${sourceButtons(ids, "source-chip")}</div>`;
}

function answerQuestion(question) {
  const q = question.trim();
  if (!q) {
    return "请输入一个地点、人物或行动关键词。";
  }

  if (q.includes("程瑞芳") || q.includes("金陵女子")) {
    return `
      <strong>程瑞芳</strong>协助魏特琳管理金陵女子文理学院难民收容所，并在1937年12月8日至1938年3月1日留下三万余字日记。日记记录难民所管理、妇女儿童处境和日军暴行。
      ${answerSources(["s5", "s6"])}
    `;
  }

  if (q.includes("下关")) {
    return `
      <strong>下关</strong>同时是渡江、转运与掩埋的重要节点。红十字会第二工作队在1937年12月24日至1938年1月6日前登记掩埋3,425具，随后至1938年3月31日又记录6,735具。
      ${answerSources(["s3", "s8"])}
    `;
  }

  if (q.includes("和平门")) {
    return `
      <strong>和平门</strong>一带由红十字会第一工作队与当地乡人联合掩埋。档案记录1937年12月24日至1938年1月6日前5,704具，1938年1月6日至5月31日又记录6,987具。
      ${answerSources(["s3"])}
    `;
  }

  if (q.includes("红十字") || q.includes("掩埋")) {
    return `
      红十字会和慈善机关留下的是按工作队、日期、地点分栏的统计，而不是一笔总数。红十字会第一工作队记录和平门5,704具、第二工作队记录下关3,425具；崇善堂档案又出现109,363与112,267两种口径。数字需要连同统计范围一起阅读。
      ${answerSources(["s3", "s4", "s2"])}
    `;
  }

  if (q.includes("医院") || q.includes("鼓楼")) {
    return `
      <strong>鼓楼医院</strong>是安全区医疗救护的重要机构。日记材料记录了医院持续救治和物资压力，但不同材料中的病例数、伤员数和流动情况需要继续核对。
      ${answerSources(["s6", "s7", "s10"])}
    `;
  }

  if (q.includes("安全区")) {
    return `
      南京安全区占地约3.86平方公里，依托金陵大学、金陵女子文理学院、鼓楼医院等机构设置难民收容所。南京市方面曾提供粮食、现金和450名警察支持，但日军并未正式承认安全区。
      ${answerSources(["s7", "s10"])}
    `;
  }

  const match = sites.find((site) => [site.name, site.title, site.summary, site.evidence].join(" ").includes(q));
  if (match) {
    return `<strong>${match.name}</strong>：${match.summary} ${answerSources(match.sourceIds)}`;
  }

  return `
    没有在已审核资料中找到与“${q.replace(/[<>&"]/g, "")}”直接对应的条目。可以尝试“下关”“和平门”“程瑞芳”“红十字会”或“安全区”。
  `;
}

askForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askAnswer.innerHTML = answerQuestion(askInput.value);
});

document.querySelector("#suggestionRow").addEventListener("click", (event) => {
  const button = event.target.closest("[data-question]");
  if (!button) return;
  askInput.value = button.dataset.question;
  askAnswer.innerHTML = answerQuestion(askInput.value);
});

const taskInputs = [...document.querySelectorAll("[data-task]")];
const storageKey = "nanjing-civilian-memory-tasks";

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    taskInputs.forEach((input) => {
      input.checked = Boolean(saved[input.dataset.task]);
    });
  } catch {
    taskInputs.forEach((input) => {
      input.checked = false;
    });
  }
  updateTaskProgress();
}

function saveTasks() {
  const saved = Object.fromEntries(taskInputs.map((input) => [input.dataset.task, input.checked]));
  localStorage.setItem(storageKey, JSON.stringify(saved));
  updateTaskProgress();
}

function updateTaskProgress() {
  const complete = taskInputs.filter((input) => input.checked).length;
  document.querySelector("#taskProgressText").textContent = `${complete} / ${taskInputs.length} 项任务步骤已完成`;
  document.querySelector("#taskProgressBar").style.width = `${(complete / taskInputs.length) * 100}%`;
}

taskInputs.forEach((input) => input.addEventListener("change", saveTasks));
document.querySelector("#resetTasks").addEventListener("click", () => {
  taskInputs.forEach((input) => {
    input.checked = false;
  });
  saveTasks();
});

aboutDialog.addEventListener("click", (event) => {
  if (event.target === aboutDialog) aboutDialog.close();
});

renderActions();
renderSources();
renderSites();
loadTasks();
