---
id: synthetic-data
title: 合成数据
fullName: Synthetic Data
difficulty: intermediate
oneLiner: 由模型或仿真生成、用于训练与评估的数据，用来补足真实数据的稀缺、敏感或标注成本。
beginnerExplanation: 真实数据不够、太贵或不方便用时，可以用模型先“造”一批看起来像真的样本来练下一个模型——这就是合成数据。
technicalExplanation: 常见来源包括生成模型采样、仿真器、自我对弈与教师模型蒸馏轨迹。质量取决于覆盖度、偏差与与真实分布的差距；也用于隐私保护场景。
whyItMatters: 它改变了扩展定律的数据侧假设，也带来合成污染、评估虚高与版权争议。
relatedEvents:
  - openai-o1
  - deepseek-r1
relatedConcepts:
  - distillation
  - pretraining
  - reinforcement-learning
commonMisunderstandings:
  - 合成数据可以完全替代真实数据
  - 越多合成越好
  - 合成数据没有偏见
slug: synthetic-data
---
