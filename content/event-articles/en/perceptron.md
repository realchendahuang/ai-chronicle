---
eventId: perceptron
form: geometric model portrait
narrativeCenter: a learning rule whose promise and limitation both arise from the same linear boundary
emotionalSource: the power and austerity of reducing learning to a correctable line
avoid:
  - treating the perceptron as a miniature modern deep network
  - repeating broad media promises as established capability
  - describing linear limits as a later unfair verdict rather than part of the model
---

A perceptron can be described without much vocabulary. Multiply each input by a weight. Add the results. Compare the sum with a threshold. One side of the threshold is one class; the other side is another. When the answer is wrong, alter the weights in the direction suggested by the example.

The machinery is spare enough to fit in a few lines, but Frank Rosenblatt's ambition was not. In his 1958 *Psychological Review* paper, he presented the perceptron as a probabilistic model of a hypothetical nervous system. The questions around it concerned perception, memory, and the way information from a physical world might alter later behavior. What machine-learning textbooks retained most readily was the tractable middle of that larger bridge: error changes weight.

That update replaced a familiar kind of programming. Instead of enumerating every visible condition under which an image belonged to one category, a developer supplied examples, and those examples moved the decision boundary. If two classes are linearly separable—if some line, plane, or higher-dimensional hyperplane really can divide them—the learning process can be proved to converge on a solution. At Cornell Aeronautical Laboratory, the Mark I perceptron turned the rule into operating hardware: a 20-by-20 array of photocells supplied 400 pixel values to adjustable connections and classification units. A mathematical model, labeled experience, and a physical machine now occupied one loop.

The proof carries a condition, and the condition is the story. A single-layer perceptron can draw only a linear boundary. XOR arranges its classes so that no one line can separate them. More training cannot repair this failure. More examples cannot discover a boundary that the model has no means to represent. The same simplicity that permits a convergence theorem also places the answer outside reach.

It is therefore misleading to file the perceptron under either triumph or defeat. It made “learning” into a process that could run, be proved, and be disproved with unusual precision. The weights could change through experience; the family of changes remained constrained by the geometry of the model.

Multilayer networks and backpropagation would later enlarge that geometry. The perceptron's compact lesson survived them. Every claim that a system learns contains two separate questions: how experience alters it, and what kinds of answer the system was capable of expressing in the first place. The perceptron's line answers both.
