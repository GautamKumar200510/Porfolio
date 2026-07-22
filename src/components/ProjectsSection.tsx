import React, { useState } from 'react';
import {
  Code,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  BarChart3,
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import { projects } from '../data/resumeData';
import { InteractiveMLSimulator } from './InteractiveMLSimulator';
import { InteractiveWealthCalculator } from './InteractiveWealthCalculator';
import { AtmSimulator } from './AtmSimulator';

export const ProjectsSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>('nocode-ml-platform');

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Signature Flagship Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured AI & Full-Stack Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
              Real-world software engineered with React.js, Python Flask, Node.js, Tailwind CSS, and Supabase database architectures.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Click 'Interactive Demo' to test live engines</span>
          </div>
        </div>

        {/* Projects Cards & Interactive Canvas Grid */}
        <div className="space-y-12">
          {projects.map((proj) => {
            const isDemoOpen = activeDemo === proj.id;

            return (
              <div
                key={proj.id}
                className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold">
                        {proj.category}
                      </span>
                      {proj.keySkills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {proj.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {proj.detailedDescription}
                    </p>
                  </div>

                  {/* Top Right Buttons */}
                  <div className="flex flex-wrap items-center gap-3 self-start">
                    <button
                      onClick={() => setActiveDemo(isDemoOpen ? null : proj.id)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                        isDemoOpen
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                      id={`btn-toggle-demo-${proj.id}`}
                    >
                      <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span>{isDemoOpen ? 'Hide Interactive Demo' : 'Launch Interactive Demo'}</span>
                    </button>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="View GitHub Repository"
                      id={`link-github-${proj.id}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 mb-6">
                  {proj.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                {/* Embedded Live Simulation Area */}
                {isDemoOpen && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 animate-fade-in">
                    {proj.liveDemoType === 'ml-workflow' && <InteractiveMLSimulator />}
                    {proj.liveDemoType === 'wealth-calculator' && <InteractiveWealthCalculator />}
                    {proj.liveDemoType === 'atm-demo' && <AtmSimulator />}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
