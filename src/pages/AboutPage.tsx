import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Headphones, Shield, Flame, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { OptimizedImage } from '../components/OptimizedImage';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';
import { useSEO } from '../hooks/useSEO';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

const PILLARS = [
  {
    icon: Target,
    title: 'Consultative, not transactional',
    body: 'I diagnose before I prescribe. Every cold call starts with calculated questions that help prospects articulate their own bottlenecks before I ever pitch a solution.',
  },
  {
    icon: Flame,
    title: 'Relentless outbound grit',
    body: "150+ dials a day doesn't intimidate me — it's the baseline I've held for over a decade. Mental endurance is a skill that takes years to build.",
  },
  {
    icon: Headphones,
    title: 'Active listening & pattern breaks',
    body: 'Cold calling is 80% listening. I disarm knee-jerk defensiveness in the first seven seconds and turn objections into genuine business conversations.',
  },
  {
    icon: Shield,
    title: 'Pristine CRM discipline',
    body: 'No phantom pipeline. Every contact, disposition note, recording, and callback is documented for complete forecasting transparency.',
  },
];

const TRAITS = [
  'Coachability & adaptability — new offers in 48–72 hrs',
  'Executive phone presence with C-level buyers',
  'Strict BANT qualification on every meeting booked',
  'Autonomous work ethic in remote, KPI-driven teams',
];

