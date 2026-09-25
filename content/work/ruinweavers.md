---
title: Ruinweavers
year: 2026
weight: 28
role: Personal project · playable prototype
stack: [TypeScript, Three.js, Rapier, WebRTC]
url: https://ruinweavers.strahil-peykov.workers.dev/
urlLabel: Play — keyboard and mouse
source: https://github.com/StrahilPeykov/Ruinweavers
sourceLabel: View source on GitHub
summary: A solo and co-op browser game with interacting elemental spells and physics-based combat.
overview: >-
  Ruinweavers is a browser game built around interacting elemental spells.
  I'm exploring how physics and a shared world can support combat, alone or
  with another player. The current prototype has four fights connected by shared
  route choices, upgrades between encounters, and a final boss.
video:
  src: /work/ruinweavers-route-gameplay.mp4
  poster: /work/ruinweavers-route-gameplay.webp
  width: 960
  height: 600
  caption: Two mages cast across stone cover in the Oblique court. Co-op gameplay from Run Topology 0.3; 30 seconds, no audio.
---

## Spells that change the world

Ember adds heat, Tide wets targets, Gale applies force, and Stone changes
structures. Their effects operate on shared properties: heating a wet target
produces steam, while weakening a structure makes a later impact more damaging.
In co-op, one player's spell can set up a reaction triggered by the other.

The [magic rules](https://github.com/StrahilPeykov/Ruinweavers/blob/main/docs/MAGIC.md)
work on the target's state, so these interactions don't need a separate rule for
every pair of spells. Rapier handles collisions and physical movement; Three.js
renders the world. The simulation is separate from rendering, which also lets
me exercise the combat rules in repeatable tests.

## Keeping co-op movement responsive

One player's browser runs the shared simulation and sends updates over WebRTC.
Waiting for each update would make the other player's movement feel delayed,
so their browser previews walking immediately, then reconciles it with the
host's position by replaying inputs the host hasn't acknowledged yet.

That [prediction](https://github.com/StrahilPeykov/Ruinweavers/blob/main/src/network/prediction.ts)
is deliberately limited to walking. Hits, health, spell outcomes, and dodges
remain the host's responsibility. Other characters move smoothly between
received snapshots. This keeps the responsiveness work separate from deciding
what happened in combat.

The game is still a prototype. The repository includes automated tests and
[recorded gameplay](https://ruinweavers.strahil-peykov.workers.dev/topology/)
used to compare room layouts and spell builds as it develops.
