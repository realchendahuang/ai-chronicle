---
eventId: lisp-language
form: a portrait of a language's birth
narrativeCenter: how McCarthy's ideal of an advice-taker led him to invent the programming language that ruled AI research for decades
emotionalSource: an idea forcing its own tool, and the symbolic era's attachment to "programs as data"
avoid:
  - presenting LISP as mainstream in today's programming
  - inventing personal anecdotes about McCarthy
  - reducing the language itself to "revolutionary" rhetoric
---

After the 1956 Dartmouth workshop, John McCarthy held an idea out of step with the mainstream. Others were making programs play checkers or prove theorems; McCarthy imagined an "advice-taker"—a system that does not preload every answer but keeps common sense in a searchable knowledge base and reasons on its own when a new problem appears. His 1958 paper "Programs with Common Sense" stated the idea, but stalled on tools: FORTRAN could only crunch numbers, not express a program that could think about programs.

So McCarthy began designing a new language. A prototype emerged in 1958; in 1960 he published "Recursive Functions of Symbolic Expressions and Their Computation by Machine," laying out the language's core. LISP's basic unit is the list—symbolic expressions nested in parentheses. Functions take lists and return lists; and a program, itself, is just a list. That made "code as data" an engineering reality for the first time: a program could treat its own source as ordinary data, modify it, and generate new programs.

The other hallmark was recursion—solve a hard problem by splitting it into smaller versions of itself until reaching a directly answerable base. That way of thinking shaped later functional languages. The features programmers now take for granted—lexical scoping, garbage collection, recursive closures—trace back to that 1960 paper and its successors. Oddities that looked like flaws at the time (brackets everywhere, everything is an expression) proved to be expressive power, not defects.

From the 1960s through the 1980s, LISP was effectively the mother tongue of AI research. MIT's MAC project, Stanford's SAIL, and much of the expert-systems development ran on LISP and its dialects. Commercial tools of the expert-systems boom—rule systems built on LISP—propped up AI's first industrial wave. Machines came and went, from dedicated LISP machines to general workstations, but the language outlived them, surviving into the deep-learning era.

The "programs as data" inheritance outlived the language itself. Metaprogramming, code generation, programs that modify programs—abilities revived in today's agent era—were already latent in LISP's philosophy. When 2020s models generate, execute, and patch code, the abstraction of "code as data" they manipulate was fixed in 1960 by McCarthy's parentheses and lists.

McCarthy did not invent every syntax modern programmers use, but he invented a way of seeing programs. LISP never conquered the commercial world; what it shaped was how AI researchers thought—treating reasoning, knowledge, and programs themselves as manipulable data. The rise and fall of symbolic AI has its own trajectory, but the tool that supported that history longest was a bracket language born in 1958 for the dream of an advice-taker.
