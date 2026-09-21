import React from 'react';
import { 
  ShieldCheck, MessageSquare, Clock, TrendingUp, 
  UserCheck, Zap, Award, ArrowRight, CheckCircle 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  onOpenContact: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onOpenContact }) => {
  const reasons = [
    {
      icon: Clock,
      title: "Zero Ramp-Up Overhead",
      subtitle: "Immediate pipeline impact from Day 1",
      description: "Unlike entry-level hires who need 3–6 months to understand outbound phone dynamics, I arrive with 11+ years of muscle memory. I learn your value prop in 48 hours and start dialing with confidence."
    },
    {
      icon: MessageSquare,
      title: "Executive English & Poise",
      subtitle: "Commands immediate C-Suite respect",
      description: "Outbound fails when callers sound robotic, nervous, or overly rehearsed. My vocal tone is calm, consultative, and executive-ready. I speak as a peer solving a business bottleneck, not an annoying telemarketer."
    },
    {
      icon: ShieldCheck,
      title: "Relentless Reliability & Pacing",
      subtitle: "150+ dials every single day, without fail",
      description: "Sales is a contact sport governed by consistency. I bring ironclad work ethic to every shift. You never have to worry whether calls are being made, CRM records are updated, or leads are slipping away."
    },
    {
      icon: TrendingUp,
      title: "Protected AE Calendar Quality",
      subtitle: "Strict BANT qualification = high show-up rates",
      description: "I don't artificially inflate meeting counts with unqualified junior staff. Every discovery call I schedule meets your verified ICP criteria and includes discovery notes and pre-call value alignment."
    },
    {
      icon: Zap,
      title: "Deep CRM & Telephony Mastery",
      subtitle: "100% data integrity & clean forecasting",
      description: "Complete proficiency in HubSpot, Salesforce, Pipedrive, Apollo, and power dialers. Accurate lifecycle staging, zero missing contact records, and actionable pipeline reporting for executive leadership."
    },
    {
      icon: UserCheck,
      title: "Sales Leadership & Coaching",
      subtitle: "Elevates the entire outbound floor",
      description: "As a Junior Sales Team Lead at Regen Digital US, I don't just hit individual goals—I mentor junior SDRs, refine objection turnarounds, and lead call shadowing sessions that lift team quota attainment."
    }
  ];

  return (
    <section id="why-work-with-me" className="py-24 bg-[#0a0f1c] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE OUTBOUND ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Sales Leaders & Founders{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Partner With Flynn
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Hiring the wrong SDR burns pipeline and damages company reputation. Here is how I guarantee reliable, measurable sales growth.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[#0f172a] rounded-2xl border border-slate-800 p-7 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-500 font-heading">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {reason.title}
                  </h3>
                  <div className="text-xs text-cyan-400/90 font-medium mt-0.5 mb-3">
                    {reason.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold">Guaranteed standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Quote Highlight */}
        <div className="bg-gradient-to-r from-cyan-950/30 via-slate-900 to-blue-950/30 border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-cyan-400 text-slate-950 font-bold text-2xl flex items-center justify-center shrink-0">
            "
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
              "Your success is my priority. Let's connect to explore how my outbound expertise, phone poise, and quota discipline can directly contribute to achieving your revenue targets."
            </p>
            <div className="text-xs text-cyan-300 font-bold">
              — {PERSONAL_INFO.name} <span className="text-slate-400 font-normal">| Senior SDR & Junior Sales Team Lead</span>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-5 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all whitespace-nowrap"
          >
            Start a Conversation →
          </button>
        </div>

      </div>
    </section>
  );
};
