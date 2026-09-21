import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, GitCommit, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';

interface HowIWorkProps {
  onOpenContact: () => void;
}

export const HowIWork: React.FC<HowIWorkProps> = ({ onOpenContact }) => {
  const [expandedStep, setExpandedStep] = useState<string | null>("01");

  const toggleStep = (stepNum: string) => {
    setExpandedStep(expandedStep === stepNum ? null : stepNum);
  };

  return (
    <section id="how-i-work" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE 6-STEP OUTBOUND ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work —{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              From Cold Stranger to Closed Demo
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            A repeatable, battle-tested framework refined over 11 years on the sales floor. 
            Designed to generate predictable pipeline and maintain high show-up rates.
          </p>
        </div>

        {/* Process Steps List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WORK_PROCESS_STEPS.map((step) => {
            const isExpanded = expandedStep === step.step;

            return (
              <div
                key={step.step}
                className={`bg-[#0f172a] rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-cyan-500/60 shadow-lg shadow-cyan-950/30 bg-[#0f172a]'
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                      Phase {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs text-cyan-300 font-medium mb-3">
                    {step.subtitle}
                  </div>
                  
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div>
                  {/* Action checklist */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Key Actions Taken:
                    </span>
                    {step.actionItems.map((action, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>

                  {/* Concrete Outcome Box */}
                  <div className="mt-4 p-3 rounded-xl bg-[#070b14] border border-cyan-900/30 text-xs text-cyan-300 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11px]">Tangible Outcome:</strong>
                      <span>{step.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white font-heading">
            Want to Deploy This Engine on Your Pipeline?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Whether you need a dedicated outbound specialist or want to elevate your current SDR team, I can implement this framework immediately.
          </p>
          <button
            onClick={onOpenContact}
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all"
          >
            <span>Discuss Your Campaign Objectives</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
