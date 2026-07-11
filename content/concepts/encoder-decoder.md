---
id: encoder-decoder
title: 编码器—解码器（Encoder–Decoder）
fullName: Encoder–Decoder Architecture
difficulty: intermediate
oneLiner: 先用编码器把输入压成表示，再用解码器逐步生成输出的经典序列架构。
beginnerExplanation: 机器翻译等任务需要“读完整句再写出另一句”。编码器处理源序列，解码器在生成目标序列时查询编码器信息（常配合注意力）。Seq2Seq 把它带进主流；Transformer 也保留了编码器—解码器形态，同时衍生出仅编码器（如 BERT）与仅解码器（如 GPT）变体。
whyItMatters: 这一结构统一了多种序列到序列问题，是现代 NLP 架构演化的关键节点。
relatedEvents:
  - seq2seq
  - transformer
relatedConcepts:
  - attention
  - transformer
  - autoregressive
  - nlp
commonMisunderstandings:
  - 并非所有 Transformer 都同时有编码器与解码器；GPT 类是解码器为主。
  - 编码器—解码器不等于必须用 RNN；自注意力同样可实现两端。
slug: encoder-decoder
---
