---
eventId: resnet
form: anomalous experiment and residual derivation
narrativeCenter: how a 34-layer plain net losing to an 18-layer net motivated identity shortcuts that made depth optimizable again
emotionalSource: the blunt insult of deeper networks fitting the training set worse
avoid:
  - turning residual connections into life metaphors
  - replacing the equations with bridge-and-road imagery
  - equating degradation with vanishing gradients alone
---

If extra layers did nothing, a deeper network should at least match a shallower one. By that logic a 34-layer model should not lose to an 18-layer model: the added layers need only learn the identity map. On ImageNet, Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun observed the opposite. A plain 34-layer network produced higher training error and higher validation error than its 18-layer counterpart. Depth increased, and the training set became harder to fit.

The paper calls this degradation. The authors carefully separate it from vanishing gradients: the experiments already used batch normalization, forward signals and backward gradients stayed in reasonable ranges, and training longer did not close the gap. The difficulty was not only whether a signal could cross dozens of layers, but whether an optimizer could easily drive those new layers toward an identity that looks simple on paper. Deeper is not better unless optimization can actually find the solution that changes nothing.

Residual learning reframes what a stack of layers must answer. Instead of learning a target mapping \(H(x)\) directly, a residual block learns a residual \(F(x)=H(x)-x\) and outputs \(F(x)+x\). The input \(x\) travels forward through a shortcut; when dimensions match, the identity shortcut adds neither parameters nor meaningful computation. When dimensions change, a projection shortcut aligns channels. If the best operation is “leave it alone,” the residual branch only needs to push its weights toward zero rather than reconstruct the input through many nonlinearities.

The decisive control keeps everything else matched: a 34-layer plain network and a 34-layer residual network share comparable depth and width; the residual version adds shortcuts. The result flips. Degradation disappears, training error falls below the 18-layer baseline, and extra depth finally buys accuracy. The team then built 50-, 101-, and 152-layer networks; even the 152-layer model had lower computational complexity than VGG-19. An ensemble of six residual models reached 3.57% top-five error on the ImageNet test set and won the 2015 ILSVRC classification task. Residual backbones also moved quickly into detection and localization pipelines such as Faster R-CNN.

ResNet’s lasting force sits in that control experiment more than in the headline “152.” It did not invent a stronger primitive layer, and it did not require every shortcut to learn new parameters. It allowed information to pass unchanged when a transformation was not worth doing. Optimizers could start from an identity solution and decide where to deviate. Later vision backbones almost defaulted to some form of shortcut—residual blocks, dense links, residual branches inside Transformers—all reading as the same engineering judgment: depth only counts if it remains trainable.

The team also pushed residual nets past one hundred layers on CIFAR-10, showing that fixing degradation did not depend on ImageNet’s particular scale. Plain nets again struggled as depth grew; residual versions could deepen and reduce error. Pretrained ResNet-50 and ResNet-101 weights became default transfer-learning starting points across medical imaging, remote sensing, and industrial inspection. The durable export was not the integer 152 but the rule: guarantee an approximate identity solution first, then let the optimizer choose where to deviate.
