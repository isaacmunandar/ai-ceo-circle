# AI CEO Circle

Production landing page for **AI CEO Circle by MAXY AI** — an executive AI leadership program for CEOs, founders, and C-Suite leaders.

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

## Requirements

- Node.js 20 or newer recommended
- pnpm
- PowerShell 7 on Windows

Check your local versions:

```powershell
node --version
pnpm --version
```

## Local setup

Install dependencies:

```powershell
pnpm install
```

Create a local environment file:

```powershell
Copy-Item .env.example .env
```

Then fill the required values in `.env`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Sends application emails through Resend. |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical site URL used by SEO metadata, sitemap, robots, and JSON-LD. Defaults to `https://aiceocircle.com` if omitted. |

Never commit `.env` or production secrets.

## Development

Start the local development server:

```powershell
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Run the local Next.js development server. |
| `pnpm lint` | Run Next.js lint checks. |
| `pnpm build` | Create a production build and run build-time validation. |
| `pnpm start` | Serve the production build locally after `pnpm build`. |

## Recommended workflow

Before opening a PR or deploying:

```powershell
pnpm lint
pnpm build
```

For production-like local testing:

```powershell
pnpm build
pnpm start
```

## Project structure

```text
app/
  api/apply/route.js        Application form API route
  layout.jsx                Global metadata, fonts, icons, viewport
  page.jsx                  Landing page entry and structured data
  robots.js                 Search and AI crawler rules
  sitemap.js                Sitemap generation

src/components/landing/
  LandingPage.jsx           Main landing page composition
  data.js                   Centralized landing page copy and content
  seo.js                    SEO/GEO metadata and JSON-LD data
  sections/                 Page sections
  ui/                       Reusable landing UI primitives

public/
  favicon/                  Favicons and web manifest
  images/                   Static image assets
  llms.txt                  GEO/AI-search summary file
```

## SEO and GEO notes

This project includes:

- Next.js metadata for title, description, canonical URL, Open Graph, and Twitter Cards.
- JSON-LD structured data for `WebSite`, `Organization`, `WebPage`, `EducationalOccupationalProgram`, and `FAQPage`.
- `robots.txt` with explicit access for major search and AI crawlers.
- `sitemap.xml`.
- `public/llms.txt` for AI-search/GEO extraction.

After deployment, validate:

- Google Rich Results Test
- Schema.org Validator
- Google Search Console sitemap submission
- Bing Webmaster Tools sitemap submission

## Content management

Most landing page copy lives in:

```text
src/components/landing/data.js
```

Prefer updating content there instead of hardcoding copy inside section components. This keeps SEO schema, FAQ content, and page sections easier to review.

## Design system

Read `DESIGN.md` before changing visual direction.

Current direction:

- Executive editorial visual language
- Deep navy background
- Refined serif display type
- Restrained lava-orange accent
- Cinematic Jakarta/SEA executive positioning

Keep UI changes consistent with existing tokens, spacing, typography, and motion behavior.

## Form and email flow

The application form posts to:

```text
app/api/apply/route.js
```

Email delivery depends on `RESEND_API_KEY`. If form submission fails locally, verify:

1. `.env` exists.
2. `RESEND_API_KEY` is valid.
3. The sender/domain configuration in Resend is production-ready.

## Deployment checklist

Before deploying:

- Confirm `NEXT_PUBLIC_SITE_URL` matches the production domain.
- Run `pnpm lint`.
- Run `pnpm build`.
- Test the application form with a safe test submission.
- Validate `/robots.txt`, `/sitemap.xml`, and `/llms.txt` after deployment.
- Check Open Graph preview on LinkedIn, WhatsApp, and X/Twitter.
- Validate structured data using Schema.org or Google Rich Results Test.

## Git and security rules

- Do not commit `.env` files.
- Do not commit API keys, Resend keys, cookies, or private credentials.
- Do not rewrite Git history or force push without explicit approval.
- Do not modify `pnpm-lock.yaml` unless dependencies actually change.
- Keep changes minimal and tied to the requested scope.

## Troubleshooting

If dependencies behave unexpectedly:

```powershell
pnpm install
```

If production behavior differs from development:

```powershell
pnpm build
pnpm start
```

If SEO URLs are wrong, check `NEXT_PUBLIC_SITE_URL`.

If emails are not sent, check `RESEND_API_KEY` and Resend domain verification.
