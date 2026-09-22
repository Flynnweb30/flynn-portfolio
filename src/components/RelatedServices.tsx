import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_PAGES } from '../data/servicePages';

interface RelatedServicesProps {
  slugs: string[];
  onNavigate: (path: string) => void;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({ slugs, onNavigate }) => {
  const related = slugs.map(s => SERVICE_PAGES[s]).filter(Boolean);
  if (!related.length) return null;

  return (
    <section className="border-t border-slate-200 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-slate-300" />
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            Related services
          </span>
        </div>

        <h2 className="text-[22px] sm:text-[26px] font-bold text-slate-900 leading-tight mb-8 max-w-2xl">
          Other outbound services that pair well with this engagement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-lg overflow-hidden border border-slate-200">
          {related.map((service) => (
            <button
              key={service.slug}
              onClick={() => onNavigate(`/services/${service.slug}`)}
              className="group text-left bg-white hover:bg-slate-50 p-6 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10.5px] font-mono text-emerald-700 tracking-wider uppercase">
                  {service.badge}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-[15px] font-semibold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                {service.tagline}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};