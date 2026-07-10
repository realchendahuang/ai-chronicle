import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(here, '..')
const generatedDir = join(rootDir, '.generated')
const distDir = join(rootDir, 'dist/client')
const basePath = '/ai-chronicle'
const siteDir = join(distDir, basePath.slice(1))
const siteOrigin = 'https://chendahuang.com'

const events = JSON.parse(readFileSync(join(generatedDir, 'events.json'), 'utf8'))
const concepts = JSON.parse(readFileSync(join(generatedDir, 'concepts.json'), 'utf8'))
const companies = JSON.parse(readFileSync(join(generatedDir, 'companies.json'), 'utf8'))
const modelFamilies = JSON.parse(readFileSync(join(generatedDir, 'modelFamilies.json'), 'utf8'))
const assetVersion = createHash('sha256')
  .update(readFileSync(join(rootDir, 'public/assets/app.css')))
  .update(readFileSync(join(rootDir, 'public/assets/app.js')))
  .update(readFileSync(join(rootDir, 'public/assets/i18n-en.json')))
  .update(JSON.stringify({ events, concepts, companies, modelFamilies }))
  .digest('hex')
  .slice(0, 12)

const eventById = new Map(events.map((event) => [event.id, event]))
const conceptById = new Map(concepts.map((concept) => [concept.id, concept]))
const companyById = new Map(companies.map((company) => [company.id, company]))
const modelFamiliesByCompany = new Map(companies.map((company) => [
  company.id,
  modelFamilies.filter((family) => family.company === company.id),
]))

const topicLabels = {
  'ai-foundations': 'AI 基础',
  'ai-winter': 'AI 寒冬',
  'deep-learning': '深度学习',
  'computer-vision': '计算机视觉',
  'natural-language-processing': '自然语言处理',
  nlp: '自然语言处理',
  'large-language-models': '大语言模型',
  'consumer-ai': '消费级 AI',
  'ai-applications': 'AI 应用',
  'ai-coding': 'AI Coding',
  'ai-agent': 'AI Agent',
  'open-source-models': '开放模型',
  'multimodal-ai': '多模态 AI',
  'ai-for-science': 'AI for Science',
  'reinforcement-learning': '强化学习',
  'representation-learning': '表示学习',
  'ai-infrastructure': 'AI Infra',
  'model-efficiency': '模型效率',
  'developer-tools': '开发者工具',
  'model-context-protocol': 'MCP 生态',
  'ai-history': 'AI 历史',
  'game-ai': '游戏 AI',
  'neural-networks': '神经网络',
  'ai-safety': 'AI 安全',
  'china-ai': '中国 AI',
  'enterprise-ai': '企业 AI',
}

const topicLabelsEn = {
  'ai-foundations': 'AI Foundations',
  'ai-winter': 'AI Winters',
  'deep-learning': 'Deep Learning',
  'computer-vision': 'Computer Vision',
  'natural-language-processing': 'Natural Language Processing',
  nlp: 'Natural Language Processing',
  'large-language-models': 'Large Language Models',
  'consumer-ai': 'Consumer AI',
  'ai-applications': 'AI Applications',
  'ai-coding': 'AI Coding',
  'ai-agent': 'AI Agents',
  'open-source-models': 'Open Models',
  'multimodal-ai': 'Multimodal AI',
  'ai-for-science': 'AI for Science',
  'reinforcement-learning': 'Reinforcement Learning',
  'representation-learning': 'Representation Learning',
  'ai-infrastructure': 'AI Infrastructure',
  'model-efficiency': 'Model Efficiency',
  'developer-tools': 'Developer Tools',
  'model-context-protocol': 'MCP Ecosystem',
  'ai-history': 'AI History',
  'game-ai': 'Game AI',
  'neural-networks': 'Neural Networks',
  'ai-safety': 'AI Safety',
  'china-ai': 'AI in China',
  'enterprise-ai': 'Enterprise AI',
}

const topicAliases = {
  nlp: 'natural-language-processing',
}

const importanceLabels = {
  S: '范式级',
  A: '行业级',
  B: '领域级',
  C: '补充',
}

const impactLabels = {
  user: '对用户',
  developer: '对开发者',
  industry: '对行业',
  product: '对产品',
}

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const urlFor = (path = '/') => {
  if (path === '/') return `${basePath}/`
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}

const assetUrl = (path) => `${urlFor(path)}?v=${assetVersion}`

const canonicalFor = (path = '/') => `${siteOrigin}${urlFor(path)}`

