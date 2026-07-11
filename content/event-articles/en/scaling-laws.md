---
eventId: scaling-laws
form: Commentary on charts and budgets
narrativeCenter: Smooth loss curves moving from empirical observation into plans for training and capital
emotionalSource: The seduction of making the future calculable, restrained by the conditions and later corrections attached to every fit
avoid:
  - Treating an empirical power law as a timeless law of nature
  - Replacing measured cross-entropy loss with claims about emergent abilities
  - Ignoring later revisions to compute-optimal data and parameter allocation
---

The vertical axis did not say intelligence. It did not say poetry, translation, or reasoning. It said cross-entropy loss.

In *Scaling Laws for Neural Language Models*, researchers trained models ranging from thousands to roughly a billion non-embedding parameters and varied three quantities: model size \(N\), dataset size \(D\), and training compute \(C\). On logarithmic plots, points gathered around straight lines across several orders of magnitude. In ordinary coordinates, those lines became power laws.

The finding was conditional and extremely useful. When neither data nor compute nor parameters formed the limiting bottleneck, adding more of one reduced loss with a surprisingly smooth regularity. Early portions of a training curve could help predict its later course. Small runs could inform the likely outcome of larger ones. A team could estimate when fixed data would become insufficient, or how to divide a compute budget between a larger model and more optimization steps.

Before such curves, “bigger tends to work better” was an observation. After them, it could enter a planning document.

The paper's own prescription favored very large models trained short of full convergence on a comparatively modest amount of data. Large models, it found, reached a target loss with fewer samples and optimization steps. The slogan hidden inside the analysis—“Big models may be more important than big data”—fit the investment climate that followed.

It was not the last word. In 2022, the Chinchilla work revisited compute-optimal allocation and argued that many large models had been undertrained on data. The power-law framework survived, but the recommended ratio changed. This is what an empirical engineering law looks like in use: powerful enough to guide enormous expenditure, provisional enough to be revised by another set of experiments.

Nor did the 2020 paper promise that the fitted curves would continue forever. Loss cannot fall toward zero at the same rate without limit. The measurements described particular model families, datasets, and scale ranges. Whether a smoother decline in language-modeling loss reliably produced the abilities people cared about was left as an open question. The paper invoked “more is different,” but a line fitted through loss values could not specify every difference that more might bring.

The charts changed institutions as much as experiments. Frontier training could begin before a full run existed: fit exponents, price hardware, choose a model and data allocation, calculate whether another order of magnitude was worth attempting. Surprise did not disappear from model behavior. It was capital that became less willing to be surprised.

A scaling curve is easy to romanticize because it points beyond the last measured dot. Its honest form includes the error bars, the bottlenecks, and the later paper that alters the recipe. Read that way, it is neither prophecy nor mere description. It is a ruler laid against an unknown future, useful precisely because everyone can see where the markings end.
