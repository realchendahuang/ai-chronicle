---
eventId: alphazero
form: training-loop essay
narrativeCenter: search producing the targets for a network when human game records are removed
emotionalSource: the disappearance of accumulated expert play from the input while human choices remain everywhere in the learning system's design
avoid:
  - claiming one trained network used the same parameters for all three games
  - defining tabula rasa as an absence of rules, computation, or architectural priors
  - using match results only to stage superhuman spectacle
---

Strong chess engines had long contained the residue of human chess knowledge: evaluation features designed and tuned over years, move-ordering rules, pruning methods, and game-specific engineering. AlphaGo learned further from records of professional play before improving through self-play. AlphaZero asked what could be removed if the rules of the game and the ability to simulate it remained.

Each training run began from random play. Given a board position, one neural network produced two outputs: probabilities over legal moves and an estimate of the eventual result. Monte Carlo tree search used these predictions to explore continuations. The stronger move distribution returned by search then became a target for the network. Once a game ended, the actual win or loss corrected the value estimates made along the way. The updated network played the next batch of games, producing new positions and therefore its own next training set.

There was no fixed teacher in this loop. The network gave search a direction. Search improved on the current policy and returned a lesson. Outcomes supplied a final correction. As self-play advanced, the source of examples advanced with it.

The final *Science* paper reported different training times for the three runs: about nine hours for chess, twelve for shogi, and thirteen days for Go. During play AlphaZero searched roughly 80,000 chess positions per second, compared with about 70 million for Stockfish; the learned policy and value made the much smaller search more selective.

The word *general* requires care. AlphaZero was not one fully trained network moving among the three boards with a shared set of acquired skills. The board representations and legal actions differed, and each game was trained separately from random parameters. What remained common was the algorithmic arrangement: one policy-and-value network, self-play, tree search, and learning from the result. The method transferred; the learned chess, shogi, and Go knowledge did not.

“From scratch” also had a boundary. Human game records and handcrafted evaluation functions were absent. Game rules, network architecture, objective, search procedure, and very large computation were supplied by researchers. In environments where the rules are exact and millions of trials can be simulated cheaply and correctly, that is enough for the system to manufacture its own experience.

Experience in AlphaZero began with rules, architecture, search, computation, and a closed feedback loop. Once those were in place, the author of the training record could change. It could be the learner itself, always one game behind its future version.
