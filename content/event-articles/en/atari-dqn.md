---
eventId: atari-dqn
form: a live demonstration of a paradigm shift
narrativeCenter: how a network that learned to play games from raw pixels pushed deep reinforcement learning into the mainstream
emotionalSource: the wonder of watching a machine figure out game strategies on its own, and the force of one paper redirecting a field
avoid:
  - exaggerating DQN's performance across all Atari games
  - inventing DeepMind internal stories
  - equating DQN with general AI
---

In late 2013 a technical report on arXiv made reinforcement-learning researchers sit up: a neural network, reading only screen pixels, learned to play Atari games, outperforming human experts on several. The model was called DQN, and it came from a then little-known company called DeepMind.

Before this, RL lived in a hand-crafted age. To train an agent you first decided which state features mattered, then fed them to the algorithm. Against visually complex environments the process was slow and brittle. DQN's ambition was to overturn that premise: don't let engineers define features, let the network learn them from raw pixels.

Two ingredients made it work. Deep convolutional networks could extract information directly from images, and the classic Q-learning algorithm supplied the value estimate for "how good is doing this in this state". Combined, the network could approach good policies through trial and error without understanding the rules of any game.

Timing mattered too. Deep learning had just proven itself on images, and game AI was a ready-made stage. Once the results were out, "deep reinforcement learning" went almost overnight from niche jargon to a hot field. Two years later the same group built AlphaGo with the same thinking—that famous line of history starts here.

Looking back, DQN's meaning is bigger than "AI can play games". It showed perception and decision-making could be fused end-to-end in one network and rekindled the idea that a single agent could learn many things. Today's RL applications in robotics, recommendations, and dialogue all owe something to that 2013 paper.
