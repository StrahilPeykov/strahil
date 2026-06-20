# strahil

My personal site: a small index of real work, plus writing. Built to be read,
not to look like a template.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4, driven by a small CSS-variable token layer (see `app/globals.css`)
- Markdown content via `gray-matter` and `react-markdown`
- Hosted on Vercel

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build with `npm run build`.

## Content

Work and writing are plain Markdown files, no CMS:

- `content/work/*.md`, project case notes
- `content/writing/*.md`, articles

Frontmatter fields:

| Field | Used by | Notes |
| --- | --- | --- |
| `title` | both | |
| `summary` | both | short blurb, also the meta description |
| `year` | work | shown on the card |
| `date` | writing | `YYYY-MM-DD`, sorts newest first |
| `weight` | work | higher sorts first; the homepage shows the top entries |
| `role`, `stack` | work | small metadata line |
| `url`, `source` | work | optional live and code links |

Adding a piece is just dropping a new `.md` file in the right folder.

## Themes

The whole look comes from one set of CSS variables
(`--bg --fg --panel --border --accent`). Each theme overrides those five values.
The switcher in the header sets `data-theme` on `<html>` and remembers your
choice. To add a theme, add a block in `app/globals.css` and an entry in
`lib/themes.ts`.

## Layout

- `app/`, pages, routes, and SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`)
- `components/`, header, footer, theme switcher, copy-email
- `lib/`, site config (`site.ts`), content loading, themes
- `content/`, the Markdown

## Configuration

Edit `lib/site.ts` for name, contact links, and the canonical `url` (used by
the sitemap, canonical tags, and Open Graph).
