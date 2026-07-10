---
id: instructgpt
title: InstructGPT 用人类反馈对齐指令
titleEn: InstructGPT aligns models with human instructions
subtitle: 更小的模型因回答方式更符合偏好而胜过 GPT-3
subtitleEn: A smaller model is preferred over GPT-3 because it follows instructions better
date: '2022-01-27'
datePrecision: day
importance: S
eventType: [paper, model]
topics: [large-language-models, ai-safety]
companies: [openai]
models: [instructgpt]
concepts: [rlhf, fine-tuning, llm]
summary: OpenAI 公开 InstructGPT 训练方法，通过示范数据、偏好排序和强化学习，让语言模型更按用户指令回答。
summaryEn: OpenAI described InstructGPT, using demonstrations, preference rankings, and reinforcement learning to make language models follow user instructions more reliably.
background: 纯粹预测下一个词的模型能续写文本，却不天然理解用户是在提问、要求改写还是拒绝危险内容。增大参数并不能自动解决交互目标不一致。
backgroundEn: A next-token predictor could continue text but did not inherently know whether a user wanted an answer, a rewrite, or refusal of harmful content. More parameters did not automatically align interaction goals.
whatHappened: 标注员先写出理想回答用于监督微调，再对多个模型回答排序，训练奖励模型，最后通过 PPO 优化策略。1.3B 参数模型在人类偏好中胜过 175B 的原始 GPT-3。
whatHappenedEn: Labelers first wrote demonstrations for supervised fine-tuning, then ranked model outputs to train a reward model, and PPO optimized the final policy. Human evaluators preferred the 1.3B model to the original 175B GPT-3.
whyImportant: 它把“模型会什么”和“模型是否按人类意图回答”分成两个训练问题。这个流程直接支撑 ChatGPT，也让偏好数据、对齐和行为规范成为产品核心。
whyImportantEn: It separated what a model knows from whether it responds according to human intent. The process directly enabled ChatGPT and made preference data, alignment, and behavior policy central product concerns.
impact:
  user: 模型回答更直接、更少延续有害或无关提示，聊天式使用开始可行。
  developer: RLHF 成为前沿语言模型后训练的标准组成部分。
  industry: 数据标注从类别标签扩展到示范、比较和复杂行为偏好。
impactEn:
  user: Answers became more direct and less likely to continue harmful or irrelevant prompts, making conversational use practical.
  developer: RLHF became a standard component of frontier language-model post-training.
  industry: Data labeling expanded from class labels to demonstrations, comparisons, and complex behavioral preferences.
beforeAfter:
  before: 大模型主要按预训练语料的统计规律续写文本。
  after: 后训练明确塑造模型遵循指令、拒绝请求和表达不确定性的方式。
beforeAfterEn:
  before: Large models mainly continued text according to patterns in pretraining data.
  after: Post-training deliberately shaped instruction following, refusals, and expressions of uncertainty.
relatedEvents: [gpt-3, chatgpt-launch, claude]
sources:
  - title: Training language models to follow instructions with human feedback
    url: https://arxiv.org/abs/2203.02155
    publisher: arXiv
    type: paper
status: verified
slug: instructgpt
---
