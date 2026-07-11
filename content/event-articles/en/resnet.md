---
eventId: resnet
form: technical argument from a failed comparison
narrativeCenter: the paradox of a 34-layer network training worse than an 18-layer one and the residual formulation built to answer it
emotionalSource: the frustration of added capacity becoming added difficulty, relieved by an almost parameter-free identity path
avoid:
  - turning residual connections into a life lesson
  - substituting road or bridge metaphors for the actual mapping
  - misidentifying the degradation problem as only vanishing gradients
---

Suppose additional layers in a neural network accomplish nothing. The deeper model should still be able to copy the shallower one: the new layers need only learn the identity mapping and pass their input through unchanged. By that reasoning, a 34-layer network should perform at least as well as an 18-layer version.

The experiment did not cooperate. A plain 34-layer network had higher error on validation data and on its training set. It had more representational capacity and fit the examples worse.

The ResNet paper called this the degradation problem and took care not to reduce it to vanishing gradients. The experiments already used batch normalization, keeping forward signals and backward gradients at workable scales. Longer training did not remove the gap. The question was no longer simply whether information could pass through many layers. It was whether optimization could persuade a stack of nonlinear transformations to approximate even the apparently trivial act of leaving its input alone.

Residual learning changed the target assigned to a block. If a group of layers would normally learn a mapping H(x), it was asked instead to learn the residual F(x)=H(x)-x. The block's output became F(x)+x. A shortcut carried x directly forward. Where input and output dimensions matched, that identity connection added no parameters and almost no computation. If the correct transformation was “make no change,” the learned branch could move toward zero rather than reconstructing x through several nonlinear layers.

The paper paired a plain 34-layer network with a residual network of matching depth and widths; the consequential change was the addition of shortcuts. The residual model escaped the degradation seen in its plain counterpart and achieved lower training error than the 18-layer version. The team extended the design to 50, 101, and 152 layers. An ensemble of six models at different depths reached 3.57 percent top-five error on the ImageNet test set and won the 2015 classification task. Even the 152-layer individual network required less computational complexity than VGG-19.

The memorable number is 152, but the paper's argument lives in the failed 34-versus-18 comparison. ResNet did not invent a more expressive individual operation. It allowed information to remain stable when another transformation was unnecessary. Optimization could begin from an easy identity route and learn only the places where departing from that route improved the objective.

Depth no longer required every layer to justify itself by altering the signal. Some of the architecture's new power came from making “do nothing here” an answer the network could reach easily.
