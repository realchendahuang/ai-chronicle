---
id: agent-runtime
title: Agent 运行时（Agent Runtime）
fullName: Agent Runtime
difficulty: engineering
oneLiner: 承载 Agent 循环执行、工具调用、状态与权限的运行环境与编排层。
beginnerExplanation: 模型本身只负责推理与决策；真正“干活”还需要进程、沙箱、工具接口、记忆与会话状态。Agent 运行时就是把规划—调用工具—观察结果—再规划这条回路跑起来的基础设施。它决定 Agent 能触达哪些资源、如何隔离风险、如何恢复失败步骤。
whyItMatters: 没有可靠的运行时，Agent 只能停留在 demo；有了统一运行时与协议，工具生态才能被复用和组合。
relatedEvents:
  - agent-runtime
  - mcp
relatedConcepts:
  - agent
  - tool-calling
  - mcp
  - protocol
commonMisunderstandings:
  - Agent 运行时不是模型本身，而是模型之外的执行与编排层。
  - 有聊天界面不等于有完整的 Agent 运行时能力。
slug: agent-runtime
---
