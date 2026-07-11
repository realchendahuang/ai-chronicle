---
eventId: alexnet
form: results-table and engineering notes
narrativeCenter: how 15.3% versus 26.2% in ILSVRC 2012 pinned data, GPUs, and deep convolutions onto a single scoreboard
emotionalSource: the mismatch between two cramped 3 GB cards and a 10.9-point gap in top-5 error
avoid:
  - searching for one secret technique that explains the result
  - claiming convolutional neural networks were invented in 2012
  - substituting revolution language for the reported error rates
---

15.3 percent and 26.2 percent were enough to reorder a field.

In the ILSVRC 2012 results, the first number was the top-five test error of an AlexNet ensemble. The second belonged to the runner-up. A difference of 10.9 percentage points was too large to dismiss as ordinary tuning luck. Convolutional networks were not new—networks in the LeNet lineage had already solved smaller recognition tasks—and researchers already knew that GPUs could perform parallel numerical work. ImageNet had already made a million-image training set available. The results table showed what happened when those conditions were treated as one system.

Krizhevsky, Sutskever, and Hinton described an eight-layer network with five convolutional layers and three fully connected layers, about sixty million parameters and 650,000 neurons. Training used roughly 1.2 million labeled images, with 50,000 for validation and 150,000 for test. Images were resized to 256×256, then cropped to 224×224 inputs. Many leading vision pipelines still separated the work: researchers designed local descriptors such as SIFT or HOG, arranged encoding and pooling, then trained a classifier on top. In AlexNet, design moved away from prescribing which edges or textures ought to count and toward architecture, objective, and training.

No isolated trick carried the result. ReLU units allowed optimization to proceed much faster than saturated activations; a CIFAR-10 control in the paper shows the ReLU network reaching the same training error in far fewer iterations. Crops, horizontal flips, and PCA-based RGB perturbations enlarged the effective data. Dropout with probability 0.5 randomly suppressed units in the fully connected layers during training. At test time the model averaged predictions over ten views—five crops and their horizontal flips. The complete model did not fit into the 3 GB memory of one GTX 580, so it was split across two cards, with channels divided and communication only on selected layers. About ninety epochs took five or six days on those two GTX 580s. The architecture diagram visibly preserves this physical constraint: two vertical halves, one for each card.

The competition entry that produced 15.3% top-five error used an ensemble of seven models; even a single model already sat well below the runner-up. The authors wrote candidly that the network was limited mainly by available GPU memory and by how long they were willing to wait. Faster hardware and larger datasets, they expected, would improve the result. It was not a mystical prediction that scale would solve everything. It was an engineering inference from a model that already strained the machine holding it.

In the years that followed, vision contests and industrial systems rapidly replaced hand-engineered features plus shallow classifiers with end-to-end convolutional stacks. ImageNet supplied scale; CUDA and consumer GPUs supplied affordable matrix throughput; ReLU, dropout, and augmentation kept a large model trainable. The victory therefore belonged to a reproducible arrangement rather than a single invention.

15.3 and 26.2 remained in the table. Researchers could dispute any individual choice and still have to answer the gap.

Competition protocol matters here too. ILSVRC’s top-five rule—count a prediction correct if the true label appears among five guesses—made large-scale fine-grained classification measurable on one shared ruler. The authors published architecture and training detail so other labs could attempt reproduction on similar hardware; reproducibility became part of the result’s force. In the years that followed, labs and theses increasingly treated convolutional stacks, not hand-engineered descriptors plus SVMs, as the default baseline. Later networks would change depth and connectivity, but they worked inside a coordinate system this scoreboard had already rewritten.
