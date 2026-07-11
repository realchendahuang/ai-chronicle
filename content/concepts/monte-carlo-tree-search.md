---
id: monte-carlo-tree-search
title: 蒙特卡洛树搜索（MCTS）
fullName: Monte Carlo Tree Search
difficulty: advanced
oneLiner: 用随机模拟与树结构统计，在巨大决策空间里启发式地搜索好着法。
beginnerExplanation: 完整枚举棋类等博弈树通常不现实。MCTS 通过选择、扩展、模拟、回传四步，把计算预算集中在更有希望的分支上，用胜率等统计量指导探索与利用。AlphaGo 等系统把策略/价值网络与 MCTS 结合，显著提升了搜索质量。
whyItMatters: MCTS 提供了一种可扩展的在线规划方式，是现代强博弈 AI 的关键组件之一。
relatedEvents:
  - alphago
  - alphazero
relatedConcepts:
  - game-tree-search
  - policy-network
  - value-network
  - deep-reinforcement-learning
commonMisunderstandings:
  - MCTS 不是“纯随机乱试”，模拟结果会被系统性地统计与剪枝式聚焦。
  - 没有好的先验（如策略网络）时，MCTS 在极深、极宽问题上仍可能很慢。
slug: monte-carlo-tree-search
---
