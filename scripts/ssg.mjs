import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(here, '..')
const generatedDir = join(rootDir, '.generated')
const distDir = join(rootDir, 'dist/client')
const basePath = '/ai-chronicle'
const siteDir = join(distDir, basePath.slice(1))
const siteOrigin = 'https://chendahuang.com'
const githubRepoUrl = 'https://github.com/realchendahuang/ai-chronicle'

const events = JSON.parse(readFileSync(join(generatedDir, 'events.json'), 'utf8'))
const eventArticlesZh = JSON.parse(readFileSync(join(generatedDir, 'eventArticlesZh.json'), 'utf8'))
const eventArticlesEn = JSON.parse(readFileSync(join(generatedDir, 'eventArticlesEn.json'), 'utf8'))
const concepts = JSON.parse(readFileSync(join(generatedDir, 'concepts.json'), 'utf8'))
const companies = JSON.parse(readFileSync(join(generatedDir, 'companies.json'), 'utf8'))
const modelFamilies = JSON.parse(readFileSync(join(generatedDir, 'modelFamilies.json'), 'utf8'))
const valueChainLayers = JSON.parse(readFileSync(join(generatedDir, 'valueChainLayers.json'), 'utf8'))
const interfaceTranslations = JSON.parse(readFileSync(join(rootDir, 'public/assets/i18n-en.json'), 'utf8'))
const assetHasher = createHash('sha256')
  .update(readFileSync(join(rootDir, 'public/assets/app.css')))
  .update(readFileSync(join(rootDir, 'public/assets/app.js')))
  .update(readFileSync(join(rootDir, 'public/assets/i18n-en.json')))
  .update(JSON.stringify({ events, eventArticlesZh, eventArticlesEn, concepts, companies, modelFamilies, valueChainLayers }))

for (const assetPath of [
  ...events.map((event) => event.visual?.src),
  ...companies.map((company) => company.logo),
].filter(Boolean)) {
  const localPath = join(rootDir, 'public', assetPath.replace(/^\/+/, ''))
  if (existsSync(localPath)) assetHasher.update(readFileSync(localPath))
}

const assetVersion = assetHasher.digest('hex')
  .slice(0, 12)

const eventById = new Map(events.map((event) => [event.id, event]))
const eventArticleZhById = new Map(eventArticlesZh.map((article) => [article.eventId, article]))
const eventArticleEnById = new Map(eventArticlesEn.map((article) => [article.eventId, article]))
const conceptById = new Map(concepts.map((concept) => [concept.id, concept]))
const companyById = new Map(companies.map((company) => [company.id, company]))
const modelFamiliesByCompany = new Map(companies.map((company) => [
  company.id,
  modelFamilies.filter((family) => family.company === company.id),
]))
const valueChainLayersSorted = [...valueChainLayers].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'))
const valueChainById = new Map(valueChainLayersSorted.map((layer) => [layer.id, layer]))
const valueChainLayersByCompany = new Map()
for (const layer of valueChainLayersSorted) {
  for (const companyId of layer.companies || []) {
    if (!valueChainLayersByCompany.has(companyId)) valueChainLayersByCompany.set(companyId, [])
    valueChainLayersByCompany.get(companyId).push(layer)
  }
}
const segmentLabels = {
  upstream: '上游',
  midstream: '中游',
  downstream: '下游',
}
const segmentLabelsEn = {
  upstream: 'Upstream',
  midstream: 'Midstream',
  downstream: 'Downstream',
}

/**
 * 术语专栏数据
 * term / full / zh / category / blurb 必填；note 为常见误读提示；aliases 仅用于搜索
 */
