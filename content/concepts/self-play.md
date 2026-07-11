---
id: self-play
title: 自我对弈（Self-Play）
fullName: Self-Play
difficulty: advanced
oneLiner: 智能体通过与自己（或自身历史版本）对战/交互来生成训练数据并改进策略。
beginnerExplanation: 不必只模仿人类棋谱：系统可以自己当对手，不断产生新局面与结果，再用结果更新策略与价值。AlphaZero、OpenAI Five 等展示了自我对弈在规则明确环境中的强大扩展性。关键在于对手强度、探索与稳定性，避免策略坍塌或循环剥削。
whyItMatters: 自我对弈把数据生成与能力提升闭环起来，是超人类博弈 AI 的重要引擎。
relatedEvents:
  - openai-five
  - alphazero
relatedConcepts:
  - reinforcement-learning
  - deep-reinforcement-learning
  - policy-network
  - value-network
commonMisunderstandings:
  - 自我对弈高度依赖环境可模拟与规则清晰；开放世界任务更难直接套用。
  - “自己打自己”仍需要良好的训练算法与算力，不是无成本魔法。
slug: self-play
---
