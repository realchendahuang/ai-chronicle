---
id: alphafold-3
title: AlphaFold 3 扩展到分子相互作用
titleEn: AlphaFold 3 expands to molecular interactions
subtitle: 预测对象从蛋白质结构扩大到蛋白质、DNA、RNA 与配体复合物
subtitleEn: Prediction expands from protein structure to complexes with DNA, RNA, and ligands
date: '2024-05-08'
datePrecision: day
importance: A
eventType: [paper, model]
topics:
  - ai-for-science
  - deep-learning
companies: [google-deepmind]
models: [alphafold-3]
concepts: [protein-folding, diffusion]
summary: Google DeepMind 与 Isomorphic Labs 发布 AlphaFold 3，用扩散式结构生成预测蛋白质与多类生物分子的联合结构。
summaryEn: Google DeepMind and Isomorphic Labs introduced AlphaFold 3, using diffusion-based structure generation to predict complexes of proteins and other biomolecules.
visual:
  src: /assets/events/alphafold-3.png
  width: 685
  height: 530
  alt: AlphaFold 3 论文图一，展示预测结构、基准结果和模型架构
  altEn: Figure 1 from the AlphaFold 3 paper, showing predicted structures, benchmark results, and the model architecture
  caption: AlphaFold 3 论文图一概览了蛋白质—核酸与蛋白质—配体预测示例、部分基准结果，以及以扩散模块为核心的模型架构。
  captionEn: Figure 1 of the AlphaFold 3 paper summarizes protein–nucleic-acid and protein–ligand examples, selected benchmarks, and the diffusion-based model architecture.
  credit: Abramson et al. / Nature
  sourceUrl: "https://www.nature.com/articles/s41586-024-07487-w/figures/1"
  rights: official-editorial
background: AlphaFold 2 大幅提高单个蛋白质结构预测，但药物发现和细胞机制更关心蛋白质如何与 DNA、RNA、小分子和抗体相互作用。
backgroundEn: AlphaFold 2 greatly improved individual protein-structure prediction, but drug discovery and cell biology depend on interactions among proteins, DNA, RNA, small molecules, and antibodies.
whatHappened: 新模型统一表示多种分子，并用 Pairformer 和扩散模块直接生成三维原子坐标。论文报告其在多类复合物任务上超过专用方法。
whatHappenedEn: The new model represented multiple molecule types in one system and used a Pairformer and diffusion module to generate 3D atomic coordinates. The paper reported gains over specialized methods across several complex types.
whyImportant: AlphaFold 的价值从“查一个蛋白质形状”扩展到研究结合与作用机制，更接近药物设计流程；首发只开放服务器、不开放代码也引发可重复性讨论。
whyImportantEn: AlphaFold moved from looking up one protein shape toward studying binding and mechanism, closer to drug-design workflows. The initial server-only access also raised reproducibility concerns.
impact:
  developer: 生物研究者获得统一预测多类分子复合物的工具。
  industry: AI for Science 进一步进入药物发现的结构假设与候选筛选环节。
impactEn:
  developer: Biology researchers gained one tool for predicting several kinds of molecular complex.
  industry: AI for Science moved further into structural hypotheses and candidate screening for drug discovery.
beforeAfter:
  before: AlphaFold 主要解决蛋白质及部分复合物的结构预测。
  after: 同一模型覆盖更广的生物分子类型和相互作用。
beforeAfterEn:
  before: AlphaFold mainly addressed proteins and some protein complexes.
  after: One model covered a broader set of biomolecules and interactions.
relatedEvents: [alphafold]
sources:
  - title: Accurate structure prediction of biomolecular interactions with AlphaFold 3
    url: "https://www.nature.com/articles/s41586-024-07487-w"
    publisher: Nature
    type: paper
status: verified
slug: alphafold-3
---
