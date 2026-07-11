---
id: relu
title: ReLU
fullName: Rectified Linear Unit
difficulty: beginner
oneLiner: 输出为 max(0, x) 的激活函数，负值截断为零、正值线性通过。
beginnerExplanation: 早期深度网络常用 sigmoid/tanh，深层时容易梯度变小。ReLU 计算简单，且在正区间梯度恒为 1，有助于更深网络的训练。AlexNet 等成功案例广泛采用 ReLU 及其变体，使其成为深度学习默认激活之一。
whyItMatters: ReLU 降低了训练深层网络的难度与计算成本，是深度学习工程实践的基础积木。
relatedEvents:
  - alexnet
relatedConcepts:
  - neural-network
  - deep-learning
  - dropout
commonMisunderstandings:
  - ReLU 不是唯一选择；GELU、SiLU 等在 Transformer 中也很常见。
  - “死 ReLU”（长期输出恒为 0）可能发生，需用初始化、学习率或变体缓解。
slug: relu
---
