---
id: claude-code
title: Claude Code 发布
subtitle: 终端原生 AI 编程 Agent
date: '2025-02-24'
datePrecision: day
importance: B
eventType:
  - product
topics:
  - ai-coding
  - ai-agent
  - developer-tools
companies:
  - anthropic
products:
  - claude-code
models:
  - claude-3.5-sonnet
concepts:
  - coding-agent
  - tool-calling
  - repository-context
  - swe-bench
  - terminal-agent
summary: Anthropic 随 Claude 3.7 Sonnet 发布 Claude Code 研究预览。这个命令行工具读取仓库、修改文件、运行命令，并在每次高风险操作前请求权限。
summaryEn: Anthropic released a research preview of Claude Code alongside Claude 3.7 Sonnet. The command-line tool read repositories, edited files, ran commands, and requested permission before higher-risk actions.
visual:
  src: /assets/events/claude-code.png
  width: 1900
  height: 1000
  alt: 橙色背景上由手托住人头轮廓，头部内是节点图形
  altEn: A hand supports a head outline containing a node diagram on an orange background
  caption: Anthropic 为 Claude 3.7 Sonnet 与 Claude Code 联合发布文章制作的官方主视觉。
  captionEn: Anthropic's official lead artwork for the joint Claude 3.7 Sonnet and Claude Code announcement.
  credit: Anthropic
  sourceUrl: "https://www.anthropic.com/news/claude-3-7-sonnet"
  rights: official-editorial
background: Copilot 和 Cursor 把模型放进编辑器，Devin 把任务放进独立工作区。许多工程师仍把终端、Git 和测试命令当作真实开发流程的中心。
backgroundEn: Copilot and Cursor placed models inside editors, while Devin put tasks in an independent workspace. Many engineers still treated the terminal, Git, and test commands as the center of real development.
whatHappened: Claude Code 在本地进程中搜索代码、编辑文件和执行测试，可使用 CLAUDE.md 保存项目指令，并连接 GitHub 与 MCP 工具。它并非天然“自主”，能力取决于权限、上下文、测试和用户监督。
whatHappenedEn: Claude Code searched code, edited files, and ran tests in a local process, used CLAUDE.md for project instructions, and connected to GitHub and MCP tools. It was not autonomous by default; results depended on permissions, context, tests, and user supervision.
whyImportant: 终端让模型接触软件工程的完整反馈回路：查看状态、修改、执行、读错误再重试。AI Coding 的产品单位因此从代码建议扩大到可审查的操作序列。
whyImportantEn: The terminal exposed the full software-engineering feedback loop of inspecting state, editing, executing, reading errors, and retrying. The product unit of AI coding expanded from a suggestion to a reviewable sequence of actions.
impact:
  developer: 改变了开发者与 AI 的协作方式，从对话式编程走向 Agent 式编程。
  industry: 推动了 AI Coding Agent 的产品化和竞争。
beforeAfter:
  before: AI Coding 主要是 IDE 内的代码补全和聊天助手。
  after: AI 可以作为终端 Agent 独立理解和操作整个代码库。
relatedEvents:
  - github-copilot
  - cursor
  - devin
  - codex-agent
  - mcp
  - swe-bench
  - codex-cli
sources:
  - title: Claude 3.7 Sonnet and Claude Code
    url: "https://www.anthropic.com/news/claude-3-7-sonnet"
    publisher: Anthropic
    type: official
status: verified
slug: claude-code
---
