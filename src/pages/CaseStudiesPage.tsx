import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { useSEO } from '../hooks/useSEO';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onSelectCaseStudy }) => {
  useSEO({
    title: 'B2B Sales Case Studies | Appointment Setting & Outbound Results',
    description:
      'Detailed case studies of B2B outbound campaigns: $1.8M pipeline sourced for a UK agency, 22% demo conversion for enterprise SaaS, and Level 4 ramp in 3 weeks.',
    canonical: '/case-studies',
    keywords:
      'B2B sales case studies, appointment setting results, cold calling case studies, outbound pipeline results',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'B2B Outbound Sales Case Studies',
      description:
        'Detailed breakdowns of outbound campaigns producing measurable B2B pipeline across marketing, SaaS, and enterprise IT.',
      numberOfItems: CASE_STUDIES.length,
      itemListElement: CASE_STUDIES.map((cs, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cs.title,
        description: cs.challenge.slice(0, 160),
        url: `https://flynnjamespontino-porfolio.onrender.com/case-studies#${cs.id}`,
      })),
    },
  });

  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Case Studies"
        title="Real campaigns."
        titleAccent="Real receipts."
        description="Detailed breakdowns of B2B outbound campaigns where I solved cold acquisition bottlenecks and generated measurable pipeline. Click any case for the full blueprint."
        photoClass="bg-photo-cases"
      />

      <Section>
        {/* SEO intro */}
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="05.0"
            eyebrow="Verified results"
            title="Measurable pipeline from"
            titleAccent="real B2B campaigns."
          />
          <div className="mt-6 space-y-5 text-[15px] text-slate-300 leading-[1.85]">
            <p>
              These case studies document four separate B2B outbound campaigns Flynn James has run across different
              industries, markets, and buyer profiles. Each includes the specific bottleneck that was solved, the
              tactical strategy that was executed, and the quantified revenue outcomes achieved.
            </p>
            <p>
              Campaigns span the UK (marketing agency outbound), Singapore (enterprise cloud SaaS), the United States
              (web design services), and Canada (public sector executive acquisition). Combined, they represent more than
              $3M in directly sourced pipeline.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.button
              key={cs.id}
              id={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => onSelectCaseStudy(cs)}
              className="w-full text-left group bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-xl p-7 sm:p-10 transition-all cursor-pointer"
              aria-label={`View case study: ${cs.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-[11px] font-mono tracking-wider">
                    <span className="text-slate-400 uppercase">{cs.industry}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{cs.region}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{cs.period}</span>
                  </div>

                  <h2 className="text-[22px] sm:text-[26px] font-bold text-white leading-[1.2] tracking-tight mb-4 group-hover:text-amber-50 transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-[14px] text-slate-400 leading-[1.75] line-clamp-3">{cs.challenge}</p>

                  <div className="mt-6 flex items-center gap-2 text-[12.5px] font-medium text-slate-400 group-hover:text-amber-400 transition-colors">
                    <span>Read full breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="pb-6 mb-6 border-b border-slate-700/60">
                    <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Headline outcome
                    </div>
                    <div className="text-[32px] sm:text-[40px] font-bold text-amber-400 tabular tracking-tight leading-none">
                      {cs.headlineMetric}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    {cs.secondaryMetrics.map((m, j) => (
                      <div key={j}>
                        <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">
                          {m.label}
                        </div>
                        <div className="text-[15px] text-white font-semibold mt-1.5 tabular">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>
    </>
  );
};