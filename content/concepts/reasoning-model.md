---
id: reasoning-model
title: 推理模型
fullName: Reasoning Model / Test-time Compute Model
difficulty: intermediate
oneLiner: 把更多计算放在回答之前的内部思考过程，用测试时算力换复杂任务正确率。
beginnerExplanation: 普通聊天模型倾向“脱口而出”。推理模型会先在内部多想几步，再给出答案，所以更慢、更贵，但在数学、代码和多步规划上往往更稳。
technicalExplanation: 常见做法包括过程奖励、可验证任务上的强化学习、显式思维链，以及按难度分配测试时计算。产品上常拆成 thinking / non-thinking 模式或独立 o 系列。
whyItMatters: 它把“扩展”从只堆训练算力，扩展到推理阶段，也改变了 API 定价、延迟与 Agent 编排方式。
relatedEvents:
  - openai-o1
  - deepseek-r1
  - constitutional-ai
relatedConcepts:
  - chain-of-thought
  - reinforcement-learning
  - llm
commonMisunderstandings:
  - 推理模型一定参数更大
  - 思维链输出等于真实内部计算
  - 所有任务都应开深度思考
slug: reasoning-model
---
