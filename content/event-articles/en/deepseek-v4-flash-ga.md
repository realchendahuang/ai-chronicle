---
eventId: deepseek-v4-flash-ga
form: a turning point for the low-price era
narrativeCenter: Preview-to-GA and a broad price increase arrive in one window as DeepSeek moves from volume-for-price to sustainable pricing
emotionalSource: The words "expected to be significant" in the price notice made every DeepSeek-dependent team redo its budget
avoid:
  - reading the increase as evidence of DeepSeek financial distress
  - writing "expected to be significant" as a confirmed specific figure
  - ignoring the peak/off-peak pricing structure
---

On July 31, 2026, DeepSeek shipped the V4-Flash general availability build, version V4-Flash-0731. Preview to GA, thinking and non-thinking modes, a 1M-token context, stronger agent capability, speculative decoding—that was the technical list. What made the whole developer community sit up was another notice six days later: on August 6, DeepSeek announced a broad API price increase, "expected to be significant."

The two events only form a complete signal when read together. GA means the model entered a stable phase—interface behavior and rate limits stop shifting; the price increase means DeepSeek decided to stop buying market share with subsidized prices. For two years, DeepSeek's API pricing had been the industry floor; in the R1 era, "bargain prices" became a global talking point. As agent workloads drove inference demand up, the gap between floor prices and compute bills finally needed patching.

Current off-peak pricing: ¥0.02 per million input tokens on cache hits, ¥1 on misses, ¥2 per million output, doubling at peak hours. The structure itself speaks—a 50x gap between cache hit and miss is DeepSeek telling developers to cache repeated prefixes; peak doubling is price steering load toward off-peak hours. Pricing is no longer just "cheap"; it is an engineering tool that shapes behavior.

For developers, this was a collective re-budget. Agent products, chat apps, and cloud resellers on the DeepSeek API all had to write "expected to be significant" into their cost models. For the industry, it is a turning signal in the low-price race: when the most aggressive discounter starts raising prices, the sustainability of volume-for-price strategies gets repriced. Multiple cloud platforms onboarded the Flash GA between August 2 and 4, so the ecosystem was still expanding—the increase did not scare off channels; it made GA distribution tidier.

DeepSeek did not explain the financial details of the increase, and outsiders should not invent reasons for it. What is confirmable is the cadence: preview-to-GA and the price increase landed in the same window, right after the legacy model-name retirement countdown ended. The low-price era did not end abruptly; it was formally turned to the next chapter by a notice that said "expected to be significant."
