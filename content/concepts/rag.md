---
id: rag
title: RAG（检索增强生成）
fullName: Retrieval-Augmented Generation
difficulty: intermediate
oneLiner: 让大模型在回答问题前先检索外部知识库，从而获取最新、准确的信息。
beginnerExplanation: 大模型的知识停留在训练截止日期。RAG 的做法是：用户提问 → 先从知识库检索相关内容 → 把检索到的资料和问题一起给模型 → 模型基于这些资料回答。这样即使模型没有被训练过某个知识，也能给出准确的回答。
whyItMatters: RAG 是让大模型接入现实世界知识的核心技术方案。企业知识库、AI 搜索、文档问答等场景大多基于 RAG。
relatedEvents:
  - rag-paper
  - chatgpt-launch
  - gpt-3
relatedConcepts:
  - llm
  - prompt
  - token
commonMisunderstandings:
  - RAG 不能保证答案一定正确，检索到的资料本身也可能过时或有偏。
  - 有向量数据库不等于做好了 RAG，分块、召回与引用呈现同样关键。
slug: rag
---
