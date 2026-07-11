---
eventId: deepseek-r1
form: reading beside an experimental report
narrativeCenter: R1-Zero first shows the rough output of pure reinforcement learning; R1 then shapes reasoning into usable, distillable models
emotionalSource: a technical report that keeps repetition, language mixing, and poor readability inside the success story
avoid:
  - replacing technical material with stock prices, geopolitics, or training-cost rumor
  - equating long chains of thought with reliable reasoning
  - treating vendor benchmarks as independently reproduced conclusions
---

In the DeepSeek-R1 technical report, the most durable page is not the score table. Between the names R1-Zero and R1 sits an unflattering distance.

In January 2025 DeepSeek released open-weight reasoning models R1 and R1-Zero, plus six distilled smaller models. R1-Zero was placed directly into large-scale reinforcement learning, without the usual supervised fine-tuning that would first demonstrate how a “good answer” should be written. Rewards came from tasks whose results can be checked; through trial the model grew longer reasoning, self-checks, look-backs, and strategy switches. The report treats those behaviors as evidence that pure RL can elicit reasoning. The same passage admits the cost: endless repetition, hard-to-read prose, and mixing across languages. Being able to solve problems and being able to hand a readable chain of thought to a person are not the same skill.

R1 therefore does not canonize Zero’s wild state. Developers add a small cold-start data stage before RL, then multi-stage RL and supervised fine-tuning—some phases still hunting better reasoning paths, others pulling the model toward human-preferred expression and general tasks. It still inherits DeepSeek-V3-Base’s mixture-of-experts architecture: 671 billion total parameters, 37 billion active per forward. More interesting than another parameter count is how training order shuttles between “figure it out alone” and “make it communicable.”

Official evaluations place R1 beside OpenAI o1, Claude 3.5 Sonnet, GPT-4o, and others. Under DeepSeek’s published settings, R1 reaches 79.8% pass@1 on AIME 2024, 97.3% on MATH-500, and 65.9% on LiveCodeBench; it does not lead everywhere—SimpleQA accuracy remains clearly below o1. The numbers are publisher evaluations; sampling uses temperature 0.6 and top-p 0.95, with multiple generations per problem to estimate pass@1. Keeping the protocol visible is closer to the report than clipping only the top cell.

A second line does not stop at the large model. DeepSeek fine-tunes Qwen and Llama families on R1-generated reasoning samples and releases six dense distilled models from 1.5B to 70B. A 32B Qwen version posts 72.6% AIME 2024 pass@1 on the official table, compressing part of the reasoning behavior into something far smaller than 671B. “Open” here means inspectable, deployable, further distillable—or only the slice that fits your machine. The repository keeps unheroic usage notes: do not set temperature too low, or risk endless loops; avoid extra system prompts; some prompts cause the model to skip thinking unless you explicitly require thinking tags. Leaderboard strength still rests on small runtime conditions.

Algorithm notes contrast group-relative policy optimization (GRPO) with PPO: no separate value model; advantages estimated from rewards within a group of outputs, lowering training resource needs. Verifiable rewards come mainly from math and code, which explains a STEM-bright table and a less dazzling open-domain factual score. Education and contest apps fit verifiable-reward reasoning well; open-domain facts and value-sensitive dialogue still need separate alignment and retrieval. Long chains of thought are not automatic truth.

The myth of sudden reasoning cannot hold this report’s rough parts. R1’s public path is more crooked: grow behavior under checkable rewards, admit unreadability and instability, then use data, preference, and engineering to make something people can use, and finally compress ability into smaller models. Externalized thought is double-edged—users can inspect steps, or be persuaded by long wrong reasoning. From zero to one to six distilled models, the training story is deliberately multi-act, defects left between acts. In a field where scores are soon matched, that near-lab-notebook style may outlast any single first place.
