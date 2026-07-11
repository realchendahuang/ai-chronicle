---
id: swe-bench
title: SWE-bench 用真实 GitHub Issue 评测编程 Agent
titleEn: SWE-bench evaluates coding agents on real GitHub issues
subtitle: 从函数生成转向跨文件理解、修改与测试
subtitleEn: Evaluation moves from function generation to repository-scale repair and testing
date: '2023-10-10'
datePrecision: day
importance: A
eventType: [paper, benchmark]
topics: [ai-coding, ai-agent]
concepts: [swe-bench, repository-context, coding-agent]
summary: 普林斯顿团队发布 SWE-bench，把真实 Python 仓库中的 2,294 个已解决 Issue 转成可执行的软件工程评测任务。
summaryEn: Princeton researchers introduced SWE-bench, turning 2,294 resolved issues from real Python repositories into executable software-engineering tasks.
visual:
  src: /assets/events/swe-bench.png
  width: 8510
  height: 2000
  alt: SWE-bench 流程图，从真实 GitHub issue 和代码库到模型补丁与单元测试
  altEn: SWE-bench workflow from a real GitHub issue and codebase to a model-generated patch and unit tests
  caption: SWE-bench 论文主图：模型接收 issue 文本与代码库快照，生成补丁，再由仓库测试判断是否解决问题。
  captionEn: "The SWE-bench paper's lead figure: a model receives an issue and repository snapshot, generates a patch, and is evaluated with repository tests."
  credit: Jimenez et al.
  sourceUrl: "https://arxiv.org/abs/2310.06770"
  rights: official-editorial
background: HumanEval 等基准主要测试从说明生成独立函数，无法覆盖真实开发中的代码库导航、依赖理解、跨文件修改和回归测试。
backgroundEn: Benchmarks such as HumanEval focused on generating isolated functions and did not cover repository navigation, dependency reasoning, cross-file edits, or regression testing.
whatHappened: 每个任务提供仓库快照和 Issue 描述，模型需要生成补丁，再由原项目测试验证。首批模型表现很低，说明代码生成能力不能直接等同于软件工程能力。
whatHappenedEn: Each task provided a repository snapshot and issue description. A model had to generate a patch that passed the project’s tests. Initial scores were low, showing that code generation did not equal software-engineering ability.
whyImportant: SWE-bench 给 Coding Agent 提供了共同目标，也改变产品宣传方式。能否修复真实 Issue、通过测试和处理长上下文，开始比生成漂亮代码片段更有说服力。
whyImportantEn: SWE-bench supplied a shared target for coding agents and changed product claims. Fixing real issues, passing tests, and handling long context became more meaningful than generating attractive snippets.
impact:
  developer: Agent 框架开始围绕检索、编辑、执行测试和迭代修复设计完整闭环。
  industry: SWE-bench Verified 等版本成为前沿模型和 AI Coding 产品的常用指标。
impactEn:
  developer: Agent frameworks were designed around a full loop of retrieval, editing, testing, and iterative repair.
  industry: Variants such as SWE-bench Verified became common metrics for frontier models and coding products.
beforeAfter:
  before: 编程模型主要按独立题目和单函数正确率排名。
  after: 评测开始要求模型在真实仓库中完成可测试的修改。
beforeAfterEn:
  before: Coding models were ranked mainly on isolated problems and function-level correctness.
  after: Evaluation required testable changes inside real repositories.
relatedEvents: [github-copilot, devin, claude-code, codex-agent]
sources:
  - title: SWE-bench — Can Language Models Resolve Real-World GitHub Issues?
    url: "https://arxiv.org/abs/2310.06770"
    publisher: arXiv
    type: paper
status: verified
slug: swe-bench
---
