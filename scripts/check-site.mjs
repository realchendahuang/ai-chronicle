import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const rootDir = resolve(import.meta.dirname, '..')
const generatedDir = join(rootDir, '.generated')
const distDir = join(rootDir, 'dist/client')
const basePath = '/ai-chronicle'

const events = JSON.parse(readFileSync(join(generatedDir, 'events.json'), 'utf8'))
const concepts = JSON.parse(readFileSync(join(generatedDir, 'concepts.json'), 'utf8'))
const companies = JSON.parse(readFileSync(join(generatedDir, 'companies.json'), 'utf8'))
const modelFamilies = JSON.parse(readFileSync(join(generatedDir, 'modelFamilies.json'), 'utf8'))

const failures = []
const warnings = []

function collectFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? collectFiles(path) : [path]
  })
}

function assertUnique(items, key, label) {
  const seen = new Set()
  for (const item of items) {
    if (seen.has(item[key])) failures.push(`Duplicate ${label} ${key}: ${item[key]}`)
    seen.add(item[key])
  }
}

assertUnique(events, 'id', 'event')
assertUnique(events, 'slug', 'event')
assertUnique(concepts, 'id', 'concept')
assertUnique(concepts, 'slug', 'concept')
assertUnique(companies, 'id', 'company')
assertUnique(companies, 'slug', 'company')
assertUnique(modelFamilies, 'id', 'model family')
assertUnique(modelFamilies, 'slug', 'model family')

for (const event of events) {
  if (event.status === 'verified' && event.sources.length === 0) {
    failures.push(`Verified event has no source: ${event.id}`)
  }
  for (const source of event.sources) {
    if (!/^https?:\/\//.test(source.url)) failures.push(`Invalid source URL in ${event.id}: ${source.url}`)
  }
}

const eventIds = new Set(events.map((item) => item.id))
const conceptIds = new Set(concepts.map((item) => item.id))
const companyIds = new Set(companies.map((item) => item.id))
const missingModelFamilyCompanies = modelFamilies.filter((family) => !companyIds.has(family.company))
const missingEventRefs = [...new Set(events.flatMap((event) => event.relatedEvents).filter((id) => !eventIds.has(id)))]
const missingConceptRefs = [...new Set(events.flatMap((event) => event.concepts).filter((id) => !conceptIds.has(id)))]
const missingCompanyRefs = [...new Set(events.flatMap((event) => event.companies).filter((id) => !companyIds.has(id)))]

if (missingEventRefs.length) warnings.push(`${missingEventRefs.length} future event references are not published yet`)
if (missingConceptRefs.length) warnings.push(`${missingConceptRefs.length} concept references are not published yet`)
if (missingCompanyRefs.length) failures.push(`Missing company references: ${missingCompanyRefs.join(', ')}`)
if (missingModelFamilyCompanies.length) failures.push(`Missing model family companies: ${missingModelFamilyCompanies.map((family) => family.company).join(', ')}`)

const htmlFiles = collectFiles(distDir).filter((file) => file.endsWith('.html'))
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  const attributes = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1])

  for (const value of attributes) {
    if (/^(?:https?:|mailto:|#)/.test(value)) continue
    if (!value.startsWith(basePath)) {
      failures.push(`URL escapes base path in ${file.replace(rootDir, '')}: ${value}`)
      continue
    }

    const relative = value.slice(basePath.length).split(/[?#]/)[0]
    const target = join(distDir, basePath.slice(1), relative)
    const candidate = relative.endsWith('/') ? join(target, 'index.html') : target
    if (!existsSync(candidate)) failures.push(`Broken local URL in ${file.replace(rootDir, '')}: ${value}`)
  }
}

for (const asset of ['app.css', 'app.js', 'favicon.svg', 'search-index.json', 'i18n-en.json']) {
  const path = join(distDir, basePath.slice(1), 'assets', asset)
  if (!existsSync(path) || statSync(path).size === 0) failures.push(`Missing production asset: ${asset}`)
}

warnings.forEach((warning) => console.warn(`WARN ${warning}`))

if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL ${failure}`))
  process.exitCode = 1
} else {
  console.log(`Site check passed: ${htmlFiles.length} HTML pages, ${events.length} events, ${concepts.length} concepts, ${companies.length} companies, ${modelFamilies.length} model families.`)
}
