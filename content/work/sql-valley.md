---
title: SQL Valley
year: "2025–2026"
weight: 50
featured: true
role: Core developer, open-source team project
stack: [React, TypeScript, SQLite, CodeMirror]
url: https://sqlvalley.com/
urlLabel: Try SQL Valley
source: https://github.com/HildoBijl/sqlvalley
sourceLabel: View source on GitHub
screenshots:
  - src: /work/sql-valley-exercise.webp
    alt: SQL Valley's join exercise with a SQL query in the editor and a table preview of its results.
    width: 1268
    height: 713
    caption: A join exercise on the live site, with a query running against the small teaching dataset. The names and positions are sample data.
    credit: "[SQL Valley](https://sqlvalley.com/), developed with TU/e. [Source and MIT licence](https://github.com/HildoBijl/sqlvalley)."
summary: Browser-based SQL practice with automatic feedback and saved learning progress, built with TU/e.
overview: >-
  SQL Valley lets students practise SQL without installing a database or creating
  an account. I helped turn an early prototype into a React and TypeScript
  application, working on the SQL editor, answer checking, and saved progress.
  My contribution ran from August 2025 to August 2026, with a handover in September.
---

I worked with Hildo Bijl at TU/e, who guided the educational design and reviewed
the architecture. Alexandra Boala worked on the skill-tree interface, and
Razvan Efros contributed exercises and sample data. My focus was the application
and the infrastructure behind the learning experience.

## Checking an answer

Two different SQL queries can answer the same question. The checker runs the
student's query and a reference query against the exercise database, then
compares the resulting tables. SQLite runs in the browser through SQL.js;
CodeMirror provides the editor.

I moved exercise checking into a [shared result-comparison implementation](https://github.com/HildoBijl/sqlvalley/commit/bcfd944daea8c1ad85acb0a23b27cc40162b7dd0).
The comparison rules depend on what the exercise teaches: row order matters
when practising sorting, while a different column order may be fine elsewhere.
Invalid SQL gets an error; a valid query with the wrong result gets feedback
and another attempt.

## Keeping progress when content changes

Saving entire exercises in the browser left learners with old prompts and
solutions after content updates. I changed persistence to keep an exercise's
identity and version alongside the learner's input and progress, and resolve
the content from the current definitions.

The [migration](https://github.com/HildoBijl/sqlvalley/commit/4f10bfc676e602a8ab484bd3ec274390ea604e70)
kept module progress but discarded old attempts that could not be restored
under the new format. That was a deliberate limit on what we carried forward.

## Separating the engine from SQL

Later work separated the general exercise lifecycle from SQL execution and
grading. The application supplies the curriculum and storage; the engine
manages an exercise without importing the site's concrete content.

I [introduced a storage adapter](https://github.com/HildoBijl/sqlvalley/commit/c821ef058ae08a62cfff4e56532121a6a4c8525a)
before extracting the engine and related tools into workspace packages. Moving
files alone would have left the dependencies tangled. Hildo took over further
development after the handover, and the project has continued to evolve.
