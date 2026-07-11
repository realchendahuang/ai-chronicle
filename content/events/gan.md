---
id: gan
title: GAN 提出对抗式生成训练
titleEn: GAN introduces adversarial generative training
subtitle: 生成器与判别器在竞争中共同提高
subtitleEn: A generator and discriminator improve through competition
date: '2014-06-10'
datePrecision: day
importance: A
eventType: [paper]
topics: [deep-learning, multimodal-ai]
papers: [generative-adversarial-nets]
people: [ian-goodfellow]
concepts: [deep-learning, generative-model]
summary: Ian Goodfellow 等人提出生成对抗网络，以同一个 minimax 目标训练生成器与判别器。论文在 MNIST、Toronto Face Database 和 CIFAR-10 上展示结果，并指出两部分训练需要保持同步。
summaryEn: Ian Goodfellow and colleagues introduced generative adversarial networks, training a generator and discriminator through one minimax objective. Experiments used MNIST, the Toronto Face Database, and CIFAR-10, and the paper noted the need to keep the two learners synchronized.
background: 生成模型通常需要明确写出概率分布或使用近似推断，训练和采样都可能复杂。研究者需要一种能直接学习数据分布的替代方法。
backgroundEn: Generative models often required explicit probability distributions or approximate inference, making training and sampling difficult. Researchers wanted a more direct way to learn data distributions.
whatHappened: 生成器把随机噪声映射成样本，判别器输出样本来自真实数据的概率。训练目标形成二人零和博弈，理想状态下生成分布逼近真实分布。
whatHappenedEn: The generator mapped random noise to samples, while the discriminator estimated whether a sample came from real data. Their objective formed a two-player minimax game whose ideal equilibrium matched the data distribution.
whyImportant: GAN 在图像生成、编辑和风格迁移上快速取得清晰结果，开启了现代生成视觉浪潮；训练不稳定和模式崩塌也推动了大量后续研究。
whyImportantEn: GANs quickly produced sharp results in image generation, editing, and style transfer, starting the modern generative-vision wave. Instability and mode collapse also drove extensive follow-up work.
impact:
  developer: 生成模型从研究小众变成计算机视觉的重要工具箱。
  product: 人脸合成、图像编辑与深度伪造开始进入实际应用和公共讨论。
impactEn:
  developer: Generative models moved from a niche topic into the main computer-vision toolbox.
  product: Face synthesis, image editing, and deepfakes entered practical products and public debate.
beforeAfter:
  before: 高质量图像生成仍受概率建模和推断方法限制。
  after: 对抗训练成为一条独立而活跃的生成模型路线。
beforeAfterEn:
  before: High-quality image generation remained constrained by probabilistic modeling and inference methods.
  after: Adversarial training became a distinct and highly active generative-model path.
relatedEvents: [alexnet, diffusion-models, stable-diffusion]
visual:
  src: /assets/events/gan.webp
  width: 1800
  height: 1012
  alt: GAN 原始论文中交替更新判别器和生成器的训练算法
  altEn: Training algorithm from the original GAN paper alternating discriminator and generator updates
  caption: 原始论文的算法 1：先更新判别器，再更新生成器；两者的同步困难后来成为 GAN 训练研究的核心问题之一。
  captionEn: Algorithm 1 in the original paper updates the discriminator before the generator; keeping the two learners in balance became a central GAN training problem.
  credit: Ian Goodfellow et al.
  sourceUrl: https://arxiv.org/abs/1406.2661
  rights: official-editorial
sources:
  - title: Generative Adversarial Nets
    url: https://arxiv.org/abs/1406.2661
    publisher: arXiv
    type: paper
status: verified
slug: gan
---