const formatDate = (value, precision = 'day') => {
  const [year, month, day] = String(value).split('-')
  if (precision === 'year' || !month) return `${year} 年`
  if (precision === 'month' || !day) return `${year} 年 ${Number(month)} 月`
  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`
}

const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const formatDateEn = (value, precision = 'day') => {
  const [year, month, day] = String(value).split('-')
  if (precision === 'year' || !month) return year
  const monthName = monthNamesEn[Number(month) - 1]
  if (precision === 'month' || !day) return `${monthName} ${year}`
  return `${monthName} ${Number(day)}, ${year}`
}

const timelineDateEn = (value, precision = 'day') => {
  const [, month, day] = String(value).split('-')
  if (precision === 'year' || !month) return ''
  const monthName = monthNamesEn[Number(month) - 1]
  if (precision === 'month' || !day) return monthName
  return `${monthName} ${Number(day)}`
}

const formatShortDate = (value) => String(value).replaceAll('-', '.')

const topicName = (topic) => topicLabels[topic] || topic
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const topicNameEn = (topic) => topicLabelsEn[topic] || topicName(topic)

const canonicalTopic = (topic) => topicAliases[topic] || topic

const bilingual = (zh, en, tag = 'span', className = '') => `<${tag}${className ? ` class="${escapeHtml(className)}"` : ''} data-localized data-zh="${escapeHtml(zh)}" data-en="${escapeHtml(en)}">${escapeHtml(zh)}</${tag}>`

const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date))
const recentEvents = [...events].sort((a, b) => b.date.localeCompare(a.date))

const eventTranslations = Object.fromEntries(events.flatMap((event) => {
  const pairs = [
    [event.title, event.titleEn],
    [event.subtitle, event.subtitleEn],
    [event.summary, event.summaryEn],
    [event.background, event.backgroundEn],
    [event.whatHappened, event.whatHappenedEn],
    [event.whyImportant, event.whyImportantEn],
    [event.beforeAfter?.before, event.beforeAfterEn?.before],
    [event.beforeAfter?.after, event.beforeAfterEn?.after],
    ...Object.keys(event.impact || {}).map((key) => [event.impact?.[key], event.impactEn?.[key]]),
  ]
  return pairs.filter(([zh, en]) => zh && en)
}))

const topicIndex = [...new Set([
  ...events.flatMap((event) => event.topics.map(canonicalTopic)),
  ...companies.flatMap((company) => company.keyTopics.map(canonicalTopic)),
])]
  .map((id) => ({
    id,
    label: topicName(id),
    events: sortedEvents.filter((event) => event.topics.some((topic) => canonicalTopic(topic) === id)),
  }))
  .sort((a, b) => b.events.length - a.events.length || a.label.localeCompare(b.label, 'zh-CN'))

const generatedInterfaceTranslations = Object.fromEntries([
  [`${events.length} 个事件`, `${events.length} events`],
  ...events.flatMap((event) => [
    [formatDate(event.date, event.datePrecision), formatDateEn(event.date, event.datePrecision)],
    [timelineDate(event), timelineDateEn(event.date, event.datePrecision)],
  ]),
  ...topicIndex.flatMap((topic) => [
    [`${topic.label} · ${topic.events.length}`, `${topicNameEn(topic.id)} · ${topic.events.length}`],
    [`${topic.events.length} 个节点`, `${topic.events.length} ${topic.events.length === 1 ? 'node' : 'nodes'}`],
    [
      `${topic.events.length} 个节点 · ${topic.events[0]?.date.slice(0, 4)}—${topic.events.at(-1)?.date.slice(0, 4)}`,
      `${topic.events.length} ${topic.events.length === 1 ? 'node' : 'nodes'} · ${topic.events[0]?.date.slice(0, 4)}—${topic.events.at(-1)?.date.slice(0, 4)}`,
    ],
  ]),
].filter(([zh, en]) => zh && en))

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`

const searchIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <circle cx="8.7" cy="8.7" r="5.2" stroke="currentColor" stroke-width="1.5"/>
    <path d="m12.6 12.6 3.4 3.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`

const sunIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3.25" stroke="currentColor" stroke-width="1.4"/>
    <path d="M10 2v1.6M10 16.4V18M2 10h1.6M16.4 10H18M4.35 4.35l1.12 1.12M14.53 14.53l1.12 1.12M15.65 4.35l-1.12 1.12M5.47 14.53l-1.12 1.12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`

const moonIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M15.7 12.9A6.3 6.3 0 0 1 7.1 4.3 6.35 6.35 0 1 0 15.7 12.9Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>`

function nav(active) {
  const items = [
    ['timeline', '/', '时间轴'],
    ['topics', '/topics/', '主题'],
    ['concepts', '/concepts/', '概念'],
    ['models', '/models/', '模型'],
    ['companies', '/companies/', '公司'],
    ['main-site', `${siteOrigin}/`, '主站', true],
  ]

  const renderNavLink = ([id, path, label, external]) => `
    <a href="${external ? path : urlFor(path)}"${active === id ? ' aria-current="page"' : ''}${external ? ' class="external-nav-link" target="_blank" rel="noopener noreferrer" aria-label="访问陈大黄主站（新窗口）"' : ''}>
      <span>${label}</span>${external ? '<i aria-hidden="true">↗</i>' : ''}
    </a>`

  return `
    <header class="site-header" data-site-header>
      <div class="header-inner">
        <a class="brand" href="${urlFor('/')}">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span><strong>AI Chronicle</strong><small>AI 行业编年史</small></span>
        </a>
        <nav class="desktop-nav" aria-label="主导航">
          ${items.map(renderNavLink).join('')}
        </nav>
        <div class="header-actions">
          <button class="utility-trigger language-trigger" type="button" data-language-toggle aria-label="Switch to English" title="中 / EN">
            <span data-language-label>EN</span>
          </button>
          <button class="utility-trigger theme-trigger" type="button" data-theme-toggle aria-label="切换明暗主题" title="切换明暗主题">
            <span class="theme-icon theme-icon-sun">${sunIcon}</span>
            <span class="theme-icon theme-icon-moon">${moonIcon}</span>
          </button>
          <button class="search-trigger" type="button" data-search-open aria-label="打开全站搜索">
            ${searchIcon}<span>搜索</span><kbd>⌘ K</kbd>
          </button>
          <button class="menu-trigger" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav">
            <span></span><span></span><span></span><b class="sr-only">打开菜单</b>
          </button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobile-nav" data-mobile-nav aria-label="移动端导航">
        ${items.map(renderNavLink).join('')}
      </nav>
    </header>`
}

function searchDialog() {
  return `
    <dialog class="search-dialog" data-search-dialog>
      <div class="search-panel">
        <div class="search-field-wrap">
          ${searchIcon}
          <input id="global-search" name="search" type="search" placeholder="搜索事件、概念、公司或主题…" data-global-search autocomplete="off" aria-label="全站搜索" />
          <button type="button" data-search-close aria-label="关闭搜索">ESC</button>
        </div>
        <div class="search-hint" data-search-hint>
          <p>试试搜索</p>
          <button type="button" data-search-suggestion="Transformer">Transformer</button>
          <button type="button" data-search-suggestion="AI Coding">AI Coding</button>
          <button type="button" data-search-suggestion="OpenAI">OpenAI</button>
        </div>
        <div class="search-results" data-search-results aria-live="polite"></div>
      </div>
    </dialog>`
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div>
          <a class="footer-brand" href="${urlFor('/')}">AI Chronicle</a>
          <p>按时间查事件，顺着来源读下去。</p>
        </div>
        <div class="footer-links">
          <a href="${urlFor('/')}">时间轴</a>
          <a href="${urlFor('/topics/')}">主题</a>
          <a href="${urlFor('/concepts/')}">概念</a>
          <a href="${urlFor('/models/')}">模型谱系</a>
          <a href="${urlFor('/about/')}">关于与编辑原则</a>
          <a class="external-footer-link" href="${siteOrigin}/" target="_blank" rel="noopener noreferrer" aria-label="访问陈大黄主站（新窗口）"><span>主站</span><i aria-hidden="true">↗</i></a>
        </div>
      </div>
      <div class="footer-meta">
        <span>AI 行业事件档案</span>
        <span>内容版本 · 2026.07</span>
      </div>
    </footer>`
}

