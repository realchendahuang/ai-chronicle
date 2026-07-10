---
id: perceptron
title: Rosenblatt 提出感知机
titleEn: Rosenblatt introduces the perceptron
subtitle: 线性分类器可以从样本中自动更新权重
subtitleEn: A linear classifier learns its weights from examples
date: '1957'
datePrecision: year
importance: A
eventType:
  - paper
  - algorithm
topics:
  - neural-networks
  - ai-foundations
companies: []
models:
  - perceptron
concepts:
  - neural-network
  - supervised-learning
  - binary-classifier
people:
  - frank-rosenblatt
summary: Frank Rosenblatt 提出感知机学习规则，并在 Cornell Aeronautical Laboratory 制作 Mark I 硬件，用样本训练二元图像分类。
summaryEn: Frank Rosenblatt introduced the perceptron learning rule and built the Mark I hardware at Cornell Aeronautical Laboratory to learn binary image classifications from examples.
background: 达特茅斯会议之后，研究者开始探索如何让机器从经验中学习。罗森布拉特受到生物神经元的启发，设计了一个简单的数学模型。
whatHappened: 输入经过可调权重求和，再由阈值函数给出类别。预测错误时，学习规则按样本方向修改权重；对线性可分数据，这个过程可以证明收敛。它无法表示 XOR 等非线性边界。
whatHappenedEn: Inputs were multiplied by adjustable weights and passed through a threshold. On an error, the learning rule updated weights toward the example; convergence could be proved for linearly separable data. It could not represent nonlinear boundaries such as XOR.
whyImportant: 感知机把“学习”落实为根据误差更新参数的算法，并提供了可运行硬件。它的严格边界同样重要，后来多层网络与反向传播正是为跨过这些边界发展起来。
whyImportantEn: The perceptron made learning an algorithm that updated parameters from error and implemented it in working hardware. Its strict limits mattered too; multilayer networks and backpropagation later developed to move beyond them.
impact:
  developer: 监督样本可以直接驱动参数更新，而不必手写全部分类规则。
  industry: 神经网络获得第一轮集中研究和公共资金支持。
impactEn:
  developer: Supervised examples could update parameters directly instead of requiring every classification rule to be written.
  industry: Neural networks received their first concentrated wave of research and public funding.
beforeAfter:
  before: AI 主要依赖手工编码的规则和符号推理。
  after: 机器开始具备从数据中"学习"的能力。
relatedEvents:
  - dartmouth-workshop
  - minsky-perceptrons-book
  - backpropagation
  - alexnet
sources:
  - title: The Perceptron — A Probabilistic Model for Information Storage and Organization in the Brain
    url: https://psycnet.apa.org/record/1959-09865-001
    publisher: Psychological Review
    type: paper
status: verified
slug: perceptron
---