const EXPERTISE = [
  { icon: Briefcase, label: 'Core Discipline', value: 'B2B Outbound Sales Development' },
  { icon: GraduationCap, label: 'Methodology', value: 'BANT · MEDDIC · Consultative Discovery' },
  { icon: Globe, label: 'Markets Served', value: 'US · UK · ANZ · CA · SG' },
  { icon: Award, label: 'Performance Tier', value: 'Level 4 · Top 5% Company-Wide' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  useSEO({
    title: 'About Flynn James | 11+ Years in B2B Outbound Sales',
    description:
      'Meet Flynn James, a Senior B2B SDR and Junior Sales Team Lead with 11+ years of cold calling, appointment setting, and SDR coaching experience.',
    canonical: '/about',
    keywords: 'about Flynn James, B2B sales specialist, SDR background, outbound sales expert',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      dateCreated: '2025-01-15',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntity: {
        '@type': 'Person',
        name: 'Flynn James Q. Pontino',
        alternateName: 'Flynn James',
        jobTitle: 'Senior B2B SDR & Junior Sales Team Lead',
        description: 'Senior B2B Sales Development Representative with 11+ years of outbound experience.',
        url: 'https://flynnjamespontino-porfolio.onrender.com/about',
        email: 'va.flynnjames@gmail.com',
        telephone: '+63-930-635-9306',
        image: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
        sameAs: ['https://www.linkedin.com/in/fjpontino'],
        knowsAbout: [
          'B2B Appointment Setting',
          'Cold Calling',
          'Lead Generation',
          'SDR Coaching',
          'Outbound Sales',
          'LinkedIn Sales Navigator',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Regen Digital US',
        },
      },
    },
  });

  return (
    <>
      <PageHeader
        index="02"
        eyebrow="About"
        title="A pipeline partner,"
        titleAccent="not a dialing machine."
        description="I bridge the gap between high-volume outbound grit and executive consultative selling. Here's the story behind 11+ years on the phones."
        photoClass="bg-photo-about"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-white leading-snug tracking-tight">
                Eleven years of turning cold lists into warm revenue.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] text-slate-300 leading-[1.8]"
            >
              I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I started on the phone lines in
              2014 — hundreds of dials a day across time zones, accents, and industries I'd never heard of. What looked like
              a grind became a craft.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-slate-300 leading-[1.8]"
            >
              Over the years, I refined the craft into a science: permission-based phone openings, multi-touch email
              cadences, hyper-targeted LinkedIn outreach, and CRM hygiene that makes your pipeline forecast actually mean
              something.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] text-slate-300 leading-[1.8]"
            >
              Whether I'm running independent outbound campaigns or leading SDR teams at{' '}
              <strong className="text-white font-semibold">Regen Digital US</strong>, the mission stays the same: put your
              closers in front of informed, engaged decision-makers who are actually ready to solve a problem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-10 border-l-2 border-amber-400/60 pl-6"
            >
              <p className="font-serif italic text-[19px] sm:text-[21px] text-slate-200 leading-[1.5]">
                "A calendar invite is only as valuable as the deal it generates. My job isn't to book a slot — it's to hand
                your AE an informed, engaged buyer."
              </p>
              <div className="mt-4 text-[11.5px] font-mono text-slate-500 uppercase tracking-wider">— Flynn James</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[15px] text-slate-300 leading-[1.8]"
            >
              When you bring me onto a campaign, there's no guesswork and no lengthy ramp. I plug into your CRM immediately,
              align with your ICP, and start booking qualified meetings within the first week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap gap-3"
            >
              <Button variant="primary" onClick={() => onOpenContact()} className="group">
                Work with Flynn
              </Button>
              <Button variant="secondary" onClick={() => onNavigate('experience')} withArrow className="group">
                Full career timeline
              </Button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800/60">
                  <OptimizedImage
                    src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                    alt="Flynn James, Senior B2B SDR and outbound sales specialist"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-lg object-cover border border-amber-400/30"
                    priority
                  />
                  <div>
                    <div className="text-[14.5px] font-semibold text-white leading-tight">Flynn James Q. Pontino</div>
                    <div className="text-[11.5px] text-slate-400 mt-1">Senior B2B SDR · Team Lead</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider font-mono">
                    Operating DNA
                  </h3>
                </div>

                <ul className="space-y-4">
                  {TRAITS.map((trait, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400/70 shrink-0" />
                      <span className="text-[13px] text-slate-300 leading-relaxed">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-6">
                <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider font-mono mb-5">
                  Professional profile
                </h3>
                <dl className="space-y-4 text-[13px]">
                  {EXPERTISE.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <dt className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">
                            {item.label}
                          </dt>
                          <dd className="text-slate-200 mt-1 font-medium">{item.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </motion.aside>
        </div>
      </Section>

      <Section bordered className="section-photo bg-photo-laptop">
        <SectionHeading
          index="02.1"
          eyebrow="How I think"
          title="Four principles that"
          titleAccent="shape every call."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/60 rounded-lg overflow-hidden border border-slate-800/60 mt-14">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#0b0f19]/90 hover:bg-slate-900/80 p-8 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2">{p.title}</h3>
                    <p className="text-[13.5px] text-slate-400 leading-[1.75]">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Expanded SEO content block */}
      <Section bordered>
        <div className="max-w-3xl">
          <SectionHeading
            index="02.2"
            eyebrow="Background"
            title="Where the experience"
            titleAccent="comes from."
          />
          <div className="mt-8 space-y-5 text-[15px] text-slate-300 leading-[1.85]">
            <p>
              Flynn's career spans over a decade of frontline B2B outbound. He began in 2014 in a high-volume BPO
              environment in the Philippines, moved through progressively senior sales roles across international
              campaigns, and now operates as a remote Senior B2B SDR and Junior Sales Team Lead for Regen Digital US.
            </p>
            <p>
              Along the way, he has generated qualified pipeline for companies in digital marketing, enterprise SaaS,
              cloud IT infrastructure, government technology, and B2B events. His track record includes $1.8M+ in sourced
              pipeline for a UK marketing agency, $1.2M in enterprise deals for a Singapore cloud provider, and Top 5%
              rep status across two consecutive years at Public Sector Network in Toronto.
            </p>
            <p>
              Beyond personal quota attainment, Flynn mentors junior SDRs — running call listening labs, objection
              handling workshops, and structured onboarding playbooks that reduce ramp time by 25%.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};