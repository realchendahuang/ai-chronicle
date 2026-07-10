# AI Chronicle｜AI 行业编年史

用关键事件理解 AI 的发展脉络。项目以事件为主线，把概念、公司和主题路线连接成一个可学习、可追溯的静态知识站。

全站使用同一套明暗主题设计系统，并支持中文 / English 即时切换。主时间轴只保留改变行业方向的节点；GPT、Claude、Gemini、Llama 与 DeepSeek 的完整代际变化收录在“模型谱系”中。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 <http://localhost:43117/ai-chronicle/>。

## 构建与检查

```bash
pnpm build
```

构建会依次完成：

1. Velite 校验并生成内容数据；
2. 静态生成全部页面到 `dist/client/ai-chronicle/`；
3. 检查生产资源、站内链接、重复 ID/slug、公司引用和 `verified` 来源合同。

## 内容合同

- `content/events/`：关键历史事件；标记为 `verified` 时必须至少有一个可访问来源。
- `content/concepts/`：新人解释、技术解释和相关历史节点。
- `content/companies/`：公司定位、关键路线和关联事件。
- `content/model-families/`：按厂商维护模型代际、发布日期、能力变化与官方来源。
- `topics`：从事件与公司的主题标签自动生成，不单独维护页面模板。

事件的重要程度保持克制：`S` 范式级、`A` 行业级、`B` 领域级、`C` 补充。

## 部署

```bash
pnpm deploy
```

Cloudflare Pages 负责静态文件，`worker/index.js` 将 `chendahuang.com/ai-chronicle/` 原样代理到 Pages 同路径。不要在 Worker 或页面模板中剥离 `/ai-chronicle` 前缀。

产品完整规划见 [AI 行业编年史网站完整规划说明书](./docs/AI行业编年史网站完整规划说明书.md)。
