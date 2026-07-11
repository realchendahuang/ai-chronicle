---
eventId: bert
form: Technical essay organized around a missing token
narrativeCenter: Deliberate absence allowing every Transformer layer to use context from both directions
emotionalSource: A major advance in language representation beginning with a small act of erasure
avoid:
  - Describing BERT as an open-ended text generator
  - Retelling GPT-1 with bidirectionality added as a footnote
  - Equating benchmark records with solved language understanding
---

`[MASK]` is not a word anyone writes by accident. It is an instruction to remove something and leave the vacancy visible.

BERT learned from that vacancy. During pretraining, 15 percent of WordPiece positions were selected; most were replaced by `[MASK]`, some by a random token, and some left unchanged. The model had to recover what belonged there. Because the missing answer sat inside the sentence rather than at its far edge, evidence could come from both sides. A Transformer encoder let those left and right contexts meet at every layer.

This arrangement sounds obvious now, which is one sign of how thoroughly it settled into practice. A left-to-right language model receives the past and predicts the future. That asymmetry is natural for generation but awkward for tasks in which the decisive clue may follow the word being interpreted. BERT made bidirectionality part of a single deep pretrained network rather than a feature assembled around separate task models.

Its training material combined roughly 800 million words from BooksCorpus with 2.5 billion from English Wikipedia. A second objective asked whether one segment genuinely followed another. The input format carried its own sparse notation: `[CLS]` at the beginning, `[SEP]` between segments, and embeddings marking which segment each token belonged to.

Then came a deliberate anticlimax. Downstream systems were kept small. Classification read the representation at `[CLS]`. Extractive question answering predicted start and end positions in a passage. Sentence-pair tasks reused the two-segment format. The same pretrained parameters were fine-tuned end to end, with only a thin output layer changing from job to job. BERT Large had 24 layers and about 340 million parameters. Its pretraining ran for four days on 16 Cloud TPUs, a total of 64 TPU chips; once the checkpoint existed, an individual task could be fine-tuned on one Cloud TPU in an hour. Across eleven NLP tasks, including GLUE and SQuAD, the paper reported state-of-the-art results. A large central cost was being divided among many comparatively small adaptations.

The model's limits were also architectural. BERT was built to represent text that had already been supplied. It became excellent raw material for search, classification, extraction, and reading comprehension, but it was not designed to compose an open-ended answer one token after another. The token used in pretraining, `[MASK]`, does not normally appear when the model is fine-tuned or deployed, creating a mismatch the authors partly addressed by sometimes leaving selected words intact or replacing them at random.

For a few years, an enormous portion of applied NLP began from this trained checkpoint. The first design question changed. Instead of asking what network should be invented for a particular dataset, teams asked how this shared representation should be adapted.

At the center of that shift was a blank. Training removed a word, left its place visible, and allowed the model to look in both directions before trying to return it. That peculiar token remained as the trace of an experiment that reorganized applied NLP around representation rather than open-ended generation.
