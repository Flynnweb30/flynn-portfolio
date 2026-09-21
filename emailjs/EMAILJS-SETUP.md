# Flynn James Portfolio — EmailJS Centralized Contact Setup

## 1. What this setup does

The Contact page is the single source for portfolio inquiries.

When a visitor submits the form:

1. The browser validates required fields.
2. EmailJS sends the inquiry to `va.flynnjames@gmail.com`.
3. The owner's email uses the visitor's email as Reply-To.
4. EmailJS Auto-Reply sends a confirmation to the visitor.
5. The form resets only after a successful EmailJS response.
6. GA4 records `contact_form_submit` or `contact_form_error`.

The contact form captures:
- Full name
- Work email
- Company / URL
- Phone / WhatsApp
- Primary service needed
- Target geography / timezone
- Expected monthly meeting target
- ICP / main sales bottleneck
- Submission timestamp
- Source page
- Page URL/path

## 2. Existing EmailJS credentials

Use these exact values in the website:

Public Key:
`crekfvN6H352DXAfx`

Service ID:
`service_av4pfmh`

Main owner notification Template ID:
`template_dhede6o`

Owner inbox:
`va.flynnjames@gmail.com`

Verification Template ID:
`template_contact_verify`

Do not expose an EmailJS Private Key in frontend code.

## 3. Create / configure the EmailJS service

In EmailJS:

Dashboard → Email Services → open `service_av4pfmh`.

Use the connected Gmail/SMTP provider you want to receive the portfolio inquiries.

Recommended:
- From name: `Flynn James Portfolio`
- From email: use the email supplied by your connected EmailJS service
- Reply-To: `{{reply_to}}`

Do not put the visitor's address in the From Email field. Put `{{reply_to}}` in Reply-To.

## 4. Main template: template_dhede6o

Dashboard → Email Templates → open/create:

`template_dhede6o`

Subject:
`New portfolio inquiry — {{serviceNeeded}} — {{name}}`

To Email:
`va.flynnjames@gmail.com`

Reply-To:
`{{reply_to}}`

From Name:
`Flynn James Portfolio`

Content:
Use `owner-notification-template.html` from this folder.

The template uses these variables:

`{{name}}`
`{{email}}`
`{{company}}`
`{{phone}}`
`{{serviceNeeded}}`
`{{targetMarket}}`
`{{meetingTarget}}`
`{{message}}`
`{{submitted_at}}`
`{{source_page}}`
`{{page_url}}`
`{{page_path}}`

The code also sends these compatibility variables:

`{{need}}`
`{{callingVolume}}`
`{{to_email}}`
`{{reply_to}}`
`{{user_agent}}`

## 5. Visitor Auto-Reply

In EmailJS, open `template_dhede6o`.

Configure its Auto-Reply / linked template using:

Subject:
`Thanks, {{name}} — I received your Flynn James inquiry`

To Email:
`{{email}}`

Reply-To:
`va.flynnjames@gmail.com`

From Name:
`Flynn James`

Use `visitor-auto-reply-template.html` as the content.

This is preferable to making a second browser-side EmailJS send because the confirmation is triggered from the successful main template workflow.

## 6. Create the booking verification template

Because the booking modal currently sends a one-time verification code, do NOT use the owner notification template for that code.

Create:

Template ID:
`template_contact_verify`

Subject:
`Your Flynn James verification code: {{verification_code}}`

To Email:
`{{to_email}}`

Reply-To:
`va.flynnjames@gmail.com`

From Name:
`Flynn James`

Use `email-verification-template.html`.

Required variables:

`{{name}}`
`{{email}}`
`{{verification_code}}`
`{{to_email}}`
`{{reply_to}}`

The updated website now references this separate verification template.

## 7. EmailJS template variable checklist

Main inquiry template:

| Variable | Website source | Required |
|---|---|---|
| name | Full Name | Yes |
| email | Business Email | Yes |
| company | Company Name / URL | Yes |
| phone | Phone / WhatsApp | No |
| serviceNeeded | Primary Service Needed | Yes |
| targetMarket | Target Geography / Timezone | Yes |
| meetingTarget | Expected Monthly Meeting Target | No |
| message | ICP & Main Sales Bottleneck | Yes |
| submitted_at | Browser timestamp | Automatic |
| source_page | Document title | Automatic |
| page_url | Current URL | Automatic |
| page_path | Current path | Automatic |
| reply_to | Visitor email | Automatic |
| to_email | Owner email | Automatic |

## 8. Contact page form

The updated ContactSection uses:

`data-inquiry-form`

and:

`data-form-name="portfolio_contact"`

Every field has a real `name` attribute so the centralized FormData handler can capture it.

## 9. Test procedure

Test from the deployed Render site, not only localhost.

### Test A — valid inquiry

Enter:
- Name: Jane Smith
- Email: a real inbox you control
- Company: Example Growth Co.
- Phone: +1 555 123 4567
- Service: B2B Appointment Setting
- Geography: United States
- Target: 25–35 Qualified Meetings / Month
- Message: We need more qualified meetings from our outbound motion.

Expected:
- Success toast appears.
- Owner receives the complete inquiry.
- Visitor receives the auto-reply.
- Replying to the owner email goes to the visitor's email.
- Form resets.

### Test B — missing required field

Leave Company or Message empty.

Expected:
- No EmailJS request.
- Error toast.
- Form remains populated.

### Test C — invalid email

Enter:
`not-an-email`

Expected:
- No EmailJS request.
- Error toast.

### Test D — EmailJS failure

Temporarily use an invalid template ID only in a local test environment.

Expected:
- Error toast.
- Submit button is restored.
- User is told to email `va.flynnjames@gmail.com`.

Restore the correct Template ID afterward.

### Test E — booking verification

Open Contact → booking flow.

Request the verification code.

Expected:
- Visitor receives only the verification email.
- Owner does NOT receive the verification code.
- Entering the correct code allows the booking flow to continue.

## 10. Render deployment

Build command:

`npm install && npm run build`

Publish directory:

`dist`

After deployment, test:

`https://flynnjamespontino-porfolio.onrender.com/contact`

Then submit a real test inquiry.

## 11. Final EmailJS checklist

Before going live:

- [ ] Service `service_av4pfmh` connected
- [ ] Main template `template_dhede6o` exists
- [ ] Auto-Reply is linked to the main template
- [ ] Auto-Reply recipient is `{{email}}`
- [ ] Main template recipient is `va.flynnjames@gmail.com`
- [ ] Main template Reply-To is `{{reply_to}}`
- [ ] Verification template `template_contact_verify` exists
- [ ] Verification recipient is `{{to_email}}`
- [ ] Verification template contains `{{verification_code}}`
- [ ] Website public key matches `crekfvN6H352DXAfx`
- [ ] No EmailJS Private Key is in frontend code
- [ ] Real inbox test completed
- [ ] Visitor auto-reply received
- [ ] Owner notification received
- [ ] Reply-To tested
- [ ] Booking verification tested
- [ ] Render production deployment tested

## 12. Important consistency note

The contact form remains visually consistent with the existing Flynn James portfolio:
- dark navy background
- cyan/teal accents
- slate borders
- rounded cards
- existing typography
- existing spacing
- existing responsive layout

No new frontend dependency is required for the contact form. EmailJS remains the only external email dependency.
