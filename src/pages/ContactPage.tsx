import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useSEO } from '../hooks/useSEO';

interface ContactPageProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

/**
 * Dedicated contact route using the exact same centralized inquiry component
 * rendered on the homepage. This keeps fields, validation, EmailJS variables,
 * theme, success state, and responsive behavior synchronized in one place.
 */
export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onSuccessToast }) => {
  useSEO({
    title: 'Contact Flynn James | Hire a B2B SDR & Appointment Setter',
    description:
      'Send a direct B2B sales inquiry to Flynn James for appointment setting, cold calling, lead generation, SDR support, or outbound strategy.',
    canonical: '/contact',
    keywords: 'contact B2B SDR, hire appointment setter, cold calling specialist, outbound sales support, SDR team lead',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Flynn James',
      description: 'Direct inquiry page for B2B SDR, appointment setting, cold calling, and outbound sales support.',
      url: 'https://flynnjamespontino-porfolio.onrender.com/contact',
    },
  });

  return <ContactSection initialService={initialService} onSuccessToast={onSuccessToast} />;
};
