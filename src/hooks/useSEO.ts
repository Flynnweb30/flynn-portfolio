import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE = 'https://flynnjamespontino-porfolio.onrender.com';
const DEFAULT_OG = 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif';

function setMeta(selector: string, attr: string, value: string, create = false) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el && create) {
    const isLink = selector.startsWith('link');
    el = document.createElement(isLink ? 'link' : 'meta');
    if (selector.includes('name=')) {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) (el as HTMLMetaElement).name = name;
    }
    if (selector.includes('property=')) {
      const prop = selector.match(/property="([^"]+)"/)?.[1];
      if (prop) (el as HTMLMetaElement).setAttribute('property', prop);
    }
    if (selector.includes('rel=')) {
      const rel = selector.match(/rel="([^"]+)"/)?.[1];
      if (rel) (el as HTMLLinkElement).rel = rel;
    }
    document.head.appendChild(el);
  }
  if (el) {
    if (attr === 'href') (el as HTMLLinkElement).href = value;
    else el.setAttribute(attr, value);
  }
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    document.title = config.title;

    setMeta('meta[name="description"]', 'content', config.description, true);
    setMeta(
      'meta[name="robots"]',
      'content',
      config.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
      true,
    );
    setMeta(
      'link[rel="canonical"]',
      'href',
      config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`,
      true,
    );

    setMeta('meta[property="og:title"]', 'content', config.title, true);
    setMeta('meta[property="og:description"]', 'content', config.description, true);
    setMeta(
      'meta[property="og:url"]',
      'content',
      config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`,
      true,
    );
    setMeta('meta[property="og:type"]', 'content', config.ogType || 'website', true);
    setMeta('meta[property="og:image"]', 'content', config.ogImage || DEFAULT_OG, true);
    setMeta('meta[property="og:image:alt"]', 'content', `${config.title} — Flynn James B2B sales portfolio`, true);
    setMeta('meta[property="og:locale"]', 'content', 'en_US', true);

    setMeta('meta[name="twitter:title"]', 'content', config.title, true);
    setMeta('meta[name="twitter:description"]', 'content', config.description, true);
    setMeta('meta[name="twitter:image"]', 'content', config.ogImage || DEFAULT_OG, true);
    setMeta('meta[name="twitter:image:alt"]', 'content', `${config.title} — Flynn James B2B sales portfolio`, true);

    if (config.keywords) {
      setMeta('meta[name="keywords"]', 'content', config.keywords, true);
    }

    const existing = document.head.querySelectorAll('script[data-seo-jsonld]');
    existing.forEach((el) => el.remove());
    const schemas = config.jsonLd ? (Array.isArray(config.jsonLd) ? config.jsonLd : [config.jsonLd]) : [];
    schemas.push({
      '@context': 'https://schema.org',
      '@type': config.ogType === 'profile' ? 'ProfilePage' : 'WebPage',
      '@id': `${config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`}#webpage`,
      url: config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`,
      name: config.title,
      description: config.description,
      isPartOf: { '@id': `${SITE}/#website` },
      inLanguage: 'en-US'
    });
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [
    config.title,
    config.description,
    config.canonical,
    config.ogImage,
    config.ogType,
    config.noindex,
    config.keywords,
  ]);
}

export const SEO_CONFIGS = {
  home: {
    title: 'Flynn James | Senior B2B SDR & Junior Sales Team Lead',
    description:
      'Senior B2B SDR and Junior Sales Team Lead helping HR teams, business owners, and startups build qualified pipeline through appointment setting, cold calling, and SDR coaching.',
    canonical: '/',
    keywords:
      'Senior B2B SDR, Junior Sales Team Lead, B2B appointment setting, cold calling, lead generation, outbound sales, SDR coaching',
  },
  about: {
    title: 'About Flynn James | 11+ Years in B2B Outbound Sales',
    description:
      'Meet Flynn James, a Senior B2B SDR and Junior Sales Team Lead with 11+ years of cold calling, appointment setting, and SDR coaching experience.',
    canonical: '/about',
    keywords: 'about Flynn James, B2B sales specialist, SDR background, outbound sales expert',
  },
  services: {
    title: 'B2B Appointment Setting & Cold Calling Services | Flynn James',
    description:
      'Six focused B2B outbound services: appointment setting, high-volume cold calling, lead generation, SDR coaching, LinkedIn outreach, and CRM pipeline management.',
    canonical: '/services',
    keywords:
      'B2B appointment setting services, cold calling services, lead generation services, SDR services, outbound sales services',
  },
  experience: {
    title: 'Flynn James B2B Sales Experience | 11+ Years of SDR & Outbound Sales',
    description:
      'Flynn James career timeline: 11+ years of outbound sales across US, UK, ANZ, and Singapore markets. Consistent 120–150% quota attainment.',
    canonical: '/experience',
    keywords: 'B2B sales career, SDR experience, appointment setting background, outbound sales history',
  },
  caseStudies: {
    title: 'B2B Sales Case Studies | Appointment Setting & Outbound Results',
    description:
      'Detailed case studies of outbound campaigns: $1.8M pipeline sourced for a UK agency, 22% demo conversion for enterprise SaaS, and Level 4 ramp in 3 weeks.',
    canonical: '/case-studies',
    keywords:
      'B2B sales case studies, appointment setting results, cold calling case studies, outbound pipeline results',
  },
  blog: {
    title: 'B2B SDR Blog | Cold Calling, Appointment Setting & Outbound Sales',
    description:
      'Practical B2B sales insights from Flynn James on cold calling, appointment setting, SDR metrics, outbound cadences, meeting quality, and hiring setters.',
    canonical: '/blog',
    keywords:
      'B2B SDR blog, cold calling tips, appointment setting tips, outbound sales strategy, SDR metrics, sales development',
  },
  samples: {
    title: 'B2B Cold Call Scripts & Sales Playbooks | Flynn James',
    description:
      'Free sales playbooks: cold call scripts, 7-touch multi-channel cadences, BANT qualification scorecards, and AE handoff templates used to source $1.8M+ pipeline.',
    canonical: '/samples',
    keywords: 'cold call scripts, sales playbook, B2B cadence template, BANT qualification, SDR scripts',
  },
  contact: {
    title: 'Contact Flynn James | Hire a B2B SDR & Appointment Setter',
    description:
      'Book a free 20-minute B2B pipeline audit with Flynn James for appointment setting, cold calling, or SDR support. Bring your ICP, current outbound motion, and bottleneck; get practical next steps within one working session.',
    canonical: '/contact',
    keywords: 'hire B2B SDR, book appointment setter, contact sales specialist, hire cold caller',
  },
};