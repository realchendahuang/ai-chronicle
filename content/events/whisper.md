---
id: whisper
title: OpenAI 开源 Whisper 语音识别
titleEn: OpenAI open-sources Whisper speech recognition
subtitle: 68 万小时弱监督把多语转写做成可下载模型
subtitleEn: 680k hours of weak supervision make multilingual transcription a downloadable model
date: '2022-09-21'
datePrecision: day
importance: A
eventType: [model, open-source]
topics: [multimodal-ai, ai-applications]
companies: [openai]
models: [whisper]
concepts: [multimodal, transformer]
summary: OpenAI 发布 Whisper：在约 68 万小时多语、多任务监督音频上训练的端到端语音系统，并开源推理代码与模型权重。官方称在多样数据集上零样本表现更稳健，错误约比专项模型少 50%。
summaryEn: OpenAI released Whisper, an end-to-end speech system trained on about 680,000 hours of multilingual, multitask supervised audio, with open inference code and model weights. The company reported more robust zero-shot results across diverse datasets, with about 50% fewer errors than specialized models.
background: 高精度自动语音识别常依赖干净的领域数据与针对基准的微调；口音、噪声与技术用语使模型在实验室分数与真实录音之间落差明显。商业 ASR API 好用，但权重与训练配方不开放。
backgroundEn: High-accuracy ASR often depended on clean domain data and benchmark-specific fine-tunes; accents, noise, and jargon opened gaps between lab scores and real recordings. Commercial ASR APIs worked well but kept weights and recipes closed.
whatHappened: Whisper 用编码器–解码器 Transformer 同时做多语转写、语音翻译与语言识别。训练数据来自网络规模的弱监督字幕对齐；发布提供从 tiny 到 large 的系列检查点，社区随后做出 whisper.cpp 等本地端口。
whatHappenedEn: Whisper’s encoder–decoder transformer jointly handles multilingual transcription, speech translation, and language ID. Training used web-scale weakly supervised caption alignment; the release shipped tiny-to-large checkpoints, and the community soon built local ports such as whisper.cpp.
whyImportant: 它把“够用的多语转写”从云 API 变成可离线运行的文件，降低字幕、播客与会议工具的接入成本，也为后续实时语音产品提供开源对照基线。
whyImportantEn: It turned “good enough multilingual transcription” from a cloud API into offline files, lowering barriers for captions, podcasts, and meeting tools, and giving later real-time voice products an open baseline.
impact:
  user: 个人与小团队可在本地转写会议与媒体，减少上传敏感音频的必要。
  developer: 字幕与语音输入功能可直接嵌入应用，不必先签大型 ASR 合同。
impactEn:
  user: Individuals and small teams could transcribe meetings and media locally, reducing the need to upload sensitive audio.
  developer: Captioning and voice-input features could ship without first signing a large ASR contract.
beforeAfter:
  before: 稳健多语 ASR 多被封闭服务垄断，开源方案在噪声与口音上明显掉队。
  after: 可下载的通用转写模型成为默认起点，专用微调变成可选项。
beforeAfterEn:
  before: Robust multilingual ASR was mostly locked in closed services; open systems lagged on noise and accents.
  after: A downloadable general-purpose transcriber became the default starting point, with specialist fine-tunes optional.
relatedEvents: [gpt-3, chatgpt-launch, gpt-4o]
visual:
  src: /assets/events/whisper.webp
  width: 1280
  height: 720
  alt: "话筒前声波化作多条抽象转写丝带"
  altEn: "Microphone sound waves becoming abstract transcript ribbons"
  caption: "AI Chronicle 原创插图：Whisper 把多语言语音收成可复用的转写模型。"
  captionEn: "Original illustration by AI Chronicle: Whisper turns multilingual speech into a reusable transcription model."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for Whisper speech recognition, microphone and transcript ribbons, silver blue, no logos, 16:9"
sources:
  - title: Introducing Whisper
    url: https://openai.com/index/whisper/
    publisher: OpenAI
    type: official
  - title: Robust Speech Recognition via Large-Scale Weak Supervision
    url: https://arxiv.org/abs/2212.04356
    publisher: arXiv
    type: paper
status: verified
slug: whisper
---
