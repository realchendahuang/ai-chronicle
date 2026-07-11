---
eventId: deepseek-v4
form: Close reading of a migration notice
narrativeCenter: "DeepSeek-V4 puts parameter scale, a one-million-token context, dual reasoning modes, and the retirement of old aliases into one operational release document"
emotionalSource: "A frontier model arrives for developers as a set of practical migrations: change a name, keep the base URL, and accept that old entry points will disappear"
avoid:
  - "Writing a preview release as though it had undergone long-term production validation"
  - "Presenting provider claims of open-model leadership or closed-model parity as independent conclusions"
  - "Equating a one-million-token input window with reliable reasoning over every token"
---

The DeepSeek-V4 announcement was half model introduction and half maintenance notice. It released preview versions of Pro and Flash with open weights. It also told developers that the `base_url` could remain unchanged, while the model name should become `deepseek-v4-pro` or `deepseek-v4-flash`. The old `deepseek-chat` and `deepseek-reasoner` aliases were scheduled to retire on 24 July.

Renaming carried an architectural statement. V4 brought the previously separate chat and reasoning entrances into one family, with thinking and non-thinking modes available on both models. Pro contained 1.6 trillion total parameters and activated 49 billion, aimed at harder reasoning and agentic coding. Flash contained 284 billion total parameters and activated 13 billion, positioned by DeepSeek as the faster and less expensive option. Sparse computation continued to separate the capacity stored in weights from the capacity used for one token.

The default one-million-token context in the official service occupied the most visible part of the release. Large repositories, long documents, and accumulated agent histories could more easily fit inside one task. The number also moved the difficult question. Input capacity does not guarantee that a model will retrieve the right detail, reason consistently across the whole span, or perform the correct action at the end. A context window is a container, not a warranty for understanding everything placed within it.

DeepSeek made agentic coding central to its description. It said V4-Pro reached leading open-model results on agent-coding benchmarks, while Flash approached Pro on simpler agent tasks, and it listed integrations with Claude Code, OpenClaw, and OpenCode. These are provider evaluations and compatibility claims. So too was the comparison with top closed models. The preview's concrete deliverables were downloadable weights, a technical report, API access, and model identifiers that could be run. Stability over long tasks still had to be established inside particular toolchains, permission boundaries, and repositories.

V4 extended the open-weight route established by R1 into messier territory. A verifiable mathematics problem can end with one answer. An agent must preserve a longer history, decide when to reason, invoke outside tools, and remain affordable while it continues. Pro and Flash acknowledged that not every task warranted the same number of activated parameters.

At the end of the notice sat the mundane instruction: keep the address, change the model. Frontier systems are remembered through enormous parameter counts. For the people maintaining an application, their arrival may first be a string edited in configuration, followed by a countdown to an alias that will stop working. Model history and operations history shared the page.
