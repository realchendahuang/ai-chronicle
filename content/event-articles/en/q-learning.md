---
eventId: q-learning
form: tracing a concept to its root
narrativeCenter: how doctoral student Watkins laid the foundation of modern reinforcement learning with a simple Q-table
emotionalSource: respect for how a simple mathematical idea can move an entire field
avoid:
  - claiming Q-learning is the only important RL algorithm
  - ignoring alternatives like policy gradients
  - projecting today's deep-RL mindset back onto 1989
---

If you ask which of today's hottest AI technologies has the longest theoretical history, reinforcement learning is high on the list. And in RL's family tree one name is unavoidable: Q-learning. It came from a 1989 doctoral thesis by Chris Watkins, and its idea is almost disarmingly simple—keep a table recording "how much is doing this in this state worth", and keep updating it with actual rewards received.

Before Q-learning, the field's toolkit was limited. Many algorithms required a model of the environment to compute decisions; for model-free environments you often fell back on hand-written rules. Watkins wanted to prove an agent could approach optimal behavior through trial and error plus a bit of math, without knowing how the environment worked at all.

That bit of math was temporal difference. With every step, the agent corrects its estimate of the current state's value using "the reward just received plus the discounted best expectation of the next state". Simple as it sounds, it had a crucial property: no environment model needed, and theoretical convergence guaranteed. That clean, model-free, bootstrapping frame made Q-learning a classic.

Decades later, when DeepMind wanted to combine RL with deep learning, the algorithm they reached for was Q-learning—DQN simply swapped the Q-table for a deep network. From there its ideas flowed into game AI, robot control, recommendation, and dialogue systems, making it one of the two pillars of modern agent training.

Looking back at Q-learning, it reminds us that the deepest impact in AI sometimes comes from an easy-to-read paper and a simple update rule. It had no dazzling demo, yet it supplied the first block for everything that later taught machines to learn by trial and error.
