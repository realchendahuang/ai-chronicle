---
id: word2vec
title: Word2Vec 发布
subtitle: 用简单预测任务高效学习大规模词向量
subtitleEn: Simple prediction objectives learn useful word vectors at scale
date: '2013'
datePrecision: year
importance: A
eventType:
  - paper
topics:
  - nlp
  - deep-learning
companies:
  - google
people:
  - tomas-mikolov
concepts:
  - word-embedding
  - vector-representation
  - nlp
summary: Google 团队发布 Word2Vec 的 CBOW 与 Skip-gram 方法，用局部上下文预测任务在数十亿词语料上快速学习稠密词向量。
summaryEn: Google researchers introduced the CBOW and Skip-gram Word2Vec methods, using local-context prediction to learn dense word vectors efficiently from billions of words.
background: One-hot 表示把每个词看成互不相关的独立符号，早期神经语言模型能学习嵌入，但训练大词表和海量语料的成本很高。
backgroundEn: One-hot representations treated every word as unrelated, while early neural language models learned embeddings too slowly for very large vocabularies and corpora.
whatHappened: CBOW 根据周围词预测中心词，Skip-gram 反过来根据中心词预测上下文。负采样和分层 softmax 降低计算量。向量出现可解释的相似度和类比结构，但并不等于可靠的符号运算。
whatHappenedEn: CBOW predicted a center word from context, while Skip-gram predicted context from the center. Negative sampling and hierarchical softmax reduced computation. The vectors showed interpretable similarities and analogies without becoming reliable symbolic arithmetic.
whyImportant: 词向量成为搜索、分类和神经网络输入的通用部件，也让研究者清楚看到训练语料中的社会偏差会进入表示本身。后来的上下文化模型进一步解决一词多义问题。
whyImportantEn: Word vectors became a common component for search, classification, and neural-network input and made it clear that social bias in training text entered the representation itself. Contextual models later addressed words with multiple meanings.
beforeAfter:
  before: NLP 主要依赖词袋模型和 one-hot 编码，无法捕捉语义关系。
  after: 词向量成为 NLP 的基础表示方法，为后续的 Transformer 时代打下基础。
relatedEvents:
  - transformer
  - gpt-1
  - bert
visual:
  src: /assets/events/word2vec.webp
  width: 1800
  height: 1012
  alt: Word2Vec 原始论文《向量空间中词表示的高效估计》首页
  altEn: Title page of the original Word2Vec paper, Efficient Estimation of Word Representations in Vector Space
  caption: 2013 年 Word2Vec 论文首页；标题把重点放在“高效估计”，对应其为十亿词级训练削减计算开销的设计。
  captionEn: The 2013 Word2Vec title page emphasizes efficient estimation, matching the paper's effort to make billion-word training computationally practical.
  credit: Tomas Mikolov, Kai Chen, Greg Corrado, Jeffrey Dean
  sourceUrl: https://arxiv.org/abs/1301.3781
  rights: official-editorial
sources:
  - title: Efficient Estimation of Word Representations in Vector Space
    url: https://arxiv.org/abs/1301.3781
    publisher: arXiv
    type: paper
status: verified
slug: word2vec
---
