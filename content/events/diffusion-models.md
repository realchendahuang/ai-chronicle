---
id: diffusion-models
title: DDPM 让扩散模型成为实用生成路线
titleEn: DDPM makes diffusion a practical generative path
subtitle: 从噪声逐步还原图像，训练更稳定
subtitleEn: Recovering images from noise through a stable iterative process
date: '2020-06-19'
datePrecision: day
importance: A
eventType: [paper]
topics: [deep-learning, multimodal-ai]
papers: [denoising-diffusion-probabilistic-models]
concepts: [diffusion, generative-model]
summary: Ho、Jain 与 Abbeel 提出 Denoising Diffusion Probabilistic Models，用逐步加噪和反向去噪生成高质量图像。
summaryEn: Jonathan Ho, Ajay Jain, and Pieter Abbeel introduced denoising diffusion probabilistic models, generating images through a forward noise process and learned reverse denoising.
background: GAN 能生成锐利图像，但训练容易不稳定并出现模式崩塌。早期扩散模型有清晰概率解释，却在样本质量和计算效率上不够实用。
backgroundEn: GANs produced sharp images but were unstable and prone to mode collapse. Earlier diffusion models had a clear probabilistic interpretation but were not yet practical in quality or efficiency.
whatHappened: 前向过程逐步把数据变成高斯噪声，神经网络学习预测每一步加入的噪声，采样时从随机噪声反向迭代得到图像。
whatHappenedEn: A forward process gradually turned data into Gaussian noise. A neural network learned to predict the noise added at each step, then generated an image by iteratively reversing the process from random noise.
whyImportant: 扩散模型随后在图像质量、条件控制和文本引导上迅速超过 GAN，成为 DALL·E 2、Imagen、Stable Diffusion 和视频生成模型的共同基础。
whyImportantEn: Diffusion models soon surpassed GANs in image quality, conditioning, and text guidance, becoming a shared foundation for DALL·E 2, Imagen, Stable Diffusion, and video generation.
impact:
  developer: 生成图像获得更稳定的训练目标和更灵活的条件控制。
  product: 文生图从研究演示发展成普通用户可以反复控制和编辑的产品能力。
impactEn:
  developer: Image generation gained a more stable training objective and flexible conditioning.
  product: Text-to-image moved from research demonstrations to a controllable, iterative user product.
beforeAfter:
  before: 高质量图像生成主要由 GAN 路线主导。
  after: 扩散模型成为图像和视频生成的主流基础架构。
beforeAfterEn:
  before: GANs dominated high-quality image generation.
  after: Diffusion became the mainstream foundation for image and video generation.
relatedEvents: [gan, stable-diffusion, sora]
sources:
  - title: Denoising Diffusion Probabilistic Models
    url: https://arxiv.org/abs/2006.11239
    publisher: arXiv
    type: paper
status: verified
slug: diffusion-models
---
