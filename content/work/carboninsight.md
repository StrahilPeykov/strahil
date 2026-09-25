---
title: CarbonInsight
year: 2025
weight: 40
featured: true
role: Full-stack developer and project lead
stack: [Django, Next.js, PostgreSQL]
url: https://carboninsight.strahil.dev
urlLabel: Visit CarbonInsight
source: https://github.com/StrahilPeykov/carboninsight-frontend
sourceLabel: View frontend source
screenshots:
  - src: /work/carboninsight-product.webp
    alt: CarbonInsight product screen with a calculated footprint and a table of component and transport emissions.
    width: 1280
    height: 720
    caption: Product footprint and component breakdown in the original app, running locally with sample data. Company names and numbers come from test fixtures.
summary: A team project for calculating a product's carbon footprint from its bill of materials.
overview: >-
  A product's carbon footprint depends on the components and processes behind
  it. For my Bachelor End Project, I helped organise our team and worked across
  CarbonInsight's frontend and backend. We built a prototype that rolls emissions up
  through a bill of materials and lets companies request footprint data from suppliers.
---

We built CarbonInsight with
[Brainport Industries and TU/e](https://www.brainportindustries.com/nl/nieuws-en-agenda/nieuws/samenwerking-tussen-brainport-industries-en-tu-e-leidt-tot-carboninsight-een-praktische-innovatie-voor-mkb-bedrijven-in-de-maakindustrie)
as part of the EU-funded AI REDGIO 5.0 initiative, to help manufacturing SMEs
calculate product footprints and prepare Digital Product Passport information.

## Calculating the footprint

The core is a supply-chain model: a product is a bill of materials made of other
products, and its footprint is computed recursively down that tree, rolling each
child's emissions up by quantity and splitting them across lifecycle stages.
Because suppliers' bills of materials can reference each other, saving one runs a
cycle check first so the graph can't close a loop on itself.

Companies can request footprint data from each other through an approval flow.
A partner sees the aggregated result, but not the supplier's underlying
emission breakdown.

We also implemented exports in AAS (Asset Administration Shell) and SCSN
formats, although the project was not formally certified against either
standard.

The backend is Django and Django REST Framework over PostgreSQL with token auth;
the frontend is Next.js and TypeScript. Access is scoped per company throughout,
and the whole thing ships through CI with tests and coverage.
