---
eventId: expert-systems
form: history of a scientific instrument
narrativeCenter: DENDRAL's combination of molecular search with chemical rules extracted through knowledge engineering
emotionalSource: the usefulness gained when tacit expertise is made explicit and the labor demanded by that conversion
avoid:
  - reducing expert systems to ordinary software with many rules
  - claiming that DENDRAL replaced chemists
  - extrapolating a narrow scientific success into general intelligence
---

A mass spectrometer does not print the structure of an unknown organic molecule. It records a pattern of fragment ions produced when the molecule breaks apart. From those pieces, a chemist must infer how the original atoms were connected. Hundreds or thousands of candidate structures may fit the gross formula. DENDRAL was built for the long work of generating, testing, and eliminating them.

One strand of the project began with Mars. From 1961, Joshua Lederberg participated in NASA planning for instruments that might analyze surface samples for signs of life. The prospect of a computer-controlled mass spectrometer raised a second problem: an instrument in a remote environment would need help interpreting what it measured. By 1965, this interest in automated spectrum analysis had returned to the terrestrial chemistry laboratory. Lederberg, Edward Feigenbaum, Carl Djerassi, Bruce Buchanan, and their collaborators deliberately bounded the task to known classes of organic compounds.

DENDRAL generated possible molecular structures, then pruned them with chemical constraints and evidence from the spectrum. Some atomic arrangements were chemically impossible. Some candidates could not have produced the observed fragments. Entire branches of the search could be discarded at once. The name came from a Greek root for *tree*, an unusually literal description of where expertise entered the computation.

The hard part lay between *if* and *then*. A working chemist's judgment is full of unstated conditions, defaults, and exceptions. Knowledge engineers conducted extended interviews to extract these heuristics and convert them into symbolic rules. Each useful rule was therefore also a record of explanation: an expert stopping to articulate what routine practice had allowed them to leave unsaid. The system's reach depended on continued revision of that record.

Within selected tasks, DENDRAL could work faster than expert mass-spectrometry analysts while reaching comparable accuracy. That made it a serious scientific assistant, not an electronic chemist. It also helped establish an approach later pursued by MYCIN and a commercial expert-systems industry: when general problem solving explodes into too many possibilities, concentrated domain knowledge can make a narrow system effective.

The archived project history keeps the cost visible. DENDRAL was custom-built, required years of intensive labor and sustained funding, and after more than a decade still handled only certain compound classes rather than all of chemistry. Explicit knowledge travels well through software; tacit, shifting, or poorly expressible knowledge does not become explicit merely because the product is called an expert system.

DENDRAL's tree lost vast numbers of candidates as chemistry cut away impossible branches. It also displayed, branch by branch, where the encoded knowledge ended.
