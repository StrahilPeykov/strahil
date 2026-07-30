---
title: CarbonInsight
year: 2025
weight: 40
role: Full-stack, team project
stack: [Django, Next.js, PostgreSQL]
url: https://carboninsight.strahil.dev
source: https://github.com/StrahilPeykov/carboninsight-frontend
summary: A full-stack tool for manufacturing SMEs to calculate product carbon footprints and support Digital Product Passport workflows.
---

CarbonInsight helps manufacturing SMEs work out the carbon footprint of a
product and prepare Digital Product Passport information. It was
my team's Bachelor End Project, built for an EU-funded manufacturing initiative.

The core is a supply-chain model: a product is a bill of materials made of other
products, and its footprint is computed recursively down that tree, rolling each
child's emissions up by quantity and splitting them across lifecycle stages.
Because suppliers' bills of materials can reference each other, saving one runs a
cycle check first so the graph can't close a loop on itself.

Two parts were the most interesting to get right:

- **Sharing without leaking.** Companies can request footprint data from each
  other through an approval flow, but a partner only ever sees the aggregated
  number, never the supplier's underlying emission breakdown.
- **Standards-oriented exports.** The project produced AAS (Asset Administration
  Shell) and SCSN interchange formats. This supported those workflows; it was
  not a claim of formal certification.

The backend is Django and Django REST Framework over PostgreSQL with token auth;
the frontend is Next.js and TypeScript. Access is scoped per company throughout,
and the whole thing ships through CI with tests and coverage.

The public demo is a mock copy of the project rather than a live production
system.
