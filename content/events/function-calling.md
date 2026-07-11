---
id: function-calling
title: OpenAI API 加入函数调用
titleEn: The OpenAI API adds function calling
subtitle: 模型输出从自然语言变成可校验的工具参数
subtitleEn: Model output becomes validated arguments for software tools
date: '2023-06-13'
datePrecision: day
importance: A
eventType: [api, product]
topics: [ai-agent, developer-tools, large-language-models]
companies: [openai]
concepts: [tool-calling, agent]
summary: OpenAI 在 0613 版 GPT-4 与 GPT-3.5 Turbo 中加入函数调用。开发者用 JSON Schema 声明函数，模型返回函数名与参数；应用仍须校验参数、执行函数并把结果送回模型。
summaryEn: OpenAI added function calling to the 0613 versions of GPT-4 and GPT-3.5 Turbo. Developers declared functions with JSON Schema and received a function name and arguments; the application still had to validate, execute, and return the result.
background: 早期开发者让模型用自然语言或约定格式输出命令，再自行解析。格式漂移、字段缺失和提示注入让工具集成脆弱。
backgroundEn: Early developers asked models to emit commands in natural language or improvised formats and parsed them manually. Format drift, missing fields, and prompt injection made tool integration fragile.
whatHappened: API 接收函数名称、说明和 JSON Schema。模型返回结构化调用意图，应用验证参数、执行外部代码，再把结果送回模型继续回答。
whatHappenedEn: The API accepted function names, descriptions, and JSON Schema. The model returned a structured call, the application validated and executed it, and the result could be sent back for the next response.
whyImportant: 它给语言模型和确定性软件之间建立了稳定边界。搜索、数据库、业务 API 与执行环境因此能被组合成可审计的 Agent 循环。
whyImportantEn: It created a stable boundary between language models and deterministic software, enabling search, databases, business APIs, and execution environments to form auditable agent loops.
impact:
  developer: 工具调用不再依赖脆弱的正则表达式和提示格式约定。
  product: 助手可以查询实时数据和执行操作，而不只回答训练语料中的知识。
impactEn:
  developer: Tool integration no longer depended on brittle regular expressions and prompt-format conventions.
  product: Assistants could query live data and take actions instead of only answering from trained knowledge.
beforeAfter:
  before: 应用从自由文本中猜测模型想调用什么以及参数是什么。
  after: 模型与软件通过明确的结构化调用合同协作。
beforeAfterEn:
  before: Applications inferred tools and arguments from free-form model text.
  after: Models and software collaborated through an explicit structured-call contract.
relatedEvents: [openai-plugins, assistants-api, mcp]
sources:
  - title: Function calling and other API updates
    url: https://openai.com/index/function-calling-and-other-api-updates/
    publisher: OpenAI
    type: official
status: verified
slug: function-calling
---
