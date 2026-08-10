---
id: shrdlu
title: SHRDLU 与积木世界
titleEn: SHRDLU and the blocks world
subtitle: 一个能「理解」积木指令的早期自然语言系统
subtitleEn: An early natural-language system that appeared to understand block commands
date: '1969'
datePrecision: year
importance: B
eventType:
  - milestone
  - paper
topics:
  - natural-language-processing
  - symbolic-ai
  - ai-history
people:
  - terry-winograd
concepts:
  - nlp
  - symbolic-ai
summary: Terry Winograd 在 MIT 开发 SHRDLU，一个操作虚拟积木世界的自然语言程序。它能回答关于积木状态的问题、执行指令，并解释自己为什么拒绝某些操作。
summaryEn: At MIT, Terry Winograd built SHRDLU, a natural-language program that manipulated a virtual blocks world, answered questions about its state, executed commands, and explained why it refused certain actions.
background: 自然语言理解长期停留在关键词匹配层面，研究者开始怀疑需要更完整的推理与对世界的表示。
backgroundEn: Natural-language understanding had long stayed at keyword matching, and researchers began to argue that fuller reasoning and a representation of the world were needed.
whatHappened: SHRDLU 把句法分析、语义解释与一个具体的积木世界模拟结合起来。程序能理解「把红积木放到绿积木上面」这类指令，也能回答「有几个积木在桌子上」，还能解释自己的规划与拒绝理由。它运行在 PDP-6 上，交互通过终端完成。
whatHappenedEn: SHRDLU combined parsing, semantic interpretation, and a concrete simulation of a blocks world. It understood commands like "put the red block on the green block," answered questions such as "how many blocks are on the table," and explained its own plans and refusals, running on a PDP-6 via terminal.
whyImportant: SHRDLU 让整个领域相信，语言理解需要把语言与世界的模型连起来，而不是在文本表面做模式匹配。它同时确立了「限定领域 + 深推理」的示范价值，成为后来规划与对话系统反复引用的原型。
whyImportantEn: SHRDLU convinced the field that language understanding requires connecting language to a model of the world rather than pattern matching on text surfaces. It also established the demonstration value of "narrow domain plus deep reasoning" and became a frequently cited prototype for planning and dialogue systems.
impact:
  developer: 把句法、语义与世界模型结合的做法传给了后续 AI 研究。
  industry: 提醒后来者，任务域越受限，系统能展示的「智能」越完整。
impactEn:
  developer: Passed the combination of syntax, semantics, and world models to later research.
  industry: Reminded later builders that narrower domains allow more complete demonstrations of intelligence.
beforeAfter:
  before: 自然语言程序大多只会关键词匹配。
  after: 对话系统开始追求语言、规划与世界状态的一体化理解。
beforeAfterEn:
  before: Natural-language programs mostly did keyword matching.
  after: Dialogue systems began pursuing integrated understanding of language, planning, and world state.
relatedEvents:
  - eliza
  - expert-systems
  - chatgpt-launch
sources:
  - title: Procedures as a Representation for Data in a Computer Program for Understanding Natural Language
    url: "https://hdl.handle.net/1721.1/7095"
    publisher: MIT AI Lab
    type: paper
status: verified
slug: shrdlu
---
