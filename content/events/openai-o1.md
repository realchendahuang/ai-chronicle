---
id: openai-o1
title: OpenAI o1 发布
subtitle: 测试时计算成为新的能力杠杆
date: '2024-09-12'
datePrecision: day
importance: A
eventType:
  - model
topics:
  - large-language-models
  - reasoning-models
companies:
  - openai
models:
  - o1-preview
concepts:
  - llm
  - chain-of-thought
summary: OpenAI 发布 o1-preview，把更多计算放到回答前的推理过程，在数学、科学和编程任务上显著提高复杂问题求解能力。
summaryEn: OpenAI released o1-preview and o1-mini, models trained to spend additional computation on an internal reasoning process before answering. The preview arrived with strict rate limits and without several ChatGPT features, including web browsing and file uploads.
background: 规模扩展长期主要发生在训练阶段，但复杂推理任务仍容易在一次快速生成中出错。行业开始寻找“让模型在回答前花更多计算”的新路线。
whatHappened: o1 通过强化学习学习更长的内部推理过程，并随着测试时计算增加而提高表现。它在高难度数学、科学和代码基准上展示了不同于普通聊天模型的能力曲线。
whyImportant: o1 让测试时计算成为继训练数据、参数与算力之后的另一条扩展轴，也让“推理模型”成为独立的产品类别。
impact:
  developer: 开发者开始在延迟、成本与推理可靠性之间显式选择。
  product: 模型选择从单纯比较规模，转向区分即时回答与深度推理模式。
  industry: 强化学习和测试时计算成为前沿模型竞争的核心方向。
beforeAfter:
  before: 大多数模型用相近的生成流程回答简单与复杂问题。
  after: 模型可以为困难任务分配更多推理时间和计算预算。
relatedEvents:
  - gpt-4o
  - deepseek-r1
  - gpt-5
visual:
  src: /assets/events/openai-o1.webp
  width: 1191
  height: 1684
  alt: OpenAI o1 系统卡首页，正文介绍以强化学习训练推理过程及其安全评估
  altEn: First page of the OpenAI o1 System Card, introducing reinforcement-learned reasoning and its safety evaluations
  caption: OpenAI 于 2024 年 12 月发布的 o1 系统卡首页；它记录的是完整 o1 与 o1-mini 的后续安全评估，而非 9 月预览版的开放界面。
  captionEn: First page of the o1 System Card published in December 2024, documenting later safety evaluations of o1 and o1-mini rather than the September preview interface.
  credit: OpenAI
  sourceUrl: "https://arxiv.org/abs/2412.16720"
  rights: official-editorial
sources:
  - title: Introducing OpenAI o1-preview
    url: "https://openai.com/index/introducing-openai-o1-preview/"
    publisher: OpenAI
    type: official
  - title: OpenAI o1 System Card
    url: "https://arxiv.org/abs/2412.16720"
    publisher: OpenAI
    type: paper
status: verified
slug: openai-o1
---
