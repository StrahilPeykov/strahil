---
title: Safe Exam Browser security research
year: 2023
weight: 30
role: Security research, course project
stack: [.NET, reverse engineering]
summary: Penetration testing of a lockdown exam browser, responsibly disclosed, with fixes credited in the v3.6.0 release.
---

A penetration-testing project on Safe Exam Browser, the lockdown browser used to
keep online exams honest. Working in a team for TU Eindhoven's offensive-security
course, we reverse-engineered the Windows client and found several ways to defeat
its protections, including DLL injection, bypassing its virtual-machine detection,
and getting around its process monitoring to run disallowed software during an
exam.

We disclosed everything responsibly to the maintainers, and the fixes landed in
the v3.6.0 release, which credits us by name for "proactive, constructive and
responsible vulnerability disclosure."
