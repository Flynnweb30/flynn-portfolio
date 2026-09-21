import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  FileText,
  Star,
  PhoneCall,
  TrendingUp,
  Mail,
  Linkedin,
  ExternalLink,
  Clock,
  Shield,
  Send,
  CheckCircle2,
  Users,
  Building2,
  Rocket,
  BarChart3,
  Target,
  CalendarDays,
} from 'lucide-react';
import { PERSONAL_INFO, CASE_STUDIES, CORE_SERVICES, TESTIMONIALS } from '../data/portfolioData';
import { PageId, CaseStudy, WorkSample } from '../types';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { OptimizedImage } from '../components/OptimizedImage';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onOpenBooking: () => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (s: WorkSample) => void;
  onSuccessToast?: (msg: string) => void;
}

const TOOL_LOGOS = [
  { short: 'GA', name: 'Google Analytics' },
  { short: 'S', name: 'SEMrush' },
  { short: 'SF', name: 'Salesforce' },
  { short: 'HS', name: 'HubSpot' },
  { short: 'SN', name: 'LinkedIn Sales Navigator' },
];

const ROLE_SERVICES = [
  {
    icon: Users,
    eyebrow: 'For HR Managers',
    title: 'Hire for proven outbound execution',
    description: 'Need an SDR who can ramp quickly, handle live conversations, qualify cleanly, and contribute beyond activity metrics?',
    points: ['Cold-call confidence', 'CRM discipline', 'Coachable team leadership'],
    cta: 'Review my experience',
    page: 'experience' as PageId,
  },
  {
    icon: Building2,
    eyebrow: 'For Business Owners',
    title: 'Turn prospecting into revenue conversations',
    description: 'Build a practical outbound motion around your ICP, offer, scripts, follow-up, and appointment quality instead of chasing raw dial counts.',
    points: ['Qualified appointment setting', 'High-volume cold calling', 'Lead reactivation & follow-up'],
    cta: 'Explore services',
    page: 'services' as PageId,
  },
  {
    icon: Rocket,
    eyebrow: 'For Startups',
    title: 'Create a scalable SDR foundation',
    description: 'Launch or tighten an outbound process with targeting, qualification, messaging, CRM hygiene, and coaching built into the workflow.',
    points: ['ICP & account targeting', 'Playbooks & call frameworks', 'Rep coaching & floor support'],
    cta: 'See the playbooks',
    page: 'samples' as PageId,
  },
];

