import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, FileText, Send, CheckCircle2, Copy, ExternalLink, Clock, Shield } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSEO } from '../hooks/useSEO';

interface ContactPageProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceNeeded: initialService || 'B2B Appointment Setting',
    targetMarket: 'United States',
    meetingTarget: '25-35 Meetings/Mo',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useSEO({
    title: 'Contact Flynn James | Hire a B2B SDR & Appointment Setter',
    description:
      'Get in touch with Flynn James for B2B appointment setting, cold calling, or SDR coaching. Free 20-minute pipeline audit. Response within 24 hours.',
    canonical: '/contact',
    keywords: 'hire B2B SDR, book appointment setter, contact sales specialist, hire cold caller',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Flynn James',
        description: 'Contact page for booking a B2B outbound strategy call with Flynn James.',
        url: 'https://flynnjamespontino-porfolio.onrender.com/contact',
        mainEntity: {
          '@type': 'Person',
          name: 'Flynn James Q. Pontino',
          email: 'va.flynnjames@gmail.com',
          telephone: '+63-930-635-9306',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How quickly will Flynn James respond to my inquiry?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Flynn typically responds to all inquiries within 2–4 hours during US business hours, and within 24 hours otherwise.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens on the free 20-minute pipeline audit call?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The call is a working session where Flynn reviews your current outbound motion, identifies where leads are leaking, and shares three specific improvements you can apply to your B2B sales process that week.',
            },
          },
          {
            '@type': 'Question',
            name: 'What B2B sales services does Flynn James offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Flynn offers six services: B2B appointment setting, high-volume cold calling, lead generation and account targeting, SDR coaching and team leadership, LinkedIn Sales Navigator outreach, and CRM pipeline management.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which time zones and markets does Flynn support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Flynn supports outbound campaigns across the United States, United Kingdom, Europe, Australia, New Zealand, Canada, and Singapore.',
            },
          },
        ],
      },
    ],
  });

  React.useEffect(() => {
    const handleInquirySuccess = () => {
      setFormData({ name: '', email: '', company: '', phone: '', serviceNeeded: initialService || 'B2B Appointment Setting', targetMarket: 'United States', meetingTarget: '25-35 Meetings/Mo', message: '' });
      setSubmitted(true);
    };
    window.addEventListener('flynn:inquiry-success', handleInquirySuccess);
    return () => window.removeEventListener('flynn:inquiry-success', handleInquirySuccess);
  }, [initialService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onSuccessToast?.('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  const inputCls =
    'w-full px-3.5 py-2.5 text-[15px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60 transition-colors';
  const labelCls = 'block text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2';

  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Contact"
        title="Let's talk pipeline,"
        titleAccent="not pleasantries."
        description="A 20-minute call to look at your current outbound motion and identify what's leaking. No pitch decks. No generic discovery framework. Just a working session."
        photoClass="bg-photo-contact"
      />

      <Section>
        {/* SEO intro matching Home page */}
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="07.0"
            eyebrow="Get in touch"
            title="Book a free"
            titleAccent="B2B pipeline audit."
          />
          <div className="mt-6 space-y-4 text-[15px] text-slate-300 leading-[1.85]">
            <p>
              If you're a founder, sales leader, or Account Executive looking to add consistent qualified meetings to
              your calendar, the fastest way to find out if Flynn James is a fit is a 20-minute working session. Bring
              your current outbound motion — scripts, ICP, tool stack, and existing results — and Flynn will identify
              three specific improvements you can apply this week.
            </p>
            <p>
              Whether you need a dedicated senior SDR, an appointment setting specialist for a specific region, or an
              external coach to lift your current team, the call will clarify the next step. All inquiries receive a
              response within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-[18px] font-semibold text-white mb-3">Direct channels</h2>
              <p className="text-[13.5px] text-slate-400 leading-[1.75]">
                I typically respond within 2–4 hours during US business hours, within 24 hours otherwise.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full text-left group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors cursor-pointer"
                aria-label="Copy Flynn James email address to clipboard"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Email</div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5 truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
                  )}
                </div>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors"
                aria-label="Call Flynn James"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <div className="text-[13.5px] text-white font-medium mt-0.5">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors"
                aria-label="View Flynn James LinkedIn profile"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5">/in/fjpontino</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors"
                aria-label="View Flynn James resume"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Resume</div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5">Google Drive · PDF</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
                </div>
              </a>
            </div>

            <div className="p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                What happens next
              </div>
              <ul className="space-y-3">
                {[
                  { icon: Clock, text: 'Response within 24 hours guaranteed.' },
                  { icon: Shield, text: 'Free 20-minute pipeline audit.' },
                  { icon: CheckCircle2, text: 'Tailored pilot plan with clear KPIs.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-slate-300 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg">
              <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                Frequently asked
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-[12.5px] font-semibold text-slate-200 mb-1">
                    How quickly will Flynn respond?
                  </dt>
                  <dd className="text-[12px] text-slate-400 leading-relaxed">
                    Within 2–4 hours during US business hours, within 24 hours otherwise.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold text-slate-200 mb-1">
                    What happens on the free pipeline audit?
                  </dt>
                  <dd className="text-[12px] text-slate-400 leading-relaxed">
                    A working session reviewing your current outbound motion, plus three specific improvements you can apply that week.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold text-slate-200 mb-1">Which markets are supported?</dt>
                  <dd className="text-[12px] text-slate-400 leading-relaxed">
                    US, UK, Europe, Australia, New Zealand, Canada, and Singapore.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-7 sm:p-9"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-[22px] font-bold text-white mb-3">Message received</h2>
                  <p className="text-[13.5px] text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thanks, {formData.name}. I'll be in touch at{' '}
                    <span className="text-amber-400">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-inquiry-form data-form-name="contact" className="space-y-5">
                  <div className="pb-5 border-b border-slate-800/60">
                    <h2 className="text-[18px] font-semibold text-white">Send a message</h2>
                    <p className="text-[12.5px] text-slate-500 mt-1.5">All information is confidential.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelCls}>
                        Full name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelCls}>
                        Work email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className={labelCls}>
                        Company *
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className={labelCls}>
                        Service needed *
                      </label>
                      <select
                        id="contact-service"
                        name="need"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className={inputCls}
                      >
                        <option>B2B Appointment Setting</option>
                        <option>High-Volume Cold Calling</option>
                        <option>Lead Generation & Targeting</option>
                        <option>SDR Coaching & Team Leadership</option>
                        <option>LinkedIn Social Selling</option>
                        <option>Custom Hybrid Outbound</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className={labelCls}>
                      Phone / WhatsApp (optional)
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 555 123 4567"
                      className={inputCls}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-market" className={labelCls}>
                        Target market *
                      </label>
                      <select
                        id="contact-market"
                        name="targetMarket"
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className={inputCls}
                      >
                        <option>United States</option>
                        <option>United Kingdom / Europe</option>
                        <option>Australia & New Zealand</option>
                        <option>Canada</option>
                        <option>Singapore / APAC</option>
                        <option>Global / Multi-region</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-target" className={labelCls}>
                        Monthly meeting target
                      </label>
                      <select
                        id="contact-target"
                        name="meetingTarget"
                        value={formData.meetingTarget}
                        onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })}
                        className={inputCls}
                      >
                        <option>15–20 Meetings/Mo</option>
                        <option>25–35 Meetings/Mo</option>
                        <option>40+ Meetings/Mo</option>
                        <option>Audit / Coaching Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelCls}>
                      ICP & current bottleneck *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We sell a $12k B2B SaaS platform to HR Directors in the US. Our closers aren't getting enough qualified meetings, and our SDR response rates are low..."
                      className={inputCls + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-600">
                    No spam. 100% confidential. Response within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};