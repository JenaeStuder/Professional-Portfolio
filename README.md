# Professional Portfolio

https://jenaestuder.com

Next.js (App Router, TypeScript) + Tailwind CSS, exported as a static site and hosted on GitHub Pages.

## Develop

```bash
nvm use        # Node 24 (see .nvmrc)
npm install
npm run dev    # http://localhost:3000
npm run lint && npm run typecheck
npm run format          # Prettier (also sorts Tailwind classes); CI fails on unformatted code
npm run build && npm start   # production build served from ./out
```

## Edit content

Skills, projects, work descriptions, links and copy live in [lib/content.ts](lib/content.ts).
The email address is deliberately **not** in the page HTML; it is assembled in the browser from
[lib/email.ts](lib/email.ts).

The resume PDF lives in `public/pdf/`; its path is `resumeFile` in `lib/content.ts`. If the file is
missing, the download buttons simply don't render.

## Deploy

Deploys run through GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

| Branch    | URL                                                                  |
| --------- | -------------------------------------------------------------------- |
| `master`  | https://jenaestuder.com (production)                                 |
| `develop` | https://jenaestuder.com/staging/ (preview, `noindex`, with a banner) |

Both branches build on every push and ship together as one GitHub Pages site. Pull requests run
lint, typecheck and build without deploying. `public/CNAME` keeps the custom domain.

## Accessibility

Skip link, landmarks, one visible focus style and `prefers-reduced-motion` support.
Dark is the default theme for everyone; light is an opt-in toggle in the header (saved in
`localStorage`). Tokens for both themes live in [app/globals.css](app/globals.css) and meet WCAG AAA
(7:1) text contrast, including over the background glow (measured from rendered pixels).

## Performance

Lighthouse (local production build): Accessibility, Best Practices and SEO score 100 on mobile and
desktop; Performance is 100 on desktop and 98 to 99 on mobile. The remaining mobile points are React/Next
runtime start-up, not site code.