function pageShell({ title, description, path, active, body, bodyClass = '' }) {
  const fullTitle = title === 'AI 行业编年史'
    ? 'AI Chronicle｜AI 行业编年史'
    : `${title}｜AI Chronicle`

  return `<!doctype html>
<html lang="zh-CN" data-theme="dark" data-lang="zh">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#070b12">
  <link rel="canonical" href="${canonicalFor(path)}">
  <meta property="og:title" content="${escapeHtml(fullTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalFor(path)}">
  <link rel="icon" href="${assetUrl('/assets/favicon.svg')}" type="image/svg+xml">
  <script>(function(){try{var t=localStorage.getItem('ai-chronicle-theme');var l=localStorage.getItem('ai-chronicle-lang');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;else document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';if(l==='en'){document.documentElement.dataset.lang='en';document.documentElement.lang='en'}}catch(e){}})()</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${assetUrl('/assets/app.css')}">
  <script src="${assetUrl('/assets/app.js')}" defer></script>
</head>
<body class="${escapeHtml(bodyClass)}" data-base-path="${basePath}" data-asset-version="${assetVersion}">
  <a class="skip-link" href="#main">跳到主要内容</a>
  ${nav(active)}
  <main id="main">${body}</main>
  ${footer()}
  ${searchDialog()}
</body>
</html>`
}

function writePage(route, options) {
  const cleanRoute = route.replace(/^\/+|\/+$/g, '')
  const directory = cleanRoute ? join(siteDir, cleanRoute) : siteDir
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, 'index.html'), pageShell(options), 'utf8')
}

function importanceBadge(event, compact = false) {
  return `<span class="importance importance-${event.importance.toLowerCase()}${compact ? ' compact' : ''}">
    <b>${escapeHtml(event.importance)}</b><span>${importanceLabels[event.importance]}</span>
  </span>`
}

function conceptLink(id) {
  const concept = conceptById.get(id)
  if (!concept) return `<span class="tag tag-muted">${escapeHtml(topicName(id))}</span>`
  return `<a class="tag" href="${urlFor(`/concepts/${concept.slug}/`)}">${escapeHtml(concept.title)}</a>`
}

function timelineDate(event) {
  const [, month, day] = String(event.date).split('-')
  if (event.datePrecision === 'year' || !month) return ''
  if (event.datePrecision === 'month' || !day) return `${Number(month)} 月`
  return `${Number(month)} 月 ${Number(day)} 日`
}

function eventRow(event) {
  return `
    <article class="event-row" id="event-${escapeHtml(event.slug)}" data-event-card
      data-event-id="${escapeHtml(event.slug)}"
      data-level="${escapeHtml(event.importance)}"
      data-topics="${escapeHtml(event.topics.map(canonicalTopic).join(' '))}"
      data-search="${escapeHtml([event.title, event.summary, ...event.concepts, ...event.topics].join(' ').toLowerCase())}">
      <a class="event-row-link" href="${urlFor(`/events/${event.slug}/`)}">
        <span class="event-node" aria-hidden="true"><i></i></span>
        <time datetime="${escapeHtml(event.date)}" aria-label="${escapeHtml(formatDate(event.date, event.datePrecision))}">${timelineDate(event)}</time>
        <span class="event-title-wrap">
          <span class="event-title-line">
            <h2>${escapeHtml(event.title)}</h2>
            <span class="event-level event-level-${event.importance.toLowerCase()}" aria-label="${escapeHtml(event.importance)} 级 · ${escapeHtml(importanceLabels[event.importance])}">${escapeHtml(event.importance)}</span>
          </span>
          <span class="event-summary">${escapeHtml(event.summary)}</span>
        </span>
        <span class="event-arrow" aria-hidden="true">${arrowIcon}</span>
      </a>
    </article>`
}

