import React, { useState } from 'react';
import { DollarSign, TrendingUp, ShieldAlert, Sparkles, PieChart, RefreshCw } from 'lucide-react';

export const InteractiveWealthCalculator: React.FC = () => {
  const [monthlySavings, setMonthlySavings] = useState(15000); // INR
  const [timeYears, setTimeYears] = useState(15);
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');
  const [selectedGoal, setSelectedGoal] = useState('Retirement & Passive Income');

  // Return rates based on risk
  const returnRate = riskProfile === 'conservative' ? 8 : riskProfile === 'balanced' ? 12 : 16;

  // Compound Interest Formula: A = P * (((1 + r/n)^(nt) - 1) / (r/n))
  const monthlyRate = returnRate / 100 / 12;
  const totalMonths = timeYears * 12;
  const totalInvested = monthlySavings * totalMonths;
  
  const projectedWealth = Math.round(
    monthlySavings * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  );

  const estimatedReturns = projectedWealth - totalInvested;

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 text-slate-100 font-sans shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI Financial Engine</span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">
            Life Plan 360° – Wealth Goal Simulator
          </h4>
          <p className="text-xs text-slate-400">
            Simulate AI-driven wealth accumulation, compounding projections, and risk allocation.
          </p>
        </div>

        <button
          onClick={() => {
            setMonthlySavings(15000);
            setTimeYears(15);
            setRiskProfile('balanced');
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Parameters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          {/* Goal selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block">Financial Objective:</label>
            <select
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="Retirement & Passive Income">Retirement & Passive Income Corpus</option>
              <option value="Real Estate & Property">Property & Real Estate Acquisition</option>
              <option value="Healthcare & Family Protection">Healthcare Reserve & Wealth Shield</option>
              <option value="Higher Education Fund">Global Education & Venture Fund</option>
            </select>
          </div>

          {/* Monthly Investment Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-semibold">Monthly Investment:</span>
              <span className="font-mono text-indigo-400 font-bold">{formatINR(monthlySavings)} / mo</span>
            </div>
            <input
              type="range"
              min={2000}
              max={100000}
              step={1000}
              value={monthlySavings}
              onChange={(e) => setMonthlySavings(Number(e.target.value))}
              className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Time Horizon Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-semibold">Investment Horizon:</span>
              <span className="font-mono text-purple-400 font-bold">{timeYears} Years</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={timeYears}
              onChange={(e) => setTimeYears(Number(e.target.value))}
              className="w-full accent-purple-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Risk Profile Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block">AI Risk Profile & Expected Annual Return:</label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => setRiskProfile('conservative')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  riskProfile === 'conservative'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div>Conservative</div>
                <div className="text-[10px] font-mono opacity-80">8% p.a.</div>
              </button>

              <button
                onClick={() => setRiskProfile('balanced')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  riskProfile === 'balanced'
                    ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div>Balanced</div>
                <div className="text-[10px] font-mono opacity-80">12% p.a.</div>
              </button>

              <button
                onClick={() => setRiskProfile('aggressive')}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  riskProfile === 'aggressive'
                    ? 'bg-purple-500/20 border-purple-500 text-purple-300 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div>Aggressive</div>
                <div className="text-[10px] font-mono opacity-80">16% p.a.</div>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic AI Output Dashboard */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2 mb-3">
              <span>Goal: <strong className="text-white">{selectedGoal}</strong></span>
              <span className="font-mono text-indigo-400">Supabase AI Insights</span>
            </div>

            <div className="text-center py-2">
              <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">Projected Portfolio Value</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 font-mono mt-1">
                {formatINR(projectedWealth)}
              </div>
            </div>

            {/* Split Metrics */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Total Principal</span>
                <span className="text-sm font-semibold text-slate-200">{formatINR(totalInvested)}</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Compounded Gains</span>
                <span className="text-sm font-semibold text-emerald-400">+{formatINR(estimatedReturns)}</span>
              </div>
            </div>
          </div>

          {/* AI Recommendation Alert Box */}
          <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs space-y-1">
            <div className="flex items-center gap-1.5 text-indigo-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Life Plan 360° AI Advisor Note:</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Based on your <strong>{timeYears}-year horizon</strong> and <strong>{riskProfile}</strong> stance, wealth compounding generates <strong>{((estimatedReturns / totalInvested) * 100).toFixed(0)}%</strong> return on invested capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
