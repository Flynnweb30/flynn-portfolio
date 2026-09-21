import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, TrendingUp, Sparkles, CheckCircle, Award, Calendar, FileText, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold tracking-wide">SENIOR B2B SDR & JUNIOR SALES TEAM LEAD</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 hidden sm:inline">11+ Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              I Turn Cold Outbound Into{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Qualified Revenue.
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              B2B Lead Generation Specialist, Appointment Setter, and Cold Caller with{' '}
              <strong className="text-white font-semibold">11+ years of quota-crushing outbound execution</strong>. 
              Over <span className="text-cyan-300 font-semibold">$1.8M+ in sourced pipeline</span>, 120–150% quota attainment, 
              and 30+ qualified discovery meetings booked every month across US, UK, ANZ, and Singapore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-white rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all transform active:scale-95"
                id="hero-primary-cta"
              >
                <PhoneCall className="w-4 h-4 text-slate-950" />
                <span>Let's Talk — Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="#cases"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all"
                id="hero-secondary-cta"
              >
                <span>Explore Results & Cases</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
                id="hero-resume-link"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Ramp-Up</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>5 Global Markets</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% CRM Discipline</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>70%+ Show-Up Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Live Metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="bg-gradient-to-b from-[#0f172a] to-[#0a0f1c] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                
                {/* Decorative glow inside card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Profile Header Block */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20">
                      <div className="w-full h-full bg-[#0a0f1c] rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-cyan-400">
                        FJ
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0a0f1c] shadow-sm"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {PERSONAL_INFO.shortName}
                    </h3>
                    <p className="text-xs text-cyan-300 font-medium">
                      Senior SDR & Junior Sales Team Lead
                    </p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Globe className="w-3 h-3 text-slate-500" />
                      Remote Global · US / UK / ANZ / SG
                    </p>
                  </div>
                </div>

                {/* Quick Career Highlights / Mini Ticker */}
                <div className="grid grid-cols-2 gap-3 py-5">
                  <div className="bg-[#070b14]/70 border border-slate-800/80 p-3.5 rounded-xl">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Pipeline Sourced
                    </span>
                    <span className="text-2xl font-extrabold text-cyan-400 font-heading">
                      $1.8M+
                    </span>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3" /> Exceeded quotas
                    </span>
                  </div>

                  <div className="bg-[#070b14]/70 border border-slate-800/80 p-3.5 rounded-xl">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Monthly Meetings
                    </span>
                    <span className="text-2xl font-extrabold text-white font-heading">
                      30+
                    </span>
                    <span className="text-[11px] text-cyan-300 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3" /> High-intent calls
                    </span>
                  </div>

                  <div className="bg-[#070b14]/70 border border-slate-800/80 p-3.5 rounded-xl">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Quota Attainment
                    </span>
                    <span className="text-2xl font-extrabold text-emerald-400 font-heading">
                      120-150%
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Across 6+ years
                    </span>
                  </div>

                  <div className="bg-[#070b14]/70 border border-slate-800/80 p-3.5 rounded-xl">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Daily Activity
                    </span>
                    <span className="text-2xl font-extrabold text-sky-400 font-heading">
                      150+
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Outbound dials/day
                    </span>
                  </div>
                </div>

                {/* Live Endorsement / Quote Banner */}
                <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-3.5 mt-1 text-left">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-amber-400 text-xs tracking-wider">★★★★★</span>
                    <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wide bg-cyan-900/60 px-1.5 py-0.5 rounded">
                      Verified Manager Feedback
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline and objection handling are second to none."
                  </p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">
                    — TL Dee, Sr. Operations Sales Lead (Regen Digital US)
                  </p>
                </div>

                {/* Bottom Quick Connect Action */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    Ready for immediate deployment
                  </span>
                  <button
                    onClick={onOpenContact}
                    className="text-cyan-400 font-semibold hover:text-cyan-300 underline underline-offset-2"
                  >
                    Check Availability →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
