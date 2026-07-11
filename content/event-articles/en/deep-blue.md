---
eventId: deep-blue
form: six-game ledger
narrativeCenter: a match publicly staged as human versus machine but won by a specialized system of search, hardware, databases, and chess expertise
emotionalSource: the certainty of the final score beside the uncertainty of what that victory represented
avoid:
  - inventing expressions, gestures, or atmosphere at the match
  - using brute force as a dismissal rather than an incomplete technical description
  - inferring general intelligence from a chess championship result
---

**Game one: human. Game two: machine. Games three through five: draws. Game six: machine. Final score: 3½–2½.**

The six-game rematch held in New York in May 1997 can be reduced to that ledger. The final game fell on 11 May. It made IBM’s Deep Blue the first computer system to defeat a reigning world chess champion in a match under standard time controls. The contest used classical controls and entered the public record of human–machine play; it was neither a blitz exhibition nor a show match in which one side consulted the open internet. The entries also carried an earlier result: Garry Kasparov had beaten Deep Blue’s predecessor 4–2 in Philadelphia the year before, leaving IBM’s team twelve months to revise the machine.

They expanded its endgame databases and changed its evaluation of positions. More grandmasters helped tune the chess knowledge embedded in the system. Thirty-two processors worked in parallel, and specialized chess chips allowed Deep Blue to examine roughly 200 million positions each second—the order of magnitude repeated in IBM materials and technical papers (a vendor-reported throughput that still has to be understood together with pruning and the evaluation function when talking about effective search depth in real games). Two hundred million evaluations per second still required an account of which variations deserved depth. An evaluation function converted king safety, material, space, and position into comparable values. Opening books and endgame databases brought accumulated chess analysis into the computation. Speed became strength only after specialized hardware, search, stored positions, and judgments that strong human players had helped formalize were arranged around it. Later articles in journals such as *Artificial Intelligence* itemized those components rather than leaving only the slogan that a computer had won.

“Brute force” is thus both true and insufficient. Without its enormous rate of evaluation, Deep Blue could not reach the same search depth. Without pruning and evaluation, additional computation would disperse through a game tree too large to exhaust. The machine did not see a chess position in the manner of a person, but neither did it inspect every legal future without preference. Engineers had made a highly structured domain legible to a particular kind of massive calculation: large state space, explicit rules, decidable outcomes, tunable evaluation.

The order of the games amplified the symbolism. Kasparov won first. Deep Blue equalized. Three draws suspended the match, and the final game settled it. For the public, a prized intellectual activity had produced an unambiguous human loss. For IBM, the result was a feat of computing and domain engineering. The two accounts occupied the same score sheet without becoming identical. Post-match arguments about parameter adjustments and whether logs should be public also showed that “standard match conditions” could still be contested after the final move.

Deep Blue’s chess strength ended at the edge of chess; medicine, language, and ordinary reasoning remained elsewhere. The match established two limits at once: a specialized machine could surpass the strongest human in a difficult intellectual task, and the achievement could remain completely enclosed by that task. After the system’s retirement, computers continued to dominate chess—but that is a story of games and search, not a certificate of general intelligence.

Technical papers also record hundreds of features and tunable parameters in the evaluation function, and opening books that kept the machine from wasting time inside known theory. Specialized chips hardened the hot paths of move generation and evaluation so that “two hundred million” was a pipeline throughput, not an abstract slogan. Kasparov’s camp raised post-match questions about parameter changes and transparency; IBM stressed engineering within the agreed rules. The dispute itself shows that “fairness” in a human–machine match depends on how finely the protocol is written—time controls, whether inter-game modifications are allowed, whether logs are public—all change the story the public receives.

Deep Blue was retired after the match, leaving a score that could no longer grow and a victory that could still be itemized: positions evaluated per second, branches pruned, chess knowledge encoded, and capability ending at the board’s edge. Later claims that a machine has “exceeded humanity” can be returned to the same ledger before the slogan is allowed to stand: which task, under which rules, on which hardware. Where the ledger cannot be filled in, slogans begin to grow.
