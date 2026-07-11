---
id: gradient-descent
title: 梯度下降（Gradient Descent）
fullName: Gradient Descent
difficulty: beginner
oneLiner: 沿着损失函数对参数的梯度反方向小步更新，逐步降低误差的优化方法。
beginnerExplanation: 训练神经网络时，先算预测与目标的差距，再求参数如何微调能让损失变小。梯度下降及其随机/小批量变体是最常用的更新规则。反向传播负责高效计算这些梯度，优化器（如 SGD、Adam）在梯度下降思想上扩展。
whyItMatters: 几乎所有现代深度学习训练都建立在梯度下降类优化之上，它是“模型如何从数据中学会”的核心机制。
relatedEvents:
  - backpropagation
relatedConcepts:
  - backpropagation
  - neural-network
  - deep-learning
commonMisunderstandings:
  - 梯度下降不保证找到全局最优，尤其在非凸深度网络中。
  - 学习率过大可能发散，过小则收敛极慢；调参与优化器选择很关键。
slug: gradient-descent
---
