# Flynn James Portfolio — Production Deployment Checklist

## 1. Local verification

- [ ] Node.js 20+ is installed.
- [ ] `npm install` completes without errors.
- [ ] `npm run build` completes without errors.
- [ ] The build output contains `dist/index.html`.
- [ ] `dist/sitemap.xml` and `dist/robots.txt` are present.
- [ ] No stale calendar-booking or verification-template references remain.
- [ ] All relative source imports resolve to existing files.

## 2. Vite bundle optimization

The project uses route-level `React.lazy()` loading plus Rollup vendor chunks for React, Framer Motion, and Lucide. This reduces the initial JavaScript payload and separates rarely used page/modal code.

`vite.config.ts` also uses `build.chunkSizeWarningLimit: 700` KB as a guardrail. Do not increase this value just to hide a warning. If a chunk becomes unusually large, inspect the generated bundle and split the responsible feature or dependency first.

## 3. EmailJS — exactly two templates

### Owner Notification

- Service ID: `service_av4pfmh`
- Template ID: `template_dhede6o`
- Recipient: `va.flynnjames@gmail.com`
- Reply-To: `{{reply_to}}`
- Subject: `New portfolio inquiry — {{serviceNeeded}} — {{name}}`

### User Confirmation

- Template ID: `template_user_confirmation`
- Configure this template as the **Auto-Reply** for the Owner Notification template.
- Recipient/To: `{{email}}`
- Reply-To: `va.flynnjames@gmail.com`
- Subject: `Thanks, {{name}} — I received your Flynn James inquiry`

The browser sends only the Owner Notification template. EmailJS sends the second template automatically as the linked Auto-Reply. No third template and no browser-side private key are required.

### Template variables

The owner template uses:

`name`, `email`, `company`, `phone`, `serviceNeeded`, `targetMarket`, `meetingTarget`, `message`, `form_type`, `submitted_at`, `source_page`, `page_url`, `page_path`

The visitor confirmation uses:

`name`, `company`, `serviceNeeded`, `targetMarket`, `meetingTarget`

The code also sends `reply_to`, `to_email`, `need`, `callingVolume`, and `user_agent` for compatibility/metadata. They do not need to be printed in either template.

## 4. Render Static Site

Use:

- Runtime: Static Site
- Branch: `main`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Auto Deploy: enabled if desired

The included `render.yaml` also rewrites all routes to `/index.html`, which is required for clean client-side routes such as `/contact` and `/blog/...`.

## 5. Post-deployment tests

- [ ] Open `/` directly.
- [ ] Refresh `/about`, `/services`, `/experience`, `/case-studies`, `/samples`, `/blog`, and `/contact`.
- [ ] Open a blog post directly at `/blog/<slug>` and refresh.
- [ ] Test the mobile navigation.
- [ ] Test every primary CTA.
- [ ] Submit the Contact form with valid data.
- [ ] Verify the owner email arrives with all submission details.
- [ ] Verify the visitor receives the confirmation email.
- [ ] Verify invalid email/required-field validation.
- [ ] Verify the honeypot blocks obvious spam submissions.
- [ ] Verify favicon and page metadata.
- [ ] Open `/robots.txt` and `/sitemap.xml` on the deployed domain.
- [ ] Check browser console for runtime errors.
- [ ] Check Network tab for failed JS/CSS/assets.

## 6. Important security notes

- The EmailJS Public Key is safe to expose in browser code by design.
- Never put an EmailJS Private Key in `src/`, `public/`, `index.html`, or any client-side environment variable.
- Keep recipient addresses and template configuration synchronized with the EmailJS dashboard.