function timelineExperience() {
  const startYear = Number(sortedEvents[0].date.slice(0, 4))
  const endYear = Number(recentEvents[0].date.slice(0, 4))
  const startTime = Date.parse(sortedEvents[0].date)
  const endTime = Date.parse(recentEvents[0].date)
  const eventGroups = Object.entries(Object.groupBy(sortedEvents, (event) => event.date.slice(0, 4)))
  const tickYears = [...new Set([
    startYear,
    ...Array.from({ length: Math.floor(endYear / 10) - Math.ceil(startYear / 10) + 1 }, (_, index) => (Math.ceil(startYear / 10) + index) * 10),
    endYear,
  ])].filter((year) => year >= startYear && year <= endYear)
  const levelOptions = ['S', 'A', 'B', 'C'].map((level) => ({
    level,
    count: events.filter((event) => event.importance === level).length,
  })).filter(({ count }) => count > 0)

  const overviewPosition = (date) => {
    if (endTime === startTime) return 0
    return Math.max(0, Math.min(100, ((Date.parse(date) - startTime) / (endTime - startTime)) * 100))
  }

  return `
    <section class="timeline-stage" data-timeline-root data-start-year="${startYear}" data-end-year="${endYear}">
      <header class="timeline-masthead">
        <div class="timeline-title">
          <h1>AI 编年史</h1>
          <p><span>${startYear}—${endYear}</span></p>
        </div>
        <div class="timeline-overview" role="img" aria-label="1956 到 ${endYear}，事件按真实年份比例排列的时间总览">
          <div class="overview-rail">
            <span class="overview-base" aria-hidden="true"></span>
            <span class="overview-progress" aria-hidden="true"></span>
            ${tickYears.map((year) => {
              const position = ((year - startYear) / (endYear - startYear)) * 100
              return `<span class="overview-tick" style="--position:${position.toFixed(3)}%"><i></i><b>${year}</b></span>`
            }).join('')}
            ${sortedEvents.map((event) => `
              <span class="overview-event overview-event-${event.importance.toLowerCase()}"
                style="--position:${overviewPosition(event.date).toFixed(3)}%"
                data-overview-event="${escapeHtml(event.slug)}"
                aria-hidden="true"></span>`).join('')}
          </div>
        </div>
      </header>

      <div class="timeline-explorer">
        <div class="timeline-toolbar" aria-label="时间轴筛选">
          <div class="timeline-count"><span data-result-count>${events.length} 个事件</span><i aria-hidden="true"></i></div>
          <label class="timeline-search" for="timeline-search">
            ${searchIcon}
            <span class="sr-only">搜索事件或概念</span>
            <input id="timeline-search" type="search" placeholder="搜索事件或概念" data-timeline-search autocomplete="off">
          </label>
          <div class="level-controls" data-level-controls aria-label="按重要程度筛选">
            <button type="button" data-level="all" aria-pressed="true">全部</button>
            ${levelOptions.map(({ level }) => `<button type="button" data-level="${level}" aria-pressed="false" aria-label="${level} 级 · ${escapeHtml(importanceLabels[level])}" title="${escapeHtml(importanceLabels[level])}">${level}</button>`).join('')}
          </div>
          <label class="topic-select" for="topic-filter">
            <span class="sr-only">按主题筛选</span>
            <select id="topic-filter" data-topic-filter>
              <option value="all">全部主题</option>
              ${topicIndex.filter((topic) => topic.events.length > 0).map((topic) => `<option value="${escapeHtml(topic.id)}">${escapeHtml(topic.label)} · ${topic.events.length}</option>`).join('')}
            </select>
          </label>
          <button class="reset-filter" type="button" data-reset-filters hidden>清除</button>
        </div>

        <div class="timeline-stream" data-timeline-stream>
          <span class="timeline-axis" aria-hidden="true"><i data-timeline-axis-fill></i></span>
          ${eventGroups.map(([year, yearEvents]) => `
            <section class="timeline-year" id="year-${year}" data-year-group data-year="${year}">
              <header class="timeline-year-label">
                <a href="#year-${year}"><span>${year}</span></a>
              </header>
              <span class="timeline-year-node" aria-hidden="true"><i></i></span>
              <div class="timeline-year-events">
                ${yearEvents.map(eventRow).join('')}
              </div>
            </section>`).join('')}
        </div>

        <div class="empty-state" data-empty-state hidden><h2>没有对应事件</h2><button type="button" data-reset-filters>清除筛选</button></div>
      </div>
    </section>`
}

function renderHome() {
  const body = timelineExperience()

  writePage('', {
    title: 'AI 行业编年史',
    description: '按时间浏览改变 AI 技术、产品与行业路线的关键事件。',
    path: '/',
    active: 'timeline',
    body,
    bodyClass: 'chronicle-page',
  })
}

function renderTimeline() {
  const body = timelineExperience()

  writePage('timeline', {
    title: '时间轴',
    description: '按时间、重要程度和主题浏览 AI 行业关键事件。',
    path: '/timeline/',
    active: 'timeline',
    body,
    bodyClass: 'chronicle-page',
  })
}

