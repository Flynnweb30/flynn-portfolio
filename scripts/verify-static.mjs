import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const site = 'https://flynnjamespontino-porfolio.onrender.com';
const required = ['index.html', 'sitemap.xml', 'robots.txt', 'favicon.svg'];

if (!fs.existsSync(dist)) throw new Error('Build output directory "dist" was not created.');

for (const file of required) {
  const fullPath = path.join(dist, file);
  if (!fs.existsSync(fullPath)) throw new Error(`Required production file is missing: dist/${file}`);
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8').trim();
if (!sitemap.startsWith('<?xml')) throw new Error('sitemap.xml must begin with an XML declaration.');
if (!sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
  throw new Error('sitemap.xml is missing the standard sitemap namespace.');
}
if (!sitemap.endsWith('</urlset>')) throw new Error('sitemap.xml is not closed with </urlset>.');

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (locs.length !== 15) throw new Error(`Expected 14 sitemap URLs, found ${locs.length}.`);
if (new Set(locs).size !== locs.length) throw new Error('sitemap.xml contains duplicate URLs.');
for (const url of locs) {
  if (!url.startsWith(site)) throw new Error(`Sitemap URL is outside the production domain: ${url}`);
  if (/[?#]/.test(url)) throw new Error(`Sitemap URL contains a query string or fragment: ${url}`);
}
const requiredRoutes = ['/blog', '/blog/b2b-appointment-setting-playbook-qualified-meetings', '/blog/b2b-cold-call-opener-that-gets-to-discovery', '/blog/b2b-appointment-setting-kpis-that-matter', '/blog/seven-touch-b2b-outbound-cadence', '/blog/why-qualified-meetings-no-show', '/blog/how-to-hire-a-b2b-appointment-setter', '/blog/how-to-build-a-predictable-b2b-appointment-setting-system'];
for (const route of requiredRoutes) {
  if (!locs.includes(`${site}${route}`)) throw new Error(`Sitemap is missing required blog route: ${route}`);
}

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${site}/sitemap.xml`)) {
  throw new Error('robots.txt does not point to the production sitemap.');
}
if (!robots.includes('User-agent: *') || !robots.includes('Allow: /')) {
  throw new Error('robots.txt is missing the global crawl directives.');
}

const index = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!index.includes(`rel="canonical" href="${site}/"`)) {
  throw new Error('index.html canonical URL does not use the production domain.');
}

const favicon = fs.readFileSync(path.join(dist, 'favicon.svg'), 'utf8');
if (!favicon.includes('fill=\'#0b0f19\'')) throw new Error('favicon.svg does not match the requested favicon.');
if (!favicon.includes('fill=\'#fbbf24\'')) throw new Error('favicon.svg is missing the requested amber brand color.');

console.log(`Static SEO validation passed: ${locs.length} sitemap URLs, robots.txt, canonical URL, and favicon verified.`);
