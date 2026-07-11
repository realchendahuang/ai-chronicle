---
id: fine-tuning
title: 微调（Fine-tuning）
fullName: Fine-tuning
difficulty: intermediate
oneLiner: 在已经预训练好的模型上，用更小、更专门的数据继续训练，让它适应具体任务或风格。
beginnerExplanation: 预训练像先通读很多书，微调像再针对一份工作手册做专项练习。完整微调会改动大量参数，成本高；LoRA 这类方法只训练很小的旁路参数，也能把模型“掰”到新任务上。
whyItMatters: 几乎所有实用大模型都会经历某种指令微调或领域微调；它决定模型从“会续写”变成“会按人的方式完成任务”。
relatedEvents:
  - lora
  - instructgpt
  - gpt-1
  - bert
relatedConcepts:
  - llm
  - rlhf
  - open-weight
commonMisunderstandings:
  - 微调不是从零训练，也通常不能凭空补上训练数据里完全没有的知识。
  - 微调数据质量往往比“再堆一点参数”更能决定结果。
slug: fine-tuning
---
