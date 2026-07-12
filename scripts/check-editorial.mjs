import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const rootDir = resolve(import.meta.dirname, '..')
const articleRoot = join(rootDir, 'content/event-articles')
const languages = ['zh', 'en']
const failures = []
const warnings = []

const bannedHeadings = new Set([
  '核心变化',
  '发生了什么',
  '当时的行业背景',
  '为什么重要',
  '在它之前',
  '在它之后',
  '它改变了什么',
  'What happened',
  'Why it matters',
  'Before',
  'After',
  'Impact',
])

const emptyGrandWords = ['风暴', '火焰', '群星', '命运', '划时代', '颠覆', '改变世界', '新纪元']
const editorialMetaPhrases = ['史位', '编年应', '正确姿势', '写进对照表', '专题密度', '占一格', '占一列']

function bodyOf(markdown) {
  const parts = markdown.split(/^---\s*$/m)
  return parts.length >= 3 ? parts.slice(2).join('---').trim() : markdown.trim()
}

function plainText(markdown) {
  return markdown
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`>*_~|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function ngrams(value, width = 4) {
  const normalized = value.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase()
  const grams = new Set()
  for (let index = 0; index <= normalized.length - width; index += 1) {
    grams.add(normalized.slice(index, index + width))
  }
  return grams
}

function similarity(left, right) {
  if (!left.size || !right.size) return 0
  let overlap = 0
  left.forEach((gram) => { if (right.has(gram)) overlap += 1 })
  return overlap / (left.size + right.size - overlap)
}

for (const language of languages) {
  const directory = join(articleRoot, language)
  if (!existsSync(directory)) continue
  const articles = readdirSync(directory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const body = bodyOf(readFileSync(join(directory, name), 'utf8'))
      const text = plainText(body)
      const first = text.slice(0, 180)
      const last = text.slice(-180)
      const paragraphs = body.split(/\n\s*\n/).map(plainText).filter(Boolean)
      return {
        id: basename(name, '.md'),
        body,
        text,
        first,
        last,
        firstGrams: ngrams(first),
        lastGrams: ngrams(last),
        paragraphs,
        paragraphGrams: paragraphs.map((paragraph) => ngrams(paragraph)),
      }
    })

  const headingOwners = new Map()
  for (const article of articles) {
    for (const match of article.body.matchAll(/^#{1,6}\s+(.+)$/gm)) {
      const heading = match[1].trim()
      if (bannedHeadings.has(heading)) failures.push(`${language}/${article.id} uses retired heading: ${heading}`)
      if (!headingOwners.has(heading)) headingOwners.set(heading, [])
      headingOwners.get(heading).push(article.id)
    }
  }

  for (const [heading, owners] of headingOwners) {
    if (owners.length >= 3) warnings.push(`${language} repeats heading “${heading}” in ${owners.join(', ')}`)
  }

  for (const word of emptyGrandWords) {
    const owners = articles.filter((article) => article.text.includes(word)).map((article) => article.id)
    if (owners.length >= 4) warnings.push(`${language} repeats image or grand claim “${word}” in ${owners.join(', ')}`)
  }

  for (const phrase of editorialMetaPhrases) {
    const owners = articles.filter((article) => article.text.includes(phrase)).map((article) => article.id)
    if (owners.length) warnings.push(`${language} uses editorial meta phrase “${phrase}” in ${owners.join(', ')}`)
  }

  if (language === 'zh') {
    const shortArticles = articles.filter((article) => article.text.replace(/\s+/g, '').length < 500).map((article) => article.id)
    if (shortArticles.length) warnings.push(`zh articles under 500 characters need manual review: ${shortArticles.join(', ')}`)

    const thinShapes = articles
      .filter((article) => article.paragraphs.length <= 4 && article.text.replace(/\s+/g, '').length < 700)
      .map((article) => `${article.id}(${article.paragraphs.length}p)`)
    if (thinShapes.length) warnings.push(`zh thin three/four-paragraph shapes: ${thinShapes.join(', ')}`)
  }

  for (const article of articles) {
    const joinedLines = article.body.split('\n')
      .some((line, index, lines) => index > 0 && line.trim() && lines[index - 1].trim()
        && !/^[-*#>|]/.test(line.trim()) && !/^[-*#>|]/.test(lines[index - 1].trim()))
    if (joinedLines) warnings.push(`${language}/${article.id} has adjacent prose lines that may render as one oversized paragraph`)

    const internalPairs = []
    for (let left = 0; left < article.paragraphs.length; left += 1) {
      for (let right = left + 1; right < article.paragraphs.length; right += 1) {
        const score = similarity(article.paragraphGrams[left], article.paragraphGrams[right])
        if (score >= .38) internalPairs.push(`${left + 1}/${right + 1}=${score.toFixed(2)}`)
      }
    }
    if (internalPairs.length) warnings.push(`${language}/${article.id} repeats paragraph-level material: ${internalPairs.slice(0, 4).join(', ')}`)
  }

  const similarPairs = []
  for (let left = 0; left < articles.length; left += 1) {
    for (let right = left + 1; right < articles.length; right += 1) {
      const firstScore = similarity(articles[left].firstGrams, articles[right].firstGrams)
      const lastScore = similarity(articles[left].lastGrams, articles[right].lastGrams)
      if (firstScore >= .42 || lastScore >= .42) {
        similarPairs.push(`${articles[left].id}/${articles[right].id} first=${firstScore.toFixed(2)} last=${lastScore.toFixed(2)}`)
      }
    }
  }
  if (similarPairs.length) warnings.push(`${language} has suspiciously similar openings or endings: ${similarPairs.slice(0, 8).join('; ')}`)

  console.log(`Editorial check scanned ${articles.length} ${language} articles.`)
}

warnings.forEach((warning) => console.warn(`WARN ${warning}`))
if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`))
  process.exitCode = 1
} else {
  console.log('Editorial structure check passed.')
}