function renderEventPages() {
  sortedEvents.forEach((event, index) => {
    const relatedEvents = event.relatedEvents.map((id) => eventById.get(id)).filter(Boolean)
    const relatedConcepts = event.concepts.map((id) => conceptById.get(id)).filter(Boolean)
    const relatedCompanies = event.companies.map((id) => companyById.get(id)).filter(Boolean)
    const previousEvent = sortedEvents[index - 1]
    const nextEvent = sortedEvents[index + 1]
    const hasSources = event.sources.length > 0
    const effectiveStatus = hasSources && event.status === 'verified' ? '已核验' : '待补来源'

    const body = `
      <article class="event-article">
        <header class="event-header">
          <div class="breadcrumbs"><a href="${urlFor('/')}">时间轴</a><span>/</span><span>${event.date.slice(0, 4)}</span></div>
          <div class="event-title-grid">
            <div>
              <div class="event-kicker"><time>${formatDate(event.date, event.datePrecision)}</time>${importanceBadge(event)}</div>
              <h1>${escapeHtml(event.title)}</h1>
              ${event.subtitle ? `<p class="event-subtitle">${escapeHtml(event.subtitle)}</p>` : ''}
            </div>
            <div class="event-stamp" aria-label="内容状态"><span>${effectiveStatus}</span><b>${hasSources ? event.sources.length : 0}</b><small>可追溯来源</small></div>
          </div>
        </header>

        <div class="event-body-grid">
          <div class="event-body">
            <section class="lead-summary"><span>核心变化</span><p>${escapeHtml(event.summary)}</p></section>

            ${event.whatHappened ? `<section class="prose-section"><span class="section-number">01</span><h2>发生了什么</h2><p>${escapeHtml(event.whatHappened)}</p></section>` : ''}
            ${event.background ? `<section class="prose-section"><span class="section-number">02</span><h2>当时的行业背景</h2><p>${escapeHtml(event.background)}</p></section>` : ''}
            ${event.whyImportant ? `<section class="prose-section why-section"><span class="section-number">${event.background ? '03' : '02'}</span><h2>为什么重要</h2><p>${escapeHtml(event.whyImportant)}</p></section>` : ''}

            ${event.beforeAfter ? `
              <section class="before-after-section">
                <div><span>在它之前</span><p>${escapeHtml(event.beforeAfter.before || '')}</p></div>
                <div><span>在它之后</span><p>${escapeHtml(event.beforeAfter.after || '')}</p></div>
              </section>` : ''}

            ${event.impact ? `
              <section class="impact-section">
                <div class="section-heading inline-heading"><span class="section-number">影响</span><h2>它改变了什么</h2></div>
                <div class="impact-list">
                  ${Object.entries(event.impact).filter(([, value]) => value).map(([key, value]) => `
                    <div><span>${impactLabels[key] || key}</span><p>${escapeHtml(value)}</p></div>
                  `).join('')}
                </div>
              </section>` : ''}

            <section class="source-section">
              <div class="section-heading inline-heading"><span class="section-number">来源</span><h2>原始资料</h2></div>
              ${hasSources ? `
                <ol class="source-list">
                  ${event.sources.map((source, sourceIndex) => `
                    <li><span>${String(sourceIndex + 1).padStart(2, '0')}</span><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><b>${escapeHtml(source.title)}</b><small>${escapeHtml(source.publisher)} · ${escapeHtml(source.type)}</small></a>${arrowIcon}</li>
                  `).join('')}
                </ol>` : `
                <div class="source-empty"><b>这条事件还缺少可公开核验的一级来源。</b><p>在来源补齐前，它不会被视为已完成编辑。</p></div>`}
            </section>
          </div>

          <aside class="event-aside">
            <div class="aside-block"><span>所属主题</span><div class="aside-tags">${[...new Set(event.topics.map(canonicalTopic))].map((topic) => `<a href="${urlFor(`/topics/${topic}/`)}">${escapeHtml(topicName(topic))}</a>`).join('')}</div></div>
            ${relatedConcepts.length ? `<div class="aside-block"><span>涉及概念</span><div class="aside-links">${relatedConcepts.map((concept) => `<a href="${urlFor(`/concepts/${concept.slug}/`)}">${escapeHtml(concept.title)}${arrowIcon}</a>`).join('')}</div></div>` : ''}
            ${relatedCompanies.length ? `<div class="aside-block"><span>相关组织</span><div class="aside-links">${relatedCompanies.map((company) => `<a href="${urlFor(`/companies/${company.slug}/`)}">${escapeHtml(company.name)}${arrowIcon}</a>`).join('')}</div></div>` : ''}
            <div class="aside-block aside-status"><span>编辑状态</span><p><i class="status-dot ${hasSources ? 'verified' : 'draft'}"></i>${effectiveStatus}</p><small>资料版本 2026.07</small></div>
          </aside>
        </div>

        ${relatedEvents.length ? `<section class="related-events"><div class="section-heading split-heading"><div><span class="section-number">关联</span><h2>继续沿着影响链阅读</h2></div></div><div>${relatedEvents.map((related) => `<a href="${urlFor(`/events/${related.slug}/`)}"><time>${related.date.slice(0, 4)}</time><h3>${escapeHtml(related.title)}</h3>${arrowIcon}</a>`).join('')}</div></section>` : ''}

        <nav class="event-pagination" aria-label="时间轴前后事件">
          ${previousEvent ? `<a class="previous" href="${urlFor(`/events/${previousEvent.slug}/`)}"><span>上一个节点</span><b>${escapeHtml(previousEvent.title)}</b></a>` : '<span></span>'}
          ${nextEvent ? `<a class="next" href="${urlFor(`/events/${nextEvent.slug}/`)}"><span>下一个节点</span><b>${escapeHtml(nextEvent.title)}</b></a>` : '<span></span>'}
        </nav>
      </article>`

    writePage(`events/${event.slug}`, {
      title: event.title,
      description: event.summary,
      path: `/events/${event.slug}/`,
      active: 'timeline',
      body,
      bodyClass: 'event-page',
    })
  })
}

