---
id: deep-reinforcement-learning
title: 深度强化学习（Deep RL）
fullName: Deep Reinforcement Learning
difficulty: advanced
oneLiner: 用深度神经网络近似策略或价值函数，在交互中学习如何行动。
beginnerExplanation: 经典强化学习在状态很大时难以用手写特征或表格方法扩展。深度强化学习把卷积网、全连接网等当作函数逼近器，从原始观测（如棋盘、像素）直接学策略与价值。AlphaGo、AlphaZero 等系统把深度网络与搜索、自我对弈结合起来，展示了这一路线的威力。
whyItMatters: Deep RL 让复杂感知与长期决策可以放在同一套可学习框架里，连接了游戏、控制与部分大模型后训练实践。
relatedEvents:
  - alphago
  - alphazero
relatedConcepts:
  - reinforcement-learning
  - deep-learning
  - policy-network
  - value-network
  - self-play
commonMisunderstandings:
  - 有深度网络不等于样本效率就高；很多 Deep RL 方法仍然数据饥渴、训练不稳。
  - 围棋成功不代表同一套方法可直接迁移到开放世界所有任务。
slug: deep-reinforcement-learning
---
