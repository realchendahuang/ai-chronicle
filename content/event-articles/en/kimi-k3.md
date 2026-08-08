---
eventId: kimi-k3
form: An open-weight moment
narrativeCenter: A 2.8-trillion-parameter weight file put "largest" and "open" in the same sentence, and made self-hosting a serious option again
emotionalSource: Eleven days between announcement and open weights—the wait was not for a score but for a downloadable fact
avoid:
  - Presenting open weights as unconditional free access
  - Letting benchmark ranks replace license and deployment detail
  - Ignoring the modified MIT license and its commercial revenue threshold
---

On July 16, 2026, Moonshot AI announced Kimi K3 ahead of WAIC: a Mixture-of-Experts model with 2.8 trillion total parameters, about 104 billion active per token, native vision, and a one-million-token context window. Numbers like these blur together on announcement day. The detail worth remembering came eleven days later, on July 27, when the weights were released. From that point, "largest open-weight model in the world" and "first open model to top WebDev Arena" held simultaneously—and both were checkable facts with files and a license behind them.

The architecture is a sparse one: 896 routed experts plus 2 shared experts, with only about 16 awakened per token. Sparsity is not a shortcut; it is how you push total parameters into the trillions while keeping per-token compute bounded. The in-house Kimi Delta Attention implements linear attention so a million-token context does not require quadratic cost, and the Moon Clip second-order optimizer halves training data demand from 40T to 20T tokens. These details matter because they define what the community actually received: not just a row on a leaderboard, but engineering assets that can be reproduced and modified.

Open weights do not mean free. Kimi K3 ships under a modified MIT license: ordinary commercial use is unblocked, but providers whose MaaS revenue exceeds $20 million over 12 consecutive months must sign an additional agreement. That is the common guardrail for 2026-era open models—weights open, reselling compute at scale is negotiated separately. Day-one support from Alibaba Cloud, Huawei Ascend, Nebius, Baseten, Fireworks, and inference stacks like vLLM and SGLang suggests the industry had been waiting for this node, not reacting to it.

What changed is not a rank on one test but the range of options. Before, a team wanting a near-frontier model it could deploy itself chose between smaller open weights and closed APIs. After Kimi K3, the strongest self-hostable option and "largest in the world" are the same thing. For data-sensitive enterprises, research groups, and individual developers, frontier capability no longer has to mean handing over data.

Scale and leaderboards do not automatically equal usability. Sparse routing has failure modes of its own; a million-token window is only valuable when real tasks use it; and the license threshold is a number every team must run through its own business model. Those open questions are exactly what open models are like: some of the interpretation is handed to the user. History rarely hands out "largest" and "open" in the same week. In July 2026, it did.
