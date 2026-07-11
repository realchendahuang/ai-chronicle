---
eventId: chinchilla
form: ratio amendment
narrativeCenter: under fixed compute, scale model size and tokens roughly equally—how 70B Chinchilla beat 280B Gopher with more data
emotionalSource: the cool embarrassment of learning “bigger” sometimes meant “underfed”
avoid:
  - treating Chinchilla laws as eternal physics
  - erasing Kaplan scaling’s historical role
  - drowning the 400-model grid in investment narrative
---

A 280-billion-parameter Gopher lost to a 70-billion-parameter Chinchilla that had eaten about 1.4 trillion tokens.

On 29 March 2022 DeepMind put a long empirical paper on arXiv: *Training Compute-Optimal Large Language Models*. Jordan Hoffmann and coauthors asked a procurement-meeting question: given a fixed training FLOPs budget, how large should the model be and how many tokens should it see? If the only language at the table is “add parameters,” budget review defaults to larger \(N\). This paper tried to supply a second language: are there enough tokens?

The backdrop was Kaplan et al.’s 2020 scaling curves. Those curves made “add parameters” defensible—and nudged some teams to grow \(N\) while data budgets lagged. Hoffmann’s diagnosis is sharp: many public large models were significantly undertrained—parameter counts rose without matching token counts. A pretty loss curve along the parameter axis does not guarantee that downstream tasks have been fed enough data. To recalibrate, the team trained over 400 language models from about 70 million to over 16 billion parameters on five to 500 billion tokens, fitting loss across the grid. The grid’s point is that the ratio is not pen-and-paper guesswork; it is an experiment that can draw contour lines.

Three estimation approaches pointed at one engineering slogan: for compute-optimal training in their regime, model size and training tokens should scale roughly in tandem—double parameters, roughly double tokens. The slogan carries experimental conditions: architecture family, data mix, optimizer, and eval protocol live in the paper. It is not a physical constant; it is a contour map measured on DeepMind’s grid. Change data quality, repetition policy, or test-time compute, and the contours move. The authors state the conclusion under their present setting rather than declaring scaling research finished.

Validation used matched compute. Gopher held 280 billion parameters. Chinchilla cut parameters to 70 billion, raised training data to about 1.4 trillion tokens, and spent comparable training compute. On the authors’ broad downstream suite it won uniformly and significantly; average MMLU accuracy reached 67.5%, more than seven points above Gopher. A smaller dense model also meant cheaper fine-tuning and inference—the paper lists that as a direct benefit for downstream use, not only a leaderboard rank. For people serving real traffic, fewer active parameters often sting the bill more than nominal training size.

Effects land on planning spreadsheets. Managers started asking whether their 70B had seen enough tokens, or whether a larger \(N\) was masking data hunger. Data collection, cleaning, and deduplication budgets gained a voice equal to chip orders. Later work such as LLaMA stressed comparatively smaller models with ample tokens in the same direction, even when recipes differed in data, vocabulary, and schedule. Chinchilla did not cancel scaling laws; it rewrote which knob to turn first when FLOPs are scarce. Kaplan established the habit that scale variables can be fit and extrapolated; Chinchilla adjusted what “compute-optimal” means under a given regime. They are successive revisions, not mutual annihilation.

Later practice keeps moving the contour—deduplication, quality filters, curriculum learning, test-time compute, mixture-of-experts all shift “optimal.” Over-reading into slogans like “always train 20 tokens per parameter” collides with new data regimes. A mature reading treats Chinchilla as a falsifiable budget update: on 2022’s grid and tasks, a well-fed 70B can beat a hungry 280B. For anyone locking chips months ahead, that sentence is ruder—and more useful—than “bigger parameters are progress,” because it lets you write in the table that you may need data pipelines, not only deeper weight files.
