---
eventId: instructgpt
form: Cross-section of a preference-production line
narrativeCenter: Demonstrations and rankings from roughly forty labelers reshaping a continuation model into an instruction follower
emotionalSource: A model seeming to listen more closely because particular humans repeatedly judged what listening should look like
avoid:
  - Reducing RLHF to an abstract promise of alignment with humanity
  - Citing the smaller-model preference result without its evaluation conditions
  - Confusing preferred behavior with factual reliability
---

Roughly forty people stood inside the InstructGPT training process.

First they wrote. Given prompts drawn from OpenAI API use and from labelers themselves, they produced demonstrations of desirable responses. Those examples were used to supervised-fine-tune GPT-3. The paper describes 11,295 labeler-written prompts and 1,430 customer prompts in this stage. The base model, trained to continue text, was being shown that an input might instead be a request to answer.

Then the labor changed from composition to comparison. For a single prompt, the system generated between four and nine candidate outputs. Labelers ranked them. A reward model learned to estimate which complete response a person would prefer, and PPO optimized the language model against that learned score. A pretraining objective was mixed back in to limit regressions on public NLP tasks.

This pipeline created a second definition of improvement. Pretraining rewards a probable next token. InstructGPT rewarded a response selected by people after they had read it. Knowledge and conduct were no longer treated as the same optimization problem.

The headline result made the distinction vivid: on the paper's API-prompt evaluation, labelers preferred outputs from a 1.3-billion-parameter InstructGPT model to those from the original 175-billion-parameter GPT-3. At equal size, 175B InstructGPT beat 175B GPT-3 in 85 ± 3 percent of comparisons; against a few-shot-prompted version, the preference rate was 71 ± 4 percent. On closed-domain tasks, the rate of introducing information not present in the input fell from 41 to 21 percent.

These were judgments under a defined protocol, not proof that the smaller model had acquired more knowledge. Preferred answers could still invent facts, accept false premises, or evade a simple question with excessive caution. Toxicity measures improved, while the paper found no significant improvement on its bias evaluations. Optimizing for the reward model could also reduce performance elsewhere—an “alignment tax” mitigated, not erased, by mixing in the pretraining gradient.

The most consequential limitation concerned the people themselves. The authors wrote that the system had been aligned to the preferences of a specific group of labelers and researchers, not to an undifferentiated set of “human values.” OpenAI wrote the guidelines. English dominated the data. Inter-labeler agreement was about 73 percent. Another workforce, culture, or policy could draw the boundary of a good answer differently.

InstructGPT made response style, refusal, directness, and expressions of uncertainty into trainable product behavior. That method would lead directly toward ChatGPT and become a standard part of frontier-model post-training. Yet the paper remains valuable because the human machinery is still visible. Behind the impression that a model has begun to follow an intention lies a chain of written examples and comparative choices—and behind every claim that it is “better aligned,” the unfinished sentence: aligned according to whom?
