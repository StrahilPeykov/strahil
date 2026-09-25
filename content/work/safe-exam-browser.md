---
title: Safe Exam Browser security research
year: 2023
weight: 30
role: Security research, course project
stack: [.NET, reverse engineering]
summary: A course project in which we found and disclosed several ways around Safe Exam Browser's Windows protections.
overview: >-
  For TU Eindhoven's offensive-security course, my team found several ways
  around Safe Exam Browser's Windows protections and disclosed them to its
  maintainers. The fixes landed in
  [version 3.6.0](https://github.com/SafeExamBrowser/seb-win-refactoring/releases/tag/v3.6.0),
  which credits our team by name.
---

Safe Exam Browser restricts what students can access during an online exam.
We reverse-engineered the Windows client and tested DLL injection,
bypassing virtual-machine detection, and
evading its process monitoring to run disallowed software.

The maintainers thanked our team for "proactive, constructive and responsible
vulnerability disclosure."
