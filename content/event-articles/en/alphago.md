---
eventId: alphago
form: five-game match report
narrativeCenter: how policy nets, value nets, and Monte Carlo tree search left move 37 and move 78 inside a 4–1 Seoul scoreline
emotionalSource: a machine’s unfamiliar move mirrored by the human’s only win—not a one-way crush
avoid:
  - inventing weather, facial expressions, or inner monologue
  - compressing five games into machine domination
  - substituting “last bastion” rhetoric for board and architecture
---

4–1.

In March 2016 DeepMind’s AlphaGo finished a five-game match against Lee Sedol in Seoul with that score. The pre-match contrast was already sharp: AlphaGo had beaten European champion Fan Hui 5–0; Lee held eighteen world titles. Go’s state space is too large for exhaustive search. A program must decide which moves deserve calculation and estimate who is ahead before the game ends.

The *Nature* architecture splits those judgments. A policy network, trained first on professional games and then with self-play, proposes move distributions and narrows candidates. A value network estimates winning probability from a position. Monte Carlo tree search allocates compute under both signals, concentrating simulations on promising lines. The pipeline roughly imitates humans, then strengthens through self-play, feeding search-generated games back into the networks. It is neither a fixed book nor a single neural intuition drop. Learning points; search checks.

AlphaGo took the first three games. Move 37 in game two—AlphaGo playing Black—departed from ordinary professional priorities and was replayed for years afterward. The system began from human data, yet self-play and search pushed a low-prior move onto a real board. The program still worked by its own evaluations; the set of lines professionals bother to read carefully gained a new coordinate.

Game four reversed the direction. Lee’s move 78 as White was equally unusual, forcing AlphaGo into a rare position and a cascade of errors. Lee took his only win of the match. The game writes the system boundary clearly: a global win-rate edge does not erase fragility outside the training distribution; a sufficiently strange local fight can still knock evaluation and search off together. AlphaGo won game five; the scoreboard froze.

Match conditions used Chinese rules and limited time; AlphaGo ran on distributed compute coordinating local and cloud machines. Public materials describe policy and value training stages and self-play at enormous scale. Move 37 and move 78 endure because they turn the abstract idea of out-of-distribution moves into coordinates one can click through in game software.

Public narrative likes to call the five games a changing of eras. Players and engineers more often return to two numbers—37 and 78. One move from the system, one from Lee, both landing where prior experience preferred not to look first, each exposing a judgment edge the opponent had not seen. Go was not “solved” by enumeration. What was shown was a division of labor between learning and search, and how self-generated games extend regions human game records never cover. AlphaZero would later drop the dependence on human games; Seoul still sits at the moment when human and machine shared one board and rewrote each other’s intuitions.

4–1 is not a shutout. Moves 37 and 78 are not slogans; they are coordinates—clickable, arguable, revisable by later versions. The public five games welded “policy proposes, value estimates, search spends compute” into memory at two places on a board.
