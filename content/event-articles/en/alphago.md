---
eventId: alphago
form: five-game match account
narrativeCenter: move 37 in game two and move 78 in game four as reciprocal revisions of human and machine judgment
emotionalSource: the system's unfamiliar choice and Lee Sedol's sole win reflecting each other's capacity to leave established play
avoid:
  - inventing weather, facial expressions, or private thoughts in Seoul
  - compressing the match into effortless machine domination
  - using last-frontier rhetoric in place of the actual games and architecture
---

The Seoul match ended 4–1, but its most durable record is often written as 37 and 78: one move by AlphaGo in game two, one by Lee Sedol in game four. Each forced the other side into a region that its ordinary judgment had not valued highly.

That exchange depended on a system built to ration search. Go has too many possible positions for exhaustive enumeration. AlphaGo used policy networks, trained from professional games and self-play, to propose moves; a value network estimated the probability of winning from a position; Monte Carlo tree search spent computation where those estimates suggested it might matter. The learned judgment narrowed the tree, and the tree in turn tested the judgment.

AlphaGo arrived with a 5–0 victory over European champion Fan Hui; Lee had won eighteen world titles. AlphaGo then took the first three games. In game two, move 37 departed from professional convention and became an object of study beyond the match itself. Starting from human records, self-play and search had pushed a low-priority possibility onto the board. The move did not make the program humanlike. It enlarged the set of positions that human professionals now had reason to examine seriously.

Game four reversed the direction of surprise. Lee's move 78 was also highly unusual. It pushed AlphaGo into a rare position, after which the system made a series of errors. Lee won the game—his only victory in the match. The loss placed a clean edge around the system's strength. A high overall win rate did not eliminate failures in unfamiliar states; one sufficiently unlikely continuation could cause evaluation and search to drift together.

AlphaGo recovered to win game five. The architecture's division between learned judgment and explicit search would feed directly into later self-play systems, but the match resisted becoming a clean demonstration of invulnerability. Black 37 showed a machine selecting a move that established practice neglected. White 78 showed a human finding a position where the machine's evaluation failed. The final score records the stronger player across five games; the two move numbers preserve how much both sides still had to discover about the other's judgment.
