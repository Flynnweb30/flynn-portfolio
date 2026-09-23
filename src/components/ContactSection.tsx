import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

const SERVICES = [
  'B2B Appointment Setting',
  'High-Volume Cold Calling',
  'Lead Generation & Targeting',
  'SDR Coaching & Team Leadership',
  'LinkedIn Social Selling',
  'Custom Hybrid Outbound',
];

const MARKETS = [
  'United States',
  'United Kingdom / Europe',
  'Australia & New Zealand',
  'Canada',
  'Singapore / APAC',
  'Global / Multi-region',
];

const TARGETS = [
  '15–20 Meetings/Mo',
  '25–35 Meetings/Mo',
  '40+ Meetings/Mo',
  'Audit / Coaching Only',
];

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceNeeded: initialService && SERVICES.includes(initialService) ? initialService : 'B2B Appointment Setting',
    targetMarket: 'United States',
    meetingTarget: '25–35 Meetings/Mo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleInquirySuccess = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: string; email?: string }>).detail;
      if (detail?.name || detail?.email) {
        setFormData((current) => ({
          ...current,
          name: detail.name || current.name,
          email: detail.email || current.email,
        }));
      }
      setSubmitted(true);
      onSuccessToast?.('Inquiry sent successfully. Check your inbox for the confirmation email.');
    };
    window.addEventListener('flynn:inquiry-success', handleInquirySuccess);
    return () => window.removeEventListener('flynn:inquiry-success', handleInquirySuccess);
  }, []);

  const inputCls =
    'w-full px-3.5 py-2.5 text-[15px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-400/60 transition-colors';
  const labelCls = 'block text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2';

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      serviceNeeded: 'B2B Appointment Setting',
      targetMarket: 'United States',
      meetingTarget: '25–35 Meetings/Mo',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden section-photo bg-photo-contact border-t border-slate-800/60">
      <div className="absolute inset-0 bg-[#070b14]/55 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="text-[10.5px] font-mono text-orange-300 uppercase tracking-wider mb-2">Direct inquiry</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Tell me about the opportunity.
                </h2>
                <p className="mt-4 text-[14px] sm:text-[15px] text-slate-300 leading-[1.75]">
                  Share the offer, market, and outbound bottleneck. I’ll review the details and respond with a practical next step.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    ['01', 'Confidential', 'Your information is used only to respond to your inquiry.'],
                    ['02', 'Practical', 'The form captures the context needed for a useful first response.'],
                    ['03', 'Direct', 'Your message is delivered to Flynn James and a confirmation is sent to you.'],
                  ].map(([num, title, text]) => (
                    <div key={num} className="flex gap-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm">
                      <span className="text-[10px] font-mono text-amber-400 mt-0.5">{num}</span>
                      <div><div className="text-[12.5px] font-semibold text-white">{title}</div><p className="mt-1 text-[11.5px] text-slate-500 leading-relaxed">{text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55 }}
                className="bg-slate-950/85 backdrop-blur-md border border-slate-700/70 rounded-xl p-6 sm:p-8 shadow-2xl"
              >
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h2 className="text-[22px] font-bold text-white mb-3">Message received</h2>
                    <p className="text-[13.5px] text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thanks, {formData.name || 'there'}. Your inquiry has been delivered and a confirmation has been sent to <span className="text-blue-300">{formData.email}</span>.
                    </p>
                    <button onClick={resetForm} className="mt-8 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">Send another message →</button>
                  </div>
                ) : (
                  <form data-inquiry-form data-form-name="contact-page" className="space-y-5" id="portfolio-contact-form">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
                    <input type="hidden" name="form_type" value="contact_page" />
                    <div className="pb-5 border-b border-slate-800/60">
                      <h3 className="text-[18px] font-semibold text-white">Start the conversation</h3>
                      <p className="text-[12.5px] text-slate-500 mt-1.5">Complete the details below. Required fields are marked with *.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label htmlFor="contact-name" className={labelCls}>Full name *</label><input id="contact-name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Smith" className={inputCls} /></div>
                      <div><label htmlFor="contact-email" className={labelCls}>Work email *</label><input id="contact-email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" className={inputCls} /></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label htmlFor="contact-company" className={labelCls}>Company *</label><input id="contact-company" name="company" type="text" required autoComplete="organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Acme Inc." className={inputCls} /></div>
                      <div><label htmlFor="contact-service" className={labelCls}>Service needed *</label><select id="contact-service" name="serviceNeeded" required value={formData.serviceNeeded} onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })} className={inputCls}>{SERVICES.map((service) => <option key={service}>{service}</option>)}</select></div>
                    </div>

                    <div><label htmlFor="contact-phone" className={labelCls}>Phone / WhatsApp <span className="text-slate-600">(optional)</span></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 555 123 4567" className={inputCls} /></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div><label htmlFor="contact-market" className={labelCls}>Target market *</label><select id="contact-market" name="targetMarket" required value={formData.targetMarket} onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })} className={inputCls}>{MARKETS.map((market) => <option key={market}>{market}</option>)}</select></div>
                      <div><label htmlFor="contact-target" className={labelCls}>Monthly meeting target</label><select id="contact-target" name="meetingTarget" value={formData.meetingTarget} onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })} className={inputCls}>{TARGETS.map((target) => <option key={target}>{target}</option>)}</select></div>
                    </div>

                    <div><label htmlFor="contact-message" className={labelCls}>ICP & current bottleneck *</label><textarea id="contact-message" name="message" required minLength={10} rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="We sell a B2B product to decision-makers in the US. Our closers need more qualified meetings and our outbound response rates are low..." className={inputCls + ' resize-none'} /></div>

                    <button type="submit" className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-950 bg-orange-400 hover:bg-orange-300 active:bg-orange-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      <Send className="w-4 h-4" /> Start the conversation
                    </button>
                    <p className="text-[11px] text-center text-slate-600">No spam. 100% confidential. Response within 24 hours.</p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
