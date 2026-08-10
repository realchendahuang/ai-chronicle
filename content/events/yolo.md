---
id: yolo
title: YOLO 提出实时目标检测
titleEn: YOLO proposes real-time object detection
subtitle: 一次前向推理完成全图检测，让「看一眼就认出目标」成为可能
subtitleEn: One forward pass detects everything in an image, making "recognize at a glance" possible
date: '2016-05-09'
datePrecision: day
importance: B
eventType:
  - research
  - milestone
topics:
  - computer-vision
  - ai-applications
  - real-time
companies: []
concepts:
  - cnn
  - image-classification
summary: Redmon 等人提出 YOLO（You Only Look Once），把目标检测变成单次回归问题，一帧图像一次前向推理即可输出所有目标的位置与类别，速度达到实时。它开创了单阶段检测路线，深刻影响自动驾驶、监控与终端视觉。
summaryEn: "Redmon and colleagues proposed YOLO (You Only Look Once), framing object detection as a single regression: one forward pass outputs all object locations and classes, reaching real-time speed. It created the one-stage detection line, deeply shaping autonomous driving, surveillance, and on-device vision."
background: 2016 年主流检测方法（如 R-CNN 系列）先提候选区域再逐区域分类，精度高但速度慢，难以满足视频与实时场景。研究者希望找到「一张图只跑一次」的端到端方案。
backgroundEn: In 2016 mainstream detectors (like the R-CNN line) proposed regions then classified each one—accurate but slow, unsuited to video and real-time scenarios. Researchers wanted an end-to-end "one pass over the image" solution.
whatHappened: YOLO 把整张图分成网格，每个网格直接预测若干边界框与类别概率，再用一次前向传播完成检测。论文用「看一眼就知道」命名，速度比当时方法快一个数量级，很快成为开源检测的明星项目。
whatHappenedEn: YOLO divides the image into a grid; each cell directly predicts bounding boxes and class probabilities, all in one forward pass. Named "you only look once", it ran an order of magnitude faster than contemporaneous methods and quickly became a star open-source detection project.
whyImportant: YOLO 证明「速度与可用性」同样是检测研究的核心价值，把目标检测从学术榜单带进真实产品。它的迭代版本被广泛用于安防、自动驾驶、工业质检，成为计算机视觉落地最广的模型家族之一。
whyImportantEn: YOLO proved speed and usability are core values of detection research, carrying it from leaderboards into real products. Its successive versions power security, autonomous driving, and industrial inspection—one of the most widely deployed vision model families.
impact:
  user: 拍照搜物、相册分类、门禁安防等场景背后都有实时检测。
  developer: 单阶段检测成为部署友好路线，移动端与嵌入式大量采用。
  industry: 自动驾驶与工业视觉把实时检测当作基础能力。
impactEn:
  user: Visual search, album classification, and security systems all rely on real-time detection.
  developer: One-stage detection became the deployment-friendly route, widely used on mobile and embedded.
  industry: Autonomous driving and industrial vision treat real-time detection as a base capability.
beforeAfter:
  before: 检测要「先找候选框，再逐个分类」，速度慢。
  after: 一次前向推理完成全部检测，实时成为可能。
beforeAfterEn:
  before: Detection meant "find candidate regions, then classify each"—slow.
  after: One forward pass detects everything; real time became possible.
relatedEvents:
  - alexnet
  - resnet
  - imagenet
  - mobileye-adas
sources:
  - title: You Only Look Once (YOLO)
    url: "https://arxiv.org/abs/1506.02640"
    publisher: arXiv
    type: paper
status: verified
slug: yolo
---
