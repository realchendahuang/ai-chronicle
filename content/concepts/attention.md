---
id: attention
title: 注意力机制（Attention）
fullName: Attention Mechanism
difficulty: intermediate
oneLiner: 让模型在处理当前词时，动态决定要重点参考序列里的哪些位置。
beginnerExplanation: 翻译或读长句时，人不会每次都从头到尾平均用力。注意力给每个相关位置打一个“有多重要”的权重，再按权重混合信息。后来的自注意力进一步让序列内部互相看见，成为 Transformer 的主干。
whyItMatters: 注意力把“对齐”和“读全局上下文”变成可学习的模块，直接推动神经机器翻译，并铺路到大语言模型。
relatedEvents:
  - bahdanau-attention
  - seq2seq
  - transformer
  - bert
  - gpt-1
relatedConcepts:
  - self-attention
  - transformer
  - llm
commonMisunderstandings:
  - 注意力不是人的“有意识关注”，而是一组可训练的权重计算。
  - 2017 年的 Transformer 不是注意力的发明，而是把它做成可并行的主干架构。
slug: attention
---
