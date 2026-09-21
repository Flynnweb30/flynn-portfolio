import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenContact: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenContact }) => {
  if (!service) return null;

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
        className="relative bg-[#0b0f19] border border-slate-800/80 rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-white bg-slate-900/80 border border-slate-800 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-10 border-b border-slate-800/60 pr-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-800 mb-5">
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="text-[10.5px] font-mono text-slate-300 uppercase tracking-wider">{service.badge}</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-white leading-tight tracking-tight">
            {service.title}
          </h2>
          <p className="mt-3 text-[14px] text-amber-400/90 font-serif italic">{service.tagline}</p>
        </div>

        <div className="p-7 sm:p-10 space-y-8">
          <p className="text-[13.5px] text-slate-300 leading-[1.8]">{service.description}</p>

          <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-lg flex items-center justify-between gap-4">
            <span className="text-[11.5px] font-mono text-slate-400 uppercase tracking-wider">Benchmark</span>
            <span className="text-[13.5px] font-semibold text-amber-400">{service.metrics}</span>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">Deliverables</h3>
            <ul className="space-y-2.5">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-slate-200 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-lg">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">Output</div>
            <p className="text-[13px] text-slate-300 leading-relaxed italic">{service.deliverableSummary}</p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">Tools used</h3>
            <div className="flex flex-wrap gap-2">
              {service.toolsUsed.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11.5px] font-mono bg-slate-900/60 border border-slate-800 text-slate-400 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-7 border-t border-slate-800/60 bg-slate-950/40 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-[12.5px] font-medium text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 rounded-md transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact(service.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-[12.5px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Request a proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};