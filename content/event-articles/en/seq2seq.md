---
eventId: seq2seq
form: experimental notebook
narrativeCenter: a general encoder-decoder interface made practical by the inelegant trick of reversing the source sentence
emotionalSource: an ambitious end-to-end structure depending on one modest intervention that shortened the gradient's path
avoid:
  - dismissing statistical machine translation as simply obsolete or ineffective
  - letting the later Transformer replace the paper's own concerns
  - treating the fixed-vector bottleneck as a costless unification
---

Statistical machine translation was assembled from specialized parts. Words were segmented, phrases aligned, candidate translations scored by separate models, and those scores tuned into a working pipeline. Neural networks could already map an input to a fixed class. Translation required something less obedient: both the source and the output had variable length, and their lengths did not have to match.

Seq2Seq offered a concise interface. One multilayer LSTM read the source sentence token by token and compressed it into a fixed-dimensional internal state. A second LSTM began from that state and generated the target sentence one token at a time until it emitted an end marker. Variable-length sequences now fit a single trainable objective. Summarization, dialogue, and other transformations could later be phrased in the same abstract form: consume one sequence, produce another.

The maneuver that made the large experiment work was less elegant than the interface. The researchers reversed the source words while leaving the target order unchanged. An input *a, b, c* reached the encoder as *c, b, a*, while the decoder still produced *α, β, γ*. Corresponding words near the beginnings of the two sentences were brought closer in the computational graph. The shortest dependencies became shorter, and optimization improved. The paper did not claim a complete explanation, but the measurements were stark: reversing the source raised the single-model test BLEU score from 25.9 to 30.6 and helped performance on long sentences.

The experiment was substantial. Training used twelve million English-French sentence pairs. Four-layer LSTMs with 1,000 units in each layer produced about 384 million parameters and ran for roughly ten days. An ensemble of five reversed-source models scored 34.8 BLEU on the WMT 2014 English-to-French task, above the paper's phrase-based baseline of 33.3. Used to rerank one thousand candidates from the statistical system, the LSTMs helped reach 36.5. The new method did not arrive by simply discarding the old pipeline. It first exceeded one baseline on its own and then improved that pipeline as a component.

The fixed state unified the architecture and compressed every detail of a source sentence through one narrow channel. Attention mechanisms soon allowed a decoder to consult source positions anew at each output step rather than relying only on the final encoded vector.

Before that change, the 2014 paper had already preserved a useful engineering detail. Its clean encoder–decoder diagram became competitive only after the source sentence was fed in backward and the gradient found a more manageable distance.
