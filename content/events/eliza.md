---
id: eliza
title: ELIZA 展示对话程序的投射效应
titleEn: ELIZA reveals the projection effect of chatbots
subtitle: 简单模式匹配也能让人误读机器的理解能力
subtitleEn: Simple pattern matching can still be mistaken for understanding
date: '1966-01'
datePrecision: month
importance: B
eventType: [paper, product]
topics: [natural-language-processing, ai-history]
people: [joseph-weizenbaum]
concepts: [nlp]
summary: Joseph Weizenbaum 发表 ELIZA 论文：程序按优先级寻找关键词，再用分解与重组规则改写用户输入。著名的 DOCTOR 脚本模仿罗杰斯式访谈，但系统并不建立对谈话内容的语义模型。
summaryEn: Joseph Weizenbaum published ELIZA, which selected prioritized keywords and transformed input with decomposition and reassembly rules. Its famous DOCTOR script imitated Rogerian interviewing without constructing a semantic model of the conversation.
background: 自然语言被视为通向机器智能的重要入口，但当时的程序几乎没有语义理解能力。
backgroundEn: Natural language was seen as an important route to machine intelligence, but programs of the time had almost no semantic understanding.
visual:
  src: /assets/events/eliza.webp
  width: 751
  height: 487
  alt: 终端窗口中的 ELIZA 对话示例
  altEn: Example ELIZA conversation displayed in a terminal window
  caption: ELIZA 的一次对话演示。画面来自后来的开源复现，用来呈现程序以提问和复述维持谈话的方式。
  captionEn: An ELIZA conversation in a later open-source reimplementation, showing how questions and reformulations sustained the exchange.
  credit: Public-domain screenshot, via Wikimedia Commons; implementation by Norbert Landsteiner
  sourceUrl: "https://commons.wikimedia.org/wiki/File:ELIZA_conversation.png"
  rights: public-domain
whatHappened: 最著名的 DOCTOR 脚本模仿罗杰斯式心理治疗师，经常把用户的话改写成问题。程序规则很浅，部分用户却愿意向它倾诉，并认为它理解了自己。
whatHappenedEn: Its best-known DOCTOR script imitated a Rogerian therapist, often turning a user’s words back into questions. The rules were shallow, yet some users confided in it and attributed understanding to the program.
whyImportant: ELIZA 同时留下了产品机会和警告。对话界面能显著降低使用门槛，但流畅互动会让人高估系统实际具备的理解与判断。
whyImportantEn: ELIZA left both an opportunity and a warning. Conversation lowers the barrier to using software, but fluent interaction can cause users to overestimate a system’s understanding and judgment.
impact:
  user: “ELIZA 效应”后来用于描述人们把理解、意图和情感投射给程序的倾向。
  product: 聊天机器人证明了自然语言可以成为普通人使用计算机的界面。
impactEn:
  user: The “ELIZA effect” now describes the tendency to project understanding, intention, and emotion onto software.
  product: Chatbots showed that natural language could serve as an interface for ordinary computer users.
beforeAfter:
  before: 人机交互主要依赖命令和结构化输入。
  after: 开放式文字对话成为长期反复出现的产品形态。
beforeAfterEn:
  before: Human-computer interaction relied mainly on commands and structured input.
  after: Open-ended text conversation became a recurring product form.
relatedEvents: [turing-test, chatgpt-launch]
sources:
  - title: ELIZA — A Computer Program for the Study of Natural Language Communication
    url: "https://dl.acm.org/doi/10.1145/365153.365168"
    publisher: Communications of the ACM
    type: paper
status: verified
slug: eliza
---
