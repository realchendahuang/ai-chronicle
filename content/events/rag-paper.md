---
id: rag-paper
title: RAG 检索增强生成论文
titleEn: The RAG retrieval-augmented generation paper
subtitle: 参数记忆与检索到的文档一起做知识密集型生成
subtitleEn: Parametric memory and retrieved documents generate together on knowledge-heavy tasks
date: '2020-05-22'
datePrecision: day
importance: A
eventType: [paper]
topics:
  - large-language-models
  - natural-language-processing
  - rag-search
companies: [meta]
models: []
products: []
papers: [retrieval-augmented-generation]
people: []
concepts: [rag, llm]
summary: Facebook AI 提出 RAG：用稠密检索从文档库取出相关段落，再与预训练序列到序列模型一起条件生成答案，在开放域问答等任务上验证有效。
summaryEn: "Facebook AI proposed RAG: dense retrieval pulls relevant passages from a document store, then a pretrained sequence-to-sequence model generates answers conditioned on them, with strong open-domain QA results."
background: 纯参数化语言模型把知识压进权重，更新慢、难溯源；纯检索系统能引用文档，却缺少流畅的条件生成。知识密集型 NLP 需要两者结合。
backgroundEn: Purely parametric language models pack knowledge into weights that are slow to update and hard to cite. Pure retrieval can surface documents but lacks fluent conditional generation. Knowledge-intensive NLP needed both.
whatHappened: 论文在 arXiv 发布（后于 NeurIPS 2020 发表），将非参数记忆（可检索文档索引）与参数记忆（预训练生成模型）拼接：先检索，再基于查询与文档生成。
whatHappenedEn: "The paper appeared on arXiv (later NeurIPS 2020), joining non-parametric memory (a retrievable document index) with parametric memory (a pretrained generator): retrieve first, then generate from query and documents."
whyImportant: RAG 成为企业知识库问答与“可更新外部记忆”的常用范式名称，也推动检索器、向量库与生成模型的流水线工程。
whyImportantEn: RAG became the common name for enterprise knowledge-base QA and updatable external memory, and pushed pipeline engineering across retrievers, vector stores, and generators.
impact:
  developer: 回答可挂上检索段落，知识更新可先改索引而不必总是重训整模。
  industry: 搜索、客服与内部文档助手大量采用检索加生成架构。
impactEn:
  developer: Answers could attach retrieved passages, and knowledge updates could start with the index instead of always retraining the full model.
  industry: Search, support, and internal document assistants widely adopted retrieve-then-generate stacks.
beforeAfter:
  before: 知识密集型任务主要在“只靠模型权重”与“只靠检索片段”之间二选一。
  after: 检索与生成被写成同一条可训练、可部署的链路。
beforeAfterEn:
  before: Knowledge-intensive tasks mostly chose between model weights alone and retrieved snippets alone.
  after: Retrieval and generation were written as one trainable, deployable pipeline.
relatedEvents: [gpt-3, bert, chatgpt-launch]
visual:
  src: /assets/events/rag-paper.webp
  width: 1280
  height: 720
  alt: "图书馆书桌旁，文献吸入问号漏斗再展开成回答丝带"
  altEn: "Library desk where documents flow into a question-mark funnel and out as answer ribbons"
  caption: "AI Chronicle 原创插图：RAG 先检索外部资料，再让生成站在证据旁边。"
  captionEn: "Original illustration by AI Chronicle: RAG retrieves external evidence before generation answers."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for RAG, books into question funnel forming answer ribbons, library light, no text no logos, 16:9"
sources:
  - title: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
    url: "https://arxiv.org/abs/2005.11401"
    publisher: arXiv
    type: paper
  - title: Retrieval Augmented Generation — Facebook AI blog context
    url: "https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/"
    publisher: Meta AI
    type: official
status: verified
slug: rag-paper
---
