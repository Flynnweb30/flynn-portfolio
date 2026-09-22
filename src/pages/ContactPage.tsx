import React from 'react';
import { motion } from 'framer-motion';
import { Clock3, MailCheck, ShieldCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { ContactSection } from '../components/ContactSection';
import { useSEO } from '../hooks/useSEO';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
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

  return (
    <>
      <PageHeader
        index="08"
        eyebrow="Direct inquiry"
        title="Have a pipeline problem?"
        titleAccent="Let’s diagnose it."
        description="Tell me what you sell, who you want to reach, and where the current outbound motion is breaking down. I’ll review the details and reply with a practical next step."
        photoClass="bg-photo-contact"
      />

      <Section bordered className="section-photo bg-photo-contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              { icon: MailCheck, title: 'Direct response', text: 'Your inquiry goes straight to Flynn James and a confirmation is sent to your inbox.' },
              { icon: ShieldCheck, title: 'Confidential', text: 'Share the sales challenge, ICP, market, and goals you are comfortable discussing.' },
              { icon: Clock3, title: 'Practical next step', text: 'Expect a focused response around fit, priorities, and measurable outbound outcomes.' },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/60"
              >
                <Icon className="w-4 h-4 text-amber-400 mb-3" />
                <h2 className="text-[13px] font-semibold text-white">{title}</h2>
                <p className="mt-1.5 text-[12px] leading-6 text-slate-500">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-6 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-500">
            <Clock3 className="w-3.5 h-3.5 text-amber-400" />
            Simple inquiry · Email confirmation · Response within 24 hours
          </div>

          <ContactSection initialService={initialService} />
        </div>
      </Section>
    </>
  );
};
