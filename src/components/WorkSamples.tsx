import React, { useState } from 'react';
import { FileText, Copy, Check, Eye, Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { WORK_SAMPLES } from '../data/portfolioData';
import { WorkSample } from '../types';

interface WorkSamplesProps {
  onSelectSample: (sample: WorkSample) => void;
  onOpenContact: () => void;
}

export const WorkSamples: React.FC<WorkSamplesProps> = ({ onSelectSample, onOpenContact }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleQuickCopy = (sample: WorkSample, e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `${sample.title}\n\nOverview:\n${sample.details.overview}\n\nFramework:\n${sample.details.framework.join('\n')}\n\nSample Snippet:\n${sample.details.sampleText || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(sample.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const sampleImages: Record<string, string> = {
    'sample-script': "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80",
    'sample-cadence': "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    'sample-bant': "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    'sample-handoff': "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <section id="samples" className="py-24 bg-[#0a0f1c] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO & TACTICAL WORK SAMPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Battle-Tested Sales Playbooks &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Deliverable Samples
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            I don't just promise results—here are the exact scripts, qualification scorecards, cadences, and discovery handoff templates I use daily.
          </p>
        </div>

        {/* Work Samples Grid with Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WORK_SAMPLES.map((sample) => {
            const isCopied = copiedId === sample.id;
            const bgImage = sampleImages[sample.id] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";

            return (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="bg-[#0f172a] rounded-2xl border border-slate-800 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 cursor-pointer group"
                id={`work-sample-${sample.id}`}
              >
                {/* Visual Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={bgImage}
                    alt={sample.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent"></div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold text-cyan-300 bg-[#070b14]/90 border border-cyan-500/40 rounded-full backdrop-blur-md">
                      {sample.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-cyan-950/80 border border-cyan-500/40 rounded-lg text-cyan-300 text-xs font-semibold backdrop-blur-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to Inspect</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {sample.summary}
                    </p>
                  </div>

                  {/* Preview Snippet Box */}
                  <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 text-xs text-slate-300 font-mono space-y-1">
                    <div className="text-[10px] text-cyan-400 font-sans font-bold uppercase tracking-wider">
                      Framework Extract:
                    </div>
                    <p className="line-clamp-2 text-slate-300 italic">
                      {sample.details.framework[0]}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {sample.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[11px] bg-slate-900 border border-slate-700/80 text-slate-300 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={(e) => handleQuickCopy(sample, e)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg transition-all"
                      title="Copy Framework Text to Clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Quick Copy</span>
                        </>
                      )}
                    </button>

                    <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Full Playbook</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Outbound Playbook Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Want the Complete Editable Cold Calling & Objection Playbook?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              I can share my full library of objection handling matrices, gatekeeper scripts, and cold email cadences.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-6 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all whitespace-nowrap"
          >
            Request Outbound Playbook →
          </button>
        </div>

      </div>
    </section>
  );
};
