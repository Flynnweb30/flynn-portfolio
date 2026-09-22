# Flynn James Portfolio — 2-Template EmailJS Setup

## Templates
1. Owner Notification — `template_dhede6o`
2. User Confirmation — `template_user_confirmation`

The browser sends **only** the Owner Notification template. Configure `template_user_confirmation` as the linked **Auto-Reply** for the owner template in EmailJS. This keeps the workflow at exactly two templates and avoids a second browser-side email request.

## Service
- Public Key: `crekfvN6H352DXAfx`
- Service ID: `service_av4pfmh`
- Owner email: `va.flynnjames@gmail.com`

## Owner template
- To Email: `va.flynnjames@gmail.com`
- Reply-To: `{{reply_to}}`
- From Name: `Flynn James Portfolio`
- Subject: `New portfolio inquiry — {{serviceNeeded}} — {{name}}`
- HTML: `owner-notification-template.html`

## User confirmation template
- Template ID: `template_user_confirmation`
- To Email: `{{email}}`
- Reply-To: `va.flynnjames@gmail.com`
- From Name: `Flynn James`
- Subject: `Thanks, {{name}} — I received your Flynn James inquiry`
- HTML: `visitor-auto-reply-template.html`
- Link this template as the Owner Notification template's Auto-Reply.

## Variables sent by the website
`name`, `email`, `company`, `phone`, `serviceNeeded`, `need`, `targetMarket`, `meetingTarget`, `callingVolume`, `message`, `reply_to`, `to_email`, `submitted_at`, `source_page`, `page_url`, `page_path`, `form_type`, `user_agent`.

All variables used by the two templates are present in the submission payload.

## Form behavior
- Required: name, email, company, service, message.
- Optional: phone, target market, monthly meeting target.
- Honeypot: `website` silently blocks basic bot submissions.
- Invalid email and very short submissions are rejected before EmailJS.
- Owner receives the complete inquiry.
- Visitor receives the confirmation through EmailJS Auto-Reply.

## Important
Do not add an EmailJS Private Key to the frontend. The Public Key is safe for browser-side EmailJS use.

## Frontend configuration

The production frontend uses this exact configuration in `src/analytics.ts`:

- `PUBLIC_KEY`: `crekfvN6H352DXAfx`
- `SERVICE_ID`: `service_av4pfmh`
- `TEMPLATE_ID`: `template_dhede6o`
- `USER_CONFIRMATION_TEMPLATE_ID`: `template_user_confirmation` (dashboard reference; it is linked as the Auto-Reply rather than sent by the browser)
- `TO_EMAIL`: `va.flynnjames@gmail.com`

The browser sends one EmailJS request per valid inquiry. EmailJS then sends the linked User Confirmation template automatically. EmailJS documents this linked-template Auto-Reply flow and notes that it consumes an additional request quota.
