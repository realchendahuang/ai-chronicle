---
eventId: deepseek-v3
form: cost-table reading narrative
narrativeCenter: how a technical report exposed part of a frontier model's compute bill, only to be overshadowed by one dollar figure
emotionalSource: $5.576 million was made for a headline, while the table's scope determined whether the headline was true
avoid:
  - equating final-pretraining GPU-hours with total R&D cost
  - burying architecture beneath market stories
  - calling open weights unrestricted open source
---

DeepSeek released V3 and its technical report on 26 December 2024. One line from the cost table quickly escaped into headlines: the final pretraining run used about 2.788 million H800 GPU-hours, which the report valued at roughly $5.576 million using an assumed rate of two dollars per GPU-hour. The figure made frontier-model training look, for once, like a bill that anyone could read. That also made it unusually easy to misread.

The table accounted for compute in the final pretraining run, not the invoice for the entire project. Data acquisition and cleaning, staff, failed experiments, earlier architectural work, infrastructure, and post-launch inference were not contained in that number. Turning “$5.576 million for final pretraining compute” into “a frontier model cost $5.576 million to create” substitutes one accounting category for all the others. The report’s important act was more disciplined: it published a defined slice of cost that outsiders could compare.

V3’s architecture explains why that slice should not be read like the bill for an ordinary dense model. The system had about 671 billion total parameters but activated roughly 37 billion for each token. Mixture-of-experts routing allowed a large stored capacity without involving every parameter in every step. Multi-Head Latent Attention aimed to reduce key–value cache and bandwidth pressure. Total parameters governed the size of storage and loading; active parameters tracked more closely with the work of a forward pass. Efficiency became visible only when both numbers stayed on the page.

The report also described engineering for routing balance, numerical stability, and the training system itself. At this scale, “fewer active parameters in theory” is not sufficient. Uneven expert load can strand hardware, and instability can turn already-spent GPU-hours into no usable checkpoint at all. V3’s cost story was therefore not an after-the-fact multiplication of time by price. Algorithms, network communication, and systems scheduling had to make the final run finish.

DeepSeek supplied publisher evaluations across code, mathematics, and general knowledge, and released weights for outside deployment and research. The benchmarks remained vendor results, and the repository license remained the authority; downloadable weights do not automatically imply the most permissive open-source terms. For developers, the practical change was access to private deployment and further study of a high-capability model. For the industry, the report made every claim about “enormous training cost” or “leading efficiency” answer a more specific question: what exactly was counted?

The most useful reading of DeepSeek-V3 keeps the architecture diagram and the cost table open together. The 671-billion total and 37-billion active parameters show how computation was selected. The 2.788 million GPU-hours show which resource interval the authors chose to expose. The words *final pretraining* show what remained outside the frame. V3 did not publish a complete invoice. It cut a wide opening into the cost mystique—provided the reader was willing to finish the footnote.
