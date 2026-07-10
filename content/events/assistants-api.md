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
summary: OpenAI 在 DevDay 发布 Assistants API，为开发者托管对话线程、文件检索、代码解释器和函数调用。
summaryEn: At DevDay, OpenAI launched the Assistants API with hosted conversation threads, file retrieval, Code Interpreter, and function calling.
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
sources:
  - title: New models and developer products announced at DevDay
    url: https://openai.com/index/new-models-and-developer-products-announced-at-devday/
    publisher: OpenAI
    type: official
status: verified
slug: assistants-api
---
