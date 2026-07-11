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

Three boards. Three weight sets started from random parameters. One algorithm.

AlphaZero, public around 5 December 2017 and later published fully in *Science*, cleans the question: given rules, self-play, and enough compute, can one method separately master chess, shogi, and Go? The answer must be written three times—not one weight file spanning three games, but three independent training runs. No human games as supervised labels. A network outputs move probabilities and a position value. Monte Carlo tree search uses the network as prior and evaluator; improved policies from search become training targets. Board representation, legal actions, and terminal outcomes come from the rules. There is no opening book, no handcrafted evaluation function of the kind traditional chess engines rely on, and no long list of game-specific heuristics.

The paper reports that within set training budgets AlphaZero beat contemporaneous match setups against Stockfish in chess, Elmo in shogi, and a comparable AlphaGo Zero setup in Go. Time controls, hardware, and opponent versions are those of the paper’s tables—controlled experiments, not open human matches, and not three games stuffed into one neural network.

AlphaGo had already shown deep reinforcement learning could play Go at a high level, yet still carried supervised pretraining on human games and a pipeline tailored to one board. What AlphaZero removes is move priors from expert records. The slogan “no human knowledge” needs unpacking: rules, symmetry handling, search, and hyperparameters remain human designs; what is demoted is the dominance of human game frequencies over which moves count as good. For the chess community that cut especially deep—engine progress had long leaned on hand-built evaluation and books—while self-play data rewrote the frequencies of sacrifices and long-term pressure that commentators often notice. Those descriptions come from games and commentary; they should not be inflated into a mystical essence of style, and rigorous comparison still requires matched time and hardware.

Unity of method matters more than any single famous game. In environments with clear rules, cheap simulation, and decidable outcomes, expert data can fall from gate to accelerator. A closed loop of policy-value network and tree search turns compute into games and games into a stronger network. Robotics, dialogue, and scientific discovery rarely offer such clean simulators. AlphaZero is not a proof of general intelligence; it is a sharp specimen of what highly simulable decision problems allow—transferable narrative, unshared weights; cleanliness that belongs to the problem itself.

Random initialization, self-play, a joint policy-value network, Monte Carlo tree search: a short list under strong constraints. The strength is in rules and simulators, not in the slogan “zero knowledge.” Read the constraints, and the transfer boundary comes into focus.
