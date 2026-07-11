---
id: binary-classifier
title: 二元分类器（Binary Classifier）
fullName: Binary Classifier
difficulty: beginner
oneLiner: 把输入分到两个互斥类别之一的模型，例如是/否、垃圾/正常。
beginnerExplanation: 二元分类是监督学习最基础的任务形态：给定特征，输出正类或负类（或概率）。感知机就是早期的线性二元分类器；现代可用逻辑回归、SVM 或深度网络完成。许多复杂问题也会先被拆成一系列是非判断。
whyItMatters: 二元分类定义了可学习决策的最小完整问题，也是理解损失、阈值与评估指标的起点。
relatedEvents:
  - perceptron
relatedConcepts:
  - perceptron
  - supervised-learning
  - neural-network
commonMisunderstandings:
  - 准确率在类别极不均衡时可能误导；需结合精确率、召回率等。
  - 输出概率高不等于校准良好或决策代价已考虑周全。
slug: binary-classifier
---
