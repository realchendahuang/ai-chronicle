---
id: dropout
title: Dropout
fullName: Dropout Regularization
difficulty: intermediate
oneLiner: 训练时随机“关掉”一部分神经元，减轻过拟合的正则化技巧。
beginnerExplanation: 每次前向时按概率将部分激活置零，迫使网络不依赖少数共适应的单元，从而学到更鲁棒的特征。推理时通常关闭 dropout 或按比例缩放。AlexNet 等深度卷积网络的成功实践中，dropout 是重要的工程组件之一。
whyItMatters: 在深度网络容易记住训练集的年代，dropout 以简单有效的方式提升了泛化，成为标准工具箱的一部分。
relatedEvents:
  - alexnet
relatedConcepts:
  - neural-network
  - deep-learning
  - relu
commonMisunderstandings:
  - dropout 主要作用于训练阶段；部署推理时一般不再随机丢弃。
  - 它不能替代充足数据与合理架构，只是正则化手段之一。
slug: dropout
---
