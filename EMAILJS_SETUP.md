# Flynn James Portfolio — EmailJS Contact Form Setup

This setup centralizes the existing Contact page form and sends:

1. A complete inquiry notification to `va.flynnjames@gmail.com`.
2. A confirmation/auto-reply to the person who submitted the form.

The Contact page currently captures these fields:

- `name` — Full name — required
- `email` — Work email — required
- `company` — Company — required
- `phone` — Phone / WhatsApp — optional
- `need` — Service needed — required
- `targetMarket` — Target market — required
- `meetingTarget` — Monthly meeting target — optional
- `message` — ICP & current bottleneck — required

The code also sends:

- `service_needed`
- `target_market`
- `meeting_target`
- `submitted_at`
- `page_url`
- `form_name`
- `reply_to`
- `to_email`

## 1. Confirm your EmailJS service

In EmailJS Dashboard, open **Email Services** and confirm the service connected to:

`service_av4pfmh`

The connected email account must be able to send mail successfully. Use EmailJS's service test before testing the website.

## 2. Use the existing main template

Your website configuration already uses:

- Public Key: `crekfvN6H352DXAfx`
- Service ID: `service_av4pfmh`
- Main Template ID: `template_dhede6o`
- Owner email: `va.flynnjames@gmail.com`

Open **Email Templates** and edit template `template_dhede6o`.

### Subject

`New Portfolio Inquiry — {{name}} | {{company}} | {{service_needed}}`

### To Email

`va.flynnjames@gmail.com`

### From Name

`Flynn James Portfolio`

### Reply-To

`{{email}}`

Do not put the visitor's email in the From Email field. Keep the authenticated sender supplied by your connected EmailJS service and use `{{email}}` for Reply-To.

### BCC / CC

Leave empty unless you intentionally need another recipient.

### Content

Copy the complete HTML from:

`emailjs/owner-contact-template.html`

The corresponding plain-text fallback is:

`emailjs/owner-template-plain-text.txt`

## 3. Verify every dynamic variable

The owner template expects these variables:

`{{name}}`
`{{email}}`
`{{company}}`
`{{phone}}`
`{{service_needed}}`
`{{target_market}}`
`{{meeting_target}}`
`{{message}}`
`{{submitted_at}}`
`{{page_url}}`

The website sends all of them explicitly.

EmailJS dynamic variables are replaced at send time; if a variable is not supplied it becomes an empty string, so matching the names exactly is important.

## 4. Configure the customer auto-reply

EmailJS supports a linked Auto-Reply template. This is preferable to making the browser perform a second email request.

Create a second template, for example:

`Flynn Portfolio — Inquiry Confirmation`

You may let EmailJS generate its ID, or use a clear ID such as:

`template_flynn_reply`

If that ID is already in use, use the ID EmailJS assigns to the new template. No website code change is needed for the linked Auto-Reply.

### Auto-reply To Email

`{{email}}`

### Auto-reply Reply-To

`va.flynnjames@gmail.com`

### Auto-reply From Name

`Flynn James Portfolio`

### Auto-reply Subject

`Thanks, {{name}} — I received your inquiry`

### Auto-reply content

Copy:

`emailjs/auto-reply-template.html`

The plain-text version is:

`emailjs/auto-reply-plain-text.txt`

### Link it to the main template

Open the main template `template_dhede6o`.

Open its **Auto-Reply** section.

Select the new customer confirmation template.

Save the main template.

This makes one website submission produce the owner notification plus the customer confirmation through EmailJS's linked auto-reply flow.

## 5. Optional EmailJS Contacts

If you want every inquiry to appear in EmailJS Contacts, open the main template's **Contacts** section and enable contact saving.

Set:

- Contact Email: `{{email}}`
- Contact Name: `{{name}}`
- Company: `{{company}}` if your account/template supports that field

EmailJS documents that the contact email is required and that contacts can be created automatically from template parameters.

## 6. Website configuration

The current application configuration is already:

```ts
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'crekfvN6H352DXAfx',
  SERVICE_ID: 'service_av4pfmh',
  TEMPLATE_ID: 'template_dhede6o',
  TO_EMAIL: 'va.flynnjames@gmail.com',
};
```

No private EmailJS key belongs in the frontend. The public key is intended for the client-side SDK; do not expose a private/access token in this project.

## 7. Deploy the updated project

Run locally:

```bash
npm install
npm run lint
npm run build
npm run preview
```

For Render Static Site:

Build Command:

```text
npm install && npm run build
```

Publish Directory:

```text
dist
```

## 8. Test the form end-to-end

Use a real test email address that you can access.

Fill every Contact page field:

- Full name
- Work email
- Company
- Service needed
- Phone / WhatsApp
- Target market
- Monthly meeting target
- ICP & current bottleneck

Submit once.

Confirm the owner inbox receives an email containing every field.

Confirm the visitor receives the Auto-Reply.

Click Reply from the owner email and confirm it addresses the visitor's email because Reply-To is `{{email}}`.

## 9. Test optional fields

Submit another inquiry without Phone / WhatsApp.

The owner email should show:

`Not provided`

Submit without Monthly Meeting Target if the UI allows it.

The owner email should show:

`Not specified`

## 10. Test failure handling

Temporarily disconnect/disable the EmailJS service or use a controlled invalid template ID in a local test only.

Confirm the website:

- Does not navigate away.
- Restores the Send button.
- Shows the error toast.
- Logs the EmailJS error in the browser console.
- Does not display a false success state.

Restore the production configuration immediately afterward.

## 11. Email deliverability checklist

Before launch:

- Verify the connected sending service.
- Complete any EmailJS sender verification required by the provider.
- Keep Reply-To as `{{email}}`.
- Do not spoof the visitor's email as the From Email.
- Test Gmail and Outlook delivery.
- Check spam/junk folders during the first tests.
- Keep the owner address consistent with the configured destination.
- Consider enabling EmailJS reCAPTCHA if spam submissions become a problem.

## 12. Exact field mapping

| Contact page field | HTML name | EmailJS variable | Required |
|---|---|---|---|
| Full name | `name` | `{{name}}` | Yes |
| Work email | `email` | `{{email}}` | Yes |
| Company | `company` | `{{company}}` | Yes |
| Phone / WhatsApp | `phone` | `{{phone}}` | No |
| Service needed | `need` | `{{service_needed}}` | Yes |
| Target market | `targetMarket` | `{{target_market}}` | Yes |
| Monthly meeting target | `meetingTarget` | `{{meeting_target}}` | No |
| ICP & current bottleneck | `message` | `{{message}}` | Yes |

## 13. Important: don't change the variable names casually

If you rename a form's `name` attribute, update the corresponding code and EmailJS template variable together.

For example:

```html
<select name="need">
```

maps to:

```ts
const serviceNeeded = String(formData.get('need') || '').trim();
```

and then:

```ts
service_needed: serviceNeeded,
```

which maps to:

```text
{{service_needed}}
```

## 14. Final production test

Test in Chrome and Edge on desktop and mobile widths.

Confirm:

- Contact page loads.
- EmailJS initializes once.
- Required validation works.
- Email is delivered to Flynn.
- Confirmation reaches the visitor.
- Reply-To points to the visitor.
- All contact fields are present.
- Success state appears only after EmailJS succeeds.
- Error state appears when EmailJS fails.
- Send button cannot be double-submitted while sending.
- Existing GA4 contact events continue to fire.
- Render build completes successfully.
