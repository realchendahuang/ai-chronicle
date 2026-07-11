---
eventId: gpt-1
form: Recipe close-reading
narrativeCenter: One pretrained model receiving many tasks after their inputs have been recast as sequences
emotionalSource: The modesty of a method that became ordinary only after it worked
avoid:
  - Treating GPT-1 as an immature chatbot
  - Making parameter count the cause of inevitable progress
  - Erasing the supervised fine-tuning that every downstream task still required
---

The first GPT paper is easiest to misread backward. The initials now arrive burdened with chat windows, product launches, and arguments about machine intelligence. In June 2018 they named something narrower: a training procedure.

Natural-language processing was full of competent specialists. A model built for textual entailment did not look quite like one built for question answering; a sentiment classifier asked for a different arrangement again. Labels were expensive, architectures multiplied, and the useful knowledge gathered on one task did not move cleanly to the next. Word embeddings traveled, but much of the sentence stayed behind.

The paper proposed a two-stage bargain. First, train a twelve-layer Transformer decoder with roughly 117 million parameters on BooksCorpus to predict the next token. The corpus contained about 7,000 unpublished books, giving the model long stretches of connected prose rather than a bag of isolated sentences. No entailment labels, no answer spans, no sentiment classes—only the pressure to continue written language. Then take that same body into supervised tasks and fine-tune it.

The cleverness lay less in the two stages than in what happened at their border. Different tasks were turned into things a single sequence model could read. Premises and hypotheses were separated by tokens. For multiple-choice questions, the context and question were paired with each possible answer. Similarity could be tested in both sentence orders. A small task-specific output layer remained, but the main machinery no longer had to be rebuilt every time the benchmark changed its grammar.

That grammar of reuse was the paper's real invention. Its “general” model was not an assistant waiting for arbitrary instructions. It did not simply receive a request and discover the task. Researchers still formatted the input, supplied labeled examples, and adjusted the weights for each dataset. Results improved on nine of twelve datasets, not all twelve; the auxiliary language-model objective helped unevenly. The authors' ablations matter because they keep the recipe from becoming a creation myth.

Nothing in the method looked theatrical. Unsupervised pretraining was not new, the Transformer had already been published, and fine-tuning was familiar. What changed was the joinery. A general body could learn from abundant unlabeled prose, while a comparatively small amount of supervised data told it what particular work to do.

Later systems enlarged the body, reduced adaptation, and moved more task specification into prompts. None of that was present yet. GPT-1's concrete result was narrower and easier to verify: twelve supervised evaluations, one shared pretrained body, and nine new state-of-the-art scores after task-specific fine-tuning.
