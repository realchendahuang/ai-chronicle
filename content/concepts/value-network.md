---
id: value-network
title: 价值网络（Value Network）
fullName: Value Network
difficulty: advanced
oneLiner: 用神经网络估计局面或状态的好坏（预期回报/胜率），辅助决策与搜索。
beginnerExplanation: 价值网络输入当前状态，输出标量或分布，表示“从这里出发有多好”。在 AlphaGo 中，它减少对漫长随机模拟的依赖，让树搜索更快收敛。价值与策略常联合训练或交替改进，形成更强的对弈系统。
whyItMatters: 可靠的价值估计把巨大博弈树压缩为可计算的评估，是现代博弈 AI 与部分规划算法的关键。
relatedEvents:
  - alphago
relatedConcepts:
  - policy-network
  - deep-reinforcement-learning
  - reinforcement-learning
  - monte-carlo-tree-search
commonMisunderstandings:
  - 价值高不等于某一步动作最优；还要结合策略与搜索选动作。
  - 价值网络的偏差会系统性误导搜索，需要与数据与训练目标匹配。
slug: value-network
---
