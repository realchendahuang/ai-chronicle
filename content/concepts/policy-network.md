---
id: policy-network
title: 策略网络（Policy Network）
fullName: Policy Network
difficulty: advanced
oneLiner: 用神经网络直接输出动作分布或动作选择，表示智能体在给定状态下“怎么走”。
beginnerExplanation: 在强化学习与博弈 AI 中，策略网络把局面映射为各合法动作的概率。AlphaGo 用策略网缩小搜索空间、先验引导 MCTS；后续系统也常把策略改进与自我对弈结合。训练目标可以是模仿人类、最大化期望回报或与搜索结果对齐。
whyItMatters: 策略网络把“决策”参数化成可学习函数，是深度强化学习与强博弈系统的核心模块。
relatedEvents:
  - alphago
relatedConcepts:
  - value-network
  - deep-reinforcement-learning
  - reinforcement-learning
  - monte-carlo-tree-search
commonMisunderstandings:
  - 策略网络给出的是偏好或概率，不等于已经搜索到全局最优着。
  - 有策略网仍常需要搜索或采样，尤其在高精度决策场景。
slug: policy-network
---
