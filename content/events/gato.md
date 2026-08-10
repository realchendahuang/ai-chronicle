---
id: gato
title: DeepMind 发布 Gato 通才智能体
titleEn: DeepMind announces Gato, a generalist agent
subtitle: 一个模型同时玩电子游戏、控制机械臂、写文字
subtitleEn: One model plays games, controls a robot arm, and writes text
date: '2022-05-12'
datePrecision: day
importance: B
eventType:
  - product
topics:
  - ai-agent
  - reinforcement-learning
  - multimodal-ai
  - embodied-ai
companies:
  - google-deepmind
concepts:
  - agent
  - multimodal
  - transformer
summary: DeepMind 发布 Gato，一个用单一 Transformer 权重同时完成 604 项任务的多模态智能体，从电子游戏、机械臂控制到对话与图像描述。它被视为「通才智能体」路线的标志性实验。
summaryEn: DeepMind released Gato, a multimodal agent using a single Transformer to handle 604 tasks spanning video games, robot-arm control, dialogue, and image captioning. It is seen as a landmark experiment on the generalist-agent path.
background: 强化学习与大规模模型各自发展多年，但把感知、语言与行动统一进一个模型的「通才智能体」仍是前沿难题。
backgroundEn: Reinforcement learning and large models had each matured, but unifying perception, language, and action in one "generalist agent" remained an open frontier problem.
whatHappened: Gato 以一个 Transformer 在文本、图像、动作等多模态数据上训练，单模型即可玩 Atari 游戏、控制真实机械臂、生成文本与图像描述。论文强调「一个模型，多任务」，并在机器人平台上演示了实体操作。
whatHappenedEn: Gato trained a single Transformer on multimodal data of text, images, and actions, enabling one model to play Atari games, control a real robot arm, and produce text and captions. The paper stressed "one model, many tasks" and demonstrated physical manipulation on a robotic platform.
whyImportant: Gato 把「一个模型干所有事」从口号推向可演示的系统，为后来 GPT-4o、SeedRealtime 等多模态全能力模型以及具身智能的融合路线提供了思想源头。
whyImportantEn: Gato pushed "one model does everything" from slogan to a demonstrable system, feeding later all-in-one multimodal models such as GPT-4o and SeedRealtime, and the fusion path of embodied AI.
impact:
  developer: 研究者开始认真对待多任务统一模型的可行性。
  industry: 智能体与多模态研究的路线进一步靠拢。
impactEn:
  developer: Researchers began taking the feasibility of unified multi-task models seriously.
  industry: Agent and multimodal research paths moved closer together.
beforeAfter:
  before: 视觉、语言、控制分属不同模型与社区。
  after: 通才智能体成为公开讨论的路线选项。
beforeAfterEn:
  before: Vision, language, and control lived in separate models and communities.
  after: Generalist agents became an openly discussed route.
relatedEvents:
  - alphago
  - transformer
  - seed-realtime
  - gpt-4o
visual:
  src: /assets/events/gato.webp
  width: 1672
  height: 941
  alt: 单智能体适应多任务的插画
  altEn: Illustration of one agent adapting to many tasks
  caption: Gato 用单个网络尝试 600 多个任务，是「通才智能体」概念的代表作。
  captionEn: Gato tried 600-plus tasks with a single network, a landmark of the generalist-agent idea.
  credit: AI Chronicle
  rights: generated
  prompt: Gato 用单个网络尝试 600 多个任务，是「通才智能体」概念的代表作。
sources:
  - title: Gato 论文
    url: "https://arxiv.org/abs/2205.06175"
    publisher: DeepMind
    type: paper
status: verified
slug: gato
---
