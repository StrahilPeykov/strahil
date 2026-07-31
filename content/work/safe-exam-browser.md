---
title: Safe Exam Browser security research
year: 2023
weight: 30
role: Security research, course project
stack: [.NET, reverse engineering]
summary: A course project in which we found and disclosed several ways around Safe Exam Browser's Windows protections.
---

For TU Eindhoven's offensive-security course, my team tested Safe Exam Browser,
which restricts what students can access during an online exam. We
reverse-engineered the Windows client and found several ways around its
protections, including DLL injection, bypassing virtual-machine detection, and
evading its process monitoring to run disallowed software.

We disclosed everything responsibly to the maintainers, and the fixes landed in
the v3.6.0 release, which credits us by name for "proactive, constructive and
responsible vulnerability disclosure."
