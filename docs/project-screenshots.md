# Project images

Application screenshots were captured on 25 September 2026 through the browser at its normal viewport.
These are actual application screens, compressed to WebP without changing their
content. Each case study includes descriptive alternative text, a caption, and a
link to the full-size image. Original captures and temporary source checkouts are
in the ignored `.design-review/` directory.

## SQL Valley

- Asset: `public/work/sql-valley-exercise.webp` (38 KB, 1268 × 713).
- Source: https://sqlvalley.com/skill/join-tables?tab=practice
- State: the public Join Tables exercise, with the small teaching dataset and
  an entered query previewed before submission. No account required.
- Query: `SELECT DISTINCT first_name, last_name, position FROM employees LEFT JOIN contracts USING (e_id);`
- Scrolled to the practice panel and captured the visible viewport, including
  the query editor and first result rows. Converted to WebP; no interface or
  data changes.
- The project is collaborative software developed with TU/e. Its source is at
  https://github.com/HildoBijl/sqlvalley under the MIT licence, copyright
  (c) 2025 Hildo Bijl. A copy of that notice is retained beside the image in
  `public/work/sql-valley-LICENSE.txt`.
- The screenshot shows the public site as captured, not a claim that the live
  deployment contains every later contribution described in the case study.
- The case study links specific authored commits for result comparison,
  persistence migrations, and storage injection. It describes the author's
  August 2025–August 2026 contribution and September handover.

## Picnic photograph

- Asset: `public/work/picnic-karlsruhe.webp`.
- Original title: “PiCNiC lorries”; photographer: Ikar.us; photographed in
  Karlsruhe in July 2024.
- Source: https://commons.wikimedia.org/wiki/File:PiCNiC_lorries.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/c/cc/PiCNiC_lorries.jpg
- Licence: Creative Commons Attribution 3.0 Germany,
  https://creativecommons.org/licenses/by/3.0/de/.
- Downloaded on 25 September 2026. Resized from 2976 × 1776 to 1440 × 859 and
  converted to WebP; no additional cropping or retouching.
- The displayed caption identifies the place and date; the credit links the
  photographer, titled source, and licence and identifies the transformations.
  The photo illustrates Picnic's delivery operation and predates the author's
  employment. It does not depict the author's team or a claimed project result.
- This third-party asset retains its CC BY 3.0 DE licence, independently of the
  repository's code licence.

## FrameGuessr

- Asset: `public/work/frameguessr-round.webp` (34 KB).
- Source: https://frameguessr.strahil.dev/day/2025-11-23
- State: archived puzzle, third clue, one guess remaining. No account required.
- The movie still is part of the original game's interface; it is not original
  portfolio artwork. Movie imagery belongs to its respective rights holders.

## CarbonInsight

- Asset: `public/work/carboninsight-product.webp` (45 KB).
- Frontend: https://github.com/StrahilPeykov/carboninsight-frontend at
  `fecc86d5135b0560cee07cdf226d9cde9594033c`.
- Backend: https://github.com/StrahilPeykov/carboninsight-backend at
  `f52c95705ad582d2183d4f6407eebed41ceadcce`.
- The public frontend loaded, but its test-account login returned “Failed to
  fetch.” To capture working functionality, both original applications were run
  locally, with a fresh SQLite database populated by the backend's existing
  `core.tests.setup_functions.tech_companies_setup` helper.
- Local-only configuration: API on port 8010, frontend on 3010,
  `NEXT_PUBLIC_API_URL=http://127.0.0.1:8010/api`, localhost CORS origin, and
  Next.js `devIndicators: false`. The product UI and calculations were unchanged.
- Screen: product list → sample iPhone 17 → emissions breakdown. The public
  fixture's Apple user provides the company's sample product view.
- All company names, products, and numbers shown are test data, not customer
  endorsements or measured product footprints. This is stated beside the image
  on the public page.

To reproduce, install the frontend's locked dependencies, install the backend's
requirements in Python 3.12, run Django migrations, then call the fixture helper
with a `unittest.TestCase` instance whose `client` is a DRF `APIClient`. Start both
servers with the local configuration above and use the fixture account from the
test helper. No production data or credentials are required.
