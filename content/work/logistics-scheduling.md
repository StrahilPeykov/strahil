---
title: Backend engineering at Picnic
year: "2025–present"
weight: 60
featured: true
role: Backend Java developer
stack: [Java, Spring Boot, PostgreSQL, GraphQL]
summary: Java services for truck planning, delivery drivers, and hub operations.
screenshots:
  - src: /work/picnic-karlsruhe.webp
    alt: A row of Picnic electric delivery vehicles parked beside an industrial building in Karlsruhe.
    width: 1440
    height: 859
    caption: Picnic delivery vehicles in Karlsruhe, July 2024.
    credit: >-
      Photo: [Ikar.us](https://commons.wikimedia.org/wiki/User:Ikar.us),
      [“PiCNiC lorries” / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:PiCNiC_lorries.jpg),
      [CC BY 3.0 DE](https://creativecommons.org/licenses/by/3.0/de/).
      Resized and converted to WebP.
overview: >-
  At Picnic, I investigated slow truck-planning runs and benchmarked changes
  that reduced planning runtime by about **95%**, with **1–7% better solutions**
  in representative test scenarios. I now work on delivery systems for drivers
  and hub teams, including structured delivery information across several Java services.
---

I joined Picnic in September 2025 through its graduate Tech Academy and started
in the team responsible for planning truck movements between warehouses and
local delivery hubs. I worked on the planner itself, investigated production
problems, and helped prepare the service for handover. I later moved to a
last-mile team that builds software for delivery drivers and hub operations.

## Transport planning

Picnic [introduced its Transport Planning System in July 2023](https://jobs.picnic.app/en/blogs/2023-in-a-nutshell-ride-along)
to automate more of the scheduling between fulfilment centres and hubs.

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
changes reduced planning runtime by about **95%** and produced solutions that
were **1–7%** better, depending on the scenario.

I also changed how forecast demand was grouped across shifts and fixed a timing
constraint that was being calculated at the wrong aggregation level. Production
support covered concurrency bugs, reactive-thread starvation, invalid inputs,
regional calendar exceptions, and unavailable downstream systems.

Before the planner entered maintenance mode, I added alerts, fallbacks,
operator-facing error messages, and technical playbooks. I also removed legacy
code that would otherwise have been left for the team taking over.

I replaced manual deployments with a Spinnaker pipeline for development and
production on Kubernetes.

## Last-mile systems

My current team builds software for the final stage of delivery: the systems
used by drivers and hub teams as vehicles are loaded, routes are followed, and
delivery exceptions are handled.

I joined a delivery route for an afternoon and used the product in context.
Seeing how little time a driver has at each stop made me pay more attention to
where information appears and how it is worded.

My first major work there helped replace inconsistent free-text notes with
structured delivery information. The change crossed a GraphQL-facing backend,
a shared Java client, and a rules service. I corrected an ambiguous missing-data
contract, introduced batching instead of an accepted N+1 request pattern, and
sequenced the cross-repository changes so consumers stayed compatible.

## Further reading

Thomas Barendse's 2022 TU Delft thesis,
[Truck Routing for an Online Grocer](https://repository.tudelft.nl/record/uuid:a1e63800-f925-4418-ad80-24079a2dfe8d),
explores Adaptive Large Neighbourhood Search for Picnic's truck-routing problem.
It provides related algorithmic background; the benchmarks above describe my own
later work.
