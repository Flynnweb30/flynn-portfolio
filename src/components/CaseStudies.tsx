import React, { useState } from 'react';
import { 
  TrendingUp, MapPin, Building, Calendar, ArrowRight, 
  CheckCircle2, Sparkles, Quote, ExternalLink 
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenContact: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy, onOpenContact }) => {
  return (
    <section id="cases" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>CASE STUDIES & CAMPAIGN EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Numbers from{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Real Outbound Campaigns
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Detailed breakdowns of how I solved cold acquisition bottlenecks, refined scripts, and generated millions in verified pipeline.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
              id={`case-card-${study.id}`}
            >
              <div>
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold">
                    <Building className="w-3.5 h-3.5" />
                    <span>{study.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{study.region}</span>
                  </div>
                </div>

                {/* Title & Primary Headline Metric */}
                <div className="pt-4 mb-4">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <div className="mt-3 inline-flex items-baseline gap-2 bg-cyan-950/60 border border-cyan-500/40 px-3.5 py-1.5 rounded-xl">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Primary Outcome:</span>
                    <span className="text-lg sm:text-xl font-extrabold text-cyan-300 font-heading">
                      {study.headlineMetric}
                    </span>
                  </div>
                </div>

                {/* Secondary Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
                  {study.secondaryMetrics.map((sec, idx) => (
                    <div key={idx} className="bg-[#070b14] border border-slate-800/80 p-2.5 rounded-lg text-center">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block truncate">
                        {sec.label}
                      </span>
                      <span className="text-sm font-bold text-white font-heading">
                        {sec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* The Challenge */}
                <div className="space-y-1.5 my-4">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
                    <span>The Bottleneck / Challenge:</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Key Actions Snippet */}
                <div className="space-y-1.5 my-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                    Tactical Solution Executed:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {study.action.slice(0, 2).map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Quote if available */}
                {study.quote && (
                  <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl my-4 text-xs text-slate-300 italic">
                    <Quote className="w-3.5 h-3.5 text-cyan-400 inline mr-1 -mt-1" />
                    "{study.quote.text}"
                    <div className="text-[11px] text-cyan-300 font-bold not-italic mt-1">
                      — {study.quote.author}, {study.quote.role}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {study.toolsUsed.slice(0, 3).map((tool) => (
                    <span key={tool} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-lg transition-all"
                >
                  <span>View Full Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="text-center bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white font-heading">
            Want to Achieve Similar Quota Results on Your Team?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Book a quick strategy session. I'll audit your current cold calling scripts and target lists free of charge.
          </p>
          <button
            onClick={onOpenContact}
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all"
          >
            <span>Request a Free Pipeline Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
