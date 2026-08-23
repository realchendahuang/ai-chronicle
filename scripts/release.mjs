// 发布脚本：固化「先 commit → 再 deploy」的顺序。
// 工作区有未提交改动时直接拦截，避免把脏状态部署上线；干净时才执行构建与部署。
// 用法：pnpm run release
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(here, '..')

const status = spawnSync('git', ['status', '--porcelain'], { cwd: rootDir, encoding: 'utf8' })
if (status.status !== 0) {
  console.error('无法读取 git 状态，请确认当前目录是 git 仓库。')
  process.exit(1)
}

const changed = status.stdout.trim()
if (changed) {
  console.error('❌ 工作区有未提交的改动，已阻止部署。\n')
  console.error(changed)
  console.error('\n请先提交（git commit）或暂存（git stash），确认工作区干净后再运行：')
  console.error('  pnpm run release\n')
  process.exit(1)
}

console.log('✅ 工作区干净，开始构建并部署…\n')
const deploy = spawnSync('pnpm', ['run', 'deploy'], { cwd: rootDir, stdio: 'inherit' })
process.exit(deploy.status ?? 1)
