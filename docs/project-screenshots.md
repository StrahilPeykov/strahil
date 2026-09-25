# Project screenshots

Captured on 25 September 2026 through the browser at its normal 1280 × 720 viewport.
These are actual application screens, compressed to WebP without changing their
content. Each case study includes descriptive alternative text, a caption, and a
link to the full-size image. Original captures and temporary source checkouts are
in the ignored `.design-review/` directory.

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
