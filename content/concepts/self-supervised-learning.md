---
id: self-supervised-learning
title: 自监督学习
fullName: Self-Supervised Learning
difficulty: advanced
oneLiner: 不依赖人工标注，从数据本身构造监督信号来训练模型。
beginnerExplanation: 让模型自己给自己出题：比如盖住句子里的一个词让它猜，盖住图片的一部分让它补。题和答案都来自数据本身，不需要人标注。
whyItMatters: 它是预训练大模型的核心机制，让模型能在海量无标注数据上学习，是 BERT、GPT 等一切现代大模型的基础。
relatedEvents:
  - bert
  - gpt-1
  - gpt-2
  - word2vec
relatedConcepts:
  - pretraining
  - masked-language-model
  - vector-representation
commonMisunderstandings:
  - 自监督不需要任何标签
  - 自监督只用于语言模型
  - 自监督学习等于无监督学习
slug: self-supervised-learning
---
