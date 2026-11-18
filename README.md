# Professional Portfolio

https://jenaestuder.com

Next.js (App Router, TypeScript) + Tailwind CSS, exported as a static site and hosted on GitHub Pages.

## Develop

```bash
nvm use        # Node 22
npm install
npm run dev    # http://localhost:3000
npm run lint && npm run typecheck
```

## Edit content

All copy (skills, projects, email, links) lives in [lib/content.ts](lib/content.ts).

## Deploy (unchanged hosting: GitHub Pages, `gh-pages` branch)

```bash
npm run deploy   # builds to ./out and publishes it to the gh-pages branch
```

`public/CNAME` is copied into `out/` so the custom domain survives each deploy.

## Accessibility

Skip link, landmarks, one visible focus style and `prefers-reduced-motion` support.
Dark is the default theme for everyone; light is an opt-in toggle in the header (saved in `localStorage`). Tokens for both themes live in [app/globals.css](app/globals.css) and meet WCAG AAA (7:1) text contrast.
