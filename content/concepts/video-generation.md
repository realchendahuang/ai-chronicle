---
id: video-generation
title: 视频生成
fullName: Text/Image-to-Video Generation
difficulty: intermediate
oneLiner: 根据文字或图像生成一段时间的连续画面，并尽量保持运动、身份与镜头连贯。
beginnerExplanation: 文生图一次出一张静帧；视频生成要在时间轴上连续出很多帧，还得让人物别“变形”、动作别跳帧。
technicalExplanation: 路线包括扩散 Transformer、时空 patch、潜空间视频扩散与自回归视频模型。难点在时序一致性、物理合理性、可控镜头与算力成本。
whyItMatters: 它把生成式媒体从海报推进到镜头语言，冲击广告、短视频、影视预演与训练数据合成。
relatedEvents:
  - sora
  - diffusion-models
  - stable-diffusion
relatedConcepts:
  - diffusion
  - multimodal
  - transformer
commonMisunderstandings:
  - 长视频已经完全解决物理一致性
  - 视频模型只是多帧拼图
  - 开放权重与产品体验可直接互换
slug: video-generation
---
