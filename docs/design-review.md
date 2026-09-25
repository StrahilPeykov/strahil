# Design review · September 2026

The brief was to keep an already-liked personal site, remove the parts that feel
generically AI-generated, research the decisions, and inspect the actual result.
The owner specifically asked to keep the animated themes as they are.

## Findings

The problem was an accumulation of decorative conventions. A dot grid covered
the background; dotted leaders connected project titles to dates; coral numbers
preceded every project; most labels and titles used monospace. Each choice was
reasonable in isolation, but together they made a small personal site feel like
an imitation of a code editor. The numbers did not describe rank, chronology, or
a sequence the visitor needed to follow.

On the original 390px phone view, the first project title had to share its line
with both a number and a date. It wrapped while shorter titles left their dates
in different horizontal positions. The dot texture remained behind the text.
These were concrete reasons to simplify the layout, independently of whether
any individual pattern could be called an AI tell.

The strongest material was already specific: the Picnic planner investigation,
the ASML recovery story, CarbonInsight's cycle detection, a movie guessing game,
and a piece about game preservation. The visual design should make those easy
to find. It does not need to invent personality for them.

## Research and its application

### Writing: specificity, not a blacklist

[Wikipedia's Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
describes generic praise, superficial significance, canned rhetorical contrasts,
and the loss of specific detail. It also warns against treating the signs as
proof of authorship. It concerns writing, not the provenance of visual design.

Applied here: remove the About paragraph about software connected to “real
operations” and understanding needs beyond a ticket. It could describe almost
any engineer. Keep the actual biography and the candid interests paragraph.
Keep the technical case studies, including their qualifications. A benchmark
result stays described as a result in representative tests; a hackathon demo
stays a prototype. Do not mechanically delete every dash or first-person phrase.

[GOV.UK's content principles](https://www.gov.uk/government/publications/govuk-content-principles-conventions-and-research-background/govuk-content-principles-conventions-and-research-background)
distinguish clear language from a particular institutional voice. Their advice
on specific wording and information-bearing beginnings is useful without
adopting a government website's tone.

Applied here: Energiekompas's summary now tells readers about home energy
measures and subsidies. The presentation and event history remain in its case
study. FrameGuessr's summary explains what visitors can play; its implementation
stack remains on the detail page. The introduction describes the people who use
the delivery software and separates current work from earlier experience.

### Layout: fewer competing signals

[NN/g's aesthetic and minimalist design guidance](https://www.nngroup.com/articles/aesthetic-minimalist-design/)
is about reducing irrelevant competition for attention, not making everything
look sparse. [Its study of minimalist sites](https://www.nngroup.com/articles/characteristics-minimalism/)
also cautions that a popular visual convention does not automatically serve
visitors. Removing useful navigation or obvious interactions would be a loss.

Applied here: remove the background dot texture, project numbers, and dotted
leaders. Keep project summaries, years, navigation, contact options, and the
original compact column. Keep a thin solid divider to separate adjacent links.
Keep all six themes and the three original canvas animations. The dots in the
theme picker indicate selection and therefore still have a job.

[NN/g's visual hierarchy guidance](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)
explains how scale, contrast, and proximity communicate importance.

Applied here: project titles use a stronger proportional font; dates remain
small and monospaced. Titles and descriptions share a left edge. Dates align on
the right on wide screens and occupy a separate line below the title on phones.
Writing uses the same list treatment, with summaries that help readers decide
whether to open an article. Hover and keyboard focus underline project titles.

### Typography and interaction

[Butterick's typography overview](https://practicaltypography.com/typography-in-ten-minutes.html)
puts body text, its size, line spacing, and line length ahead of decorative
type choices. It is a useful starting point, not a reason to replace the site's
fonts with a fashionable alternative.

Applied here: keep Fira Code for the name, navigation, page titles, and metadata.
Keep Inter for body text, and use it for project titles and reading subheadings
as well. Reading text is 17px with a 65ch maximum measure. Contact links use
proportional text and visible underlines. On phones, the email occupies its own
line, followed by GitHub, LinkedIn, and CV together.

[WCAG's contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
provides a measurable check: small text needs at least 4.5:1 contrast against its
background. Extra opacity on already-muted footer text undermined legibility.
The old paper, dark, and sakura accent shades also needed attention for small
coloured links.

Applied here: remove the footer opacity reductions, strengthen secondary text,
and slightly adjust those text accent colours within their existing palette.
The canvas artwork, animation timing, and effects are unchanged. The theme
picker now has a labelled listbox, arrow/Home/End navigation, Escape dismissal,
and focus restoration. Copying the email announces success to assistive tech.

The footer's broad privacy assertion was replaced with a short factual label
and a link to [Vercel's analytics documentation](https://vercel.com/docs/analytics/privacy-policy).
That gives interested readers the actual provider's explanation.

### References, not templates

I inspected [Frank Chimero's homepage](https://frankchimero.com/) and
[Maggie Appleton's homepage](https://maggieappleton.com/) in the browser and read
[Jeremy Keith's homepage](https://adactio.com/). These are useful precisely
because they have different approaches. Chimero's direct index demonstrates
how little ornament a personal site needs, though its small, faint secondary
type is not something to copy here. Appleton's prominent typography serves a
site about visual essays; copying its scale into this portfolio would bury the
work. Keith's current personal material illustrates how actual content gives a
site character. None supplied a layout to reproduce.

[Anthropic's account of evaluating frontend design](https://www.anthropic.com/engineering/harness-design-long-running-apps)
separates design, originality, craft, and functionality. It also describes how
evaluation prompts can produce their own visual convergence, and how later
iterations can be more complex without being preferable. That supports a
bounded critique here: removing a dot grid should not trigger a replacement
with oversized serif headings, ornamental diagrams, fake grain, or new cards.

## Visual review and scope

The first revision improved project-title wrapping but left CV stranded on a
second contact line on mobile. The second pass gave the email its own row. It
also corrected an existing CSS cascade issue that prevented link-colour
utilities from taking effect, and gave article back-links explicit block sizing
so their vertical spacing works.

The site remains a compact, text-led portfolio. It has no new branding claims,
generated illustrations, invented anecdotes, or added project outcomes. The
initial home-page revision kept the same four work entries. The full case studies and the
published essay were retained. This is a design and editorial review, not an
independent verification of every statement in those case studies.

The follow-up below adds real project screenshots and more deliberate project
selection. A homepage writing section remains deferred at the user's request.

Local before/after screenshots are saved in `.design-review/` (gitignored).
The implementation is intended to be reviewed locally before publication.

## Validation

- Production build passed: 25 generated pages/assets, including all work pages
  and the published writing entry. TypeScript and `git diff --check` passed.
- All 11 content pages were opened at 320, 390, 768, and 1280px widths: 44 layout
  checks, each with one H1 and no horizontal page overflow. Screenshots were
  inspected for the homepage, case-study reading layout, About, and themes.
- HTTP checks passed for the content routes, CV PDF, sitemap, robots file, and
  representative Open Graph images. The draft route and an unknown page returned
  404 in production.
- Theme changes, keyboard arrows, Home/End, Escape, focus restoration, and saved
  selection across reload were exercised in the browser. Copy-email displayed
  its confirmation and updated its live status message. No browser warnings or errors were
  reported during the final checks.
- The three animation components have no source changes.
- Compatible dependency updates brought the locked versions to Next.js 16.3.6,
  js-yaml 4.3.2, nanoid 3.3.19, and sharp 0.35.4. The npm audit reported zero
  vulnerabilities after the updates. No new production dependency was added.

Text contrast calculated from the browser's theme variables:

| Theme | Body | Secondary | Accent |
| --- | ---: | ---: | ---: |
| Dark | 10.50:1 | 6.22:1 | 5.00:1 |
| Paper | 10.98:1 | 4.80:1 | 5.09:1 |
| Sakura | 10.30:1 | 4.63:1 | 5.01:1 |
| Ocean | 11.19:1 | 6.36:1 | 7.23:1 |
| Copper | 11.00:1 | 6.22:1 | 5.62:1 |
| Terminal | 15.38:1 | 7.86:1 | 11.46:1 |

These are text-versus-base-background measurements, not an accessibility
certification or an analysis of every animation frame. Testing used the Codex
in-app browser; it was not a physical-device or multi-browser test campaign.

## Follow-up: project evidence and case-study openings

Implemented the requested recommendations 1, 2, 3, and 5:

- Captured the working FrameGuessr archive and the original CarbonInsight app.
  CarbonInsight's public login could not reach its backend, so the local capture
  uses the original project's test fixtures, explicitly identified in its
  caption. See [capture provenance](project-screenshots.md).
- Added responsive WebP screenshots, descriptive alt text, captions, and links
  to full-size originals. Both assets together are under 80 KB before Next.js
  image optimisation.
- Made homepage selection explicit with `featured`, replacing ASML with
  FrameGuessr. ASML remains in the complete work list and retains its case study.
- Added direct openings to all six case studies and surfaced Picnic's benchmark
  results with their test-scenario qualification intact.
- Replaced generic outbound link labels with destination-specific text.
- Left the homepage writing section deferred and all three animated theme
  components unchanged.

Follow-up validation: production build and TypeScript passed. Homepage,
FrameGuessr, CarbonInsight, and Picnic were checked at 320, 390, 768, and 1280px
(16 layouts), each with one H1 and no horizontal overflow. Screenshots were
visually reviewed at desktop and narrow mobile widths; both images loaded,
and full-size links expose the corresponding assets. Source asset HTTP checks
and `git diff --check` passed. No new production dependency was needed.
