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
summary: Ian Goodfellow 等人提出生成对抗网络，让生成器制造样本、判别器区分真假，两者通过同一个对抗目标训练。
summaryEn: Ian Goodfellow and colleagues introduced generative adversarial networks, training a generator to create samples and a discriminator to distinguish real from generated data.
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
sources:
  - title: Generative Adversarial Nets
    url: https://arxiv.org/abs/1406.2661
    publisher: arXiv
    type: paper
status: verified
slug: gan
---
