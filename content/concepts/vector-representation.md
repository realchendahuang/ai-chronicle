---
id: vector-representation
title: 向量表示（Vector Representation）
fullName: Vector Representation
difficulty: intermediate
oneLiner: 用连续数值向量刻画词、句、图等对象，使相似性与关系可计算。
beginnerExplanation: 离散符号难以直接做加减与距离比较；映射到向量空间后，相近语义往往落在相近位置。Word2Vec 等工作让分布式词向量流行，并为后续上下文相关的表示与嵌入检索打下基础。向量表示是连接符号世界与神经网络几何的桥梁。
whyItMatters: 几乎所有现代深度学习感知与检索系统都依赖把对象嵌入向量空间这一思想。
relatedEvents:
  - word2vec
relatedConcepts:
  - word-embedding
  - neural-network
  - nlp
  - rag
commonMisunderstandings:
  - 向量接近不等于事实正确或无偏见，只反映训练数据中的统计共现。
  - 静态词向量与随上下文变化的表示不同；后者在 Transformer 中更常见。
slug: vector-representation
---
