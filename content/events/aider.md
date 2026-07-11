---
id: aider
title: Aider 把 Git 结对写进终端
titleEn: Aider writes git pair-programming into the terminal
subtitle: 开源 CLI 用 diff 与提交约束模型改仓库
subtitleEn: An open CLI constrains model edits with diffs and commits
date: 2023-05-01
datePrecision: month
importance: B
eventType:
  - product
  - open-source
topics:
  - ai-coding
  - ai-agent
  - developer-tools
  - open-source-models
products:
  - aider
concepts:
  - coding-agent
  - terminal-agent
  - repository-context
summary: 开源工具 Aider 在终端中对接多厂商 LLM，按聊天指令直接修改本地 Git 仓库并生成可审查 diff，成为 Agent Coding 兴起前最重要的开源结对路径之一。
summaryEn: Open-source Aider pairs multi-vendor LLMs in the terminal, editing local git repos from chat and producing reviewable diffs—one of the most important open pair-programming paths before the agent-coding boom.
background: Copilot 占住行内补全时，仍缺“在真实仓库里连续改文件并留下 Git 历史”的开源默认。开发者需要可自带密钥、可审计的结对工具。
backgroundEn: While Copilot owned inline completion, an open default for continuously editing real repos with git history was still missing. Developers needed BYOK, auditable pair tools.
whatHappened: Aider 以 Apache 许可发展，强调映射代码库、应用补丁、跑测试与 Git 提交；模型可换，工作流钉在终端与版本控制。
whatHappenedEn: Aider grew under Apache terms, mapping codebases, applying patches, running tests, and committing; models swap, the workflow stays terminal and VCS.
whyImportant: 它证明 Agent Coding 不必先有商业 IDE：Git + 终端 + 可换模型已能构成最小可信闭环。
whyImportantEn: "It showed agent coding need not wait for a commercial IDE: git + terminal + swappable models already form a minimal trustworthy loop."
impact:
  developer: "可用自己的 API Key 在本机仓库结对修改。"
  industry: "为 Claude Code / Codex CLI 铺设开源前史。"
impactEn:
  developer: "BYOK pair edits became possible in local repos."
  industry: "It laid open prehistory for Claude Code and Codex CLI."
beforeAfter:
  before: "开源侧多为补全插件或网页聊天。"
  after: "终端 Git 结对成为可复制的开源范式。"
beforeAfterEn:
  before: "Open side was mostly completion plugins or web chat."
  after: "Terminal git pairing became a copyable open paradigm."
relatedEvents:
  - github-copilot
  - claude-code
  - codex-cli
  - cursor
  - swe-bench
  - continue-dev
visual:
  src: "/assets/events/aider.webp"
  width: 1280
  height: 720
  alt: "编辑插图：终端与 Git 分支线条交织"
  altEn: "Editorial illustration of a terminal intertwined with git branch lines"
  caption: "AI Chronicle 原创插图：终端与分支，对应 Aider 的 Git 结对哲学。"
  captionEn: "AI Chronicle original illustration: terminal and branches for Aider’s git-pairing philosophy."
  credit: "AI Chronicle"
  rights: "generated"
  prompt: "Editorial 16:9 museum poster, minimal terminal rectangle with branching git lines, mint on charcoal, no logos no readable code"
sources:
  - title: "Aider"
    url: https://aider.chat/
    publisher: "Aider"
    type: official
status: verified
slug: aider
---
