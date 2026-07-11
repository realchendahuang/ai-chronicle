---
eventId: gan
form: minimax essay
narrativeCenter: teaching a generator indirectly through a second network's discrimination task
emotionalSource: the clean equilibrium of the theory set against the instability of keeping two learners in step
avoid:
  - repeating the bar-story account of the idea's origin
  - turning generator and discriminator into human rivals with motives
  - describing sharp samples without explaining the adversarial objective
---

Generative modeling traditionally asked for a description of the probability distribution behind observed data. Writing or approximating that distribution could make training and sampling complicated. The 2014 GAN paper proposed an indirect route: do not describe the distribution explicitly; train a system to tell its samples from the data.

The generator, G, maps random noise to a synthetic sample. The discriminator, D, estimates the probability that a sample came from the real dataset rather than G. D is trained to give real examples high scores and generated examples low ones. G is trained through D's judgment, adjusting its output so that the distinction becomes harder. The two networks share a minimax objective, and gradients pass through the discriminator into the generator.

This arrangement gives the generator information without prescribing the parts of an image. It is not told where an eye ought to be drawn. It receives a continuous indication that the present output remains detectable as false. As the generator changes, the discriminator's criterion changes with it.

The equilibrium in the paper is exceptionally neat. If both sides have unlimited capacity and optimization reaches the global optimum, the generated distribution matches the data distribution. The discriminator can then do no better than return one-half for any input. A judge deprived of discriminating power is, in this formulation, evidence that generation has succeeded. Training uses backpropagation, and producing a sample requires only a forward pass—no Markov chain and no approximate inference for each new example.

The equilibrium is not the normal condition of training. The original paper already noted that D and G must be synchronized. A discriminator that becomes too accurate can leave the generator with weak guidance. A generator may also crowd many noise inputs into a small family of outputs that happen to fool the current discriminator, abandoning much of the diversity present in the data. The authors called one version the “Helvetica scenario”; the later standard name was mode collapse.

GANs soon produced strikingly sharp images and drove work in synthesis and editing. A density-estimation problem that had required elaborate machinery could now be posed in a few equations. The brevity of the objective did not make the optimization stationary. Every useful change in G altered the examples presented to D; every change in D reshaped the gradient returned to G.

The discriminator's ability to adapt is the source of the method's sharpness and part of its instability. GAN training has no fixed evaluator waiting at the end, only two distributions whose relationship must remain informative while both are moving.
