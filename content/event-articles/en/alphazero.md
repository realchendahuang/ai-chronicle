---
eventId: alphazero
form: methodological unity under clean rules
narrativeCenter: the same self-play, policy-value network, and MCTS stack learning chess, shogi, and Go separately from random parameters
emotionalSource: expert game records demoted from requirement to option—training logs left with rules and compute
avoid:
  - claiming one network jointly masters all three games
  - inflating “no human knowledge” while rules and search are themselves knowledge
  - covering board games with AGI rhetoric
---

AlphaGo showed deep reinforcement learning could play Go at a high level, yet still carried supervised pretraining on human games and a pipeline tailored to one board. AlphaZero, public in late 2017 and later published fully in *Science*, cleans the question: given rules, self-play, and enough compute, can one method separately master chess, shogi, and Go?

The answer is three training runs, not one weight file spanning three games. Each game starts from randomly initialized parameters with no human games as supervised labels. A network outputs move probabilities and a position value; Monte Carlo tree search uses the network as prior and evaluator; improved policies from search become training targets. Board representation, legal actions, and terminal outcomes come from the rules. There is no opening book, no handcrafted evaluation function of the kind traditional chess engines rely on, and no long list of game-specific heuristics. The paper reports that within set training budgets AlphaZero beat contemporaneous match setups against Stockfish in chess, Elmo in shogi, and a comparable AlphaGo Zero setup in Go—time controls, hardware, and opponent versions are those of the paper’s tables, controlled experiments rather than open human matches.

The slogan “no human knowledge” needs unpacking. Rules, symmetry handling, search, and hyperparameters remain human designs. What is removed is move priors from expert game records. For the chess community that cut especially deep: engine progress had long leaned on hand-built evaluation and books, while AlphaZero rewrote style through self-play data—often described as favoring long-term piece activity and unconventional sacrifices. Those descriptions come from game observation and commentary; they should not be inflated into a mystical essence of style.

Unity of method matters more than any single famous game. In environments with clear rules, cheap simulation, and decidable outcomes, expert data can fall from gate to accelerator. A closed loop of policy-value network and tree search turns compute into games and games into a stronger network. Real-world robotics, dialogue, or scientific discovery rarely offer such clean simulators. AlphaZero is not a proof of general intelligence; it is a sharp specimen of what highly simulable decision problems allow.

Three boards, three from-scratch weight sets, one algorithmic story. After human game records leave the main training loop, what remains is the full legal game space the rules permit—and the self-play time required to fill it.

Training followed one hyperparameter narrative across three games: self-play generates data, the network updates, search guided by the new network produces stronger targets. Action encodings and board planes differ; the algorithmic skeleton is shared. Curves against traditional engines mark crossover times under paper match settings. “No human knowledge” must be unpacked: rules, symmetries, search, and hyperparameters remain human designs. What drops is move priors from expert records. Clean simulators make that drop powerful; messy real-world tasks rarely offer the same cleanliness.
