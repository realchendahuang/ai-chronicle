---
eventId: shrdlu
form: a review of a blocks-world program
narrativeCenter: how SHRDLU first stitched language, reasoning, and world state together inside a toy blocks world
emotionalSource: the persistent question "did the machine really understand?" set against the honesty of a constrained world
avoid:
  - inventing specific scenes of Winograd at a terminal
  - claiming SHRDLU understood the real world
  - summarizing the 1969 work as an "AI breakthrough"
---

In 1969 Terry Winograd ran an experiment at MIT. The stage was a virtual tabletop with a few blocks—red, green, blue, cubes and prisms. The program was called SHRDLU, a name that looks like noise and actually descends from the old hot-metal typesetting "most-used letters" phrase. SHRDLU understood English sentences typed at a terminal and executed them inside its small world.

The point was how. Winograd did not settle for keyword matching—precisely what ELIZA had been questioned over in 1966. SHRDLU parsed the sentence, mapped it onto concrete objects and actions in the blocks world, invoked a planner to decide how to move blocks, and actually manipulated the simulated world. "Put the red block on the green block" got decomposed into pick up, position, release; if a stack was in the way, the program moved it aside first.

What impressed people most was that it could answer questions about its own actions. Ask "before putting the red block on the green block, what did you do first?" and it reviewed its own action sequence. Tell it "put the blue block on the red block but do not touch the green one," and it planned around the green block. Combining language commands, world state, and action planning in one system was nearly new. Confined to the blocks world, the program's understanding had clear boundaries—which was precisely its strength: within a restricted domain, language understanding could be made complete.

SHRDLU's influence lasted decades. It convinced a generation that language understanding cannot be separated from a model of the world; surface pattern matching is not enough. That belief carried through knowledge-representation research of the 1980s and echoes today in discussions of world models, embodied AI, and planning fused with language. When modern models translate "put the thing on the table" into a sequence of actions inside a simulator, they are working the same problem line SHRDLU drew in 1969.

SHRDLU also had a ceiling. It had no learning; all the "intelligence" came from carefully written data structures and rules, and moving to another domain meant rewriting almost everything. Winograd himself cautioned that projecting the blocks-world success onto the real world was dangerous. That honest boundary makes SHRDLU an enduring coordinate: it proved complete understanding is possible in a constrained domain, and reminded later builders that understanding grows exponentially harder once domain constraints loosen.

Looking back, SHRDLU reads both as a coming-of-age for natural-language processing and an early prophecy of embodied intelligence. Language, world state, and action planning meshed in one system—first demonstrated completely in the 1969 blocks world. The question it left behind—what does a machine actually "understand"—remains unresolved even in today's era of large models.
