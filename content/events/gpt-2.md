---
id: gpt-2
title: GPT-2 展示零样本任务迁移
titleEn: GPT-2 demonstrates zero-shot task transfer
subtitle: 规模扩大后，语言模型开始在提示中识别任务
subtitleEn: At larger scale, a language model begins inferring tasks from prompts
date: '2019-02-14'
datePrecision: day
importance: A
eventType: [model, paper]
topics: [large-language-models, natural-language-processing, ai-safety]
companies: [openai]
models: [gpt-2]
concepts: [transformer, autoregressive, few-shot-learning]
summary: OpenAI 公布在约 800 万个网页文档上训练的 15 亿参数 GPT-2，并演示模型在不做任务微调时完成基础问答、摘要和翻译。公司起初只发布较小版本，随后于 2019 年 11 月放出完整模型。
summaryEn: OpenAI presented the 1.5-billion-parameter GPT-2, trained on roughly eight million web documents, and demonstrated basic question answering, summarization, and translation without task-specific fine-tuning. It initially withheld the full model, then released it in November 2019.
background: GPT-1 已证明预训练后微调有效，但每项任务仍需要标签和额外训练。研究者开始检验单纯扩大通用语言建模能否产生任务能力。
backgroundEn: GPT-1 showed that pretraining followed by fine-tuning worked, but each task still needed labels and additional training. Researchers began testing whether larger general language models could acquire task behavior directly.
whatHappened: GPT-2 在约 800 万网页组成的 WebText 上训练。OpenAI 先只发布小模型，以生成滥用风险为由分阶段开放，九个月后发布完整权重。
whatHappenedEn: GPT-2 was trained on WebText, a collection of roughly eight million web pages. OpenAI initially released smaller models, citing misuse concerns, and published the full weights nine months later.
whyImportant: 它把“提示本身可以描述任务”推到台前，也第一次让模型权重是否应立即公开成为大规模公共争论。
whyImportantEn: It brought the idea that a prompt could specify a task into view and triggered a major public debate over whether powerful model weights should be released immediately.
impact:
  developer: 零样本提示开始成为评估通用语言模型的重要方法。
  industry: 分阶段发布、滥用评估和模型开放策略进入前沿模型治理。
impactEn:
  developer: Zero-shot prompting became an important way to evaluate general language models.
  industry: Staged release, misuse evaluation, and model-access policy became part of frontier-model governance.
beforeAfter:
  before: 预训练模型通常需要针对下游任务微调。
  after: 只靠自然语言上下文触发任务能力开始显得可行。
beforeAfterEn:
  before: Pretrained models usually needed fine-tuning for downstream tasks.
  after: Triggering task behavior through natural-language context began to look viable.
relatedEvents: [gpt-1, gpt-3]
visual:
  src: /assets/events/gpt-2.webp
  width: 1400
  height: 1812
  alt: 《Language Models are Unsupervised Multitask Learners》技术报告首页
  altEn: First page of the technical report Language Models are Unsupervised Multitask Learners
  caption: GPT-2 技术报告首页，摘要概述了大规模语言模型在零样本设置下迁移任务的实验。
  captionEn: The first page of the GPT-2 technical report, whose abstract outlines zero-shot task transfer with a large language model.
  credit: Alec Radford 等 / OpenAI
  sourceUrl: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
  rights: official-editorial
sources:
  - title: Better Language Models and Their Implications
    url: "https://openai.com/index/better-language-models/"
    publisher: OpenAI
    type: official
status: verified
slug: gpt-2
---
