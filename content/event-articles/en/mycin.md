---
eventId: mycin
form: a case file of an expert system
narrativeCenter: how Stanford's MYCIN turned doctors' diagnostic experience into if-then rules, and why it never reached the clinic
emotionalSource: the excitement of physician-approved advice colliding with the ceiling of liability, ethics, and maintenance
avoid:
  - inventing scenes of MYCIN on hospital duty
  - presenting expert systems as the mainstream AI of the era
  - substituting "great milestone" for rule and evaluation detail
---

In the mid-1970s researchers at Stanford faced a real problem: blood infections and meningitis are hard to diagnose, and infectious-disease specialists are scarce. Edward Shortliffe's doctoral project, MYCIN, set a direct goal—encode expert diagnostic reasoning in a program that could recommend treatment. Unlike many experimental programs of the time, MYCIN confronted a genuinely real scenario: which antibiotic should the patient receive?

MYCIN's core was a pile of if-then rules. If the infection is meningitis, and the patient is a child, and the culture indicates a certain bacterium, then consider a certain therapy. Each rule carried a confidence number, because medical judgment is never black and white. As the program reasoned down its rules, it recorded the "why" at every step—which rules produced this conclusion, what test results supported it. The system could therefore answer follow-ups: why do you suspect this organism?

The mechanism looks plain today, but the engineering was substantial for its time. MYCIN's most cited evaluation compared it with Stanford infectious-disease experts: given the same cases, another panel blindly rated MYCIN's therapy recommendations against the specialists', and MYCIN's were judged acceptable about as often as the humans'. In the 1970s that result stirred enormous excitement—a computer that appeared to practice medicine.

MYCIN was never put into actual clinical use, and the reasons lay outside its reasoning ability. Who bears medical liability? Who is responsible when the program errs? Who keeps the knowledge base current, and will a hospital pay to maintain it? With no answers, MYCIN stayed a research project. Its ending became one of the most-cited lessons in AI history: between technical feasibility and real deployment sit three gates—engineering, institutions, and trust.

MYCIN's legacy is mostly methodological. It defined the classic architecture of rule bases, inference engines, certainty propagation, and explanation, and made "knowledge engineering" a buzzword of 1980s AI. Later commercial expert systems—such as DEC's XCON—found real enterprise use by walking the road MYCIN had paved. When deep learning re-entered medicine in the 2010s, it ran back into the same wall MYCIN hit in 1976: accuracy matters, but so does responsibility and trust.

Today a large model can produce a diagnosis-flavored answer in seconds, looking far cleverer than a 1976 rules engine. But the question MYCIN raised—who answers for a program's advice—did not disappear as technology improved. It stands like a boundary stone planted decades early, reminding everyone building medical AI that how well the reasoning performs only answers half the problem.
