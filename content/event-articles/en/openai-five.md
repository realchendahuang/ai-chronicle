---
eventId: openai-five
form: match narrative inside a rule fence
narrativeCenter: how five agents used massive self-play to coordinate in a restricted but still chaotic real-time team game
emotionalSource: the champions adapting across two games while the machine had accumulated the equivalent of roughly 180 years of play each day
avoid:
  - claiming unrestricted domination of full Dota 2
  - inventing player emotions or caster dialogue
  - hiding the sample-efficiency cost
---

On 13 April 2019, OpenAI Five met OG in San Francisco. OG had won the previous year’s Dota 2 International; the exhibition was best of three. Five won the first two games, ending the series early. On screen, five heroes pushed lanes, reinforced one another, and entered team fights as a unit. Behind them was no coach scripting every maneuver. Each agent controlled one hero and learned through a shared signal: whether the team eventually won.

Dota 2 is less orderly than a board game and closer to an experiment that keeps trying to escape its apparatus. There are no clean turns. Fog of war hides much of the map, matches last tens of minutes, and the consequence of an early purchase or movement may not become clear until much later. Every agent acts with partial information while anticipating teammates and opponents. Because victory belongs to the group, deciding how much credit any single action deserves becomes part of the learning problem.

OpenAI’s answer was to turn compute into experience. Large-scale distributed reinforcement learning kept the system playing against changing versions of itself. Public materials translated the volume into roughly 180 years of human play each day. The training system used policy optimization centered on PPO, and observations largely arrived as structured state from the game API rather than as an attempt to understand the entire match from raw video. Reward design, infrastructure, and a maintained population of opponents were part of the capability. The curve did not emerge from the words *self-play* alone.

The public victory also stood inside a visible rule fence. The match used a pool of about seventeen heroes and restricted some items and mechanics, far short of every combination in full Dota. The clipped environment still demanded real-time control, long planning horizons, and five-player coordination, so beating OG was a substantive result. It was not evidence that AI had conquered unrestricted Dota 2. When patches alter heroes, numbers, or maps, the compute required to adapt reveals a cost curve very different from that of professional players.

After the exhibition, public Arena matches gave human teams further opportunities to probe Five, exposing strengths and failures under unfamiliar tactics and distribution shifts. Those encounters were closer to the research question than a trophy alone: how much does a policy trained to an extreme in one environment carry into a slightly different one? Five did not settle the question. It showed that scaled self-play could produce intricate cooperation in a noisy multiplayer world, and that the cooperation depended on an extraordinary quantity of simulated experience inside a carefully maintained training universe.

The two wins over OG belong in the record, but so do the hero list and the “180 years per day” conversion. One says what the system defeated; the other says how the victory was manufactured. OpenAI Five pushed reinforcement learning from boards into a real-time team battlefield while leaving a difficult bill outside the arena: when experience can be generated and reset at speed, learning scales dramatically; when reality cannot, sample cost returns as the boundary.
