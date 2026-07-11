---
eventId: alexnet
form: results-table reading
narrativeCenter: a 10.9-point competition gap making the combination of data, GPUs, and deep convolutional networks impossible to dismiss
emotionalSource: many practical choices acquiring sudden collective force in two numbers on a leaderboard
avoid:
  - searching for one secret technique that explains the result
  - claiming convolutional neural networks were invented in 2012
  - substituting revolution language for the reported error rates
---

15.3 percent and 26.2 percent were enough to reorder a field.

In the ILSVRC 2012 results, the first number was the top-five test error of an AlexNet ensemble. The second belonged to the runner-up. A difference of 10.9 percentage points was too large to explain away as the ordinary reward for careful tuning. Convolutional networks were not new. Researchers already knew that GPUs could perform parallel numerical work, and ImageNet had already made a million-image training set available. The results table showed what happened when those conditions were treated as one system.

AlexNet contained five convolutional layers and three fully connected layers, about sixty million parameters and 650,000 neurons. It learned its features from roughly 1.2 million labeled images. Many leading vision pipelines still separated the work: researchers designed local descriptors such as SIFT, arranged encoding and pooling, then trained a classifier on top. In AlexNet, design moved away from prescribing which edges or textures ought to count and toward architecture, objective, and training.

No isolated trick carried the result. ReLU units allowed optimization to proceed much faster than saturated activation functions. Crops and reflections enlarged the effective data. Dropout randomly suppressed units during training to reduce overfitting in the enormous fully connected layers. The complete model did not fit into the 3 GB memory of one GTX 580, so it was divided across two GPUs, with only selected layers communicating across the split. Training for about ninety passes through the data took five or six days. The architecture diagram visibly preserves this physical constraint: two vertical halves, one for each card.

That constraint gives the paper its particular historical scale. Two consumer GPUs now look small; in 2012 they changed which networks could be tested at all. The authors wrote candidly that the model was limited mainly by available GPU memory and by the amount of training time they were willing to tolerate. Faster hardware and larger datasets, they expected, would improve the result. It was not a mystical prediction that scale would solve everything. It was an engineering inference from a model that already strained the machine holding it.

The victory therefore belonged to a reproducible arrangement: abundant labeled data, affordable parallel computation, an end-to-end convolutional network, and a collection of details that kept a large model trainable. Researchers could dispute any individual choice and still have to answer the gap.

15.3 and 26.2 remained in the table. The argument had acquired a measurement that ordinary rhetoric could not shrink.
