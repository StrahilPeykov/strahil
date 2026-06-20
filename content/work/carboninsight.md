---
title: CarbonInsight
year: 2025
weight: 40
role: Full-stack, team project
stack: [Django, Next.js, PostgreSQL]
url: https://www.carboninsight.strahilpeykov.com/
source: https://github.com/StrahilPeykov/carboninsight-frontend
summary: A tool that helps manufacturing SMEs compute a product's carbon footprint and export it as a standards-compliant Digital Product Passport.
---

CarbonInsight helps manufacturing SMEs work out the carbon footprint of a
product and export it as a standards-compliant Digital Product Passport. It was
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
- **Standards compliance.** The finished passport exports in two industry
  interchange formats (AAS, the Asset Administration Shell, and SCSN), which was
  where most of the careful, specification-driven work lived.

The backend is Django and Django REST Framework over PostgreSQL with token auth;
the frontend is Next.js and TypeScript. Access is scoped per company throughout,
and the whole thing ships through CI with tests and coverage.
