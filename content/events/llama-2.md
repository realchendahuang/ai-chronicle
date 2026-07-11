---
id: llama-2
title: Meta 发布 Llama 2 开放权重
titleEn: Meta releases Llama 2 open weights
subtitle: 研究与商用可用的权重，但仍是带条款的社区许可
subtitleEn: Weights free for research and commercial use—under a community license, not OSI open source
date: '2023-07-18'
datePrecision: day
importance: A
eventType: [model, open-source]
topics: [open-source-models, large-language-models]
companies: [meta]
models: [llama-2]
concepts: [open-weight, llm, rlhf]
summary: Meta 发布 Llama 2 预训练与对话微调权重，参数规模 7B、13B、70B，并宣布研究与商业用途免费可用。许可为 Llama 2 社区许可（含可接受使用政策与月活门槛等附加条款），不是无限制的 OSI 开源软件许可；微软为优先云合作方。
summaryEn: Meta released Llama 2 pretrained and chat fine-tuned weights at 7B, 13B, and 70B, free for research and commercial use. Terms are the Llama 2 Community License with an acceptable-use policy and additional limits such as a monthly-active-user threshold—not unrestricted OSI open-source software. Microsoft is the preferred cloud partner.
background: 第一代 LLaMA 以非商业研究许可分发，权重外泄后社区已形成量化与微调工具链，但企业产品线仍缺清晰的商用路径。闭源 API 与“可下载但不可商用”之间需要中间档。
backgroundEn: First-generation LLaMA shipped under noncommercial research terms; after the leak the community built quantization and fine-tune toolchains, but product teams still lacked a clear commercial path. The gap between closed APIs and “downloadable but noncommercial” needed a middle tier.
whatHappened: Llama 2 同时提供基础与 Chat 变体，论文说明更长训练、强化安全微调与红队流程。权重经申请获取；云厂商上架托管。条款禁止用输出改进其他大模型等用途，超大规模商用另需授权。
whatHappenedEn: Llama 2 shipped base and Chat variants; the paper described longer training, stronger safety fine-tuning, and red-teaming. Weights required access requests; clouds hosted them. Terms restrict uses such as improving other LLMs with outputs, and very large commercial deployments need further licensing.
whyImportant: 它把“开放权重可进产品合同”推进主流，同时迫使行业区分开放权重、开源代码与 OSI 开源许可。企业私有部署与开源社区微调因此共用同一代基础检查点。
whyImportantEn: It moved “open weights that can enter product contracts” into the mainstream while forcing clearer distinctions among open weights, open code, and OSI licenses. Enterprise private deploy and community fine-tunes shared the same generation of base checkpoints.
impact:
  developer: 可在合规前提下私有部署与微调对话模型，不必默认走封闭 API。
  industry: Meta 成为开放权重供给的核心厂商之一；许可文本进入法务标准审查清单。
impactEn:
  developer: Teams could privately deploy and fine-tune chat models under compliance review instead of defaulting to closed APIs.
  industry: Meta became a core open-weight supplier; license text entered standard legal review.
beforeAfter:
  before: 高能力开放权重多卡在研究许可或泄漏分发。
  after: 带商用条款的开放权重成为企业与社区的共同底座。
beforeAfterEn:
  before: Capable open weights were mostly research-licensed or leak-distributed.
  after: Open weights with commercial terms became a shared base for enterprises and communities.
relatedEvents: [llama, mistral, qwen, llama-4]
visual:
  src: /assets/events/llama-2.webp
  width: 1280
  height: 720
  alt: "打开的木箱分发权重砖块给各地开发者工位"
  altEn: "Open crate of weight blocks shared across many developer desks"
  caption: "AI Chronicle 原创插图：Llama 2 把可商用的开放权重推到更广的开发者桌上。"
  captionEn: "Original illustration by AI Chronicle: Llama 2 put commercially usable open weights on more developer desks."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for Llama 2 open weights, crate shared across developer desks, warm cooperative scene, no logos, 16:9"
sources:
  - title: Meta and Microsoft Introduce the Next Generation of Llama
    url: https://ai.meta.com/blog/llama-2/
    publisher: Meta
    type: official
  - title: 'Llama 2: Open Foundation and Fine-Tuned Chat Models'
    url: https://arxiv.org/abs/2307.09288
    publisher: arXiv
    type: paper
status: verified
slug: llama-2
---
