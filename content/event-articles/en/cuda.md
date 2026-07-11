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

NVIDIA's CUDA archive begins with toolkit **1.0, June 2007**. Histories of CUDA usually begin in **November 2006**, when NVIDIA announced the platform. Both dates matter. One marks public intent; the other is the first surviving entry in a toolchain that developers could install. Infrastructure rarely appears complete. It arrives as compilers, drivers, runtimes, documentation, and libraries that slowly become dependable enough to inherit.

GPUs already possessed large numbers of arithmetic units because rendering required similar operations to run across many pixels and vertices. Researchers had begun using that parallelism for work unrelated to pictures. The difficulty was expression. A scientific or numerical problem often had to be disguised as a graphics pipeline, encoded through textures, shaders, and graphics APIs. The hardware could perform the calculation, but the software environment did not yet treat the calculation as an ordinary program.

CUDA redrew the interface. Developers could write C-like kernels for execution on the GPU and distribute work across threads. Blocks, grids, shared memory, and device memory became named parts of a programming model. A compiler translated the code. A runtime coordinated host and device. Mathematical libraries gradually standardized common operations. Parallel hardware no longer appeared only through the narrow opening of a rendering pipeline.

The intended applications ranged across scientific computing, signal processing, simulation, and finance. Neural networks met CUDA later for a practical reason: training repeatedly applies matrix and vector operations that can be spread over many computational units. Libraries such as cuDNN, introduced years afterward, packaged convolutions and other neural-network primitives so that framework developers did not have to rewrite low-level kernels for each generation of hardware.

A stable interface turns speed into routine. Code examples produce trained developers; trained developers demand better tools; libraries attract projects; projects influence hardware purchases. Each part makes the next NVIDIA GPU easier to adopt. The same accumulation that improves productivity raises the cost of leaving. CUDA's moat came to include compatibility, debugging tools, documentation, and habits built over years, not only silicon.

Accounts of deep learning tend to be named after papers and architectures. CUDA belongs lower in the stack, where dramatic language is less common and inheritance matters more. An equation may show that a model can scale. Threads, memory hierarchies, drivers, and versioned libraries decide whether researchers can carry that scale from one experiment to the next.

The old download list begins with 1.0 and proceeds through releases whose individual features are now mostly forgotten. Read as archaeology, it records how parallel computation became an environment rather than an event.
