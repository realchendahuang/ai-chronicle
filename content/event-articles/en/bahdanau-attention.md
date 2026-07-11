---
eventId: bahdanau-attention
form: alignment-mechanism close reading
narrativeCenter: how the decoder, at each output word, re-scores source positions and reads a weighted summary
emotionalSource: the first widespread permission for a neural translator to look back when a fixed sentence vector is not enough
avoid:
  - treating this as a simplified Transformer
  - ignoring the Seq2Seq fixed bottleneck as the direct opponent
  - calling attention maps a gold linguistic alignment standard
---

The whole source sentence was crushed into one fixed-length vector, then handed to a decoder that emitted words one by one.

As sentences grew, the suitcase ran out of room. Encoder–decoder translation was not simply “bad at language”; it was forced to pack an entire trip into one vector. Seq2Seq had already shown that end-to-end mapping could work—and that the suitcase problem was real: everything sat in the encoder’s final state, and long sentences suffered most.

Dzmitry Bahdanau, Kyunghyun Cho, and Yoshua Bengio’s move was almost too plain to state: stop delivering only one suitcase; let the decoder reopen the source at every step. Their paper, *Neural Machine Translation by Jointly Learning to Align and Translate*, appeared as a 2014 preprint and is commonly tied to ICLR 2015. The skeleton remains a recurrent encoder and recurrent decoder, but before each target word the model uses the current decoder state to score encoder hidden states across time—positions with higher weight are “looked at” more—then forms a weighted context vector that, with the prefix so far, predicts the next token. Alignment and translation share one trainable objective; there is no separate word-alignment stage feeding a phrase table.

That is the early, durable shape of what people later call attention in neural MT: not uniform averaging over all source words, and not a hard pick of one source word, but a soft, differentiable weighted read. The training signal is the translation loss itself. To predict the next word correctly, the model learns when to put mass on which source positions. The paper also shows attention-weight visualizations over time: as a target word is generated, which source words light up. Those heatmaps are not perfect linguistic alignments, but they give researchers a new inspection habit—open a corner of the black box and ask whether the net is looking somewhere plausible.

Conceptually the change from Seq2Seq is small; the consequences are large. The fixed-vector bottleneck loosens: information can stay in the full sequence of encoder states and be fetched on demand. Long sentences no longer depend entirely on a final summary step. More important is the interface shape: any “current query” scoring a set of key–value memories, then weighting and summing, can be told as attention. Later variants change how queries are built, how scores are computed, whether there are multiple heads, whether recurrence disappears—but the license to re-read the source at each step enters the mainstream story here.

Boundaries matter. Attention in this paper still sits on recurrent nets; it is not the 2017 Transformer stack built only from self-attention and feed-forward layers. Encoder and decoder still step through time. Data and vocabulary engineering do not vanish: rare words, copy mechanisms, and subword segmentation remain separate problems in later systems. Statistical phrase-based MT was still strong in industry around 2014–2015; neural models with attention began to catch up without emptying the machine rooms overnight.

In implementation, attention scores usually come from a compatibility function between the current decoder state and each source hidden state, then normalize into weights. Papers swap dot products, additive networks, or other scoring forms; the skeleton—“a query soft-selects a memory”—stays. Training can still use teacher forcing: true target prefixes drive decoder states, and attention recomputes at every step. For engineering teams, that means keeping the full encoder state sequence in memory: the cost of long sentences partly shifts from “one vector bursting” to “a weighted read over source length at each step.”

Reading the paper, keep the phrase “jointly learning” in view. Alignment is not post-processing and need not be an external table supplied by linguistic rules; it is intermediate computation inside generation, and gradients from translation errors flow back into the attention weights. When the decoder stalls on a target word, it can look harder at the corresponding source span instead of staring at one over-compressed sentence vector. The suitcase remains, but the traveler is allowed to reopen the map—and that permission changed how sequence-to-sequence models were expected to read their inputs.
