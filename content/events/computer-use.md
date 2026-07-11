---
id: computer-use
title: Claude Computer Use 公测：模型操作图形界面
titleEn: Claude computer use public beta lets models drive GUIs
subtitle: 截图加键鼠动作，把桌面与浏览器交给 Agent 循环
subtitleEn: Screenshots plus mouse and keyboard actions put desktops and browsers in an agent loop
date: '2024-10-22'
datePrecision: day
importance: A
eventType: [api, product]
topics:
  - ai-agent
  - large-language-models
  - multimodal-ai
  - embodied-ai
companies: [anthropic]
models: [claude-3.5-sonnet]
products: [claude]
concepts: [agent, tool-calling, multimodal]
summary: Anthropic 在 2024 年 10 月 22 日将 computer use 以公测形式接入 API：模型根据屏幕截图决定移动光标、点击与键入等动作，在实验性条件下用人类方式操作计算机。
summaryEn: On 22 October 2024 Anthropic launched computer use as a public API beta—the model chooses cursor moves, clicks, and keystrokes from screenshots, operating a computer the way people do under experimental conditions.
background: 工具调用已能接 API 与结构化函数，但大量软件只有图形界面；Agent 若不能看屏与点选，就卡在“会调接口、不会用桌面”的边界。
backgroundEn: Tool calling already reached APIs and structured functions, yet much software is GUI-only; agents that cannot see screens and click stay stuck at “can call APIs, cannot use a desktop.”
whatHappened: 随升级版 Claude 3.5 Sonnet 发布，开发者可在 Anthropic API、Amazon Bedrock 与 Google Cloud Vertex AI 上试用 computer use。官方强调能力仍实验性、易错，并讨论权限与滥用风险；OSWorld 等评测上报告高于同类别基线但仍远低于人类。
whatHappenedEn: With the upgraded Claude 3.5 Sonnet, developers could try computer use on the Anthropic API, Amazon Bedrock, and Google Cloud Vertex AI. Anthropic stressed the experimental, error-prone nature and discussed permission and misuse risks; on OSWorld-style evals it led peer models while remaining far below human skill.
whyImportant: 它把 Agent 从“调用开发者预置工具”推进到“复用人类工作站上的通用 UI”，同时把安全边界从提示词扩展到键鼠权限与沙箱。
whyImportantEn: It moved agents from “call developer-provided tools” toward “reuse the general UI on a human workstation,” extending the safety boundary from prompts to keystroke permissions and sandboxes.
impact:
  developer: 可用截图—动作循环自动化填表、点选与跨应用流程，但仍需强隔离与人工监督。
  industry: 桌面/浏览器操控成为前沿模型产品叙事与竞品跟进的焦点，也抬高了 Agent 滥用面的讨论。
impactEn:
  developer: Screenshot–action loops could automate forms, clicks, and cross-app flows, still needing isolation and human oversight.
  industry: Desktop and browser control became a frontier product narrative and competitive target, and raised Agent misuse concerns.
beforeAfter:
  before: 模型主要靠 API、浏览器扩展或定制工具触达外部系统。
  after: 同一模型可在授权环境里直接操作屏幕上的通用软件。
beforeAfterEn:
  before: Models mostly reached external systems via APIs, browser extensions, or custom tools.
  after: The same model could, in authorized environments, operate ordinary on-screen software.
relatedEvents: [claude-3-5-sonnet, tool-use, agent-runtime, function-calling]
visual:
  src: /assets/events/computer-use.webp
  width: 1280
  height: 720
  alt: "光标在多层应用窗口上移动，旁侧是截图馈入的抽象决策环"
  altEn: "A cursor moves across layered app windows beside a screenshot-fed abstract decision loop"
  caption: "AI Chronicle 原创插图：Computer Use 让模型通过截图与键鼠动作操作界面。"
  captionEn: "Original illustration by AI Chronicle: computer use steers UIs via screenshots and pointer actions."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for Claude computer use, layered desktop windows with a precise abstract cursor path, small screenshot tiles feeding a calm decision loop, soft orange and slate product-editorial style, no Anthropic logos, no readable brand text, 16:9"
sources:
  - title: Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku
    url: "https://www.anthropic.com/news/3-5-models-and-computer-use"
    publisher: Anthropic
    type: official
  - title: Developing a computer use model
    url: "https://www.anthropic.com/news/developing-computer-use"
    publisher: Anthropic
    type: official
  - title: Computer use documentation
    url: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use"
    publisher: Anthropic Docs
    type: official
status: verified
slug: computer-use
---
