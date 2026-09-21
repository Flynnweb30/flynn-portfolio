import React, { useState } from 'react';
import { 
  Target, Calendar, PhoneCall, Users, Linkedin, Layers, 
  ArrowRight, CheckCircle, ExternalLink, Sparkles 
} from 'lucide-react';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenContactWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenContactWithService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'outbound' | 'pipeline' | 'leadership'>('all');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'lead-generation':
        return Target;
      case 'appointment-setting':
        return Calendar;
      case 'cold-calling':
        return PhoneCall;
      case 'sdr-support':
        return Users;
      case 'linkedin-outreach':
        return Linkedin;
      case 'pipeline-management':
        return Layers;
      default:
        return Sparkles;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'lead-generation':
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
      case 'appointment-setting':
        return "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80";
      case 'cold-calling':
        return "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80";
      case 'sdr-support':
        return "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80";
      case 'linkedin-outreach':
        return "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80";
      case 'pipeline-management':
        return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
    }
  };

  const filteredServices = CORE_SERVICES.filter(service => {
    if (activeFilter === 'outbound') {
      return ['cold-calling', 'appointment-setting', 'linkedin-outreach'].includes(service.id);
    }
    if (activeFilter === 'pipeline') {
      return ['lead-generation', 'pipeline-management'].includes(service.id);
    }
    if (activeFilter === 'leadership') {
      return ['sdr-support', 'appointment-setting'].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#0a0f1c] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL OUTBOUND ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services Built to{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Fill Your Sales Pipeline
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            From cold list generation and phone execution to AE calendar booking and team leadership.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All 6 Services
            </button>
            <button
              onClick={() => setActiveFilter('outbound')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'outbound'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Outbound & Cold Calling
            </button>
            <button
              onClick={() => setActiveFilter('pipeline')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'pipeline'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Targeting & CRM Hygiene
            </button>
            <button
              onClick={() => setActiveFilter('leadership')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'leadership'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              SDR Enablement & Coaching
            </button>
          </div>
        </div>

        {/* Services Grid with Visual Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.id);
            const imageUrl = getServiceImage(service.id);

            return (
              <div
                key={service.id}
                className="bg-[#0f172a] rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
                id={`service-card-${service.id}`}
              >
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold text-cyan-300 bg-[#070b14]/90 border border-cyan-500/40 rounded-full backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-400/20 font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-medium mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Benchmark Metric Pill */}
                  <div className="bg-[#070b14] border border-slate-800 p-2.5 rounded-lg text-xs">
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-semibold">Key Benchmark</span>
                    <span className="text-cyan-300 font-bold">{service.metrics}</span>
                  </div>

                  {/* Features bullets */}
                  <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools Stack Tags */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Tools & Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[10px] font-medium bg-slate-900 border border-slate-700/80 text-slate-300 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-1 group/btn"
                    >
                      <span>View Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenContactWithService(service.title)}
                      className="px-3 py-1.5 text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 border border-cyan-500/30 rounded-lg transition-all"
                    >
                      Inquire →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Need a Custom Hybrid Campaign (Phone + LinkedIn + Email)?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              I frequently build end-to-end bespoke outbound playbooks combining high-volume calling, social touches, and CRM setup.
            </p>
          </div>
          <button
            onClick={() => onOpenContactWithService("Custom Hybrid Outbound Campaign")}
            className="shrink-0 px-6 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all"
          >
            Design My Custom Outbound Motion →
          </button>
        </div>

      </div>
    </section>
  );
};
