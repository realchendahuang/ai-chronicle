---
id: openai-plugins
title: ChatGPT 插件连接外部服务
titleEn: ChatGPT plugins connect external services
subtitle: 对话助手首次以统一目录调用搜索、计算和交易工具
subtitleEn: A conversational assistant gains a shared catalog for search, computation, and transactions
date: '2023-03-23'
datePrecision: day
importance: B
eventType: [product, platform]
topics: [ai-agent, consumer-ai, developer-tools]
companies: [openai]
products: [chatgpt-plugins]
concepts: [tool-calling, agent]
summary: OpenAI 向候补名单用户开放 ChatGPT 插件测试。第三方以域名下的清单文件和 OpenAPI 规范描述接口，模型可据此选择调用；最初的浏览器和代码解释器插件由 OpenAI 自己提供。
summaryEn: OpenAI opened ChatGPT plugins to users from a waitlist. Third parties described endpoints through a domain-hosted manifest and an OpenAPI specification for the model to select, while OpenAI supplied the initial browsing and code-interpreter plugins.
background: ChatGPT 的知识受训练截止日期限制，也不能可靠执行计算或访问用户授权的外部系统。开发者各自搭建集成，缺少统一发现和权限界面。
backgroundEn: ChatGPT was limited by a knowledge cutoff and could not reliably calculate or access user-authorized systems. Developers built custom integrations without a shared discovery or permission interface.
whatHappened: 首批插件包括浏览器、代码解释器和 Expedia、Wolfram 等第三方服务。模型选择工具并组装调用，用户在 ChatGPT 内启用插件。
whatHappenedEn: Initial plugins included browsing, a code interpreter, and services such as Expedia and Wolfram. The model selected and called tools that users enabled inside ChatGPT.
whyImportant: 插件目录没有成为最终标准，但它首次让大规模用户体验“模型选择工具完成任务”，并暴露权限、提示注入、审核和生态分发问题。
whyImportantEn: The plugin catalog did not become the final standard, but it gave a mass audience its first experience of a model selecting tools to finish tasks and exposed permission, prompt-injection, review, and distribution problems.
impact:
  user: ChatGPT 能访问实时网页、运行代码并调用第三方服务。
  developer: 工具描述、授权和结果回传成为构建模型应用的共同问题。
impactEn:
  user: ChatGPT could access live web data, run code, and use third-party services.
  developer: Tool descriptions, authorization, and result handling became shared model-application concerns.
beforeAfter:
  before: ChatGPT 主要在封闭对话中生成文本。
  after: 对话界面开始成为外部工具和服务的调度入口。
beforeAfterEn:
  before: ChatGPT mainly generated text inside a closed conversation.
  after: The chat interface became an orchestration point for external tools and services.
relatedEvents: [chatgpt-launch, function-calling, gpts-launch, mcp]
sources:
  - title: ChatGPT plugins
    url: https://openai.com/index/chatgpt-plugins/
    publisher: OpenAI
    type: official
status: verified
slug: openai-plugins
---
