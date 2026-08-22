// 优化 public/assets/events 下的位图：
//   1) PNG → WebP（quality 82），删除原 PNG，并把 content/ 里引用该图的 frontmatter src 同步为 .webp
//   2) 既有 WebP 用 quality 80 重压，仅当输出确实更小时才覆盖原文件
//   3) 增量：PNG 仅在目标比源旧时处理；WebP 仅在 --force 时重压（无源文件可比 mtime）
//
// 用法：
//   node scripts/optimize-images.mjs          # 增量
//   node scripts/optimize-images.mjs --force  # 全量

import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const here = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(here, '..')
const targetDir = join(rootDir, 'public/assets/events')
const contentDir = join(rootDir, 'content')
const force = process.argv.includes('--force')

const WEBP_QUALITY = 80
const PNG_TO_WEBP_QUALITY = 82

const beforeTotals = { png: 0, webp: 0 }
const afterTotals = { webp: 0 }
const converted = []
const recompressed = []
const skipped = []
const updatedRefs = []

function collectFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? collectFiles(path) : [path]
  })
}

function newerOrEqual(targetPath, sourceStat) {
  try {
    return statSync(targetPath).mtimeMs >= sourceStat.mtimeMs
  } catch {
    return false
  }
}

// 把 content/ 中对旧图片路径的引用整体替换为新路径，保证 frontmatter 与磁盘上的文件一致。
function syncContentRefs(fromRef, toRef) {
  for (const file of collectFiles(contentDir).filter((file) => file.endsWith('.md'))) {
    const text = readFileSync(file, 'utf8')
    if (!text.includes(fromRef)) continue
    writeFileSync(file, text.replaceAll(fromRef, toRef), 'utf8')
    updatedRefs.push(file.replace(rootDir, ''))
  }
}

async function convertPng(sourcePath) {
  const targetPath = sourcePath.replace(/\.png$/i, '.webp')
  const sourceStat = statSync(sourcePath)
  beforeTotals.png += sourceStat.size

  if (!force && newerOrEqual(targetPath, sourceStat)) {
    skipped.push({ file: sourcePath, reason: 'target newer or equal' })
    return
  }

  const buffer = await sharp(sourcePath).webp({ quality: PNG_TO_WEBP_QUALITY }).toBuffer()
  writeFileSync(targetPath, buffer)
  unlinkSync(sourcePath)

  syncContentRefs(sourcePath.replace(rootDir, ''), targetPath.replace(rootDir, ''))

  converted.push({ file: targetPath, before: sourceStat.size, after: buffer.length })
  afterTotals.webp += buffer.length
}

async function recompressWebp(sourcePath) {
  const sourceStat = statSync(sourcePath)
  beforeTotals.webp += sourceStat.size

  // 源文件本身就是 webp，没有可对比 mtime 的"更早版本"，所以增量模式下直接视为已优化。
  if (!force) {
    afterTotals.webp += sourceStat.size
    skipped.push({ file: sourcePath, reason: 'no newer source' })
    return
  }

  const buffer = await sharp(sourcePath).webp({ quality: WEBP_QUALITY }).toBuffer()
  if (buffer.length < sourceStat.size) {
    writeFileSync(sourcePath, buffer)
    recompressed.push({ file: sourcePath, before: sourceStat.size, after: buffer.length })
    afterTotals.webp += buffer.length
  } else {
    afterTotals.webp += sourceStat.size
    skipped.push({ file: sourcePath, reason: 'no smaller' })
  }
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

async function main() {
  for (const name of readdirSync(targetDir)) {
    const path = join(targetDir, name)
    if (/\.png$/i.test(name)) await convertPng(path)
    else if (/\.webp$/i.test(name)) await recompressWebp(path)
  }

  const pngAfter = converted.reduce((sum, item) => sum + item.after, 0)
  const totalBefore = beforeTotals.png + beforeTotals.webp
  const totalAfter = pngAfter + afterTotals.webp

  console.log(`\nImage optimization (${force ? 'forced' : 'incremental'})`)
  console.log(`  PNG → WebP:    ${converted.length} files, ${fmt(beforeTotals.png)} → ${fmt(pngAfter)}`)
  console.log(`  WebP recompr.: ${recompressed.length} shrank, ${fmt(beforeTotals.webp)} → ${fmt(afterTotals.webp)}`)
  console.log(`  Skipped:       ${skipped.length}`)
  console.log(`  Ref updates:   ${updatedRefs.length}`)
  console.log(`  Total:         ${fmt(totalBefore)} → ${fmt(totalAfter)}  (saved ${fmt(totalBefore - totalAfter)})`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
