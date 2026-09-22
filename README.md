# Flynn James — B2B Sales Portfolio

Production-ready multi-page portfolio for Flynn James, Senior B2B SDR and appointment-setting specialist.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm install
npm run lint
npm run build
```

The production bundle is written to `dist/`.

Production URL: `https://flynnjamespontino-porfolio.onrender.com/`

XML sitemap: `https://flynnjamespontino-porfolio.onrender.com/sitemap.xml`

Crawler rules: `https://flynnjamespontino-porfolio.onrender.com/robots.txt`

## Render deployment

The included `render.yaml` is configured for a Render Static Site:

| Setting | Value |
|---|---|
| Service Type | Static Site |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Rewrite | `/*` → `/index.html` |

`npm install` is used because this source archive intentionally does not depend on a checked-in lockfile. Render resolves the declared semver ranges in `package.json` during deployment.

## SEO and performance

- Page-specific titles, descriptions, canonicals, Open Graph, and Twitter metadata
- WebPage/ProfilePage and BreadcrumbList JSON-LD generated per route
- Person, ProfessionalService, and WebSite structured data in the document shell
- Crawlable `/about`, `/services`, `/experience`, `/case-studies`, `/samples`, and `/contact` routes
- Sitemap and robots.txt
- Semantic navigation links with SPA navigation preserved
- Descriptive image alt text and explicit image dimensions where applicable
- Responsive page-photo backgrounds with page-specific focal positioning, stronger image visibility, and readable content overlays
- Consistent homepage-style navigation on every route without a redundant visible breadcrumb bar
- Custom SVG favicon and updated Render-domain canonical/structured-data URLs
- Lightweight transform-only ambient animation with `prefers-reduced-motion` support
- No additional runtime dependencies added
- Long-lived immutable caching for built assets on Render

## Routing

The app uses the History API for clean production URLs while continuing to understand legacy `#/...` links. Render's SPA rewrite serves `index.html` for direct route requests and refreshes.


## Google Search Console

Production sitemap: `https://flynnjamespontino-porfolio.onrender.com/sitemap.xml`

Production robots file: `https://flynnjamespontino-porfolio.onrender.com/robots.txt`

Use a URL-prefix Search Console property for `https://flynnjamespontino-porfolio.onrender.com/`, verify ownership, deploy the latest build, then submit `sitemap.xml`. The build now validates that the sitemap and robots files are copied into `dist/` before deployment completes.

## Blog

The portfolio includes a crawlable `/blog` hub plus five evergreen B2B outbound articles covering cold calling, appointment setting KPIs, cadences, meeting show rates, and SDR hiring.

## Contact + EmailJS

The `/contact` route is a straightforward, conversion-focused inquiry page. There is no website calendar or booking workflow. The same centralized inquiry handler is used by the homepage contact form and the dedicated Contact page.

### Two-template workflow

1. Visitor submits the inquiry form.
2. EmailJS sends the complete submission to `va.flynnjames@gmail.com` using `template_dhede6o`.
3. EmailJS sends the visitor confirmation using the linked Auto-Reply template `template_user_confirmation`.
4. The visitor sees an immediate success state on the website.
5. The owner can reply directly to the visitor because the owner template uses `{{reply_to}}`.

### Form fields

Required: `name`, `email`, `company`, `serviceNeeded` / `need`, and `message`.

Optional: `phone`, `targetMarket`, and `meetingTarget`.

Additional tracking context: `form_type`, `submitted_at`, `source_page`, `page_url`, `page_path`, and `user_agent`.

A hidden `website` honeypot provides basic spam protection without adding a dependency or changing the visual design.

### EmailJS setup

The project loads EmailJS from:
`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`

Current credentials are centralized in `src/analytics.ts` under `EMAILJS_CONFIG`.

1. Open the EmailJS dashboard.
2. Confirm service ID `service_av4pfmh` is connected to the sending mailbox.
3. Confirm public key `crekfvN6H352DXAfx` is active.
4. Configure `template_dhede6o` as the **Owner Notification** template.
5. Set Owner Notification To Email to `va.flynnjames@gmail.com`.
6. Set Owner Notification Reply-To to `{{reply_to}}`.
7. Set Owner Notification subject to `New portfolio inquiry — {{serviceNeeded}} — {{name}}`.
8. Create `template_user_confirmation` as the **User Confirmation** template.
9. Set its To Email to `{{email}}`.
10. Set its Reply-To to `va.flynnjames@gmail.com`.
11. Link `template_user_confirmation` as the Owner Notification template's Auto-Reply.
12. Use the supplied files in `emailjs/` for the exact HTML.
13. Do not add an EmailJS private key to the frontend.

### Variables used by both templates

The website sends: `name`, `email`, `company`, `phone`, `serviceNeeded`, `need`, `targetMarket`, `meetingTarget`, `callingVolume`, `message`, `reply_to`, `to_email`, `submitted_at`, `source_page`, `page_url`, `page_path`, `form_type`, and `user_agent`.

Every placeholder used by the supplied templates is included in this payload.

### Production deployment

Render remains configured as a static Vite site:
- Build: `npm install && npm run build`
- Publish directory: `dist`
- SPA fallback: `/*` → `/index.html`
- Sitemap and robots files remain explicit static assets.


## Production build optimization

Vite is configured with a 600 KB chunk warning threshold and explicit vendor chunks for React, Framer Motion, and Lucide React. This keeps the application code and large shared dependencies separated and prevents avoidable chunk-size warnings while preserving the existing SPA architecture.

Production command:

`npm run build`

Render Static Site settings:
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
