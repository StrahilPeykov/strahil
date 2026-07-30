---
title: Backend engineering at Picnic
year: "2025–present"
weight: 60
role: Backend Java developer
stack: [Java, Spring Boot, PostgreSQL, GraphQL]
summary: Cut a core transport-planning flow's runtime by about 95% while improving solution quality, then moved into last-mile delivery systems.
---

I joined Picnic in September 2025 through its graduate Tech Academy and started
in the team responsible for planning truck movements between warehouses and
local delivery hubs. I progressed from onboarding changes to end-to-end feature
ownership, performance work, production incident leadership, and preparing the
service for handover. I later moved into the last-mile team, working on systems
used by delivery drivers and hub operations.

## Transport planning

The planner turns forecast or confirmed cargo demand into feasible truck
schedules across the Netherlands, Germany, and France. It groups cargo, respects
capacity and timing constraints, optimises routes, and publishes the resulting
plans to downstream warehouse systems.

Its central optimiser uses a Large Neighborhood Search: build a feasible plan,
repeatedly remove part of it, repair it, and retain better solutions. I
investigated unexpectedly long runtimes and traced much of the cost to a
parameter selected years earlier under different operating conditions.

I reconstructed the reasoning behind the old value, built repeatable benchmarks,
tested representative scenarios across markets, and compared both runtime and
solution quality. The production change was tiny; the evidence behind it was
the work. In the tested planning flow, runtime fell by roughly **95%** while
solution quality improved by **1–7%**, depending on the scenario.

## Reliability and ownership

- **Planning changes.** I owned changes to how forecast demand was grouped and
  scheduled across shifts, including a correctness fix where a timing constraint
  was calculated at the wrong aggregation level.
- **Incidents.** I worked on production failures involving concurrency,
  reactive-thread starvation, invalid inputs, regional calendar exceptions, and
  unavailable downstream systems—and turned recurring failure modes into
  durable fixes.
- **Handover.** Before the planner entered maintenance mode, I added detection,
  alerting, safe fallbacks, operator-facing error messages, legacy cleanup, and
  technical playbooks so it could run without its original team.

## Last-mile systems

My current team builds software for the final stage of delivery: the systems
used by drivers and hub teams as vehicles are loaded, routes are followed, and
delivery exceptions are handled.

My first major work there helped replace inconsistent free-text notes with
structured delivery information. The change crossed a GraphQL-facing backend,
a shared Java client, and a rules service. I corrected an ambiguous missing-data
contract, introduced batching instead of an accepted N+1 request pattern, and
sequenced the cross-repository changes so consumers stayed compatible.

## What I took from it

Question assumptions nobody has revisited. Measure the trade-off instead of
arguing it. Turning incidents into permanent fixes builds trust, and making a
system survive without its original team is real engineering.
