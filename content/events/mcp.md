---
id: mcp
title: MCP 协议发布
subtitle: 用客户端—服务器协议复用工具、资源与提示
subtitleEn: A client-server protocol makes tools, resources, and prompts reusable
date: '2024-11-25'
datePrecision: day
importance: B
eventType:
  - protocol
  - open-source
topics:
  - ai-agent
  - ai-coding
  - developer-tools
companies:
  - anthropic
concepts:
  - mcp
  - tool-calling
  - agent-runtime
  - protocol
summary: Anthropic 发布 Model Context Protocol，定义 AI 应用发现和调用外部工具、资源及提示模板的客户端—服务器接口。
summaryEn: Anthropic released the Model Context Protocol, a client-server interface for AI applications to discover and use external tools, resources, and prompt templates.
background: 函数调用解决了模型如何输出工具参数，却没有规定编辑器、桌面助手和数据源怎样发现、连接和授权彼此。每个宿主仍维护自己的插件格式。
backgroundEn: Function calling defined how models emitted tool arguments but not how editors, desktop assistants, and data sources discovered, connected, or authorized each other. Every host still maintained its own plugin format.
whatHappened: MCP 使用 JSON-RPC，区分 Host、Client 与 Server。Server 可以声明工具、只读资源和提示，Client 负责连接与能力协商，Host 保留用户权限和模型交互控制。
whatHappenedEn: MCP used JSON-RPC and separated hosts, clients, and servers. Servers could expose tools, read-only resources, and prompts; clients handled connections and capability negotiation; hosts retained user permission and model interaction control.
whyImportant: 同一个集成可以被多个兼容应用复用，工具生态不必围绕单一模型供应商重写。协议仍不能自动解决信任、权限、恶意服务器和提示注入，这些责任留在宿主与用户边界。
whyImportantEn: One integration could be reused by multiple compatible applications rather than rewritten for each model provider. The protocol did not automatically solve trust, permissions, malicious servers, or prompt injection; those responsibilities remained with the host and user boundary.
impact:
  developer: 简化了 AI Agent 工具集成的复杂度，推动了 Agent 生态标准化。
  industry: 可能成为 AI Agent 与外部世界交互的行业标准。
relatedEvents:
  - claude-code
  - function-calling
  - tool-use
  - agent-runtime
sources:
  - title: Introducing the Model Context Protocol
    url: https://www.anthropic.com/news/model-context-protocol
    publisher: Anthropic
    type: official
status: verified
slug: mcp
---
