# EmailJS field map — 2-template contact workflow

| Website field | HTML name | Owner template | User confirmation |
|---|---|---|---|
| Full name | `name` | `{{name}}` | `{{name}}` |
| Work email | `email` | `{{email}}` | `{{email}}` |
| Company / URL | `company` | `{{company}}` | `{{company}}` |
| Phone / WhatsApp | `phone` | `{{phone}}` | — |
| Primary service | `serviceNeeded` / `need` | `{{serviceNeeded}}` | `{{serviceNeeded}}` |
| Target geography | `targetMarket` | `{{targetMarket}}` | `{{targetMarket}}` |
| Monthly meeting target | `meetingTarget` / `callingVolume` | `{{meetingTarget}}` | `{{meetingTarget}}` |
| ICP / sales bottleneck | `message` | `{{message}}` | — |
| Reply-to address | generated | `{{reply_to}}` | — |
| Owner recipient | generated | fixed `va.flynnjames@gmail.com` | — |
| Submitted time | generated | `{{submitted_at}}` | — |
| Source page | generated | `{{source_page}}` | — |
| Page URL | generated | `{{page_url}}` | — |
| Page path | generated | `{{page_path}}` | — |
| Form type | generated | `{{form_type}}` | — |

## Templates

- Owner Notification: `template_dhede6o`
- User Confirmation: `template_user_confirmation`

The browser sends only the Owner Notification. Link the User Confirmation template as its EmailJS Auto-Reply so one successful submission produces both emails without requiring a second browser-side request.
