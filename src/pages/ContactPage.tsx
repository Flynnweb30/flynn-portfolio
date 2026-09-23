import React from 'react';
import { PageMeta } from '../components/PageMeta';
import { Section } from '../components/Section';
import { ContactSection } from '../components/ContactSection';
import { MailCheck, ShieldCheck, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  return (
    <>
      <PageMeta
        title="Contact & Proposal Request | Flynn James"
        description="Initiate a direct outbound inquiry with Flynn James. Share your ICP, calling volume targets, and current sales challenges for a targeted outbound assessment."
        canonicalPath="/contact"
      />

      <Section bordered className="section-photo bg-photo-contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              {
                icon: MailCheck,
                title: 'Direct response',
                text: 'Your inquiry goes straight to Flynn James and a confirmation is sent to your inbox.',
              },
              {
                icon: ShieldCheck,
                title: 'Confidential',
                text: 'Share the sales challenge, ICP, market, and goals you are comfortable discussing.',
              },
              {
                icon: Clock3,
                title: 'Practical next step',
                text: 'Expect a focused response around fit, priorities, and measurable outbound outcomes.',
              },
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
                <p className="mt-1.5 text-[12px] leading-6 text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <Clock3 className="w-3.5 h-3.5 text-amber-400" />
            Simple inquiry · Email confirmation · Response within 24 hours
          </div>

          <ContactSection initialService={initialService} />
        </div>
      </Section>
    </>
  );
};
