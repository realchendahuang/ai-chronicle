---
id: bert
title: BERT 发布
subtitle: 预训练语言模型时代的开端
date: '2018-10-11'
datePrecision: day
importance: A
eventType:
  - model
  - paper
topics:
  - nlp
  - large-language-models
companies:
  - google
models:
  - bert
concepts:
  - pretraining
  - fine-tuning
  - masked-language-model
  - bidirectional
summary: Google 发布 BERT，通过双向预训练和微调范式，在 11 项 NLP 基准测试中取得最优成绩，开创了预训练语言模型的新时代。
whatHappened: BERT 创新性地使用了 Masked Language Model 预训练任务，让模型从两个方向理解上下文。发布后，BERT 几乎刷新了所有 NLP 基准测试的最佳成绩，成为 NLP 领域的基础设施级模型。
whyImportant: BERT 确立了"大规模预训练 + 下游微调"的范式，这个范式至今仍是 NLP 乃至多模态 AI 的核心方法论。
beforeAfter:
  before: NLP 任务需要为每个任务单独设计和训练模型。
  after: 一个预训练模型可以通过微调适配多种任务，大幅降低了 NLP 应用门槛。
relatedEvents:
  - transformer
  - gpt-1
  - gpt-2
  - gpt-3
sources:
  - title: BERT — Pre-training of Deep Bidirectional Transformers for Language Understanding
    url: https://arxiv.org/abs/1810.04805
    publisher: arXiv
    type: paper
status: verified
slug: bert
---
