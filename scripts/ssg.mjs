/**
 * Standalone SSG script — generates all HTML pages from JSON data
 * No dependency on TanStack Start SSR or Vite
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const srcDir = resolve(__dirname, '../src/.velite')
const distDir = resolve(__dirname, '../dist/client')

// Load data
const events = JSON.parse(readFileSync(join(srcDir, 'events.json'), 'utf-8'))
const concepts = JSON.parse(readFileSync(join(srcDir, 'concepts.json'), 'utf-8'))
const companies = JSON.parse(readFileSync(join(srcDir, 'companies.json'), 'utf-8'))

const SITE_TITLE = 'AI Chronicle — AI 行业编年史'
const SITE_DESC = '以关键事件为主线，理解 AI 行业的发展脉络。'

function html(page) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title} | ${SITE_TITLE}</title>
<meta name="description" content="${page.desc || SITE_DESC}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/app.css">
</head>
<body>
<div id="root">${page.content}</div>
<script type="module" src="/assets/index.js"></script>
</body>
</html>`
}

function fmtDate(d, precision) {
  if (precision === 'year') return d
  if (precision === 'month') { const [y,m] = d.split('-'); return `${y}年${parseInt(m)}月` }
  const dt = new Date(d)
  return `${dt.getFullYear()}年${dt.getMonth()+1}月${dt.getDate()}日`
}

function importanceBadge(i) {
  const m = { S:'S 级 · 范式级', A:'A 级 · 行业级', B:'B 级 · 领域级', C:'C 级 · 补充' }
  const c = { S:'badge-s', A:'badge-a', B:'badge-b', C:'badge-c' }
  return `<span class="${c[i]||'badge-b'}">${m[i]||i}</span>`
}

function conceptTag(c) {
  return `<a href="/concepts/${c.slug}" class="concept-tag">${c.title}</a>`
}

function writePage(path, content, title, desc) {
  const dir = resolve(distDir, path)
  mkdirSync(dir, { recursive: true })
  const full = html({ content, title, desc })
  writeFileSync(join(dir, 'index.html'), full, 'utf-8')
}

// ─── Pages ───

// Home page
writePage('', `
<div class="hero">
  <h1>AI 行业编年史</h1>
  <p class="subtitle">用关键事件理解 AI 的发展脉络</p>
  <p class="desc">从 Transformer、ChatGPT、Copilot 到 Claude Code、Agent 和开源模型，<br>按时间线翻阅 AI 行业的关键事件，并学习背后的核心概念。</p>
  <div class="hero-btns">
    <a href="/timeline" class="btn-primary">进入时间轴</a>
    <a href="/concepts" class="btn-secondary">学习概念</a>
  </div>
</div>
<div class="section">
  <h2>关键节点</h2>
  <div class="grid-5">
    ${events.filter(e=>e.importance==='S').map(e=>`
      <a href="/events/${e.slug}" class="node-card">
        <div class="node-date">${e.date}</div>
        <div class="node-title">${e.title}</div>
      </a>
    `).join('')}
  </div>
</div>
<div class="section">
  <h2>最近事件</h2>
  <div class="grid-3">
    ${events.slice(-3).reverse().map(e=>`
      <a href="/events/${e.slug}" class="event-card">
        <div class="event-date">${e.date}</div>
        <h3>${e.title}</h3>
        <p>${e.summary}</p>
      </a>
    `).join('')}
  </div>
</div>
<footer><p>AI Chronicle — AI 行业编年史</p><p>用关键事件理解 AI 的发展脉络</p></footer>
`, 'AI 行业编年史', SITE_DESC)

// Timeline
const sortedEvents = [...events].sort((a,b) => new Date(a.date) - new Date(b.date))
const grouped = {}
sortedEvents.forEach(e => {
  const y = e.date.split('-')[0]
  if (!grouped[y]) grouped[y] = []
  grouped[y].push(e)
})
const years = Object.keys(grouped).sort((a,b) => parseInt(a)-parseInt(b))

writePage('timeline', `
<div class="page-header">
  <h1>AI 编年史</h1>
  <p class="muted">从 1956 年达特茅斯会议至今</p>
</div>
<div class="filters">
  <a href="/timeline" class="filter active">全部</a>
  <a href="/timeline?level=S" class="filter">S 级</a>
  <a href="/timeline?level=A" class="filter">A 级</a>
  <a href="/timeline?level=B" class="filter">B 级</a>
  <a href="/timeline?level=C" class="filter">C 级</a>
</div>
<div class="timeline">
  ${years.map(y => `
    <div class="year-block">
      <div class="year-label">${y}</div>
      ${grouped[y].map(e => `
        <a href="/events/${e.slug}" class="timeline-card">
          <div class="tl-dot"></div>
          <span class="tl-date">${fmtDate(e.date, e.datePrecision)}</span>
          <div class="tl-content">
            <div class="tl-header">
              <h3>${e.title}</h3>
              ${importanceBadge(e.importance)}
            </div>
            <p>${e.summary}</p>
            <div class="tl-concepts">
              ${e.concepts.slice(0,5).map(cid => {
                const c = concepts.find(x => x.id === cid)
                return c ? conceptTag(c) : ''
              }).join('')}
            </div>
          </div>
        </a>
      `).join('')}
    </div>
  `).join('')}
</div>
`, 'AI 编年史 — 时间轴', '按时间线浏览 AI 行业关键事件')

// Event detail pages
for (const event of events) {
  const ecs = concepts.filter(c => event.concepts.includes(c.id))
  const related = events.filter(e => event.relatedEvents.includes(e.id))
  writePage(`events/${event.slug}`, `
<div class="page-header">
  <div class="event-meta">
    ${importanceBadge(event.importance)}
    <span class="muted">${fmtDate(event.date, event.datePrecision)}</span>
    ${event.eventType.map(t => `<span class="type-tag">${t}</span>`).join('')}
  </div>
  <h1>${event.title}</h1>
  ${event.subtitle ? `<p class="subtitle">${event.subtitle}</p>` : ''}
</div>
<div class="summary-box">
  <p>${event.summary}</p>
</div>
${ecs.length ? `
<div class="concept-section">
  <h2>涉及概念</h2>
  <div class="concept-list">
    ${ecs.map(c => conceptTag(c)).join('')}
  </div>
</div>
` : ''}
${event.beforeAfter ? `
<div class="before-after">
  <div class="ba-card before">
    <div class="ba-label">在它之前</div>
    <p>${event.beforeAfter.before}</p>
  </div>
  <div class="ba-card after">
    <div class="ba-label">在它之后</div>
    <p>${event.beforeAfter.after}</p>
  </div>
</div>
` : ''}
${event.impact ? `
<div class="impact-section">
  <h2>行业影响</h2>
  <div class="impact-grid">
    ${Object.entries(event.impact).filter(([_,v])=>v).map(([k,v]) => `
      <div class="impact-card">
        <div class="impact-label">${k}</div>
        <p>${v}</p>
      </div>
    `).join('')}
  </div>
</div>
` : ''}
${related.length ? `
<div class="related-section">
  <h2>关联事件</h2>
  <div class="related-grid">
    ${related.map(re => `
      <a href="/events/${re.slug}" class="related-card">
        <div class="event-date">${fmtDate(re.date, re.datePrecision)}</div>
        <div class="event-title-sm">${re.title}</div>
      </a>
    `).join('')}
  </div>
</div>
` : ''}
`, event.title, event.summary)
}

// Concepts page
writePage('concepts', `
<div class="page-header">
  <h1>概念词典</h1>
  <p class="muted">理解 AI 世界的关键概念</p>
</div>
<div class="filters">
  <a href="/concepts" class="filter active">全部</a>
  <a href="/concepts?level=beginner" class="filter">入门</a>
  <a href="/concepts?level=intermediate" class="filter">进阶</a>
  <a href="/concepts?level=advanced" class="filter">技术</a>
</div>
<div class="grid-3">
  ${concepts.map(c => `
    <a href="/concepts/${c.slug}" class="concept-card">
      <div class="cc-header">
        <h3>${c.title}</h3>
        <span class="diff-tag diff-${c.difficulty}">${c.difficulty}</span>
      </div>
      ${c.fullName ? `<p class="cc-fullname">${c.fullName}</p>` : ''}
      <p class="cc-desc">${c.oneLiner}</p>
    </a>
  `).join('')}
</div>
`, '概念词典', '理解 AI 世界的核心概念')

// Concept detail pages
for (const c of concepts) {
  const relEvents = events.filter(e => c.relatedEvents.includes(e.id))
  const relConcepts = concepts.filter(rc => c.relatedConcepts.includes(rc.id))
  writePage(`concepts/${c.slug}`, `
<div class="page-header">
  <h1>${c.title}</h1>
  ${c.fullName ? `<p class="subtitle">${c.fullName}</p>` : ''}
</div>
<div class="summary-box">
  <p>${c.oneLiner}</p>
</div>
${c.beginnerExplanation ? `
<div class="text-section">
  <h2>新人解释</h2>
  <p>${c.beginnerExplanation}</p>
</div>
` : ''}
${c.whyItMatters ? `
<div class="text-section">
  <h2>为什么重要</h2>
  <p>${c.whyItMatters}</p>
</div>
` : ''}
${c.commonMisunderstandings?.length ? `
<div class="text-section">
  <h2>常见误解</h2>
  <ul>
    ${c.commonMisunderstandings.map(m => `<li>⚠️ ${m}</li>`).join('')}
  </ul>
</div>
` : ''}
${relEvents.length ? `
<div class="related-section">
  <h2>相关事件</h2>
  <div class="related-grid">
    ${relEvents.map(re => `
      <a href="/events/${re.slug}" class="related-card">
        <div class="event-date">${re.date}</div>
        <div class="event-title-sm">${re.title}</div>
      </a>
    `).join('')}
  </div>
</div>
` : ''}
`, c.title, c.oneLiner)
}

// Companies page
writePage('companies', `
<div class="page-header">
  <h1>行业玩家</h1>
  <p class="muted">了解塑造 AI 行业的关键公司</p>
</div>
<div class="grid-3">
  ${companies.map(c => `
    <div class="company-card">
      <h3>${c.name}</h3>
      <p class="cc-desc">${c.positioning}</p>
      <div class="company-meta">
        <span>${c.region==='cn'?'🇨🇳中国':c.region==='us'?'🇺🇸美国':'🌍全球'}</span>
        <span>· 成立于 ${c.founded}</span>
      </div>
      ${c.keyTopics.length ? `
        <div class="company-topics">
          ${c.keyTopics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('')}
</div>
`, '行业公司', '了解塑造 AI 行业的关键玩家')

console.log('✅ SSG complete! All pages generated in dist/client/')
