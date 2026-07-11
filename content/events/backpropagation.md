---
id: backpropagation
title: 反向传播算法
subtitle: 训练多层神经网络的数学基础
date: '1986'
datePrecision: year
importance: A
eventType:
  - paper
  - algorithm
topics:
  - neural-networks
  - ai-foundations
concepts:
  - backpropagation
  - gradient-descent
  - neural-network
people:
  - geoffrey-hinton
  - david-rumelhart
  - ronald-williams
summary: Rumelhart、Hinton 与 Williams 展示如何用误差反向传播训练多层网络，使隐藏层能够从样本中形成内部表示。
summaryEn: David Rumelhart, Geoffrey Hinton, and Ronald Williams showed how error backpropagation could train multilayer networks and let hidden layers form internal representations from examples.
background: 链式法则和反向求导思想此前已有多次独立发现，难点在于如何把它变成训练多层连接主义模型的清晰方法，并用实验说明隐藏单元学到了什么。
backgroundEn: The chain rule and reverse differentiation had been discovered independently before. The challenge was to present them as a clear training method for multilayer connectionist models and show what hidden units learned.
whatHappened: 前向计算得到输出和误差，误差信号再按链式法则逐层传回，每个权重沿降低误差的方向更新。论文用对称性、亲属关系等任务展示隐藏表示。
whatHappenedEn: A forward pass produced outputs and errors, then the chain rule propagated error signals backward so each weight could move in a loss-reducing direction. Experiments showed hidden representations for symmetry and family relationships.
whyImportant: 多层网络终于有了通用、可复用的训练办法。现代自动微分框架仍执行同一基本过程，不过实际能力还依赖激活函数、初始化、数据、算力和优化方法。
whyImportantEn: Multilayer networks gained a general reusable training method. Modern automatic-differentiation frameworks still perform the same basic process, though practical capability also depends on activations, initialization, data, compute, and optimization.
beforeAfter:
  before: 感知机只能解决线性可分问题，多层网络缺乏有效的训练方法。
  after: 反向传播让训练深层网络成为可能，开启了连接主义时代。
relatedEvents:
  - perceptron
  - alexnet
  - deep-learning-rise
visual:
  src: /assets/events/backpropagation.webp
  width: 1280
  height: 720
  alt: 杰弗里·辛顿在英属哥伦比亚大学的肖像
  altEn: Portrait of Geoffrey Hinton at the University of British Columbia
  caption: 杰弗里·辛顿。1986 年前后，反向传播使多层网络的误差信号得以沿链式法则回传。
  captionEn: Geoffrey Hinton. Around 1986, backpropagation made it practical to send error signals back through multilayer nets by the chain rule.
  credit: InverseHypercube, CC BY-SA 3.0, via Wikimedia Commons
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Geoffrey_Hinton_at_UBC.jpg"
  rights: cc
sources:
  - title: Learning representations by back-propagating errors
    url: "https://www.nature.com/articles/323533a0"
    publisher: Nature
    type: paper
status: verified
slug: backpropagation
---
