---
eventId: openai-five
form: public match record under restricted rules
narrativeCenter: five agents, a 17-hero pool and other limits, winning the first two games of a best-of-three exhibition against 2018 TI champions OG
emotionalSource: real-time, partially observed, long-horizon team play grown from self-play—with rule cuts always on stage
avoid:
  - claiming unrestricted full-Dota dominance
  - inventing player emotions or caster lines
  - hiding sample-efficiency costs
---

In 2019 OpenAI Five faced OG, champions of The International 2018, in a public exhibition. The series was best of three; OpenAI Five took the first two games. Five agents each controlled one hero and coordinated in real time on one team. That result must be read with the constraints: a pool of about seventeen draftable heroes, plus limits on items and some mechanics—not the full unrestricted hero pool and rule set of then-current ranked play.

Dota 2 differs from Go in the environment itself. Time is continuous, the action space is huge, vision is partial, games last tens of minutes, and outcomes hinge on five-person resource allocation, stacking, runes, teamfights, and buyback timing. OpenAI stacked experience with large-scale distributed reinforcement learning and self-play. Public materials described on the order of 180 years of gameplay accumulated per day (a human-play-time conversion used in communications—treat it as an order-of-magnitude figure). On the algorithm side sat large-scale variants of policy-gradient methods such as PPO, with replay and heavily engineered training infrastructure; reward shaping and observation features were tightly bound to Dota’s rules.

The public wins showed that, inside a clipped but still ferociously complex real-time team game, pure self-play can produce team strategies that beat a world-champion roster—at least under that version’s rules and hero pool. They did not show that reinforcement learning had “solved” esports, nor that sample cost is affordable for arbitrary tasks. Simulated games on a multi-million-year scale bought an environment-specific agent; a new map or patch often means burning compute again. Partial observability and long-horizon credit assignment remain hard; human players’ adaptation and transfer do not sit on the same cost curve.

OpenAI Five sits between AlphaGo’s board clarity and open-world mess. It pushed the RL story from turn-based perfect information into fights that require positioning and ability timing, and it pushed the logic of “compute for data” into public view: without a cheap simulator the path does not travel far. After the exhibition, full reproduction barriers stayed high. What remains are games won inside a rule fence—and the fence itself. Seventeen heroes and the other limits remind readers that breakthroughs in complex environments often happen first on engineered slices.

Infrastructure mixed large GPU and CPU farms; observations were structured game features from the API rather than raw pixels. Hero-pool limits reduced combinatorial explosion so self-play could grind roster understanding. Patch version and draft lists live in technical blogs; strip those constraints and claims of “solving Dota” overreach. Credit assignment across minutes of fog-of-war play remains hard even with reward shaping. The portable lesson is that complex team games can be sliced, and that compute buys strategy only inside the slice.
