---
eventId: claude-3-5-sonnet
form: A change in the default model
narrativeCenter: How a mid-tier model with unchanged pricing altered both developer routing decisions and the Claude interface
emotionalSource: The moment teams realized that the most useful everyday model did not have to sit at the top of the price list
avoid:
  - Treating vendor benchmarks as universal defeat of every flagship
  - Omitting the preview status of Artifacts
  - Substituting “value” for concrete pricing, speed, and product form
---

In the summer of 2024, a team choosing a default Claude model faced a familiar compromise. The most capable tier could be too expensive or slow to call on every request; the cheaper tier might not be dependable enough for a large code change or a long document. On June 20, Anthropic placed Claude 3.5 Sonnet in the middle of that price ladder while giving it the job description of a flagship.

The numbers made the repositioning tangible. Claude 3.5 Sonnet cost $3 per million input tokens and $15 per million output tokens, unchanged from Claude 3 Sonnet, and offered a 200,000-token context window. Anthropic also said it ran at twice the speed of Claude 3 Opus. Its coding, visual-reasoning, and instruction-following results came from vendor-run evaluations and could not guarantee the same ordering on every private workload. But price and latency were not decorative benchmark columns for developers operating a real service; they determined which model could remain switched on all day.

Artifacts translated the same shift into a product interface. When a Claude.ai user requested a website, a code snippet, or a document, the output could open in a dedicated pane beside the conversation instead of disappearing into the vertical transcript. The feature was still a preview, with the instability and incomplete edges that label implied. Even so, it proposed a different relationship with model output: the generated object was something to inspect and revise, not merely an answer to copy out of a bubble.

The two parts of the launch reinforced each other. A faster, predictably priced Sonnet could be called repeatedly by developer tools; Artifacts made the generate–inspect–revise loop visible to non-API users. Flagship models had traditionally demonstrated the ceiling. Claude 3.5 Sonnet competed for the place clicked most often. In production, that default position can matter more than a benchmark crown: tutorials are written around it, starter code preselects it, and budgets are built from its token price.

Claude 3.5 Sonnet did not establish that a mid-tier model would always outperform a flagship. It established a more durable product idea: model families could be divided by workload rather than arranged as a simple intelligence ladder. After this release, “which model should we use?” increasingly became a routing question. A narrow set of requests could justify the most expensive tier; a much larger stream of everyday work could stay with the model that was capable enough, fast enough, and affordable enough to become routine.
