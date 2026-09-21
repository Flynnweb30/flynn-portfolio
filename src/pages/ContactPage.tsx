import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ShieldCheck, Clock3, MailCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { BookingModal } from '../components/BookingModal';
import { useSEO } from '../hooks/useSEO';

interface ContactPageProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

/**
 * Dedicated contact / booking page.
 * The booking workflow is rendered inline so Contact is a real route,
 * not a dynamic popup, while preserving the existing booking architecture.
 */
export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  useSEO({
    title: 'Book a Call with Flynn James | Senior SDR & Appointment Setter',
    description:
      'Book a 20-minute B2B sales strategy call with Flynn James. Choose what brings you here, verify your email, and select a time that works for you.',
    canonical: '/contact',
    keywords: 'book B2B SDR call, appointment setter, senior SDR, outbound sales, cold calling specialist',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Book a Call with Flynn James',
      description: 'Dedicated booking page for a B2B outbound sales strategy call with Flynn James.',
      url: 'https://flynnjamespontino-porfolio.onrender.com/contact',
    },
  });

  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Book a Call"
        title="Let's talk pipeline,"
        titleAccent="not pleasantries."
        description="Start with what brings you here, verify your email, then choose a time for a focused 20-minute conversation about your outbound goals."
        photoClass="bg-photo-contact"
      />

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              { icon: CalendarDays, title: '20-minute working session', text: 'A focused conversation around your goals, pipeline, or hiring needs.' },
              { icon: MailCheck, title: 'Email verified', text: 'A verification step helps keep bookings tied to a reachable inbox.' },
              { icon: ShieldCheck, title: 'No-pressure process', text: 'No generic pitch deck. Bring the challenge you want to solve.' },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80"
              >
                <Icon className="w-4 h-4 text-amber-400 mb-3" />
                <h2 className="text-[13px] font-semibold text-white">{title}</h2>
                <p className="mt-1.5 text-[12px] leading-6 text-slate-500">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-6 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-500">
            <Clock3 className="w-3.5 h-3.5 text-amber-400" />
            Secure booking · Timezone-aware scheduling · Email verification
          </div>

          <BookingModal open inline initialService={initialService} onClose={() => undefined} />
        </div>
      </Section>
    </>
  );
};
