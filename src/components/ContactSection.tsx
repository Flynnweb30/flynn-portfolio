import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Clock3,
  FileText,
  Linkedin,
  Mail,
  ShieldCheck,
  Send,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sendInquiry } from '../analytics';

interface ContactSectionProps {
  initialService?: string;
}

const inputCls =
  'w-full px-4 py-3 text-[16px] sm:text-[14px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-colors';
const labelCls = 'block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-medium';

const SERVICE_OPTIONS = [
  'B2B Appointment Setting',
  'High-Volume Cold Calling',
  'B2B Lead Generation & Account Targeting',
  'SDR Support, Coaching & Floor Leadership',
  'LinkedIn Social Selling & Sales Navigator',
  'Prospecting, Follow-Up & CRM Pipeline Hygiene',
  'Custom Hybrid Outbound Campaign',
];

const INITIAL_FORM = (initialService?: string) => ({
  name: '',
  email: '',
  company: '',
  phone: '',
  serviceNeeded: initialService || 'B2B Appointment Setting',
  targetMarket: 'United States',
  meetingTarget: '25–35 Meetings/Mo',
  message: '',
});

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState(() => INITIAL_FORM(initialService));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync with initialService prop if changed dynamically via navigation
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const success = await sendInquiry(e.currentTarget);
      if (success) {
        setSubmitted(true);
        setFormData(INITIAL_FORM(initialService));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Contact context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt="Flynn James logo"
                width="40"
                height="40"
                className="w-10 h-10 rounded-xl"
                decoding="async"
              />
              <div>
                <div className="text-[10.5px] font-mono text-amber-400 uppercase tracking-wider">
                  08 · Direct inquiry
                </div>
                <div className="text-[12px] text-slate-400 mt-0.5">B2B sales & outbound support</div>
              </div>
            </div>

            <h2 className="text-[30px] sm:text-[40px] font-bold text-white leading-[1.1] tracking-tight">
              Have a pipeline problem?
              <br />
              <span className="font-serif italic text-amber-400">Let&apos;s diagnose it.</span>
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-slate-300 leading-[1.75]">
              Tell me what you sell, who you want to reach, and where the current outbound motion is
              breaking down. I&apos;ll review the details and reply with a practical next step.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-amber-400/40 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider">
                      Direct Email
                    </div>
                    <div className="text-[13.5px] text-white font-medium mt-0.5 break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-amber-400/40 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider">
                        LinkedIn Profile
                      </div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5">/in/fjpontino</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-amber-400/40 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider">
                        Resume PDF
                      </div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5">
                        Google Drive · Verified Credentials
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
              </a>
            </div>

            <div className="p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                Expected Response Time
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3">
                  <Clock3 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-slate-300 leading-relaxed">
                    Replies sent within 24 hours on business days.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-slate-300 leading-relaxed">
                    100% confidential pipeline diagnostic.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-slate-300 leading-relaxed">
                    Automatic confirmation sent to your inbox.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/70 backdrop-blur-md border border-slate-700/70 rounded-xl p-6 sm:p-8 lg:p-9 shadow-2xl"
            >
              {submitted ? (
                <div className="py-14 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-2">Message received</h3>
                  <p className="text-[14px] text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out. Your inquiry has been sent to Flynn James, and an
                    automated confirmation email has been dispatched to your inbox. I&apos;ll be in touch
                    within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 px-5 py-2.5 text-[13px] font-semibold text-amber-400 hover:text-amber-300 transition-colors border border-amber-400/30 hover:border-amber-400/60 rounded-lg cursor-pointer"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  id="portfolio-contact-form"
                  data-inquiry-form
                  data-react-managed="true"
                  data-form-name="contact_page"
                  className="space-y-5"
                >
                  {/* Spam honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-px w-px opacity-0"
                  />
                  <input type="hidden" name="form_type" value="contact_page" />
                  {/* Redundant fallback for templates expecting 'need' */}
                  <input type="hidden" name="need" value={formData.serviceNeeded} />

                  <div className="pb-4 border-b border-slate-800">
                    <h3 className="text-[18px] font-semibold text-white">Tell me about your outbound needs</h3>
                    <p className="text-[12.5px] text-slate-400 mt-1">
                      Fill out the details below to receive a diagnostic response and tailored proposal.
                    </p>
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
                        autoComplete="name"
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
                        autoComplete="email"
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
                        Company / URL *
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        required
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc. (acme.com)"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className={labelCls}>
                        Primary service *
                      </label>
                      <select
                        id="contact-service"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className={inputCls}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
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
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={inputCls}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-market" className={labelCls}>
                        Target geography / timezone *
                      </label>
                      <select
                        id="contact-market"
                        name="targetMarket"
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className={inputCls}
                      >
                        <option value="United States">United States (EST / CST / MST / PST)</option>
                        <option value="United Kingdom / Europe">United Kingdom / Europe (GMT / BST)</option>
                        <option value="Australia & New Zealand">Australia & New Zealand (AEST / NZST)</option>
                        <option value="Canada">Canada (EST / CST / PST)</option>
                        <option value="Singapore / APAC">Singapore / APAC (SGT)</option>
                        <option value="Global / Multi-region">Global / Multi-region</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-target" className={labelCls}>
                        Expected monthly meeting target
                      </label>
                      <select
                        id="contact-target"
                        name="meetingTarget"
                        value={formData.meetingTarget}
                        onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })}
                        className={inputCls}
                      >
                        <option value="15–20 Meetings/Mo">15–20 Meetings/Mo (Enterprise / High ACV)</option>
                        <option value="25–35 Meetings/Mo">25–35 Meetings/Mo (Standard B2B)</option>
                        <option value="40+ Meetings/Mo">40+ Meetings/Mo (High-Velocity / SMB)</option>
                        <option value="Audit / Coaching Only">Audit / Coaching Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelCls}>
                      ICP & current sales bottleneck *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We sell B2B SaaS to marketing leaders in the US. Our response rates have plateaued and our AEs need more qualified discovery calls..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-[14px] font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Start the conversation</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    No spam. 100% confidential. Your confirmation will be emailed immediately.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
