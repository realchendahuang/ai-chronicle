---
id: tool-use
title: Claude Tool Use 正式可用
titleEn: Claude tool use becomes generally available
subtitle: 并行工具、图像输入和结构化调用进入 Claude API
subtitleEn: Parallel tools, image input, and structured calls enter the Claude API
date: '2024-05-30'
datePrecision: day
importance: B
eventType: [api, product]
topics:
  - ai-agent
  - developer-tools
companies: [anthropic]
concepts: [tool-calling, agent]
summary: Anthropic 宣布 Claude Tool Use 正式可用。开发者用 JSON Schema 定义客户端工具，Claude 返回 `tool_use` 内容块和结构化参数；实际执行、权限检查与结果回传仍由客户端负责。
summaryEn: Anthropic made Claude Tool Use generally available. Developers described client-side tools with JSON Schema, and Claude returned a `tool_use` content block with structured arguments; execution, authorization, and result submission remained the client's responsibility.
background: 函数调用已经成为大模型接入实时数据和业务系统的基本模式，但各家 API 的并行调用、错误处理和提示约定仍在快速演化。
backgroundEn: Function calling had become the basic way to connect models with live data and business systems, while parallel calls, error handling, and prompting conventions were still evolving across providers.
whatHappened: Claude 可以根据工具描述选择一个或多个工具，并把参数交给应用执行。Anthropic 同时提供了面向客服和图像任务的工具使用示例。
whatHappenedEn: Claude could select one or more tools from their descriptions and return arguments for the application to execute. Anthropic also demonstrated customer-service and image-related tool workflows.
whyImportant: 工具调用从单家 API 特性变成前沿模型的共同能力，Agent 框架可以在不同模型之间迁移，也为后来的 MCP 标准化需求提供现实基础。
whyImportantEn: Tool calling became a shared frontier-model capability rather than one provider’s feature, allowing agent frameworks to move across models and creating demand for later MCP standardization.
impact:
  developer: Claude 应用可以使用数据库、API 和私有操作，不必把所有信息塞进提示。
  industry: 工具描述与调用协议开始成为模型平台竞争和兼容性的关键层。
impactEn:
  developer: Claude applications could use databases, APIs, and private operations without placing everything in prompts.
  industry: Tool descriptions and invocation protocols became a critical layer for model-platform competition and compatibility.
beforeAfter:
  before: Claude 主要通过文本上下文接收信息并生成回答。
  after: Claude 可以在应用控制下选择结构化工具并参与执行循环。
beforeAfterEn:
  before: Claude mainly consumed text context and generated responses.
  after: Claude could select structured tools inside an application-controlled execution loop.
relatedEvents: [function-calling, mcp, claude-code, computer-use]
visual:
  src: /assets/events/tool-use.webp
  width: 1672
  height: 941
  alt: 中心控制器连接计算器、检索、数据库、键盘、终端与摄像头，形成工具调用环
  altEn: "Central controller linked to calculator, search, database, keypad, terminal, and camera in a tool-use loop"
  caption: AI Chronicle 原创插图：Claude Tool Use 把并行结构化调用变成 API 的常规能力，执行仍在客户端。
  captionEn: "Original illustration by AI Chronicle: Claude tool use made parallel structured calls a normal API capability while execution stayed client-side."
  credit: AI Chronicle
  rights: generated
  prompt: "Minimal dark-background editorial diagram of a central control module with knobs and colored pins, cables to calculator, magnifying glass, database stack, keypad, code terminal, and camera modules, circular arrows suggesting a tool loop; soft stone materials; no logos, no Anthropic marks, 16:9"
sources:
  - title: Tool use is now generally available
    url: "https://www.anthropic.com/news/tool-use-ga"
    publisher: Anthropic
    type: official
status: verified
slug: tool-use
---
