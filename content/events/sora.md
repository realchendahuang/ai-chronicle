---
id: sora
title: Sora 展示长时文生视频
titleEn: Sora demonstrates long-form text-to-video generation
subtitle: 视频生成被表述为对时空世界的统一建模
subtitleEn: Video generation is framed as unified modeling of a spatiotemporal world
date: '2024-02-15'
datePrecision: day
importance: A
eventType: [model, research]
topics:
  - multimodal-ai
  - ai-applications
  - video-generation
  - generative-media
  - world-models
companies: [openai]
models: [sora]
concepts: [diffusion, transformer, multimodal]
summary: OpenAI 公布 Sora 研究预览，可根据文字生成最长一分钟、保持较高视觉质量和镜头连贯性的视频。
summaryEn: OpenAI previewed Sora, generating videos up to one minute from text while maintaining relatively high visual quality and scene continuity.
background: 早期文生视频通常只有数秒，容易出现物体变形、身份漂移和运动不连续。图像扩散模型还缺少稳定表示长时间和复杂镜头的方法。
backgroundEn: Early text-to-video systems produced only seconds of footage and often suffered object deformation, identity drift, and broken motion. Image diffusion lacked a stable way to represent longer time and complex shots.
whatHappened: Sora 把压缩视频切成时空 patch，用类似语言模型 token 的方式交给扩散 Transformer 处理。模型也能扩展、补全或连接已有视频。
whatHappenedEn: Sora compressed video into spacetime patches and processed them with a diffusion transformer in a way analogous to language-model tokens. It could also extend, fill, or connect existing videos.
whyImportant: 它显示扩散 Transformer 能跨图像和视频扩展，也让物理一致性、训练数据版权、人物仿冒和影视工作流程成为迫切议题。
whyImportantEn: It showed diffusion transformers scaling across image and video and made physical consistency, training-data rights, impersonation, and film workflows urgent issues.
impact:
  user: 文字和静态素材开始可以直接生成较长的动态镜头。
  industry: 视频生成模型进入影视、广告和创意软件的产品竞争。
impactEn:
  user: Text and still assets could produce substantially longer moving shots.
  industry: Video generation entered competition across film, advertising, and creative software.
beforeAfter:
  before: 文生视频多是短片段和明显不稳定的研究演示。
  after: 一分钟级生成和复杂镜头控制成为前沿模型目标。
beforeAfterEn:
  before: Text-to-video consisted mainly of short, visibly unstable research clips.
  after: Minute-scale generation and complex shot control became frontier targets.
relatedEvents: [diffusion-models, stable-diffusion, gpt-4o]
visual:
  src: /assets/events/sora.webp
  width: 1672
  height: 941
  alt: 电影胶片拼贴：同一身影穿过城市黄昏的连续镜头，旁侧是时空结构草图
  altEn: "Film-strip collage: one figure moves through continuous dusk city shots beside spacetime structure sketches"
  caption: AI Chronicle 原创插图：Sora 把视频生成表述为对时空世界的统一建模。
  captionEn: "Original illustration by AI Chronicle: Sora frames video generation as unified modeling of a spatiotemporal world."
  credit: AI Chronicle
  rights: generated
  prompt: "Cinematic editorial collage of curved film strips showing continuous shots of a lone figure walking through rainy dusk city streets, bridges, markets, windows; surrounding storyboard sketches, camera geometry, spacetime patch diagrams on dark paper; painterly frames, no logos, no readable brand text, 16:9"
sources:
  - title: Video generation models as world simulators
    url: https://openai.com/index/video-generation-models-as-world-simulators/
    publisher: OpenAI
    type: official
status: verified
slug: sora
---
