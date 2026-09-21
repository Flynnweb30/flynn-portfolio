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

## Contact Calendar + Email Verification

The `/contact` route is now the dedicated booking page. It is no longer opened as a dynamic booking popup from the main navigation. Existing CTA buttons route visitors to `/contact` while preserving the existing React/Vite architecture.

### Booking workflow

1. **What brings you here?** — visitor selects the reason for contacting Flynn and can describe the desired outcome.
2. **Let's get to know you** — visitor enters name, work email, and optional phone number.
3. **Email verification** — the site checks the email domain for MX records and sends a six-digit verification code through EmailJS. The visitor must enter the code before continuing.
4. **Pick a time** — visitor selects timezone, weekday, and available time.
5. **Confirm your booking** — the existing booking API creates the appointment.

The verification flow distinguishes:
- `verified`: the visitor successfully entered the one-time code sent to the inbox.
- `Delivery unavailable`: the email domain has no MX record or EmailJS rejected the verification request.
- `Code mismatch`: the entered verification code did not match.

A browser-only application cannot truthfully detect a later SMTP bounce after an email provider has accepted a message. A true post-send `bounced` state requires a server-side email provider webhook. The current flow therefore never falsely labels an accepted message as delivered; it only marks an inbox as verified after the recipient proves access to it.

### EmailJS setup

The project already loads EmailJS from:
`https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`

Current credentials are centralized in `src/analytics.ts` under `EMAILJS_CONFIG`.

1. Open your EmailJS dashboard.
2. Confirm service ID `service_av4pfmh` is connected to the sending mailbox.
3. Confirm public key `crekfvN6H352DXAfx` is active.
4. Open template `template_dhede6o`.
5. Set the template recipient / To Email field to `{{to_email}}` so the same template can send booking inquiries to Flynn and verification messages to the visitor.
6. Keep `{{reply_to}}` as the reply-to field.
7. Include these template variables where appropriate:
   - `{{name}}`
   - `{{email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{need}}`
   - `{{message}}`
   - `{{verification_code}}`
   - `{{to_email}}`
   - `{{reply_to}}`
8. For verification emails, `{{need}}` is `Email verification code` and `{{message}}` contains the six-digit code and its expiration notice.
9. Send a test email from EmailJS to confirm that the message reaches the visitor's inbox.
10. Send a normal contact submission to confirm that `to_email` routes the inquiry to `va.flynnjames@gmail.com`.
11. Do not expose an EmailJS private key in this project. The browser only uses the public key.

### Production deployment

Render remains configured as a static Vite site:
- Build: `npm install && npm run build`
- Publish directory: `dist`
- SPA fallback: `/*` → `/index.html`
- Sitemap and robots files remain explicit static assets.

The existing booking API remains external at:
`https://flynn-portfolio-1-api.onrender.com/api/create-booking`

The portfolio static site does not require a new runtime dependency for email verification. The MX check uses Cloudflare's DNS-over-HTTPS JSON endpoint, while EmailJS handles the one-time verification email.
