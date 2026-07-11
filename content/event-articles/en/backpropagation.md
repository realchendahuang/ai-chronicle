---
eventId: backpropagation
form: reverse technical narrative
narrativeCenter: tracing responsibility from an output error backward through layers that have no direct target
emotionalSource: hidden units becoming trainable representations rather than inaccessible internal machinery
avoid:
  - crediting the authors with inventing the chain rule or reverse differentiation
  - describing backpropagation as a sufficient key to all of deep learning
  - replacing the training process with unexplained mathematical vocabulary
---

Begin where the network is wrong.

A forward pass produces an output. Comparing that output with the target yields an error. For weights immediately connected to the output, their contribution to the error can be calculated directly. Hidden units have no answer sheet of their own. Their responsibility must be inferred from how strongly they influenced the units ahead of them. The chain rule joins those local effects, carrying a gradient from the output layer toward the input. Each weight moves a little in a direction expected to reduce the total error. Another example arrives, and the accounting begins again.

Information travels forward to make a prediction. Responsibility travels backward to alter the machinery that made it.

David Rumelhart, Geoffrey Hinton, and Ronald Williams published “Learning representations by back-propagating errors” in *Nature* in October 1986. *Representations* is the decisive word in the title. After repeated adjustment, they argued, hidden units—neither input nor answer—could come to encode features important to the task. Patterns would reside not in one explicitly programmed symbol but in the interactions among learned units.

Their experiments included symmetry, encoding, and family relationships. In the kinship task, the network was not supplied with a handcrafted concept of family structure for each hidden unit to represent. It had to organize its intermediate state so that shared weights could support mappings among people and relations. The hidden layer was useful precisely because its meaning was not assigned in advance; the demands of reducing many errors together gave it structure.

The mathematics did not appear in 1986 from nowhere. The chain rule was old, and reverse differentiation and network-training versions of the idea had several predecessors. Rumelhart, Hinton, and Williams made the method clear in a multilayer connectionist setting, paired it with persuasive experiments, and showed why the learned interior deserved attention. Converting that accumulation into one invention date would make a long technical lineage look like revelation.

Nor did a general training procedure make deep networks immediately easy. Gradients could vanish or explode. Initialization, activation functions, optimization, data, and available computation limited useful depth. Through much of the 1990s, other methods remained preferable on many tasks. Backpropagation supplied a reusable grammar for training multilayer models; decades of engineering would decide which sentences could be written with it.

Its lasting transformation was to change the use of failure. An error ceased to be only a score at the end. Differentiated and sent backward, it became instructions for rearranging the system's internal way of seeing.
