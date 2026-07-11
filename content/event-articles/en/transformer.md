---
eventId: transformer
form: paper close reading
narrativeCenter: how multi-head self-attention, feed-forward layers, and positional encoding form a parallelizable encoder-decoder in Attention Is All You Need
emotionalSource: the gap between the word “All” in the title and Figure 1’s residual paths, normalization, and feed-forwards
avoid:
  - inventing a heroic Google conference-room moment
  - claiming attention began in 2017
  - skipping WMT numbers while declaring NLP conquered
---

The title says attention is all you need. Figure 1 still draws everything else: multi-head attention beside position-wise feed-forward networks, residual connections and layer normalization wrapping both, positional encodings at the bottom. The 2017 Transformer of Vaswani et al. is not a lone attention operator. It is a full encoder-decoder that translates without recurrence or convolution.

RNNs and LSTMs advance one time step after another. Longer sequences are hard to train in parallel, and distant dependencies must travel through long chains of intermediate states. Attention already existed in neural machine translation, usually as an alignment module on top of recurrent encoders. The Transformer promotes self-attention to the backbone: each position reads other positions directly through scaled dot-product attention over queries, keys, and values, reducing theoretical path length to a constant. Multi-head attention splits the projections into several subspaces, computes them in parallel, and concatenates them back. The base model uses eight heads, model dimension 512, feed-forward inner width 2048, and six layers each in the encoder and decoder.

Because self-attention is permutation-invariant on its own, order must be supplied separately. The authors add sinusoidal positional encodings to token embeddings so the model can distinguish position without recurrence. The decoder keeps causal masking so a position cannot attend to future tokens; encoder-decoder attention lets target positions query source representations. Training covered WMT 2014 English-German and English-French. The paper reports roughly 27.3 BLEU for the base English-German model and 28.4 for the big configuration, about 41.8 BLEU for the big English-French model, and notes that the big model trained in about 3.5 days on eight P100 GPUs—lower cost than many strong systems of the period.

Quadratic cost is the design’s shadow: for sequence length \(n\), self-attention time and memory scale roughly as \(n^2\). Much later long-context work pays that debt with sparsity, linear approximations, or hierarchy. The architecture itself, however, splits cleanly. Encoder-only stacks become BERT-style bidirectional models; decoder-only stacks become GPT-style autoregressive generators. The 2017 paper describes a translation system. Industry read a general sequence block that spreads efficiently across GPUs and TPUs.

“All You Need” is rhetorical compression. What was needed was the training property of attention working together with feed-forwards, residuals, normalization, and positional signals. Once recurrence was gone, sequence models finally stood on the same side as matrix hardware.

A complexity table in the paper compares self-attention with recurrence and convolution on compute, sequential steps, and path length: attention is quadratic in length but constant in sequential depth and constant in path length for distant pairs. That table explains the bet better than the slogan. Optimization details—label smoothing, learning-rate warmup, Adam variants—are written down so “attention is all you need” is never mistaken for “no training craft.” Translation BLEU ages; parallel training affinity defined the hardware relationship of sequence models for a decade.
