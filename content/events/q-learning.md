---
id: q-learning
title: Watkins 提出 Q-learning
titleEn: Watkins proposes Q-learning
subtitle: 无需环境模型的强化学习算法，奠定现代 RL 基石
subtitleEn: A model-free RL algorithm that underpins modern reinforcement learning
date: '1989-05-01'
datePrecision: year
importance: A
eventType:
  - research
  - milestone
topics:
  - reinforcement-learning
  - ai-history
  - deep-reinforcement-learning
concepts:
  - reinforcement-learning
  - deep-reinforcement-learning
summary: 博士生 Watkins 提出 Q-learning，一种无需环境模型的时序差分算法，用一张 Q 表评估「状态-动作」的价值。它成为现代强化学习的核心算法之一，也是 AlphaGo、DQN 等系统的理论源头。
summaryEn: Doctoral student Watkins proposed Q-learning, a model-free temporal-difference algorithm that evaluates state-action values in a Q-table. It became one of the core algorithms of modern RL and a theoretical root of systems like DQN and AlphaGo.
background: 1980 年代的强化学习研究分散在心理学与最优控制中，算法大多需要已知的环境模型或价值迭代。Watkins 希望找到一种既不需要模型、又能在未知环境中逐步逼近最优策略的简单算法。
backgroundEn: In the 1980s RL research was scattered across psychology and optimal control, and most algorithms needed a known environment model or value iteration. Watkins wanted a simple algorithm needing no model that could still converge on optimal policy in unknown environments.
whatHappened: Watkins 在博士论文与随后发表的论文中形式化定义了 Q-learning：维护 Q(s,a) 表，用「当前奖励 + 折扣后的下一状态最优值」逐步更新，最终在温和条件下收敛到最优策略。它用「离线、时序差分」的方式，把学习与环境交互解耦。
whatHappenedEn: "In his thesis and subsequent papers Watkins formalized Q-learning: maintain a Q(s,a) table, update it with \"immediate reward plus discounted best next-state value\", and converge to the optimal policy under mild conditions. Its off-policy temporal-difference framing decoupled learning from interacting with the environment."
whyImportant: Q-learning 给出了「无模型强化学习」的简洁范式，被 DQN 直接继承用于深度强化学习。它与策略梯度一起构成今天智能体训练的两大支柱，影响遍及游戏、机器人、推荐与对话系统。
whyImportantEn: Q-learning gave a clean model-free RL paradigm, directly inherited by DQN for deep RL. Alongside policy gradients it forms one of two pillars of today's agent training, shaping games, robotics, recommender, and dialogue systems.
impact:
  developer: DQN 等深度 RL 算法直接建立在 Q-learning 之上。
  industry: 广告、推荐、游戏与机器人普遍采用其思想。
impactEn:
  developer: Deep-RL algorithms like DQN are built directly on Q-learning.
  industry: Ads, recommendations, games, and robotics widely adopt its ideas.
beforeAfter:
  before: 强化学习多为有模型的动态规划或手写规则。
  after: 无模型、自举式的学习成为主流。
beforeAfterEn:
  before: RL was mostly model-based dynamic programming or hand-written rules.
  after: Model-free, bootstrapping learning became mainstream.
relatedEvents:
  - atari-dqn
  - td-gammon
  - alphago
  - alphazero
visual:
  src: /assets/events/q-learning.webp
  width: 1672
  height: 941
  alt: 发光之手填写价值表格的插画
  altEn: Illustration of a glowing hand filling a table of values
  caption: Watkins 的 Q-learning 用一张 Q 表为现代强化学习奠定了无模型地基。
  captionEn: Watkins' Q-learning laid the model-free foundation of modern RL with a simple Q-table.
  credit: AI Chronicle
  rights: generated
  prompt: Watkins 的 Q-learning 用一张 Q 表为现代强化学习奠定了无模型地基。
sources:
  - title: Learning from Delayed Rewards (Watkins thesis)
    url: "https://www.cs.rhul.ac.uk/~chrisw/new_thesis.pdf"
    publisher: University of Cambridge
    type: paper
status: verified
slug: q-learning
---
