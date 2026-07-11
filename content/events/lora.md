---
id: lora
title: LoRA 提出大模型低秩适配
titleEn: LoRA proposes low-rank adaptation of large models
subtitle: 冻结主干、只训练低秩旁路，微调成本骤降
subtitleEn: Freeze the backbone, train low-rank side paths, and cut fine-tuning cost
date: '2021-06-17'
datePrecision: day
importance: A
eventType: [paper]
topics: [large-language-models, model-efficiency]
companies: [microsoft]
concepts: [llm, transformer]
papers: [lora]
summary: 微软研究者提出 LoRA：冻结预训练权重，在 Transformer 层注入可训练的低秩分解矩阵。相对全量微调 GPT-3 175B，论文报告可训练参数约降一万倍、显存约降三倍，合并后不增加推理延迟。
summaryEn: "Microsoft researchers proposed LoRA: freeze pretrained weights and inject trainable low-rank factorized matrices into Transformer layers. Versus full fine-tuning of GPT-3 175B, they reported roughly 10,000× fewer trainable parameters, about 3× less GPU memory, and no added inference latency after merging."
background: GPT-3 级模型全量微调要为每个下游任务保存一整份 175B 参数副本，存储与部署成本高。Adapter 等方法虽减少可训练参数，但常在推理时增加深度与延迟。
backgroundEn: Fully fine-tuning GPT-3-class models meant storing a full 175B-parameter copy per task, costly to store and serve. Adapters cut trainable parameters but often added depth and latency at inference.
whatHappened: LoRA 把权重更新写成低秩乘积 \(BA\)，只优化小矩阵；推理时可合并回原权重。作者在 RoBERTa、DeBERTa、GPT-2 与 GPT-3 上验证质量与吞吐，并开源 PyTorch 集成包。
whatHappenedEn: LoRA represents weight updates as a low-rank product \(BA\) and optimizes only the small factors; at inference they can be merged into the base weights. Authors validated quality and throughput on RoBERTa, DeBERTa, GPT-2, and GPT-3 and released a PyTorch integration package.
whyImportant: 它把“一人一任务一份全量权重”改写成“共享主干 + 可插拔适配”，成为开放权重生态中风格/角色微调与消费级 GPU 定制的默认工具之一。
whyImportantEn: It rewrote “one full weight copy per task” as “shared backbone plus swappable adapters,” becoming a default tool for style and character fine-tunes and consumer-GPU customization in the open-weight ecosystem.
impact:
  developer: 小团队可用很少显存为领域或角色训练适配器，并在部署时切换。
  industry: 参数高效微调成为产品线与模型社区的标准基础设施。
impactEn:
  developer: Small teams could train domain or character adapters on limited VRAM and swap them at deploy time.
  industry: Parameter-efficient fine-tuning became standard infrastructure for product lines and model communities.
beforeAfter:
  before: 大模型定制往往意味着全量微调或高延迟适配模块。
  after: 低秩旁路让适配像补丁一样分发、合并与组合。
beforeAfterEn:
  before: Customizing large models usually meant full fine-tunes or high-latency adapter modules.
  after: Low-rank side paths made adaptation distribute, merge, and compose like patches.
relatedEvents: [gpt-3, instructgpt, llama]
visual:
  src: /assets/events/lora.webp
  width: 1280
  height: 720
  alt: "巨大神经网络旁插入一张小的低秩适配卡"
  altEn: "A small low-rank adapter card plugging into a vast neural lattice"
  caption: "AI Chronicle 原创插图：LoRA 用低秩旁路降低大模型微调成本。"
  captionEn: "Original illustration by AI Chronicle: LoRA cuts fine-tuning cost with low-rank side paths."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for LoRA adapter card on neural lattice, cool blues, no text no logos, 16:9"
sources:
  - title: 'LoRA: Low-Rank Adaptation of Large Language Models'
    url: https://arxiv.org/abs/2106.09685
    publisher: arXiv
    type: paper
  - title: microsoft/LoRA
    url: https://github.com/microsoft/LoRA
    publisher: Microsoft
    type: official
status: verified
slug: lora
---
