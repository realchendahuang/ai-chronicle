---
eventId: alpaca
form: an open-source revolution sparked by a few hundred dollars
narrativeCenter: how a Stanford team proved, with 52K data points and six hundred dollars, that building a decent assistant was not that expensive
emotionalSource: excitement about democratization, and reflection on the data-ethics controversy that followed
avoid:
  - claiming Alpaca matched GPT-3.5's level
  - ignoring the copyright issues of training on a closed model's outputs
  - assuming low cost necessarily means low quality
---

In March 2023, the open-source community was still buzzing about LLaMA—Meta had just open-sourced the base model, but "fine-tuning a large model" still felt, to most people, like a game only big companies could play: hundreds of GPUs, millions in budget, weeks of time. A small Stanford team decided to break that impression.

Their approach was strikingly simple. Since no high-quality open instruction data existed, why not "borrow" from GPT-3.5: have GPT-3.5 generate 52K instructions and replies, and fine-tune LLaMA-7B on that data. The result: one training run took about three hours and cost under $100; the whole process totaled around $600. An assistant with behavior approaching GPT-3.5 had been born at a bargain price.

Alpaca exploded across the community immediately after release. Its significance lay not in how strong the model was—it handled simple tasks well but exposed its limits on complex ones—but in the possibility it tore open: building a decent instruction model did not require big-company resources. Researchers, startups, and individual developers worldwide could reproduce, improve, and experiment on top of it.

A wave of controversy followed. Training an open model on a closed model's outputs was shaky on copyright and ethics grounds. OpenAI later revised its terms of service to restrict such "distillation," but the door Alpaca opened could not be closed—low-cost fine-tuning and data distillation became the most common play in the open ecosystem.

Looking back, Alpaca reads like an ignition test for open AI. A six-hundred-dollar training cost turned "anyone can build a model" from slogan into reality, and the debate over data copyright has been an unavoidable topic for open models ever since. It did not build the strongest model, but it rewrote the industry's understanding of what building a model requires—and that alone earns it a place in history.
