---
eventId: imagenet
form: catalog history
narrativeCenter: the work of turning the visible web into a labeled hierarchy that machines and researchers could share
emotionalSource: the scale of the classificatory ambition resting on repetitive and largely invisible human judgment
avoid:
  - treating the dataset as a supporting prop for an algorithmic hero
  - collapsing scale figures from different years into one release
  - allowing competition results to hide questions of taxonomy and governance
---

Before ImageNet could help a system recognize an image, someone had to decide what the image would be called.

The web already held billions of photographs. Search engines could retrieve candidates, but a pile of files was not a training set. A category such as “husky,” “sailboat,” or “musical instrument” needed a place among other categories, and every result needed a judgment about whether it belonged.

Fei-Fei Li’s team borrowed that order from WordNet, the lexical database that arranges English nouns into hierarchical synonym sets. ImageNet aimed to populate these nodes with pictures. Choosing WordNet rather than an arbitrary flat label list aligned visual categories with a linguistic hierarchy, making it easier to scale toward tens of thousands of concepts. Mammals divided into narrower branches; dogs divided again into breeds. The 2009 CVPR paper *ImageNet: A Large-Scale Hierarchical Image Database* described twelve subtrees, 5,247 synsets, and about 3.2 million cleaned images, averaging more than six hundred per category. Its stated ambition reached much further: hundreds or thousands of examples for tens of thousands of WordNet noun concepts. The later public figure of more than fourteen million images reflects continued growth; it should not be collapsed into the 2009 paper’s release snapshot.

Search engines brought candidate images into view. Human labelers made the collection trustworthy enough to use. Tasks were distributed through Amazon Mechanical Turk, where workers verified whether an image matched a proposed synset. The interface typically offered a category name and examples; workers verified and filtered rather than inventing the taxonomy freely—WordNet and the project team had already fixed the system of names. That labor rarely appears in the smooth accuracy curves published later. Yet it established the common x-axis beneath them. “Large-scale data” was not a natural deposit awaiting extraction. It was a succession of choices about queries, inclusion, category, and sufficient agreement.

ImageNet continued to grow beyond the version described in 2009. The annual ImageNet Large Scale Visual Recognition Challenge, beginning in 2010, selected a competition set of roughly 1.2 million training images across 1,000 categories. Researchers now met the same data, metrics (including top-1 and top-5 error), and deadline. Differences between algorithms could no longer hide as easily behind different test collections. When AlexNet opened an unusually large performance gap in 2012, the gap was legible because the measuring instrument had already been built on a shared public subset.

The instrument contained its own assumptions. WordNet is an English lexical organization, not a neutral copy of the world. Web images are not a uniform sample of human experience. Category boundaries, geographic distributions, labels applied to people, contested social categories, and uncertain copyright histories all travel from the dataset into the models trained on it. Later debates about dataset bias, face and person labels, and the rights status of crawled images partly retrace how this “public research infrastructure” was built.

The catalog cuts the world before the convolution begins. Later models may change architectures, losses, and pretraining recipes; if they still report scores under ImageNet or its derived protocols, they are still contesting places on the same table of names. Authorship of the catalog outlasts any one champion network.
