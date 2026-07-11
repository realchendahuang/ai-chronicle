---
id: rlhf
title: RLHF（基于人类反馈的强化学习）
fullName: Reinforcement Learning from Human Feedback
difficulty: intermediate
oneLiner: 通过人类对模型输出的偏好反馈来优化模型行为的训练方法。
beginnerExplanation: 大模型刚训练完时，虽然能说很多话，但回答方式可能不符合人类期望——比如太啰嗦、太机械、或者有冒犯性。RLHF 的做法是：让人类标注员对不同回答打分，然后训练一个"奖励模型"来模拟人类的偏好，最后用强化学习让大模型学会生成更受人类喜欢的回答。
whyItMatters: RLHF 是 ChatGPT 对话体验好的关键原因之一。它将一个"能说话"的模型变成了"会说人话"的模型。
relatedEvents:
  - instructgpt
  - chatgpt-launch
  - constitutional-ai
  - gpt-4-release
relatedConcepts:
  - instruction-tuning
  - alignment
  - reward-model
slug: rlhf
---
