---
eventId: td-gammon
form: a report on a self-play experiment
narrativeCenter: how a small 1992 neural network approached master level at backgammon by playing only itself
emotionalSource: the shock of skill grown from zero experience, without game records or human demonstration
avoid:
  - inventing Tesauro's daily life at IBM
  - claiming TD-Gammon beat human masters
  - substituting an "RL milestone" label for the mechanics of TD(λ)
---

In 1992 IBM researcher Gerald Tesauro published a paper about backgammon whose experimental result shook the reinforcement-learning community. He had trained a neural network to play backgammon and named it TD-Gammon. The remarkable thing about the training: it had studied no human game records and received no coaching from grandmasters. Its only teacher was itself—playing against itself and learning from wins and losses. And this self-taught program played near human master level.

Backgammon was a cunning choice. Fifteen checkers move by dice rolls, randomness is everywhere, and position evaluation is too complex for exhaustive search. That complexity made backgammon a perfect sandbox for testing learning algorithms—if a program could find winning skill in that chaos by itself, then "learning from experience" had gotten its hardest proof. TD-Gammon's network was small: input was the board position, output an estimate of the current player's win probability, and the engine was TD(λ)—temporal-difference learning.

The TD(λ) idea is unusual. Instead of waiting for the game to end, the network updates its weights at every move, using the difference between the current prediction and the next-step prediction. The gap between successive predictions is itself the learning signal. Starting from random weights, the program played thousands and thousands of games against itself, gradually carving "intuition about positions" into its parameters. No hand-designed reward function—just the plain principle that predictions should align with the future.

The results surprised everyone. TD-Gammon not only learned basic strategy; it developed advanced tactics that human experts recognized. After the 1992 version, Tesauro added more hidden units and longer training, pushing skill further—analyses suggested it approached world-class level. Its occasional blunders were studied carefully, because they revealed the blind spots of pure self-learning. More importantly, it proved that in a sufficiently complex game, pure self-play can approach top skill without human knowledge as a crutch.

The influence reached far beyond backgammon. When AlphaGo beat Lee Sedol in 2016, the DeepMind team explicitly named self-play, value networks, and learning from experience as core ideas—within that lineage, TD-Gammon is an unavoidable name. AlphaZero later dropped human games entirely and trained from scratch by self-play, pushing TD-Gammon's philosophy to its extreme. From 1992's backgammon to 2017's chess and Go, self-play runs like a thread through the brightest moments of reinforcement learning.

In hindsight, TD-Gammon's meaning is often compressed into one line: a machine can reach top skill with no teacher other than itself as opponent. That sentence sounds ordinary today, but in 1992 it was a result people doubted until they had to believe it. The small network playing countless games against itself in an IBM lab was, in the plainest way, a preview of one of the most spectacular sights the AI world would later see—machine learning that begins from a blank slate.
