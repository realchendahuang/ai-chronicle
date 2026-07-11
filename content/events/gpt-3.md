---
id: gpt-3
title: GPT-3 发布
subtitle: 1750 亿参数把少样本提示推向通用接口
subtitleEn: 175 billion parameters turn few-shot prompting into a general interface
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
summary: OpenAI 训练 1750 亿参数 GPT-3，并以零样本、单样本和少样本提示评估它。模型无需更新权重即可尝试翻译、问答、文本生成和简单代码，但不同任务的结果差异很大。
summaryEn: OpenAI trained the 175-billion-parameter GPT-3 and evaluated it with zero-, one-, and few-shot prompts. It attempted translation, question answering, text generation, and simple code without weight updates, with sharply uneven results across tasks.
background: GPT-2 已展示零样本迁移，缩放规律也预示损失会随模型、数据和计算量平滑下降。尚不清楚这种下降能否转化成跨任务的实用行为。
backgroundEn: GPT-2 had shown zero-shot transfer, and scaling laws predicted smoother loss with more models, data, and compute. It remained unclear whether that improvement would produce useful behavior across tasks.
whatHappened: 论文比较零样本、单样本和少样本设置。GPT-3 在许多任务上明显改善，但在算术、常识和数据偏差上仍有系统性错误。OpenAI 选择通过 API 提供模型，而不是发布权重。
whatHappenedEn: The paper compared zero-shot, one-shot, and few-shot settings. GPT-3 improved across many tasks but retained systematic failures in arithmetic, common sense, and bias. OpenAI delivered it through an API rather than releasing weights.
whyImportant: 提示开始承担过去由数据集格式和微调代码完成的任务配置工作。API 分发也形成新的基础模型商业模式，让同一模型支撑大量下游产品。
whyImportantEn: Prompts began performing task configuration previously handled by dataset formats and fine-tuning code. API distribution also established a base-model business model in which one model served many downstream products.
impact:
  industry: 前沿实验室把更大的训练集群和基础模型 API 纳入长期产品投入。
  developer: 开发者开始围绕通用模型 API 构建写作、搜索和编程应用。
impactEn:
  industry: Frontier labs made larger training clusters and base-model APIs long-term product investments.
  developer: Developers began building writing, search, and coding products around general model APIs.
beforeAfter:
  before: 每个 NLP 任务需要独立训练模型，成本高、泛化差。
  after: 一个通用大模型可以通过提示完成多种任务，AI 开始走向通用化。
relatedEvents:
  - gpt-1
  - gpt-2
  - instructgpt
  - chatgpt-launch
  - gpt-4-release
visual:
  src: /assets/events/gpt-3.webp
  width: 1400
  height: 1812
  alt: 《Language Models are Few-Shot Learners》论文首页
  altEn: First page of the paper Language Models are Few-Shot Learners
  caption: GPT-3 论文首页，作者名单跨越 OpenAI 当时的大模型研究团队。
  captionEn: The first page of the GPT-3 paper, listing OpenAI's large language model research team.
  credit: Tom B. Brown 等 / arXiv
  sourceUrl: https://arxiv.org/abs/2005.14165
  rights: official-editorial
sources:
  - title: Language Models are Few-Shot Learners
    url: https://arxiv.org/abs/2005.14165
    publisher: arXiv
    type: paper
status: verified
slug: gpt-3
---
