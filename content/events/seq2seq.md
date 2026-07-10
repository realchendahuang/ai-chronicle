---
id: seq2seq
title: Seq2Seq 统一可变长度序列转换
titleEn: Seq2Seq unifies variable-length sequence conversion
subtitle: 编码器与解码器把翻译变成端到端学习问题
subtitleEn: An encoder and decoder turn translation into an end-to-end learning problem
date: '2014-09-10'
datePrecision: day
importance: A
eventType: [paper]
topics: [natural-language-processing, deep-learning]
companies: [google]
papers: [sequence-to-sequence-learning]
concepts: [encoder-decoder, neural-network]
summary: Google 研究者提出用两个多层 LSTM 将输入序列编码成向量，再逐步生成输出序列，并在机器翻译上取得有竞争力的结果。
summaryEn: Google researchers used two multilayer LSTMs to encode an input sequence into a vector and generate an output sequence, producing competitive machine-translation results.
background: 神经网络已经能处理固定标签任务，但翻译的输入和输出长度都不固定，传统系统还依赖分词、短语表、对齐和语言模型组成的复杂流水线。
backgroundEn: Neural networks handled fixed-label tasks, but translation has variable-length inputs and outputs. Traditional systems still relied on complex pipelines of tokenization, phrase tables, alignment, and language models.
whatHappened: 编码器读取源句并形成内部表示，解码器根据表示逐词生成目标句。论文还发现反转源句顺序能缩短依赖距离，改善优化效果。
whatHappenedEn: The encoder read the source sentence into an internal representation, and the decoder generated the target one token at a time. Reversing source-word order shortened dependency paths and improved optimization.
whyImportant: Seq2Seq 把翻译、摘要和对话等任务放进同一个“输入序列到输出序列”框架。随后加入注意力机制，最终通向 Transformer。
whyImportantEn: Seq2Seq placed translation, summarization, and dialogue in one input-to-output framework. Attention was added soon after, creating a direct path toward the Transformer.
impact:
  developer: 自然语言任务开始从人工拼接的模块转向端到端训练的通用结构。
  industry: 神经机器翻译逐步替代统计机器翻译，显著简化产品技术栈。
impactEn:
  developer: Language systems began moving from hand-assembled modules to general end-to-end trainable structures.
  industry: Neural machine translation gradually replaced statistical pipelines and simplified production stacks.
beforeAfter:
  before: 翻译系统依赖多个独立训练和调参的组件。
  after: 一个神经网络可以直接学习从源序列到目标序列的映射。
beforeAfterEn:
  before: Translation depended on multiple separately trained and tuned components.
  after: A neural network could learn the mapping from source sequence to target sequence directly.
relatedEvents: [word2vec, transformer]
sources:
  - title: Sequence to Sequence Learning with Neural Networks
    url: https://arxiv.org/abs/1409.3215
    publisher: arXiv
    type: paper
status: verified
slug: seq2seq
---
