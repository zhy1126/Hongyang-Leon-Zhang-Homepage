const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.querySelector("#current-year");

const zhTranslations = {
  skip: "跳至主要内容",
  "nav.about": "关于",
  "nav.commons": "共创",
  "nav.news": "动态",
  "nav.research": "研究",
  "nav.publications": "论文",
  "nav.cv": "简历",
  "hero.eyebrow": "犯罪学 · 实证法律研究",
  "hero.name": "张宏扬",
  "hero.native_name": "Hongyang (Leon) Zhang",
  "hero.identity": "张宏扬 · 犯罪学研究者",
  "hero.education_label": "教育背景",
  "hero.email_label": "邮箱",
  "education.cambridge_degree": "犯罪学哲学硕士（MPhil）",
  "education.cambridge_distinction": "Distinction（优异）",
  "education.cambridge_school": "剑桥大学",
  "education.zuel_degree": "LL.B.",
  "education.zuel_school": "中南财经政法大学",
  "hero.research_button": "查看研究",
  "hero.contact_button": "联系我",
  "focus.label": "研究方向",
  "focus.one": "犯罪与空间",
  "focus.two": "法律决策",
  "focus.three": "人机交互",
  "focus.four": "可解释机器学习",
  "about.index": "01 / 关于",
  "about.title": "理论驱动，AI 赋能。",
  "about.lede": "我的研究位于犯罪学、人机交互与计算社会科学的交叉地带。我希望开展由理论驱动、由人工智能赋能的跨学科研究，用以理解并改善高风险情境中的人类决策。",
  "about.body": "我拥有剑桥大学犯罪学哲学硕士（MPhil）学位，以及中南财经政法大学法学学士（LL.B.）学位。我的研究结合实验、空间分析、可解释机器学习与混合研究方法，使复杂的决策过程变得可观察、可测量。",
  "methods.one": "实验研究",
  "methods.two": "空间分析",
  "methods.three": "R 与 Python",
  "methods.four": "大语言模型辅助研究",
  "commons.index": "研究兴趣",
  "commons.title": "四个视角，共同追问。",
  "commons.note": "拖动小羊，或选择一个站点",
  "commons.center_top": "开放的",
  "commons.center_main": "研究<br />共创空间",
  "commons.node.criminology": "犯罪学",
  "commons.node.law": "实证<br />法律研究",
  "commons.node.decision": "决策<br />研究",
  "commons.node.hai": "人机<br />交互",
  "commons.signal": "当前问题",
  "commons.next": "下一个视角",
  "commons.contribute": "分享一个问题",
  "commons.footnote": "点击后会在 GitHub 项目中打开一份结构化的社区问题表单。",
  "news.index": "最新 / 动态",
  "news.title": "近期动态",
  "news.publications_link": "查看发表成果",
  "news.empty": "新的动态将在这里更新。",
  "news.one.date": "2025",
  "news.one.text": "开始在剑桥大学攻读犯罪学哲学硕士（MPhil）。",
  "news.two.date": "2024",
  "news.two.text": "发表关于数智时代预测性侦查程序适用的研究。",
  "news.three.date": "2024",
  "news.three.text": "获中国国际大学生创新大赛铜奖。",
  "research.index": "02 / 研究",
  "research.title": "代表性研究项目",
  "research.note": "当前及近期工作",
  "project.one.kicker": "人机协同决策 · 情景实验",
  "project.one.title": "AI 风险提示与警务决策",
  "project.one.body": "一项预注册的 2 × 2 情景实验，考察信息密度与任务类型如何影响警务资源配置、干预强度、AI 依赖、信心及信息搜索行为。",
  "project.two.kicker": "法律人工智能 · 对照实验",
  "project.two.title": "法庭中的特洛伊木马：错误 AI 建议对法律裁量决策的影响",
  "project.two.body": "研究法律从业者、法学生和普通公众如何回应错误的 AI 法律建议，并在 222 名参与者中测量显性采纳、隐性采纳、信心与信任。",
  "project.three.kicker": "城市犯罪 · 可解释机器学习",
  "project.three.title": "快速城市化背景下的街头犯罪预测",
  "project.three.body": "运用 XGBoost、SHAP 与部分依赖图，对深圳街头犯罪进行理论驱动分析，将空间、人口与历史变量和网格层面的犯罪模式联系起来。",
  "project.four.kicker": "实证法律研究 · 自然语言处理",
  "project.four.title": "识别中国指导性案例的约束力",
  "project.four.body": "使用大语言模型识别司法裁判对指导性案例的遵循或偏离，从而在正式援引次数之外，提供一种可扩展的实际影响力测量方法。",
  "project.status": "进行中",
  "publications.index": "03 / 论文",
  "publications.title": "发表成果",
  "publications.note": "同行评议期刊论文",
  "publication.one.title": "数智时代预测性侦查的程序适用",
  "publication.one.authors": "栾兴良、<strong>张宏扬</strong>",
  "publication.one.venue": "<em>中国刑警学院学报</em>，(5)，40–47。",
  "publication.two.title": "预测性警务情境下执法启动的程序控制",
  "publication.two.authors": "栾兴良、<strong>张宏扬</strong>",
  "publication.two.venue": "<em>中国刑警学院学报</em>，(6)，120–128。",
  "contact.index": "04 / 联系",
  "contact.title": "欢迎交流。",
  "contact.body": "欢迎就犯罪学、实证法律研究与以人为本的人工智能展开交流。",
  "footer.note": "为清晰、好奇与开放的网络而建。",
  "footer.back": "返回顶部",
};

