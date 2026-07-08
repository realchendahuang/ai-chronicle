---
id: transformer
title: Transformer 架构论文发表
subtitle: 改变一切的那篇论文——Attention Is All You Need
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
summary: Google 团队发表了 "Attention Is All You Need" 论文，提出了 Transformer 架构，彻底改变了自然语言处理，并为大语言模型时代奠定了基础。
whatHappened: 论文提出了一种全新的神经网络架构，完全基于注意力机制，不依赖 RNN 或 CNN。Transformer 通过自注意力机制并行处理序列中的所有位置，极大提升了训练效率和长距离依赖建模能力。
whyImportant: Transformer 是现代 AI 最重要的架构创新。它直接催生了 BERT、GPT 系列、T5、Llama、Claude 等几乎所有主流大语言模型。ChatGPT 的底层架构就是 Transformer 的 decoder。
impact:
  developer: 彻底改变了 NLP 的研究和实践范式。
  industry: 成为所有主流大语言模型的基础架构。
beforeAfter:
  before: NLP 依赖 RNN/LSTM 进行序列建模，训练慢、难并行化、长序列效果差。
  after: Transformer 成为 NLP 和后续多模态 AI 的统一基础架构。
relatedEvents:
  - bert
  - gpt-1
  - gpt-3
  - chatgpt-launch
  - gpt-4-release
status: verified
slug: transformer
---
