import React, { useEffect } from 'react';

export interface PageMetaProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export const PageMeta: React.FC<PageMetaProps> = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    if (canonicalPath) {
      let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      linkCanonical.href = `${origin}${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);

  return null;
};