const i18nNodes = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll("[data-lang]");
const commonsNodes = document.querySelectorAll("[data-commons-theme]");
const commonsLabel = document.querySelector("#commons-label");
const commonsQuestion = document.querySelector("#commons-question");
const commonsDescription = document.querySelector("#commons-description");
const commonsTags = document.querySelector("#commons-tags");
const commonsCount = document.querySelector("#commons-count");
const interestWheel = document.querySelector("#interest-wheel");
const interestRange = document.querySelector("#interest-range");
const interestStory = document.querySelector(".interest-story");

i18nNodes.forEach((node) => {
  node.dataset.en = node.innerHTML;
});

const getSavedLanguage = () => {
  try {
    return localStorage.getItem("preferred-language");
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem("preferred-language", language);
  } catch {
    // The language still switches when storage is unavailable.
  }
};

const commonsThemes = {
  criminology: {
    en: {
      label: "Criminology & criminal justice",
      question: "How do places, institutions, and social contexts shape crime and safety?",
      description: "I connect criminological theory with spatial and causal evidence to study when environments prevent, concentrate, or displace harm.",
      tags: ["Routine activity", "Crime & place", "Prevention"],
    },
    zh: {
      label: "犯罪学与刑事司法",
      question: "空间、制度与社会情境如何共同塑造犯罪与安全？",
      description: "我将犯罪学理论与空间、因果证据相结合，研究环境何时能够预防、集中或转移伤害。",
      tags: ["日常活动理论", "犯罪与空间", "犯罪预防"],
    },
  },
  law: {
    en: {
      label: "Empirical legal studies",
      question: "How can we measure law as it works in practice—not only as it is written?",
      description: "I study legal rules, guiding cases, and professional judgment using experiments, text analysis, and computational methods.",
      tags: ["Legal institutions", "Guiding cases", "Text analysis"],
    },
    zh: {
      label: "实证法律研究",
      question: "如何测量实践中真实运行的法律，而不只是文本中的法律？",
      description: "我运用实验、文本分析与计算方法，研究法律规则、指导性案例与专业判断。",
      tags: ["法律制度", "指导性案例", "文本分析"],
    },
  },
  decision: {
    en: {
      label: "Decision-making",
      question: "How do information, uncertainty, and discretion shape high-stakes choices?",
      description: "Scenario experiments trace how evidence formats, risk signals, and institutional roles change attention, confidence, and action.",
      tags: ["Discretion", "Risk", "Experiments"],
    },
    zh: {
      label: "决策研究",
      question: "信息、不确定性与裁量权如何塑造高风险决策？",
      description: "我通过情景实验追踪证据形式、风险信号与制度角色如何改变注意力、信心与行动。",
      tags: ["裁量权", "风险", "实验研究"],
    },
  },
  hai: {
    en: {
      label: "Human–AI interaction",
      question: "When does AI augment human judgment—and when does it redirect it?",
      description: "I examine reliance, trust, error adoption, and oversight in legal and policing decisions shaped by AI advice.",
      tags: ["AI advice", "Trust", "Human oversight"],
    },
    zh: {
      label: "人机交互",
      question: "AI 何时增强人的判断，又何时重新导向人的判断？",
      description: "我研究 AI 建议介入法律与警务决策后产生的依赖、信任、错误采纳与监督问题。",
      tags: ["AI 建议", "信任", "人的监督"],
    },
  },
};

