---
id: deepseek-r1
title: DeepSeek-R1 发布
subtitle: 开放推理模型引发全球重新定价
date: '2025-01-20'
datePrecision: day
importance: A
eventType:
  - model
topics:
  - large-language-models
  - open-source-models
  - model-efficiency
  - reasoning-models
  - china-ai
companies:
  - deepseek
models:
  - deepseek-r1
concepts:
  - llm
  - chain-of-thought
  - reinforcement-learning
  - distillation
  - open-weight
summary: DeepSeek 发布开放推理模型 DeepSeek-R1，以强化学习驱动的推理能力和开放权重迅速引发全球关注。
summaryEn: DeepSeek released the open-weight reasoning models DeepSeek-R1 and R1-Zero, along with six distilled variants. The paper attributed R1-Zero's emerging reasoning behavior to large-scale reinforcement learning, while the production R1 model added cold-start data and supervised stages.
visual:
  src: /assets/events/deepseek-r1.png
  width: 2105
  height: 1488
  alt: DeepSeek-R1 论文中 PPO 与 GRPO 强化学习流程的对比图
  altEn: Comparison of PPO and GRPO reinforcement-learning workflows from the DeepSeek-R1 paper
  caption: DeepSeek-R1 论文对 PPO 与 GRPO 的流程对比；GRPO 不使用价值模型，而是从同组输出的奖励估计优势。
  captionEn: The DeepSeek-R1 paper compares PPO with GRPO, which omits a value model and estimates advantages from rewards within a group of outputs.
  credit: DeepSeek-AI
  sourceUrl: https://arxiv.org/abs/2501.12948
  rights: official-editorial
whatHappened: DeepSeek-R1 在推理任务上展示了长链条思考能力，并同步开放模型权重与技术报告。项目还提供了多个蒸馏版本，让更小规模的模型能够继承部分推理能力。
whyImportant: R1 把“前沿推理能力能否开放、能否低成本复现”从假设变成现实问题。它推动行业重新评估闭源模型的价格、开放模型的能力边界，以及强化学习在推理训练中的作用。
impact:
  developer: 开发者可以本地部署、研究和蒸馏高水平推理模型。
  product: 推理模型的调用价格和产品集成门槛被明显拉低。
  industry: 全球市场重新评估前沿模型竞争所需的资本和算力门槛。
beforeAfter:
  before: 高水平推理能力主要由少数闭源模型提供。
  after: 开放权重推理模型成为真实可用的技术路线和产品选择。
relatedEvents:
  - deepseek-v3
  - llama
sources:
  - title: DeepSeek-R1 — Incentivizing Reasoning Capability in LLMs via Reinforcement Learning
    url: https://arxiv.org/abs/2501.12948
    publisher: DeepSeek AI
    type: paper
  - title: DeepSeek-R1 repository
    url: https://github.com/deepseek-ai/DeepSeek-R1
    publisher: DeepSeek AI
    type: official
status: verified
slug: deepseek-r1
---
