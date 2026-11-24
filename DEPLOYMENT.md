# Cloudflare deployment

This project builds a static site. No Astro server adapter is required.

## Cloudflare Pages

Connect the GitHub repository and use:

- Production branch: `main`
- Build command: `npm run check && npm run build`
- Build output directory: `dist`
- Node version: `22.12.0` (also pinned in `.node-version`)
- Build environment variable `SITE_URL`: your full public URL, including `https://`

If `SITE_URL` is unset, Cloudflare Pages supplies `CF_PAGES_URL` as a fallback.
Local builds otherwise use `http://localhost:4321`. Set `SITE_URL` before a
production build so canonical URLs, social metadata and the sitemap are correct.

## Cloudflare Workers static assets

The included `wrangler.jsonc` serves `dist` as an assets-only Worker named
`decimal-capital`. Use `npm run check && npm run build` as the build command and
`npx wrangler deploy` as the deploy command. Set `SITE_URL` to the public URL in
the build environment. Add a custom domain in Cloudflare when ready.

To validate packaging locally without deploying:

```sh
npx wrangler deploy --dry-run
```

## Content still pending

- The careers CTA has no destination and is intentionally inactive.
- Navigation contains placeholder links; several footer destinations are unset.
- Leadership portraits and LinkedIn destinations still need final content.
- Style guide and example pages remain available but are excluded from the sitemap
  and marked noindex.

References: [Cloudflare Pages / Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
and [Workers static assets](https://developers.cloudflare.com/workers/static-assets/get-started/).
