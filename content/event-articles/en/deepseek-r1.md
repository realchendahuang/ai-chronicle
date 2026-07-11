---
eventId: deepseek-r1
form: Reading beside an experimental report
narrativeCenter: R1-Zero first shows pure RL’s roughness; R1 then shapes reasoning into usable, distillable models
emotionalSource: A technical report that keeps repetition, language mixing, and hard-to-read prose inside the success story
avoid:
  - Replacing technical material with stock prices or geopolitics
  - Equating long chains of thought with reliable reasoning
  - Treating vendor benchmarks as independently reproduced
---

In the DeepSeek-R1 technical report, the most durable pages are often not the top score cell. Between the names R1-Zero and R1 sits an unflattering distance. Delete that distance from the success story and only advertising remains.

In January 2025 DeepSeek released open-weight reasoning models R1 and R1-Zero, plus six distilled smaller models. R1-Zero went straight into large-scale reinforcement learning without the usual supervised fine-tuning that demonstrates how a “good answer” should read. Rewards came from checkable tasks; through trial the model grew longer reasoning, self-checks, and strategy switches. The report treats those behaviors as evidence that pure RL can elicit reasoning—and immediately admits endless repetition, hard-to-read prose, and mixed languages. Solving problems and handing a readable chain of thought to a person are not the same skill.

R1 does not canonize Zero’s wild state. Developers add cold-start data, then multi-stage RL and supervised fine-tuning. It still inherits DeepSeek-V3-Base’s MoE: 671 billion total parameters, 37 billion activated per token. On official tables R1 reaches 79.8% AIME 2024 pass@1, 97.3% MATH-500, 65.9% LiveCodeBench; on SimpleQA and similar it remains clearly below o1. Numbers are the publisher’s settings; temperature and pass@1 estimation should travel with the scores.

Another line is distillation: R1 reasoning samples fine-tune Qwen and Llama series into six dense models from 1.5B to 70B. The repository keeps unheroic usage notes—do not set temperature too low; some problems need an explicit request to begin with thinking markers. Strength on a leaderboard still depends on small runtime conditions. Verifiable rewards mainly from math and code help explain why STEM tables glare while open-domain fact QA may not.

Myths of “suddenly reasoning” cannot hold this report’s roughness. The route is more crooked: grow behavior under verifiable reward, admit unreadability, shape something people can use, then press capability into smaller models. Defects between acts are not deleted—in a field where scores are soon matched, that is more durable than any single first place.

Six distilled models mean “reasoning ability” no longer belongs only to a 671B-class checkpoint. Whether small models can reproduce part of the behavior at acceptable cost becomes what education, contests, and local deploy really care about. Leaving defects in the main text invites readers to approach R1 experimentally rather than mythically. Scores age; that writing style keeps.
