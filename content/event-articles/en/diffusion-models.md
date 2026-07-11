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

First ruin an image with noise. Then ask, at each step: what is the noise here?

Ho, Jain, and Abbeel’s 2020 *Denoising Diffusion Probabilistic Models* (DDPM) did not invent the word “diffusion.” It turned a clean probabilistic process into an image-generation recipe practical enough for the moment. The forward process is fixed: over \(T\) steps (commonly \(T=1000\) in the paper), Gaussian noise is added to an image on a preset variance schedule until the sample approaches isotropic noise. The reverse process is learned: a neural network—a U-Net in the paper—estimates the noise (or an equivalent mean) at each step and iterates from pure noise back to an image. The crucial simplification is the training target. Instead of optimizing an intractable marginal likelihood directly, one can regress to the noise with mean squared error at each step—tightly linked to a variational bound, yet as stable to implement as ordinary regression.

Adversarial generators could push sharpness high and leave stability outside the recipe; this work tried to write stability back into the loss. Forward schedules, if poorly chosen, make reverse learning hard; the paper’s timestep and variance choices became defaults later improved by cosine schedules and faster samplers. U-Net skip connections fit image denoising almost naturally, so reproducers did not first have to keep a pair of adversarial networks in balance.

Numbers on CIFAR-10 bought the line a ticket into mainstream conversation. The paper reported a FID of about 3.17 and an Inception Score of about 9.46, competitive with strong GAN baselines of the period; sample quality was no longer diffusion’s soft spot. Training needed no careful discriminator–generator sync, and the classic mode-collapse story receded—at the cost of hundreds to a thousand network forwards per sample, slower than single-pass GANs. Later accelerated samplers, distillation, and latent-space diffusion all repay that compute bill while keeping the iterative-denoising skeleton.

Stepwise denoising makes intermediate states visualizable, schedules editable, and conditions injectable—an operational surface single-pass generation rarely offers. Once generation is a inspectable trajectory, text conditioning, classifier guidance, and latent compression have somewhere to attach. For the research ecology, the method lowered the floor for high-quality image generation: implementing a noise-regression net is less likely to fail completely on reproduction than balancing two adversaries. Slow sampling is listed as a cost, so acceleration becomes a legitimate research program rather than an insult to the method. Systems such as DALL·E 2, Imagen, and Stable Diffusion later share an iterative-denoising skeleton even when noise schedules, backbones, and conditioners differ—those products are later events, not a trailer written into the 2020 paper.

The center stage of generative modeling shifted from adversarial games toward stepwise recovery. GANs did not vanish overnight; the default implementation path changed: regress noise first, sample iteratively, then talk about conditioning and speed. Later work often focuses on compressing a thousand steps into dozens, and forgets that without first writing generation as a checkable trajectory, step reduction has no clear objective. The paper’s historical gift is rewriting the problem from “how do we keep two nets from destroying each other” into “how do we predict this step’s noise more accurately.” After that rewrite, acceleration, conditioning, and latent space sit on one road.

DDPM delivered a trajectory you can inspect, not only attractive endpoints. A thousand steps are both a time tax and the operational surface itself.
