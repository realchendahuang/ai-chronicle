---
id: mycin
title: MYCIN 医疗专家系统
titleEn: The MYCIN medical expert system
subtitle: 规则推理进入临床诊断的里程碑
subtitleEn: Rule-based reasoning reaches clinical diagnosis
date: '1976'
datePrecision: year
importance: B
eventType:
  - milestone
  - product
topics:
  - ai-applications
  - symbolic-ai
  - ai-history
  - ai-for-science
concepts:
  - expert-systems
  - symbolic-ai
summary: 斯坦福大学的 Edward Shortliffe 开发 MYCIN，一个用产生式规则诊断血液感染并推荐抗生素的专家系统。它以不确定性与可解释的推理链为特色，被视为医学 AI 的早期标杆。
summaryEn: Edward Shortliffe developed MYCIN at Stanford, an expert system that used production rules to diagnose blood infections and recommend antibiotics. Known for its handling of uncertainty and explainable inference chains, it became an early benchmark in medical AI.
background: 专家系统思想在 1960 年代萌芽，到 1970 年代中期已经有人尝试把领域知识编码成规则，用于现实决策任务。
backgroundEn: Expert-system ideas emerged in the 1960s, and by the mid-1970s researchers were encoding domain knowledge as rules for real decision tasks.
whatHappened: MYCIN 的规则形如「如果感染是脑膜炎且病人是儿童且……那么……」并附有置信度。系统能解释它为什么做出某个判断，在对照评估中其治疗建议的接受度曾与感染病专家相当。尽管因伦理与责任问题从未正式投入临床，它仍是规则系统最常被引用的案例。
whatHappenedEn: MYCIN's rules took the form "if the infection is meningitis and the patient is a child and ... then ..." with confidence factors. The system explained its reasoning, and in evaluation its therapy recommendations were often judged comparable to those of infectious-disease experts. Though it was never deployed clinically because of liability and ethical concerns, it remains the most cited example of a rule-based system.
whyImportant: MYCIN 展示了把专家知识转成可执行规则与可解释推理的完整工程路径，也第一次把「解释自己的能力」当作系统的重要功能。它的成功与局限共同塑造了后来对知识工程和 AI 落地的期待。
whyImportantEn: MYCIN showed a complete engineering path from expert knowledge to executable rules and explainable inference, and made "explaining itself" a first-class capability. Its successes and limits together shaped later expectations of knowledge engineering and AI deployment.
impact:
  user: 让医学界看到计算机给出建议时附上推理过程的潜在价值。
  developer: 定义了规则库、推理引擎与置信度传播的经典架构。
impactEn:
  user: Showed medicine the potential value of computer advice accompanied by its reasoning.
  developer: Defined the classic architecture of rule bases, inference engines, and certainty propagation.
beforeAfter:
  before: 专家系统大多停留在研究演示阶段。
  after: 知识工程成为 AI 的主流路线，一直延续到 1980 年代。
beforeAfterEn:
  before: Expert systems mostly stayed at research-demo stage.
  after: Knowledge engineering became the mainstream AI program, lasting through the 1980s.
relatedEvents:
  - expert-systems
  - shrdlu
  - ibm-watson
sources:
  - title: "Computer-Based Medical Consultations: MYCIN"
    url: "https://www.sciencedirect.com/book/9780444001823/computer-based-medical-consultations-my-cin"
    publisher: Elsevier
    type: paper
status: verified
slug: mycin
---
