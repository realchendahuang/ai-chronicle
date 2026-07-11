---
id: codex
title: OpenAI Codex 把 GPT-3 适配到代码
titleEn: OpenAI Codex adapts GPT-3 to code
subtitle: 自然语言开始直接驱动代码生成
subtitleEn: Natural language begins driving code generation directly
date: '2021-08-10'
datePrecision: day
importance: A
eventType: [model, product]
topics: [ai-coding, large-language-models, developer-tools]
companies: [openai, github]
models: [openai-codex]
products: [github-copilot]
concepts: [code-generation, ai-pair-programmer]
summary: OpenAI 发布 Codex API 私有测试版。Codex 由 GPT-3 继续在公开代码上训练，早期 12B 版本在 HumanEval 单次采样中解出 28.8% 的题目，并为 GitHub Copilot 提供模型能力。
summaryEn: OpenAI released the Codex API in private beta. Codex extended GPT-3 with training on public code; the 12B model solved 28.8% of HumanEval problems with one sample and supplied the model behind early GitHub Copilot.
background: GPT-3 已能根据提示生成短代码，但对编程语言、库调用和函数意图的稳定性有限。开发者需要更专门的代码数据与产品接口。
backgroundEn: GPT-3 could generate short code from prompts but was unreliable with programming languages, library calls, and function intent. Developers needed a model adapted to code and a usable interface.
whatHappened: Codex 支持十多种编程语言，可把自然语言说明转换成函数、补全代码并调用已有 API。OpenAI 同时展示了通过代码控制游戏和应用的实验。
whatHappenedEn: Codex supported more than a dozen programming languages, translating natural-language instructions into functions, completing code, and calling existing APIs. OpenAI also demonstrated controlling games and applications through generated code.
whyImportant: 它把代码明确成模型可生成、可执行的行动媒介。AI Coding 从研究评测进入编辑器和 API，也为后来通过工具调用执行任务的 Agent 提供了直接前身。
whyImportantEn: It established code as an executable action medium for language models. AI coding moved from research benchmarks into editors and APIs, directly anticipating agents that act through tools.
impact:
  developer: 自然语言描述和代码上下文成为新的编程输入方式。
  product: 代码补全产品从统计建议升级为能生成完整函数的模型助手。
impactEn:
  developer: Natural-language descriptions and surrounding code became new forms of programming input.
  product: Code completion moved from statistical suggestions to model-generated functions.
beforeAfter:
  before: AI 编程工具主要补全局部 token 或基于规则分析代码。
  after: 模型可以根据意图生成成段代码，并通过 API 被其他产品调用。
beforeAfterEn:
  before: AI programming tools mainly completed local tokens or analyzed code with rules.
  after: Models could generate blocks of code from intent and be embedded in products through APIs.
relatedEvents: [gpt-3, github-copilot, cursor, claude-code]
visual:
  src: /assets/events/codex.webp
  width: 1400
  height: 1812
  alt: 《Evaluating Large Language Models Trained on Code》论文首页
  altEn: First page of the paper Evaluating Large Language Models Trained on Code
  caption: Codex 论文首页，摘要介绍了从公开 GitHub 代码微调 GPT 并以 HumanEval 衡量函数生成能力的方法。
  captionEn: The first page of the Codex paper, whose abstract describes fine-tuning GPT on public GitHub code and evaluating function generation with HumanEval.
  credit: Mark Chen 等 / arXiv
  sourceUrl: "https://arxiv.org/abs/2107.03374"
  rights: official-editorial
sources:
  - title: OpenAI Codex
    url: "https://openai.com/index/openai-codex/"
    publisher: OpenAI
    type: official
  - title: Evaluating Large Language Models Trained on Code
    url: "https://arxiv.org/abs/2107.03374"
    publisher: OpenAI
    type: paper
status: verified
slug: codex
---
