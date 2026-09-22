import React from 'react';
import { Award, DollarSign, Calendar, TrendingUp, CheckCircle, Globe2 } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: "11+",
      unit: "Years",
      label: "B2B Outbound Experience",
      subtext: "US, UK, ANZ, CA, SG markets"
    },
    {
      icon: DollarSign,
      value: "$1.8M+",
      unit: "Pipeline",
      label: "Sourced Opportunities",
      subtext: "Directly attributed to outbound"
    },
    {
      icon: Calendar,
      value: "30+",
      unit: "Calls/Mo",
      label: "Qualified Meetings Booked",
      subtext: "Consistent monthly pacing"
    },
    {
      icon: TrendingUp,
      value: "120-150%",
      unit: "Quota",
      label: "Average Attainment",
      subtext: "Consistently exceeded KPIs"
    },
    {
      icon: CheckCircle,
      value: "70%+",
      unit: "Attendance",
      label: "Meeting Show-Up Rate",
      subtext: "Pre-briefings & confirmations"
    },
    {
      icon: Globe2,
      value: "5",
      unit: "Markets",
      label: "Global Coverage",
      subtext: "Native English & executive poise"
    }
  ];

  return (
    <section className="relative py-10 bg-[#0a0f1c]/90 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/60">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-4' : ''} flex flex-col items-center sm:items-start text-center sm:text-left`}
              >
                <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
