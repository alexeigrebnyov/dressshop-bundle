12:42:04.466 Running build in Washington, D.C., USA (East) – iad1
12:42:04.467 Build machine configuration: 2 cores, 8 GB
12:42:04.477 Cloning github.com/alexeigrebnyov/dressshop-bundle (Branch: main, Commit: fc3d935)
12:42:04.478 Skipping build cache, deployment was triggered without cache.
12:42:04.696 Cloning completed: 219.000ms
12:42:04.949 Running "vercel build"
12:42:05.678 Vercel CLI 51.6.1
12:42:05.955 Running "install" command: `npm install --legacy-peer-deps && npm run build`...
12:42:19.266
12:42:19.267 added 83 packages, and audited 84 packages in 13s
12:42:19.267
12:42:19.268 17 packages are looking for funding
12:42:19.268   run `npm fund` for details
12:42:19.313
12:42:19.314 1 high severity vulnerability
12:42:19.314
12:42:19.314 To address all issues (including breaking changes), run:
12:42:19.315   npm audit fix --force
12:42:19.315
12:42:19.315 Run `npm audit` for details.
12:42:19.475
12:42:19.476 > build
12:42:19.476 > next build
12:42:19.476
12:42:19.758 [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
12:42:20.290 Attention: Next.js now collects completely anonymous telemetry regarding usage.
12:42:20.291 This information is used to shape Next.js' roadmap and prioritize features.
12:42:20.291 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
12:42:20.292 https://nextjs.org/telemetry
12:42:20.292
12:42:20.310    ▲ Next.js 15.6.0-canary.60 (Turbopack)
12:42:20.311    - Experiments (use with caution):
12:42:20.312      ✓ inlineCss
12:42:20.313      ✓ ppr
12:42:20.313      ✓ rdcForNavigations (enabled by `experimental.ppr`)
12:42:20.313      ✓ useCache
12:42:20.314
12:42:20.346    Creating an optimized production build ...
12:42:20.483 [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
12:42:33.475  ✓ Compiled successfully in 12.6s
12:42:33.478    Running TypeScript ...
12:42:37.942    Collecting page data ...
12:42:38.060 [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
12:42:38.388    Generating static pages (0/13) ...
12:42:38.491 [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
12:42:38.814 Skipping getMenu for 'next-js-frontend-header-menu' - Shopify not configured
12:42:39.209    Generating static pages (3/13)
12:42:39.210    Generating static pages (6/13)
12:42:39.246 Skipping getCollectionProducts for 'hidden-homepage-featured-items' - Shopify not configured
12:42:39.247 Skipping getCollectionProducts for 'hidden-homepage-carousel' - Shopify not configured
12:42:39.248 Skipping getMenu for 'next-js-frontend-footer-menu' - Shopify not configured
12:42:39.279 Skipping getCollections - Shopify not configured
12:42:39.321    Generating static pages (9/13)
12:42:39.323  ✓ Generating static pages (13/13) in 935ms
12:42:39.338    Finalizing page optimization ...
12:42:39.556
12:42:39.559 Route (app)                               Revalidate  Expire
12:42:39.559 ┌ ƒ /                                             1d      1w
12:42:39.559 ├ ƒ /_not-found                                   1d      1w
12:42:39.559 ├ ◐ /[locale]
12:42:39.559 ├   └ /[locale]
12:42:39.559 ├ ◐ /[locale]/product/[handle]
12:42:39.559 ├   └ /[locale]/product/[handle]
12:42:39.559 ├ ◐ /[locale]/search
12:42:39.559 ├   └ /[locale]/search
12:42:39.559 ├ ƒ /api/revalidate
12:42:39.560 ├ ○ /opengraph-image
12:42:39.560 ├ ◐ /product/[handle]
12:42:39.560 ├   └ /product/[handle]
12:42:39.560 ├ ○ /robots.txt
12:42:39.560 ├ ƒ /search                                       1d      1w
12:42:39.560 ├ ◐ /search/[collection]
12:42:39.560 ├   └ /search/[collection]
12:42:39.560 ├ ƒ /search/[collection]/opengraph-image
12:42:39.560 └ ƒ /sitemap.xml
12:42:39.560
12:42:39.560
12:42:39.560 ○  (Static)             prerendered as static content
12:42:39.560 ◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
12:42:39.560 ƒ  (Dynamic)            server-rendered on demand
12:42:39.560
12:42:39.857 Detected Next.js version: 15.6.0-canary.60
12:42:39.858 Running "npm build"
12:42:40.097 Unknown command: "build"
12:42:40.097
12:42:40.098
12:42:40.098 Did you mean this?
12:42:40.100   npm run build # run the "build" package script
12:42:40.100 To see a list of supported npm commands, run:
12:42:40.100   npm help
12:42:40.114 Error: Command "npm build" exited with 1