import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const home = read('src/pages/HomePage.tsx');
const contact = read('src/components/ContactSection.tsx');
const contactPage = read('src/pages/ContactPage.tsx');
const analytics = read('src/analytics.ts');
const vite = read('vite.config.ts');
const app = read('src/App.tsx');
const owner = read('emailjs/owner-notification-template.html');
const visitor = read('emailjs/visitor-auto-reply-template.html');

const stale = [
  'BookingModal',
  'template_contact_verify',
  'VERIFICATION_TEMPLATE_ID',
  'create-booking',
  'calendar-booking',
  'onOpenBooking',
];
for (const token of stale) {
  for (const file of ['src', 'README.md', 'EMAILJS-SETUP.md', 'emailjs']) {
    const full = path.join(root, file);
    if (fs.statSync(full).isDirectory()) continue;
    if (fs.readFileSync(full, 'utf8').includes(token)) throw new Error(`Stale token ${token} found in ${file}`);
  }
}

if (/data-form-name="home-contact"|id="home-contact-/.test(home)) throw new Error('Homepage still contains the moved contact form.');
if (!contact.includes('data-form-name="contact-page"')) throw new Error('Dedicated contact form is missing.');
if (!contact.includes('data-inquiry-form')) throw new Error('Contact form is not wired to the centralized inquiry handler.');
if (!contactPage.includes('bg-photo-contact')) throw new Error('Contact page is missing its professional background treatment.');

const config = Object.fromEntries([...analytics.matchAll(/(PUBLIC_KEY|SERVICE_ID|TEMPLATE_ID|USER_CONFIRMATION_TEMPLATE_ID|TO_EMAIL):\s*'([^']+)'/g)].map((m) => [m[1], m[2]]));
for (const key of ['PUBLIC_KEY','SERVICE_ID','TEMPLATE_ID','USER_CONFIRMATION_TEMPLATE_ID','TO_EMAIL']) {
  if (!config[key]) throw new Error(`Missing EmailJS config: ${key}`);
}
if (!vite.includes('chunkSizeWarningLimit: 600')) throw new Error('Vite chunk-size warning configuration is missing.');
if (!vite.includes("'vendor-react'") || !vite.includes("'vendor-motion'") || !vite.includes("'vendor-icons'")) throw new Error('Expected vendor chunk splitting is missing.');

const payloadKeys = new Set([...analytics.matchAll(/^\s{6,}([A-Za-z_][A-Za-z0-9_]*),?$/gm)].map((m) => m[1]));
// Explicitly verify the central payload keys because they are the contract shared with EmailJS.
for (const key of ['name','email','company','phone','serviceNeeded','targetMarket','meetingTarget','message','reply_to','submitted_at','source_page','page_url','page_path','form_type']) {
  if (!analytics.includes(`      ${key}`) && !analytics.includes(`      ${key},`)) throw new Error(`Central EmailJS payload is missing ${key}.`);
}

const placeholders = (html) => new Set([...html.matchAll(/{{\s*([A-Za-z0-9_]+)\s*}}/g)].map((m) => m[1]));
const ownerVars = placeholders(owner);
const visitorVars = placeholders(visitor);
const allowedPayload = new Set(['name','email','company','phone','serviceNeeded','targetMarket','meetingTarget','message','form_type','submitted_at','source_page','page_url','page_path','reply_to','to_email','user_agent','need','callingVolume']);
for (const [name, vars] of [['owner', ownerVars], ['visitor', visitorVars]]) {
  for (const variable of vars) {
    if (!allowedPayload.has(variable)) throw new Error(`${name} template uses an undefined frontend variable: ${variable}`);
  }
}

const sitemap = read('public/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length !== 15) throw new Error(`Expected 15 sitemap URLs, found ${urls.length}.`);
if (!urls.includes('https://flynnjamespontino-porfolio.onrender.com/contact')) throw new Error('Contact route missing from sitemap.');

const pages = ['home','about','services','experience','case-studies','samples','blog','contact'];
for (const page of pages) {
  if (!app.includes(`'${page}'`)) throw new Error(`App route missing: ${page}`);
}

console.log('Static project verification passed: contact form moved, EmailJS contract aligned, booking workflow absent, routes/sitemap present, and Vite chunk optimization configured.');
