---
id: protocol
title: 协议（Protocol）
fullName: Protocol
difficulty: engineering
oneLiner: 约定系统之间如何交换消息、调用能力与共享上下文的标准接口规则。
beginnerExplanation: 协议规定请求/响应格式、能力发现、错误处理与安全边界，让不同实现可以互操作。在 AI 领域，工具与数据源若各写一套私有对接，生态碎片化；像 MCP 这样的开放协议试图把“模型连外部世界”标准化。协议本身不是模型，而是连接层。
whyItMatters: 好的协议降低集成成本，使 Agent、工具与运行时可以组合扩展，而不是每个应用重写一遍。
relatedEvents:
  - mcp
relatedConcepts:
  - mcp
  - agent
  - tool-calling
  - agent-runtime
commonMisunderstandings:
  - 有协议文档不等于生态已统一；采用率、兼容性与安全模型决定成败。
  - 协议解决互操作，不自动解决模型幻觉或工具权限滥用。
slug: protocol
---