const glossaryTerms = [
  // —— 模型与能力 ——
  {
    term: 'SOTA',
    full: 'State of the Art',
    zh: '当前最优',
    category: '模型与能力',
    featured: true,
    blurb: '在某一明确任务、数据集和评测设定下，目前公开记录里最好的那一档成绩。它描述的是“在这场考试里第一名”，不是“处处都最强”。',
    note: '离开任务、指标和成本约束谈 SOTA，多半是营销话术。换一套数据或换一个延迟预算，排名经常整个翻盘。',
    aliases: '业界最优 最先进 榜一',
  },
  {
    term: 'LLM',
    full: 'Large Language Model',
    zh: '大语言模型',
    category: '模型与能力',
    blurb: '用海量文本训练出来、能读懂并写出自然语言的大型模型。你今天用的聊天助手、写代码助手，底座多半就是它。',
    aliases: '大模型 语言模型',
  },
  {
    term: 'SLM',
    full: 'Small Language Model',
    zh: '小语言模型',
    category: '模型与能力',
    blurb: '参数更少、更省算力的语言模型。常见于手机端、公司内网私有部署，或边界很清楚的单一任务。',
    aliases: '小模型 端侧模型',
  },
  {
    term: 'Foundation Model',
    full: 'Foundation Model',
    zh: '基础模型',
    category: '模型与能力',
    blurb: '先在广泛数据上练出通用能力的底座模型。下游产品很少从零训练，多半是在这个底座上继续改、继续接。',
    aliases: '底座模型 基座模型 foundation',
  },
  {
    term: 'Transformer',
    full: 'Transformer Architecture',
    zh: 'Transformer 架构',
    category: '模型与能力',
    blurb: '2017 年提出的神经网络骨架，靠注意力机制处理序列。今天绝大多数大语言模型，骨子里都是它的变体。',
    aliases: 'transformer 注意力架构',
  },
  {
    term: 'Attention',
    full: 'Attention Mechanism',
    zh: '注意力机制',
    category: '模型与能力',
    blurb: '让模型在处理当前位置时，能“看向”输入里更相关的其他位置，而不是一视同仁扫一遍。Self-Attention 是其中最常见的形态。',
    aliases: 'self-attention 自注意力',
  },
  {
    term: 'MoE',
    full: 'Mixture of Experts',
    zh: '混合专家',
    category: '模型与能力',
    blurb: '把模型拆成许多“专家”子网络，每次只叫醒其中几位干活。总参数可以很大，单次计算却不必全开，是扩容常用的路子。',
    aliases: '混合专家模型 mixture of experts',
  },
  {
    term: 'Multimodal',
    full: 'Multimodal Model',
    zh: '多模态',
    category: '模型与能力',
    blurb: '不只吃文字，还能看图、听声、理解视频，有的还能反过来生成这些内容。一句话：多种“感官”共用一套脑子。',
    aliases: '多模态模型 vision-language',
  },
  {
    term: 'Reasoning Model',
    full: 'Reasoning Model',
    zh: '推理模型',
    category: '模型与能力',
    blurb: '专门为多步思考、数学、代码和复杂规划加强过的模型。回答前往往会先在内部“打草稿”，而不只是脱口而出。',
    aliases: 'o1 o3 深度推理 thinking model',
  },
  {
    term: 'Diffusion',
    full: 'Diffusion Model',
    zh: '扩散模型',
    category: '模型与能力',
    blurb: '生成图像、视频时常用的技术路线：先从噪声开始，一步步“洗”成清晰内容。Stable Diffusion、许多文生图工具都走这条路。',
    aliases: '扩散 文生图 diffusion model',
  },
  {
    term: 'Embedding',
    full: 'Vector Embedding',
    zh: '向量嵌入',
    category: '模型与能力',
    blurb: '把一段文字、一张图变成一串数字（向量）。语义接近的内容，在数字空间里距离也会更近，所以能拿来做搜索和推荐。',
    aliases: '向量 向量表示 vector embedding',
  },
  {
    term: 'Open Weight',
    full: 'Open-Weight Model',
    zh: '开放权重',
    category: '模型与能力',
    blurb: '模型权重可以下载、部署、再训练的发布形态。不等于完全开源：许可证、训练数据、代码是否公开，往往还得分开看。',
    note: '“开源模型”口语里常被混用。严格说，开放权重只保证你能拿到参数，不保证训练配方也公开。',
    aliases: '开源模型 开放权重 open source model',
  },
  {
    term: 'Parameters',
    full: 'Model Parameters',
    zh: '参数量',
    category: '模型与能力',
    blurb: '模型里可学习的权重个数，常写成 7B、70B。它粗略反映容量上限，但不直接等于“更聪明”——架构、数据与训练同样关键。',
    aliases: '参数 70b 7b 参数规模',
  },
  {
    term: 'Autoregressive',
    full: 'Autoregressive Generation',
    zh: '自回归生成',
    category: '模型与能力',
    blurb: '一个词（Token）接一个词往外写：每次只预测下一步，再把刚写出的内容喂回自己。ChatGPT 式对话，底层多半是这种生成方式。',
    aliases: '自回归 next-token prediction',
  },
  {
    term: 'World Model',
    full: 'World Model',
    zh: '世界模型',
    category: '模型与能力',
    blurb: '试图在内部模拟“世界如何运转”的模型思路：不只背答案，还要预测行动会带来什么结果。在机器人、自动驾驶和部分 Agent 研究里常被提起。',
    aliases: '世界模型 world models',
  },
  {
    term: 'VLM',
    full: 'Vision-Language Model',
    zh: '视觉语言模型',
    category: '模型与能力',
    blurb: '能同时理解图像和文字的模型：看图说话、读截图答题、根据界面描述下一步操作。多模态里最常见、也最先产品化的一支。',
    aliases: '视觉语言 多模态视觉 vision language',
  },
  {
    term: 'TTS / ASR',
    full: 'Text-to-Speech / Automatic Speech Recognition',
    zh: '语音合成 / 语音识别',
    category: '模型与能力',
    blurb: 'TTS 把文字念成语音，ASR 把说话转成文字。语音助手、会议纪要、有声内容，都靠这一对“耳朵和嘴巴”。',
    aliases: '语音合成 语音识别 speech to text text to speech whisper',
  },
  {
    term: 'Tokenizer',
    full: 'Tokenizer',
    zh: '分词器',
    category: '模型与能力',
    blurb: '把自然语言切成模型能吃的 Token 的规则组件。同一段中文，不同分词器切法不同，直接关系到上下文够不够用、API 账单贵不贵。',
    aliases: '分词 bpe sentencepiece 词表',
  },
  {
    term: 'Latency-Quality Tradeoff',
    full: 'Latency-Quality Tradeoff',
    zh: '速度与质量权衡',
    category: '模型与能力',
    blurb: '更大更强的模型通常更慢更贵。产品选型不是只看榜一，而是在延迟、成本、准确率之间找能上线的那一档。',
    aliases: '速度质量权衡 tradeoff 性能权衡',
  },

  // —— 训练与对齐 ——
  {
    term: 'Pre-training',
    full: 'Pre-training',
    zh: '预训练',
    category: '训练与对齐',
    blurb: '用海量通用数据先把模型“喂大”的阶段。目标是学会语言规律和广谱知识，产品味还没调，像一块生好的面团。',
    aliases: '预训练 pretrain 底座训练',
  },
  {
    term: 'Post-training',
    full: 'Post-training',
    zh: '后训练',
    category: '训练与对齐',
    blurb: '预训练之后的一揽子加工：指令微调、偏好对齐、工具使用训练等。用户真正感觉到的“好不好用”，很多是这一阶段做出来的。',
    aliases: '后训练 post training alignment stage',
  },
  {
    term: 'Fine-tuning',
    full: 'Fine-tuning',
    zh: '微调',
    category: '训练与对齐',
    blurb: '在现成底座上继续训练，让它更懂某个行业、某种口吻或某类任务。不必重训整座山，只需把方向拧准一点。',
    aliases: '微调 finetune 精调',
  },
  {
    term: 'SFT',
    full: 'Supervised Fine-Tuning',
    zh: '监督微调',
    category: '训练与对齐',
    blurb: '用人工写好或精选的问答对示范“该怎么答”。这是把只会续写的底座，变成愿意按指令办事的助手，最常见的一步。',
    aliases: '监督微调 supervised fine-tuning 指令微调',
  },
  {
    term: 'RLHF',
    full: 'Reinforcement Learning from Human Feedback',
    zh: '人类反馈强化学习',
    category: '训练与对齐',
    blurb: '让人给多个回答打分或排序，再把这些偏好变成训练信号，用强化学习推着模型往“更受欢迎”的方向走。ChatGPT 早期好用，它是关键一环。',
    aliases: '人类反馈 强化学习对齐',
  },
  {
    term: 'DPO',
    full: 'Direct Preference Optimization',
    zh: '直接偏好优化',
    category: '训练与对齐',
    blurb: '直接用“哪个回答更好”的对比数据来优化模型，省掉 RLHF 里单独训练奖励模型、再跑强化学习的那套重流程。很多团队拿它当更省事的对齐路径。',
    aliases: '直接偏好优化 preference optimization',
  },
  {
    term: 'Reward Model',
    full: 'Reward Model',
    zh: '奖励模型',
    category: '训练与对齐',
    blurb: '专门学“人更喜欢哪种回答”的打分模型。在经典 RLHF 流程里，它代替真人实时打分，给主模型提供优化方向。',
    aliases: '奖励模型 rm reward',
  },
  {
    term: 'Distillation',
    full: 'Knowledge Distillation',
    zh: '知识蒸馏',
    category: '训练与对齐',
    blurb: '让小模型模仿大模型的输出或思路，用更低成本换接近的能力。像请学霸带学渣刷题——学渣变强，学费却更便宜。',
    aliases: '蒸馏 模型蒸馏 knowledge distillation',
  },
  {
    term: 'LoRA',
    full: 'Low-Rank Adaptation',
    zh: '低秩适配',
    category: '训练与对齐',
    blurb: '微调时不改动全部参数，只训练很小一块“补丁”。显存和存储都更省，适合给同一个底座挂很多行业专用版本。',
    aliases: 'lora peft 低秩微调',
  },
  {
    term: 'Scaling Law',
    full: 'Scaling Law',
    zh: '缩放定律',
    category: '训练与对齐',
    blurb: '描述模型规模、数据量、算力与效果之间经验关系的规律。它解释了“为什么大家一直在堆更大模型”，也提醒你：堆到某一档之后，回报会变钝。',
    aliases: '扩展律 缩放律 chinchilla',
  },
  {
    term: 'Synthetic Data',
    full: 'Synthetic Data',
    zh: '合成数据',
    category: '训练与对齐',
    blurb: '由模型或程序生成、再经筛选后用于训练的数据。能补稀缺场景，也可能把错误和偏见放大——关键在过滤与校验，不在“能不能造”。',
    aliases: '合成数据 生成数据',
  },
  {
    term: 'Alignment',
    full: 'AI Alignment',
    zh: '对齐',
    category: '训练与对齐',
    blurb: '让模型行为更符合人类意图、价值观和安全边界的一整套目标与方法。它既是技术活（SFT、RLHF），也是产品与政策选择。',
    aliases: '对齐 价值对齐 ai alignment',
  },
  {
    term: 'PEFT',
    full: 'Parameter-Efficient Fine-Tuning',
    zh: '参数高效微调',
    category: '训练与对齐',
    blurb: '只训练模型里很小一部分参数（或外挂补丁）就能适配新任务的方法总称。LoRA 是其中最出名的代表，省显存、好分发。',
    aliases: '参数高效微调 peft adapter',
  },
  {
    term: 'GRPO',
    full: 'Group Relative Policy Optimization',
    zh: '组相对策略优化',
    category: '训练与对齐',
    blurb: '一种用组内相对打分来优化策略的强化学习算法，DeepSeek 等推理模型训练里常被提起。目标仍是：让更好的推理轨迹更常出现。',
    aliases: 'grpo 强化学习 组相对',
  },
  {
    term: 'PPO',
    full: 'Proximal Policy Optimization',
    zh: '近端策略优化',
    category: '训练与对齐',
    blurb: '经典的强化学习算法，早期 RLHF 流水线里很常见。它一步步小幅更新策略，避免模型“学飞了”突然崩掉。',
    aliases: 'ppo 近端策略优化',
  },
  {
    term: 'Catastrophic Forgetting',
    full: 'Catastrophic Forgetting',
    zh: '灾难性遗忘',
    category: '训练与对齐',
    blurb: '模型学新任务时，把旧能力忘得一干二净。微调领域数据时很常见，所以才有回放数据、约束更新、多任务混合等补救手段。',
    aliases: '灾难性遗忘 forgetting 遗忘',
  },
  {
    term: 'Curriculum Learning',
    full: 'Curriculum Learning',
    zh: '课程学习',
    category: '训练与对齐',
    blurb: '像给人排课一样，先易后难地安排训练样本或任务。用得好能稳住训练、加快收敛；用得差只是多了一层花活。',
    aliases: '课程学习 curriculum',
  },

  // —— 推理与部署 ——
  {
    term: 'Token',
    full: 'Token',
    zh: '词元',
    category: '推理与部署',
    blurb: '模型读写文字时切出来的最小计费与计算单位，可能是一个词、半个词或几个字符。上下文长度、速度、API 账单，都围着它转。',
    aliases: '词元 令牌 tokens',
  },
  {
    term: 'Context Window',
    full: 'Context Window',
    zh: '上下文窗口',
    category: '推理与部署',
    blurb: '模型一次能同时“看见”的最大信息量，通常用 Token 数衡量。窗口越大，越能塞长文档，但成本和延迟也常跟着涨。',
    aliases: '上下文 上下文长度 context length',
  },
  {
    term: 'Inference',
    full: 'Inference',
    zh: '推理 / 推断',
    category: '推理与部署',
    blurb: '模型参数已经训好，只根据输入生成回答或预测的阶段。你日常点发送、等回复，用的就是推理，不是训练。',
    note: '这里的“推理”指运行模型出结果，和 Reasoning Model 里那种“深度思考能力”不是同一件事。',
    aliases: '推断 serving 推理服务',
  },
  {
    term: 'KV Cache',
    full: 'Key-Value Cache',
    zh: '键值缓存',
    category: '推理与部署',
    blurb: '把已经算过的上下文中间结果存起来，生成下一个词时不必从头重算。对话越长、越依赖它省时间，也越吃显存。',
    aliases: 'kv cache 键值缓存',
  },
  {
    term: 'Quantization',
    full: 'Quantization',
    zh: '量化',
    category: '推理与部署',
    blurb: '用更低精度（如 8 位、4 位）表示权重或计算，换更少显存、更快速度和更低成本。常会牺牲一点点精度，但很多场景里完全划算。',
    aliases: '量化 int8 int4 gptq awq',
  },
  {
    term: 'vLLM',
    full: 'vLLM',
    zh: '高效推理引擎',
    category: '推理与部署',
    blurb: '面向大模型在线服务的开源推理引擎，以高吞吐和显存利用见长。名字本身不是缩写，业内常把它当作“把模型真正跑起来”的默认选项之一。',
    note: '不要把 vLLM 展开成 Virtual Large Language Model——那是常见误传。',
    aliases: 'vllm 推理引擎 pagedattention',
  },
  {
    term: 'Latency',
    full: 'Latency / TTFT',
    zh: '延迟',
    category: '推理与部署',
    blurb: '从发出请求到看到结果要等多久。对话场景里常拆成 TTFT（首字延迟）和整段生成时间；体感卡不卡，往往先看首字。',
    aliases: '延迟 ttft 首字延迟 time to first token',
  },
  {
    term: 'Throughput',
    full: 'Throughput',
    zh: '吞吐量',
    category: '推理与部署',
    blurb: '系统单位时间内能处理多少请求或生成多少 Token。个人觉得“快”，和服务端能同时扛住多少人，是两本账。',
    aliases: '吞吐 tps qps tokens per second',
  },
  {
    term: 'Speculative Decoding',
    full: 'Speculative Decoding',
    zh: '推测解码',
    category: '推理与部署',
    blurb: '先让小模型快速草拟几个后续 Token，再由大模型一次性验收。猜对了就省时间，猜错了再改正——用并行换延迟。',
    aliases: '推测解码 投机采样 speculative decoding',
  },
  {
    term: 'Streaming',
    full: 'Streaming Output',
    zh: '流式输出',
    category: '推理与部署',
    blurb: '模型边生成边把内容推到界面，而不是等整段写完再一次性弹出。体感更跟手，也是多数聊天产品的默认交互。',
    aliases: '流式 sse 打字机效果',
  },
  {
    term: 'Continuous Batching',
    full: 'Continuous Batching',
    zh: '连续批处理',
    category: '推理与部署',
    blurb: '推理服务里动态拼车：谁先生成完就先下车，新请求马上补位，显卡尽量不空转。高并发场景下，它是吞吐的关键杠杆。',
    aliases: 'continuous batching 动态批处理 批处理',
  },
  {
    term: 'Serving',
    full: 'Model Serving',
    zh: '模型服务化',
    category: '推理与部署',
    blurb: '把训好的模型挂成可调用服务：鉴权、限流、批处理、监控、扩缩容全包。研究里的 checkpoint，离产品可用的 API 还隔着这一层。',
    aliases: '模型服务 serving 推理服务 deployment',
  },
  {
    term: 'Edge AI',
    full: 'Edge AI / On-device Inference',
    zh: '端侧 AI',
    category: '推理与部署',
    blurb: '模型直接跑在手机、电脑、车机等本地设备上，少依赖云端。省网络延迟、更利于隐私，但受制于芯片和电池。',
    aliases: '端侧 端侧推理 on-device 本地部署',
  },
  {
    term: 'Prefill / Decode',
    full: 'Prefill and Decode',
    zh: '预填充 / 解码',
    category: '推理与部署',
    blurb: '生成可拆成两段：Prefill 先吞完整段输入，Decode 再一个个往外吐 Token。优化服务时，这两段的瓶颈往往不一样。',
    aliases: 'prefill decode 预填充 解码阶段',
  },
  {
    term: 'Tensor Parallelism',
    full: 'Tensor / Pipeline Parallelism',
    zh: '张量 / 流水线并行',
    category: '推理与部署',
    blurb: '单卡塞不下大模型时，把计算拆到多卡：张量并行切一层内部的矩阵，流水线并行把不同层分给不同卡。训练和推理都会用到。',
    aliases: '张量并行 流水线并行 tp pp 模型并行',
  },
  {
    term: 'Observability',
    full: 'LLM Observability',
    zh: '可观测性',
    category: '推理与部署',
    blurb: '把提示、检索结果、工具调用、延迟、费用和失败原因记下来，方便排查“它为什么这样答”。没有观测，线上 AI 只能靠玄学修。',
    aliases: '可观测性 tracing 链路追踪 llm ops',
  },

  // —— 提示与交互 ——
  {
    term: 'Prompt',
    full: 'Prompt',
    zh: '提示词',
    category: '提示与交互',
    blurb: '你交给模型的输入：问题、指令、背景材料、示例都可以算。同一模型，提示写得好不好，输出差距经常大得离谱。',
    aliases: '提示词 提示 提示工程 prompt engineering',
  },
  {
    term: 'System Prompt',
    full: 'System Prompt',
    zh: '系统提示',
    category: '提示与交互',
    blurb: '开发者预设的“人设与规矩”，通常用户看不见或不好改：你是谁、能做什么、不能越哪些线。产品性格很大程度写在这里。',
    aliases: '系统提示 系统消息 system message',
  },
  {
    term: 'Temperature',
    full: 'Sampling Temperature',
    zh: '温度',
    category: '提示与交互',
    blurb: '控制生成随机性的旋钮。偏低更稳、更像在考试；偏高更跳、更像在头脑风暴。不是越高越聪明，只是越敢乱发挥。',
    aliases: '温度 采样温度 top_p sampling',
  },
  {
    term: 'Chain of Thought',
    full: 'Chain of Thought',
    zh: '思维链',
    category: '提示与交互',
    blurb: '让模型把推理步骤显式写出来（或在内部展开），而不是直接甩结论。复杂算术、逻辑题上，这一招常常明显提分。',
    aliases: '思维链 cot chain-of-thought 一步步思考',
  },
  {
    term: 'Few-shot',
    full: 'Few-shot Learning',
    zh: '少样本',
    category: '提示与交互',
    blurb: '在提示里塞几个示例，让模型照葫芦画瓢。不用改参数，当场教它格式和风格；例子为 0 时就叫 Zero-shot。',
    aliases: 'few shot zero-shot 少样本 零样本 in-context',
  },
  {
    term: 'In-Context Learning',
    full: 'In-Context Learning',
    zh: '上下文学习',
    category: '提示与交互',
    blurb: '不更新权重，只靠当前对话窗口里的说明和例子临时学会新任务。大模型让人惊讶的地方之一，就是它很会“现学现用”。',
    aliases: 'icl 上下文学习 in context learning',
  },
  {
    term: 'Grounding',
    full: 'Grounding',
    zh: '落地 / 依据锚定',
    category: '提示与交互',
    blurb: '把回答拴在可核对的材料上：文档、检索结果、工具返回值，而不是凭模型记忆自由发挥。减少一本正经胡说八道的常用手段。',
    aliases: 'grounding 依据  grounded 锚定',
  },
  {
    term: 'Context Engineering',
    full: 'Context Engineering',
    zh: '上下文工程',
    category: '提示与交互',
    blurb: '不只写一句漂亮提示，而是设计模型此刻能看到的全部信息：系统规则、检索片段、工具结果、对话摘要、格式约束。窗口有限，塞什么、丢什么都是产品决策。',
    aliases: '上下文工程 context engineering 提示工程进阶',
  },
  {
    term: 'Structured Output',
    full: 'Structured Output',
    zh: '结构化输出',
    category: '提示与交互',
    blurb: '要求模型按 JSON、表格或既定 schema 吐结果，方便程序直接解析。做工作流、填表单、接 API 时，比“写一段散文”可靠得多。',
    aliases: '结构化输出 json mode schema output',
  },
  {
    term: 'Top-p',
    full: 'Nucleus Sampling (Top-p)',
    zh: '核采样',
    category: '提示与交互',
    blurb: '生成时只在概率累计达到 p 的那一小撮候选词里抽样。和 Temperature 常一起调：一个管“多野”，一个管“从多宽的词表里挑”。',
    aliases: 'top-p top p nucleus sampling 核采样',
  },
  {
    term: 'Stop Sequence',
    full: 'Stop Sequence',
    zh: '停止序列',
    category: '提示与交互',
    blurb: '告诉模型：一生成到这些字符就收工。用来截断废话、模仿对话轮次，或防止它把示例格式继续往下编。',
    aliases: '停止序列 stop tokens stop string',
  },
  {
    term: 'Prompt Caching',
    full: 'Prompt Caching',
    zh: '提示缓存',
    category: '提示与交互',
    blurb: '把反复出现的长前缀（系统提示、大文档）缓存下来，下次少算一遍。长上下文应用里，这是控成本和降延迟的实用杠杆。',
    aliases: '提示缓存 prompt cache 前缀缓存',
  },

  // —— 评测与安全 ——
  {
    term: 'Benchmark',
    full: 'Benchmark',
    zh: '基准测试',
    category: '评测与安全',
    blurb: '固定的题目、数据和打分规则，用来横向比较模型在某类能力上的表现。它像公开考试，方便排名，也容易被针对性刷分。',
    aliases: '基准 榜单 mmlu gpqa',
  },
  {
    term: 'Evals',
    full: 'Evaluations',
    zh: '评测',
    category: '评测与安全',
    blurb: '系统化检验模型或 AI 产品好不好用、安不安全的过程。可以是公开榜单，也可以是上线前的内部考卷和回归测试。',
    aliases: '评测 evaluation eval',
  },
  {
    term: 'Hallucination',
    full: 'Hallucination',
    zh: '幻觉',
    category: '评测与安全',
    blurb: '模型编得像真的、其实没依据或与事实不符。语气越自信，越容易骗过你——这不是“故意撒谎”，是生成机制本身就会补全缺口。',
    aliases: '幻觉 胡编 一本正经胡说八道',
  },
  {
    term: 'Jailbreak',
    full: 'Jailbreak',
    zh: '越狱',
    category: '评测与安全',
    blurb: '用特殊提示绕过模型的安全限制，诱导它输出本不该给的内容。安全团队会主动研究它，产品侧也要持续修补。',
    aliases: '越狱 jail break 突破限制',
  },
  {
    term: 'Prompt Injection',
    full: 'Prompt Injection',
    zh: '提示注入',
    category: '评测与安全',
    blurb: '把恶意指令藏进网页、文档或工具返回里，企图覆盖开发者设定的系统规则。Agent 越能读外部内容，这项风险越现实。',
    aliases: '提示注入 注入攻击 indirect prompt injection',
  },
  {
    term: 'Red Teaming',
    full: 'Red Teaming',
    zh: '红队测试',
    category: '评测与安全',
    blurb: '故意扮演攻击者或刁钻用户，去抠系统的越权、误用和安全漏洞。上线前找疼点，比上线后公关便宜得多。',
    aliases: '红队 攻防测试 red team',
  },
  {
    term: 'Guardrails',
    full: 'Guardrails',
    zh: '护栏',
    category: '评测与安全',
    blurb: '套在模型外围的约束：输入过滤、输出审核、工具权限、速率与范围限制。模型本身不一定听话，护栏负责兜底。',
    aliases: '护栏 安全护栏 内容审核',
  },
  {
    term: 'Contamination',
    full: 'Data Contamination',
    zh: '数据污染',
    category: '评测与安全',
    blurb: '评测题或答案在训练阶段就泄露进数据，导致分数虚高。榜好看，不代表模型真会做没见过的题。',
    aliases: '数据污染 题目泄露 benchmark contamination',
  },
  {
    term: 'Eval Harness',
    full: 'Evaluation Harness',
    zh: '评测框架',
    category: '评测与安全',
    blurb: '把题目加载、模型调用、打分、汇总跑成一条流水线的工具集。团队要持续对比版本，离不开可重复的 harness，而不是手工贴结果。',
    aliases: '评测框架 lm-eval harness evaluation suite',
  },
  {
    term: 'Human Eval',
    full: 'Human Evaluation',
    zh: '人工评测',
    category: '评测与安全',
    blurb: '让真人按量表给回答打分或两两比较。自动指标够不着的地方——语气、有用性、是否越界——最终还得人说了算。',
    aliases: '人工评测 人评 human evaluation side-by-side',
  },
  {
    term: 'Refusal',
    full: 'Model Refusal',
    zh: '拒答',
    category: '评测与安全',
    blurb: '模型识别到敏感或越权请求后选择不回答或只给安全替代。拒答过多会像复读机，过少又危险，边界本身就是产品策略。',
    aliases: '拒答 拒绝回答 safety refusal',
  },
  {
    term: 'PII',
    full: 'Personally Identifiable Information',
    zh: '个人身份信息',
    category: '评测与安全',
    blurb: '能定位到具体个人的信息：姓名、手机、证件号、住址等。训练、日志和回答里一旦乱泄，法律和信任成本都很高。',
    aliases: '个人隐私 pii 敏感信息 隐私',
  },
  {
    term: 'Model Spec',
    full: 'Model Spec / Behavior Spec',
    zh: '模型行为规范',
    category: '评测与安全',
    blurb: '把“模型该怎么做人”写成可执行的规范：何时帮助、何时拒绝、如何处理冲突指令。对齐不再只靠感觉，而有一份可对照的说明书。',
    aliases: 'model spec 行为规范 constitution 宪法 ai',
  },

  // —— Agent 与协议 ——
  {
    term: 'RAG',
    full: 'Retrieval-Augmented Generation',
    zh: '检索增强生成',
    category: 'Agent 与协议',
    blurb: '先去知识库里把相关材料找出来，再让模型据此回答。适合公司文档、政策条文这类“必须有出处”的场景。',
    aliases: '检索增强 rag 知识库问答',
  },
  {
    term: 'Agent',
    full: 'AI Agent',
    zh: '智能体',
    category: 'Agent 与协议',
    blurb: '不只聊天，还能拆目标、调工具、看结果、再决定下一步的系统。从“回答问题”变成“替你把事推进一段”。',
    note: '叫 Agent 不等于真能自主打工。没有可靠工具、记忆和权限设计，它只是套了循环的聊天机器人。',
    aliases: '智能体 ai agent 代理',
  },
  {
    term: 'Tool Calling',
    full: 'Tool / Function Calling',
    zh: '工具调用',
    category: 'Agent 与协议',
    blurb: '让模型按约定格式发起外部调用：搜网页、查数据库、跑代码、改日历。模型负责“想调什么”，真正执行通常在你的后端。',
    aliases: 'function calling 函数调用 工具使用 tool use',
  },
  {
    term: 'MCP',
    full: 'Model Context Protocol',
    zh: '模型上下文协议',
    category: 'Agent 与协议',
    blurb: '一套让 AI 应用连接外部工具和数据源的开放协议，目标是少写一次性集成、多复用标准接口。像给 Agent 世界准备的 USB。',
    aliases: 'model context protocol mcp 协议',
  },
  {
    term: 'A2A',
    full: 'Agent-to-Agent',
    zh: '智能体互联',
    category: 'Agent 与协议',
    blurb: '让不同 Agent 彼此发现能力、交接任务、协同完成工作的协议方向。重点从“人和一个助手对话”，扩展到“助手之间怎么协作”。',
    aliases: 'agent to agent 多智能体协议',
  },
  {
    term: 'Computer Use',
    full: 'Computer Use',
    zh: '计算机操控',
    category: 'Agent 与协议',
    blurb: '让模型看屏幕、点鼠标、敲键盘，像人一样操作电脑完成任务。门槛高、风险也大，是 Agent 能力的前沿形态之一。',
    aliases: 'computer use 操控电脑 cua 桌面代理',
  },
  {
    term: 'Multi-agent',
    full: 'Multi-agent System',
    zh: '多智能体',
    category: 'Agent 与协议',
    blurb: '多个 Agent 分工协作：有的负责规划，有的负责写代码，有的负责检查。做对了是流水线，做砸了是互相甩锅的群聊。',
    aliases: '多智能体 multi agent 多代理',
  },
  {
    term: 'Memory',
    full: 'Agent Memory',
    zh: '记忆',
    category: 'Agent 与协议',
    blurb: '让系统在多轮任务里记住用户偏好、项目事实和历史决策。可以是对话摘要，也可以是外部数据库；没有记忆，Agent 每次都像失忆上岗。',
    aliases: '记忆 long-term memory 长期记忆',
  },
  {
    term: 'Orchestration',
    full: 'Orchestration',
    zh: '编排',
    category: 'Agent 与协议',
    blurb: '把提示、模型、工具、检索和人工审批串成可运行流程的那一层。单点模型很强，真正能上线的产品往往赢在编排。',
    aliases: '编排 workflow 工作流 orchestration',
  },
  {
    term: 'ReAct',
    full: 'Reason + Act',
    zh: '推理—行动循环',
    category: 'Agent 与协议',
    blurb: '一种经典 Agent 写法：先想一步（Reason），再调用工具（Act），看观察结果，再想下一步。很多“会动手”的助手骨架都长这样。',
    aliases: 'react reason act 推理行动',
  },
  {
    term: 'Human-in-the-loop',
    full: 'Human-in-the-Loop',
    zh: '人在回路',
    category: 'Agent 与协议',
    blurb: '关键步骤必须人点头：发邮件前确认、改生产库前审批、高风险操作停一停。全自动很酷，可回滚的半自动往往更适合上线。',
    aliases: '人在回路 hitl 人工审批 human in the loop',
  },
  {
    term: 'Chunking',
    full: 'Document Chunking',
    zh: '文档分块',
    category: 'Agent 与协议',
    blurb: '做 RAG 前，先把长文档切成合适大小的片段再向量化。切太碎丢语境，切太长检索不准——分块策略常常比换嵌入模型更管用。',
    aliases: '分块 chunk 切片 rag chunking',
  },
  {
    term: 'Rerank',
    full: 'Reranking',
    zh: '重排序',
    category: 'Agent 与协议',
    blurb: '检索先粗召回一批候选，再用更精的模型重新打分排序。两段式常见于搜索和 RAG：便宜模型撒网，贵一点的模型精挑。',
    aliases: '重排 reranker 重排序',
  },
  {
    term: 'Hybrid Search',
    full: 'Hybrid Search',
    zh: '混合检索',
    category: 'Agent 与协议',
    blurb: '关键词检索和向量语义检索一起用，再融合排序。专有名词、编号、口语换说法混在一起时，单靠一种检索经常漏。',
    aliases: '混合检索 bm25 向量检索 hybrid',
  },
  {
    term: 'Skills',
    full: 'Agent Skills',
    zh: '技能',
    category: 'Agent 与协议',
    blurb: '把某类可复用能力打包成技能：何时触发、用哪些工具、遵守什么流程。比让模型每次从零即兴发挥，更稳、也好维护。',
    aliases: 'agent skills 技能 能力包',
  },
]

