---
id: ai21-jamba
title: AI21 发布 Jamba 混合架构模型
titleEn: AI21 releases the Jamba hybrid-architecture model
subtitle: Mamba 状态空间与 Transformer 的首次规模化结合
subtitleEn: The first large-scale marriage of Mamba state-space and Transformer
date: '2024-03-28'
datePrecision: day
importance: B
eventType:
  - product
topics:
  - large-language-models
  - model-efficiency
  - ai-history
companies:
  - ai21
concepts:
  - llm
summary: AI21 Labs 发布 Jamba，首个将 Mamba 状态空间模型与 Transformer 结合的大规模混合架构，在长上下文与吞吐上展示效率优势。
summaryEn: AI21 Labs released Jamba, the first large-scale hybrid architecture combining Mamba state-space models with Transformer, showing efficiency gains in long context and throughput.
background: Transformer 的自注意力随序列长度平方增长，状态空间模型（SSM）成为降低长上下文成本的研究方向，AI21 尝试将两者融合。
backgroundEn: Transformer self-attention grows quadratically with sequence length; state-space models became a research direction to cut long-context cost, and AI21 tried fusing the two.
whatHappened: 2024 年 3 月 AI21 发布 Jamba，公开权重并展示混合架构在长序列推理与吞吐上的效率优势，验证了 SSM 与注意力结合的可行性。
whatHappenedEn: In March 2024 AI21 released Jamba with open weights, showing the hybrid architecture's efficiency edge in long-sequence reasoning and throughput, validating SSM-plus-attention.
whyImportant: Jamba 是高效架构探索的早期代表作，为后来混合架构与线性注意力模型的流行埋下伏笔。
whyImportantEn: Jamba is an early representative of efficient-architecture exploration, foreshadowing the later boom in hybrid and linear-attention models.
impact:
  developer: 验证了混合架构路线，为长上下文高效模型提供新思路。
  industry: 推动「Transformer 之外」的架构竞赛。
impactEn:
  developer: Validated the hybrid route, offering new ideas for efficient long-context models.
  industry: Pushed an architecture race "beyond Transformer."
beforeAfter:
  before: 长上下文模型几乎都靠扩大注意力窗口与算力。
  after: 混合架构开始用更低的推理成本支撑长上下文。
beforeAfterEn:
  before: Long-context models relied on bigger attention windows and compute.
  after: Hybrid architectures began supporting long context at lower inference cost.
relatedEvents:
  - minimax-launch
  - flashattention
  - transformer
  - deepseek-v3
sources:
  - title: AI21 Jamba
    url: "https://www.ai21.com/blog/announcing-jamba"
    publisher: AI21 Labs
    type: official
status: verified
slug: ai21-jamba
---
