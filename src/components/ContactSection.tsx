import React, { useState } from 'react';
import { 
  Mail, Phone, Linkedin, FileText, Send, CheckCircle2, 
  Copy, ExternalLink, Sparkles, Clock, Globe, ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeeded: initialService || 'B2B Appointment Setting',
    targetMarket: 'United States',
    callingVolume: '150+ Dials/Day',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    if (onSuccessToast) onSuccessToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccessToast) onSuccessToast("Thank you! Your inquiry was sent to Flynn James. Expect a response within 24 hours.");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S BUILD YOUR PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Fill Your Calendar With{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Qualified Meetings?
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Whether you need a full-time senior SDR, an outbound appointment setting specialist, or an SDR coach for your sales team.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-7 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Channels & Social
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically respond to all outbound inquiries within 2–4 hours during business days.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email Box with 1-click copy */}
                <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-slate-400 block font-semibold">Direct Email</span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-all text-xs flex items-center gap-1"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Call */}
                <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-semibold">Direct Phone / WhatsApp</span>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                        className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors block"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700 text-xs flex items-center gap-1"
                  >
                    <span>Call</span>
                  </a>
                </div>

                {/* LinkedIn Profile */}
                <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-semibold">LinkedIn Profile</span>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        linkedin.com/in/fjpontino
                      </span>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700 text-xs flex items-center gap-1"
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Resume Download Link */}
                <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-semibold">Official Resume</span>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        Google Drive Verified PDF
                      </span>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 text-xs flex items-center gap-1"
                  >
                    <span>View Resume</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* What Happens Next Guarantee */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  What Happens Next:
                </span>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Response within 24 hours guaranteed.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Free 20-minute ICP & pipeline teardown call.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Tailored outbound pilot plan with clear KPI targets.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact / Hire Me Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Flynn James has received your message and will get back to you at <span className="text-cyan-300">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        serviceNeeded: 'B2B Appointment Setting',
                        targetMarket: 'United States',
                        callingVolume: '150+ Dials/Day',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Request a Strategy Session or Campaign Proposal
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the fields below. All information is confidential and will never be shared.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company Name / URL *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Growth Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Primary Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="B2B Appointment Setting">B2B Appointment Setting</option>
                        <option value="High-Volume Cold Calling">High-Volume Cold Calling (150+ dials)</option>
                        <option value="Lead Generation & Account Targeting">Lead Gen & Account Targeting</option>
                        <option value="SDR Support & Team Coaching">SDR Coaching & Team Leadership</option>
                        <option value="LinkedIn Social Selling">LinkedIn Outreach / Sales Nav</option>
                        <option value="Custom Outbound Campaign">End-to-End Hybrid Outbound</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Market & Daily Dial expectation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Target Geography / Timezone *
                      </label>
                      <select
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="United States">United States (EST / CST / PST)</option>
                        <option value="United Kingdom / Europe">United Kingdom / Europe (GMT / BST)</option>
                        <option value="Australia & New Zealand">Australia & New Zealand (AEST)</option>
                        <option value="Canada">Canada (EST / MST / PST)</option>
                        <option value="Singapore / APAC">Singapore & APAC (SGT)</option>
                        <option value="Global / Multi-Region">Global / Multi-Region</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Expected Monthly Meeting Target
                      </label>
                      <select
                        value={formData.callingVolume}
                        onChange={(e) => setFormData({ ...formData, callingVolume: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="15-20 Meetings/Mo">15–20 Qualified Meetings / Month</option>
                        <option value="25-35 Meetings/Mo">25–35 Qualified Meetings / Month</option>
                        <option value="40+ Meetings/Mo">40+ Qualified Meetings / Month (Dedicated)</option>
                        <option value="Consulting / Team Audit">Outbound Audit & SDR Coaching Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tell Me About Your ICP & Main Sales Bottleneck *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. We sell a $12k B2B SaaS platform to HR Directors in the US. Our closing reps don't have enough qualified meetings on their calendars and our SDR response rates are low..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#070b14] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-white rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Outbound Inquiry — Get Strategy Brief</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    No spam ever. 100% confidential. Response guaranteed within 24 hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
