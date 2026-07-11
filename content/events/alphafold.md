---
id: alphafold
title: AlphaFold 破解蛋白质结构预测
subtitle: CASP14 上接近实验精度的蛋白质结构预测
subtitleEn: Protein-structure prediction approaches experimental accuracy at CASP14
date: '2020-11-30'
datePrecision: day
importance: A
eventType:
  - paper
  - milestone
topics:
  - deep-learning
  - ai-for-science
companies:
  - google-deepmind
models:
  - alphafold
concepts:
  - protein-folding
  - deep-learning
summary: AlphaFold 2 在 CASP14 盲测的全部目标上取得 92.4 的中位 GDT_TS，许多预测接近实验结构精度。该成绩针对单链蛋白质结构预测，并不等于解决蛋白质动力学、相互作用或所有复合物结构。
summaryEn: AlphaFold 2 achieved a median GDT_TS of 92.4 across all CASP14 targets, with many predictions approaching experimental accuracy. The result concerned single-chain structure prediction, not protein dynamics, interactions, or every class of complex.
background: 蛋白质的氨基酸序列容易读取，三维结构却通常需要 X 射线晶体学、冷冻电镜或核磁共振等昂贵实验。传统计算方法难以在巨大构象空间中稳定找到正确结构。
backgroundEn: Amino-acid sequences are easy to read, but 3D structures usually require expensive experiments such as X-ray crystallography, cryo-EM, or NMR. Traditional computation struggled to search the enormous conformational space reliably.
whatHappened: 模型结合多序列比对、残基对表示和结构模块，直接预测原子坐标与置信度。2021 年代码公开，AlphaFold DB 随后扩展到超过 2 亿个预测结构。它预测静态结构，并不等于完整模拟折叠过程或生物功能。
whatHappenedEn: The model combined multiple-sequence alignments, pair representations, and a structure module to predict atomic coordinates and confidence. Code followed in 2021, and AlphaFold DB expanded beyond 200 million predictions. It predicts structures, not the complete folding process or biological function.
whyImportant: 研究者可以先用预测结构形成假设，再决定哪些实验最值得做。它显著扩大了结构信息的覆盖范围，但药物作用、动态变化和低置信区域仍需要实验验证。
whyImportantEn: Researchers could use predicted structures to form hypotheses before choosing expensive experiments. Coverage expanded dramatically, while drug action, dynamics, and low-confidence regions still required experimental validation.
impact:
  industry: 加速了药物研发和生物科学研究，影响了医药行业。
  developer: 展示了深度学习在科学发现中的巨大潜力。
beforeAfter:
  before: 蛋白质结构主要通过 X 射线晶体学等实验方法确定，耗时数年。
  after: AI 可以在几分钟内预测蛋白质结构，将生物学研究带入新纪元。
relatedEvents:
  - alphago
  - deepmind
visual:
  src: /assets/events/alphafold.webp
  width: 1200
  height: 630
  alt: Google DeepMind 的 AlphaFold 发布主视觉，呈现折叠蛋白质结构
  altEn: Google DeepMind's AlphaFold launch artwork showing a folded protein structure
  caption: Google DeepMind 在 AlphaFold 解决蛋白质结构预测报道中使用的官方主视觉。
  captionEn: Google DeepMind's official lead image for its report on AlphaFold and protein-structure prediction.
  credit: Google DeepMind
  sourceUrl: https://deepmind.google/discover/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/
  rights: official-editorial
sources:
  - title: AlphaFold — a solution to a 50-year-old grand challenge in biology
    url: https://deepmind.google/discover/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/
    publisher: Google DeepMind
    type: official
status: verified
slug: alphafold
---