const glossaryCategories = ['模型与能力', '训练与对齐', '推理与部署', '提示与交互', '评测与安全', 'Agent 与协议']

const glossarySearchText = (item) => [
  item.term,
  item.full,
  item.zh,
  item.category,
  item.blurb,
  item.note || '',
  item.aliases || '',
].join(' ').toLowerCase()

const topicLabels = {
  'ai-foundations': 'AI 基础',
  'ai-winter': 'AI 寒冬',
  'deep-learning': '深度学习',
  'computer-vision': '计算机视觉',
  'natural-language-processing': '自然语言处理',
  nlp: '自然语言处理',
  'large-language-models': '大语言模型',
  'consumer-ai': '消费级 AI',
  'ai-applications': 'AI 应用',
  'ai-coding': 'AI Coding',
  'ai-agent': 'AI Agent',
  'open-source-models': '开放模型',
  'multimodal-ai': '多模态 AI',
  'ai-for-science': 'AI for Science',
  'reinforcement-learning': '强化学习',
  'representation-learning': '表示学习',
  'ai-infrastructure': 'AI Infra',
  'model-efficiency': '模型效率',
  'developer-tools': '开发者工具',
  'model-context-protocol': 'MCP 生态',
  'ai-history': 'AI 历史',
  'game-ai': '游戏 AI',
  'neural-networks': '神经网络',
  'ai-safety': 'AI 安全',
  'china-ai': '中国 AI',
  'enterprise-ai': '企业 AI',
  // 扩展专题（博物馆路线）
  'reasoning-models': '推理模型',
  'scaling-laws': '扩展定律',
  'video-generation': '视频生成',
  'image-generation': '图像生成',
  'speech-ai': '语音 AI',
  'small-language-models': '小模型 / 端侧',
  'ai-regulation': 'AI 治理与监管',
  'generative-media': '生成式媒体',
  'world-models': '世界模型',
  'ai-hardware': 'AI 硬件',
  'rag-search': '检索增强',
  rag: '检索增强',
  'embodied-ai': '具身智能',
  'symbolic-ai': '符号主义 AI',
  'protein-folding': '蛋白质结构',
}

const topicLabelsEn = {
  'ai-foundations': 'AI Foundations',
  'ai-winter': 'AI Winters',
  'deep-learning': 'Deep Learning',
  'computer-vision': 'Computer Vision',
  'natural-language-processing': 'Natural Language Processing',
  nlp: 'Natural Language Processing',
  'large-language-models': 'Large Language Models',
  'consumer-ai': 'Consumer AI',
  'ai-applications': 'AI Applications',
  'ai-coding': 'AI Coding',
  'ai-agent': 'AI Agents',
  'open-source-models': 'Open Models',
  'multimodal-ai': 'Multimodal AI',
  'ai-for-science': 'AI for Science',
  'reinforcement-learning': 'Reinforcement Learning',
  'representation-learning': 'Representation Learning',
  'ai-infrastructure': 'AI Infrastructure',
  'model-efficiency': 'Model Efficiency',
  'developer-tools': 'Developer Tools',
  'model-context-protocol': 'MCP Ecosystem',
  'ai-history': 'AI History',
  'game-ai': 'Game AI',
  'neural-networks': 'Neural Networks',
  'ai-safety': 'AI Safety',
  'china-ai': 'AI in China',
  'enterprise-ai': 'Enterprise AI',
  'reasoning-models': 'Reasoning Models',
  'scaling-laws': 'Scaling Laws',
  'video-generation': 'Video Generation',
  'image-generation': 'Image Generation',
  'speech-ai': 'Speech AI',
  'small-language-models': 'Small / On-device Models',
  'ai-regulation': 'AI Governance',
  'generative-media': 'Generative Media',
  'world-models': 'World Models',
  'ai-hardware': 'AI Hardware',
  'rag-search': 'Retrieval-Augmented AI',
  rag: 'Retrieval-Augmented AI',
  'embodied-ai': 'Embodied AI',
  'symbolic-ai': 'Symbolic AI',
  'protein-folding': 'Protein Folding',
}

const topicAliases = {
  nlp: 'natural-language-processing',
  rag: 'rag-search',
}

const importanceLabels = {
  S: '范式级',
  A: '行业级',
  B: '领域级',
  C: '补充',
}

const importanceLabelsEn = {
  S: 'Paradigm',
  A: 'Industry',
  B: 'Field',
  C: 'Context',
}

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const urlFor = (path = '/') => {
  if (path === '/') return `${basePath}/`
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}

const assetUrl = (path) => `${urlFor(path)}?v=${assetVersion}`

const canonicalFor = (path = '/') => `${siteOrigin}${urlFor(path)}`

