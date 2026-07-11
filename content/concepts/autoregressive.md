---
id: autoregressive
title: 自回归（Autoregressive）
fullName: Autoregressive Modeling
difficulty: intermediate
oneLiner: 按顺序一个 token 接一个 token 生成，每一步都以前面已生成内容为条件。
beginnerExplanation: 自回归模型把“写下一句”拆成一连串小决策：给定前文，预测下一个最可能的词或子词，再把结果接回去继续预测。GPT 系列就是典型的从左到右自回归语言模型。训练时通常用“用前文预测后文”的目标在海量文本上学习。
whyItMatters: 自回归把开放式文本生成变成可训练的概率问题，是当代大语言模型最主流的生成范式。
relatedEvents:
  - gpt-1
  - gpt-2
  - gpt-3
relatedConcepts:
  - llm
  - transformer
  - token
  - generative-model
commonMisunderstandings:
  - 自回归不是唯一生成方式；扩散、掩码填空等也是生成范式。
  - “按顺序生成”不等于必须严格从左到右解码策略，但模型本身通常按因果方向建模。
slug: autoregressive
---
