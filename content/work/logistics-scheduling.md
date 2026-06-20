---
title: Transport planning at Picnic
year: 2025
weight: 50
role: Software engineer
stack: [Java, Spring Boot, PostgreSQL]
summary: Backend work on the system that plans how groceries move between Picnic's warehouses and local delivery depots, route optimisation, reliability, and hardening the service for handover.
---

The system plans how cargo moves between Picnic's warehouses and local delivery
depots: grouping it into truck-sized loads, then scheduling those loads onto
routes, trucks, drivers, and departure times, and optimising the whole plan
against hard constraints (driver shifts, vehicle capacity, facility opening
hours, delivery deadlines). It runs continuously across multiple countries
under a tight runtime budget.

## The work I'm proudest of

It started from a question about an assumption nobody had revisited. The core
route-optimisation loop is a large-neighborhood search: it builds a feasible
plan, then repeatedly tears out part of it and rebuilds it, keeping
improvements. One parameter controls how much of the plan gets torn up each
iteration. It had been set years earlier, when runtime wasn't a concern, and
never re-examined.

I benchmarked a wide range of values across markets, measuring runtime, cost,
and plan quality, and found that a much smaller, randomised range let the
repair step make many small, high-quality adjustments instead of repeatedly
throwing away good structure. The shipped change was two lines. The result was
roughly a 95% reduction in planning runtime while solution quality slightly
improved, which also makes the planner scale to larger sites. The value was in
the investigation, the benchmarking rigor, and a careful shadow-first rollout,
not the diff.

## The rest of it

- **Feature ownership.** A multi-month change to how cargo is grouped so the
  day's workload spreads more evenly, which is more robust when forecasts
  differ from what actually happens. This included a tricky correctness fix
  where doing a deadline calculation at the wrong level of grouping could
  produce illegal schedules.
- **Reliability.** On-call response and incident leadership, with a focus on
  turning recurring incidents into permanent fixes rather than band-aids, for
  example a job-claiming race condition between pods and a reactive-threading
  bug that was starving a small event-loop thread pool.
- **Hardening for handover.** As the system moved toward maintenance mode, I
  did much of the work to let it run without a dedicated team: failure
  detection and alerting, graceful degradation when upstream data is missing,
  and operational playbooks.

## What I took from it

Question the assumptions nobody has revisited. Turning incidents into permanent
fixes builds trust faster than shipping features. And the unglamorous work of
making a system survive without you is real engineering.
