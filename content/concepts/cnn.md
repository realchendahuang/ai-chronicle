---
id: cnn
title: 卷积神经网络（CNN）
fullName: Convolutional Neural Network
difficulty: intermediate
oneLiner: 用局部卷积核在空间上共享参数、提取层次化特征的神经网络，曾主导视觉识别。
beginnerExplanation: 图像里相邻像素关系密切。卷积层用小窗口扫描整图，学习边缘、纹理等模式，再堆叠成更抽象的特征。AlexNet、ResNet 等把 CNN 推到 ImageNet 时代的中心。
whyItMatters: CNN 证明了深度网络在真实感知任务上可扩展，直接触发 2010 年代深度学习浪潮，并为后来的检测、分割与部分多模态编码器奠基。
relatedEvents:
  - alexnet
  - resnet
  - imagenet
  - deep-learning-rise
relatedConcepts:
  - deep-learning
  - neural-network
  - gpu
commonMisunderstandings:
  - 卷积共享参数不等于已经“理解语义”，仍依赖数据与目标函数。
  - 视觉 Transformer 兴起后 CNN 并未消失，仍广泛用于高效视觉骨干。
slug: cnn
---
