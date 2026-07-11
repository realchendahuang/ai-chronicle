---
eventId: openai-five
form: Public match record under restricted rules
narrativeCenter: Five agents, about a 17-hero pool and other limits, winning the first two games of a best-of-three exhibition against OG
emotionalSource: Real-time team play grown from self-play—with rule cuts always on stage
avoid:
  - Claiming unrestricted full-Dota dominance
  - Inventing player emotions or caster lines
  - Hiding sample-efficiency costs
---

In April 2019, OpenAI Five faced OG—champions of The International 2018—in a public exhibition. The series was best of three; OpenAI Five took the first two games. Five agents each controlled one hero and coordinated in real time. That result must be read with the constraints: a pool of about seventeen draftable heroes, plus limits on items and some mechanics—not the full unrestricted rule set of then-current ranked play. Seventeen heroes and item limits are not footnotes; they are conditions under which the result holds.

Dota 2 differs from Go in the environment. Time is continuous, the action space huge, vision partial, games lasting tens of minutes, outcomes hinging on resource allocation, teamfights, and buyback timing. OpenAI stacked experience with large-scale distributed reinforcement learning and self-play; public materials described on the order of 180 years of human-play-time equivalent per day (an order-of-magnitude figure from communications). On the algorithm side sat large-scale policy-gradient variants such as PPO; rewards and observation features were tightly bound to Dota’s rules. Observations often came from structured game-API features rather than raw pixels.

The public wins showed that, inside a clipped but still ferociously complex real-time team game, pure self-play can produce strategies that beat a world-champion roster—at least under that version’s rules and hero pool. They did not show that reinforcement learning had “solved” esports, nor that sample cost is affordable for arbitrary tasks. A new patch or map often means burning compute again. Partial observability and long-horizon credit assignment remain hard; human players’ adaptation and transfer do not sit on the same cost curve.

Strip the conditions and inflate the win, and you have publicity, not history. Five pushed the RL story from turn-based perfect information onto a slice that must handle fog of war and teamfight timing—and pushed the bill for “compute traded for data” into public view. The wins sit inside constraints; the constraints themselves belong in the record. One hundred eighty years per day is good for headlines and good for cost warnings—not enough alone to carry “general intelligence has arrived.”

After the exhibition, full reproduction remained extremely hard. What remained were wins inside the rule fence—and the fence itself. Later game AI and multi-agent research kept citing its self-play and large-scale training experience while discussing sample efficiency and transfer more carefully. Read Five with the hero pool list and the years-per-day conversion together; without both, the wins become myth.

Partial observability means each agent must maintain beliefs under fog of war; team rewards bring credit-assignment difficulty. Engineering eases this with reward shaping and features without canceling the difficulty in theory. The public match shows policy strength under given constraints—not transfer cost after rules change.