function renderConceptPages() {
  const body = `
    <section class="page-intro">
      <div><h1>概念词典</h1></div>
      <p>先看它解决了什么问题，再读技术原理和相关事件。</p>
    </section>
    <section class="index-toolbar">
      <div class="inline-search">${searchIcon}<input type="search" placeholder="搜索概念" data-index-search></div>
      <div class="index-filter" data-index-filter>
        <button type="button" data-value="all" aria-pressed="true">全部</button>
        <button type="button" data-value="beginner" aria-pressed="false">入门</button>
        <button type="button" data-value="intermediate" aria-pressed="false">进阶</button>
        <button type="button" data-value="advanced" aria-pressed="false">技术</button>
        <button type="button" data-value="engineering" aria-pressed="false">工程</button>
        <button type="button" data-value="evaluation" aria-pressed="false">评测</button>
      </div>
    </section>
    <section class="concept-index" data-index-list>
      ${concepts.map((concept, index) => `
        <a href="${urlFor(`/concepts/${concept.slug}/`)}" data-index-item data-kind="${escapeHtml(concept.difficulty)}" data-search="${escapeHtml(`${concept.title} ${concept.fullName || ''} ${concept.oneLiner}`.toLowerCase())}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <div><h2>${escapeHtml(concept.title)}</h2>${concept.fullName ? `<small>${escapeHtml(concept.fullName)}</small>` : ''}</div>
          <p>${escapeHtml(concept.oneLiner)}</p>
          <b>${escapeHtml(concept.difficulty)}</b>${arrowIcon}
        </a>`).join('')}
    </section>`

  writePage('concepts', {
    title: '概念词典',
    description: '沿事件理解 AI 概念：它是什么、何时出现，又解决了什么问题。',
    path: '/concepts/',
    active: 'concepts',
    body,
    bodyClass: 'index-page',
  })

  concepts.forEach((concept) => {
    const relatedEvents = concept.relatedEvents.map((id) => eventById.get(id)).filter(Boolean)
    const relatedConcepts = concept.relatedConcepts.map((id) => conceptById.get(id)).filter(Boolean)
    const detailBody = `
      <article class="definition-article">
        <header>
          <div class="breadcrumbs"><a href="${urlFor('/concepts/')}">概念词典</a><span>/</span><span>${escapeHtml(concept.difficulty)}</span></div>
          <h1>${escapeHtml(concept.title)}</h1>
          ${concept.fullName ? `<p class="definition-full-name">${escapeHtml(concept.fullName)}</p>` : ''}
          <p class="definition-one-liner">${escapeHtml(concept.oneLiner)}</p>
        </header>
        <div class="definition-grid">
          <div>
            ${concept.beginnerExplanation ? `<section class="prose-section"><span class="section-number">01</span><h2>先用人话理解</h2><p>${escapeHtml(concept.beginnerExplanation)}</p></section>` : ''}
            ${concept.technicalExplanation ? `<section class="prose-section"><span class="section-number">02</span><h2>再往技术里走一步</h2><p>${escapeHtml(concept.technicalExplanation)}</p></section>` : ''}
            ${concept.whyItMatters ? `<section class="prose-section why-section"><span class="section-number">${concept.technicalExplanation ? '03' : '02'}</span><h2>为什么重要</h2><p>${escapeHtml(concept.whyItMatters)}</p></section>` : ''}
            ${concept.commonMisunderstandings.length ? `<section class="misunderstanding-section"><h2>常见误解</h2>${concept.commonMisunderstandings.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</section>` : ''}
          </div>
          <aside class="definition-aside">
            <span>难度</span><b>${escapeHtml(concept.difficulty)}</b>
            ${relatedConcepts.length ? `<span>相关概念</span>${relatedConcepts.map((item) => `<a href="${urlFor(`/concepts/${item.slug}/`)}">${escapeHtml(item.title)}${arrowIcon}</a>`).join('')}` : ''}
          </aside>
        </div>
        ${relatedEvents.length ? `<section class="related-events"><div class="section-heading split-heading"><div><span class="section-number">历史</span><h2>在哪些节点变得重要</h2></div></div><div>${relatedEvents.map((event) => `<a href="${urlFor(`/events/${event.slug}/`)}"><time>${event.date.slice(0, 4)}</time><h3>${escapeHtml(event.title)}</h3>${arrowIcon}</a>`).join('')}</div></section>` : ''}
      </article>`

    writePage(`concepts/${concept.slug}`, {
      title: concept.title,
      description: concept.oneLiner,
      path: `/concepts/${concept.slug}/`,
      active: 'concepts',
      body: detailBody,
      bodyClass: 'definition-page',
    })
  })
}

function renderModelFamilyPages() {
  const body = `
    <section class="page-intro model-intro">
      <div><h1>模型谱系</h1></div>
      <p>查看各家模型的发布时间、定位和能力变化。</p>
    </section>
    <section class="model-family-index">
      ${modelFamilies.map((family, index) => {
        const company = companyById.get(family.company)
        return `
          <a href="${urlFor(`/models/${family.slug}/`)}" class="model-family-row">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div>
              ${bilingual(family.title, family.titleEn, 'h2')}
              ${bilingual(family.description, family.descriptionEn, 'p')}
            </div>
            <small>${escapeHtml(company?.name || family.company)}</small>
            <b>${bilingual(family.latestModel, family.latestModelEn)}</b>
            ${arrowIcon}
          </a>`
      }).join('')}
    </section>`

  writePage('models', {
    title: '模型谱系',
    description: '按厂商查看关键模型家族的每一代发布时间、定位与能力变化。',
    path: '/models/',
    active: 'models',
    body,
    bodyClass: 'index-page models-page',
  })

  modelFamilies.forEach((family) => {
    const company = companyById.get(family.company)
    const detailBody = `
      <article class="model-family-article">
        <header class="model-family-header">
          <div class="breadcrumbs"><a href="${urlFor('/models/')}">模型谱系</a><span>/</span><a href="${urlFor(`/companies/${company?.slug || family.company}/`)}">${escapeHtml(company?.name || family.company)}</a></div>
          <div class="model-family-title">
            <div>
              ${bilingual(family.title, family.titleEn, 'h1')}
              ${bilingual(family.description, family.descriptionEn, 'p')}
            </div>
            <aside><span>当前模型</span><b>${bilingual(family.latestModel, family.latestModelEn)}</b><small>更新于 ${formatDate(family.updatedAt)}</small></aside>
          </div>
        </header>
        <section class="model-release-list">
          <header><span>${String(family.releases.length).padStart(2, '0')} 代</span><h2>历代模型</h2></header>
          ${[...family.releases].reverse().map((release, index) => `
            <article class="model-release" data-status="${escapeHtml(release.status)}">
              <span>${String(family.releases.length - index).padStart(2, '0')}</span>
              <time datetime="${escapeHtml(release.date)}">${formatDate(release.date, release.datePrecision)}</time>
              <div><h3>${escapeHtml(release.name)}</h3>${bilingual(release.summary, release.summaryEn, 'p')}</div>
              <b class="model-status model-status-${escapeHtml(release.status)}">${release.status}</b>
              <a href="${escapeHtml(release.source)}" target="_blank" rel="noopener noreferrer" aria-label="查看 ${escapeHtml(release.name)} 官方来源">${arrowIcon}</a>
            </article>`).join('')}
        </section>
      </article>`

    writePage(`models/${family.slug}`, {
      title: family.title,
      description: family.description,
      path: `/models/${family.slug}/`,
      active: 'models',
      body: detailBody,
      bodyClass: 'model-family-page',
    })
  })
}

function renderCompanyPages() {
  const body = `
    <section class="page-intro">
      <div><h1>行业玩家</h1></div>
      <p>按组织查看模型、产品和关键事件。</p>
    </section>
    <section class="company-index">
      ${companies.map((company, index) => `
        <a href="${urlFor(`/companies/${company.slug}/`)}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <div><h2>${escapeHtml(company.name)}</h2><p>${escapeHtml(company.positioning)}</p></div>
          <small>${company.region === 'cn' ? '中国' : company.region === 'us' ? '美国' : '全球'} · ${company.founded || '—'}</small>
          ${arrowIcon}
        </a>`).join('')}
    </section>`

  writePage('companies', {
    title: '行业玩家',
    description: '理解塑造 AI 行业的公司、组织与它们选择的路线。',
    path: '/companies/',
    active: 'companies',
    body,
    bodyClass: 'index-page',
  })

  companies.forEach((company) => {
    const keyEvents = company.keyEvents.map((id) => eventById.get(id)).filter(Boolean)
    const relatedModelFamilies = modelFamiliesByCompany.get(company.id) || []
    const detailBody = `
      <article class="company-article">
        <header>
          <div class="breadcrumbs"><a href="${urlFor('/companies/')}">行业玩家</a><span>/</span><span>${company.region === 'cn' ? '中国' : company.region === 'us' ? '美国' : '全球'}</span></div>
          <div class="company-title"><h1>${escapeHtml(company.name)}</h1><span>${company.founded || '—'}—</span></div>
          <p>${escapeHtml(company.positioning)}</p>
        </header>
        <section class="company-route">
          <div><span class="section-number">路线</span><h2>它在押注什么</h2></div>
          <div>${[...new Set(company.keyTopics.map(canonicalTopic))].map((topic) => `<a href="${urlFor(`/topics/${topic}/`)}">${escapeHtml(topicName(topic))}${arrowIcon}</a>`).join('')}</div>
        </section>
        ${relatedModelFamilies.length ? `<section class="company-models"><div><span class="section-number">模型</span><h2>模型谱系</h2></div><div>${relatedModelFamilies.map((family) => `<a href="${urlFor(`/models/${family.slug}/`)}"><span>${bilingual(family.title, family.titleEn)}</span><small>${bilingual(family.latestModel, family.latestModelEn)}</small>${arrowIcon}</a>`).join('')}</div></section>` : ''}
        ${keyEvents.length ? `<section class="related-events"><div class="section-heading split-heading"><div><span class="section-number">节点</span><h2>关键事件</h2></div></div><div>${keyEvents.map((event) => `<a href="${urlFor(`/events/${event.slug}/`)}"><time>${event.date.slice(0, 4)}</time><h3>${escapeHtml(event.title)}</h3>${arrowIcon}</a>`).join('')}</div></section>` : ''}
      </article>`

    writePage(`companies/${company.slug}`, {
      title: company.name,
      description: company.positioning,
      path: `/companies/${company.slug}/`,
      active: 'companies',
      body: detailBody,
      bodyClass: 'company-page',
    })
  })
}

function renderTopicPages() {
  const body = `
    <section class="page-intro">
      <div><h1>主题路线</h1></div>
      <p>把同一技术路线上的事件放在一起读。</p>
    </section>
    <section class="topic-directory">
      ${topicIndex.map((topic, index) => `
        <a href="${urlFor(`/topics/${topic.id}/`)}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <h2>${escapeHtml(topic.label)}</h2>
          <p>${topic.events.length ? `${topic.events.length} 个节点 · ${topic.events[0].date.slice(0, 4)}—${topic.events.at(-1).date.slice(0, 4)}` : '路线档案正在建立'}</p>
          ${arrowIcon}
        </a>`).join('')}
    </section>`

  writePage('topics', {
    title: '主题路线',
    description: '沿主题路线理解 AI Coding、Agent、大模型、开放模型等方向如何演化。',
    path: '/topics/',
    active: 'topics',
    body,
    bodyClass: 'index-page',
  })

  topicIndex.forEach((topic) => {
    const detailBody = `
      <section class="topic-hero">
        <div class="breadcrumbs"><a href="${urlFor('/topics/')}">主题路线</a><span>/</span><span>${topic.events.length} 个节点</span></div>
        <h1>${escapeHtml(topic.label)}</h1>
        <p>按时间查看这条路线的关键转折。</p>
      </section>
      <section class="topic-timeline${topic.events.length ? '' : ' is-empty'}">
        ${topic.events.length ? topic.events.map((event, index) => `
          <a href="${urlFor(`/events/${event.slug}/`)}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <time>${formatDate(event.date, event.datePrecision)}</time>
            <div><h2>${escapeHtml(event.title)}</h2><p>${escapeHtml(event.summary)}</p></div>
            ${importanceBadge(event, true)}${arrowIcon}
          </a>`).join('') : '<div class="topic-empty"><h2>这条路线正在建立</h2><p>相关事件会在完成来源核验与编辑后进入时间轴。</p></div>'}
      </section>`

    writePage(`topics/${topic.id}`, {
      title: `${topic.label}编年史`,
      description: `沿时间线理解${topic.label}方向的关键事件与演化。`,
      path: `/topics/${topic.id}/`,
      active: 'topics',
      body: detailBody,
      bodyClass: 'topic-page',
    })
  })
}

function renderAbout() {
  const body = `
    <article class="about-page-content">
      <header><h1>不追新闻。<br>记录改变路线的事件。</h1></header>
      <section><span class="section-number">01</span><h2>这个项目是什么</h2><p>AI Chronicle 按时间整理 AI 行业事件，并把事件连接到概念、公司、模型和原始来源。它服务于两种阅读：从头梳理一条路线，或在需要时查清某个节点。</p></section>
      <section><span class="section-number">02</span><h2>什么事件会被收录</h2><ul><li>它改变了技术范式或产品入口。</li><li>它影响了后续开发者行为与生态结构。</li><li>多年以后回看，仍然有解释和学习价值。</li><li>能够找到可公开核验的原始资料。</li></ul></section>
      <section><span class="section-number">03</span><h2>重要程度怎么判断</h2><div class="editorial-levels"><p><b>S</b><span>范式级</span>极少数改变行业方向的节点。</p><p><b>A</b><span>行业级</span>对多个方向产生持续影响。</p><p><b>B</b><span>领域级</span>在特定技术或产品路线中重要。</p><p><b>C</b><span>补充</span>帮助理解前后关系的背景节点。</p></div></section>
      <section><span class="section-number">04</span><h2>编辑原则</h2><p>事实与判断分开；重要判断给出依据；“已核验”必须附有可访问来源；短期热度不自动等于历史地位；争议和局限不因为影响叙事而被删除。</p></section>
    </article>`

  writePage('about', {
    title: '关于与编辑原则',
    description: 'AI Chronicle 的定位、事件收录标准、重要程度与可信度原则。',
    path: '/about/',
    active: '',
    body,
    bodyClass: 'about-page',
  })
}

function writeSupportFiles() {
  const searchIndex = [
    ...events.map((event) => ({ type: '事件', title: event.title, description: event.summary, url: urlFor(`/events/${event.slug}/`) })),
    ...concepts.map((concept) => ({ type: '概念', title: concept.title, description: concept.oneLiner, url: urlFor(`/concepts/${concept.slug}/`) })),
    ...companies.map((company) => ({ type: '公司', title: company.name, description: company.positioning, url: urlFor(`/companies/${company.slug}/`) })),
    ...modelFamilies.map((family) => ({ type: '模型', title: family.title, description: family.description, url: urlFor(`/models/${family.slug}/`) })),
    ...topicIndex.map((topic) => ({ type: '主题', title: topic.label, description: `${topic.events.length} 个关键节点`, url: urlFor(`/topics/${topic.id}/`) })),
  ]

  writeFileSync(join(siteDir, 'assets/search-index.json'), JSON.stringify(searchIndex), 'utf8')
  const staticTranslations = JSON.parse(readFileSync(join(rootDir, 'public/assets/i18n-en.json'), 'utf8'))
  writeFileSync(
    join(siteDir, 'assets/i18n-en.json'),
    JSON.stringify({ ...staticTranslations, ...eventTranslations, ...generatedInterfaceTranslations }, null, 2),
    'utf8',
  )

  const routes = [
    '/', '/timeline/', '/concepts/', '/models/', '/companies/', '/topics/', '/about/',
    ...events.map((event) => `/events/${event.slug}/`),
    ...concepts.map((concept) => `/concepts/${concept.slug}/`),
    ...companies.map((company) => `/companies/${company.slug}/`),
    ...modelFamilies.map((family) => `/models/${family.slug}/`),
    ...topicIndex.map((topic) => `/topics/${topic.id}/`),
  ]

  writeFileSync(join(siteDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${canonicalFor(route)}</loc></url>`).join('\n')}\n</urlset>`, 'utf8')
  writeFileSync(join(siteDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${canonicalFor('/sitemap.xml')}\n`, 'utf8')
  writeFileSync(join(distDir, '_headers'), `${basePath}/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n${basePath}/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n`, 'utf8')
  writeFileSync(join(distDir, '_redirects'), `/ ${basePath}/ 302\n`, 'utf8')
  writeFileSync(join(distDir, 'index.html'), `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${basePath}/"><link rel="canonical" href="${canonicalFor('/')}">`, 'utf8')
  writeFileSync(join(siteDir, '404.html'), pageShell({
    title: '页面不存在',
    description: '你访问的 AI Chronicle 页面不存在。',
    path: '/404.html',
    active: '',
    body: `<section class="not-found"><span>404</span><h1>这条时间线还没有延伸到这里。</h1><p>返回编年史，继续沿着已经收录的节点阅读。</p><a class="button button-primary" href="${urlFor('/')}">回到时间轴 ${arrowIcon}</a></section>`,
  }), 'utf8')
}

rmSync(distDir, { recursive: true, force: true })
mkdirSync(siteDir, { recursive: true })
cpSync(join(rootDir, 'public/assets'), join(siteDir, 'assets'), { recursive: true })

renderHome()
renderTimeline()
renderEventPages()
renderConceptPages()
renderModelFamilyPages()
renderCompanyPages()
renderTopicPages()
renderAbout()
writeSupportFiles()

console.log(`Generated ${events.length} events, ${concepts.length} concepts, ${companies.length} companies, ${modelFamilies.length} model families, and ${topicIndex.length} topic routes.`)
