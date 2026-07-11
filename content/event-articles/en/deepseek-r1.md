---
eventId: deepseek-r1
form: reading beside an experimental report
narrativeCenter: R1-Zero first exposes the rough edge of pure RL; R1 then edits reasoning into usable, distillable models
emotionalSource: a technical report that keeps repetition, language mixing, and poor readability inside the success story
avoid:
  - replacing technical material with stock prices, geopolitics, or cost rumors
  - equating long chains of thought with reliable reasoning
  - treating vendor benchmarks as independently reproduced facts
---

In the DeepSeek-R1 technical report, the most interesting page is not the scoreboard. Between the names R1-Zero and R1 sits an indecorous gap.

In January 2025 DeepSeek released open-weight reasoning models R1 and R1-Zero, plus six distilled smaller models. R1-Zero was placed directly into large-scale reinforcement learning without a conventional supervised fine-tune to demonstrate how a good answer should be written. Rewards came from tasks with verifiable outcomes; through trial the model developed longer reasoning, self-checks, backtracking, and strategy switches. The report treats those behaviors as evidence that pure RL can elicit reasoning. The same passage admits endless repetition, unreadable prose, and mixed languages. Being able to solve and being able to hand a human a readable trail are not the same skill.

R1 therefore does not enshrine Zero’s wild state as ideal. Developers insert a small cold-start dataset before RL, then run multi-stage reinforcement learning and supervised fine-tuning: some stages hunt better reasoning paths, others pull expression and general tasks back toward human preference. The stack still inherits DeepSeek-V3-Base’s mixture-of-experts body—671 billion total parameters, 37 billion active per token. More interesting than another parameter bump is how training order folds between exploration and communication.

Official evaluations place R1 beside OpenAI o1, Claude 3.5 Sonnet, GPT-4o, and others. Under DeepSeek’s published settings, R1 reaches 79.8% pass@1 on AIME 2024, 97.3% on MATH-500, and 65.9% on LiveCodeBench; it does not lead everywhere—SimpleQA accuracy remains clearly below o1. Numbers are publisher evaluations; sampling uses temperature 0.6 and top-p 0.95, with multiple generations per item to estimate pass@1. Keeping the protocol beats lifting only the tallest cell.

A second line does not stop at the large model. DeepSeek fine-tunes Qwen and Llama families on R1-generated reasoning traces and releases six dense distilled models from 1.5B to 70B. A 32B Qwen variant scores 72.6% AIME 2024 pass@1 on the official table, packing part of the reasoning behavior into something far smaller than 671B. “Open” here means inspectable, deployable, further distillable—even taking only the layer that fits your machine.

The repository keeps unheroic usage notes: do not set temperature too low, lest endless loops; avoid extra system prompts; some queries skip thinking unless explicitly started with a think tag. Leaderboard strength still depends on small runtime conditions.

A myth of sudden reasoning has no room for the report’s rough edges. R1’s public path is more crooked: grow behavior under verifiable rewards, admit unreadability and instability, then use data, preference, and engineering to make something humans can use, and finally press capability into smaller models. The release hands over answers and a training process not polished into false neatness.

Group-relative policy optimization, contrasted with PPO in the paper, drops a separate value model and estimates advantages from rewards inside output groups. Verifiable rewards from math and code explain STEM-strong tables and weaker open-fact cells. Distilled dense models let schools and small teams touch reasoning behavior without MoE serving clusters. Product decisions about whether to show chains of thought sit beside scoreboards; long traces can persuade even when wrong.
