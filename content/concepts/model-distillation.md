---
id: model-distillation
title: 模型蒸馏（Model Distillation）
fullName: Model Distillation
difficulty: advanced
oneLiner: 用大模型（教师）的输出或行为训练更小/更便宜的学生模型，以迁移能力并降低部署成本。
beginnerExplanation: 蒸馏不只模仿最终答案，也可学习概率分布、中间表示或解题轨迹。这样学生模型往往比在同一任务上从零训练更强，或在相近能力下更省算力。开源与工业界常用蒸馏把闭源或超大模型的能力部分转移到可部署模型上。
whyItMatters: 蒸馏是能力扩散与成本压缩的关键技术，影响开源模型生态、边缘部署与后训练管线。
relatedEvents:
  - deepseek-v3
  - llama
relatedConcepts:
  - distillation
  - llm
  - open-weight
  - fine-tuning
commonMisunderstandings:
  - 蒸馏不是简单复制权重文件；通常需要数据、损失设计与再训练。
  - 学生模型很少完整继承教师的全部能力与安全边界。
slug: model-distillation
---
