---
eventId: deepseek-v3
form: Note beside a cost table
narrativeCenter: A 671B-total / 37B-active MoE and 2.788 million H800 GPU-hours as the final pretraining ledger
emotionalSource: Frontier training cost enters public discussion as a citable table—with “not full project cost” in the same breath
avoid:
  - Equating pretraining GPU-hours with total company R&D spend
  - Letting stock-price narrative bury architecture
  - Calling open weights unrestricted open source without the license
---

On 26 December 2024, DeepSeek released DeepSeek-V3 with a technical report. Readers who open the cost table first meet a number built for headlines: about 2.788 million H800 GPU-hours for the final pretraining run, estimated at roughly $5.576 million at the report’s assumed hourly rate.

Those two sentences must be uncoupled. The figure is the compute ledger for that final pretraining run—not data purchase, failed experiments, labor, inference serving, or historical R&D. Reading $5.576 million as “a frontier model costs only five million dollars to train” swaps accounting categories. DeepSeek’s own tone is cooler: put the publishable stretch of the compute bill on the table so the industry can stop guessing in the dark. Headlines like the dollar figure; engineers should return to the footnotes—scope, hardware model, whether failed runs and data labor are included.

The model is a mixture of experts: about 671 billion total parameters, about 37 billion activated per token, with designs such as Multi-Head Latent Attention to ease bandwidth pressure. Total parameters govern disk and load; active parameters track closer to the cost of one forward pass—MoE splits the two bills and lets deployers choose quantization and expert parallelism by scene. Open weights allow download, deployment, and further study; the repository license is the rule, and open weights are not the loosest OSI open-source definition.

The report also describes training stability and routing engineering—handling routing collapse and numerical issues—so “cheap” is not only after-the-fact arithmetic but a condition for finishing the run. Benchmark tables cover code, math, and general knowledge; vendor numbers remain official evaluations. For developers, V3 offered a rare combination at the time: open weights near flagship chat quality, plus a path to private deployment. For infrastructure and investment debate, it put joint algorithm–system optimization back beside “just stack GPUs.” Closed labs face dual pressure on price and deployability; open communities get architecture and hyperparameters to discuss, not only leaderboard screenshots.

The best reading of V3 opens the architecture diagram and the cost table together: how 37B active supports 671B capacity, and what 2.788 million GPU-hours do and do not measure. If public talk collapses to one dollar figure, the part of the report that was willing to be public is wasted. Five million dollars must stay bound to the words *final pretraining*—an invitation to compare, and a limit on what comparison means.

Reading a public ledger as a full invoice yields bad strategy; reading it as a discussable order of magnitude helps break cost mystique. After V3, efficiency reentered the public agenda as a first-class field. 671 billion total and 37 billion active are concrete symbols of that correction—and behind the symbols sits the question whether training can finish under real engineering constraints.