const formatDate = (value, precision = 'day') => {
  const [year, month, day] = String(value).split('-')
  if (precision === 'year' || !month) return `${year} 年`
  if (precision === 'month' || !day) return `${year} 年 ${Number(month)} 月`
  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`
}

const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const formatDateEn = (value, precision = 'day') => {
  const [year, month, day] = String(value).split('-')
  if (precision === 'year' || !month) return year
  const monthName = monthNamesEn[Number(month) - 1]
  if (precision === 'month' || !day) return `${monthName} ${year}`
  return `${monthName} ${Number(day)}, ${year}`
}

const timelineDateEn = (value, precision = 'day') => {
  const [, month, day] = String(value).split('-')
  if (precision === 'year' || !month) return ''
  const monthName = monthNamesEn[Number(month) - 1]
  if (precision === 'month' || !day) return monthName
  return `${monthName} ${Number(day)}`
}

const formatShortDate = (value) => String(value).replaceAll('-', '.')

const topicName = (topic) => topicLabels[topic] || topic
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const topicNameEn = (topic) => topicLabelsEn[topic] || topicName(topic)

const canonicalTopic = (topic) => topicAliases[topic] || topic

const bilingual = (zh, en, tag = 'span', className = '') => `<${tag}${className ? ` class="${escapeHtml(className)}"` : ''} data-localized data-zh="${escapeHtml(zh)}" data-en="${escapeHtml(en)}">${escapeHtml(zh)}</${tag}>`
const englishText = (zh, explicit) => explicit || interfaceTranslations[zh] || zh

const metadataItem = (labelZh, labelEn, value, className = '') => value ? `
  <div${className ? ` class="${escapeHtml(className)}"` : ''}>
    <dt>${bilingual(labelZh, labelEn)}</dt>
    <dd>${value}</dd>
  </div>` : ''

const humanName = (value) => String(value)
  .split('-')
  .map((part) => part ? part.charAt(0).toUpperCase() + part.slice(1) : part)
  .join(' ')

const companyLogo = (company, className = '') => company?.logo
  ? `<img class="company-logo${className ? ` ${escapeHtml(className)}` : ''}" src="${assetUrl(company.logo)}" alt="" width="32" height="32" loading="lazy" decoding="async" aria-hidden="true">`
  : ''

const eventVisual = (event) => {
  const visual = event.visual
  if (!visual) return ''
  const credit = visual.sourceUrl
    ? `<a href="${escapeHtml(visual.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(visual.credit)}</a>`
    : `<span>${escapeHtml(visual.credit)}</span>`
  return `
    <figure class="event-visual">
      <div class="event-visual-frame">
        <img src="${assetUrl(visual.src)}" width="${visual.width}" height="${visual.height}" alt="${escapeHtml(visual.alt)}" data-localized-alt data-alt-zh="${escapeHtml(visual.alt)}" data-alt-en="${escapeHtml(visual.altEn)}" loading="lazy" decoding="async">
      </div>
      <figcaption>
        ${bilingual(visual.caption, visual.captionEn, 'span', 'event-visual-caption')}
        <small>${credit}</small>
      </figcaption>
    </figure>`
}

// 主时间轴倒序：最新事件在前，避免读者每次从最早年份往下翻
const sortedEvents = [...events].sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id))
// 正序仅用于历史起止年与总览比例尺
const chronologicalEvents = [...sortedEvents].reverse()
const earliestEvent = chronologicalEvents[0]
const latestEvent = sortedEvents[0]

const eventTranslations = Object.fromEntries(events.flatMap((event) => {
  const pairs = [
    [event.title, event.titleEn],
    [event.subtitle, event.subtitleEn],
    [event.summary, event.summaryEn],
    [event.background, event.backgroundEn],
    [event.whatHappened, event.whatHappenedEn],
    [event.whyImportant, event.whyImportantEn],
    [event.beforeAfter?.before, event.beforeAfterEn?.before],
    [event.beforeAfter?.after, event.beforeAfterEn?.after],
    ...Object.keys(event.impact || {}).map((key) => [event.impact?.[key], event.impactEn?.[key]]),
  ]
  return pairs.filter(([zh, en]) => zh && en)
}))

// 预注册全部专题标签，避免新路线在未挂事件前不可见
const registeredTopics = Object.keys(topicLabels).filter((id) => !topicAliases[id])

const topicIndex = [...new Set([
  ...registeredTopics,
  ...events.flatMap((event) => event.topics.map(canonicalTopic)),
  ...companies.flatMap((company) => company.keyTopics.map(canonicalTopic)),
])]
  .map((id) => {
    const topicEvents = sortedEvents.filter((event) => event.topics.some((topic) => canonicalTopic(topic) === id))
    const topicCompanies = companies.filter((company) => company.keyTopics.some((topic) => canonicalTopic(topic) === id))
    const topicFamilies = modelFamilies.filter((family) => {
      const company = companyById.get(family.company)
      return company?.keyTopics?.some((topic) => canonicalTopic(topic) === id)
    })
    return {
      id,
      label: topicName(id),
      events: topicEvents,
      companies: topicCompanies,
      modelFamilies: topicFamilies,
    }
  })
  .sort((a, b) => b.events.length - a.events.length || a.label.localeCompare(b.label, 'zh-CN'))

const generatedInterfaceTranslations = Object.fromEntries([
  [`${events.length} 个事件`, `${events.length} events`],
  ...events.flatMap((event) => [
    [formatDate(event.date, event.datePrecision), formatDateEn(event.date, event.datePrecision)],
    [timelineDate(event), timelineDateEn(event.date, event.datePrecision)],
  ]),
  ...topicIndex.flatMap((topic) => {
    const rows = [
      [`${topic.label} · ${topic.events.length}`, `${topicNameEn(topic.id)} · ${topic.events.length}`],
      [`${topic.events.length} 个节点`, `${topic.events.length} ${topic.events.length === 1 ? 'node' : 'nodes'}`],
    ]
    if (topic.events.length) {
      const years = topic.events.map((event) => event.date.slice(0, 4)).sort()
      const span = `${years.at(-1)}—${years[0]}`
      rows.push([
        `${topic.events.length} 个节点 · ${span}`,
        `${topic.events.length} ${topic.events.length === 1 ? 'node' : 'nodes'} · ${span}`,
      ])
    }
    return rows
  }),
].filter(([zh, en]) => zh && en))

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`

const searchIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <circle cx="8.7" cy="8.7" r="5.2" stroke="currentColor" stroke-width="1.5"/>
    <path d="m12.6 12.6 3.4 3.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`

const sunIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3.25" stroke="currentColor" stroke-width="1.4"/>
    <path d="M10 2v1.6M10 16.4V18M2 10h1.6M16.4 10H18M4.35 4.35l1.12 1.12M14.53 14.53l1.12 1.12M15.65 4.35l-1.12 1.12M5.47 14.53l-1.12 1.12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`

const moonIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M15.7 12.9A6.3 6.3 0 0 1 7.1 4.3 6.35 6.35 0 1 0 15.7 12.9Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>`

const githubIcon = `
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 1.6C5.36 1.6 1.6 5.42 1.6 10.14c0 3.78 2.4 6.98 5.73 8.11.42.08.57-.19.57-.41 0-.2-.01-.87-.01-1.58-2.33.52-2.82-.99-2.82-.99-.38-1-.93-1.27-.93-1.27-.76-.53.06-.52.06-.52.84.06 1.28.88 1.28.88.75 1.31 1.96.93 2.44.71.08-.55.29-.93.53-1.15-1.86-.22-3.82-.95-3.82-4.24 0-.94.33-1.7.86-2.3-.09-.22-.37-1.12.08-2.33 0 0 .7-.23 2.3.88a7.7 7.7 0 0 1 4.18 0c1.6-1.11 2.3-.88 2.3-.88.45 1.21.17 2.11.08 2.33.54.6.86 1.36.86 2.3 0 3.3-1.96 4.02-3.83 4.23.3.27.57.79.57 1.6 0 1.15-.01 2.08-.01 2.36 0 .23.15.5.57.41A8.55 8.55 0 0 0 18.4 10.14C18.4 5.42 14.64 1.6 10 1.6Z"/>
  </svg>`

function nav(active) {
  const items = [
    ['timeline', '/', '时间轴'],
    ['topics', '/topics/', '主题'],
    ['stack', '/stack/', '产业链'],
    ['glossary', '/glossary/', '术语'],
    ['concepts', '/concepts/', '概念'],
    ['models', '/models/', '模型'],
    ['companies', '/companies/', '公司'],
  ]

  const renderNavLink = ([id, path, label, external, externalLabel]) => `
    <a href="${external ? path : urlFor(path)}"${active === id ? ' aria-current="page"' : ''}${external ? ` class="external-nav-link" target="_blank" rel="noopener noreferrer" aria-label="${externalLabel || label}"` : ''}>
      <span>${label}</span>${external ? '<i aria-hidden="true">↗</i>' : ''}
    </a>`

  return `
    <header class="site-header" data-site-header>
      <div class="header-inner">
        <a class="brand" href="${urlFor('/')}">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span><strong>AI Chronicle</strong><small>AI 行业编年史</small></span>
        </a>
        <nav class="desktop-nav" aria-label="主导航">
          ${items.map(renderNavLink).join('')}
        </nav>
        <div class="header-actions">
          <a class="utility-trigger github-trigger" href="${githubRepoUrl}" target="_blank" rel="noopener noreferrer" aria-label="在 GitHub 打开本项目仓库（新窗口）" title="GitHub">
            ${githubIcon}
          </a>
          <button class="utility-trigger language-trigger" type="button" data-language-toggle aria-label="Switch to English" title="中 / EN">
            <span data-language-label>EN</span>
          </button>
          <button class="utility-trigger theme-trigger" type="button" data-theme-toggle aria-label="切换明暗主题" title="切换明暗主题">
            <span class="theme-icon theme-icon-sun">${sunIcon}</span>
            <span class="theme-icon theme-icon-moon">${moonIcon}</span>
          </button>
          <button class="search-trigger" type="button" data-search-open aria-label="打开全站搜索">
            ${searchIcon}<span>搜索</span><kbd>⌘ K</kbd>
          </button>
          <button class="menu-trigger" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav">
            <span></span><span></span><span></span><b class="sr-only">打开菜单</b>
          </button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobile-nav" data-mobile-nav aria-label="移动端导航">
        ${items.map(renderNavLink).join('')}
      </nav>
    </header>`
}

function searchDialog() {
  return `
    <dialog class="search-dialog" data-search-dialog>
      <div class="search-panel">
        <div class="search-field-wrap">
          ${searchIcon}
          <input id="global-search" name="search" type="search" placeholder="搜索事件、概念、公司或主题…" data-global-search autocomplete="off" aria-label="全站搜索" />
          <button type="button" data-search-close aria-label="关闭搜索">ESC</button>
        </div>
        <div class="search-hint" data-search-hint>
          <p>试试搜索</p>
          <button type="button" data-search-suggestion="Transformer">Transformer</button>
          <button type="button" data-search-suggestion="AI Coding">AI Coding</button>
          <button type="button" data-search-suggestion="OpenAI">OpenAI</button>
        </div>
        <div class="search-results" data-search-results aria-live="polite"></div>
      </div>
    </dialog>`
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div>
          <a class="footer-brand" href="${urlFor('/')}">AI Chronicle</a>
          <p>${bilingual('沿着时间读事件，沿着来源读历史。', 'Read events through time, and history through its sources.')}</p>
        </div>
        <div class="footer-links">
          <a href="${urlFor('/')}">时间轴</a>
          <a href="${urlFor('/topics/')}">主题</a>
          <a href="${urlFor('/concepts/')}">概念</a>
          <a href="${urlFor('/glossary/')}">术语专栏</a>
          <a href="${urlFor('/models/')}">模型谱系</a>
          <a href="${urlFor('/about/')}">关于与编辑原则</a>
          <a class="external-footer-link" href="${githubRepoUrl}" target="_blank" rel="noopener noreferrer" aria-label="在 GitHub 打开本项目仓库（新窗口）"><span>GitHub</span><i aria-hidden="true">↗</i></a>
          <a class="external-footer-link" href="${siteOrigin}/" target="_blank" rel="noopener noreferrer" aria-label="访问陈大黄主站（新窗口）"><span>主站</span><i aria-hidden="true">↗</i></a>
        </div>
      </div>
      <div class="footer-meta">
        ${bilingual('开源项目 · 欢迎贡献', 'Open source · contributions welcome')}
        <a class="footer-meta-link" href="${githubRepoUrl}" target="_blank" rel="noopener noreferrer">${githubRepoUrl.replace('https://', '')}</a>
      </div>
    </footer>`
}

function pageShell({ title, description, path, active, body, bodyClass = '', ogType = 'website', ogImage = '' }) {
  const fullTitle = title === 'AI 行业编年史'
    ? 'AI Chronicle｜AI 行业编年史'
    : `${title}｜AI Chronicle`

  return `<!doctype html>
<html lang="zh-CN" data-theme="dark" data-lang="zh">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#070b12">
  <link rel="canonical" href="${canonicalFor(path)}">
  <meta property="og:title" content="${escapeHtml(fullTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="${escapeHtml(ogType)}">
  <meta property="og:url" content="${canonicalFor(path)}">
  ${ogImage ? `<meta property="og:image" content="${canonicalFor(ogImage)}">` : ''}
  <link rel="icon" href="${assetUrl('/assets/favicon.svg')}" type="image/svg+xml">
  <script>(function(){try{var t=localStorage.getItem('ai-chronicle-theme');var l=localStorage.getItem('ai-chronicle-lang');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;else document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';if(l==='en'){document.documentElement.dataset.lang='en';document.documentElement.lang='en'}}catch(e){}})()</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${assetUrl('/assets/app.css')}">
  <script src="${assetUrl('/assets/app.js')}" defer></script>
</head>
<body class="${escapeHtml(bodyClass)}" data-base-path="${basePath}" data-asset-version="${assetVersion}">
  <a class="skip-link" href="#main">跳到主要内容</a>
  ${nav(active)}
  <main id="main">${body}</main>
  ${footer()}
  ${searchDialog()}
</body>
</html>`
}

function writePage(route, options) {
  const cleanRoute = route.replace(/^\/+|\/+$/g, '')
  const directory = cleanRoute ? join(siteDir, cleanRoute) : siteDir
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, 'index.html'), pageShell(options), 'utf8')
}

function importanceBadge(event, compact = false) {
  return `<span class="importance importance-${event.importance.toLowerCase()}${compact ? ' compact' : ''}">
    <b>${escapeHtml(event.importance)}</b><span>${importanceLabels[event.importance]}</span>
  </span>`
}

