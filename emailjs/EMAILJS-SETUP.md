# Flynn James Portfolio — 2-Template EmailJS Setup

## Templates
1. Owner Notification — `template_dhede6o`
2. User Confirmation — `template_confirmation`

The browser sends both templates explicitly: Owner Notification and User Confirmation. The browser sends the two templates in sequence: Owner Notification first, then User Confirmation. This keeps the workflow at exactly two templates and makes delivery explicit and testable.

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
- Template ID: `template_confirmation`
- To Email: `{{email}}`
- Reply-To: `va.flynnjames@gmail.com`
- From Name: `Flynn James`
- Subject: `Thanks, {{name}} — I received your Flynn James inquiry`
- HTML: `visitor-auto-reply-template.html`
- The frontend sends this template explicitly after the Owner Notification.

## Variables sent by the website
`name`, `email`, `company`, `phone`, `serviceNeeded`, `need`, `targetMarket`, `meetingTarget`, `callingVolume`, `message`, `reply_to`, `to_email`, `submitted_at`, `source_page`, `page_url`, `page_path`, `form_type`, `user_agent`.

All variables used by the two templates are present in the submission payload.

## Form behavior
- Required: name, email, company, service, message.
- Optional: phone, target market, monthly meeting target.
- Honeypot: `website` silently blocks basic bot submissions.
- Invalid email and very short submissions are rejected before EmailJS.
- Owner receives the complete inquiry.
- Visitor receives the confirmation through the explicit `template_confirmation` send.

## Important
Do not add an EmailJS Private Key to the frontend. The Public Key is safe for browser-side EmailJS use.
