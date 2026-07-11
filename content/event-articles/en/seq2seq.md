---
eventId: seq2seq
form: close reading of a diagram
narrativeCenter: two multilayer LSTMs that compress a variable-length input into a vector and expand it into a variable-length output—and the almost odd trick of reversing the source
emotionalSource: an entire translation pipeline collapsing into one end-to-end chain, still rescued by a word-order experiment
avoid:
  - writing this as a prequel to the Transformer
  - ignoring that statistical phrase-based MT was still mainstream
  - inserting attention into this paper’s architecture
---

In Figure 1, the source ABC is written backwards.

Around 2014, production machine translation still chained tokenization, phrase tables, alignment models, reordering, and language models, each with its own objective. Neural nets could already classify and emit fixed labels, but whole-sentence in, whole-sentence out end-to-end learning was still uncommon. In *Sequence to Sequence Learning with Neural Networks*, Sutskever, Vinyals, and Le did something coarser and cleaner: one multilayer LSTM reads an entire source sentence; another multilayer LSTM receives the final hidden state and emits the target one token at a time until an end symbol appears.

The encoder compresses a sequence of any length into a fixed-dimensional vector. The decoder is conditioned on that vector and, at each step, predicts the next word. Training uses teacher forcing: the decoder learns next-token distributions given true prefixes, minimizing the negative log-likelihood of the full target. Inference expands candidates with beam search. The paper used four-layer LSTMs with 1,000-unit hidden states and reported competitive BLEU on WMT’14 English-to-French, with a decoder vocabulary on the order of 80,000 words. For a neural model, that meant optimizing whole-sentence mapping under a single differentiable loss rather than assembling phrase alignments after the fact.

The detail easiest to remember sits in that reversed ABC. The authors found that reversing the source word order—feeding the encoder the source sentence backwards—made training easier and improved long-sentence performance. A working intuition is that early source words then sit closer in time to early target words, shortening the effective path gradients must travel. It is not an elegant linguistic theory so much as an engineering observation that made it into both the main text and the diagram. Depth, width, gradient clipping, and large-vocabulary training tricks carried the other half of the story: multilayer LSTMs could actually be trained.

Seq2Seq did not remove the fixed-vector bottleneck; very long sentences still had to squeeze all information into the encoder’s final state. Attention mechanisms that followed, notably Bahdanau et al., let the decoder re-read source positions at each step; the 2017 Transformer later removed recurrence itself. Those steps are not this paper’s body text. What remains is a transferable task shape: translation, summarization, dialogue, and many later text-to-text problems can first be described as reading one sequence and writing another. Components of the pipeline could still be debated; the frame had unified.

Length analyses in the paper show performance falling more steeply with source length before reversal and flattening afterward. Beam width, vocabulary truncation, and rare-word handling still decide whether BLEU approaches phrase-based systems. End-to-end does not mean knob-free; knobs move from phrase-table feature weights to depth, width, and search. Against statistical phrase systems, neural models could already compete on short sentences and still needed craft on long ones and rare words. Sequence-to-sequence did not abolish feature engineering; it moved feature engineering from phrase tables into architecture and training protocol.

Reading the source backwards does not sound like a grand invention. It is a reminder that early neural translation advances mixed architectural bets with small rewrites of the optimization path. Variable-length mapping was caught by one loss. Long-range dependence was, for a while, shortened by a reversal into a distance LSTMs could learn more stably. Phrase-based systems would not vanish overnight, but research direction had begun to lean: learn whole-sentence correspondence with one network, rather than forever maintain a giant phrase table.
