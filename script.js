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
  "nav.interests": "研究",
  "interests.title": "研究兴趣",
  "stream.social.name": "AI 与<br />社会科学研究",
  "stream.legal.name": "AI 与<br />法律决策",
  "stream.social.question": "AI 如何帮助我们研究社会过程、检验社会科学理论？",
  "stream.social.body": "我探索 AI 如何支持社会科学中的测量、分析与模拟，并以理论指导研究设计和结果解释。",
  "stream.legal.question": "AI 如何影响法律情境中的人类判断与决策？",
  "stream.legal.body": "我研究人们如何评估和使用法律情境中的 AI 建议，重点关注依赖、信任与专业知识的作用。",
  "tag.criminology": "犯罪学",
  "tag.css": "计算社会科学",
  "tag.law": "实证法律研究",
  "tag.decision": "决策研究",
  "tag.hai": "人机交互",
  "study.related": "相关研究",
  "study.details": "研究详情",
  "study.trojan.title": "法庭中的特洛伊木马",
  "study.trojan.status": "已获 <em>Legal and Criminological Psychology</em> 接收",
  "study.design.label": "研究设计",
  "study.trojan.design": "法律从业者、法学生和普通公众在收到正确或错误的 AI 建议后，对刑事与民事案例作出判断。我们区分了直接采用 AI 提供的法律依据，以及在决策结果上与 AI 建议一致这两种采纳方式。",
  "study.findings.label": "主要发现",
  "study.trojan.findings": "在本研究的实验条件下，相比正确建议，参与者的决策较少与错误的 AI 建议一致。我们未发现不同法律专业水平的参与者在采纳行为上存在统计上可检测的差异。",
  "study.publication": "查看论文信息",
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
const streamControls = document.querySelector(".stream-controls");
const streamButtons = document.querySelectorAll("[data-stream]");
const streamPanels = document.querySelectorAll("[data-stream-panel]");
let activeResearchStream = "legal";

const selectResearchStream = (stream) => {
  if (![...streamPanels].some((panel) => panel.dataset.streamPanel === stream)) return;
  activeResearchStream = stream;
  streamPanels.forEach((panel) => {
    panel.hidden = panel.dataset.streamPanel !== stream;
  });
  streamButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.stream === stream));
  });
};

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
  streamControls?.setAttribute("aria-label", isChinese ? "选择研究主线" : "Choose a research stream");

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

streamButtons.forEach((button) => {
  button.addEventListener("click", () => selectResearchStream(button.dataset.stream));
});

selectResearchStream(activeResearchStream);
if (streamControls) streamControls.hidden = false;

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
