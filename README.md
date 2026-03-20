# strahil.dev

Personal website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js 18+
- npm

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Environment Variables

Copy `.env.local` and set values as needed:

- `RESEND_API_KEY` (optional for local builds, required to send contact emails)
- `RECAPTCHA_SECRET_KEY` (optional)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (optional)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)

If `RESEND_API_KEY` is missing, `/api/contact` returns `503` with a configuration error response.

## Deployment Notes

- Ensure `RESEND_API_KEY` is set in production if contact form delivery should be enabled.
- `robots.txt` and `sitemap.xml` are generated from `src/app/robots.ts` and `src/app/sitemap.ts`.
