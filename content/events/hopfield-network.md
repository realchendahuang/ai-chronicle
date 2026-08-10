---
id: hopfield-network
title: Hopfield 网络
titleEn: The Hopfield network
subtitle: 用物理能量模型复兴神经网络研究
subtitleEn: Reviving neural network research through a physical energy model
date: '1982'
datePrecision: year
importance: A
eventType:
  - paper
  - research
topics:
  - neural-networks
  - representation-learning
  - ai-history
companies: []
concepts:
  - neural-network
  - reinforcement-learning
summary: 物理学家约翰·霍普菲尔德提出带反馈的循环神经网络，用能量函数刻画网络动力学，可存储和恢复模式。它复兴了陷入低谷的神经网络研究。
summaryEn: Physicist John Hopfield proposed a recurrent neural network whose dynamics are governed by an energy function, capable of storing and recalling patterns. It revived neural network research after years of decline.
background: 1970 年代神经网络研究因明斯基的批评陷入低谷。霍普菲尔德从统计物理出发，发现带对称权重的循环网络可以像自旋玻璃一样收敛到稳定态。
backgroundEn: Neural network research had languished after Minsky's critiques. Approaching from statistical physics, Hopfield found that recurrent networks with symmetric weights could converge to stable states like spin glasses.
whatHappened: 1982 年霍普菲尔德发表论文，提出 Hopfield 网络：N 个二值神经元全互连，权重对称，网络状态沿能量下降方向演化，最终落入吸引子。每个吸引子就是一个存储的模式，部分输入即可唤起完整记忆。论文还给出了存储容量的定量分析。
whatHappenedEn: 'In 1982 Hopfield published his network: N binary neurons fully interconnected with symmetric weights; the state evolves downhill in energy and settles into an attractor. Each attractor is a stored pattern, and partial input can recall the full memory. The paper also gave a quantitative storage-capacity analysis.'
whyImportant: Hopfield 网络把神经网络研究与统计物理连接起来，恢复了学界的兴趣，直接为玻尔兹曼机等后续模型铺路，是连接主义复兴的关键一环。
whyImportantEn: The Hopfield network linked neural nets to statistical physics, restored academic interest, and paved the way for Boltzmann machines—a key step in the connectionist revival.
impact:
  developer: 提供了联想记忆与能量优化的经典模型，影响 RNN 与后续理论。
  industry: 长期看，为深度学习时代的神经网络复兴提供了理论正当性。
impactEn:
  developer: Offered a classic model of associative memory and energy optimization, influencing RNNs and later theory.
  industry: Long term, provided theoretical legitimacy for the neural-network revival of the deep learning era.
beforeAfter:
  before: 神经网络因明斯基批评而边缘化。
  after: 神经网络重新成为严肃的学术方向。
beforeAfterEn:
  before: Neural networks were marginalized after Minsky's critiques.
  after: Neural networks became a serious research direction again.
relatedEvents:
  - backpropagation
  - deep-learning-rise
  - minsky-perceptrons-book
sources:
  - title: Neural networks and physical systems with emergent collective computational abilities
    url: "https://www.pnas.org/doi/10.1073/pnas.79.8.2554"
    publisher: PNAS
    type: paper
status: verified
slug: hopfield-network
---