function conceptLink(id) {
  const concept = conceptById.get(id)
  if (!concept) return `<span class="tag tag-muted">${escapeHtml(topicName(id))}</span>`
  return `<a class="tag" href="${urlFor(`/concepts/${concept.slug}/`)}">${escapeHtml(concept.title)}</a>`
}

function timelineDate(event) {
  const [, month, day] = String(event.date).split('-')
  if (event.datePrecision === 'year' || !month) return ''
  if (event.datePrecision === 'month' || !day) return `${Number(month)} 月`
  return `${Number(month)} 月 ${Number(day)} 日`
}

function eventRow(event) {
  return `
    <article class="event-row" id="event-${escapeHtml(event.slug)}" data-event-card
      data-event-id="${escapeHtml(event.slug)}"
      data-date="${escapeHtml(event.date)}"
      data-level="${escapeHtml(event.importance)}"
      data-topics="${escapeHtml(event.topics.map(canonicalTopic).join(' '))}"
      data-search="${escapeHtml([event.title, event.summary, ...event.concepts, ...event.topics].join(' ').toLowerCase())}">
      <a class="event-row-link" href="${urlFor(`/events/${event.slug}/`)}">
        <span class="event-node" aria-hidden="true"><i></i></span>
        <time datetime="${escapeHtml(event.date)}" aria-label="${escapeHtml(formatDate(event.date, event.datePrecision))}">${timelineDate(event)}</time>
        <span class="event-title-wrap">
          <span class="event-title-line">
            <h2>${escapeHtml(event.title)}</h2>
            <span class="event-level event-level-${event.importance.toLowerCase()}" aria-label="${escapeHtml(event.importance)} 级 · ${escapeHtml(importanceLabels[event.importance])}">${escapeHtml(event.importance)}</span>
          </span>
          <span class="event-summary">${escapeHtml(event.summary)}</span>
        </span>
        <span class="event-arrow" aria-hidden="true">${arrowIcon}</span>
      </a>
    </article>`
}

function timelineExperience() {
  const startYear = Number(earliestEvent.date.slice(0, 4))
  const endYear = Number(latestEvent.date.slice(0, 4))
  const startTime = Date.parse(earliestEvent.date)
  const endTime = Date.parse(latestEvent.date)
  // 年份键会被当成整数索引升序排列，必须显式倒序
  const eventGroups = Object.entries(Object.groupBy(sortedEvents, (event) => event.date.slice(0, 4)))
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([year, yearEvents]) => [
      year,
      [...yearEvents].sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id)),
    ])
  const tickYears = [...new Set([
    startYear,
    ...Array.from({ length: Math.floor(endYear / 10) - Math.ceil(startYear / 10) + 1 }, (_, index) => (Math.ceil(startYear / 10) + index) * 10),
    endYear,
  ])].filter((year) => year >= startYear && year <= endYear)
  const levelOptions = ['S', 'A', 'B', 'C'].map((level) => ({
    level,
    count: events.filter((event) => event.importance === level).length,
  })).filter(({ count }) => count > 0)

  const overviewPosition = (date) => {
    if (endTime === startTime) return 0
    return Math.max(0, Math.min(100, ((Date.parse(date) - startTime) / (endTime - startTime)) * 100))
  }
  const overviewMarker = (event) => {
    const classes = `overview-event overview-event-${event.importance.toLowerCase()}`
    const position = overviewPosition(event.date).toFixed(3)
    if (event.importance !== 'S') return `<span class="${classes}" style="--position:${position}%" aria-hidden="true"></span>`
    return `<button class="${classes}" type="button" style="--position:${position}%"
      data-overview-event="${escapeHtml(event.slug)}"
      data-preview-date="${escapeHtml(formatDate(event.date, event.datePrecision))}"
      data-preview-date-en="${escapeHtml(formatDateEn(event.date, event.datePrecision))}"
      data-preview-title="${escapeHtml(event.title)}"
      data-preview-title-en="${escapeHtml(englishText(event.title, event.titleEn))}"
      data-preview-summary="${escapeHtml(event.summary)}"
      data-preview-summary-en="${escapeHtml(englishText(event.summary, event.summaryEn))}"
      data-preview-level="${escapeHtml(event.importance)}"
      data-preview-level-label="${escapeHtml(importanceLabels[event.importance])}"
      data-preview-level-label-en="${escapeHtml(importanceLabelsEn[event.importance])}"
      data-preview-href="${escapeHtml(urlFor(`/events/${event.slug}/`))}"
      aria-label="${escapeHtml(`${formatDate(event.date, event.datePrecision)} · ${event.title}`)}"
      aria-haspopup="true" aria-expanded="false" aria-controls="timeline-preview"></button>`
  }

  return `
    <section class="timeline-stage" data-timeline-root data-start-year="${startYear}" data-end-year="${endYear}" data-timeline-order="desc">
      <header class="timeline-masthead">
        <div class="timeline-title">
          <h1>AI 行业编年史</h1>
          <p><span>${endYear}—${startYear}</span><button class="timeline-order-hint" type="button" data-timeline-order-toggle>${bilingual('倒序 · 新→旧', 'Newest first')}</button></p>
        </div>
        <div class="timeline-overview" aria-label="${startYear} 到 ${endYear}，事件按真实年份比例排列的时间总览；点击节点可预览事件">
          <div class="overview-rail">
            <span class="overview-base" aria-hidden="true"></span>
            <span class="overview-progress" aria-hidden="true"></span>
            ${tickYears.map((year) => {
              const position = ((year - startYear) / (endYear - startYear)) * 100
              return `<span class="overview-tick" style="--position:${position.toFixed(3)}%"><i></i><b>${year}</b></span>`
            }).join('')}
            ${sortedEvents.map(overviewMarker).join('')}
          </div>
          <aside class="timeline-preview" id="timeline-preview" data-timeline-preview hidden aria-live="polite">
            <button class="timeline-preview-close" type="button" data-timeline-preview-close aria-label="关闭预览">×</button>
            <p class="timeline-preview-meta"><time data-timeline-preview-date></time><span data-timeline-preview-level></span></p>
            <h2 data-timeline-preview-title></h2>
            <p data-timeline-preview-summary></p>
            <a data-timeline-preview-link href="#"><span data-localized data-zh="查看完整档案" data-en="Read full record">查看完整档案</span><span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </header>

      <div class="timeline-explorer">
        <nav class="timeline-entry-points" aria-label="推荐阅读入口">
          <button type="button" data-start-from-beginning><b>${bilingual('第一次来', 'New here')}</b><span>${bilingual('从 1950 年开始，顺着因果往后读', 'Start in 1950 and follow the causes forward')}</span></button>
          <a href="${urlFor('/topics/large-language-models/')}"><b>${bilingual('理解大模型', 'Understand LLMs')}</b><span>${bilingual('从注意力、预训练走到聊天产品', 'From attention and pretraining to chat products')}</span></a>
          <a href="${urlFor('/topics/ai-coding/')}"><b>${bilingual('理解 AI Coding', 'Understand AI coding')}</b><span>${bilingual('从代码生成走到软件工程 Agent', 'From code generation to software-engineering agents')}</span></a>
        </nav>
        <div class="timeline-toolbar" aria-label="时间轴筛选">
          <div class="timeline-count"><span data-result-count>${events.length} 个事件</span><i aria-hidden="true"></i></div>
          <label class="timeline-search" for="timeline-search">
            ${searchIcon}
            <span class="sr-only">搜索事件或概念</span>
            <input id="timeline-search" type="search" placeholder="搜索事件或概念" data-timeline-search autocomplete="off">
          </label>
          <div class="level-controls" data-level-controls aria-label="按重要程度筛选">
            <button type="button" data-level="all" aria-pressed="true">全部</button>
            ${levelOptions.map(({ level }) => `<button type="button" data-level="${level}" aria-pressed="false" aria-label="${level} 级 · ${escapeHtml(importanceLabels[level])}" title="${escapeHtml(importanceLabels[level])}">${level}</button>`).join('')}
          </div>
          <label class="topic-select" for="topic-filter">
            <span class="sr-only">按主题筛选</span>
            <select id="topic-filter" data-topic-filter>
              <option value="all">全部主题</option>
              ${topicIndex.filter((topic) => topic.events.length > 0).map((topic) => `<option value="${escapeHtml(topic.id)}">${escapeHtml(topic.label)} · ${topic.events.length}</option>`).join('')}
            </select>
          </label>
          <button class="reset-filter" type="button" data-reset-filters hidden>清除</button>
        </div>

        <div class="timeline-stream" data-timeline-stream>
          <span class="timeline-axis" aria-hidden="true"><i data-timeline-axis-fill></i></span>
          ${eventGroups.map(([year, yearEvents]) => `
            <section class="timeline-year" id="year-${year}" data-year-group data-year="${year}">
              <header class="timeline-year-label">
                <a href="#year-${year}"><span>${year}</span></a>
              </header>
              <span class="timeline-year-node" aria-hidden="true"><i></i></span>
              <div class="timeline-year-events">
                ${yearEvents.map(eventRow).join('')}
              </div>
            </section>`).join('')}
        </div>

        <div class="empty-state" data-empty-state hidden><h2>没有对应事件</h2><button type="button" data-reset-filters>清除筛选</button></div>
      </div>
    </section>`
}

function renderHome() {
  const body = timelineExperience()

  writePage('', {
    title: 'AI 行业编年史',
    description: '按时间浏览改变 AI 技术、产品与行业路线的关键事件。',
    path: '/',
    active: 'timeline',
    body,
    bodyClass: 'chronicle-page',
  })
}

function renderTimeline() {
  const body = timelineExperience()

  writePage('timeline', {
    title: '时间轴',
    description: '按倒序时间、重要程度和主题浏览 AI 行业关键事件（新→旧）。',
    path: '/timeline/',
    active: 'timeline',
    body,
    bodyClass: 'chronicle-page',
  })
}

