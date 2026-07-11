---
id: alphago
title: AlphaGo 击败李世石
subtitle: 策略网络、价值网络与树搜索赢下五局制比赛
subtitleEn: Policy networks, value networks, and tree search win a five-game match
date: '2016-03-15'
datePrecision: day
importance: A
eventType:
  - milestone
topics:
  - deep-learning
  - reinforcement-learning
  - game-ai
companies:
  - google-deepmind
models:
  - alphago
people:
  - demis-hassabis
  - lee-sedol
concepts:
  - deep-reinforcement-learning
  - monte-carlo-tree-search
  - policy-network
  - value-network
summary: AlphaGo 在首尔五局赛中以 4 比 1 战胜李世石。系统把人类棋谱学习、自我对弈和蒙特卡洛树搜索组合在一起。
summaryEn: AlphaGo defeated Lee Sedol 4–1 in a five-game match in Seoul by combining learning from human games, self-play, and Monte Carlo tree search.
visual:
  src: /assets/events/alphago.webp
  width: 568
  height: 625
  alt: 李世石执白对 AlphaGo 执黑的第四局完整棋谱
  altEn: Complete game record of game four, Lee Sedol as White against AlphaGo as Black
  caption: 2016 年人机大战第四局棋谱。李世石在第 78 手下出著名的“神之一手”，赢得 AlphaGo 在五局赛中的唯一一败。
  captionEn: Game four of the 2016 match. Lee Sedol’s celebrated move 78 helped deliver AlphaGo’s only loss in the five-game series.
  credit: Wesalius, CC BY-SA 4.0, via Wikimedia Commons
  sourceUrl: https://commons.wikimedia.org/wiki/File:Lee_Sedol_(B)_vs_AlphaGo_(W)_-_Game_4.jpg
  rights: cc
whatHappened: 策略网络缩小候选落子范围，价值网络估计局面胜率，搜索在两者引导下分配计算。第二局第 37 手因与职业棋手经验相悖而出名；第四局李世石第 78 手则暴露了系统也会在罕见局面中失误。
whatHappenedEn: A policy network narrowed candidate moves, a value network estimated winning chances, and search allocated computation using both. Move 37 in game two became famous for defying professional intuition, while Lee’s move 78 in game four exposed failures in unusual positions.
whyImportant: 围棋无法靠穷举解决，胜利来自学习与搜索的分工。这个架构影响了后来的 AlphaZero，也让自我生成训练数据成为处理复杂决策任务的重要方法。
whyImportantEn: Go cannot be solved by brute force. The victory came from dividing work between learning and search. The architecture led to AlphaZero and made self-generated training experience an important method for complex decisions.
impact:
  industry: 全球 AI 投资热潮加速，DeepMind 成为 AI 标杆。
  developer: 深度强化学习成为热门研究方向。
beforeAfter:
  before: 围棋被认为是 AI 短期内无法攻破的最后堡垒之一。
  after: AI 在围棋领域全面超越人类，深度强化学习进入主流视野。
relatedEvents:
  - deep-blue
  - alphazero
  - alphafold
  - openai-five
sources:
  - title: Mastering the game of Go with deep neural networks and tree search
    url: https://www.nature.com/articles/nature16961
    publisher: Nature
    type: paper
  - title: AlphaGo
    url: https://deepmind.google/research/alphago/
    publisher: Google DeepMind
    type: official
  - title: "AlphaGo’s ultimate challenge: a five-game match against the legendary Lee Sedol"
    url: https://blog.google/innovation-and-ai/products/alphagos-ultimate-challenge/
    publisher: Google
    type: official
status: verified
slug: alphago
---
