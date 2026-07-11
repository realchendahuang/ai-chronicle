---
id: agent-runtime
title: OpenAI 推出 Responses API 与 Agents SDK
titleEn: OpenAI launches the Responses API and Agents SDK
subtitle: 工具、追踪和多 Agent 交接进入统一开发栈
subtitleEn: Tools, tracing, and multi-agent handoffs enter one development stack
date: '2025-03-11'
datePrecision: day
importance: B
eventType: [api, framework]
topics: [ai-agent, developer-tools]
companies: [openai]
products: [responses-api, agents-sdk]
concepts: [agent-runtime, tool-calling]
summary: OpenAI 发布 Responses API、内置网页搜索、文件搜索和计算机使用工具，并开源 Agents SDK 管理工具、交接、护栏和追踪。
summaryEn: OpenAI launched the Responses API with built-in web search, file search, and computer use, and open-sourced an Agents SDK for tools, handoffs, guardrails, and tracing.
background: Assistants API 承担大量托管状态，但开发者需要更直接控制推理循环、工具结果和多 Agent 分工。多个框架已经各自实现类似抽象。
backgroundEn: The Assistants API hosted substantial state, but developers wanted more direct control over reasoning loops, tool results, and multi-agent work. Multiple frameworks had implemented similar abstractions independently.
whatHappened: Responses API 统一文本和工具调用响应，内置常用工具；Agents SDK 提供轻量 Agent、Handoff、Guardrail 和 Tracing 原语，并给出从 Assistants API 迁移方向。
whatHappenedEn: The Responses API unified text and tool responses with built-in tools. The Agents SDK added lightweight agents, handoffs, guardrails, and tracing, with a migration path from the Assistants API.
whyImportant: Agent Runtime 开始从应用内部胶水变成模型平台的一等产品层。可观测性、权限和多 Agent 编排不再只是框架附加功能。
whyImportantEn: The agent runtime moved from application glue to a first-class model-platform layer. Observability, permissions, and multi-agent orchestration were no longer optional framework extras.
impact:
  developer: 常用工具、执行追踪和 Agent 交接可以通过同一套 SDK 组合。
  industry: 模型供应商开始围绕 Agent 运行时和工具生态竞争，而不只比较模型分数。
impactEn:
  developer: Common tools, execution traces, and agent handoffs could be composed in one SDK.
  industry: Providers began competing on agent runtimes and tool ecosystems, not only model scores.
beforeAfter:
  before: 应用自行拼接模型调用、工具循环和多 Agent 协作。
  after: 模型平台提供统一响应接口与专用 Agent 开发工具。
beforeAfterEn:
  before: Applications assembled model calls, tool loops, and multi-agent collaboration themselves.
  after: Model platforms offered unified response APIs and dedicated agent development tools.
relatedEvents: [assistants-api, function-calling, mcp, codex-agent, computer-use]
visual:
  src: /assets/events/agent-runtime.webp
  width: 1672
  height: 941
  alt: 抽象的 Agent 运行时工作台：任务块进入齿轮执行核心，旁侧是交接、护栏与追踪模块
  altEn: "Abstract agent runtime workbench: task blocks enter a geared execution core beside handoff, guardrail, and tracing modules"
  caption: AI Chronicle 原创插图：Responses API 与 Agents SDK 把工具、交接、护栏和追踪收进同一套运行时。
  captionEn: "Original illustration by AI Chronicle: the Responses API and Agents SDK fold tools, handoffs, guardrails, and tracing into one runtime."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 3D illustration of an agent runtime control workbench on a dark surface: stacked task documents and status panels feed into a central transparent gear mechanism; colored cubes move along rails; modules for multi-agent handoff, shield guardrails, refresh loops, and tracing charts; bottom tool strip with folders, search, wrench, logs, charts; no logos, no readable brand text, no neon brain, clean technical product-editorial style, 16:9"
sources:
  - title: New tools for building agents
    url: "https://openai.com/index/new-tools-for-building-agents/"
    publisher: OpenAI
    type: official
status: verified
slug: agent-runtime
---
