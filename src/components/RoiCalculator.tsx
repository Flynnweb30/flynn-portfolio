import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [meetingsPerMonth, setMeetingsPerMonth] = useState<number>(30);
  const [averageDealSize, setAverageDealSize] = useState<number>(8000);
  const [closeRate, setCloseRate] = useState<number>(20); // 20%
  const [showUpRate, setShowUpRate] = useState<number>(75); // 75%

  // Calculations
  const attendedMeetings = Math.round(meetingsPerMonth * (showUpRate / 100));
  const estimatedDealsClosed = (attendedMeetings * (closeRate / 100)).toFixed(1);
  const monthlyRevenue = Math.round(parseFloat(estimatedDealsClosed) * averageDealSize);
  const annualRevenue = monthlyRevenue * 12;

  return (
    <section id="calculator" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE PIPELINE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate Your Revenue with an{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Outbound Engine
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Adjust the sliders below to project your monthly and annual revenue based on Flynn’s historical 30+ meetings/month performance.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Input Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Target Meetings */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Target Discovery Meetings / Month
                  </label>
                  <span className="text-lg font-bold text-cyan-300 font-heading">
                    {meetingsPerMonth} Meetings
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="2"
                  value={meetingsPerMonth}
                  onChange={(e) => setMeetingsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 (Part-time)</span>
                  <span>30 (Flynn's Average)</span>
                  <span>50 (High-Velocity)</span>
                </div>
              </div>

              {/* Slider 2: Average Deal Size */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Average Deal ACV / Lifetime Value
                  </label>
                  <span className="text-lg font-bold text-cyan-300 font-heading">
                    ${averageDealSize.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="30000"
                  step="500"
                  value={averageDealSize}
                  onChange={(e) => setAverageDealSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>$1,000 (Low ticket)</span>
                  <span>$8,000 (Agency/Mid-SaaS)</span>
                  <span>$30,000+ (Enterprise)</span>
                </div>
              </div>

              {/* Slider 3: Closer Win Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    AE / Closer Conversion Rate
                  </label>
                  <span className="text-lg font-bold text-cyan-300 font-heading">
                    {closeRate}% Close Rate
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10% Conservative</span>
                  <span>20% Industry Benchmark</span>
                  <span>40% Top Performer</span>
                </div>
              </div>

              {/* Additional Context */}
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Estimated Show-up rate:</span>
                <span className="text-emerald-400 font-semibold">{showUpRate}% (~{attendedMeetings} attended calls)</span>
              </div>

            </div>

            {/* Right: Projected Revenue Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#070b14] to-[#0a0f1c] p-6 rounded-xl border border-cyan-500/40 text-center space-y-5 shadow-inner">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                Projected Pipeline Revenue
              </span>

              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading block">
                  ${monthlyRevenue.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">
                  Estimated New Monthly Revenue
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-semibold block">
                  Annualized Run-Rate Impact
                </span>
                <span className="text-2xl font-extrabold text-emerald-400 font-heading">
                  ${annualRevenue.toLocaleString()} / year
                </span>
              </div>

              <div className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                Produces ~<strong className="text-white">{estimatedDealsClosed} closed new deals</strong> per month from outbound.
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white rounded-xl shadow-md shadow-cyan-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Hire Flynn to Hit This Target</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
