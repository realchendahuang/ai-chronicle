---
eventId: diffusion-models
form: Reverse-process technical narrative
narrativeCenter: Turning a fixed procedure for destroying an image into a learned route for generating one
emotionalSource: A coherent image arriving through a thousand small corrections rather than one dramatic act
avoid:
  - Projecting mature text-to-image products back onto the DDPM paper
  - Crediting one paper with every later diffusion advance
  - Using training stability to conceal slow sampling and weaker likelihood results
---

Begin with a photograph and ruin it by degrees.

At each step, add a little Gaussian noise. Repeat the operation a thousand times. Edges dissolve, textures lose their cause, and the image approaches a sample from a standard normal distribution. This forward chain is fixed in advance; no neural network is needed to carry out the destruction.

The learned part runs against it. A denoising diffusion probabilistic model receives an image at some intermediate noise level and the corresponding timestep, then predicts the noise that was added. Generation starts where destruction ended—with random noise—and applies the learned reverse transition again and again until an image remains.

Because the forward changes are small, the reverse transitions can be modeled as conditional Gaussians. The DDPM paper connected this construction to variational inference, denoising score matching, and sampling procedures related to Langevin dynamics. Yet the practical training objective became almost austere: give a U-Net a noisy image and ask it to estimate the noise.

The simplification carried a choice. Directly optimizing the variational bound produced better coding lengths, while a reweighted objective produced better-looking samples. The latter reduced the emphasis on very low-noise timesteps and changed where the network spent its capacity. With a U-Net augmented by self-attention, the authors reported an Inception Score of 9.46 and FID of 3.17 on unconditional CIFAR-10, and samples on 256-by-256 LSUN that compared favorably with ProgressiveGAN.

This was the threshold the work crossed. Earlier diffusion models had an appealing probabilistic account but had not matched the visual quality of the dominant generative systems. GANs could produce sharp images through a single forward pass, at the cost of an adversarial training process prone to instability and mode collapse. DDPM showed that the slower probabilistic route could no longer be dismissed as elegant but impractical.

Its deficits were equally concrete. Sampling required many network evaluations along the reverse chain. Log-likelihood results lagged other generative models. The experiments were unconditional; no one could type a sentence and ask this model to paint it.

The reverse trajectory offered a different picture of generation. Coarse attributes emerged earlier, fine detail later. Samples branching from the same late intermediate state shared more high-level structure than samples separated near the beginning. The authors described the process as progressive decompression: the whole image was revised at every scale, rather than emitted pixel by pixel.

Text conditioning, latent compression, and faster samplers would later make diffusion a product technology. In 2020, the achievement was more elementary. Noise had ceased to be only what obscured an image. Once its arrival was divided into learnable increments, noise also became the material from which an image could be patiently recovered.
