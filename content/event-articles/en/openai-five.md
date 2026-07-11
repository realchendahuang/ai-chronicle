---
eventId: openai-five
form: Post-match technical reckoning
narrativeCenter: A two-game result resting on roughly forty-five thousand years of simulated play under constrained rules
emotionalSource: The compact time of a sports score beside the almost incomprehensible duration manufactured for training
avoid:
  - Inventing team reactions or specific team fights
  - Treating the restricted hero pool as complete mastery of Dota 2
  - Converting a game victory into proof of general intelligence
---

On the scoreboard, there was very little to record: OpenAI Five 2, OG 0.

The match took place in April 2019 against the reigning Dota 2 world champions. Each game unfolded at ordinary speed. The system that won them had arrived by another clock. Its final training line extended across ten months and accumulated the equivalent of roughly 45,000 years of self-play. OpenAI described the distributed system as manufacturing about 180 years of game experience each day and reported a total of 800 petaflop/s-days of computation. Since the version defeated at The International in 2018, training compute had increased eightfold.

Dota 2 provided the mess that board games remove. It is real-time and partially observed. Five teammates act at once, divide resources, choose when to fight or retreat, and pursue plans whose consequences may arrive much later. There is no courteous alternation of turns. OpenAI Five did not watch the broadcast image; its observation was a large vector—about 20,000 numbers describing game state.

The researchers had expected that the environment might demand elaborate hierarchical reinforcement learning. Much of the actual progress came from pushing familiar components—PPO, self-play, distributed simulation—across a larger and more durable training system. Continuity itself became an engineering problem. When the game changed or the model architecture needed alteration, a technique the team called “surgery” transferred parameters so that the long run did not have to begin again.

The victory's perimeter was plain. The final match used 17 heroes. An attempted expansion to 25 did not bring the new heroes to professional level in time, and Lich was removed after a major change in Dota's 7.20 update. Items and other rules were also constrained. Most important, a game can be copied into thousands of parallel environments. Many real problems cannot supply centuries of cheap, automatically scored experience.

After the exhibition, a public cooperative mode produced a less decisive but useful observation. Agents trained only through self-play could join human teammates without immediately becoming incoherent. One tester, Sheever, described an AI-controlled Viper sacrificing itself for her and the unusual trust that followed. The remark is evidence about a player's experience, not evidence that the system understood loyalty.

OpenAI retired Five after the event. The score therefore did not begin a long reign. It closed an engineering account. If experience can be generated, synchronized, and scored in vast quantities, a policy can acquire forms of coordination that once looked inaccessible to reinforcement learning. But the bill remains attached. Behind two clean wins sat 800 petaflop/s-days and forty-five thousand synthetic years—a duration made invisible only because the environment permitted time to be copied.
