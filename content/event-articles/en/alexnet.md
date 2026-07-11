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

15.3 percent. 26.2 percent.

In the ILSVRC 2012 results, the first number was the top-five test error of an AlexNet ensemble. The second belonged to the runner-up. A difference of 10.9 percentage points was too large to dismiss as ordinary tuning luck.

Convolutional networks were not new—networks in the LeNet lineage had already solved smaller recognition tasks—and researchers already knew that GPUs could perform parallel numerical work. ImageNet had already made a million-image training set available. Conditions sat scattered across papers, hardware manuals, and dataset sites. In autumn 2012 the table showed what happened when data, parallel compute, and a deep enough convolution were trained as one system: not a modest improvement, but a gap hard to close with older recipes.

Krizhevsky, Sutskever, and Hinton described, in their NeurIPS 2012 paper *ImageNet Classification with Deep Convolutional Neural Networks*, a network with five convolutional layers and three fully connected layers—about sixty million parameters and 650,000 neurons. Training used roughly 1.2 million labeled images, with 50,000 for validation and 150,000 for test. Images were resized to 256×256, then cropped to 224×224 inputs across 1,000 ImageNet classes. Many leading pipelines still separated the work: local descriptors such as SIFT or HOG, then encoding and a classifier. In AlexNet, design moved from prescribing which edges or textures ought to count toward architecture, loss, regularization, augmentation, and hardware limits.

No isolated trick carried the result. ReLU units allowed optimization to proceed much faster than saturated activations; a CIFAR-10 control in the paper shows the ReLU network reaching the same training error in far fewer iterations. Crops, horizontal flips, and PCA-based RGB perturbations enlarged the effective data. Dropout with probability 0.5 randomly suppressed units in the fully connected layers during training. At test time the model averaged predictions over ten views—five crops and their horizontal flips. The complete model did not fit into the 3 GB memory of one GTX 580, so it was split across two cards, with channels divided and communication only on selected layers. About ninety epochs took five or six days on those two GTX 580s. The competition entry that produced 15.3% top-five error used an ensemble of seven models; even a single model already sat well below the runner-up. The authors wrote candidly that the network was limited mainly by available GPU memory and by how long they were willing to wait.

In the years that followed, vision contests and industrial systems rapidly replaced hand-engineered features plus shallow classifiers with end-to-end convolutional stacks. ImageNet supplied scale; CUDA and consumer GPUs supplied affordable matrix throughput; ReLU, dropout, and augmentation kept a large model trainable. ILSVRC’s top-five rule—count a prediction correct if the true label appears among five guesses—put 15.3 and 26.2 on one shared ruler. The authors published architecture and training detail so other labs could attempt reproduction on similar hardware.

AlexNet won a classification contest and handed back a reproducible checklist: enough labeled images, parallel hardware that could hold the model, end-to-end convolution, and a set of details that kept sixty million parameters from wholly overfitting. The table does not argue. It only pins data, parallel compute, and deep convolution onto one line with a gap rhetoric cannot shrink.
