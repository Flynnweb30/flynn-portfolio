import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock3, FileText, Linkedin, Mail, ShieldCheck, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

const inputCls =
  'w-full px-3.5 py-2.5 text-[15px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-400/60 transition-colors';
const labelCls = 'block text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2';

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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleInquirySuccess = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: string; email?: string }>).detail;
      setSubmitted(true);
      setFormData(INITIAL_FORM(initialService));
      void detail;
    };

    window.addEventListener('flynn:inquiry-success', handleInquirySuccess);
    return () => window.removeEventListener('flynn:inquiry-success', handleInquirySuccess);
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS submission is handled centrally by src/analytics.ts.
  };

  return (
    <section id="contact-form" className="relative py-20 sm:py-24 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.svg" alt="Flynn James logo" width="40" height="40" className="w-10 h-10 rounded-xl" decoding="async" />
              <div>
                <div className="text-[10.5px] font-mono text-amber-400/80 uppercase tracking-wider">08 · Direct inquiry</div>
                <div className="text-[12px] text-slate-500 mt-0.5">B2B sales & outbound support</div>
              </div>
            </div>

            <h2 className="text-[32px] sm:text-[42px] font-bold text-white leading-[1.08] tracking-tight">
              Have a pipeline problem?
              <br />
              <span className="font-serif italic text-amber-400/90">Let&apos;s diagnose it.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] text-slate-300 leading-[1.75]">
              Tell me what you sell, who you want to reach, and where the current outbound motion is breaking down. I&apos;ll review the details and reply with a practical next step.
            </p>

            <div className="mt-9 space-y-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-blue-400/25 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"><Mail className="w-4 h-4 text-blue-300" /></div>
                  <div>
                    <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Email</div>
                    <div className="text-[13.5px] text-white font-medium mt-0.5 break-all">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-blue-400/25 rounded-lg transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"><Linkedin className="w-4 h-4 text-blue-300" /></div>
                    <div><div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</div><div className="text-[13.5px] text-white font-medium mt-0.5">/in/fjpontino</div></div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </div>
              </a>
              <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-blue-400/25 rounded-lg transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center"><FileText className="w-4 h-4 text-blue-300" /></div>
                    <div><div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Resume</div><div className="text-[13.5px] text-white font-medium mt-0.5">Google Drive · PDF</div></div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </div>
              </a>
            </div>

            <div className="mt-5 p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">What happens next</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Clock3 className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" /><span className="text-[12.5px] text-slate-300 leading-relaxed">Response within 24 hours.</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" /><span className="text-[12.5px] text-slate-300 leading-relaxed">Free pipeline audit available.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" /><span className="text-[12.5px] text-slate-300 leading-relaxed">Clear next steps and KPIs.</span></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-6 sm:p-8 lg:p-9">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-5 h-5" /></div>
                  <h2 className="text-[22px] font-bold text-white mb-3">Message received</h2>
                  <p className="text-[13.5px] text-slate-400 max-w-md mx-auto leading-relaxed">Your inquiry has been sent successfully. A confirmation has been sent to your email, and I&apos;ll be in touch within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">Send another message →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="portfolio-contact-form" data-inquiry-form data-form-name="contact-page" className="space-y-5">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                  <input type="hidden" name="form_type" value="contact_page" />
                  <div className="pb-5 border-b border-slate-800/60">
                    <h2 className="text-[18px] font-semibold text-white">Tell me about the opportunity</h2>
                    <p className="text-[12.5px] text-slate-500 mt-1.5">Confidential. Practical. No pressure.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="contact-name" className={labelCls}>Full name *</label><input id="contact-name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Smith" className={inputCls} /></div>
                    <div><label htmlFor="contact-email" className={labelCls}>Work email *</label><input id="contact-email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" className={inputCls} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="contact-company" className={labelCls}>Company *</label><input id="contact-company" name="company" type="text" required autoComplete="organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Acme Inc." className={inputCls} /></div>
                    <div><label htmlFor="contact-service" className={labelCls}>Service needed *</label><select id="contact-service" name="need" value={formData.serviceNeeded} onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })} className={inputCls}><option>B2B Appointment Setting</option><option>High-Volume Cold Calling</option><option>Lead Generation & Targeting</option><option>SDR Coaching & Team Leadership</option><option>LinkedIn Social Selling</option><option>Custom Hybrid Outbound</option></select></div>
                  </div>
                  <div><label htmlFor="contact-phone" className={labelCls}>Phone / WhatsApp (optional)</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 555 123 4567" className={inputCls} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="contact-market" className={labelCls}>Target market *</label><select id="contact-market" name="targetMarket" value={formData.targetMarket} onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })} className={inputCls}><option>United States</option><option>United Kingdom / Europe</option><option>Australia & New Zealand</option><option>Canada</option><option>Singapore / APAC</option><option>Global / Multi-region</option></select></div>
                    <div><label htmlFor="contact-target" className={labelCls}>Monthly meeting target</label><select id="contact-target" name="meetingTarget" value={formData.meetingTarget} onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })} className={inputCls}><option>15–20 Meetings/Mo</option><option>25–35 Meetings/Mo</option><option>40+ Meetings/Mo</option><option>Audit / Coaching Only</option></select></div>
                  </div>
                  <div><label htmlFor="contact-message" className={labelCls}>ICP & current bottleneck *</label><textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="We sell a B2B product to decision-makers in the US. Our closers need more qualified meetings and our outbound response rates are low..." className={`${inputCls} resize-none`} /></div>
                  <button type="submit" className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-950 bg-orange-400 hover:bg-orange-300 active:bg-orange-500 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"><Send className="w-4 h-4" />Start the conversation</button>
                  <p className="text-[11px] text-center text-slate-600">No spam. 100% confidential. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
