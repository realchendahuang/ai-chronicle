---
id: codex-cli
title: OpenAI 开源 Codex CLI 终端编程 Agent
titleEn: OpenAI open-sources Codex CLI terminal coding agent
subtitle: 与 Claude Code 对打的本机命令行路线
subtitleEn: A local terminal route that pairs against Claude Code
date: 2025-04-16
datePrecision: day
importance: A
eventType:
  - product
  - open-source
topics:
  - ai-coding
  - ai-agent
  - developer-tools
companies:
  - openai
products:
  - codex-cli
  - codex-agent
models:
  - o3
  - o4-mini
concepts:
  - coding-agent
  - terminal-agent
  - tool-calling
  - repository-context
  - swe-bench
summary: OpenAI 在发布 o3 与 o4-mini 的同时开源 Codex CLI：可在本地终端读仓库、改文件、跑命令的编程 Agent，与云端 Codex 任务队列形成终端与云端双轨。
summaryEn: Alongside o3 and o4-mini, OpenAI open-sourced Codex CLI, a coding agent that reads repos, edits files, and runs commands in a local terminal, pairing with cloud Codex task queues as a terminal-cloud dual track.
background: Claude Code 已证明终端 Agent 的产品吸引力。OpenAI 需要可安装、可审计、可与模型 API 绑定的开源客户端，而不是只把 Agent 关在网页里。
backgroundEn: Claude Code had proven terminal-agent product pull. OpenAI needed an installable, auditable, API-bound open client, not agents only behind a web UI.
whatHappened: GitHub 上的 Codex CLI 以开源形式发布，默认对接 OpenAI 模型，支持本地沙箱与多步任务；随后快速迭代，并与云端 Codex、IDE 扩展、桌面应用共享会话体系。
whatHappenedEn: Codex CLI shipped open on GitHub, defaulting to OpenAI models with local sandboxing and multi-step tasks; rapid iteration followed, sharing session systems with cloud Codex, IDE extensions, and desktop apps.
whyImportant: Agent Coding 的终端三角补齐：Claude Code、Codex CLI 与各类编辑器 Agent 并列，开发者开始按信任域选型，而不是只问模型名字。
whyImportantEn: "It completed the agent-coding terminal triangle: Claude Code, Codex CLI, and editor agents side by side. Developers began choosing by trust domain, not only model name."
impact:
  developer: "可用开源 CLI 把仓库操作接进 OpenAI 模型。"
  industry: "终端 Agent 从 Anthropic 单极叙事变成双巨头对打。"
impactEn:
  developer: "An open CLI could wire repo actions to OpenAI models."
  industry: "Terminal agents shifted from an Anthropic-centric story to a dual-giant contest."
beforeAfter:
  before: "OpenAI 编程 Agent 叙事偏云端与 ChatGPT。"
  after: "本机 CLI 成为官方、可安装的并行入口。"
beforeAfterEn:
  before: "OpenAI coding-agent narrative skewed cloud and ChatGPT."
  after: "A local CLI became an official installable parallel door."
relatedEvents:
  - claude-code
  - codex-agent
  - cursor
  - devin
  - codex
  - swe-bench
  - openai-o1
visual:
  src: "/assets/events/codex-cli.webp"
  width: 1280
  height: 720
  alt: "编辑插图：终端光标与代码括号构成的抽象命令行"
  altEn: "Editorial illustration of a terminal caret and abstract code brackets"
  caption: "AI Chronicle 原创插图：提示符与括号，对应 Codex CLI 的终端 Agent 定位。"
  captionEn: "AI Chronicle original illustration: prompt caret and brackets for Codex CLI terminal-agent stance."
  credit: "AI Chronicle"
  rights: "generated"
  prompt: "Editorial 16:9 museum poster, minimal terminal caret blinking among abstract code brackets on deep charcoal, single mint cursor glow, no logos no readable commands"
sources:
  - title: "OpenAI debuts Codex CLI"
    url: https://techcrunch.com/2025/04/16/openai-debuts-codex-cli-an-open-source-coding-tool-for-terminals/
    publisher: "TechCrunch"
    type: report
  - title: "openai/codex"
    url: https://github.com/openai/codex
    publisher: "OpenAI"
    type: official
status: verified
slug: codex-cli
---
