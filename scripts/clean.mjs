import { rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(here, '..')

for (const relative of ['dist']) {
  const target = join(rootDir, relative)
  rmSync(target, { recursive: true, force: true })
  console.log(`Removed ${relative}/`)
}
