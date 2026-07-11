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
topics:
  - deep-learning
  - multimodal-ai
  - image-generation
  - generative-media
papers: [denoising-diffusion-probabilistic-models]
concepts: [diffusion, generative-model]
summary: Ho、Jain 与 Abbeel 提出 DDPM：训练网络预测逐步加入图像的噪声，再用 1000 步反向过程采样。论文在 CIFAR-10 上报告 3.17 的 FID 和 9.46 的 Inception Score。
summaryEn: Jonathan Ho, Ajay Jain, and Pieter Abbeel introduced DDPM, training a network to predict noise and sampling through a 1,000-step reverse process. The paper reported a 3.17 FID and 9.46 Inception Score on CIFAR-10.
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
visual:
  src: /assets/events/diffusion-models.webp
  width: 1400
  height: 1812
  alt: 《Denoising Diffusion Probabilistic Models》论文首页
  altEn: First page of the paper Denoising Diffusion Probabilistic Models
  caption: DDPM 论文首页；这项工作让扩散模型成为高质量图像生成的实用途径。
  captionEn: The first page of the DDPM paper, which made diffusion a practical route to high-quality image generation.
  credit: Jonathan Ho、Ajay Jain、Pieter Abbeel / arXiv
  sourceUrl: "https://arxiv.org/abs/2006.11239"
  rights: official-editorial
sources:
  - title: Denoising Diffusion Probabilistic Models
    url: "https://arxiv.org/abs/2006.11239"
    publisher: arXiv
    type: paper
status: verified
slug: diffusion-models
---
