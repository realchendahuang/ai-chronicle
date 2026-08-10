---
id: svm
title: 支持向量机
titleEn: Support vector machines
subtitle: 统计学习理论在分类问题上的一次收敛
subtitleEn: Statistical learning theory converges on classification
date: '1995'
datePrecision: year
importance: B
eventType:
  - milestone
  - paper
topics:
  - ai-foundations
  - representation-learning
  - ai-history
people:
  - vladimir-vapnik
concepts:
  - supervised-learning
summary: Corinna Cortes 与 Vladimir Vapnik 发表《Support-Vector Networks》，系统提出支持向量机。它以最大间隔超平面和核技巧为核心，在 1990 年代到 2000 年代初成为文本、图像分类的主流方法之一。
summaryEn: Corinna Cortes and Vladimir Vapnik published "Support-Vector Networks," systematically presenting the support vector machine. Built on maximum-margin hyperplanes and the kernel trick, it became one of the dominant methods for text and image classification from the 1990s through the early 2000s.
background: 1990 年代中期，神经网络训练不稳定且缺少理论保证，统计学习理论正在寻找泛化误差的可控边界。
backgroundEn: In the mid-1990s neural networks trained unreliably and lacked theoretical guarantees; statistical learning theory was seeking controllable bounds on generalization error.
whatHappened: SVM 在特征空间中找一个使间隔最大的分类超平面，间隔由距离最近的样本（支持向量）决定；核函数把数据隐式映射到高维空间，从而处理线性不可分的模式。方法对高维稀疏数据尤其有效，在 OCR、文本分类和生物信息学任务上表现突出。
whatHappenedEn: An SVM finds the separating hyperplane with maximum margin, determined by the nearest examples (support vectors); kernels implicitly map data into high-dimensional spaces to handle non-linearly separable patterns. The method excelled on high-dimensional sparse data and performed strongly on OCR, text classification, and bioinformatics.
whyImportant: SVM 把泛化理论、凸优化与实用效果连接起来，成为连接主义与统计学习之间的桥梁。当深度学习在 2012 年重新流行时，SVM 已在多个领域证明「学习理论」能转化为可部署系统。
whyImportantEn: SVM connected generalization theory, convex optimization, and practical results, bridging connectionism and statistical learning. By the time deep learning resurged in 2012, SVM had already proven that learning theory could yield deployable systems.
impact:
  developer: 核方法成为机器学习教科书的标准章节，影响大量算法设计。
  industry: 文本分类与生物信息学中的长期主力算法之一。
impactEn:
  developer: Kernel methods became a standard ML textbook chapter and shaped many algorithm designs.
  industry: A long-time workhorse in text classification and bioinformatics.
beforeAfter:
  before: 分类主要依赖感知机、最近邻与启发式特征工程。
  after: 带理论依据的最大间隔学习进入主流，核方法流行。
beforeAfterEn:
  before: Classification relied on perceptrons, nearest neighbors, and heuristic features.
  after: Margin-based learning with theoretical grounding entered the mainstream and kernel methods spread.
relatedEvents:
  - perceptron
  - alexnet
  - deep-learning-rise
sources:
  - title: Support-Vector Networks
    url: "https://link.springer.com/article/10.1007/BF00994018"
    publisher: Machine Learning
    type: paper
status: verified
slug: svm
---
