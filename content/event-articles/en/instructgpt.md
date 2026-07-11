---
eventId: instructgpt
form: Cross-section of a preference production line
narrativeCenter: How about forty labelers' demonstrations and rankings reshaped a completion model into an instruction responder
emotionalSource: The model starts to sound as if it is listening, while the judgments behind that sound remain concrete and limited
avoid:
  - Reducing RLHF to abstract “alignment with human values”
  - Reporting a small model beating a large one without the evaluation protocol
  - Equating preference gains with factual reliability
---

When OpenAI published the InstructGPT paper in January 2022, the dominant training objective for language models was still next-token prediction. Completions could be fluent without knowing whether a user was asking a question, requesting a rewrite, or probing for harmful content.

Roughly forty labelers staffed another production line. First they wrote answers. Given prompts from the OpenAI API and prompts the labelers invented, they demonstrated ideal responses; researchers supervised-fine-tuned GPT-3 on those demonstrations. The paper lists 11,295 labeler prompts and 1,430 customer prompts in the supervised data. The model learned a basic stance: input need not be an unfinished document; it can be a request to execute.

Then humans stopped writing a single gold answer and began comparing. The system sampled four to nine candidates for the same prompt; labelers ranked them. Researchers trained a reward model to estimate which outputs people preferred. Finally, PPO optimized the language model against that reward model while mixing in a pretraining objective to limit regression on some public NLP tasks. The three-stage structure—supervised fine-tuning, reward model, reinforcement learning—would be retold and partly rewritten across later alignment work. InstructGPT wrote it as a checkable experimental ledger.

The line changed what “better” meant. Pretraining optimizes whether the next token is likely; InstructGPT optimizes choices a group of people make over full answers. Results were striking: on the paper’s API-prompt test set, a 1.3B InstructGPT was preferred to the original 175B GPT-3. Against same-size GPT-3, 175B InstructGPT won 85±3% of comparisons; even with few-shot prompts for the baseline, it still won 71±4%. On closed-domain tasks, inventing information outside the input fell from 41% for GPT-3 to 21%.

Those comparisons are bound to the paper’s prompt distribution, labeling rules, and raters. They show preference can be trained; they do not show the model has become factually reliable. InstructGPT still fabricated facts, mishandled false premises, and answered simple questions with long hedges. Toxicity fell; bias metrics did not show clear improvement. Authors called the sacrifice of some capabilities to please the reward model an “alignment tax”; mixing pretraining gradients could soften it without erasing every regression.

The sharper limit sits in the discussion. Researchers wrote that they aligned to preferences shaped by particular labelers and research staff—not to “human values” in general. OpenAI wrote the labeling instructions; English dominated the data; inter-annotator agreement was about 73%. Another group, culture, or rulebook could move the border of a “good” answer. The paper also separates API-user prompts from labeler-written prompts, reminding readers that the training distribution is not “all human instructions.”

ChatGPT would later scale similar methods into a product flywheel; the first gear remains roughly forty people and a three-stage line. InstructGPT brought a new question into the model core: beyond capability, manner of answer can be trained. Directness, honesty, caution, and which requests to refuse stop being only prompt craft and become data and objectives. In early 2022, every “more preferred by people” still stood on finite people, finite rules, and a question that cannot be skipped: preferred by whom?
