---
id: gpt-live
title: OpenAI 发布 GPT-Live 全双工语音模型
titleEn: OpenAI launches GPT-Live full-duplex voice models
subtitle: 语音交互从回合制问答进入"边听边说"的实时对话
subtitleEn: Voice interaction moves from turn-based exchange to listening and speaking at the same time
date: '2026-07-08'
datePrecision: day
importance: B
eventType:
  - model
  - product
topics:
  - consumer-ai
  - speech-ai
  - ai-agent
  - large-language-models
companies:
  - openai
models:
  - gpt-live-1
concepts:
  - llm
  - multimodal
summary: OpenAI 发布全双工语音模型 GPT-Live-1 与 GPT-Live-1 mini，让 ChatGPT 语音能同时听与说，支持同声传译、智能垫话与后台委派；两者分别成为付费与免费用户的默认语音模型，并向 iOS、Android 与网页端逐步推送。
summaryEn: OpenAI released the full-duplex voice models GPT-Live-1 and GPT-Live-1 mini, letting ChatGPT voice listen and speak simultaneously, with live interpretation, natural backchanneling, and background delegation. They became the default voice models for paid and free users respectively, rolling out gradually across iOS, Android, and the web.
background: 2024 年 7 月 Advanced Voice Mode 让 ChatGPT 的语音有了更像人的节奏，但对话仍是"你一句、我一句"的回合制。到 2026 年，语音助手要进入客服、翻译、驾驶等实时场景，必须处理打断、重叠与同时发生的语境；同时音频内容开始被纳入生成式标识的监管范围。
backgroundEn: Advanced Voice Mode in July 2024 gave ChatGPT voice a more human rhythm, but conversation remained turn-based. By 2026, voice assistants entering live scenarios such as customer service, interpretation, and driving had to handle interruption, overlap, and simultaneous context; meanwhile, audio content was coming into the scope of generative labeling rules.
whatHappened: GPT-Live-1 与 GPT-Live-1 mini 支持全双工对话：模型可以一边听一边说，也能在用户说话时判断该垫话还是等待。工程侧为亚秒级响应重新设计了状态化推理、动态上下文管理与异步委派，用 Go 重写媒体前端，并以 WARP 协议把启动网络往返从 6 次减到 1 次。复杂任务可以在后台委派给 GPT-5.5 等模型，回答可以配可视化卡片。官方公布盲测偏好率高于旧版语音模式。7 月 31 日起，生成的音频将加入 SynthID 水印。
whatHappenedEn: "GPT-Live-1 and GPT-Live-1 mini support full-duplex conversation: the model can listen and speak at the same time, and judge on the fly whether to interject or wait. On the engineering side, stateful reasoning, dynamic context management, and asynchronous delegation were redesigned for sub-second response; the media frontend was rewritten in Go, and the WARP protocol cut startup network round trips from six to one. Complex tasks can be delegated in the background to models such as GPT-5.5, and answers can include visual cards. Blind-test preference rates exceeded the previous voice mode. Starting July 31, generated audio carries a SynthID watermark."
whyImportant: 全双工不是"更快的语音"那么简单，它改变的是交互协议：用户可以在模型说话时打断并立刻得到响应，机器也可以主动垫话而不显得机械。对客服、翻译、驾驶等实时场景，这比更长的上下文窗口更先改变体验边界。
whyImportantEn: "Full-duplex is not simply faster voice. It changes the interaction protocol: users can interrupt mid-sentence and get an immediate response, and the machine can interject without feeling mechanical. For live scenarios like customer service, interpretation, and driving, this shifts the experience boundary sooner than a longer context window would."
impact:
  user: 与 AI 对话的节奏接近真人交流，打断与并行说话成为自然动作。
  developer: 实时语音 Agent 的构建从"回合协议"转向"流式全双工协议"，延迟与打断处理成为新考题。
  industry: 语音助手从问答工具走向实时服务入口，音频标识义务也随之进入产品清单。
impactEn:
  user: Conversation with an AI approaches human pacing; interruption and parallel speech become natural.
  developer: Building real-time voice agents moves from turn protocols to streaming full-duplex protocols, where latency and interruption handling are the new tests.
  industry: Voice assistants move from Q&A tools toward real-time service entrances, and audio labeling duties enter the product checklist.
beforeAfter:
  before: 语音 AI 在"说一句—等一句"的回合协议下工作，打断与重叠难以处理。
  after: 旗舰语音模型原生支持同时听与说，打断、垫话与后台委派成为第一等能力。
beforeAfterEn:
  before: Voice AI worked under a speak-then-wait turn protocol, where interruption and overlap were hard to handle.
  after: Flagship voice models natively listen and speak at once, with interruption, backchanneling, and delegation as first-class abilities.
relatedEvents:
  - chatgpt-launch
  - gpt-5-6
visual:
  src: /assets/events/gpt-live.png
  width: 1280
  height: 720
  alt: 编辑插图：深色背景中央一圈圈扩散的声波圆环，两侧是对话脉冲
  altEn: Editorial illustration of expanding sound-wave rings at center, with dialogue pulses on both sides
  caption: AI Chronicle 原创插图：双向声波与环形扩散，对应全双工对话中的同时听与说。
  captionEn: AI Chronicle original illustration of bidirectional sound waves and expanding rings, for listening and speaking at once.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, concentric sound-wave rings expanding from a bright core, small vertical pulse bars on both sides, deep blue night, no logos, no text"
sources:
  - title: OpenAI launches GPT-Live voice models that listen and speak simultaneously
    url: "https://www.reuters.com/business/openai-launches-gpt-live-voice-models-that-listen-speak-simultaneously-2026-07-08/"
    publisher: Reuters
    type: report
  - title: Introducing GPT-Live
    url: "https://openai.com/index/introducing-gpt-live/"
    publisher: OpenAI
    type: official
status: verified
slug: gpt-live
---
