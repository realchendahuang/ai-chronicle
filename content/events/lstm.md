---
id: lstm
title: LSTM 长短期记忆网络
titleEn: LSTM introduces long short-term memory
subtitle: 门控记忆单元缓解循环网络的长程依赖困难
subtitleEn: Gated memory cells ease long-range dependency problems in recurrent nets
date: '1997'
datePrecision: year
importance: A
eventType: [paper]
topics: [neural-networks, deep-learning, natural-language-processing]
companies: []
models: []
products: []
papers: [long-short-term-memory]
people: [sepp-hochreiter, juergen-schmidhuber]
concepts: [neural-network]
summary: Sepp Hochreiter 与 Jürgen Schmidhuber 提出 LSTM，用恒定误差传送与门控记忆单元缓解循环网络训练中的梯度消失，使较长序列上的信用分配更可行。
summaryEn: Sepp Hochreiter and Jürgen Schmidhuber proposed LSTM, using constant error flow and gated memory cells to ease vanishing gradients in recurrent nets and make credit assignment over longer sequences more practical.
background: 循环神经网络理论上可以跨时间步保存信息，但标准训练中误差信号常沿时间急剧衰减或爆炸，长距离依赖难以学稳。
backgroundEn: Recurrent nets can store information across time steps in principle, but in standard training error signals often decay or explode over time, making long-range dependencies hard to learn reliably.
whatHappened: 1997 年 Neural Computation 发表 LSTM 论文。单元内设可读写的记忆状态，并以门控调节写入与读出，使误差能沿“恒定误差传送”路径更稳定地跨步传播。
whatHappenedEn: The 1997 Neural Computation paper introduced LSTM. Cells hold a readable and writable memory state, with gates controlling write and readout so error can travel more stably across steps along a constant-error path.
whyImportant: LSTM 成为语音、翻译与序列建模的常用循环组件，并为后来的 Seq2Seq 等架构提供可训练的长序列骨干，直到 Transformer 在许多任务上取而代之。
whyImportantEn: LSTM became a standard recurrent block for speech, translation, and sequence modeling, and supplied a trainable long-sequence backbone for architectures such as Seq2Seq until Transformers displaced it on many tasks.
impact:
  developer: 序列任务可以用可训练的记忆单元处理更长上下文，而不必完全依赖手工特征窗口。
  industry: 语音识别与神经机器翻译等产品栈长期依赖 LSTM 类循环模块。
impactEn:
  developer: Sequence tasks could use trainable memory cells for longer context instead of relying only on hand-crafted windows.
  industry: Speech recognition and neural machine translation stacks relied on LSTM-style recurrent modules for years.
beforeAfter:
  before: 标准 RNN 在长序列上训练困难，长程依赖常学不稳。
  after: 门控记忆单元使较长时序建模成为可落地的默认选择之一。
beforeAfterEn:
  before: Standard RNNs were hard to train on long sequences, and long-range dependencies were often unstable to learn.
  after: Gated memory cells made longer temporal modeling a practical default option.
relatedEvents: [backpropagation, seq2seq, transformer]
visual:
  src: /assets/events/lstm.webp
  width: 1280
  height: 720
  alt: "档案图纸风格：蜿蜒铁轨上的蓝色车厢序列与一扇记住过去车辆的闸门"
  altEn: "Archival diagram of blue rail cars on a winding track with a memory gate"
  caption: "AI Chronicle 原创插图：LSTM 用门控在长序列里选择性地留下与忘记。"
  captionEn: "Original illustration by AI Chronicle: LSTM uses gates to keep and forget along long sequences."
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial illustration for LSTM neural network history, 1997 academic era. Abstract train cars on a winding track with a memory gate, parchment technical drawing, muted blues, no text no logos, 16:9"
sources:
  - title: Long Short-Term Memory
    url: https://direct.mit.edu/neco/article/9/8/1735/6109/Long-Short-Term-Memory
    publisher: Neural Computation
    type: paper
  - title: Long Short-Term Memory (open access PDF via Schmidhuber)
    url: https://www.bioinf.jku.at/publications/older/2604.pdf
    publisher: JKU / authors
    type: paper
status: verified
slug: lstm
---