function renderEventPages() {
  sortedEvents.forEach((event, index) => {
    const articleZh = eventArticleZhById.get(event.id)
    const articleEn = eventArticleEnById.get(event.id)
    const relatedEvents = event.relatedEvents.map((id) => eventById.get(id)).filter(Boolean)
    const relatedCompanies = event.companies.map((id) => companyById.get(id)).filter(Boolean)
    const previousEvent = sortedEvents[index - 1]
    const nextEvent = sortedEvents[index + 1]
    const hasSources = event.sources.length > 0
    const isVerified = hasSources && event.status === 'verified'
    const effectiveStatus = isVerified ? '已核验' : '待补来源'
    const effectiveStatusEn = isVerified ? 'Verified' : 'Sources pending'
    const topicLinks = [...new Set(event.topics.map(canonicalTopic))]
      .map((topic) => `<a href="${urlFor(`/topics/${topic}/`)}">${bilingual(topicName(topic), topicNameEn(topic))}</a>`)
      .join('')
    const companyLinks = relatedCompanies
      .map((company) => `<a class="company-link" href="${urlFor(`/companies/${company.slug}/`)}">${companyLogo(company, 'company-logo-inline')}<span>${escapeHtml(company.name)}</span></a>`)
      .join('')
    const people = event.people.map((person) => escapeHtml(humanName(person))).join('<span aria-hidden="true">·</span>')
    const models = event.models.map(escapeHtml).join('<span aria-hidden="true">·</span>')
    const products = event.products.map(escapeHtml).join('<span aria-hidden="true">·</span>')
    const conceptLinks = event.concepts.map(conceptLink).join('')
    const paperSources = event.sources.filter((source) => source.type === 'paper')

    const body = `
      <article class="event-article">
        <header class="event-header">
          <div class="breadcrumbs"><a href="${urlFor('/')}">时间轴</a><span>/</span><span>${event.date.slice(0, 4)}</span></div>
          <div class="event-title-grid">
            <div class="event-title-copy">
              <h1>${bilingual(event.title, englishText(event.title, event.titleEn))}</h1>
              ${event.subtitle ? `<p class="event-subtitle">${bilingual(event.subtitle, englishText(event.subtitle, event.subtitleEn))}</p>` : ''}
              <p class="event-record-lead">${bilingual(event.summary, event.summaryEn)}</p>
            </div>
          </div>
        </header>

        <section class="event-facts" aria-label="事件概览">
          <span><small>${bilingual('时间', 'Date')}</small><b>${bilingual(formatDate(event.date, event.datePrecision), formatDateEn(event.date, event.datePrecision))}</b></span>
          <span><small>${bilingual('级别', 'Significance')}</small><b>${escapeHtml(event.importance)} · ${bilingual(importanceLabels[event.importance], importanceLabelsEn[event.importance])}</b></span>
          <span><small>${bilingual('组织', 'Organizations')}</small><b class="event-facts-companies">${companyLinks || '—'}</b></span>
          <span><small>${bilingual('状态', 'Status')}</small><b><i class="status-dot ${isVerified ? 'verified' : 'draft'}"></i>${bilingual(effectiveStatus, effectiveStatusEn)} · ${hasSources ? event.sources.length : 0}</b></span>
        </section>

        <div class="event-reading">
          ${eventVisual(event)}
          <section class="event-narrative" data-native-article data-article-language="zh" lang="zh-CN">
            ${articleZh?.content || ''}
          </section>
          <section class="event-narrative" data-native-article data-article-language="en" lang="en">
            ${articleEn?.content || ''}
          </section>

          ${(conceptLinks || paperSources.length) ? `<aside class="event-reading-map">
            <div><small>${bilingual('继续理解', 'Keep exploring')}</small><h2>${bilingual('这篇文章连接到哪里', 'Where this story connects')}</h2></div>
            ${conceptLinks ? `<section><h3>${bilingual('核心概念', 'Core concepts')}</h3><div class="event-concept-links">${conceptLinks}</div></section>` : ''}
            ${paperSources.length ? `<section><h3>${bilingual('论文与技术源头', 'Papers and technical sources')}</h3><div class="event-paper-links">${paperSources.map((source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(source.title)}</span>${arrowIcon}</a>`).join('')}</div></section>` : ''}
          </aside>` : ''}

          <details class="event-archive">
            <summary><span>${bilingual('展开完整事件档案', 'Open the full event record')}</span><small>${bilingual('人物、主题、模型与产品', 'People, topics, models, and products')}</small></summary>
            <dl>
              ${metadataItem('人物', 'People', people || '—')}
              ${metadataItem('主题', 'Topics', topicLinks || '—', 'metadata-links')}
              ${metadataItem('模型', 'Models', models || '—')}
              ${metadataItem('产品', 'Products', products || '—')}
            </dl>
          </details>

          <section class="source-section">
            <div class="section-heading inline-heading"><span class="section-number">${bilingual('来源', 'Sources')}</span><h2>${bilingual('原始资料', 'References')}</h2></div>
            ${hasSources ? `
              <ol class="source-list">
                ${event.sources.map((source, sourceIndex) => `
                  <li><span>${String(sourceIndex + 1).padStart(2, '0')}</span><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><b>${escapeHtml(source.title)}</b><small>${escapeHtml(source.publisher)} · ${escapeHtml(source.type)}</small></a>${arrowIcon}</li>
                `).join('')}
              </ol>` : `
              <div class="source-empty"><b>${bilingual('这条事件还缺少可公开核验的一级来源。', 'This event still lacks a publicly verifiable primary source.')}</b></div>`}
          </section>
        </div>

        ${relatedEvents.length ? `<section class="related-events"><div class="section-heading split-heading"><div><span class="section-number">${bilingual('关联', 'Related')}</span><h2>${bilingual('沿这条路线继续读', 'Continue along this path')}</h2></div></div><div>${relatedEvents.map((related) => `<a href="${urlFor(`/events/${related.slug}/`)}"><time>${related.date.slice(0, 4)}</time><div><h3>${bilingual(related.title, englishText(related.title, related.titleEn))}</h3><p>${bilingual(related.summary, englishText(related.summary, related.summaryEn))}</p></div>${arrowIcon}</a>`).join('')}</div></section>` : ''}

        <nav class="event-pagination" aria-label="时间轴前后事件">
          ${previousEvent ? `<a class="previous" href="${urlFor(`/events/${previousEvent.slug}/`)}"><span>${bilingual('更新的节点', 'Newer')}</span><b>${bilingual(previousEvent.title, englishText(previousEvent.title, previousEvent.titleEn))}</b></a>` : '<span></span>'}
          ${nextEvent ? `<a class="next" href="${urlFor(`/events/${nextEvent.slug}/`)}"><span>${bilingual('更早的节点', 'Older')}</span><b>${bilingual(nextEvent.title, englishText(nextEvent.title, nextEvent.titleEn))}</b></a>` : '<span></span>'}
        </nav>
      </article>`

    writePage(`events/${event.slug}`, {
      title: event.title,
      description: event.summary,
      path: `/events/${event.slug}/`,
      active: 'timeline',
      body,
      bodyClass: 'event-page',
      ogType: 'article',
      ogImage: event.visual?.src,
    })
  })
}

function renderConceptPages() {
  const body = `
    <section class="page-intro">
      <div><h1>概念词典</h1></div>
      <p>先看它解决了什么问题，再读技术原理和相关事件。</p>
    </section>
    <section class="index-toolbar">
      <div class="inline-search">${searchIcon}<input type="search" placeholder="搜索概念" data-index-search></div>
      <div class="index-filter" data-index-filter>
        <button type="button" data-value="all" aria-pressed="true">全部</button>
        <button type="button" data-value="beginner" aria-pressed="false">入门</button>
        <button type="button" data-value="intermediate" aria-pressed="false">进阶</button>
        <button type="button" data-value="advanced" aria-pressed="false">技术</button>
        <button type="button" data-value="engineering" aria-pressed="false">工程</button>
        <button type="button" data-value="evaluation" aria-pressed="false">评测</button>
      </div>
    </section>
    <section class="concept-index" data-index-list>
      ${concepts.map((concept, index) => `
        <a href="${urlFor(`/concepts/${concept.slug}/`)}" data-index-item data-kind="${escapeHtml(concept.difficulty)}" data-search="${escapeHtml(`${concept.title} ${concept.fullName || ''} ${concept.oneLiner}`.toLowerCase())}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <div><h2>${escapeHtml(concept.title)}</h2>${concept.fullName ? `<small>${escapeHtml(concept.fullName)}</small>` : ''}</div>
          <p>${escapeHtml(concept.oneLiner)}</p>
          <b>${escapeHtml(concept.difficulty)}</b>${arrowIcon}
        </a>`).join('')}
    </section>`

  writePage('concepts', {
    title: '概念词典',
    description: '沿事件理解 AI 概念：它是什么、何时出现，又解决了什么问题。',
    path: '/concepts/',
    active: 'concepts',
    body,
    bodyClass: 'index-page',
  })

  concepts.forEach((concept) => {
    const relatedEvents = concept.relatedEvents.map((id) => eventById.get(id)).filter(Boolean)
    const relatedConcepts = concept.relatedConcepts.map((id) => conceptById.get(id)).filter(Boolean)
    const detailBody = `
      <article class="definition-article">
        <header>
          <div class="breadcrumbs"><a href="${urlFor('/concepts/')}">概念词典</a><span>/</span><span>${escapeHtml(concept.difficulty)}</span></div>
          <h1>${escapeHtml(concept.title)}</h1>
          ${concept.fullName ? `<p class="definition-full-name">${escapeHtml(concept.fullName)}</p>` : ''}
          <p class="definition-one-liner">${escapeHtml(concept.oneLiner)}</p>
        </header>
        <div class="definition-grid">
          <div>
            ${concept.beginnerExplanation ? `<section class="prose-section"><span class="section-number">01</span><h2>先用人话理解</h2><p>${escapeHtml(concept.beginnerExplanation)}</p></section>` : ''}
            ${concept.technicalExplanation ? `<section class="prose-section"><span class="section-number">02</span><h2>再往技术里走一步</h2><p>${escapeHtml(concept.technicalExplanation)}</p></section>` : ''}
            ${concept.whyItMatters ? `<section class="prose-section why-section"><span class="section-number">${concept.technicalExplanation ? '03' : '02'}</span><h2>为什么重要</h2><p>${escapeHtml(concept.whyItMatters)}</p></section>` : ''}
            ${concept.commonMisunderstandings.length ? `<section class="misunderstanding-section"><h2>常见误解</h2>${concept.commonMisunderstandings.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</section>` : ''}
          </div>
          <aside class="definition-aside">
            <span>难度</span><b>${escapeHtml(concept.difficulty)}</b>
            ${relatedConcepts.length ? `<span>相关概念</span>${relatedConcepts.map((item) => `<a href="${urlFor(`/concepts/${item.slug}/`)}">${escapeHtml(item.title)}${arrowIcon}</a>`).join('')}` : ''}
          </aside>
        </div>
        ${relatedEvents.length ? `<section class="related-events"><div class="section-heading split-heading"><div><span class="section-number">历史</span><h2>在哪些节点变得重要</h2></div></div><div>${relatedEvents.map((event) => `<a href="${urlFor(`/events/${event.slug}/`)}"><time>${event.date.slice(0, 4)}</time><h3>${escapeHtml(event.title)}</h3>${arrowIcon}</a>`).join('')}</div></section>` : ''}
      </article>`

    writePage(`concepts/${concept.slug}`, {
      title: concept.title,
      description: concept.oneLiner,
      path: `/concepts/${concept.slug}/`,
      active: 'concepts',
      body: detailBody,
      bodyClass: 'definition-page',
    })
  })
}

function renderGlossary() {
  const featured = glossaryTerms.find((item) => item.featured) || glossaryTerms[0]
  const listTerms = glossaryTerms.filter((item) => item !== featured)
  const categoryCounts = Object.fromEntries(
    glossaryCategories.map((category) => [category, glossaryTerms.filter((item) => item.category === category).length]),
  )
  let runningIndex = 0

  const renderTermCard = (item, index) => {
    const search = glossarySearchText(item)
    const meta = [item.full, item.zh].filter(Boolean).join(' · ')
    return `<article class="glossary-card" data-glossary-item data-category="${escapeHtml(item.category)}" data-search="${escapeHtml(search)}" id="term-${escapeHtml(item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}">
      <span class="glossary-card-index">${String(index).padStart(2, '0')}</span>
      <div class="glossary-card-head">
        <h2>${escapeHtml(item.term)}</h2>
        <small>${escapeHtml(meta)}</small>
      </div>
      <p class="glossary-card-blurb">${escapeHtml(item.blurb)}</p>${item.note ? `
      <p class="glossary-card-note"><span>注意</span>${escapeHtml(item.note)}</p>` : ''}
      <b class="glossary-card-cat">${escapeHtml(item.category)}</b>
    </article>`
  }

  const groups = glossaryCategories.map((category) => {
    const items = listTerms.filter((item) => item.category === category)
    if (!items.length) return ''
    const cards = items.map((item) => {
      runningIndex += 1
      return renderTermCard(item, runningIndex)
    }).join('')
    return `<section class="glossary-group" data-glossary-group data-category="${escapeHtml(category)}">
      <header class="glossary-group-head">
        <h3>${escapeHtml(category)}</h3>
        <span data-glossary-group-count>${items.length}</span>
      </header>
      <div class="glossary-list" aria-label="${escapeHtml(category)}">
        ${cards}
      </div>
    </section>`
  }).join('')

  const featuredSearch = glossarySearchText(featured)
  const featuredMeta = [featured.full, featured.zh].filter(Boolean).join(' · ')

  const body = `
    <section class="glossary-intro page-intro">
      <div>
        <span class="page-index">AI LANGUAGE</span>
        <h1>AI 术语专栏</h1>
      </div>
      <div class="glossary-intro-copy">
        <p>把行业黑话说成人话：它指什么、在什么场景成立、又最容易被怎样误读。</p>
        <ul class="glossary-intro-points">
          <li>按链路分类：模型 → 训练 → 推理 → 提示 → 安全 → Agent</li>
          <li>解释偏日常使用，不堆论文定义</li>
          <li>能标出的坑会单独写在「注意」里</li>
        </ul>
      </div>
    </section>
    <section class="glossary-shell" data-glossary-root>
      <div class="glossary-toolbar">
        <label class="inline-search" for="glossary-search">${searchIcon}<span class="sr-only">搜索术语</span><input id="glossary-search" type="search" placeholder="搜索缩写、英文、中文或别名" data-glossary-search autocomplete="off"></label>
        <p class="glossary-toolbar-meta"><span data-glossary-count>${glossaryTerms.length}</span> 个术语 · 持续更新</p>
      </div>
      <nav class="glossary-categories" aria-label="按类别筛选">
        <button type="button" data-glossary-category="all" aria-pressed="true">全部 <em>${glossaryTerms.length}</em></button>
        ${glossaryCategories.map((category) => `<button type="button" data-glossary-category="${escapeHtml(category)}" aria-pressed="false">${escapeHtml(category)} <em>${categoryCounts[category]}</em></button>`).join('')}
      </nav>
      <article class="glossary-featured" data-glossary-item data-category="${escapeHtml(featured.category)}" data-search="${escapeHtml(featuredSearch)}">
        <div class="glossary-featured-label">
          <span>先看这个</span>
          <b>${escapeHtml(featured.category)}</b>
        </div>
        <div class="glossary-featured-title">
          <h2>${escapeHtml(featured.term)}</h2>
          <small>${escapeHtml(featuredMeta)}</small>
        </div>
        <p class="glossary-featured-blurb">${escapeHtml(featured.blurb)}</p>
        ${featured.note ? `<p class="glossary-featured-note"><span>注意</span>${escapeHtml(featured.note)}</p>` : ''}
      </article>
      <div class="glossary-groups">
        ${groups}
      </div>
      <p class="glossary-empty" data-glossary-empty hidden>没有找到对应术语。试试英文缩写、完整英文、中文名，或更短的关键词。</p>
    </section>`

  writePage('glossary', {
    title: 'AI 术语专栏',
    description: 'AI 行业高频术语速查：从 LLM、Transformer、RLHF、RAG 到 MCP、Agent，用通俗解释讲清它指什么、何时成立、怎样被误读。',
    path: '/glossary/',
    active: 'glossary',
    body,
    bodyClass: 'glossary-page',
  })
}

function renderModelFamilyPages() {
  const body = `
    <section class="page-intro model-intro">
      <div><h1>模型谱系</h1></div>
      <p>查看各家模型的发布时间、定位和能力变化。</p>
    </section>
    <section class="model-family-index">
      ${modelFamilies.map((family, index) => {
        const company = companyById.get(family.company)
        return `
          <a href="${urlFor(`/models/${family.slug}/`)}" class="model-family-row">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div>
              <div class="model-family-name">${companyLogo(company, 'company-logo-model')}${bilingual(family.title, family.titleEn, 'h2')}</div>
              ${bilingual(family.description, family.descriptionEn, 'p')}
            </div>
            <small>${escapeHtml(company?.name || family.company)}</small>
            <b>${bilingual(family.latestModel, family.latestModelEn)}</b>
            ${arrowIcon}
          </a>`
      }).join('')}
    </section>`

  writePage('models', {
    title: '模型谱系',
    description: '按厂商查看关键模型家族的每一代发布时间、定位与能力变化。',
    path: '/models/',
    active: 'models',
    body,
    bodyClass: 'index-page models-page',
  })

  modelFamilies.forEach((family) => {
    const company = companyById.get(family.company)
    const detailBody = `
      <article class="model-family-article">
        <header class="model-family-header">
          <div class="breadcrumbs"><a href="${urlFor('/models/')}">模型谱系</a><span>/</span><a href="${urlFor(`/companies/${company?.slug || family.company}/`)}">${escapeHtml(company?.name || family.company)}</a></div>
          <div class="model-family-title">
            <div>
              <div class="model-family-name">${companyLogo(company, 'company-logo-hero')}${bilingual(family.title, family.titleEn, 'h1')}</div>
              ${bilingual(family.description, family.descriptionEn, 'p')}
            </div>
            <aside><span>当前模型</span><b>${bilingual(family.latestModel, family.latestModelEn)}</b><small>更新于 ${formatDate(family.updatedAt)}</small></aside>
          </div>
        </header>
        <section class="model-release-list">
          <header><span>${String(family.releases.length).padStart(2, '0')} 代</span><h2>历代模型</h2></header>
          ${[...family.releases].reverse().map((release, index) => `
            <article class="model-release" data-status="${escapeHtml(release.status)}">
              <span>${String(family.releases.length - index).padStart(2, '0')}</span>
              <time datetime="${escapeHtml(release.date)}">${formatDate(release.date, release.datePrecision)}</time>
              <div><h3>${escapeHtml(release.name)}</h3>${bilingual(release.summary, release.summaryEn, 'p')}</div>
              <b class="model-status model-status-${escapeHtml(release.status)}">${release.status}</b>
              <a href="${escapeHtml(release.source)}" target="_blank" rel="noopener noreferrer" aria-label="查看 ${escapeHtml(release.name)} 官方来源">${arrowIcon}</a>
            </article>`).join('')}
        </section>
      </article>`

    writePage(`models/${family.slug}`, {
      title: family.title,
      description: family.description,
      path: `/models/${family.slug}/`,
      active: 'models',
      body: detailBody,
      bodyClass: 'model-family-page',
    })
  })
}

function renderCompanyPages() {
  const body = `
    <section class="page-intro">
      <div><h1>行业玩家</h1></div>
      <p>按组织查看模型、产品和关键事件。</p>
    </section>
    <section class="company-index">
      ${companies.map((company, index) => `
        <a href="${urlFor(`/companies/${company.slug}/`)}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <div>${companyLogo(company, 'company-logo-card')}<h2>${escapeHtml(company.name)}</h2><p>${escapeHtml(company.positioning)}</p></div>
          <small>${company.region === 'cn' ? '中国' : company.region === 'us' ? '美国' : '全球'} · ${company.founded || '—'}</small>
          ${arrowIcon}
        </a>`).join('')}
    </section>`

  writePage('companies', {
    title: '行业玩家',
    description: '理解塑造 AI 行业的公司、组织与它们选择的路线。',
    path: '/companies/',
    active: 'companies',
    body,
    bodyClass: 'index-page',
  })

  companies.forEach((company) => {
    const keyEvents = company.keyEvents.map((id) => eventById.get(id)).filter(Boolean)
    const relatedModelFamilies = modelFamiliesByCompany.get(company.id) || []
    const detailBody = `
      <article class="company-article">
        <header>
          <div class="breadcrumbs"><a href="${urlFor('/companies/')}">行业玩家</a><span>/</span><span>${company.region === 'cn' ? '中国' : company.region === 'us' ? '美国' : '全球'}</span></div>
          <div class="company-title"><div class="company-title-name">${companyLogo(company, 'company-logo-hero')}<h1>${escapeHtml(company.name)}</h1></div><span>${company.founded || '—'}—</span></div>
          <p>${escapeHtml(company.positioning)}</p>
        </header>
        <section class="company-route">
          <div><span class="section-number">路线</span><h2>它在押注什么</h2></div>
          <div>${[...new Set(company.keyTopics.map(canonicalTopic))].map((topic) => `<a href="${urlFor(`/topics/${topic}/`)}">${escapeHtml(topicName(topic))}${arrowIcon}</a>`).join('')}</div>
        </section>
        ${(valueChainLayersByCompany.get(company.id) || []).length ? `<section class="company-models"><div><span class="section-number">产业链</span><h2>所在产业层</h2></div><div>${valueChainLayersByCompany.get(company.id).map((layer) => `<a href="${urlFor(`/stack/${layer.slug}/`)}"><span>${bilingual(layer.title, layer.titleEn)}</span><small>${segmentLabels[layer.segment] || layer.segment} · ${escapeHtml(layer.oneLiner)}</small>${arrowIcon}</a>`).join('')}</div></section>` : ''}
        ${relatedModelFamilies.length ? `<section class="company-models"><div><span class="section-number">模型</span><h2>模型谱系</h2></div><div>${relatedModelFamilies.map((family) => `<a href="${urlFor(`/models/${family.slug}/`)}"><span>${bilingual(family.title, family.titleEn)}</span><small>${bilingual(family.latestModel, family.latestModelEn)}</small>${arrowIcon}</a>`).join('')}</div></section>` : ''}
        ${keyEvents.length ? `<section class="related-events"><div class="section-heading split-heading"><div><span class="section-number">节点</span><h2>关键事件</h2></div></div><div>${keyEvents.map((event) => `<a href="${urlFor(`/events/${event.slug}/`)}"><time>${event.date.slice(0, 4)}</time><h3>${escapeHtml(event.title)}</h3>${arrowIcon}</a>`).join('')}</div></section>` : ''}
      </article>`

    writePage(`companies/${company.slug}`, {
      title: company.name,
      description: company.positioning,
      path: `/companies/${company.slug}/`,
      active: 'companies',
      body: detailBody,
      bodyClass: 'company-page',
    })
  })
}

function renderTopicPages() {
  const body = `
    <section class="page-intro">
      <div><h1>主题路线 / 专题</h1></div>
      <p>按技术路线、产品形态与产业议题把历史拆开读。事件是骨架，相关公司与模型谱系是侧厅。</p>
    </section>
    <section class="topic-directory">
      ${topicIndex.map((topic, index) => {
        const meta = [
          topic.events.length ? `${topic.events.length} 事件` : null,
          topic.modelFamilies.length ? `${topic.modelFamilies.length} 谱系` : null,
          topic.companies.length ? `${topic.companies.length} 机构` : null,
        ].filter(Boolean).join(' · ')
        const range = topic.events.length
          ? (() => {
            const years = topic.events.map((event) => event.date.slice(0, 4)).sort()
            return `${years.at(-1)}—${years[0]}`
          })()
          : '档案扩建中'
        return `
        <a href="${urlFor(`/topics/${topic.id}/`)}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <h2>${escapeHtml(topic.label)}</h2>
          <p>${escapeHtml(meta || '路线档案正在建立')} · ${escapeHtml(range)}</p>
          ${arrowIcon}
        </a>`
      }).join('')}
    </section>`

  writePage('topics', {
    title: '主题路线',
    description: '沿主题与专题路线理解大模型、推理、Agent、生成式媒体、中国 AI 等方向如何演化。',
    path: '/topics/',
    active: 'topics',
    body,
    bodyClass: 'index-page',
  })

  topicIndex.forEach((topic) => {
    const chronologicalTopicEvents = [...topic.events].sort((a, b) => a.date.localeCompare(b.date))
    const guideCandidates = chronologicalTopicEvents.length
      ? [chronologicalTopicEvents[0], chronologicalTopicEvents[Math.floor((chronologicalTopicEvents.length - 1) / 2)], chronologicalTopicEvents.at(-1)]
      : []
    const guideEvents = [...new Map(guideCandidates.filter(Boolean).map((event) => [event.id, event])).values()]
    const topicLead = chronologicalTopicEvents.length > 1
      ? bilingual(
        `从「${chronologicalTopicEvents[0].title}」到「${chronologicalTopicEvents.at(-1).title}」，先抓住起点、路线转向与当前边界，再展开完整事件线。`,
        `From “${englishText(chronologicalTopicEvents[0].title, chronologicalTopicEvents[0].titleEn)}” to “${englishText(chronologicalTopicEvents.at(-1).title, chronologicalTopicEvents.at(-1).titleEn)},” start with the origin, the turn, and the current boundary before opening the full archive.`,
      )
      : bilingual('这条路线仍在建立，先从已经核验的节点进入。', 'This route is still being built; begin with the verified nodes already available.')
    const companyBlock = topic.companies.length
      ? `<section class="company-models"><div><span class="section-number">机构</span><h2>相关机构</h2></div><div>${topic.companies.map((company) => `<a href="${urlFor(`/companies/${company.slug}/`)}"><span>${escapeHtml(company.name)}</span><small>${escapeHtml(company.positioning)}</small>${arrowIcon}</a>`).join('')}</div></section>`
      : ''
    const familyBlock = topic.modelFamilies.length
      ? `<section class="company-models"><div><span class="section-number">谱系</span><h2>相关模型谱系</h2></div><div>${topic.modelFamilies.map((family) => `<a href="${urlFor(`/models/${family.slug}/`)}"><span>${bilingual(family.title, family.titleEn)}</span><small>${bilingual(family.latestModel, family.latestModelEn)}</small>${arrowIcon}</a>`).join('')}</div></section>`
      : ''
    const detailBody = `
      <section class="topic-hero">
        <div class="breadcrumbs"><a href="${urlFor('/topics/')}">主题路线</a><span>/</span><span>${topic.events.length} 个事件 · ${topic.modelFamilies.length} 条谱系</span></div>
        <h1>${escapeHtml(topic.label)}</h1>
        <p>${topicLead}</p>
      </section>
      ${guideEvents.length ? `<nav class="topic-guide" aria-label="${escapeHtml(topic.label)}必读节点">
        ${guideEvents.map((event, index) => `<a href="${urlFor(`/events/${event.slug}/`)}"><small>${bilingual(['起点', '转向', '当前'][Math.min(index, 2)], ['Origin', 'Turn', 'Now'][Math.min(index, 2)])}</small><time>${event.date.slice(0, 4)}</time><h2>${bilingual(event.title, englishText(event.title, event.titleEn))}</h2><p>${bilingual(event.summary, englishText(event.summary, event.summaryEn))}</p>${arrowIcon}</a>`).join('')}
      </nav>` : ''}
      <section class="topic-timeline${topic.events.length ? '' : ' is-empty'}">
        ${topic.events.length ? topic.events.map((event, index) => `
          <a href="${urlFor(`/events/${event.slug}/`)}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <time>${formatDate(event.date, event.datePrecision)}</time>
            <div><h2>${escapeHtml(event.title)}</h2><p>${escapeHtml(event.summary)}</p></div>
            ${importanceBadge(event, true)}${arrowIcon}
          </a>`).join('') : '<div class="topic-empty"><h2>事件线仍在扩建</h2><p>这条专题已开放；相关事件会在完成来源核验后进入时间轴。下方可先浏览关联机构与模型谱系。</p></div>'}
      </section>
      ${familyBlock}
      ${companyBlock}`

    writePage(`topics/${topic.id}`, {
      title: `${topic.label}专题`,
      description: `沿时间线与模型谱系理解${topic.label}方向的关键事件与演化。`,
      path: `/topics/${topic.id}/`,
      active: 'topics',
      body: detailBody,
      bodyClass: 'topic-page',
    })
  })
}

function renderValueChainPages() {
  const segmentOrder = ['upstream', 'midstream', 'downstream']
  const body = `
    <section class="page-intro">
      <div><h1>${bilingual('AI 产业链', 'AI value chain')}</h1></div>
      <p>${bilingual(
        '从晶圆与加速芯片，到云、框架、基础模型、分发入口与应用。竖着读，看清英伟达上下游；横着点，跳进馆内公司、事件与概念。',
        'From wafers and accelerators to cloud, frameworks, foundation models, distribution doors, and apps. Read vertically for upstream/downstream; click through to companies, events, and concepts in the museum.',
      )}</p>
    </section>
    <section class="value-chain-legend">
      <span><i class="seg-upstream"></i>${segmentLabels.upstream} Upstream</span>
      <span><i class="seg-midstream"></i>${segmentLabels.midstream} Midstream</span>
      <span><i class="seg-downstream"></i>${segmentLabels.downstream} Downstream</span>
    </section>
    <section class="value-chain-stack" aria-label="产业链分层">
      ${valueChainLayersSorted.map((layer, index) => {
        const companyCount = layer.companies.filter((id) => companyById.has(id)).length
        return `
        <a class="value-chain-card seg-${escapeHtml(layer.segment)}" href="${urlFor(`/stack/${layer.slug}/`)}">
          <div class="value-chain-card-meta">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <em>${segmentLabels[layer.segment] || layer.segment}</em>
          </div>
          <h2>${escapeHtml(layer.title)}</h2>
          <p>${escapeHtml(layer.oneLiner)}</p>
          <small>${companyCount} ${bilingual('家馆内机构', 'museum orgs')} · ${layer.roles.length} ${bilingual('类角色', 'role types')}</small>
          ${arrowIcon}
        </a>`
      }).join('')}
    </section>
    <section class="value-chain-note">
      <h2>${bilingual('怎么读这条链', 'How to read this stack')}</h2>
      <ol>
        <li>${bilingual('底层越靠制造与能源约束；上层越靠产品分发与工作流。', 'Lower layers bind manufacturing and power; upper layers bind distribution and workflows.')}</li>
        <li>${bilingual('英伟达横跨「加速芯片」与「软件栈/互联」——算力商品化的关键枢纽。', 'NVIDIA spans accelerators and software/interconnect—the hub of commoditized compute.')}</li>
        <li>${bilingual('模型公司吃中游云与框架；应用公司多数调用 API 或开源权重，少数再训领域模型。', 'Model labs consume midstream cloud and frameworks; apps mostly call APIs or open weights, some fine-tune domain models.')}</li>
        <li>${bilingual('监管与版权从外侧挤压每一层，尤其是先进芯片出口与生成式媒体。', 'Regulation and copyright squeeze every layer from outside—especially advanced chips and generative media.')}</li>
      </ol>
    </section>`

  writePage('stack', {
    title: 'AI 产业链',
    description: '梳理 AI 从半导体、GPU、云、框架到基础模型与应用的上下游产业结构。',
    path: '/stack/',
    active: 'stack',
    body,
    bodyClass: 'index-page value-chain-index',
  })

  valueChainLayersSorted.forEach((layer) => {
    const layerCompanies = layer.companies.map((id) => companyById.get(id)).filter(Boolean)
    const layerEvents = layer.relatedEvents.map((id) => eventById.get(id)).filter(Boolean)
    const layerConcepts = layer.relatedConcepts.map((id) => conceptById.get(id)).filter(Boolean)
    const depends = layer.dependsOn.map((id) => valueChainById.get(id)).filter(Boolean)
    const feeds = layer.feedsInto.map((id) => valueChainById.get(id)).filter(Boolean)
    const detailBody = `
      <article class="value-chain-article">
        <header>
          <div class="breadcrumbs">
            <a href="${urlFor('/stack/')}">${bilingual('产业链', 'Value chain')}</a>
            <span>/</span>
            <span>${segmentLabels[layer.segment] || layer.segment}</span>
          </div>
          <p class="value-chain-kicker">${bilingual('第', 'Layer')} ${layer.order} · ${segmentLabels[layer.segment]} / ${segmentLabelsEn[layer.segment]}</p>
          <h1>${escapeHtml(layer.title)}</h1>
          <p class="value-chain-lead">${escapeHtml(layer.oneLiner)}</p>
          <p>${escapeHtml(layer.description)}</p>
        </header>
        ${(depends.length || feeds.length) ? `
        <section class="value-chain-links">
          ${depends.length ? `<div><span class="section-number">${bilingual('依赖', 'Depends on')}</span><div>${depends.map((item) => `<a href="${urlFor(`/stack/${item.slug}/`)}">${escapeHtml(item.title)}${arrowIcon}</a>`).join('')}</div></div>` : ''}
          ${feeds.length ? `<div><span class="section-number">${bilingual('供给', 'Feeds into')}</span><div>${feeds.map((item) => `<a href="${urlFor(`/stack/${item.slug}/`)}">${escapeHtml(item.title)}${arrowIcon}</a>`).join('')}</div></div>` : ''}
        </section>` : ''}
        <section class="value-chain-roles">
          <div class="section-heading"><span class="section-number">${bilingual('角色', 'Roles')}</span><h2>${bilingual('这一层谁在干活', 'Who works on this layer')}</h2></div>
          <div class="value-chain-role-grid">
            ${layer.roles.map((role) => `
              <article>
                <h3>${escapeHtml(role.name)}</h3>
                <p>${escapeHtml(role.summary)}</p>
                ${role.examples?.length ? `<ul>${role.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join('')}</ul>` : ''}
              </article>`).join('')}
          </div>
        </section>
        ${layerCompanies.length ? `
        <section class="company-models">
          <div><span class="section-number">${bilingual('馆内机构', 'In museum')}</span><h2>${bilingual('可点进档案的公司', 'Companies with pages')}</h2></div>
          <div>${layerCompanies.map((company) => `<a href="${urlFor(`/companies/${company.slug}/`)}">${companyLogo(company, 'company-logo-inline')}<span>${escapeHtml(company.name)}</span><small>${escapeHtml(company.positioning)}</small>${arrowIcon}</a>`).join('')}</div>
        </section>` : ''}
        ${layerEvents.length ? `
        <section class="related-events">
          <div class="section-heading split-heading"><div><span class="section-number">${bilingual('事件', 'Events')}</span><h2>${bilingual('相关编年节点', 'Related chronicle nodes')}</h2></div></div>
          <div>${layerEvents.map((event) => `<a href="${urlFor(`/events/${event.slug}/`)}"><time>${event.date.slice(0, 4)}</time><h3>${escapeHtml(event.title)}</h3>${arrowIcon}</a>`).join('')}</div>
        </section>` : ''}
        ${layerConcepts.length ? `
        <section class="company-models">
          <div><span class="section-number">${bilingual('概念', 'Concepts')}</span><h2>${bilingual('读懂这一层', 'Concepts for this layer')}</h2></div>
          <div>${layerConcepts.map((concept) => `<a href="${urlFor(`/concepts/${concept.slug}/`)}"><span>${escapeHtml(concept.title)}</span><small>${escapeHtml(concept.oneLiner)}</small>${arrowIcon}</a>`).join('')}</div>
        </section>` : ''}
        ${layer.relatedTopics?.length ? `
        <section class="company-route">
          <div><span class="section-number">${bilingual('专题', 'Topics')}</span><h2>${bilingual('相关主题路线', 'Related topic routes')}</h2></div>
          <div>${[...new Set(layer.relatedTopics.map(canonicalTopic))].map((topic) => `<a href="${urlFor(`/topics/${topic}/`)}">${escapeHtml(topicName(topic))}${arrowIcon}</a>`).join('')}</div>
        </section>` : ''}
      </article>`

    writePage(`stack/${layer.slug}`, {
      title: layer.title,
      description: layer.oneLiner,
      path: `/stack/${layer.slug}/`,
      active: 'stack',
      body: detailBody,
      bodyClass: 'value-chain-page',
    })
  })
}

function renderAbout() {
  const body = `
    <article class="about-page-content">
      <header><h1>${bilingual('先有一条时间轴。再慢慢把它写成人的历史。', 'First comes a timeline. Then, slowly, a history of people.')}</h1></header>
      <section><span class="section-number">01</span><h2>${bilingual('时间轴只是封面', 'The timeline is only the cover')}</h2><p>${bilingual('首页故意只留一条时间轴。点开一个节点，资料卡退到正文之前，文章才真正开始。这里不急着把历史提炼成几条可复用的结论；更愿意留下论文里的反常数字、比赛中的一手棋、产品页上一处诚实的错误，以及人在技术变化里做过的选择。', 'The home page deliberately remains a timeline. Open a node and the record card steps aside before the essay begins. This chronicle is in no hurry to reduce history to reusable lessons. It would rather preserve an anomalous number in a paper, a single move in a match, an honest error on a product page, and the choices people made while the technology was changing.')}</p></section>
      <section><span class="section-number">02</span><h2>${bilingual('什么值得留下', 'What belongs here')}</h2><ul><li>${bilingual('它确实改变了技术路线、产品入口或行业组织方式。', 'It materially changed a technical route, a product doorway, or the way the industry organized itself.')}</li><li>${bilingual('多年以后回看，事件内部仍有值得读的矛盾与细节。', 'Years later, the event still contains tensions and details worth reading.')}</li><li>${bilingual('能够找到论文、档案、发布记录或监管原文。', 'A paper, archive, release record, or regulatory text can be found.')}</li><li>${bilingual('短期热度本身，不足以成为历史地位。', 'Short-term attention alone is not historical importance.')}</li></ul></section>
      <section><span class="section-number">03</span><h2>${bilingual('重要程度怎么判断', 'How significance is judged')}</h2><div class="editorial-levels"><p><b>S</b><span>${bilingual('范式级', 'Paradigm')}</span>${bilingual('极少数改变行业方向的节点。', 'The rare nodes that redirect the field.')}</p><p><b>A</b><span>${bilingual('行业级', 'Industry')}</span>${bilingual('对多个方向产生持续影响。', 'Events with lasting effects across several directions.')}</p><p><b>B</b><span>${bilingual('领域级', 'Field')}</span>${bilingual('在一条技术或产品路线中重要。', 'Important within a particular technical or product route.')}</p><p><b>C</b><span>${bilingual('补充', 'Context')}</span>${bilingual('帮助看清前后关系的背景节点。', 'Context that makes the surrounding history legible.')}</p></div></section>
      <section><span class="section-number">04</span><h2>${bilingual('文章怎样写', 'How the essays are written')}</h2><p>${bilingual('日期、人物、组织、模型与来源集中在开篇的元数据卡片里。正文不再回答一组固定问题，也不共享同一种高潮和结尾。中文与英文依据同一份事实账本分别写作；它们方向一致，但不必逐句相像。', 'Dates, people, organizations, models, and sources stay in the metadata card at the opening. The essay no longer answers a fixed questionnaire, nor does every story share the same climax and ending. Chinese and English are written separately from the same fact ledger: aligned in direction, not sentence by sentence.')}</p></section>
      <section><span class="section-number">05</span><h2>${bilingual('不能越过的线', 'The line the prose cannot cross')}</h2><p>${bilingual('文学气息不能建立在虚构上。天气、神态、对话和人物内心，没有来源就不补写；厂商自报的评测不写成独立事实，后来才知道的结果也不倒灌进当时。文章可以有判断、有迟疑、有个人情感，但事实必须能够回到原处。', 'Literary feeling cannot be built from invention. Weather, gestures, dialogue, and private thoughts are not supplied without sources. Vendor benchmarks do not become independent fact, and hindsight is not smuggled into the past. An essay may judge, hesitate, and feel; its facts must still lead back to where they came from.')}</p></section>
      <section><span class="section-number">06</span><h2>${bilingual('开源仓库', 'Open source')}</h2><p>${bilingual('AI Chronicle 是独立维护的开源项目。内容、构建脚本与站点资源都在 GitHub 公开：', 'AI Chronicle is an independently maintained open-source project. Content, build scripts, and site assets are public on GitHub:')}</p><p><a class="external-footer-link" href="${githubRepoUrl}" target="_blank" rel="noopener noreferrer" aria-label="在 GitHub 打开本项目仓库（新窗口）"><span>${githubRepoUrl.replace('https://', '')}</span><i aria-hidden="true">↗</i></a></p><p>${bilingual('欢迎通过 Issue 与 Pull Request 补充事件、来源、译文和图片署名。', 'Issues and pull requests are welcome for events, sources, translations, and image credits.')}</p></section>
    </article>`

  writePage('about', {
    title: '关于与编辑原则',
    description: 'AI Chronicle 的定位、事件收录标准、重要程度与可信度原则。',
    path: '/about/',
    active: '',
    body,
    bodyClass: 'about-page',
  })
}

function writeSupportFiles() {
  const searchIndex = [
    ...events.map((event) => ({ type: '事件', title: event.title, description: event.summary, keywords: [event.date, ...event.companies, ...event.models, ...event.products, ...event.concepts, ...event.people, ...event.topics].join(' '), url: urlFor(`/events/${event.slug}/`) })),
    ...concepts.map((concept) => ({ type: '概念', title: concept.title, description: concept.oneLiner, keywords: `${concept.fullName || ''} ${concept.relatedConcepts.join(' ')}`, url: urlFor(`/concepts/${concept.slug}/`) })),
    ...companies.map((company) => ({ type: '公司', title: company.name, description: company.positioning, keywords: `${company.region} ${company.models.join(' ')} ${company.products.join(' ')}`, url: urlFor(`/companies/${company.slug}/`) })),
    ...modelFamilies.map((family) => ({ type: '模型', title: family.title, description: family.description, keywords: `${family.company} ${family.latestModel} ${family.releases.map((release) => release.name).join(' ')}`, url: urlFor(`/models/${family.slug}/`) })),
    ...topicIndex.map((topic) => ({ type: '主题', title: topic.label, description: `${topic.events.length} 个关键节点`, keywords: topic.id, url: urlFor(`/topics/${topic.id}/`) })),
    ...valueChainLayersSorted.map((layer) => ({ type: '产业链', title: layer.title, description: layer.oneLiner, keywords: `${layer.segment} ${layer.companies.join(' ')}`, url: urlFor(`/stack/${layer.slug}/`) })),
    ...glossaryTerms.map((item) => ({
      type: '术语',
      title: item.term,
      description: item.blurb,
      keywords: [item.full, item.zh, item.category, item.aliases, item.note].filter(Boolean).join(' '),
      url: urlFor('/glossary/'),
    })),
    { type: '产业链', title: 'AI 产业链', description: '从半导体到应用的上下游结构', url: urlFor('/stack/') },
  ]

  writeFileSync(join(siteDir, 'assets/search-index.json'), JSON.stringify(searchIndex), 'utf8')
  const staticTranslations = JSON.parse(readFileSync(join(rootDir, 'public/assets/i18n-en.json'), 'utf8'))
  writeFileSync(
    join(siteDir, 'assets/i18n-en.json'),
    JSON.stringify({ ...staticTranslations, ...eventTranslations, ...generatedInterfaceTranslations }, null, 2),
    'utf8',
  )

  const routes = [
    '/', '/timeline/', '/concepts/', '/glossary/', '/models/', '/companies/', '/topics/', '/stack/', '/about/',
    ...events.map((event) => `/events/${event.slug}/`),
    ...concepts.map((concept) => `/concepts/${concept.slug}/`),
    ...companies.map((company) => `/companies/${company.slug}/`),
    ...modelFamilies.map((family) => `/models/${family.slug}/`),
    ...topicIndex.map((topic) => `/topics/${topic.id}/`),
    ...valueChainLayersSorted.map((layer) => `/stack/${layer.slug}/`),
  ]

  writeFileSync(join(siteDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${canonicalFor(route)}</loc></url>`).join('\n')}\n</urlset>`, 'utf8')
  writeFileSync(join(siteDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${canonicalFor('/sitemap.xml')}\n`, 'utf8')
  writeFileSync(join(distDir, '_headers'), `${basePath}/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n${basePath}/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n`, 'utf8')
  writeFileSync(join(distDir, '_redirects'), `/ ${basePath}/ 302\n`, 'utf8')
  writeFileSync(join(distDir, 'index.html'), `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${basePath}/"><link rel="canonical" href="${canonicalFor('/')}">`, 'utf8')
  writeFileSync(join(siteDir, '404.html'), pageShell({
    title: '页面不存在',
    description: '你访问的 AI Chronicle 页面不存在。',
    path: '/404.html',
    active: '',
    body: `<section class="not-found"><span>404</span><h1>这条时间线还没有延伸到这里。</h1><p>返回编年史，继续沿着已经收录的节点阅读。</p><a class="button button-primary" href="${urlFor('/')}">回到时间轴 ${arrowIcon}</a></section>`,
  }), 'utf8')
}

rmSync(distDir, { recursive: true, force: true })
mkdirSync(siteDir, { recursive: true })
cpSync(join(rootDir, 'public/assets'), join(siteDir, 'assets'), { recursive: true })

renderHome()
renderTimeline()
renderEventPages()
renderConceptPages()
renderGlossary()
renderModelFamilyPages()
renderCompanyPages()
renderTopicPages()
renderValueChainPages()
renderAbout()
writeSupportFiles()

console.log(`Generated ${events.length} events, ${concepts.length} concepts, ${companies.length} companies, ${modelFamilies.length} model families, ${valueChainLayersSorted.length} value-chain layers, and ${topicIndex.length} topic routes.`)
