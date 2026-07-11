---
id: diffusion
title: 扩散模型（Diffusion）
fullName: Diffusion Model
difficulty: intermediate
oneLiner: 通过学习如何从噪声逐步还原数据来生成图像、音频等内容的一类生成模型。
beginnerExplanation: 训练时把清晰样本一步步加噪，直到接近纯噪声；模型学会预测或去除每一步的噪声。生成时从随机噪声出发，反复去噪，得到新样本。DALL·E 2、Stable Diffusion、许多视频模型都建立在这条路线上。
whyItMatters: 扩散在样本质量与训练稳定性上推动了生成式视觉进入产品级，并成为多模态创作工具的默认骨干之一。
relatedEvents:
  - diffusion-models
  - stable-diffusion
  - sora
  - alphafold-3
relatedConcepts:
  - generative-model
  - multimodal
  - deep-learning
commonMisunderstandings:
  - 扩散不是“从零记住一张图再播放”，而是学习噪声到数据的迭代映射。
  - 文生图产品里的提示词与安全过滤属于系统层，不等于扩散方程本身。
slug: diffusion
---