const PAIN_POINTS = [
  {
    icon: Target,
    title: 'Wasted budget',
    text: 'Lists, tools, and ad spend can become expensive noise when the outbound process is not reaching the right buyers.',
  },
  {
    icon: BarChart3,
    title: 'Low conversion',
    text: 'More dials do not automatically create more pipeline when messaging, qualification, and follow-up are disconnected.',
  },
  {
    icon: Users,
    title: 'Bad-fit leads',
    text: 'A full calendar is not the goal. The goal is useful conversations with the people who can actually move a buying process forward.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onOpenBooking,
  onSelectCaseStudy,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceNeeded: 'B2B Appointment Setting',
    targetMarket: 'United States',
    meetingTarget: '25-35 Meetings/Mo',
    message: '',
  });
  const [isSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    const handleInquirySuccess = () => {
      setFormData({ name: '', email: '', company: '', phone: '', serviceNeeded: 'B2B Appointment Setting', targetMarket: 'United States', meetingTarget: '25-35 Meetings/Mo', message: '' });
      setSubmitted(true);
    };
    window.addEventListener('flynn:inquiry-success', handleInquirySuccess);
    return () => window.removeEventListener('flynn:inquiry-success', handleInquirySuccess);
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  const inputCls =
    'w-full px-3.5 py-2.5 text-[15px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-400/60 transition-colors';
  const labelCls = 'block text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2';

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden section-photo bg-photo-hero">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none hero-gradient" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-blue-400/20 backdrop-blur-md"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-400" />
                </span>
                <span className="text-[11.5px] font-medium text-slate-200 tracking-tight">
                  Senior SDR · Junior Sales Team Lead · Remote Worldwide
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-[40px] sm:text-[56px] lg:text-[68px] font-bold text-white leading-[1.02] tracking-tight"
              >
                I turn conversations into
                <br />
                <span className="font-serif italic hero-gradient-text">qualified opportunities.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-8 max-w-2xl text-[16px] sm:text-[17px] text-slate-300 leading-[1.7]"
              >
                I'm <strong className="text-white font-semibold">Flynn James</strong> — a Senior B2B SDR and Junior Sales Team Lead with 11+ years in outbound sales. I help HR teams, business owners, and startup founders create qualified conversations through disciplined prospecting, cold calling, appointment setting, and SDR coaching.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Button variant="primary" size="lg" onClick={() => onOpenBooking()} className="group ghl-cta-primary">
                  <CalendarDays className="w-4 h-4" />
                  Let's Talk
                </Button>
                <Button variant="secondary" size="lg" onClick={() => onNavigate('case-studies')} withArrow className="group">
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-slate-700/50"
              >
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12.5px] text-slate-300">
                    11+ years · $1.8M+ pipeline sourced · 30+ monthly meetings
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 lg:pt-6"
            >
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-blue-400/40 rounded-tr-lg pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-teal-400/30 rounded-bl-lg pointer-events-none" />
                <div className="bg-slate-900/75 backdrop-blur-md border border-slate-700/60 rounded-xl p-6 sm:p-7 shadow-2xl shadow-black/40">
                  <div className="flex items-start gap-4 pb-5 border-b border-slate-700/60">
                    <OptimizedImage
                      src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                      alt="Flynn James, Senior B2B SDR and Junior Sales Team Lead"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-lg object-cover border border-blue-400/30"
                      priority
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-1">Positioning</div>
                      <div className="text-[14.5px] font-semibold text-white leading-tight">Senior SDR · Junior Team Lead</div>
                      <div className="text-[12px] text-slate-400 mt-0.5">Outbound · Appointment Setting · Coaching</div>
                    </div>
                  </div>

                  <div className="mt-5 text-[10px] font-mono text-slate-500 uppercase tracking-wider">Example performance dashboard</div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {[
                      { label: 'Total Clicks', value: '1.8M+', note: 'pipeline sourced', tone: 'blue' },
                      { label: 'Impressions', value: '30+', note: 'qualified meetings / mo', tone: 'purple' },
                      { label: 'Conversion Rate', value: '70%+', note: 'meeting show-up rate', tone: 'teal' },
                      { label: 'Quota', value: '120–150%', note: 'attainment range', tone: 'orange' },
                    ].map((metric) => (
                      <div key={metric.label} className={`dashboard-card dashboard-${metric.tone}`}>
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</div>
                        <div className="text-[22px] font-bold text-white tabular leading-none mt-2">{metric.value}</div>
                        <div className="text-[10.5px] text-slate-500 mt-2">{metric.note}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-5 border-t border-slate-700/60 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Baseline → hero</div>
                      <div className="text-[12px] text-slate-300 mt-1">Illustrative outbound journey: no qualified motion → repeatable pipeline process.</div>
                    </div>
                    <button
                      onClick={() => onNavigate('case-studies')}
                      className="shrink-0 text-[12px] font-medium text-blue-300 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      Proof <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="border-y border-slate-800/60 bg-slate-950/80 backdrop-blur-sm" aria-label="Sales and analytics platforms">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-7 sm:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
            <div className="shrink-0">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Tools I work across</div>
              <div className="text-[12px] text-slate-300 mt-1">Sales, CRM, prospecting & analytics</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 flex-1">
              {TOOL_LOGOS.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 hover:border-blue-400/20 transition-colors">
                  <span className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-teal-400/15 border border-slate-700/70 flex items-center justify-center text-[9px] font-bold text-slate-200">{tool.short}</span>
                  <span className="text-[11.5px] text-slate-300 leading-tight">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <Section bordered>
        <div className="max-w-3xl mb-12">
          <SectionHeading
            index="00"
            eyebrow="The problem"
            title="Your sales team doesn't need"
            titleAccent="more noise."
            description="It needs better conversations with the right buyers, backed by a process that turns activity into measurable pipeline."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PAIN_POINTS.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.article
                key={pain.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/55 hover:border-blue-400/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-blue-400/15 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-blue-300" />
                </div>
                <h2 className="text-[17px] font-semibold text-white">{pain.title}</h2>
                <p className="mt-3 text-[13.5px] text-slate-400 leading-[1.75]">{pain.text}</p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* ── RESULTS DASHBOARD ── */}
      <Section bordered className="section-photo bg-photo-desk">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="Results dashboard"
              title="From activity to"
              titleAccent="qualified pipeline."
              description="A GSC-inspired view of the metrics that matter in outbound: reach, conversations, meetings, show rate, and quota attainment."
            />
            <div className="mt-7 flex flex-wrap gap-2 text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">
              <span className="px-2.5 py-1.5 rounded-md border border-blue-400/15 bg-blue-400/5">Target</span>
              <span className="px-2.5 py-1.5 rounded-md border border-purple-400/15 bg-purple-400/5">Engage</span>
              <span className="px-2.5 py-1.5 rounded-md border border-teal-400/15 bg-teal-400/5">Qualify</span>
              <span className="px-2.5 py-1.5 rounded-md border border-orange-400/15 bg-orange-400/5">Convert</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-950/75 backdrop-blur-md p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Outbound performance</div>
                  <div className="text-[14px] text-white font-semibold mt-1">Baseline → repeatable motion</div>
                </div>
                <span className="text-[10px] font-mono text-teal-300 px-2.5 py-1 rounded-full bg-teal-400/10 border border-teal-400/15">11+ years</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                {[
                  ['Total Clicks', '$1.8M+', 'pipeline sourced'],
                  ['Impressions', '30+', 'qualified meetings/mo'],
                  ['Conversion Rate', '70%+', 'show-up rate'],
                ].map(([label, value, note], i) => (
                  <div key={label} className={`p-4 rounded-xl border ${i === 0 ? 'border-blue-400/20 bg-blue-500/5' : i === 1 ? 'border-purple-400/20 bg-purple-500/5' : 'border-teal-400/20 bg-teal-500/5'}`}>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{label}</div>
                    <div className="text-[28px] font-bold text-white mt-2 tabular">{value}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-24 rounded-xl border border-slate-800/80 bg-[#0b0f19] overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 h-full dashboard-chart" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-3 px-4 flex justify-between text-[9px] font-mono text-slate-600 uppercase tracking-wider">
                  <span>Baseline</span><span>Targeting</span><span>Conversations</span><span>Qualified</span><span>Pipeline</span>
                </div>
              </div>
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11.5px] text-slate-400">
                <span>Performance figures reflect documented portfolio experience; individual campaign results vary by offer, market, and list quality.</span>
                <button onClick={() => onNavigate('case-studies')} className="shrink-0 text-blue-300 hover:text-white font-medium inline-flex items-center gap-1">See proof <ArrowUpRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── LEAD MAGNET ── */}
      <section id="free-pipeline-audit" className="border-b border-slate-800/60 bg-slate-900/45">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-14">
          <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="text-[10.5px] font-mono text-orange-300 uppercase tracking-wider mb-2">Free outbound lead magnet</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get the free 10-minute outbound audit checklist.</h2>
                <p className="mt-3 text-[14px] sm:text-[15px] text-slate-400 leading-relaxed">
                  Use the same practical checkpoints I use when reviewing prospecting: ICP fit, list quality, cold-call opening, qualification, follow-up, show-rate protection, and CRM handoff.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px] text-slate-400">
                  {['ICP & list quality', 'Cold-call conversion', 'Qualification gaps', 'Follow-up & show rate'].map((item) => (
                    <div key={item} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />{item}</div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <form data-inquiry-form data-form-name="lead-magnet" className="p-5 sm:p-6 rounded-xl bg-[#0b0f19]/75 border border-slate-800/80 space-y-4">
                  <input type="hidden" name="name" value="Lead Magnet Subscriber" readOnly />
                  <input type="hidden" name="company" value="Portfolio Lead Magnet" readOnly />
                  <input type="hidden" name="need" value="Free outbound audit checklist" readOnly />
                  <input type="hidden" name="message" value="Requested the free 10-minute outbound audit checklist." readOnly />
                  <label htmlFor="lead-magnet-email" className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">Work email</label>
                  <input id="lead-magnet-email" name="email" type="email" required placeholder="you@company.com" className={inputCls} aria-label="Work email for free outbound audit checklist" />
                  <button type="submit" className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-950 bg-orange-400 hover:bg-orange-300 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send me the checklist
                  </button>
                  <p className="text-[10.5px] text-center text-slate-600">No spam. Practical sales resources only.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / EXPERTISE ── */}
      <Section id="services-preview" bordered>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="02"
            eyebrow="Services & expertise"
            title="Different goals."
            titleAccent="One outbound system."
            description="Whether you are hiring, growing revenue, or building your first repeatable SDR motion, the work stays grounded in qualification, conversation quality, and measurable pipeline."
          />
          <Button variant="ghost" onClick={() => onNavigate('services')} withArrow className="group shrink-0">View all services</Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {ROLE_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.eyebrow}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-7 hover:border-blue-400/20 transition-colors"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 opacity-70" />
                <div className="w-10 h-10 rounded-lg bg-slate-950/70 border border-slate-700/70 flex items-center justify-center mb-6">
                  <Icon className="w-4 h-4 text-blue-300" />
                </div>
                <div className="text-[10.5px] font-mono text-blue-300 uppercase tracking-wider">{service.eyebrow}</div>
                <h2 className="text-[20px] font-semibold text-white leading-tight mt-2">{service.title}</h2>
                <p className="text-[13.5px] text-slate-400 leading-[1.75] mt-4">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => <li key={point} className="flex items-start gap-2.5 text-[12.5px] text-slate-300"><CheckCircle2 className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" />{point}</li>)}
                </ul>
                <button onClick={() => onNavigate(service.page)} className="mt-7 text-[12.5px] font-semibold text-white group-hover:text-blue-300 transition-colors inline-flex items-center gap-1.5">{service.cta}<ArrowUpRight className="w-3.5 h-3.5" /></button>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* ── CASE STUDIES PREVIEW ── */}
      <Section id="cases-preview" bordered className="section-photo bg-photo-desk">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading index="03" eyebrow="Selected work" title="Campaigns with" titleAccent="receipts." description="Real numbers from real B2B outbound campaigns across marketing agencies, enterprise SaaS, and government technology." />
          <Button variant="ghost" onClick={() => onNavigate('case-studies')} withArrow className="group shrink-0">All case studies</Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES.slice(0, 2).map((cs, i) => (
            <motion.button key={cs.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }} onClick={() => onSelectCaseStudy(cs)} className="group text-left bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-xl p-7 sm:p-8 transition-all">
              <div className="flex items-center gap-2 mb-5"><span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">{cs.industry}</span><span className="h-px w-4 bg-slate-600" /><span className="text-[11px] font-mono text-slate-400 tracking-wider">{cs.region}</span></div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-white leading-snug mb-5 group-hover:text-amber-50 transition-colors">{cs.title}</h3>
              <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-slate-700/60"><span className="text-[26px] sm:text-[32px] font-bold text-amber-400 tabular tracking-tight leading-none">{cs.headlineMetric}</span><span className="text-[11.5px] text-slate-500 font-mono">headline outcome</span></div>
              <div className="grid grid-cols-2 gap-4 text-[12.5px]">{cs.secondaryMetrics.slice(0, 4).map((m, j) => <div key={j}><div className="text-slate-500 font-mono text-[10.5px] uppercase tracking-wider">{m.label}</div><div className="text-slate-200 font-medium mt-1 tabular">{m.value}</div></div>)}</div>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section bordered className="section-photo bg-photo-meeting">
        <SectionHeading index="04" eyebrow="Client feedback" title="What sales leaders" titleAccent="say." description="Genuine testimonials from operations leads, head of sales, and managing directors I've worked with." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-7">
              <div className="flex items-center gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-[14px] text-slate-300 leading-[1.8]">“{t.quote}”</p>
              <div className="mt-6 pt-5 border-t border-slate-700/60"><div className="text-[13px] font-semibold text-white">{t.author}</div><div className="text-[11.5px] text-slate-500 mt-1">{t.title} · {t.company}</div></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CENTRALIZED CALENDAR BOOKING ── */}
      <Section id="calendar-booking" bordered className="section-photo bg-photo-contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              index="05"
              eyebrow="Centralized calendar"
              title="Let's put a real"
              titleAccent="conversation on the calendar."
              description="Use the custom booking tool to choose a weekday, timezone, and 20-minute strategy slot. Bring your ICP, current outbound process, and biggest bottleneck."
            />
            <div className="mt-7 space-y-3">
              {['20-minute strategy call', 'Timezone-aware scheduling', 'Clear next-step agenda', 'No obligation to proceed'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[13px] text-slate-300"><CheckCircle2 className="w-4 h-4 text-teal-300" />{item}</div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="calendar-widget-shell rounded-2xl border border-blue-400/20 bg-slate-950/80 backdrop-blur-md p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div><div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Flynn James booking tool</div><h2 className="text-[20px] font-semibold text-white mt-1">Book your strategy call</h2></div>
                <CalendarDays className="w-5 h-5 text-blue-300" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-400/15"><div className="text-[10px] font-mono text-slate-500 uppercase">Duration</div><div className="text-[14px] font-semibold text-white mt-2">20 minutes</div></div>
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-400/15"><div className="text-[10px] font-mono text-slate-500 uppercase">Format</div><div className="text-[14px] font-semibold text-white mt-2">Strategy call</div></div>
                <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-400/15"><div className="text-[10px] font-mono text-slate-500 uppercase">Timezone</div><div className="text-[14px] font-semibold text-white mt-2">Your local zone</div></div>
              </div>
              <button onClick={() => onOpenBooking()} className="mt-5 w-full py-3.5 px-6 rounded-lg bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold text-[13.5px] transition-colors inline-flex items-center justify-center gap-2"><CalendarDays className="w-4 h-4" /> Open the booking calendar</button>
              <p className="mt-3 text-center text-[10.5px] text-slate-600">Your booking details are sent securely to the existing calendar service.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" bordered className="section-photo bg-photo-contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading index="06" eyebrow="Direct inquiry" title="Have a pipeline problem?" titleAccent="Let's diagnose it." description="Tell me what you sell, who you want to reach, and where the current outbound motion is breaking down. I'll reply with a practical next step." />
            <div className="mt-10 space-y-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-blue-400/25 rounded-lg transition-colors" aria-label="Email Flynn James"><div className="flex items-center gap-3"><div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"><Mail className="w-4 h-4 text-blue-300" /></div><div><div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Email</div><div className="text-[13.5px] text-white font-medium mt-0.5 break-all">{PERSONAL_INFO.email}</div></div></div></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-blue-400/25 rounded-lg transition-colors" aria-label="View Flynn James LinkedIn profile"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"><Linkedin className="w-4 h-4 text-blue-300" /></div><div><div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</div><div className="text-[13.5px] text-white font-medium mt-0.5">/in/fjpontino</div></div></div><ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" /></div></a>
              <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-blue-400/25 rounded-lg transition-colors" aria-label="View Flynn James resume"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"><FileText className="w-4 h-4 text-blue-300" /></div><div><div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Resume</div><div className="text-[13.5px] text-white font-medium mt-0.5">Google Drive · PDF</div></div></div><ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" /></div></a>
            </div>
            <div className="mt-5 p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg"><div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">What happens next</div><ul className="space-y-3">{[{ icon: Clock, text: 'Response within 24 hours.' }, { icon: Shield, text: 'Free pipeline audit available.' }, { icon: CheckCircle2, text: 'Clear next steps and KPIs.' }].map(({ icon: Icon, text }) => <li key={text} className="flex items-start gap-3"><Icon className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" /><span className="text-[12.5px] text-slate-300 leading-relaxed">{text}</span></li>)}</ul></div>
          </div>

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-7 sm:p-9">
              {submitted ? (
                <div className="py-16 text-center"><div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-5 h-5" /></div><h2 className="text-[22px] font-bold text-white mb-3">Message received</h2><p className="text-[13.5px] text-slate-400 max-w-md mx-auto leading-relaxed">Thanks, {formData.name}. I'll be in touch at <span className="text-blue-300">{formData.email}</span> within 24 hours.</p><button onClick={() => setSubmitted(false)} className="mt-8 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">Send another message →</button></div>
              ) : (
                <form onSubmit={handleSubmit} data-inquiry-form data-form-name="home-contact" className="space-y-5">
                  <div className="pb-5 border-b border-slate-800/60"><h2 className="text-[18px] font-semibold text-white">Tell me about the opportunity</h2><p className="text-[12.5px] text-slate-500 mt-1.5">Confidential. Practical. No pressure.</p></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="home-contact-name" className={labelCls}>Full name *</label><input id="home-contact-name" name="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Smith" className={inputCls} /></div>
                    <div><label htmlFor="home-contact-email" className={labelCls}>Work email *</label><input id="home-contact-email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" className={inputCls} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="home-contact-company" className={labelCls}>Company *</label><input id="home-contact-company" name="company" type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Acme Inc." className={inputCls} /></div>
                    <div><label htmlFor="home-contact-service" className={labelCls}>Service needed *</label><select id="home-contact-service" name="need" value={formData.serviceNeeded} onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })} className={inputCls}><option>B2B Appointment Setting</option><option>High-Volume Cold Calling</option><option>Lead Generation & Targeting</option><option>SDR Coaching & Team Leadership</option><option>LinkedIn Social Selling</option><option>Custom Hybrid Outbound</option></select></div>
                  </div>
                  <div><label htmlFor="home-contact-phone" className={labelCls}>Phone / WhatsApp (optional)</label><input id="home-contact-phone" name="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 555 123 4567" className={inputCls} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="home-contact-market" className={labelCls}>Target market *</label><select id="home-contact-market" name="targetMarket" value={formData.targetMarket} onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })} className={inputCls}><option>United States</option><option>United Kingdom / Europe</option><option>Australia & New Zealand</option><option>Canada</option><option>Singapore / APAC</option><option>Global / Multi-region</option></select></div>
                    <div><label htmlFor="home-contact-target" className={labelCls}>Monthly meeting target</label><select id="home-contact-target" name="meetingTarget" value={formData.meetingTarget} onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })} className={inputCls}><option>15–20 Meetings/Mo</option><option>25–35 Meetings/Mo</option><option>40+ Meetings/Mo</option><option>Audit / Coaching Only</option></select></div>
                  </div>
                  <div><label htmlFor="home-contact-message" className={labelCls}>ICP & current bottleneck *</label><textarea id="home-contact-message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="We sell a B2B product to decision-makers in the US. Our closers need more qualified meetings and our outbound response rates are low..." className={inputCls + ' resize-none'} /></div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-950 bg-orange-400 hover:bg-orange-300 active:bg-orange-500 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"><Send className="w-4 h-4" />{isSubmitting ? 'Sending...' : 'Start the conversation'}</button>
                  <p className="text-[11px] text-center text-slate-600">No spam. 100% confidential. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section bordered>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden border border-blue-400/20 section-photo bg-photo-city p-10 sm:p-16 text-center">
          <div className="absolute inset-0 ambient-accent pointer-events-none" />
          <div className="relative max-w-2xl mx-auto z-10">
            <span className="text-[11px] font-mono text-orange-300 tracking-wider uppercase">Ready when you are</span>
            <h2 className="mt-5 text-[32px] sm:text-[42px] font-bold text-white leading-[1.1] tracking-tight">Let's turn your outbound motion into<br /><span className="font-serif italic hero-gradient-text">qualified conversations.</span></h2>
            <p className="mt-6 text-[15px] text-slate-300 max-w-xl mx-auto">Book a focused strategy call, review the case studies, or start with the free outbound audit checklist.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3"><Button variant="primary" size="lg" onClick={() => onOpenBooking()} className="ghl-cta-primary"><CalendarDays className="w-4 h-4" />Book a strategy call</Button><Button variant="secondary" size="lg" onClick={() => onNavigate('blog')} withArrow className="group">Read the sales blog</Button></div>
            <div className="mt-10 pt-8 border-t border-slate-700/50 grid grid-cols-3 gap-6 max-w-lg mx-auto">{[{ l: 'Experience', v: '11+ years' }, { l: 'Pipeline', v: '$1.8M+' }, { l: 'Meetings', v: '30+ / mo' }].map((s) => <div key={s.l}><div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">{s.l}</div><div className="text-[14px] font-semibold text-white mt-1.5">{s.v}</div></div>)}</div>
          </div>
        </motion.div>
      </Section>

    </>
  );
};
