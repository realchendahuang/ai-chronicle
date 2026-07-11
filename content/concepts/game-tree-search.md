---
id: game-tree-search
title: 博弈树搜索（Game Tree Search）
fullName: Game Tree Search
difficulty: intermediate
oneLiner: 在棋类等离散决策问题中，通过展开可能走法树来寻找优着的搜索方法。
beginnerExplanation: 每一步可选动作会分叉成子局面，形成一棵（或一张）博弈树。经典方法包括极大极小、Alpha-Beta 剪枝等，用规则或评估函数判断局面好坏。深蓝等系统主要依赖高性能搜索与领域知识；后来的方法则把神经网络评估与蒙特卡洛树搜索等结合。
whyItMatters: 博弈树搜索是早期 AI 展示“机器能下棋”的核心技术路线，也深刻影响了后来的规划与决策系统。
relatedEvents:
  - deep-blue
  - logic-theorist
relatedConcepts:
  - monte-carlo-tree-search
  - symbolic-ai
  - artificial-intelligence
commonMisunderstandings:
  - 搜索越深不总是越好；评估函数与剪枝策略同样关键。
  - 逻辑定理证明与国际象棋搜索问题不同，但都体现“在状态空间中系统化探索”的思想。
slug: game-tree-search
---
