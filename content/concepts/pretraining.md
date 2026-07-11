---
id: pretraining
title: 预训练（Pretraining）
fullName: Pretraining
difficulty: beginner
oneLiner: 先在大规模通用数据上训练模型，学出可迁移的表示或语言能力，再用于下游任务。
beginnerExplanation: 与其为每个任务从零学起，不如先让模型在海量文本或图像上学会基本模式。GPT 的“预测下一个词”、BERT 的“填空”，都是预训练目标。预训练贵、费算力，却是后来微调与对齐的地基。
whyItMatters: 现代大模型的能力上限，很大程度取决于预训练的数据、目标与算力配置；Chinchilla 等工作还提醒人们：参数量与数据量要匹配。
relatedEvents:
  - gpt-1
  - bert
  - gpt-3
  - chinchilla
  - llama
relatedConcepts:
  - llm
  - fine-tuning
  - scaling-law
  - token
commonMisunderstandings:
  - 预训练完成不等于模型已经“对齐”或适合直接对用户说话。
  - 更大模型并不自动更优，数据不足时放大参数可能浪费算力。
slug: pretraining
---
