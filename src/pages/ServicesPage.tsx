import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Button } from '../components/Button';

interface ServicesPageProps {
  onSelectService: (s: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
  const [active, setActive] = useState<string>(CORE_SERVICES[0].id);
  const activeService = CORE_SERVICES.find((s) => s.id === active) || CORE_SERVICES[0];

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: activeService.title,
      description: activeService.description,
      provider: {
        '@type': 'Person',
        name: 'Flynn James Q. Pontino',
        url: 'https://flynnjamespontino-porfolio.onrender.com',
      },
      areaServed: ['US', 'GB', 'AU', 'CA', 'SG'],
      serviceType: activeService.title,
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [activeService]);

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Services"
        title="B2B sales services built"
        titleAccent="to fill your pipeline."
        description="Six focused outbound engagements — appointment setting, cold calling, lead generation, SDR coaching, LinkedIn outreach, and CRM pipeline management. Each designed to produce qualified meetings, not vanity activity metrics."
        photoClass="bg-photo-services"
      />

      <Section>
        {/* SEO intro content */}
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="03.0"
            eyebrow="Overview"
            title="Six outbound services for"
            titleAccent="B2B sales teams."
          />
          <div className="mt-6 space-y-5 text-[15px] text-slate-300 leading-[1.85]">
            <p>
              Flynn James offers six specialised B2B outbound services designed for SaaS, marketing agencies, IT firms,
              and professional services companies. Each engagement is scoped to produce qualified pipeline — not vanity
              activity metrics — and every service can run as a standalone project or as part of a full end-to-end
              outbound motion.
            </p>
            <p>
              Every campaign is executed across phone, email, and LinkedIn, with strict BANT qualification applied before
              any meeting hits an Account Executive's calendar. Flynn supports clients across the United States, United
              Kingdom, Australia, New Zealand, Canada, and Singapore.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                Select a service
              </div>
              <nav className="space-y-1" aria-label="Services list">
                {CORE_SERVICES.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    aria-current={active === service.id ? 'true' : undefined}
                    className={`w-full text-left px-4 py-3.5 rounded-lg transition-colors group flex items-start gap-3 ${
                      active === service.id
                        ? 'bg-slate-800/60 text-white'
                        : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className={`text-[10.5px] font-mono mt-0.5 ${
                        active === service.id ? 'text-amber-400' : 'text-slate-600'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13.5px] font-medium leading-snug">{service.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <motion.article
              key={activeService.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-7 sm:p-10"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 mb-6">
                <span className="w-1 h-1 rounded-full bg-amber-400" />
                <span className="text-[10.5px] font-mono text-slate-300 uppercase tracking-wider">
                  {activeService.badge}
                </span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] font-bold text-white leading-tight tracking-tight">
                {activeService.title}
              </h2>
              <p className="mt-3 text-[15px] text-amber-400/90 font-medium font-serif italic">
                {activeService.tagline}
              </p>

              <p className="mt-7 text-[14.5px] text-slate-300 leading-[1.8]">{activeService.description}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800/60 rounded-lg overflow-hidden border border-slate-800/60">
                <div className="bg-[#0b0f19] p-5">
                  <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Benchmark
                  </div>
                  <div className="text-[14px] text-amber-400 font-semibold">{activeService.metrics}</div>
                </div>
                <div className="bg-[#0b0f19] p-5">
                  <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Typical output
                  </div>
                  <div className="text-[13.5px] text-slate-200">{activeService.deliverableSummary}</div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-5">
                  Included scope
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {activeService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-slate-300 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/60">
                <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                  Tools & platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.toolsUsed.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[12px] font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/60 flex flex-wrap gap-3">
                <Button variant="primary" onClick={() => onOpenContact(activeService.title)}>
                  Request a proposal
                </Button>
                <Button variant="secondary" onClick={() => onSelectService(activeService)} withArrow className="group">
                  Full deliverables
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </Section>

      {/* Expanded detail per service */}
      <Section bordered className="section-photo bg-photo-callcenter">
        <SectionHeading
          index="03.1"
          eyebrow="Service detail"
          title="What each engagement"
          titleAccent="actually delivers."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-7"
            >
              <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">{service.title}</h3>
              <p className="text-[13.5px] text-slate-400 leading-[1.75]">{service.tagline}</p>
              <p className="text-[13.5px] text-slate-300 leading-[1.8] mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};