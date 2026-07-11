---
id: bidirectional
title: 双向性（Bidirectional）
fullName: Bidirectional Context Modeling
difficulty: intermediate
oneLiner: 表示或预测某个位置时，同时利用其左侧与右侧的上下文信息。
beginnerExplanation: 阅读理解里，一个词的含义常取决于前后文。双向模型（如 BERT 的编码器自注意力）让每个位置在训练中看见整句上下文；而因果语言模型通常只能看左边，以保证生成时不“偷看未来”。双向性更利于理解与填空式任务。
whyItMatters: 双向上下文是现代预训练编码器强大语言理解能力的关键来源之一。
relatedEvents:
  - bert
relatedConcepts:
  - masked-language-model
  - transformer
  - attention
  - autoregressive
commonMisunderstandings:
  - 双向不等于可以随意泄漏答案；预训练目标与注意力掩码决定可见范围。
  - GPT 类因果模型不是“弱”，而是为自回归生成做了方向性取舍。
slug: bidirectional
---
