---
eventId: gpt-1
form: recipe card
narrativeCenter: pretraining a 12-layer decoder on BooksCorpus, then casting twelve supervised tasks as one sequence interface
emotionalSource: the model body no longer redrawn per task—task format pushed into the text itself
avoid:
  - back-projecting GPT-3/ChatGPT glow onto 2018
  - inflating what 117 million parameters could do
  - erasing the fact that fine-tuning was still required
---

OpenAI’s 2018 GPT paper—later called GPT-1—puts the method in the title: *Improving Language Understanding by Generative Pre-Training*. The recipe has two steps. Written plain, it still set the default path for years.

Step one: language-model pretraining on BooksCorpus. The model is a 12-layer Transformer decoder with about 117 million parameters, hidden size 768, twelve attention heads, and a 512-token context. The objective is ordinary next-token prediction. Book text supplies long contiguous prose better suited to document-level dependence than bags of shuffled sentences. Step two: keep the body, fine-tune on labeled data. Entailment, question answering, semantic similarity, and classification are rewritten as sequences the model can read: premise concatenated with hypothesis, question with options, delimiters and task-style markers where needed. A linear head trains on the task labels.

The paper reported state-of-the-art results on nine of twelve tasks. What matters historically is less whether every score still holds than how transfer worked: one decoder body first learns, on unlabeled text, what tends to come next, then learns on much smaller labeled sets which label a problem should emit. Word vectors transfer lexical geometry; this transfers conditional structure over spans of context.

GPT-1 still needed fine-tuning and did not yet show the later fluency of switching tasks by prompt alone. Its place is the simple, scalable story of general pretraining plus task adaptation: deepen the stack, widen the hidden size, grow the corpus, and leave the skeleton unchanged. Decoder lines later diverged from BERT’s encoder line—generation on one side, bidirectional understanding on the other—but both inherited the same industrial intuition: the expensive representation learning should happen before labeled tasks arrive.

117 million parameters look modest on later tables. In 2018 they were enough to show that a Transformer decoder was not only half of a translation system. It could first compress language as a general model, then serve as a shared backbone for many understanding benchmarks.

Task rewrites were concrete: entailment concatenated premise and hypothesis; classification mapped text to a linear head; QA organized passage, question, and options as readable sequences. The same BPE vocabulary and positional encodings spanned pretraining and fine-tuning. Book-length prose offered document coherence that bags of sentences do not. Nine of twelve tasks hitting then-best numbers would age; the two-stage recipe—unlabeled language modeling, then supervised adaptation—organized experimental budgets for years.
