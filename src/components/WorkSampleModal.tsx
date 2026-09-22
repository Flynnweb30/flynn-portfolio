import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Copy, Check, Lightbulb, ArrowRight } from 'lucide-react';
import { WorkSample } from '../types';

interface WorkSampleModalProps {
  sample: WorkSample | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const WorkSampleModal: React.FC<WorkSampleModalProps> = ({ sample, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  if (!sample) return null;

  const handleCopy = () => {
    const text = `${sample.title}\n\n${sample.details.overview}\n\nFramework:\n${sample.details.framework.join(
      '\n\n',
    )}\n\n${sample.details.sampleText ? `Sample:\n${sample.details.sampleText}\n\n` : ''}Tips:\n- ${sample.details.tips.join('\n- ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#0b0f19] border border-slate-800/80 rounded-t-2xl sm:rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-white bg-slate-900/80 border border-slate-800 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-10 border-b border-slate-800/60 pr-16">
          <div className="text-[11px] font-mono text-amber-400/80 uppercase tracking-wider mb-5">{sample.category}</div>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-white leading-[1.15] tracking-tight">{sample.title}</h2>
          <p className="mt-4 text-[14px] text-slate-400 leading-[1.75]">{sample.summary}</p>
        </div>

        <div className="p-7 sm:p-10 space-y-8">
          <div>
            <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">Overview</h3>
            <p className="text-[13.5px] text-slate-300 leading-[1.8]">{sample.details.overview}</p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">Framework</h3>
            <div className="space-y-2.5">
              {sample.details.framework.map((step, i) => (
                <div
                  key={i}
                  className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-lg text-[13px] text-slate-200 leading-relaxed"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {sample.details.sampleText && (
            <div>
              <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">Verbatim sample</h3>
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-[13px] text-slate-200 leading-relaxed font-mono">
                {sample.details.sampleText}
              </div>
            </div>
          )}

          <div className="p-5 bg-slate-900/40 border border-slate-800/60 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Execution tips</h3>
            </div>
            <ul className="space-y-2.5">
              {sample.details.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-slate-300 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-amber-400/70 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 sm:p-7 border-t border-slate-800/60 bg-slate-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2.5 text-[12.5px] font-medium text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 rounded-md transition-colors inline-flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy framework</span>
              </>
            )}
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-[12.5px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Discuss on a call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};