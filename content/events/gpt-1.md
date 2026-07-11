---
id: gpt-1
title: GPT-1 验证生成式预训练
titleEn: GPT-1 validates generative pretraining
subtitle: 先学习通用语言，再用少量标注适配任务
subtitleEn: Learn general language first, then adapt with limited labels
date: '2018-06-11'
datePrecision: day
importance: A
eventType: [paper, model]
topics: [large-language-models, natural-language-processing]
companies: [openai]
models: [gpt-1]
concepts: [transformer, pretraining, fine-tuning, autoregressive]
summary: OpenAI 在 BooksCorpus 上预训练 1.17 亿参数、12 层的 Transformer 解码器，再分别微调到 12 个有监督任务；论文报告其中 9 项刷新当时最佳结果。
summaryEn: OpenAI pretrained a 12-layer, 117-million-parameter Transformer decoder on BooksCorpus, then fine-tuned it on 12 supervised tasks; the paper reported state-of-the-art results on nine.
background: NLP 模型通常为每个任务单独设计结构，并依赖大量标注数据。词向量能迁移词级知识，却不足以表示整句和长程上下文。
backgroundEn: NLP models were usually designed for individual tasks and depended on large labeled datasets. Word embeddings transferred lexical knowledge but not full-sentence or long-range context.
whatHappened: 模型在 BooksCorpus 上预测下一个词，再用同一主体适配文本蕴含、问答、语义相似度和分类任务。任务格式被转换成模型可读取的序列。
whatHappenedEn: The model predicted the next token on BooksCorpus, then reused the same body for entailment, question answering, similarity, and classification by expressing tasks as sequences.
whyImportant: GPT-1 给出了一条可以扩展的简单配方。模型主体不再围绕每项任务重新设计，通用预训练开始成为 NLP 的中心方法。
whyImportantEn: GPT-1 supplied a simple recipe that could scale. The model body no longer had to be redesigned for every task, making general pretraining a central NLP method.
impact:
  developer: 预训练模型加任务微调成为标准开发流程。
  industry: 训练通用基础模型再分发能力，开始替代为每个产品单独训练模型的思路。
impactEn:
  developer: Pretrained models followed by task fine-tuning became a standard workflow.
  industry: Training a general base model and distributing its capabilities began replacing separate models for every product task.
beforeAfter:
  before: 每个 NLP 任务往往需要专用模型和大量标签。
  after: 一个预训练 Transformer 可以迁移到多种任务。
beforeAfterEn:
  before: Each NLP task usually required a dedicated architecture and many labels.
  after: One pretrained Transformer could transfer across tasks.
relatedEvents: [transformer, bert, gpt-2]
visual:
  src: /assets/events/gpt-1.webp
  width: 1400
  height: 1812
  alt: 《Improving Language Understanding by Generative Pre-Training》论文首页
  altEn: First page of the paper Improving Language Understanding by Generative Pre-Training
  caption: OpenAI 2018 年生成式预训练论文的首页，后来常被称为 GPT-1 论文。
  captionEn: The first page of OpenAI's 2018 generative pretraining paper, later commonly called the GPT-1 paper.
  credit: Alec Radford、Karthik Narasimhan、Tim Salimans、Ilya Sutskever / OpenAI
  sourceUrl: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf"
  rights: official-editorial
sources:
  - title: Improving Language Understanding by Generative Pre-Training
    url: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf"
    publisher: OpenAI
    type: paper
status: verified
slug: gpt-1
---
