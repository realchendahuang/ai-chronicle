# AI Chronicle｜AI 行业编年史

[English →](#english)

> 技术变化得太快，快到人会忘记：每一项「突然」到来的能力，背后都有漫长、笨拙、有时甚至寒冷的年代。

**AI Chronicle** 是一部关于人工智能的开放编年史。  
它不是资讯流，也不是排行榜；它是一条可以慢慢翻的时间轴——从测试「机器能否思考」的思想实验，到聊天框进入亿万人日常的那一天。

**在线阅读：** [chendahuang.com/ai-chronicle](https://chendahuang.com/ai-chronicle/)

---

## 它为什么存在

很多人第一次接触 AI，是从一个产品名、一条热搜、一段会写代码的演示开始的。  
可真正令人心安的理解，往往不是「今天谁最强」，而是：

- 这件事**什么时候**发生？
- **谁**在什么条件下做了选择？
- 它改写了哪条技术路线、哪种产品入口、哪一种行业习惯？
- 后来的人又站在了怎样的起点上？

本项目试图把这些散落在论文、发布页、比赛记录与监管文本里的节点，收成一条可核对、可阅读、可回看的公共记忆。

我们相信：历史不必冷冰冰。  
日期要准确，来源要可点开；与此同时，文章也可以有温度——有犹豫、有反常、有未完成的余波。文学气息不能建立在虚构上；人的情感，只能从真实材料里长出来。

---

## 你会在这里看到什么

| 模块 | 说明 |
|------|------|
| **时间轴** | 主线只保留改变方向的节点，按年代展开 |
| **事件文章** | 每篇是独立叙事，而非统一模板的知识卡片 |
| **概念** | 把 LLM、RLHF、Transformer 等词说成人能听懂的话 |
| **公司** | 组织如何塑造技术路线与产品入口 |
| **模型谱系** | 30+ 条厂商谱系：OpenAI / Anthropic / Google / xAI / Meta / Mistral / Phi / Nova / Cohere / Flux…；千问 / DeepSeek / 智谱 / Kimi / MiniMax / 豆包 / 文心 / 混元 / 可灵 / 盘古… |
| **主题专题** | 推理模型、视频/图像生成、小模型端侧、语音、治理、中国 AI、Agent、开放模型等可独立阅读的路线 |

当前规模（会持续生长）：

- **94** 个关键事件  
- **188** 篇中英文正文（分别写作，不是机翻镜像）  
- **94** 张事件主视觉（史料优先，必要时原创编辑插图）  
- **72** 个概念页 · **40** 家机构 · **38** 条模型谱系 · **39** 条主题专题  
- 中英切换 · 明暗主题 · 桌面与移动端

---

## 编辑原则（我们守的线）

1. **事实可核验。** 判断与事实分开写；引语找不到原文就不加引号。  
2. **不把热度写成历史地位。** 短期喧嚣不足以进入主时间轴。  
3. **重要程度克制。** `S` 范式级 · `A` 行业级 · `B` 领域级 · `C` 补充。  
4. **每篇文章有自己的写法。** 禁止统一高潮、统一金句、统一升华结尾。  
5. **厂商自报数据必须标明。** Preview / Beta / GA、开放权重与「开源」不能混写。  
6. **Logo 必须是真实标志。** 公司标识不由 AI 生成或仿造。

更完整的说明见站内 [关于与编辑原则](https://chendahuang.com/ai-chronicle/about/)。

---

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 <http://localhost:43117/ai-chronicle/>。

```bash
pnpm build    # Velite 内容校验 → 编辑检查 → 静态生成 → 站内链接检查
pnpm deploy   # 构建并部署到 Cloudflare Pages（项目名 ai-chronicle）
```

### 目录导读

```text
content/
  events/              # 事件元数据、来源、主视觉
  event-articles/zh/   # 中文叙事正文
  event-articles/en/   # 英文叙事正文（同事实账本，独立成文）
  concepts/            # 概念
  companies/           # 公司
  model-families/      # 模型谱系
public/assets/         # 站点 CSS/JS、Logo、事件图片
scripts/               # SSG 与检查脚本
```

内容合同与产品规划：

- [AI 行业编年史网站完整规划说明书](./docs/AI行业编年史网站完整规划说明书.md)
- [非模板化文章体系设计](./docs/superpowers/specs/2026-07-11-singular-editorial-articles-design.md)

---

## 欢迎一起写下去

这是一份**开源、非营利**的公共档案。  
如果你记得一场被忽略的论文、一段可核对的发布记录、一张有署名的历史图片，或愿意帮中英文再去一点「AI 腔」——欢迎开 Issue 或 Pull Request。

每一次认真的补充，都是在替后来的人，把路灯再往前挪一点。

- 仓库：<https://github.com/realchendahuang/ai-chronicle>  
- 站点：<https://chendahuang.com/ai-chronicle/>  
- 作者主站：<https://chendahuang.com/>

---

## 许可与声明

- 代码与站点脚手架：以本仓库公开内容为准，欢迎阅读与贡献。  
- **事件正文、摘要与编辑判断**：署名引用时请注明 AI Chronicle 与对应页面链接。  
- **图片权利各不相同**：`public-domain` / `cc` / `official-editorial` / `generated` 见各事件 frontmatter；生成图标注为 AI Chronicle 原创插图。  
- **公司 Logo** 归各权利人所有，仅用于识别与说明，不构成背书。

---

<div id="english"></div>

# AI Chronicle — A living chronicle of AI history

[← 回到中文](#ai-chronicleai-行业编年史)

> Technology moves so fast that we forget: every capability that feels sudden was preceded by long, awkward, sometimes cold years.

**AI Chronicle** is an open chronicle of artificial intelligence.  
It is not a news feed and not a leaderboard. It is a timeline you can turn slowly—from the thought experiment of whether machines can think, to the day a chat box entered ordinary life.

**Read online:** [chendahuang.com/ai-chronicle](https://chendahuang.com/ai-chronicle/)

### Why it exists

Most people first meet AI through a product name, a trending post, or a demo that writes code.  
The understanding that lasts is rarely “who is strongest today,” but:

- **When** did this happen?  
- **Who** chose, under what constraints?  
- Which technical path, product doorway, or industry habit did it rewrite?  
- Where did later people stand because of it?

This project gathers nodes scattered across papers, launch posts, match records, and regulatory texts into a public memory that can be checked, read, and revisited.

History need not be cold.  
Dates must be exact; sources must open. Essays may still carry warmth—hesitation, anomaly, unfinished aftershocks. Literary feeling cannot rest on invention; human emotion has to grow from real material.

### What you will find

| Area | Notes |
|------|--------|
| **Timeline** | Direction-changing nodes only, by year |
| **Event essays** | Singular narratives, not one template for every story |
| **Concepts** | LLM, RLHF, Transformer… in plain language |
| **Companies** | How organizations shape routes and products |
| **Model lineages** | Generations of GPT, Claude, Gemini, Llama, DeepSeek, and more |

Current scale (still growing): **86** events · **172** bilingual essays · **86** event visuals · **67** concepts · Chinese / English · light / dark · desktop / mobile.

### Editorial lines we do not cross

Facts stay verifiable. Hype is not historical rank. Importance stays restrained (`S` / `A` / `B` / `C`). Each essay keeps its own voice. Vendor metrics are labeled as such. Real logos only—never AI-forged marks.

More: [About & editorial principles](https://chendahuang.com/ai-chronicle/about/).

### Run locally

```bash
pnpm install
pnpm dev
# → http://localhost:43117/ai-chronicle/

pnpm build
pnpm deploy
```

### Contribute

This is an **open, non-profit** public archive.  
If you know a neglected paper, a checkable release note, a credited historical image, or can help the prose sound more human—open an Issue or a Pull Request.

Every careful addition moves the lamp a little farther down the road for whoever comes next.

- Repo: <https://github.com/realchendahuang/ai-chronicle>  
- Site: <https://chendahuang.com/ai-chronicle/>  
- Author: <https://chendahuang.com/>
