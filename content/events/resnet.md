---
id: resnet
title: ResNet 让超深网络可训练
titleEn: ResNet makes very deep networks trainable
subtitle: 残差连接为信息和梯度提供短路径
subtitleEn: Residual connections give information and gradients a shorter path
date: '2015-12-10'
datePrecision: day
importance: A
eventType: [paper]
topics: [computer-vision, deep-learning]
companies: [microsoft]
papers: [deep-residual-learning]
concepts: [deep-learning, cnn]
summary: 微软研究者提出残差网络，用跳跃连接训练 152 层模型，并赢得 2015 年 ImageNet 分类任务。
summaryEn: Microsoft researchers introduced residual networks, training a 152-layer model with skip connections and winning the 2015 ImageNet classification task.
background: 增加网络深度理论上能提高表达能力，实际训练却出现退化问题。更深的普通网络不仅难优化，训练误差也可能高于较浅版本。
backgroundEn: More depth should increase representational power, but plain deep networks suffered degradation. They were harder to optimize and could have higher training error than shallower versions.
whatHappened: 残差块不直接学习完整映射，而是学习相对输入的残差，并把输入通过恒等连接送到更深层。这给优化提供了更直接的路径。
whatHappenedEn: A residual block learned a change relative to its input rather than a complete mapping, while an identity connection carried the input forward. This created a more direct optimization path.
whyImportant: 残差连接成为视觉网络和后续多种深层架构的基础部件。它也提供了一个可迁移的工程思想，让深层系统保留稳定的信息通道。
whyImportantEn: Residual connections became a basic component of vision networks and many later deep architectures. They also established a transferable engineering idea by preserving stable information paths through deep systems.
impact:
  developer: 数百层网络可以稳定训练，视觉骨干网络迅速转向残差结构。
  industry: 更强的图像识别模型进入检测、分割和工业视觉系统。
impactEn:
  developer: Networks hundreds of layers deep became trainable, and vision backbones rapidly adopted residual structure.
  industry: Stronger image recognition moved into detection, segmentation, and industrial vision systems.
beforeAfter:
  before: 网络越深越难训练，深度本身会造成性能退化。
  after: 跳跃连接成为扩展深度的标准方法。
beforeAfterEn:
  before: Deeper networks were harder to optimize and could degrade in performance.
  after: Skip connections became the standard method for scaling depth.
relatedEvents: [alexnet, transformer]
sources:
  - title: Deep Residual Learning for Image Recognition
    url: https://arxiv.org/abs/1512.03385
    publisher: arXiv
    type: paper
status: verified
slug: resnet
---
