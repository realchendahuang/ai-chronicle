---
id: terminal-agent
title: 终端 Agent（Terminal Agent）
fullName: Terminal Agent
difficulty: engineering
oneLiner: 以命令行为主要操作界面、在沙箱或本机环境中执行多步任务的 AI Agent。
beginnerExplanation: 这类 Agent 会读文件、跑 shell、装依赖、执行测试，再根据输出继续改代码或排查问题。终端提供了可编程、可脚本化的统一接口，因此特别适合软件工程与运维类任务。Claude Code、Devin 等产品都体现了“在真实开发环境里动手”的形态。
whyItMatters: 终端 Agent 把模型从聊天框推进到可实际修改系统状态的工作流，是编码 Agent 落地的重要形态。
relatedEvents:
  - claude-code
  - devin
relatedConcepts:
  - agent
  - coding-agent
  - tool-calling
  - repository-context
commonMisunderstandings:
  - 能敲命令不等于安全；权限、沙箱与审计是产品的核心，而不只是模型能力。
  - 终端 Agent 不是只能写代码，也可用于数据、部署与系统诊断等任务。
slug: terminal-agent
---
