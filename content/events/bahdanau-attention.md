---
id: bahdanau-attention
title: 注意力机制进入神经机器翻译
titleEn: Attention enters neural machine translation
subtitle: 解码器每一步动态回看源句位置，松开固定向量瓶颈
subtitleEn: The decoder re-reads source positions at each step, relaxing the fixed-vector bottleneck
date: '2015'
datePrecision: year
importance: A
eventType: [paper]
topics: [natural-language-processing, deep-learning]
companies: []
models: []
products: []
papers: [neural-machine-translation-align-translate]
people: [dzmitry-bahdanau, kyunghyun-cho, yoshua-bengio]
concepts: [attention]
summary: Bahdanau、Cho 与 Bengio 提出在神经机器翻译中联合学习对齐与翻译：解码器每生成一个词，都对编码器隐状态做软注意力加权，而不是只依赖一个固定句向量。
summaryEn: "Bahdanau, Cho, and Bengio proposed jointly learning to align and translate in neural MT: at each generation step the decoder soft-attends over encoder states instead of relying on one fixed sentence vector."
background: Seq2Seq 把整句压进编码器末状态，长句信息易丢失；统计系统仍有显式对齐，但端到端神经网络缺少可学习的“看哪里”机制。
backgroundEn: Seq2Seq compressed whole sentences into the encoder’s final state, and long sentences lost information easily. Statistical systems still used explicit alignment, but end-to-end nets lacked a learnable “where to look” mechanism.
whatHappened: 论文（arXiv 2014，ICLR 2015）在编码器—解码器上加入注意力：每一步根据当前解码状态计算源位置权重，再形成上下文向量参与预测下一词。对齐与翻译在同一目标下联合训练。
whatHappenedEn: "The paper (arXiv 2014, ICLR 2015) added attention to the encoder–decoder: each step weights source positions from the current decoder state, forms a context vector, and predicts the next word. Alignment and translation train under one objective."
whyImportant: 软注意力成为序列模型的标准组件，直接铺向自注意力与 Transformer；“对齐可视化”也改变了研究者检查翻译模型的方式。
whyImportantEn: Soft attention became a standard sequence-model component and led toward self-attention and the Transformer; alignment visualizations also changed how researchers inspect translation models.
impact:
  developer: 解码时可动态检索源侧表示，长句与词对齐问题有了可微接口。
  industry: 神经机器翻译质量提升，注意力图成为分析与调试工具。
impactEn:
  developer: Decoding could dynamically retrieve source representations, giving a differentiable handle on long sentences and word alignment.
  industry: Neural MT quality improved, and attention maps became analysis and debugging tools.
beforeAfter:
  before: 编码器末状态必须携带整句信息，解码器无法按需回看源词。
  after: 每一步生成都可以对源句做加权读取，对齐成为可学习部分。
beforeAfterEn:
  before: The encoder’s final state had to carry the whole sentence; the decoder could not re-read source words on demand.
  after: Each generation step could weighted-read the source, and alignment became a learnable part of the model.
relatedEvents: [seq2seq, transformer, word2vec]
visual:
  src: /assets/events/bahdanau-attention.webp
  width: 1280
  height: 720
  alt: Yoshua Bengio 2019 年肖像
  altEn: Portrait of Yoshua Bengio in 2019
  caption: Yoshua Bengio。2014–2015 年与 Bahdanau、Cho 合作的对齐与翻译工作，把注意力写成可学习的软对齐。
  captionEn: Yoshua Bengio. With Bahdanau and Cho in 2014–2015, alignment-and-translation work made attention a learnable soft alignment.
  credit: Maryse Boyce, CC BY 4.0, via Wikimedia Commons
  sourceUrl: https://commons.wikimedia.org/wiki/File:Yoshua_Bengio_2019.jpg
  rights: cc
sources:
  - title: Neural Machine Translation by Jointly Learning to Align and Translate
    url: https://arxiv.org/abs/1409.0473
    publisher: arXiv
    type: paper
  - title: ICLR 2015 conference page (align and translate)
    url: https://iclr.cc/archive/www/doku.php%3Fid=iclr2015:accepted-main.html
    publisher: ICLR
    type: archive
status: verified
slug: bahdanau-attention
---
