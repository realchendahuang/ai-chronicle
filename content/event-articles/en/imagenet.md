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

The web already held billions of photographs. Search engines could retrieve candidates, but a pile of files was not a training set. A category such as “husky,” “sailboat,” or “musical instrument” needed a place among other categories, and every result needed a judgment about whether it belonged. The project began not with a classifier but with an attempt to impose enough order on visible abundance for learning to become measurable.

Fei-Fei Li's team borrowed that order from WordNet, the lexical database that arranges English nouns into hierarchical synonym sets. ImageNet aimed to populate these nodes with pictures. Mammals divided into narrower branches; dogs divided again into breeds; vehicles followed a different tree. The 2009 paper described twelve subtrees, 5,247 synsets, and 3.2 million cleaned images, averaging more than six hundred per category. Its stated ambition reached much further: hundreds or thousands of examples for tens of thousands of WordNet noun concepts.

Search engines brought candidate images into view. Human labelers made the collection trustworthy enough to use. Tasks were distributed through Amazon Mechanical Turk, where workers verified whether an image matched a proposed synset. That labor rarely appears in the smooth accuracy curves published later. Yet it established the common x-axis beneath them. “Large-scale data” was not a natural deposit awaiting extraction. It was a succession of choices about queries, inclusion, category, and sufficient agreement.

ImageNet continued to grow beyond the version described in 2009. The annual ImageNet Large Scale Visual Recognition Challenge, beginning in 2010, selected a competition set of roughly 1.2 million training images across 1,000 categories. Researchers now met the same data, metrics, and deadline. Differences between algorithms could no longer hide as easily behind different test collections. When AlexNet opened an unusually large performance gap in 2012, the gap was legible because the measuring instrument had already been built.

The instrument contained its own assumptions. WordNet is an English lexical organization, not a neutral copy of the world. Web images are not a uniform sample of human experience. Category boundaries, geographic distributions, labels applied to people, and uncertain copyright histories all travel from the dataset into the models trained on it.

ImageNet made data into public research infrastructure. It also made the authority of that infrastructure harder to ignore. Long before a model sees its first pixel, somebody has chosen the names, arranged their hierarchy, and decided which parts of the world will count as examples.
