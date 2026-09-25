---
title: Backend engineering at Picnic
year: "2025–present"
weight: 60
featured: true
role: Backend Java developer
stack: [Java, Spring Boot, PostgreSQL, GraphQL]
summary: Java services for truck planning, delivery drivers, and hub operations.
overview: >-
  At Picnic, I investigated slow truck-planning runs and benchmarked changes
  that made the planning flow about **95% faster**, with **1–7% better solutions**
  in representative test scenarios. I now work on delivery systems for drivers
  and hub teams, including structured delivery information across several Java services.
---

I joined Picnic in September 2025 through its graduate Tech Academy and started
in the team responsible for planning truck movements between warehouses and
local delivery hubs. I worked on the planner itself, investigated production
problems, and helped prepare the service for handover. I later moved to a
last-mile team that builds software for delivery drivers and hub operations.

## Transport planning

The planner turns forecast or confirmed cargo demand into feasible truck
schedules across the Netherlands, Germany, and France. It groups cargo, respects
capacity and timing constraints, optimises routes, and publishes the resulting
plans to downstream warehouse systems.

Its central optimiser uses a Large Neighborhood Search: build a feasible plan,
repeatedly remove part of it, repair it, and retain better solutions. I
investigated unexpectedly long runtimes and traced much of the cost to a
parameter selected years earlier under different operating conditions.

I reconstructed the reasoning behind the old value and wrote repeatable
benchmarks for representative scenarios in each market. In those tests, the
planning flow ran about **95%** faster and produced solutions that were
**1–7%** better, depending on the scenario.

I also changed how forecast demand was grouped across shifts and fixed a timing
constraint that was being calculated at the wrong aggregation level. Production
support covered concurrency bugs, reactive-thread starvation, invalid inputs,
regional calendar exceptions, and unavailable downstream systems.

Before the planner entered maintenance mode, I added alerts, fallbacks,
operator-facing error messages, and technical playbooks. I also removed legacy
code that would otherwise have been left for the team taking over.

## Last-mile systems

My current team builds software for the final stage of delivery: the systems
used by drivers and hub teams as vehicles are loaded, routes are followed, and
delivery exceptions are handled.

My first major work there helped replace inconsistent free-text notes with
structured delivery information. The change crossed a GraphQL-facing backend,
a shared Java client, and a rules service. I corrected an ambiguous missing-data
contract, introduced batching instead of an accepted N+1 request pattern, and
sequenced the cross-repository changes so consumers stayed compatible.
