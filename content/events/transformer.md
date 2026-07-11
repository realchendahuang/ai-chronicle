---
id: transformer
title: Transformer 架构论文发表
subtitle: 自注意力取代循环结构，序列训练可以大规模并行
subtitleEn: Self-attention replaces recurrence and makes sequence training highly parallel
date: '2017-06-12'
datePrecision: day
importance: S
eventType:
  - paper
topics:
  - large-language-models
  - nlp
  - ai-foundations
companies:
  - google
papers:
  - attention-is-all-you-need
people:
  - ashish-vaswani
concepts:
  - transformer
  - attention
  - self-attention
  - encoder-decoder
summary: Google 研究者在机器翻译论文中提出 Transformer，用自注意力、前馈网络和位置编码构成编码器—解码器，去掉循环和卷积。
summaryEn: Google researchers introduced the Transformer for machine translation, building an encoder-decoder from self-attention, feed-forward layers, and positional encoding without recurrence or convolution.
background: RNN 和 LSTM 必须按时间顺序处理 token，长序列难以并行训练，信息也要经过很长路径才能连接。注意力此前通常只是循环网络上的辅助模块。
backgroundEn: RNNs and LSTMs processed tokens sequentially, limiting parallel training and forcing information through long paths. Attention had usually been an auxiliary module on top of recurrent networks.
whatHappened: 多头自注意力让每个位置直接读取序列中的其他位置，位置编码补回顺序信息。论文在 WMT 翻译任务上以更少训练成本取得当时最佳结果。
whatHappenedEn: Multi-head self-attention let every position read other positions directly, while positional encoding restored order information. The model achieved state-of-the-art WMT translation results with lower training cost.
whyImportant: 架构能在并行硬件上有效扩展，并能拆成仅编码器或仅解码器，随后分别形成 BERT 与 GPT 等路线。注意力的二次复杂度也带来长上下文成本，推动稀疏和线性注意力研究。
whyImportantEn: The architecture scaled efficiently on parallel hardware and could be split into encoder-only or decoder-only forms, leading to families such as BERT and GPT. Quadratic attention cost also created the long-context problem and drove sparse and linear alternatives.
impact:
  developer: 序列模型可以高效并行训练，并复用统一的注意力模块。
  industry: 编码器、解码器和多模态变体成为基础模型常用架构。
impactEn:
  developer: Sequence models could train efficiently in parallel and reuse a shared attention module.
  industry: Encoder, decoder, and multimodal variants became common base-model architectures.
beforeAfter:
  before: NLP 依赖 RNN/LSTM 进行序列建模，训练慢、难并行化、长序列效果差。
  after: Transformer 成为 NLP 和后续多模态 AI 的统一基础架构。
relatedEvents:
  - bahdanau-attention
  - bert
  - gpt-1
  - gpt-3
  - flashattention
  - chatgpt-launch
  - gpt-4-release
visual:
  src: /assets/events/transformer.webp
  width: 1800
  height: 1012
  alt: Transformer 论文中的编码器与解码器架构图
  altEn: Encoder-decoder architecture diagram from the Transformer paper
  caption: 论文图 1：左侧编码器与右侧解码器都堆叠注意力、前馈层、残差连接和归一化，而非只包含注意力。
  captionEn: Figure 1 shows encoder and decoder stacks combining attention with feed-forward layers, residual paths, and normalization—not attention alone.
  credit: Ashish Vaswani et al., Google
  sourceUrl: https://arxiv.org/abs/1706.03762
  rights: official-editorial
sources:
  - title: Attention Is All You Need
    url: https://arxiv.org/abs/1706.03762
    publisher: arXiv
    type: paper
status: verified
slug: transformer
---
