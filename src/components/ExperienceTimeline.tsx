import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';
import { CAREER_EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>(CAREER_EXPERIENCES[0].id);

  const activeExp = CAREER_EXPERIENCES.find(e => e.id === selectedExperience) || CAREER_EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 bg-[#0a0f1c] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            11+ Years of Quota-Attainment &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Outbound Mastery
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            From frontline power caller to Junior Sales Team Lead. Consistently exceeding KPIs across North America, the UK, Europe, Australia, and Singapore.
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Company List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Career Milestone:
            </h3>
            {CAREER_EXPERIENCES.map((exp) => {
              const isSelected = selectedExperience === exp.id;

              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0f172a] border-cyan-500/80 shadow-lg shadow-cyan-950/30'
                      : 'bg-[#070b14]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0f172a]/50'
                  }`}
                  id={`exp-tab-${exp.id}`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                        {exp.period}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h4>

                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="font-semibold text-slate-300">{exp.company}</span>
                      <span>·</span>
                      <span className="truncate">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0 pl-3">
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {exp.highlightMetric}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed View of Selected Experience */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeExp.period}</span>
                    <span>·</span>
                    <span>{activeExp.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {activeExp.role}
                  </h3>
                  <div className="text-sm text-slate-300 font-medium flex items-center gap-2 mt-1">
                    <span className="text-white font-bold">{activeExp.company}</span>
                    <span>·</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {activeExp.location}
                    </span>
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">
                    Key Landmark Metric
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-emerald-400 font-heading">
                    {activeExp.highlightMetric}
                  </span>
                </div>
              </div>

              {/* Responsibilities Block */}
              <div className="py-6 border-b border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Responsibilities & Focus Areas</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeExp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Major Achievements Block */}
              <div className="pt-6 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Achievements & Milestones</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeExp.achievements.map((achieve, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#070b14]/70 border border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{achieve}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
