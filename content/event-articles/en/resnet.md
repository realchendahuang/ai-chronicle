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

A 34-layer network had higher training error than an 18-layer one.

If extra layers did nothing, a deeper network should at least match a shallower one. By that logic a 34-layer model should not lose to an 18-layer model: the added layers need only learn the identity map. On ImageNet, Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun observed the opposite. A plain 34-layer network produced higher training error and higher validation error than its 18-layer counterpart. Depth increased, and the training set became harder to fit. That is not a mild story about slightly worse generalization; the optimizer itself failed to use the extra layers—a larger hypothesis space searched more poorly.

The paper *Deep Residual Learning for Image Recognition* calls this degradation. The authors carefully separate it from vanishing gradients: the experiments already used batch normalization, forward signals and backward gradients stayed in reasonable ranges, and training longer did not close the gap. The difficulty was not only whether a signal could cross dozens of layers, but whether an optimizer could easily drive those new layers toward an identity that looks simple on paper. Deeper nets can represent a shallow solution; random initialization plus SGD is not guaranteed to find it. Degradation demotes “depth helps” from an automatic theorem to a proposition that needs engineering insurance.

Residual learning reframes what a stack of layers must answer. Instead of learning a target mapping \(H(x)\) directly, a residual block learns a residual \(F(x)=H(x)-x\) and outputs \(F(x)+x\). The input \(x\) travels forward through a shortcut; when dimensions match, the identity shortcut adds neither parameters nor meaningful computation. When dimensions change, a projection shortcut—often a 1×1 convolution—aligns channels and spatial size. If the best operation is “leave it alone,” the residual branch only needs to push its weights toward zero rather than reconstruct the input through many nonlinearities. Figure 3 in the paper places VGG-19, a plain 34-layer net, and a residual 34-layer net side by side, with arcs marking the identity paths—readers can almost count on the page what was added.

The decisive control keeps everything else matched: a 34-layer plain network and a 34-layer residual network share comparable depth and width; the residual version adds shortcuts. The result flips. Degradation disappears, training error falls below the 18-layer baseline, and extra depth finally buys accuracy. The team then built 50-, 101-, and 152-layer networks; deeper models used bottleneck residual blocks—1×1 down, 3×3, 1×1 up—so even the 152-layer model had lower computational complexity than VGG-19 of the day. An ensemble of six residual models reached 3.57% top-five error on the ImageNet test set and won the 2015 ILSVRC classification task. Residual backbones also moved quickly into detection and localization pipelines such as Faster R-CNN, lifting COCO and ImageNet detection metrics when residual features replaced older trunks.

The team also pushed residual nets past one hundred layers on CIFAR-10, showing that fixing degradation did not depend on ImageNet’s particular scale. Plain nets again struggled as depth grew; residual versions could deepen and reduce error. Pretrained ResNet-50 and ResNet-101 weights became default transfer-learning starting points across medical imaging, remote sensing, industrial inspection, and retrieval. The durable export was not the integer 152 but the rule forced by the control experiment: guarantee an approximate identity solution first, then let the optimizer choose where to deviate. Layers need not prove they are “doing something” at every step; information can pass intact and change only where change is worth it.

The training curve where 34 layers once lost to 18 explains residual learning more clearly than any slogan. ResNet did not invent a stronger primitive layer. It allowed depth to become honest again in optimization terms—trainable first, deep second. The 152 layers and the 3.57% top-5 will age; the trainable shortcut structure remains, a memory almost every later deep network still carries by default.
