---
id: seed-realtime
title: 字节发布 SeedRealtime 音视频全双工模型
titleEn: ByteDance releases SeedRealtime, a full-duplex audio-video model
subtitle: 豆包 App 全量上线「打电话」视频通话，端到端架构融合音视频与文本
subtitleEn: Doubao ships video calls app-wide; an end-to-end architecture fuses audio, video, and text
date: '2026-08-05'
datePrecision: day
importance: A
eventType:
  - model
  - product
topics:
  - multimodal-ai
  - speech-ai
  - consumer-ai
  - ai-agent
  - china-ai
  - ai-applications
companies:
  - bytedance
models:
  - seed-realtime
products:
  - doubao
concepts:
  - multimodal
  - realtime
  - speech
  - video-generation
summary: 字节跳动发布 SeedRealtime：原生音视频全双工大模型，统一端到端架构融合音频、视频与文本，豆包 App 全量上线视频通话；官方称相比级联模型，节奏问题减少约 50%。
summaryEn: ByteDance released SeedRealtime, a natively full-duplex audio-video model with a unified end-to-end architecture fusing audio, video, and text, shipping video calls app-wide in Doubao. The company reported roughly 50% fewer pacing problems versus cascaded models.
background: 实时语音助手普遍采用「语音识别—大模型—语音合成」级联架构，延迟与节奏感差，且无法理解画面。豆包此前已具备语音通话能力，但视频理解与打断式对话仍分离。SeedRealtime 试图用单一端到端模型同时处理听、看、说。
backgroundEn: Real-time voice assistants typically cascade ASR, LLM, and TTS, which hurts latency and pacing and cannot see the scene. Doubao already had voice calls, but video understanding and interruptible dialogue remained separate. SeedRealtime tries to handle listening, seeing, and speaking in one end-to-end model.
whatHappened: SeedRealtime 以统一端到端架构同时处理音频、视频与文本，支持自然打断、多人对话与视觉理解，豆包 App 全量上线视频通话。官方演示包括多人聚餐识人、川菜馆点餐、河北博物院主动提醒、咖啡机纠错与大兴机场抗干扰场景；相比级联模型，节奏问题减少约 50%。
whatHappenedEn: SeedRealtime handles audio, video, and text in one end-to-end architecture with natural interruption, multi-party dialogue, and visual understanding, and Doubao shipped video calls app-wide. Demos covered recognizing people at a group dinner, ordering at a Sichuan restaurant, proactive reminders at a museum, correcting a coffee machine, and noise resistance at Daxing Airport; pacing problems dropped about 50% versus cascaded models.
whyImportant: 它把「实时多模态对话」从级联拼装推进到端到端原生，让语音助手第一次能看见并理解画面；对消费级 AI 通话、陪伴与具身交互，这是一条新的产品基线。
whyImportantEn: It moved real-time multimodal dialogue from cascaded assembly to native end-to-end, letting a voice assistant see and understand the scene for the first time—a new product baseline for consumer AI calls, companionship, and embodied interaction.
impact:
  user: 豆包用户获得可打断、可看画面的视频通话体验，交互从「对讲机」变成「面对面」。
  industry: 实时多模态对话的架构路线从级联转向端到端，语音助手产品开始比拼视觉理解与节奏感。
  product: 视频通话、陪伴、教育、客服类产品可以直接复用同一套全双工能力。
impactEn:
  user: Doubao users got interruptible, scene-aware video calls; interaction shifted from walkie-talkie to face-to-face.
  industry: Real-time multimodal dialogue moved from cascaded to end-to-end architecture; assistants now compete on vision and pacing.
  product: Video calls, companionship, education, and customer-service products can reuse the same full-duplex capability.
beforeAfter:
  before: 语音助手只能听和说，级联架构下节奏生硬，无法理解画面。
  after: 一个端到端模型同时听、看、说，支持打断与多人场景，并进入亿级用户 App。
beforeAfterEn:
  before: Voice assistants could only listen and speak, with stiff pacing and no visual understanding.
  after: One end-to-end model listens, sees, and speaks with interruption and multi-party support, inside a mass-market app.
relatedEvents:
  - seedance-1-0
  - seedance-2-0
  - gpt-live
  - gemini-3-6-flash
visual:
  src: /assets/events/seed-realtime.webp
  width: 1280
  height: 720
  alt: 编辑插图：声波与眼睛轮廓叠合在手机通话界面上
  altEn: Editorial illustration of sound waves and an eye contour overlaid on a phone call interface
  caption: AI Chronicle 原创插图：听与看合一，对应 SeedRealtime 的音视频全双工定位。
  captionEn: AI Chronicle original illustration of hearing and seeing as one, for SeedRealtime's full-duplex audio-video stance.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, abstract phone call interface with sound waves merging into a single eye contour, soft mint and charcoal palette, no logos, no readable text, clean"
sources:
  - title: SeedRealtime：迈向全模态自然交互
    url: "https://seed.bytedance.com/zh/blog/seedrealtime-audio-visual-full-duplex-llm-released-toward-omni-modal-natural-interaction"
    publisher: ByteDance Seed
    type: official
  - title: IT之家：豆包上线视频通话
    url: "https://www.ithome.com/0/985/891.htm"
    publisher: IT之家
    type: report
status: verified
slug: seed-realtime
---
