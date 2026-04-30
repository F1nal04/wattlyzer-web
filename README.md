# wattlyzer-web

Marketing website for [Wattlyzer](https://github.com/F1nal04/wattlyzer-app) — a PWA that reads the sun, the spot price, and your roof, then tells you the one best window today to run your dishwasher, heat pump, or wall box.

Built with Astro 6, plain CSS, and no client-side framework. EN/DE bilingual, animated sky hero, SSR via Netlify.

## Stack

- [Astro 6](https://astro.build) — SSR, file-based routing
- [@astrojs/netlify](https://docs.astro.build/en/guides/integrations-guide/netlify/) — deployment adapter
- Fraunces · DM Sans · JetBrains Mono (Google Fonts)

## Development

Requires Node >= 22.12.0 and [bun](https://bun.sh).

```bash
bun install       # install dependencies
bun dev           # dev server at localhost:4321
bun build         # production build → dist/
bun preview       # preview production build locally
```

## Deployment

Connect the repo to Netlify. It auto-detects Astro, runs `bun run build`, and publishes `dist/`.

## App

The PWA this site promotes lives at [F1nal04/wattlyzer-app](https://github.com/F1nal04/wattlyzer-app).
