import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0f1c] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENDORSEMENTS & PEER PRAISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Sales Leaders &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Agency Directors
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            What operations heads, account executives, and managing directors say about working alongside Flynn James.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
              id={`testimonial-${test.id}`}
            >
              <div>
                {/* 5-Star Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                    Verified Performance
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic relative">
                  <Quote className="w-6 h-6 text-cyan-500/20 absolute -top-2 -left-2 pointer-events-none" />
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatarUrl}
                    alt={test.author}
                    className="w-12 h-12 rounded-full object-cover border border-cyan-500/40"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {test.author}
                    </h4>
                    <p className="text-xs text-cyan-400/90 font-medium">
                      {test.title} · <span className="text-slate-300">{test.company}</span>
                    </p>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {test.location}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] text-slate-400 block font-semibold">Attributed Impact:</span>
                  <span className="text-xs font-bold text-emerald-400">
                    {test.verifiedMetric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
