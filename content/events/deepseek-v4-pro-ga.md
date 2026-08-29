---
id: deepseek-v4-pro-ga
title: DeepSeek-V4 Pro 正式版发布
titleEn: DeepSeek-V4 Pro goes GA
subtitle: 智能体基准较预览版跃升近五倍，V4 系列全部转正
subtitleEn: Agent benchmarks jump nearly fivefold from preview; the V4 line is fully GA
date: '2026-08-13'
datePrecision: day
importance: A
eventType:
  - model
topics:
  - china-ai
  - large-language-models
  - reasoning-models
  - ai-agent
  - open-source-models
companies:
  - deepseek
models:
  - deepseek-v4-pro
concepts:
  - llm
  - moe
  - reasoning-model
  - context-window
  - tool-calling
summary: DeepSeek 将 V4 Pro 更新为 0813 正式版：1.6T 总参 MoE、1M 上下文、最大输出 38.4 万 token，首次原生支持图像推理；DeepSWE 从预览版 12.8 升至 62.7，超过 Claude Opus 4.8，部分智能体基准逼近甚至反超 Claude Fable 5。同日发布开源 Agent 开发框架 DeepSeek Harness v0.1。
summaryEn: "DeepSeek promoted V4 Pro to the 0813 GA build: a 1.6T-parameter MoE with a 1M context, 384K max output, and first native image reasoning. DeepSWE rose from 12.8 in preview to 62.7, passing Claude Opus 4.8, with some agent benchmarks near or above Claude Fable 5. The same day it open-sourced the agent framework DeepSeek Harness v0.1."
background: V4 Pro 预览版 4 月 24 日上线后，智能体能力一直是短板：DeepSWE 仅 12.8，远落后于同期旗舰。7 月 31 日 V4-Flash 转正后，Pro 的正式版成为 V4 系列最后一块拼图；同时 Claude Fable 5 与 GPT-5.6 Sol 在智能体基准上把门槛抬得很高。
backgroundEn: "After the V4 Pro preview launched on April 24, agent capability was its weak spot: DeepSWE sat at 12.8, far behind contemporary flagships. Once V4-Flash went GA on July 31, the Pro GA became the last piece of the V4 line, while Claude Fable 5 and GPT-5.6 Sol had raised the agent benchmark bar."
whatHappened: DeepSeek-V4-Pro-0813 于 8 月 13 日上线，架构与预览版基本一致（1.6T 总参、每 token 激活约 49B），上下文 1M、最大输出 38.4 万 token，首次原生支持图像推理，同时兼容 OpenAI 与 Anthropic 两套 API 生态。官方公布的智能体基准较预览版大幅提升：DeepSWE 12.8→62.7（超过 Opus 4.8 的 58.0）、Terminal Bench 2.1 72.1→87.9（逼近 Fable 5 的 88.0）、Cybergym 52.7→83.3。同日发布开源 Agent 开发框架 DeepSeek Harness v0.1（MIT 许可），并预告 API 将大幅调价。
whatHappenedEn: "DeepSeek-V4-Pro-0813 shipped on August 13 with the preview's architecture (1.6T total, ~49B active per token), a 1M context, 384K max output, first native image reasoning, and compatibility with both OpenAI and Anthropic API ecosystems. Official agent benchmarks jumped from preview: DeepSWE 12.8→62.7 (above Opus 4.8's 58.0), Terminal Bench 2.1 72.1→87.9 (near Fable 5's 88.0), Cybergym 52.7→83.3. The same day it open-sourced the agent framework DeepSeek Harness v0.1 (MIT) and teased big API price cuts."
whyImportant: 它把 DeepSeek 从「推理与价格优势」推进到「智能体能力」的正面战场，用一次正式版把预览期的短板补成卖点；同时把竞争从模型层延伸到 Agent 开发框架层，开源 Harness 意味着生态争夺开始。
whyImportantEn: It moved DeepSeek from reasoning-and-price strength into the agent-capability battlefield, turning a preview-era weakness into a selling point in one GA release; by open-sourcing Harness it also extended competition from models to agent frameworks, starting an ecosystem fight.
impact:
  developer: 获得一个 1M 上下文、支持图像推理与双 API 生态的旗舰级智能体模型，价格仍具优势。
  industry: 智能体基准的头部区间被中国模型改写，DeepSWE 62.7 成为新的参照点。
  product: DeepSeek Harness 把 Agent 开发框架开源，模型层竞争延伸到工具链层。
impactEn:
  developer: A flagship agent model with 1M context, image reasoning, and dual API ecosystems, still priced aggressively.
  industry: The top band of agent benchmarks was rewritten by a Chinese model; DeepSWE 62.7 became a new reference point.
  product: DeepSeek Harness open-sourced the agent framework, extending competition from models to toolchains.
beforeAfter:
  before: V4 Pro 预览版智能体能力落后，DeepSWE 仅 12.8，V4 系列尚未全部转正。
  after: 0813 正式版 DeepSWE 62.7 超过 Opus 4.8，V4 系列全部 GA，Harness 开源。
beforeAfterEn:
  before: The V4 Pro preview lagged on agents with DeepSWE at 12.8, and the V4 line was not fully GA.
  after: The 0813 GA hit DeepSWE 62.7 above Opus 4.8, completed the V4 line, and open-sourced Harness.
relatedEvents:
  - deepseek-v4
  - deepseek-v4-flash-ga
  - claude-opus-5
  - gpt-5-6
  - kimi-k3
visual:
  src: /assets/events/deepseek-v4-pro-ga.webp
  width: 1280
  height: 720
  alt: 编辑插图：深蓝背景上一条代码流水线从低处跃升到高处，节点依次点亮
  altEn: Editorial illustration of a code pipeline leaping from a low plateau to a high one, nodes lighting up in sequence
  caption: AI Chronicle 原创插图：基准跃升的阶梯，对应 V4 Pro 正式版的智能体能力跨越。
  captionEn: AI Chronicle original illustration of a benchmark staircase, for V4 Pro GA's agent capability leap.
  credit: AI Chronicle
  rights: generated
  prompt: "Editorial 16:9 museum poster, a pipeline of glowing nodes climbing a steep staircase from a low dark plateau to a high bright one, deep blue and cyan palette, no logos, no readable text, clean, precise"
sources:
  - title: DeepSeek API 文档更新（V4-Pro-0813）
    url: "https://api-docs.deepseek.com/"
    publisher: DeepSeek
    type: official
  - title: DeepSeek Harness 开源仓库
    url: "https://github.com/deepseek-ai/DeepSeek-Harness"
    publisher: GitHub
    type: official
  - title: 21财经：DeepSeek V4 Pro 正式版发布报道
    url: "https://www.21jingji.com/"
    publisher: 21财经
    type: report
status: verified
slug: deepseek-v4-pro-ga
---
