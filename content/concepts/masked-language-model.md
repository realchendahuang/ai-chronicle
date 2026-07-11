---
id: masked-language-model
title: 掩码语言模型（MLM）
fullName: Masked Language Model
difficulty: intermediate
oneLiner: 随机遮住输入中的部分 token，让模型根据双向上下文把被遮部分预测回来。
beginnerExplanation: 与从左到右预测下一个词不同，MLM 在句子内部挖空再填空，从而同时利用左右上下文。BERT 以掩码语言建模为核心预训练任务，显著提升了理解类 NLP 任务的迁移效果。它更偏向表示学习，而不是直接做开放式长文本生成。
whyItMatters: MLM 证明了双向上下文预训练对语言理解的价值，塑造了编码器型预训练的主流范式。
relatedEvents:
  - bert
relatedConcepts:
  - bidirectional
  - transformer
  - pretraining
  - llm
commonMisunderstandings:
  - MLM 预训练的模型不天然等于最好的对话生成模型；生成更常走因果自回归。
  - “掩码”是训练目标设计，不等于推理时必须对用户输入挖空。
slug: masked-language-model
---
