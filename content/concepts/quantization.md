---
id: quantization
title: 量化（Quantization）
fullName: Model Quantization
difficulty: engineering
oneLiner: 用更低位数表示权重或激活，以减小模型体积、加快推理并节省显存。
beginnerExplanation: 训练常用 16/32 位浮点存参数；量化把许多数值映射到 8 位、4 位甚至更低的离散档位。配合校准或量化感知训练，可以在可接受的精度损失下让大模型跑进消费级 GPU 或边缘设备。
whyItMatters: 开放权重生态与本地部署高度依赖量化；没有它，许多“能下载的模型”无法在真实硬件上交互式运行。
relatedEvents:
  - llama
  - llama-2
  - deepseek-v3
relatedConcepts:
  - llm
  - open-weight
  - gpu
commonMisunderstandings:
  - 量化不是压缩训练数据，主要改的是数值表示精度。
  - 位数越低不一定越好，任务与校准方法决定质量悬崖在哪里。
slug: quantization
---
