---
id: assistants-api
title: OpenAI 发布 Assistants API
titleEn: OpenAI launches the Assistants API
subtitle: 线程、文件检索与代码执行成为托管能力
subtitleEn: Threads, file retrieval, and code execution become hosted primitives
date: '2023-11-06'
datePrecision: day
importance: B
eventType: [api, platform]
topics: [ai-agent, developer-tools]
companies: [openai]
products: [assistants-api]
concepts: [agent, tool-calling, rag]
summary: OpenAI 在 DevDay 以测试版发布 Assistants API，定义 Assistant、Thread、Message 与 Run 等托管对象，并接入文件检索、Code Interpreter 和函数调用。它把会话状态交给平台管理，也引入了由平台规定的运行状态机。
summaryEn: At DevDay, OpenAI launched the Assistants API in beta, defining hosted Assistant, Thread, Message, and Run objects with retrieval, Code Interpreter, and function calling. It moved conversation state onto the platform while introducing a provider-defined run state machine.
background: 开发者需要自己保存对话、截断上下文、上传文件、运行工具并把结果拼回提示。大量应用重复实现相同的 Agent 基础设施。
backgroundEn: Developers had to store conversations, trim context, upload files, run tools, and return results to prompts. Many applications rebuilt the same agent infrastructure.
whatHappened: API 引入 Assistant、Thread、Message 和 Run 等对象，由平台管理执行状态与工具调用。它随后在 Responses API 和 Agents SDK 出现后进入弃用迁移路线。
whatHappenedEn: The API introduced Assistant, Thread, Message, and Run objects, with the platform managing execution state and tool calls. It later entered a migration path after the Responses API and Agents SDK arrived.
whyImportant: 它首次把 Agent 循环作为模型提供商的托管产品交付，也暴露高度抽象 API 在调试、迁移和供应商绑定上的代价。
whyImportantEn: It was an early provider-hosted agent loop and also exposed the debugging, migration, and lock-in costs of a highly abstract API.
impact:
  developer: 构建带文件和工具的助手所需后端代码显著减少。
  product: 模型平台开始承接会话状态、检索和执行环境，而不只提供一次推理。
impactEn:
  developer: Building assistants with files and tools required much less backend code.
  product: Model platforms began hosting conversation state, retrieval, and execution rather than only individual inferences.
beforeAfter:
  before: Agent 状态和工具循环主要由应用自行管理。
  after: 模型供应商开始提供托管的有状态 Agent API。
beforeAfterEn:
  before: Applications managed agent state and tool loops themselves.
  after: Model providers offered hosted stateful agent APIs.
relatedEvents: [function-calling, gpts-launch, agent-runtime]
visual:
  src: /assets/events/assistants-api.webp
  width: 1672
  height: 941
  alt: 模块化托管助手机器：会话、运行、文件、检索与代码解释器串在同一传送带上
  altEn: "Modular hosted-assistant machine: conversation, runs, files, retrieval, and code interpreter along one conveyor"
  caption: AI Chronicle 原创插图：Assistants API 把线程、文件与工具执行收成平台侧的状态机。
  captionEn: "Original illustration by AI Chronicle: the Assistants API packages threads, files, and tool execution as a platform state machine."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration of a modular industrial assistant machine with five bays: conversation files, run gears, document shelves, magnifying-glass retrieval arm, and a code chamber; a continuous paper tape conveyor runs through all bays above a control panel with switches and grid; dark metallic product-editorial style; no logos, no readable brand text, 16:9"
sources:
  - title: New models and developer products announced at DevDay
    url: https://openai.com/index/new-models-and-developer-products-announced-at-devday/
    publisher: OpenAI
    type: official
status: verified
slug: assistants-api
---
