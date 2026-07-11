---
eventId: diffusion-models
form: training-objective anatomy
narrativeCenter: how DDPM turned noise prediction into a stable objective and recovered images from Gaussian noise in about 1,000 reverse steps
emotionalSource: the tautness of adversarial training replaced by a stepwise probabilistic denoising path
avoid:
  - writing this as a prequel to Stable Diffusion
  - erasing earlier diffusion work and contemporaneous GANs
  - inflating FID into perceptual perfection
---

Ho, Jain, and Abbeel’s 2020 *Denoising Diffusion Probabilistic Models* (DDPM) did not invent the word “diffusion.” It turned a clean probabilistic process into an image-generation recipe practical enough for the moment.

The forward process is fixed: over \(T\) steps (commonly \(T=1000\) in the paper), Gaussian noise is added to an image on a preset variance schedule until the sample approaches isotropic noise. The reverse process is learned: a neural network—a U-Net in the paper—estimates the noise (or an equivalent mean) at each step and iterates from pure noise back to an image. The crucial simplification is the training target. Instead of optimizing an intractable marginal likelihood directly, one can regress to the noise with mean squared error at each step—tightly linked to a variational bound, yet as stable to implement as ordinary regression.

Numbers on CIFAR-10 bought the line a ticket into mainstream conversation. The paper reported a FID of about 3.17 and an Inception Score of about 9.46, competitive with strong GAN baselines of the period; sample quality was no longer diffusion’s soft spot. Training needed no careful discriminator–generator sync, and the classic mode-collapse story receded—at the cost of hundreds to a thousand network forwards per sample, slower than single-pass GANs. Later accelerated samplers, distillation, and latent-space diffusion all repay that compute bill.

DDPM sits between theoretical friendliness and engineering use. It keeps a stepwise noising/denoising probabilistic story while modern convolutional backbones and a simple loss make experiments reproducible. Conditional generation, classifier guidance, text conditioning, and latent compression stacked on quickly afterward. Systems such as DALL·E 2, Imagen, and Stable Diffusion share an iterative-denoising skeleton even when noise schedules, backbones, and conditioners differ.

Adversarial training once pushed sharpness high and left stability outside the recipe. Diffusion wrote stability back into the loss: each step asks only “what is the noise?”—a local question, a sober optimization. The path from noise to image is long. That length is exactly what made generation describable again, schedulable, and easy to condition.

Forward schedules, if poorly chosen, make reverse learning hard; the paper’s timestep and variance choices became defaults later improved by cosine schedules and faster samplers. U-Net skip connections fit image denoising almost naturally. Accelerating a thousand steps became a legitimate research program rather than an insult to the method. Once generation is a inspectable trajectory, conditioning and latent compression have somewhere to attach. DDPM delivered the trajectory, not only attractive endpoints on CIFAR.
