---
id: codex-agent
title: OpenAI Codex 云端编程 Agent 上线
titleEn: OpenAI launches the cloud Codex coding agent
subtitle: 多个软件任务在隔离环境中并行执行
subtitleEn: Multiple software tasks run in parallel inside isolated environments
date: '2025-05-16'
datePrecision: day
importance: A
eventType: [product, model]
topics: [ai-coding, ai-agent, developer-tools]
companies: [openai]
products: [codex-agent]
concepts: [coding-agent, repository-context, swe-bench]
summary: OpenAI 在 ChatGPT 中发布 Codex 研究预览，为每个任务启动隔离云端环境，读取仓库、修改代码、运行测试并返回补丁证据。
summaryEn: OpenAI launched a Codex research preview in ChatGPT, creating isolated cloud environments where tasks could read repositories, edit code, run tests, and return patch evidence.
background: Claude Code 等终端 Agent 在本机持续协作，Devin 展示独立工程环境。团队还需要把多个耗时任务并行委托，而不占用本地开发会话。
backgroundEn: Terminal agents such as Claude Code collaborated continuously on local machines, while Devin demonstrated an independent engineering environment. Teams also wanted to delegate multiple long-running tasks without occupying local sessions.
whatHappened: 用户连接 GitHub 仓库后可并行启动任务。Agent 在预装仓库的容器中运行命令，最终提供日志、测试和代码引用；首版由 codex-1 模型驱动。
whatHappenedEn: After connecting a GitHub repository, users could start tasks in parallel. Each agent ran commands in a container with the repository and returned logs, tests, and code citations, initially powered by codex-1.
whyImportant: AI Coding 出现清晰分工。终端 Agent 适合同步协作，云端 Agent 适合可隔离、可验收、可并行的后台任务，软件团队开始管理 Agent 队列而不只是单次补全。
whyImportantEn: AI coding gained a clearer division of labor. Terminal agents fit synchronous collaboration, while cloud agents fit isolated, verifiable, parallel background tasks. Teams began managing agent queues rather than only completions.
impact:
  developer: 修 bug、补测试和小型功能可以并行委托，并以日志和测试结果验收。
  product: 编程 Agent 从单个交互界面扩展到云端任务队列和代码审查流程。
impactEn:
  developer: Bug fixes, tests, and small features could be delegated in parallel and reviewed through logs and test results.
  product: Coding agents expanded from one interactive interface into cloud task queues and code-review workflows.
beforeAfter:
  before: 一个开发者通常在一个本地会话中与一个编程助手协作。
  after: 多个 Agent 可以在隔离环境中并行处理仓库任务。
beforeAfterEn:
  before: One developer usually worked with one coding assistant in one local session.
  after: Multiple agents could handle repository tasks in parallel inside isolated environments.
relatedEvents: [codex, swe-bench, claude-code, agent-runtime]
sources:
  - title: Introducing Codex
    url: https://openai.com/index/introducing-codex/
    publisher: OpenAI
    type: official
status: verified
slug: codex-agent
---
