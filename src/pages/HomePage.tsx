import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Download,
  Mail,
  Calendar,
  Sparkles,
  Award,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { Section } from '../components/Section';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { ServiceCard } from '../components/ServiceCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { AudioPlayer } from '../components/AudioPlayer';
import {
  HERO_STATS,
  CORE_SERVICES,
  WORK_SAMPLES,
  CASE_STUDIES,
  CLIENT_REVIEWS,
  TECH_STACK,
  FAQ_ITEMS,
  PERSONAL_INFO,
  CaseStudy,
  WorkSample,
} from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenCaseStudy: (study: CaseStudy) => void;
  onOpenWorkSample: (sample: WorkSample) => void;
  onOpenContact: (serviceName?: string) => void;
}

const inputCls =
  'w-full px-3.5 py-2.5 text-[16px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors';

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCaseStudy,
  onOpenWorkSample,
  onOpenContact,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Flynn James | Senior B2B Appointment Setter & Outbound Sales Specialist';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Senior B2B Appointment Setter & Outbound Specialist with 8+ years experience, 12,000+ cold calls logged, and $3.4M+ pipeline generated across US, UK & Australian markets.',
      );
    }
  }, []);

  const featuredSamples = WORK_SAMPLES.slice(0, 3);
  const featuredCases = CASE_STUDIES.slice(0, 3);
  const featuredReviews = CLIENT_REVIEWS.slice(0, 3);

  const coldCallSample = WORK_SAMPLES.find((s) => s.type === 'audio');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden hero-gradient">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://user29984.na.imgto.link/public/20260919/team-flynn-1.avif')",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[12px] font-mono text-slate-300"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Select Contracts · US / UK / APAC Timezones</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-bold text-white tracking-tight leading-[1.1]">
                  Predictable outbound pipeline,{' '}
                  <span className="font-serif italic font-normal text-amber-400">
                    built on real cold-call execution.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-[15px] sm:text-[16.5px] text-slate-300 leading-[1.7] max-w-2xl"
              >
                I&apos;m <span className="text-white font-medium">Flynn James</span>, a Senior B2B
                Appointment Setter and Cold Calling Specialist with 8+ years on the phone. Over
                12,000 cold calls logged, 450+ qualified executive meetings booked, and $3.4M+ in
                pipeline generated across US, UK, and Australian B2B markets.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  type="button"
                  onClick={() => onOpenContact()}
                  className="px-5 py-3 text-[13.5px] font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an introductory call</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('work')}
                  className="px-5 py-3 text-[13.5px] font-medium text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Listen to live call audio</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-[13px] font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>
              </motion.div>

              {/* Social Proof Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4"
              >
                <div>
                  <div className="text-[18px] sm:text-[22px] font-bold text-white font-mono">
                    12,000+
                  </div>
                  <div className="text-[11.5px] text-slate-400">Cold Calls Logged</div>
                </div>
                <div>
                  <div className="text-[18px] sm:text-[22px] font-bold text-white font-mono">
                    450+
                  </div>
                  <div className="text-[11.5px] text-slate-400">Qualified Meetings</div>
                </div>
                <div>
                  <div className="text-[18px] sm:text-[22px] font-bold text-white font-mono">
                    $3.4M+
                  </div>
                  <div className="text-[11.5px] text-slate-400">Pipeline Generated</div>
                </div>
              </motion.div>
            </div>

            {/* Right: Profile Card + Featured Call */}
            <div className="lg:col-span-5 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-slate-900/75 backdrop-blur-md border border-slate-700/70 shadow-2xl"
              >
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800/80">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-amber-400/40 shrink-0">
                    <img
                      src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                      alt="Flynn James portrait"
                      width="64"
                      height="64"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <div className="text-[17px] font-bold text-white">Flynn James Pontino</div>
                    <div className="text-[12.5px] text-amber-400 font-mono">
                      Senior B2B Appointment Setter
                    </div>
                    <div className="text-[11.5px] text-slate-400 mt-0.5">
                      8+ Years Experience · US / UK / APAC
                    </div>
                  </div>
                </div>

                {/* Live Call Player */}
                {coldCallSample && (
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      <span>Live Call Recording Sample</span>
                      <span className="text-amber-400">Gatekeeper to Meeting</span>
                    </div>
                    <AudioPlayer
                      src={coldCallSample.mediaUrl}
                      title={coldCallSample.title}
                      subtitle={`${coldCallSample.prospectTitle} · ${coldCallSample.industry}`}
                    />
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[12px]">
                  <span className="text-slate-400">Next availability:</span>
                  <span className="font-mono text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Immediate (Q3 Contract Slots)
                  </span>
                </div>
              </motion.div>

              {/* Quick Credibility Bullet */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-[12px] text-slate-400 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Dialing natively on PhoneBurner, Mojo, HubSpot & Salesforce with sub-2-second CRM
                  disposition speed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <Section bordered className="py-12 bg-slate-950/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </Section>

      {/* Core Services Section */}
      <Section bordered id="services" className="section-photo bg-photo-services">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeader
            badge="02 · Core Specializations"
            title="Outbound systems engineered for meetings that convert."
            subtitle="I do not run generic script blasts. Every outbound motion is calibrated to your buyer's title, industry pressure points, and qualification criteria."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onRequestProposal={(srv) => onOpenContact(srv.title)}
              />
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Explore all service scopes & deliverables</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* Featured Proof / Work Samples */}
      <Section bordered id="work" className="section-photo bg-photo-work">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeader
            badge="03 · Execution Proof"
            title="Real calls, real scripts, real spreadsheets."
            subtitle="Review unedited work samples demonstrating tone control, gatekeeper navigation, objection handling, and clean list architecture."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredSamples.map((sample) => (
              <div
                key={sample.id}
                className="p-6 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    <span>{sample.category}</span>
                    <span className="text-amber-400">{sample.duration || sample.format}</span>
                  </div>

                  <h3 className="text-[17px] font-bold text-white">{sample.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed">
                    {sample.description}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[12px] space-y-1">
                    <div className="text-slate-500 font-mono text-[10.5px] uppercase">Key Metric</div>
                    <div className="text-amber-400 font-medium">{sample.metric}</div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11.5px] text-slate-400">{sample.industry}</span>
                  <button
                    type="button"
                    onClick={() => onOpenWorkSample(sample)}
                    className="text-[12.5px] font-medium text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect artifact</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>View full library of 6+ verified outbound work samples</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* Featured Case Studies */}
      <Section bordered id="case-studies" className="section-photo bg-photo-case-studies">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeader
            badge="04 · Pipeline Case Studies"
            title="Measurable outcomes across competitive B2B verticals."
            subtitle="In-depth breakdowns of target markets, volume pacing, qualification frameworks, and revenue pipeline attributed to outbound."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((study) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                onSelect={(cs) => onOpenCaseStudy(cs)}
              />
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Review full case studies with outbound playbooks</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* Client Testimonials */}
      <Section bordered id="reviews" className="section-photo bg-photo-testimonials">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeader
            badge="05 · Client Endorsements"
            title="What sales leaders and founders say about working with Flynn."
            subtitle="Direct feedback on work ethic, call volume consistency, script adaptability, and conversion performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-[13.5px] text-slate-300 leading-relaxed italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[13.5px] font-bold text-white">{review.name}</div>
                    <div className="text-[11.5px] text-slate-400">
                      {review.role}, {review.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11.5px] font-mono text-amber-400">{review.metrics}</div>
                    <div className="text-[10.5px] text-slate-500">{review.platform}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Read all verified client recommendations</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* Tech Stack & Tooling */}
      <Section bordered className="py-12 bg-slate-950/60">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                Outbound Infrastructure
              </div>
              <h3 className="text-[18px] font-bold text-white mt-0.5">
                Native mastery across the modern sales engagement stack
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('stack')}
              className="text-[12.5px] text-slate-400 hover:text-white inline-flex items-center gap-1 shrink-0"
            >
              <span>See workflow integrations</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TECH_STACK.slice(0, 8).map((tool) => (
              <div
                key={tool.name}
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-center space-y-1 hover:border-slate-700 transition-colors"
              >
                <div className="text-[13px] font-semibold text-white truncate">{tool.name}</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lead Magnet / Outbound Audit Box */}
      <Section bordered className="py-14 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] font-mono text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 10-Minute Outbound Diagnostic</span>
              </div>
              <h3 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight leading-tight">
                Not ready to hire?
                <br />
                <span className="font-serif italic text-amber-400">Audit your current outbound script.</span>
              </h3>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                Receive my 5-step Cold Call Objection Framework and cold calling quality checklist.
                Pinpoint why gatekeepers block you, why openers fail in seconds 0–7, and how to fix it.
              </p>
            </div>

            <div className="md:col-span-5">
              <form
                data-inquiry-form
                data-form-name="lead_magnet"
                className="p-5 sm:p-6 rounded-xl bg-[#0b0f19]/90 border border-slate-800/80 space-y-4 shadow-xl"
              >
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px opacity-0"
                />
                <input type="hidden" name="form_type" value="lead_magnet" />
                <input type="hidden" name="name" value="Lead Magnet Subscriber" readOnly />
                <input type="hidden" name="company" value="Portfolio Lead Magnet" readOnly />
                <input type="hidden" name="serviceNeeded" value="Free Outbound Audit Checklist" readOnly />
                <input type="hidden" name="need" value="Free Outbound Audit Checklist" readOnly />
                <input type="hidden" name="targetMarket" value="United States" />
                <input type="hidden" name="meetingTarget" value="Lead magnet subscriber" />
                <input
                  type="hidden"
                  name="message"
                  value="Requested the free 10-minute outbound audit checklist and objection matrix."
                  readOnly
                />

                <label htmlFor="lead-magnet-email" className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Work email
                </label>
                <input
                  id="lead-magnet-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputCls}
                  aria-label="Work email for free outbound audit checklist"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send me the checklist</span>
                </button>
                <p className="text-[10.5px] text-center text-slate-500">
                  No spam. Practical sales resources sent via email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section bordered id="faq" className="section-photo bg-photo-faq">
        <div className="max-w-4xl mx-auto space-y-10">
          <SectionHeader
            badge="06 · Frequently Asked Questions"
            title="Clear answers on onboarding, contracts, and expectations."
            subtitle="Straightforward details on setup, volume pacing, qualification criteria, and working arrangements."
          />

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14.5px] font-semibold text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-6 h-6 rounded-md bg-slate-800/80 flex items-center justify-center text-amber-400 text-sm font-mono transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    >
                      ›
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-[13px] text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Explore all operational questions & answers</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* Final Call to Action */}
      <Section bordered className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[12px] font-mono text-amber-400">
            <Award className="w-4 h-4" />
            <span>Senior Outbound Representation · 8+ Years Proven</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] font-bold text-white tracking-tight leading-tight">
            Ready to add qualified meetings to your calendar?
          </h2>

          <p className="text-[15px] sm:text-[16px] text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your target market, ACV, and current sales cycle. I&apos;ll outline a
            realistic appointment volume target and outbound roadmap.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="px-6 py-3.5 text-[14px] font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xl shadow-amber-400/25"
            >
              <Calendar className="w-4 h-4" />
              <span>Request outbound proposal</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-[14px] font-medium text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Go to contact page</span>
            </button>
          </div>

          <div className="text-[12px] text-slate-500 font-mono pt-4">
            Direct response · 24-hour turnaround · No spam guarantee
          </div>
        </div>
      </Section>
    </>
  );
};