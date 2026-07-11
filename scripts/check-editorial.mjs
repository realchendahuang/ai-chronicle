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
      return {
        id: basename(name, '.md'),
        body,
        text,
        first: text.slice(0, 180),
        last: text.slice(-180),
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

  const similarPairs = []
  for (let left = 0; left < articles.length; left += 1) {
    for (let right = left + 1; right < articles.length; right += 1) {
      const firstScore = similarity(ngrams(articles[left].first), ngrams(articles[right].first))
      const lastScore = similarity(ngrams(articles[left].last), ngrams(articles[right].last))
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
