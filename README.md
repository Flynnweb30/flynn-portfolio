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

## Contact Calendar + Inline Email Verification

The `/contact` route is the dedicated booking page. It is not a dynamic popup from the main navigation.

### Booking workflow

1. **What brings you here?** — visitor selects the reason for contacting Flynn and can describe the desired outcome.
2. **Let's get to know you** — visitor enters name, work email, and optional phone number.
3. **Inline email verification** — clicking **Next** runs a subtle validation animation, checks email syntax, then checks the domain's MX records. When the domain is mail-enabled, a small **Verified** label appears directly beneath the email field and the visitor advances to the next step.
4. **Pick a time** — visitor selects timezone, weekday, and available time.
5. **Confirm your booking** — the existing booking API creates the appointment.

The browser can reliably verify the address format and whether the domain advertises a receiving mail server. It cannot directly observe a later SMTP hard bounce after a provider accepts a message. A true `bounced` state requires a server-side email provider webhook or a dedicated email-verification service. The current UI therefore does not falsely claim that a mailbox is guaranteed to exist; **Verified** means the address passed syntax and MX validation.

### EmailJS setup

EmailJS remains centralized in `src/analytics.ts` and is used for the site's inquiry/email workflow. The inline booking validator does **not** send an OTP or expose a private API key.

1. Open the EmailJS dashboard.
2. Confirm public key `crekfvN6H352DXAfx` is active.
3. Confirm service ID `service_av4pfmh` is connected to the intended sending mailbox.
4. Confirm template ID `template_dhede6o` exists and accepts the current inquiry variables.
5. Keep `{{reply_to}}` configured as the reply-to address.
6. If your template uses a dynamic recipient, keep `{{to_email}}` configured appropriately.
7. Test a normal inquiry submission from the site and confirm the message reaches `va.flynnjames@gmail.com`.
8. Monitor the EmailJS provider logs for rejected or bounced messages. Client-side JavaScript cannot reliably detect a later SMTP bounce.
9. Never place an EmailJS private key or provider secret in the browser. Only the public key belongs in the static frontend.

### Optional true bounce detection

For authoritative `deliverable`, `undeliverable`, or `bounced` states, connect a server-side email verification provider or your mail provider's webhook to the existing booking API. Keep that secret-backed logic on the server; do not put private verification credentials in the Vite bundle.

### Production deployment

Render remains configured as a static Vite site:
- Build: `npm install && npm run build`
- Publish directory: `dist`
- SPA fallback: `/*` → `/index.html`
- Sitemap and robots files remain explicit static assets.

The existing booking API remains external at:
`https://flynn-portfolio-1-api.onrender.com/api/create-booking`

The portfolio static site does not require a new runtime dependency for email verification. The MX check uses Cloudflare's DNS-over-HTTPS JSON endpoint, while EmailJS handles the one-time verification email.
