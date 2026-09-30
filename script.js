const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.querySelector("#current-year");
const backToTop = document.querySelector("#back-to-top");

const zhTranslations = {
  skip: "跳至主要内容",
  "nav.about": "关于",
  "nav.commons": "共创",
  "nav.news": "动态",
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
  "education.zuel_degree": "法学学士",
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
  "about.lede": "我的研究围绕两个相互关联的方向展开：人工智能如何支持社会科学研究，以及它如何影响法律情境中的人类判断与决策。我通过实证研究，并借鉴计算社会科学与人机交互（HCI）的方法，开展这两个方向的工作。",
  "about.body": "我拥有剑桥大学犯罪学哲学硕士（MPhil）学位，以及中南财经政法大学法学学士（LL.B.）学位。",
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
  "news.acceptance.date": "2026年9月",
  "news.acceptance.text": "我们的论文 <a href=\"#publication-trojan-horse\">《The Trojan Horse in the Courtroom: The Impact of Flawed AI Advice on Legal Discretionary Decision-Making》</a>已获 <em>Legal and Criminological Psychology</em> 接收。",
  "news.prize.date": "2026年9月",
  "news.prize.text": "很高兴获得由剑桥大学犯罪学研究所颁发的 <strong>Manuel López-Rey Graduate Prize</strong>，以表彰在 2025–26 年度犯罪学 MPhil 项目中的最佳学术表现；我在每门课程中均获得 Distinction。",
  "publications.index": "03 / 论文",
  "publications.title": "发表成果",
  "publications.note": "同行评议期刊论文",
  "publication.forthcoming": "即将发表",
  "publication.one.reference": "栾兴良、<strong>张宏扬</strong>（2024）。数智时代预测性侦查的程序适用。<em>中国刑警学院学报</em>，(5)，40–47。",
  "publication.two.reference": "栾兴良、<strong>张宏扬</strong>（2023）。预测性警务情境下执法启动的程序控制。<em>中国刑警学院学报</em>，(6)，120–128。",
  "contact.index": "04 / 联系",
  "contact.title": "欢迎交流。",
  "contact.body": "欢迎就犯罪学、实证法律研究与以人为本的人工智能展开交流。",
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
      question: "How do places, urban environments, and social contexts shape crime and safety?",
      description: "I connect criminological theory with spatial and causal evidence to study when environments prevent, concentrate, or displace harm.",
      tags: ["Routine activity", "Crime & place", "Prevention"],
    },
    zh: {
      label: "犯罪学与刑事司法",
      question: "地点、城市环境与社会情境如何共同塑造犯罪与安全？",
      description: "我将犯罪学理论与空间、因果证据相结合，研究环境何时能够预防、集中或转移伤害。",
      tags: ["日常活动理论", "犯罪与空间", "犯罪预防"],
    },
  },
  law: {
    en: {
      label: "Empirical legal studies",
      question: "How can we measure law as it works in practice, not only as it is written?",
      description: "I study legal rules and professional judgment using experiments, text analysis, and computational methods.",
      tags: ["Legal institutions", "Professional judgment", "Text analysis"],
    },
    zh: {
      label: "实证法律研究",
      question: "如何测量实践中真实运行的法律，而不只是文本中的法律？",
      description: "我运用实验、文本分析与计算方法，研究法律规则与专业判断。",
      tags: ["法律制度", "专业判断", "文本分析"],
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

  const title = isChinese
    ? "张宏扬（Hongyang Leon Zhang）｜学术主页"
    : "Hongyang Leon Zhang (张宏扬) | Academic Homepage";
  const description = isChinese
    ? "张宏扬（Hongyang Leon Zhang）的学术主页。剑桥大学犯罪学 MPhil，研究方向包括计算犯罪学、实证法律研究、决策与人机交互。"
    : "Hongyang Leon Zhang (张宏扬), Cambridge MPhil in Criminology. Research in computational criminology, empirical legal studies, and human–AI interaction.";
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

  document.querySelector(".profile")?.setAttribute("aria-label", isChinese ? "个人信息" : "Profile");
  nav?.setAttribute("aria-label", isChinese ? "主导航" : "Main navigation");
  document.querySelector(".lang-switch")?.setAttribute("aria-label", isChinese ? "语言选择" : "Language");
  document.querySelector(".hero-education")?.setAttribute("aria-label", isChinese ? "教育背景" : "Education");
  document.querySelector(".hero-portrait")?.setAttribute("aria-label", isChinese ? "张宏扬（Hongyang Leon Zhang）的肖像照片" : "Portrait of Hongyang Leon Zhang (张宏扬)");
  document.querySelector(".inline-meta")?.setAttribute("aria-label", isChinese ? "研究方法" : "Research methods");
  document.querySelector(".profile-photo")?.setAttribute("alt", isChinese ? "张宏扬（Hongyang Leon Zhang）的肖像照片" : "Portrait of Hongyang Leon Zhang (张宏扬)");
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

backToTop?.addEventListener("click", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

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
