import React from 'react';
import { Target, Headphones, Award, Shield, CheckCircle2, ArrowRight, UserCheck, Flame, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeProps {
  onOpenContact: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: Target,
      title: "Consultative, Not Transactional",
      description: "I never push a feature list on an unprepared buyer. I ask calculated, diagnostic questions that help prospects articulate their own bottlenecks before ever introducing a solution."
    },
    {
      icon: Flame,
      title: "Relentless Outbound Grit",
      description: "150+ dials a day doesn't intimidate me—it's my baseline. Over 11 years, I have built the mental endurance, vocal tone control, and rejection resilience required to win on the phones."
    },
    {
      icon: Headphones,
      title: "Active Listening & Pattern Breaks",
      description: "Cold calling is 80% listening. By disarming knee-jerk defensiveness within the first 7 seconds, I transition cold interruptions into mutual business conversations."
    },
    {
      icon: Shield,
      title: "Pristine Data & CRM Hygiene",
      description: "No lost leads, no phantom pipeline. Every contact, disposition note, recording, and callback is meticulously documented in your CRM for complete forecasting transparency."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ABOUT FLYNN JAMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Not Just a Dialing Machine.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              A Strategic Pipeline Partner.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            I bridge the gap between high-volume outbound grit and sophisticated executive consultative selling.
          </p>
        </div>

        {/* 2-Column Story & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-white font-heading">
              11+ Years of Cold Calling, Appointment Setting, and SDR Team Enablement.
            </h3>

            <p>
              Hi, I’m <strong className="text-white font-semibold">Flynn James Q. Pontino</strong>. Over the last decade, 
              I’ve specialized in one mission: <span className="text-cyan-300 font-medium">generating qualified sales opportunities out of thin air</span> for 
              agencies, high-growth SaaS startups, B2B IT companies, and professional service providers.
            </p>

            <p>
              Starting on the phone lines in 2014, I learned cold calling the hard way—dialing hundreds of prospects a day 
              across different time zones and cultural landscapes. Over time, I elevated cold outreach into a science: 
              combining permission-based phone openings, multi-touch email cadences, and hyper-targeted LinkedIn Social Selling.
            </p>

            <p>
              Whether I’m operating as an independent outbound specialist or leading and mentoring SDR teams as a Junior Sales Team Lead 
              at <strong className="text-white font-medium">Regen Digital US</strong>, my philosophy remains constant:
            </p>

            {/* Pull Quote Box */}
            <div className="p-5 rounded-xl bg-slate-900/90 border-l-4 border-cyan-400 border-y border-r border-slate-800 shadow-inner">
              <p className="text-sm sm:text-base font-medium text-slate-200 italic">
                “A calendar invite is only as valuable as the deal it generates. My job isn’t simply to book a 15-minute slot—it’s 
                to ensure your Account Executive sits down with an informed, engaged decision-maker ready to solve a real commercial problem.”
              </p>
            </div>

            <p>
              When you bring me onto your campaign, there is no guesswork, no lengthy training overhead, and no hand-holding. 
              I adapt to your CRM stack immediately, align with your ICP, and begin booking qualified appointments.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all"
                id="about-contact-btn"
              >
                <span>Work With Flynn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg hover:border-slate-600 transition-all"
                id="about-career-timeline-btn"
              >
                <span>View Full Career Timeline</span>
              </a>
            </div>
          </div>

          {/* Personality / Work Style Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl space-y-6">
              <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Flynn’s Core Operating DNA</span>
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Coachability & Adaptability</strong>
                    <span className="text-xs text-slate-400">Ramps up on new offers and industries in 48–72 hours with zero friction.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Executive Phone Presence</strong>
                    <span className="text-xs text-slate-400">Fluent, articulate, confident English rapport with C-level executives and VPs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Strict BANT Qualification</strong>
                    <span className="text-xs text-slate-400">Never wastes your AE’s calendar on tire-kickers or unqualified interns.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-white block">Autonomous Work Ethic</strong>
                    <span className="text-xs text-slate-400">Thrives in remote, KPI-driven setups without requiring constant supervision.</span>
                  </div>
                </div>
              </div>

              {/* Quick Profile Bio Facts */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#070b14] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Primary Calling Hours</span>
                  <span className="text-cyan-300 font-semibold">US / UK / ANZ Timezones</span>
                </div>
                <div className="bg-[#070b14] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Key Certification/Tier</span>
                  <span className="text-cyan-300 font-semibold">Level 4 Tier Achieved</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#0f172a]/60 hover:bg-[#0f172a] border border-slate-800/80 hover:border-cyan-500/40 p-6 rounded-xl transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
