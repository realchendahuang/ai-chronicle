---
id: foundation-models
order: 60
segment: midstream
title: 基础模型层
titleEn: Foundation model layer
oneLiner: 预训练与对齐后的通用模型，是整条链上最被看见的“智能商品”。
oneLinerEn: Pretrained and aligned general models are the most visible “intelligence goods” on the chain.
description: OpenAI、Anthropic、Google、Meta、xAI 与中国的深度求索、阿里、字节、智谱、月之暗面等，把数据、算力与算法压成 API 或开放权重。本层吃掉中游云与软件栈，再被应用层封装。
descriptionEn: OpenAI, Anthropic, Google, Meta, xAI and Chinese labs such as DeepSeek, Alibaba, ByteDance, Zhipu, and Moonshot compress data, compute, and algorithms into APIs or open weights. This layer consumes midstream cloud and software, then is wrapped by applications.
dependsOn:
  - cloud-compute
  - ai-software
  - tooling-data
feedsInto:
  - platforms-distribution
  - applications
roles:
  - name: "闭源旗舰 API"
    nameEn: "Closed flagship APIs"
    summary: "以产品与安全策略控制分发，按 token 与订阅变现。"
    summaryEn: "Distribute under product/safety policy; monetize tokens and subscriptions."
    examples:
      - "GPT"
      - "Claude"
      - "Gemini"
      - "豆包/文心 API"
  - name: "开放权重"
    nameEn: "Open weights"
    summary: "可下载检查点，重塑成本与本地部署，许可边界必须分清。"
    summaryEn: "Downloadable checkpoints reshape cost and local deploy; licenses must stay clear."
    examples:
      - "Llama"
      - "Qwen"
      - "DeepSeek"
      - "Mistral"
      - "Gemma"
  - name: "专用与领域模型"
    nameEn: "Specialized & domain models"
    summary: "代码、多模态、行业与端侧小模型，承接通用基座的细分需求。"
    summaryEn: "Code, multimodal, industry, and on-device SLMs absorb niche demand from general bases."
    examples:
      - "代码模型"
      - "视频/图像生成"
      - "行业大模型"
companies:
  - openai
  - anthropic
  - google
  - meta
  - xai
  - deepseek
  - alibaba
  - bytedance
  - zhipu
  - moonshot
  - minimax
  - mistral
  - baidu
  - tencent
  - huawei
  - sensetime
  - modelbest
  - kunlun
  - zeroone
  - baichuan
  - stability
  - black-forest-labs
  - midjourney
  - runway
  - luma
relatedTopics:
  - large-language-models
  - open-source-models
  - china-ai
  - reasoning-models
  - multimodal-ai
relatedEvents:
  - gpt-3
  - chatgpt-launch
  - llama
  - deepseek-r1
  - qwen
  - claude
relatedConcepts:
  - llm
  - pretraining
  - rlhf
  - open-weight
slug: foundation-models
---
