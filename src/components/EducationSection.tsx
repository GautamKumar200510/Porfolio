import React from 'react';
import { GraduationCap, Trophy, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationHistory, achievements } from '../data/resumeData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Hackathons
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            Formal computer science degree foundation, secondary schooling, and hackathon accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education Cards Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-lg space-y-4 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
                      {edu.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Board / University: <strong className="text-slate-700 dark:text-slate-300">{edu.boardOrUniv}</strong>
                </div>

                {edu.highlights && (
                  <ul className="space-y-1.5 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Achievements Sidebar Column (1 col) */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-b from-blue-900/20 to-indigo-900/20 border border-blue-500/30 p-6 sm:p-7 shadow-xl space-y-5 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-blue-400 font-bold text-base border-b border-blue-500/20 pb-3">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span>Hackathon Highlights</span>
              </div>

              {achievements.map((ach, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold">
                    {ach.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-lg space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider">
                Languages Known
              </h4>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  English (Professional)
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  Hindi (Native)
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
