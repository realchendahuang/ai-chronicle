---
eventId: transformer
form: architectural reading
narrativeCenter: a machine-translation paper rearranging sequence computation by removing recurrence
emotionalSource: the title's bravado contrasted with a disciplined exchange of one computational cost for another
avoid:
  - retelling the paper backward as an inevitable origin of ChatGPT
  - claiming that the authors invented attention itself
  - celebrating scale while omitting the quadratic cost of full attention
---

“Attention Is All You Need” sounds like a declaration intended to end an argument. The architecture beneath the title began with a deletion.

Leading machine-translation systems commonly used recurrent networks or LSTMs in their encoders and decoders, with attention added as an auxiliary mechanism. Recurrence tied computation to word order. The hidden state at token ten waited for the preceding nine steps, and information between distant tokens passed through a chain of intermediate states. The Transformer removed the recurrent structure. It did not replace it with convolution.

Self-attention allowed every position in a sequence to read from the others. Each position produced a query, key, and value. Similarity between a query and all keys supplied weights for combining the values. The computational path between any two positions became constant in length, while positions could be processed in parallel as large matrix operations suited to GPUs.

One attention operation could compress unlike relationships into the same average, so the architecture projected its representations into several subspaces. Multiple heads attended in parallel, and their outputs were joined. Removing recurrence also removed the model's built-in awareness of order. Sinusoidal positional encodings were added to token embeddings so that position could enter the calculation. Six encoder layers and six decoder layers included feed-forward networks, residual connections, and layer normalization around their sublayers. “All you need” did not mean the model contained attention and nothing else.

The evidence came from translation, not open-ended generation. The larger model reached 28.4 BLEU on WMT 2014 English-to-German translation, more than two BLEU above previous best results, and 41.8 on English-to-French. Training used eight P100 GPUs for three and a half days. The decisive change was the shape of computation: the model no longer had to wait along the length of the sentence, so parallel hardware could be used more fully as training expanded.

The exchange had a visible price. Full self-attention compares every position with every other position. For a sequence of length n, critical time and memory terms grow as O(n²). The bargain looked excellent for translation-length sequences and expensive for long documents.

Encoder-only and decoder-only descendants would later carry the architecture far beyond the paper's task. Work on sparse attention, linear attention, and long-context systems would repeatedly return to the same complexity table. The title announced an absence—no recurrence—and the field spent years managing the cost of what had taken its place.
