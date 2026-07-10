---
id: gpt-3
title: GPT-3 发布
subtitle: 大语言模型能力的质变——Few-Shot Learning
date: '2020-06-11'
datePrecision: day
importance: A
eventType:
  - model
  - paper
topics:
  - large-language-models
  - nlp
companies:
  - openai
models:
  - gpt-3
concepts:
  - llm
  - few-shot-learning
  - scaling-law
  - autoregressive
summary: OpenAI 发布 GPT-3，拥有 1750 亿参数，展示了令人惊叹的 few-shot learning 能力，让世界第一次意识到规模可以带来能力的质变。
whatHappened: GPT-3 是当时最大的语言模型，通过 API 提供服务。它不需要针对特定任务进行微调，只需在提示中给出几个例子，就能完成翻译、写作、编程等多种任务。这标志着 AI 从"需要大量标注数据"走向"只需要几个示例"。
whyImportant: GPT-3 证明了 Scaling Law——更大的模型、更多的数据、更多的算力可以带来意想不到的涌现能力。它为大模型军备竞赛拉开了序幕。
impact:
  industry: 全球 AI 公司开始竞相训练更大的模型，大模型军备竞赛开始。
  developer: 开发者开始围绕大模型 API 构建应用，开启了 AI 应用生态。
beforeAfter:
  before: 每个 NLP 任务需要独立训练模型，成本高、泛化差。
  after: 一个通用大模型可以通过提示完成多种任务，AI 开始走向通用化。
relatedEvents:
  - gpt-1
  - gpt-2
  - instructgpt
  - chatgpt-launch
  - gpt-4-release
sources:
  - title: Language Models are Few-Shot Learners
    url: https://arxiv.org/abs/2005.14165
    publisher: arXiv
    type: paper
status: verified
slug: gpt-3
---
