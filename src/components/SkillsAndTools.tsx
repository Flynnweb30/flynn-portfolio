import React, { useState } from 'react';
import { 
  Wrench, Database, Linkedin, Search, Phone, Cpu, 
  Layers, Cloud, CheckCircle, Zap, PhoneCall, Radio, 
  Headphones, Flame, Target, Award, MessageSquare, RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/portfolioData';

export const SkillsAndTools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return Database;
      case 'Linkedin': return Linkedin;
      case 'Search': return Search;
      case 'Phone': return Phone;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Cloud': return Cloud;
      case 'CheckCircle': return CheckCircle;
      case 'Zap': return Zap;
      case 'PhoneCall': return PhoneCall;
      case 'Radio': return Radio;
      case 'Headphones': return Headphones;
      case 'Flame': return Flame;
      case 'Target': return Target;
      case 'Award': return Award;
      case 'MessageSquare': return MessageSquare;
      case 'RefreshCw': return RefreshCw;
      default: return Wrench;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-400 bg-emerald-950/70 border-emerald-500/40';
      case 'Advanced':
        return 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40';
      default:
        return 'text-blue-300 bg-blue-950/70 border-blue-500/40';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECH STACK & CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & Methodologies That{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Drive Outbound Performance
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            I integrate seamlessly into your current tech stack. From high-speed power dialers and data enrichment to enterprise CRM hygiene.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TOOL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                selectedCategory === idx
                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/60 shadow-md shadow-cyan-950/30'
                  : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
              id={`tool-cat-btn-${idx}`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Selected Category Grid */}
        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="mb-6 pb-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                {TOOL_CATEGORIES[selectedCategory].category}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {TOOL_CATEGORIES[selectedCategory].description}
              </p>
            </div>
            <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
              {TOOL_CATEGORIES[selectedCategory].tools.length} Core Tools / Skills
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOL_CATEGORIES[selectedCategory].tools.map((tool) => {
              const Icon = getToolIcon(tool.iconName);

              return (
                <div
                  key={tool.name}
                  className="bg-[#070b14] p-5 rounded-xl border border-slate-800/90 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                        {tool.name}
                      </h4>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getLevelBadge(tool.level)}`}>
                      {tool.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tool.useCase}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Skills Summary Chips */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Additional High-Impact Outbound Skills
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "BANT Qualification", "MEDDIC Framework", "Pattern-Interrupt Cold Openers",
              "Gatekeeper Navigation", "Objection Inversion", "Show-Up Optimization",
              "Multi-Channel Cadence Design", "Email Deliverability & Domain Warming",
              "Lead List Enrichment", "HubSpot Pipeline Architecture", "Salesforce Opportunity Logging",
              "SDR Call Shadowing & Mentoring", "KPI Metric Forecasting", "Account-Based Marketing (ABM)"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-[#0f172a] border border-slate-800 text-slate-300 rounded-lg hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
