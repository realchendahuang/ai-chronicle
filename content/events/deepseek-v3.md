---
id: deepseek-v3
title: DeepSeek-V3 发布
subtitle: 开放模型把成本效率推到行业前台
date: '2024-12-26'
datePrecision: day
importance: B
eventType:
  - model
topics:
  - large-language-models
  - open-source-models
  - model-efficiency
companies:
  - deepseek
models:
  - deepseek-v3
concepts:
  - llm
  - moe
  - model-distillation
  - open-weight
summary: DeepSeek 发布 DeepSeek-V3，以开放权重和显著的训练效率引发行业关注，并让前沿模型的成本结构成为公开讨论的焦点。
summaryEn: DeepSeek released the open-weight DeepSeek-V3, a mixture-of-experts model with 671 billion total parameters and 37 billion activated per token. Its technical report counted 2.788 million H800 GPU-hours for the final pretraining run, not the project's full research and development cost.
visual:
  src: /assets/events/deepseek-v3.png
  width: 2530
  height: 2035
  alt: DeepSeek-V3 基础架构图，分解展示多头潜在注意力与混合专家模块
  altEn: DeepSeek-V3 architecture diagram detailing Multi-Head Latent Attention and the mixture-of-experts module
  caption: DeepSeek-V3 技术报告中的基础架构图，展示 Transformer 块、Multi-Head Latent Attention 与 DeepSeekMoE 的关系。
  captionEn: The basic architecture figure from the DeepSeek-V3 technical report, showing the Transformer block, Multi-Head Latent Attention, and DeepSeekMoE.
  credit: DeepSeek-AI
  sourceUrl: https://arxiv.org/abs/2412.19437
  rights: official-editorial
whatHappened: DeepSeek-V3 采用 MoE 架构。技术报告披露，最终预训练阶段使用 278.8 万 H800 GPU 小时；按报告采用的 GPU 小时单价估算约为 557.6 万美元，但这并不等同于项目全部研发成本。
whyImportant: 技术报告把训练资源、MoE 设计和稳定训练细节放进公开讨论，使前沿模型的成本不再只能靠外部猜测。报告中的预训练费用不包含全部研发、数据和基础设施成本，不能直接当作完整项目价格。
whyImportantEn: The report brought training resources, MoE design, and stability details into public discussion, reducing reliance on outside guesses about frontier-model cost. Its pretraining estimate excluded the full cost of research, data, and infrastructure and should not be treated as the project’s total price.
impact:
  developer: 开发者获得了能力更强、部署边界更开放的模型选择。
  industry: 行业开始更认真地重新评估前沿模型的训练成本和工程效率。
beforeAfter:
  before: 前沿模型竞争常被理解为算力与资本规模的单向竞赛。
  after: 算法、系统工程与训练效率成为与算力规模同样重要的竞争变量。
relatedEvents:
  - llama
  - deepseek-r1
sources:
  - title: DeepSeek-V3 Technical Report
    url: https://arxiv.org/abs/2412.19437
    publisher: DeepSeek AI
    type: paper
status: verified
slug: deepseek-v3
---
