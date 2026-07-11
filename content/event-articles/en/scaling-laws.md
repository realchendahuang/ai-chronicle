---
eventId: scaling-laws
form: reading empirical curves
narrativeCenter: how power laws across seven orders of magnitude turned loss, parameters, data, and compute into a budget language
emotionalSource: “will bigger help?” becoming a slope one can fit rather than a slogan
avoid:
  - treating power laws as natural law or eternal truth
  - ignoring later Chinchilla revisions of optimal balance
  - drowning experimental conditions in investment hype
---

Kaplan et al. (2020) titled their work like a lab memo: *Scaling Laws for Neural Language Models*. The question is unromantic. Given a finite compute budget, should one spend on a larger model, more data, or longer training? The team fit cross-entropy loss across roughly seven orders of magnitude of training compute, tracking how loss moved with non-embedding parameter count \(N\), dataset size \(D\), and training compute \(C\).

Within the architecture family and data regime they tested, loss followed smooth power-law trends in those scale variables. When other factors were not yet bottlenecks, curves could be extrapolated rather than breaking after a mystical threshold. From the fits the authors discussed compute-optimal allocation—how to balance \(N\) against training tokens at fixed \(C\)—and offered empirical formulas for that regime. Details depend on depth–width choices, optimizers, and data cleaning. These are not physical constants; they are a map drawn on a particular experimental grid.

The map’s usefulness outran the appendix. Research managers and infrastructure teams gained a shared language: loss drops could be rough-forecast, cluster purchases and training calendars argued against slopes instead of against a feeling that “we need more cards.” Larger models and longer runs became easier to defend in budget review—scaling moved from slogan toward a planning assumption. Boundaries still need writing down. Power laws describe trends in training or validation loss such as cross-entropy; they do not guarantee monotonic downstream capability. Data quality, alignment objectives, and test-time compute sit outside the original curves.

Later work redrew some contour lines. Results such as DeepMind’s Chinchilla showed that, at similar compute, smaller models with more tokens can beat parameter-heavy, data-starved configurations, correcting an industry reading that over-favored stacking parameters. Kaplan’s paper and these revisions do not annihilate each other. The former established the engineering habit that scale variables can be fit and extrapolated; the latter adjusted what “compute-optimal” means under a given regime.

Scaling laws do not promise endless progress. They promise that before data repetition, optimization failure, or broken evaluation intervene, loss often follows a slope one can draw. For organizations that reserve GPUs months ahead, a debatable slope is already more useful than “bigger is better.”

Log–log plots of loss versus compute made slope a shared intuition device for labs booking chips months ahead. Misuse appears when cross-entropy is equated with user satisfaction, or when extrapolation continues after data repetition and broken evaluation. Maturity means labeling domains of validity and failure. Chinchilla and related work rewrote optimal balance without erasing the habit of fitting curves. The contribution is that “bigger” must carry a checkable forecast.
