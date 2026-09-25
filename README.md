# strahil

My personal site: a small index of real work, plus writing. 

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4, driven by a small CSS-variable token layer (see `app/globals.css`)
- Markdown content via `js-yaml` and `react-markdown`
- Hosted on Vercel

## Running locally

Use Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Build with `npm run build`.
If your global npm configuration uses a private registry, install these public
dependencies with `npm ci --registry=https://registry.npmjs.org`.

## Content

Work and writing are plain Markdown files, no CMS:

- `content/work/*.md`, project case notes
- `content/writing/*.md`, articles

Frontmatter fields:

| Field | Used by | Notes |
| --- | --- | --- |
| `title` | both | |
| `summary` | both | short blurb, also the meta description |
| `year` | work | shown in the project list |
| `date` | writing | `YYYY-MM-DD`, sorts newest first |
| `weight` | work | higher sorts first |
| `featured` | work | `true` selects a homepage entry, sorted by weight |
| `role`, `stack` | work | small metadata line |
| `url`, `source` | work | optional live and code links |
| `urlLabel`, `sourceLabel` | work | optional descriptive link labels |
| `overview` | work | opening paragraph, supports Markdown; appears before screenshots |
| `screenshots` | work | project images with `src`, `alt`, `width`, `height`, `caption`, and optional Markdown `credit`; assets live in `public/work/` |
| `video` | work | optional MP4 with `src`, `poster`, `width`, `height`, and `caption`; uses native controls, no autoplay, and `preload="none"` |

Adding a piece is just dropping a new `.md` file in the right folder.

## Themes

The whole look comes from one set of CSS variables
(`--bg --fg --panel --border --accent`), with secondary text derived as `--muted`.
The switcher in the header sets `data-theme` on `<html>` and remembers your
choice. To add a theme, add a block in `app/globals.css` and an entry in
`lib/themes.ts`.

## Design

The site uses plain backgrounds, a compact text column, and a shared work/writing
list. Monospace is reserved for the name, navigation, page titles, and metadata;
project titles and reading text use a proportional font. Dates have their own
line on phones. Sakura, Ocean, and Terminal retain their original canvas effects.

Research, design decisions, and review notes are in [docs/design-review.md](docs/design-review.md).
Screenshot sources and reproduction notes are in [docs/project-screenshots.md](docs/project-screenshots.md).

## Layout

- `app/`, pages, routes, and SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`)
- `components/`, header, footer, theme switcher, copy-email
- `lib/`, site config (`site.ts`), content loading, themes
- `content/`, the Markdown

## Configuration

Edit `lib/site.ts` for name, contact links, and the canonical `url` (used by
the sitemap, canonical tags, and Open Graph).
