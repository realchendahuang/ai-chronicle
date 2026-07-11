---
id: gpt-5-6
title: GPT-5.6 发布
subtitle: 工具编排与持久推理进入旗舰模型
date: '2026-07-09'
datePrecision: day
importance: B
eventType:
  - model
topics:
  - large-language-models
  - ai-agent
  - ai-coding
companies:
  - openai
models:
  - gpt-5.6-sol
  - gpt-5.6-terra
  - gpt-5.6-luna
concepts:
  - llm
  - coding-agent
  - tool-calling
  - context-window
summary: OpenAI 发布 GPT-5.6，以 Sol、Terra、Luna 三档覆盖旗舰能力、成本平衡与高吞吐，并加入程序化工具调用、多 Agent 编排、显式缓存和持久推理。
summaryEn: OpenAI released the GPT-5.6 Sol, Terra, and Luna tiers on July 9, 2026. The API added programmatic tool calling, explicit prompt caching, and persistent reasoning, while multi-agent orchestration launched in beta rather than as a generally available capability.
visual:
  src: /assets/events/gpt-5-6.png
  width: 1200
  height: 630
  alt: 粉橙渐变背景上的 OpenAI Developers Model guidance 卡片
  altEn: An OpenAI Developers Model guidance card on a pink-orange gradient
  caption: OpenAI 开发者文档“Model guidance”页面的官方分享卡片；GPT-5.6 的使用说明发布于该页面。
  captionEn: The official social card for OpenAI's Model guidance documentation, where usage guidance for GPT-5.6 was published.
  credit: OpenAI
  sourceUrl: https://developers.openai.com/api/docs/guides/latest-model
  rights: official-editorial
background: GPT-5.4 与 5.5 已把百万上下文、计算机操作、托管 Shell、Skills 和 MCP 纳入模型工作流，但复杂任务仍需要更高效的工具编排和跨轮推理复用。
whatHappened: GPT-5.6 允许模型在托管运行时中编写 JavaScript 调用合资格工具，并提供多 Agent beta、显式提示缓存、持久推理、max 推理强度和 Pro 模式。三档模型分别面向能力、成本和吞吐。
whyImportant: 它继续把旗舰模型从“生成回答”推进为“组织计算、工具和子任务”的执行系统，也让上下文与推理复用成为生产工作流的一等能力。
impact:
  developer: 复杂工具链可以减少中间往返，并更精确地控制缓存、推理和成本。
  product: 同一家族覆盖旗舰、高性价比和高吞吐工作负载。
  industry: 前沿模型竞争进一步转向任务完成效率、工具编排和长期上下文管理。
beforeAfter:
  before: Agent 框架主要在模型外部组织工具调用、子任务和历史推理。
  after: 更多编排、缓存和推理复用能力进入模型与 API 原生层。
relatedEvents:
  - gpt-5
  - claude-5-family
  - gemini-3-5-flash
sources:
  - title: Using GPT-5.6
    url: https://developers.openai.com/api/docs/guides/latest-model
    publisher: OpenAI
    type: official
  - title: OpenAI API changelog — July 2026
    url: https://developers.openai.com/api/docs/changelog
    publisher: OpenAI
    type: official
status: verified
slug: gpt-5-6
---
