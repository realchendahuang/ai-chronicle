---
eventId: bert
form: pretraining-objective manual
narrativeCenter: how masked language modeling made a bidirectional Transformer encoder the shared starting point for eleven understanding tasks
emotionalSource: state-of-the-art GLUE and SQuAD after adding only small output heads—transfer made almost rudely cheap
avoid:
  - writing BERT as a generative model
  - replacing MLM/NSP mechanics with empty “bidirectional context” slogans
  - erasing GPT-1 and ELMo prehistory
---

During training, about fifteen percent of the words were cut out.

In 2018 Jacob Devlin and coauthors faced a concrete gap. GPT-1 had shown generative pretraining worked, but left-to-right reading limited tasks that need both sides of a sentence. ELMo supplied bidirectional signals, yet as shallow concatenations attached to task-specific architectures. Could a deep bidirectional representation be pretrained once and attached cheaply to many understanding tasks?

Masked language modeling (MLM) was the answer. The encoder must recover the originals using context on both sides at once: of the corrupted WordPiece tokens, 80% are replaced with `[MASK]`, 10% with a random token, and 10% left unchanged, so the pretrain/fine-tune mismatch softens. Next-sentence prediction (NSP) takes sentence pairs and asks whether the second follows the first in the original text. The body is a Transformer encoder: BERT-Base has about 110 million parameters (12 layers, hidden size 768, 12 heads); BERT-Large about 340 million (24 layers, 1024, 16 heads). Pretraining used BooksCorpus and English Wikipedia, on the order of 3.3 billion words. Masking is an artificial wound; healing it forces the model to see both directions at once.

Fine-tuning is almost rude in its lightness: attach a small classification or span head on the `[CLS]` token or token states, update on task data, and skip redesigning the whole net per problem. The paper reported new state-of-the-art results on eleven tasks including the GLUE average and SQuAD v1.1/v2.0; SQuAD v1.1 test F1 entered the 90s, and GLUE averages rose sharply. Numbers age as later models pass them; the mechanism stayed. Learn bidirectional conditioning on large unlabeled text first, then treat the representation as a universal initialization.

Input design was deliberate: WordPiece, position embeddings, and segment embeddings sum so single-sentence and sentence-pair tasks share one encoder interface. The classification token pools a sequence; separators mark boundaries. Fine-tuning hyperparameters lived in a small grid—learning rate, batch size, epochs—lowering the industrial floor. “Download BERT, swap the task head” became the default script until larger generative models rewrote the script.

BERT excels at cloze-style understanding, classification, extraction, and question answering. It does not directly do open-ended long-form generation—that is decoder territory. What it changed was the default in NLP engineering: rather than train every task from random weights, download a pretrained checkpoint. Model hubs, Hugging Face-style distribution, and the industry phrase “pretrain then fine-tune” found an early template in this bidirectional encoder.

Industrial deployment was noisier than paper tables. Search ranking, moderation, intent classification, and document QA all initialized from pretrained checkpoints, then fine-tuned on private logs. Memory, sequence truncation, and domain vocabulary mismatch became daily engineering. Later work questioned next-sentence prediction and mask rates, but those revisions assumed bidirectional encoder pretraining was already the default. Generative models took the headlines; encoder stacks still run, distilled, inside classification and retrieval services. Understanding tasks do not all need to write long prose.

A 340-million-parameter encoder was already heavy to fine-tune on 2018 hardware. Resource pressure did not stop the paradigm shift; it shaped the habit—compress or distill, then ship. Scores on eleven tasks go stale; the fine-tuning muscle memory remains: download a checkpoint, swap a head, search a small hyperparameter grid.
