---
eventId: gato
form: a record of a generalist-agent experiment
narrativeCenter: how DeepMind squeezed games, a robot arm, and dialogue into a single Transformer
emotionalSource: excitement about the vision of "one model doing everything"
avoid:
  - calling Gato an implementation of general artificial intelligence
  - ignoring the limits of its performance across tasks
  - using superlatives like "the most powerful model"
---

In May 2022 DeepMind released Gato, an agent that tried to be "a bit good at everything." The paper's title said it plainly—"A Generalist Agent"—and it used the weights of a single Transformer to handle 604 tasks, from playing Atari games and captioning images to controlling a real robot arm for physical manipulation. In that era's context it was nearly a declaration: perhaps we do not need a separate model for every task.

Gato's technical path was not mysterious; if anything it was plain. Unify text, images, and actions into token sequences and train a Transformer on all of them together. It did not dominate any single task—Atari play fell short of dedicated reinforcement-learning agents, and the robot control was hardly refined. But its meaning lay precisely in that breadth: one model, many abilities, a route demonstrated rather than a record broken.

Before Gato, vision, language, and control largely lived in separate models and separate research communities. Gato was a high-profile public demonstration of the generalist route: unifying perception, language, and action in one model is feasible and worth taking seriously. After the paper, debate about "is this the road to AGI" spread quickly—even though Gato was far from general intelligence, it turned that topic from a slogan into a discussable technical route.

Everything that followed shows the route never vanished; it kept evolving. GPT-4o packed vision, audio, and text into one model; SeedRealtime made audio-visual dialogue full-duplex; Gemini Robotics wired multimodal models into robot bodies. They are all descendants of Gato's lineage, with scale and technique several generations ahead.

Looking back, Gato reads like a "have it all" experiment: not chasing first place in any single task, but proving a unified model can touch many worlds at once. By 2026, when multimodal models and embodied AI have become the mainstream narrative, that 2022 agent that was a bit good at everything stands as an early landmark on the long road.
