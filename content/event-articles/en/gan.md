---
eventId: gan
form: algorithm marginalia
narrativeCenter: a shared minimax objective that trains generator and discriminator by alternation rather than one joint closed-form step
emotionalSource: sharp samples on MNIST and CIFAR presented beside an open admission that the two learners must stay synchronized
avoid:
  - treating GANs as creation from nothing
  - letting deepfake headlines overwrite the 2014 technical content
  - pretending training was stable from the start
---

*Generative Adversarial Nets* (2014) did not open with a poster image. It opened with a game.

Ian Goodfellow and coauthors split generative modeling into two networks. A generator \(G\) maps noise \(z\) to a sample. A discriminator \(D\) outputs a scalar estimating the probability that its input came from real data rather than from \(G\). Both are trained through one minimax value function: \(D\) improves at telling real from fake, while \(G\) improves at fooling \(D\). At the ideal equilibrium the generated distribution matches the data distribution and the discriminator returns \(1/2\) everywhere. The paper likens that state to a Nash equilibrium and, in the same breath, notes how hard it is to keep the two players synchronized in practice.

Algorithm 1 largely set the temperament of the next decade: take \(k\) gradient steps on the discriminator, then one on the generator. There is no closed-form joint optimum to compute in one shot—only alternation. Experiments showed samples on MNIST, the Toronto Face Database, and CIFAR-10, with multilayer perceptrons or convolutional generators and noise drawn from uniform or Gaussian distributions. Relative to restricted Boltzmann machines or some variational approaches of the time, adversarial training did not require an explicit normalized density for the data, nor a long-running Markov chain at sampling time. The samples looked sharp.

The cost is written on the same pages. If the discriminator becomes too strong, generator gradients can carry little useful information. If the generator collapses onto a few modes, the discriminator quickly learns to reject repeats while diversity is already gone—the failure mode later called mode collapse appears in the original discussion as training instability. The authors advise keeping the two capacities roughly matched; they do not supply a permanent stabilizer. DCGAN, WGAN, spectral normalization, progressive growing, and a long list of later methods can be read as repairs to the same crack: how to keep a two-player game from destroying one of the players midway.

GANs turned “does this look like real data?” into a differentiable training signal. Image generation, super-resolution, style transfer, and later face synthesis all branched from that idea. Public debate about forgery and trust followed at the application layer; that was not a promise of the 2014 paper. What endures in the text is a training regime: without writing a full likelihood first, one network can still be forced to learn a distribution by competing with a judge. Adversarial learning entered the toolbox as a main line—and it never traveled without the risk of falling out of sync.

The original paper also sketches theory: at an optimal discriminator the generator objective relates to Jensen–Shannon divergence; in practice the discriminator is rarely truly optimal, so gradient behavior diverges from the tidy derivation. That gap drove later work on alternative divergences, constraints, and architectures. The 2014 contribution opened a track more than it delivered a permanently stable pipeline. Application stories—super-resolution, style transfer, face synthesis—branched quickly; social consequences of misuse belong to deployment history, not to the paper’s promises.
