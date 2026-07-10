---
id: github-copilot
title: GitHub Copilot 发布
subtitle: Codex 生成的代码建议进入日常编辑器
subtitleEn: Codex-generated suggestions enter the everyday code editor
date: '2021-06-29'
datePrecision: day
importance: A
eventType:
  - product
topics:
  - ai-coding
companies:
  - github
  - openai
  - microsoft
products:
  - github-copilot
models:
  - codex
concepts:
  - code-generation
  - ai-pair-programmer
  - ide-agent
summary: GitHub 发布 Copilot 技术预览，把 OpenAI Codex 生成的单行或整段代码建议放进 Visual Studio Code。
summaryEn: GitHub launched a technical preview of Copilot, placing single-line and whole-function suggestions from OpenAI Codex inside Visual Studio Code.
background: 传统补全依赖语言服务器、符号和局部模式，能列出 API 或变量，却很难根据注释与周围代码生成完整实现。
backgroundEn: Traditional completion relied on language servers, symbols, and local patterns. It could list APIs or variables but rarely generated a full implementation from comments and surrounding code.
whatHappened: 插件把当前文件和相关上下文发送给模型，生成可接受、拒绝或继续编辑的建议。它可以根据函数名、注释和已有代码完成测试、样板与常见算法，但输出仍需开发者审查。
whatHappenedEn: The extension sent the current file and nearby context to the model and returned suggestions that developers could accept, reject, or edit. It generated tests, boilerplate, and common algorithms from names, comments, and code, but still required review.
whyImportant: Copilot 让生成模型进入高频开发动作，而不是停在演示和网页聊天中。它也把生产率、训练代码许可、相似代码输出和责任归属变成长期产品问题。
whyImportantEn: Copilot moved generative models into a high-frequency development action rather than a demo or web chat. It also made productivity, training-code licensing, similar-code output, and responsibility persistent product issues.
impact:
  developer: 改变了开发者的工作方式，代码生成成为日常工具。
  industry: 开启了 AI Coding 产品竞争，影响了 IDE 生态和开发者工具市场。
beforeAfter:
  before: AI 编程辅助主要是代码补全和 linting，无法理解意图。
  after: AI 开始真正理解开发者的意图，代码生成成为新的编程范式。
relatedEvents:
  - codex
  - chatgpt-launch
  - cursor
  - claude-code
  - codex-agent
sources:
  - title: Introducing GitHub Copilot — your AI pair programmer
    url: https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/
    publisher: GitHub
    type: official
status: verified
slug: github-copilot
---
