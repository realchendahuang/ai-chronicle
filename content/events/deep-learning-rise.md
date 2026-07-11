---
id: deep-learning-rise
title: 深度置信网络重启深层学习
titleEn: Deep belief networks revive deep learning
subtitle: 逐层预训练让更深的神经网络重新可训练
subtitleEn: Layer-wise pretraining makes deeper neural networks practical again
date: '2006-07'
datePrecision: month
importance: A
eventType: [paper]
topics: [deep-learning, neural-networks, representation-learning]
people: [geoffrey-hinton, simon-osindero, yee-whye-teh]
concepts: [deep-learning, neural-network, pretraining]
summary: Hinton、Osindero 与 Teh 提出深度置信网络的快速逐层训练方法，让“深度学习”重新成为可实验的研究路线。
summaryEn: Geoffrey Hinton, Simon Osindero, and Yee-Whye Teh introduced a fast layer-wise method for training deep belief networks, making deep learning experimentally viable again.
background: 反向传播可以训练多层网络，但深层模型容易受梯度、初始化、数据和算力限制，1990 年代后在许多任务上让位于核方法等路线。
backgroundEn: Backpropagation could train multilayer networks, but deeper models were constrained by gradients, initialization, data, and compute, and often lost ground to kernel methods in the 1990s.
whatHappened: 论文先用无监督方式逐层训练受限玻尔兹曼机，再对整个网络进行有监督微调。这个流程为深层网络提供了更好的初始表示。
whatHappenedEn: The paper first trained restricted Boltzmann machines layer by layer without supervision, then fine-tuned the full network with labels. The process supplied better initial representations for deep networks.
whyImportant: 这不是今天深度网络的最终训练方法，但它恢复了对深层表示学习的信心，并连接到随后由大数据、GPU、ReLU 和更好优化方法推动的突破。
whyImportantEn: This was not the final recipe used by modern deep networks, but it restored confidence in deep representation learning and connected directly to later gains from large datasets, GPUs, ReLU, and better optimization.
impact:
  developer: 深层神经网络重新成为可以稳定复现和继续改进的实验对象。
  industry: “深度学习”从边缘术语逐步变成计算机视觉、语音和语言技术的共同路线。
impactEn:
  developer: Deep neural networks again became experiments that researchers could reproduce and improve.
  industry: Deep learning moved from a marginal term toward a common approach across vision, speech, and language.
beforeAfter:
  before: 深层网络被认为训练困难，研究注意力集中在较浅模型和手工特征。
  after: 表示可以由多层模型从数据中逐级学习，深度网络研究重新加速。
beforeAfterEn:
  before: Deep networks were considered hard to train, and research emphasized shallow models and hand-engineered features.
  after: Layered models could learn representations from data, accelerating deep-network research again.
relatedEvents: [backpropagation, cuda, alexnet]
visual:
  src: /assets/events/deep-learning-rise.webp
  width: 1800
  height: 1012
  alt: 2006 年深度置信网络论文中的分层网络和信念网络示意图
  altEn: Layered network and belief-net diagrams from the 2006 deep belief network paper
  caption: 论文以逐层训练的生成模型处理手写数字，并用“解释消除”示例说明隐藏变量之间的依赖。
  captionEn: The paper trains a generative model layer by layer on handwritten digits and uses an explaining-away example to illustrate dependencies among hidden variables.
  credit: Geoffrey E. Hinton, Simon Osindero, Yee-Whye Teh
  sourceUrl: "https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf"
  rights: official-editorial
sources:
  - title: A Fast Learning Algorithm for Deep Belief Nets
    url: "https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf"
    publisher: Neural Computation
    type: paper
status: verified
slug: deep-learning-rise
---
