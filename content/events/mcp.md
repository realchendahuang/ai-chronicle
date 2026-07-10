---
id: mcp
title: MCP 协议发布
subtitle: AI 与工具之间的通用接口标准
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
summary: Anthropic 发布了 Model Context Protocol（MCP），一个用于 AI 模型与外部工具和数据源通信的开放协议，旨在成为 AI Agent 的"USB 标准"。
whatHappened: MCP 定义了一套标准协议，让 AI 模型可以统一地连接各种工具、数据库、文件系统和 API。开发者可以通过实现 MCP 服务端，让不同的 AI 应用都能访问相同的工具和数据源。
whyImportant: MCP 解决了 AI Agent 生态的核心问题——碎片化。在此之前，每个 AI 应用和每个工具之间的集成都是定制的。MCP 提供了一套标准，让工具和 AI 应用可以即插即用。
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
