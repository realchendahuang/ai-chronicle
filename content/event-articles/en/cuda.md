---
eventId: cuda
form: toolchain archaeology
narrativeCenter: the transformation of GPU parallelism from a graphics trick into a stable programming environment
emotionalSource: infrastructure with no theory of intelligence becoming part of the material basis for increasingly capable systems
avoid:
  - claiming CUDA was invented specifically for deep learning
  - confusing the 2006 announcement with the 2007 release of toolkit 1.0
  - praising raw chip performance while ignoring software accumulation and lock-in
---

To run a matrix multiply on a GPU, you once had to disguise it as drawing.

By the mid-2000s GPUs already held large numbers of arithmetic units, because rendering needed similar operations across many pixels and vertices. Researchers tried general-purpose GPU computing—GPGPU—but often had to encode scientific work as textures, shaders, and graphics APIs such as OpenGL or DirectX. The hardware could compute; the software did not yet treat the computation as an ordinary program. Bugs were hard to chase, performance models opaque, and code difficult to hand across a team.

NVIDIA announced the CUDA platform in **November 2006**; the official toolkit archive begins with **1.0, June 2007**. Both dates matter. One marks public intent; the other is the first surviving entry developers could install. Infrastructure rarely appears complete. It arrives as compilers, drivers, runtimes, documentation, and libraries that slowly become dependable enough to inherit. The corporate timeline places that shift alongside the GPU’s path from graphics accelerator to general computing device—not as a prophecy written for deep learning years later.

CUDA redrew the interface. Developers could write C-like kernels for execution on the GPU and distribute work across threads. Blocks, grids, shared memory, and device memory became named parts of a programming model. A compiler translated the code. A runtime coordinated host and device data movement. Mathematical libraries gradually standardized common linear-algebra and signal operations. Parallel hardware no longer appeared only through the narrow opening of a rendering pipeline.

The intended applications ranged across scientific computing, signal processing, molecular simulation, computational finance, and imaging. Neural networks met CUDA later for a practical reason: training repeatedly applies matrix and vector operations that can be spread over many computational units. Work around 2012, including AlexNet, already showed the payoff of training deep networks on GPUs; frameworks later treated CUDA as a default acceleration backend. Libraries such as cuDNN, introduced around 2014, packaged convolutions and other neural-network primitives so framework developers did not have to rewrite low-level kernels for each generation of hardware.

A stable interface turns speed into routine. Code examples produce trained developers; trained developers demand better tools; libraries attract projects; projects influence hardware purchases. Each part makes the next NVIDIA GPU easier to adopt. The same accumulation that improves productivity raises the cost of leaving. CUDA’s moat came to include silicon alongside compatibility, debugging tools, documentation, and habits built over years. Competitors can ship accelerators; reproducing a whole sedimentary software layer is harder.

Occupancy, shared-memory bank conflicts, host–device copy costs, streams, and asynchronous execution became ordinary items in paper appendices and engineering checklists. Early GPGPU work through graphics APIs often hid those ideas inside shader tricks; after platformization they became teachable, documented objects. Libraries such as cuBLAS and cuFFT first served scientific computing; cuDNN later attached convolution primitives to deep-learning frameworks. The stack grew in layers; it was not custom-built in one stroke for a single neural-network paper.

Accounts of deep learning tend to be named after papers and architectures. CUDA belongs lower in the stack, where dramatic language is less common and inheritance matters more. An equation may show that a model can scale. Threads, memory hierarchies, drivers, and versioned libraries decide whether researchers can carry that scale from one experiment to the next. Chips can iterate; if interfaces break, the inheritance chain of research code breaks with them. CUDA’s bet was to keep the interface from breaking.
