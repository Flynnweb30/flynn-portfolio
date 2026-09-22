import { useEffect } from 'react';
import { SEOMetadata } from '../data/seoData';

interface SEOHeadProps {
  meta: SEOMetadata;
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({ meta, schema }) => {
  useEffect(() => {
    // Title
    document.title = meta.title;

    // Helper to set/create meta tags
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Standard meta
    setMeta('name', 'description', meta.description);
    if (meta.keywords?.length) {
      setMeta('name', 'keywords', meta.keywords.join(', '));
    }
    setMeta('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large');
    setMeta('name', 'googlebot', meta.noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large');

    // Open Graph
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', meta.canonical);
    setMeta('property', 'og:image', meta.ogImage);
    setMeta('property', 'og:type', meta.ogType || 'website');
    setMeta('property', 'og:site_name', 'Flynn James Pontino');

    // Twitter / X
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', meta.ogImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = meta.canonical;

    // JSON-LD schema
    const SCHEMA_ID = 'dynamic-jsonld';
    const existing = document.getElementById(SCHEMA_ID);
    if (existing) existing.remove();

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCHEMA_ID;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [meta, schema]);

  return null;
};