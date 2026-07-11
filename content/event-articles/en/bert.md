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

The acronym spells the ambition: Bidirectional Encoder Representations from Transformers. In 2018 Devlin et al. faced a concrete gap. GPT-1 had shown generative pretraining worked, but left-to-right reading limited tasks that need both sides of a sentence. ELMo supplied bidirectional signals, yet as shallow concatenations attached to task-specific architectures. Could a deep bidirectional representation be pretrained once and attached cheaply to many understanding tasks?

Masked language modeling (MLM) was the answer. During training, about 15% of WordPiece tokens are corrupted: 80% replaced with `[MASK]`, 10% with a random token, 10% left unchanged, so the pretrain/fine-tune mismatch softens. The encoder must recover the originals using context on both sides at once. Next-sentence prediction (NSP) takes sentence pairs and asks whether the second follows the first in the original text. The body is a Transformer encoder: BERT-Base has about 110 million parameters (12 layers, hidden size 768, 12 heads); BERT-Large about 340 million (24 layers, 1024, 16 heads). Pretraining used BooksCorpus and English Wikipedia, on the order of 3.3 billion words.

Fine-tuning is almost rude in its lightness: attach a small classification or span head on the `[CLS]` token or token states, update on task data, and skip redesigning the whole net per problem. The paper reported new state-of-the-art results on eleven tasks including the GLUE average and SQuAD v1.1/v2.0; SQuAD v1.1 test F1 entered the 90s, and GLUE averages rose sharply. Numbers age as later models pass them; the mechanism stayed. Learn bidirectional conditioning on large unlabeled text first, then treat the representation as a universal initialization.

BERT excels at cloze-style understanding, classification, extraction, and question answering. It does not directly do open-ended long-form generation—that is decoder territory. What it changed was the default in NLP engineering: rather than train every task from random weights, download a pretrained checkpoint. Model hubs, Hugging Face-style distribution, and the industry phrase “pretrain then fine-tune” found an early template in this bidirectional encoder. Masking is an artificial wound; healing it forces the model to see both directions at once.

Input design was deliberate: WordPiece, position embeddings, and segment embeddings sum so single-sentence and sentence-pair tasks share one encoder interface. The classification token pools a sequence; separators mark boundaries. Fine-tuning hyperparameters lived in a small grid, lowering the industrial floor. Search ranking, moderation, intent classification, and document QA all initialized from pretrained checkpoints. Later work questioned next-sentence prediction and mask rates, but those revisions assumed bidirectional encoder pretraining was already the default. Generative models took the headlines; encoder stacks still run, distilled, inside classification and retrieval services.
