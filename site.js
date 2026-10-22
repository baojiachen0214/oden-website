"use strict";
(() => {
const messages = {
  "en": {
    "skip": "Skip to content",
    "navFeatures": "A closer look",
    "navExport": "Made to share",
    "support": "Support",
    "appearance": "Appearance",
    "system": "System",
    "light": "Light",
    "dark": "Dark",
    "navJoin": "Join the beta ↗",
    "heroEyebrow": "NATIVE MAC APP · PUBLIC BETA",
    "heroA": "Good ideas",
    "heroB": "belong together.",
    "heroLead": "A thought. A document. A whole new connection. Give everything a place on one thoughtful canvas.",
    "join": "Try OdenMap for Mac",
    "takeLook": "Take a closer look",
    "macRequirements": "macOS 14+ · Apple Silicon & Intel · Free during the beta",
    "actualApp": "The real Mac app. An illustrative workspace.",
    "enlarge": "Click to see the details ↗",
    "nativeMac": "Feels right at home on Mac",
    "localFiles": "Your ideas, in your files",
    "swiftBuilt": "Built with Swift & SwiftUI",
    "featureEyebrow": "A LITTLE MORE THAN A MIND MAP",
    "featureA": "See the thought.",
    "featureB": "Keep the context.",
    "featureLead": "Words are a beginning. Bring in the things that help an idea make sense, then connect them your way.",
    "resourcesLabel": "IN CONTEXT",
    "resourcesTitle": "Keep the source beside the spark.",
    "resourcesBody": "Images, PDFs, Markdown and more can live alongside your topics. Your research stays part of the conversation.",
    "imagesTag": "Images",
    "writingLabel": "ANOTHER PERSPECTIVE",
    "writingTitle": "Same ideas. A different view.",
    "writingBody": "Move from the canvas to a structured writing view. Follow a thread, find the right words, then return to the big picture.",
    "connectTitle": "Make a meaningful connection.",
    "connectBody": "Go beyond the hierarchy with connections, summaries and boundaries. Let the structure follow the idea.",
    "mathTitle": "A place for the precise things.",
    "mathBody": "Write with rich text, Markdown and LaTeX formulas. Keep an explanation and its equation in the same train of thought.",
    "styleTitle": "Quietly, unmistakably yours.",
    "styleBody": "Choose a considered template or refine the details. Light and dark appearances keep your workspace comfortable.",
    "exportEyebrow": "WHAT'S NEXT IN THE BETA",
    "exportA": "Made to think.",
    "exportB": "Ready to share.",
    "exportBody": "An idea should travel well. Share a crisp document, a detailed image, or an interactive webpage that opens offline.",
    "exportPoint1": "Offline HTML with images, folding and notes",
    "exportPoint2": "Transparent backgrounds and an optional grid",
    "exportPoint3": "Native previews, from the whole page to the fine print",
    "exportCaption": "A look at the new export workflow in 1.3.",
    "appleEyebrow": "AT HOME ON APPLE",
    "platformTitle": "Mac, first. More room, soon.",
    "availableBeta": "PUBLIC BETA",
    "macPlatform": "Native, built with Swift. Ready for your next idea.",
    "comingSoon": "COMING SOON",
    "mobilePlatform": "OdenMap for iOS and iPadOS is on the way.",
    "betaEyebrow": "LET'S MAKE SOMETHING BETTER",
    "betaA": "Your next idea",
    "betaB": "starts here.",
    "betaBody": "Help shape OdenMap. Join the open Mac beta, try it in your own workflow, and tell us what could feel better.",
    "betaJoin": "Join on TestFlight",
    "betaLimit": "Open recruitment · Up to 5,000 testers · Mac only for now",
    "step1Title": "Open the invitation",
    "step1Body": "Follow our public link on your Mac. An Apple Account and TestFlight are required.",
    "step2Title": "Bring an idea of your own",
    "step2Body": "Explore the canvas, collect resources and try your usual Mac workflow.",
    "step3Title": "Tell us how it feels",
    "step3Body": "Send feedback in TestFlight. For crashes, include your macOS version, Mac model and steps to reproduce.",
    "betaVersion": "Version 1.2 is available now. New approved builds arrive through TestFlight.",
    "betaNote": "Beta software can have rough edges. Keep a backup of important documents.",
    "footerLine": "A little room for your next good idea.",
    "privacy": "Privacy",
    "testNotes": "Test notes",
    "footerNative": "Made natively for Mac. Built with Swift."
  },
  "zh": {
    "skip": "跳到正文",
    "navFeatures": "走近 OdenMap",
    "navExport": "分享想法",
    "support": "支持",
    "appearance": "外观",
    "system": "跟随系统",
    "light": "浅色",
    "dark": "深色",
    "navJoin": "加入测试 ↗",
    "heroEyebrow": "原生 MAC 应用 · 公开测试中",
    "heroA": "好想法，",
    "heroB": "在这里相遇。",
    "heroLead": "一个念头，一份文稿，一次新的连接。让思路与资料，在同一张画布上慢慢成形。",
    "join": "试用 Mac 版 OdenMap",
    "takeLook": "走近看一看",
    "macRequirements": "macOS 14+ · Apple Silicon 与 Intel · 测试期间免费",
    "actualApp": "真实 Mac 界面，示例研究文稿。",
    "enlarge": "点击查看细节 ↗",
    "nativeMac": "熟悉的原生 Mac 体验",
    "localFiles": "你的想法，保存在自己的文件里",
    "swiftBuilt": "使用 Swift 与 SwiftUI 构建",
    "featureEyebrow": "不止于思维导图",
    "featureA": "看见思路，",
    "featureB": "也留住来处。",
    "featureLead": "文字是起点。把启发你的资料带进来，让想法沿着自己的方式生长。",
    "resourcesLabel": "资料就在身边",
    "resourcesTitle": "把灵感和它的来处，放在一起。",
    "resourcesBody": "图片、PDF、Markdown 等资料，与主题共处一张画布。研究的线索，始终跟得上你的思路。",
    "imagesTag": "图片",
    "writingLabel": "换个角度思考",
    "writingTitle": "同样的想法，另一种视角。",
    "writingBody": "在画布与结构化写作之间切换。顺着线索找到恰当的表达，再回到全局。",
    "connectTitle": "让连接有意义。",
    "connectBody": "用连接线、概要与外框，延伸层级以外的关系。让结构跟着想法走。",
    "mathTitle": "严谨的思考，也有位置。",
    "mathBody": "富文本、Markdown 与 LaTeX 公式，把解释和推导留在同一条思路中。",
    "styleTitle": "安静，又有自己的样子。",
    "styleBody": "选一款用心设计的模板，或细调每一处。浅色与深色外观，让工作空间始终舒适。",
    "exportEyebrow": "1.3 测试版新体验",
    "exportA": "为思考而生，",
    "exportB": "也为分享准备好。",
    "exportBody": "好想法，值得清晰地传递。导出清晰的文稿、精细的图片，或离线也能打开的交互网页。",
    "exportPoint1": "离线 HTML，保留图片、折叠与备注",
    "exportPoint2": "透明背景与可选网格",
    "exportPoint3": "原生预览，从完整页面到细节",
    "exportCaption": "抢先看：1.3 的全新导出流程。",
    "appleEyebrow": "为 APPLE 设备而设计",
    "platformTitle": "先在 Mac，接着去更多地方。",
    "availableBeta": "公开测试中",
    "comingSoon": "即将推出",
    "macPlatform": "使用 Swift 原生构建，准备好接住你的下一个想法。",
    "mobilePlatform": "适用于 iOS 与 iPadOS 的 OdenMap 正在路上。",
    "betaEyebrow": "一起，让它更好一点",
    "betaA": "下一个好想法，",
    "betaB": "从这里开始。",
    "betaBody": "参与 Mac 公开测试，在自己的工作流程中使用 OdenMap。把你的感受告诉我们，一起打磨它。",
    "betaJoin": "通过 TestFlight 加入",
    "betaLimit": "公开招募 · 最多 5,000 人 · 目前仅提供 Mac 版",
    "step1Title": "打开邀请",
    "step1Body": "在 Mac 上打开公开邀请链接，需要 Apple 账户与 TestFlight。",
    "step2Title": "带上自己的想法",
    "step2Body": "探索画布、收集资料，试试你日常在 Mac 上的工作方式。",
    "step3Title": "告诉我们使用感受",
    "step3Body": "通过 TestFlight 反馈。遇到崩溃时，请附上 macOS 版本、Mac 型号与复现步骤。",
    "betaVersion": "目前可体验 1.2。后续获批版本会通过 TestFlight 提供。",
    "betaNote": "测试版仍有待打磨，请为重要文稿保留备份。",
    "footerLine": "给下一个好想法，留一点空间。",
    "privacy": "隐私",
    "testNotes": "测试记录",
    "footerNative": "为 Mac 原生开发，使用 Swift 构建。"
  }
};

const root = document.documentElement;
const systemDark = matchMedia('(prefers-color-scheme: dark)');
const storage = {get(key){try{return localStorage.getItem(key)}catch{return null}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};
let language = root.dataset.lang === 'zh' ? 'zh' : 'en';
let theme = ['system','light','dark'].includes(root.dataset.theme) ? root.dataset.theme : 'system';
const titles = {
 'index.html': {en:'OdenMap — Make room for your ideas',zh:'OdenMap — 给好想法留一点空间'},
 'support.html': {en:'Support — OdenMap',zh:'支持 — OdenMap'},
 'privacy.html': {en:'Privacy — OdenMap',zh:'隐私政策 — OdenMap'},
 'performance.html': {en:'Test notes — OdenMap',zh:'测试记录 — OdenMap'}
};
const shotAlts = {
 canvas:{en:'OdenMap 1.3: a research mind map with an image, Markdown notes and a LaTeX formula.',zh:'OdenMap 1.3：结合图片、Markdown 笔记与 LaTeX 公式的研究导图。'},
 resources:{en:'Real OdenMap resource nodes: an image and a Markdown research note.',zh:'OdenMap 的真实资源节点：图片与 Markdown 研究笔记。'},
 writing:{en:'The native OdenMap structured writing view, with topics and resources.',zh:'OdenMap 原生结构化写作视图，包含主题和资源。'},
 export:{en:'The native OdenMap 1.3 export window and preview.',zh:'OdenMap 1.3 原生导出窗口与预览。'}
};
function applyLanguage(next,save=false){
 language=next==='zh'?'zh':'en';
 root.dataset.lang=language;root.lang=language==='zh'?'zh-Hans':'en';
 document.querySelectorAll('[data-i18n]').forEach(el=>{const value=messages[language][el.dataset.i18n];if(value!==undefined)el.textContent=value});
 document.querySelectorAll('[lang="en"], [lang="zh-Hans"]').forEach(el=>{if(el===root)return;el.hidden=el.lang!==(language==='zh'?'zh-Hans':'en')});
 const toggle=document.querySelector('#language-switch');
 toggle.textContent=language==='zh'?'EN':'中文';toggle.setAttribute('aria-label',language==='zh'?'Switch to English':'切换到简体中文');
 document.querySelector('.appearance summary').setAttribute('aria-label',messages[language].appearance);
 document.querySelectorAll('[data-local]').forEach(a=>{const u=new URL(a.getAttribute('href'),location.href);u.searchParams.set('lang',language);a.href=u.href});
 document.querySelectorAll('[data-shot]').forEach(img=>img.alt=shotAlts[img.dataset.shot][language]);
 document.querySelectorAll('[data-zoom]').forEach(b=>b.setAttribute('aria-label',language==='zh'?'放大查看截图':'View full screenshot'));
 document.querySelector('.desktop-nav').setAttribute('aria-label',language==='zh'?'主导航':'Main navigation');
 document.querySelector('.footer-bottom nav').setAttribute('aria-label',language==='zh'?'页脚':'Footer');
 const dialog=document.querySelector('.image-dialog');
 if(dialog){dialog.setAttribute('aria-label',language==='zh'?'产品截图':'Screenshot');dialog.querySelector('button').setAttribute('aria-label',language==='zh'?'关闭截图':'Close screenshot')}
 const page=location.pathname.split('/').pop()||'index.html';document.title=(titles[page]||titles['index.html'])[language];
 document.querySelector('meta[name="description"]').content=language==='zh'?'OdenMap：使用 Swift 原生构建的 Mac 思维工作空间。连接想法、资料与公式，加入 TestFlight 公开测试。':'A native Swift app for Mac. Connect ideas, resources and formulas on one thoughtful canvas. Join the public TestFlight beta.';
 if(save){storage.set('oden-lang',language);const u=new URL(location.href);u.searchParams.set('lang',language);history.replaceState(null,'',u)}
}
function applyTheme(next,save=false){
 theme=['system','light','dark'].includes(next)?next:'system';
 const scheme=theme==='system'?(systemDark.matches?'dark':'light'):theme;
 root.dataset.theme=theme;root.dataset.scheme=scheme;
 document.querySelector('meta[name="theme-color"]').content=scheme==='dark'?'#191b19':'#f8f8f5';
 document.querySelectorAll('[data-theme-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===theme)));
 document.querySelectorAll('[data-shot]').forEach(img=>{img.src='assets/'+img.dataset.shot+'-'+scheme+'.webp'});
 if(save)storage.set('oden-theme',theme);
}
applyLanguage(language);applyTheme(theme);
document.querySelector('#language-switch').addEventListener('click',()=>applyLanguage(language==='zh'?'en':'zh',true));
document.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>{applyTheme(b.dataset.themeChoice,true);document.querySelector('.appearance').open=false}));
systemDark.addEventListener('change',()=>{if(theme==='system')applyTheme(theme)});
const appearance=document.querySelector('.appearance');
document.addEventListener('click',e=>{if(!appearance.contains(e.target))appearance.open=false});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&appearance.open){appearance.open=false;appearance.querySelector('summary').focus()}});
const dialog=document.querySelector('.image-dialog');
if(dialog){
 let previousFocus;
 document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{const source=b.querySelector('img');const target=dialog.querySelector('img');target.src=source.currentSrc;target.alt=source.alt;previousFocus=b;dialog.showModal();document.body.style.overflow='hidden'}));
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
 dialog.addEventListener('close',()=>{document.body.style.overflow='';if(previousFocus)previousFocus.focus({preventScroll:true})});
}
})();
