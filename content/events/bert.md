---
id: bert
title: BERT 发布
subtitle: 双向预训练成为 NLP 的通用底座
subtitleEn: Bidirectional pretraining becomes a general NLP base
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
summary: Google 发布 BERT，并在 GLUE、SQuAD 等 11 项任务上取得当时最佳结果。同一个预训练编码器只需增加很小的任务输出层即可迁移。
summaryEn: Google released BERT and achieved state-of-the-art results on eleven tasks including GLUE and SQuAD. The same pretrained encoder transferred with only a small task-specific output layer.
background: GPT-1 已验证生成式预训练，但从左到右读取文本会限制需要同时利用前后文的理解任务。ELMo 等方法提供双向表示，却没有统一的深层预训练模型。
backgroundEn: GPT-1 validated generative pretraining, but left-to-right reading limited tasks that needed both preceding and following context. ELMo offered bidirectional representations without one unified deep pretrained model.
whatHappened: BERT 随机遮住输入 token 并预测它们，同时训练句子关系任务。模型结构使用 Transformer 编码器，可一次看到被遮词左右两侧的上下文。
whatHappenedEn: BERT masked random input tokens and predicted them while also training a sentence-relationship objective. Its Transformer encoder could inspect context on both sides of a masked word.
whyImportant: BERT 让预训练模型成为搜索、分类、抽取和问答的默认起点，并推动模型中心的 NLP 工程形成。它擅长理解任务，不直接承担开放式生成。
whyImportantEn: BERT made pretrained models the default starting point for search, classification, extraction, and question answering and accelerated model-centered NLP engineering. It excelled at understanding tasks rather than open-ended generation.
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