const commonsThemeOrder = ["criminology", "law", "decision", "hai"];
let activeCommonsTheme = "criminology";

const renderCommons = (theme) => {
  if (!commonsThemes[theme]) return;
  activeCommonsTheme = theme;
  const language = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  const content = commonsThemes[theme][language];
  const themeIndex = commonsThemeOrder.indexOf(theme);

  if (commonsLabel) commonsLabel.textContent = content.label;
  if (commonsQuestion) commonsQuestion.textContent = content.question;
  if (commonsDescription) commonsDescription.textContent = content.description;
  if (commonsCount) commonsCount.textContent = `${String(themeIndex + 1).padStart(2, "0")} / 04`;
  if (commonsTags) {
    commonsTags.replaceChildren(
      ...content.tags.map((tag) => {
        const item = document.createElement("span");
        item.textContent = tag;
        return item;
      }),
    );
  }

  commonsNodes.forEach((node) => {
    const isActive = node.dataset.commonsTheme === theme;
    node.classList.toggle("is-active", isActive);
    node.setAttribute("aria-pressed", String(isActive));
  });

  if (interestWheel) {
    interestWheel.style.setProperty("--interest-position", `${(themeIndex / (commonsThemeOrder.length - 1)) * 100}%`);
    interestWheel.dataset.activeTheme = theme;
  }

  if (interestRange) {
    interestRange.value = String(themeIndex);
    interestRange.setAttribute("aria-valuetext", content.label);
  }

  if (interestStory) {
    interestStory.classList.remove("is-changing");
    void interestStory.offsetWidth;
    interestStory.classList.add("is-changing");
  }
};

const applyLanguage = (language, updateUrl = true) => {
  const isChinese = language === "zh";
  const activeLanguage = isChinese ? "zh" : "en";

  document.documentElement.lang = isChinese ? "zh-CN" : "en";
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.innerHTML = isChinese && zhTranslations[key] ? zhTranslations[key] : node.dataset.en;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const title = isChinese ? "张宏扬｜犯罪学研究者" : "Hongyang Zhang | Criminology Researcher";
  const description = isChinese
    ? "张宏扬的学术主页：犯罪学、实证法律研究、决策与人机交互。"
    : "Hongyang Zhang — criminology researcher working on empirical legal studies, decision-making, and human–AI interaction.";
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

  nav?.setAttribute("aria-label", isChinese ? "主导航" : "Main navigation");
  document.querySelector(".lang-switch")?.setAttribute("aria-label", isChinese ? "语言选择" : "Language");
  document.querySelector(".hero-education")?.setAttribute("aria-label", isChinese ? "教育背景" : "Education");
  document.querySelector(".hero-portrait")?.setAttribute("aria-label", isChinese ? "张宏扬的肖像照片" : "Portrait of Hongyang Zhang");
  document.querySelector(".inline-meta")?.setAttribute("aria-label", isChinese ? "研究方法" : "Research methods");
  document.querySelector(".profile-photo")?.setAttribute("alt", isChinese ? "张宏扬的肖像照片" : "Portrait of Hongyang Zhang");
  document.querySelector(".interest-stops")?.setAttribute("aria-label", isChinese ? "研究兴趣" : "Research interests");
  interestRange?.setAttribute("aria-label", isChinese ? "选择研究兴趣" : "Choose a research interest");
  commonsTags?.setAttribute("aria-label", isChinese ? "相关概念" : "Related concepts");

  renderCommons(activeCommonsTheme);

  saveLanguage(activeLanguage);

  if (updateUrl) {
    try {
      const url = new URL(window.location.href);
      if (isChinese) url.searchParams.set("lang", "zh");
      else url.searchParams.delete("lang");
      history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    } catch {
      // URL updates are optional; content switching remains functional.
    }
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

commonsNodes.forEach((node) => {
  node.addEventListener("click", () => renderCommons(node.dataset.commonsTheme));
});

interestRange?.addEventListener("input", () => {
  renderCommons(commonsThemeOrder[Number(interestRange.value)]);
});

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const initialLanguage = ["en", "zh"].includes(requestedLanguage)
  ? requestedLanguage
  : getSavedLanguage() === "zh"
    ? "zh"
    : "en";
applyLanguage(initialLanguage, false);

const closeNavigation = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};

navToggle?.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  nav.classList.toggle("is-open", willOpen);
  navToggle.setAttribute("aria-expanded", String(willOpen));
  document.body.classList.toggle("nav-open", willOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (year) year.textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
