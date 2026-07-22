import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Code2, GitBranch } from 'lucide-react';
import { internships } from '../data/resumeData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Industry Internships & Roles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            Hands-on software development experience, Java engineering, Git workflows, and collaborative project execution.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="relative border-l-2 border-blue-500/30 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          {internships.map((intern) => (
            <div key={intern.id} className="relative group">
              
              {/* Timeline Marker Pulse */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 shadow-md group-hover:scale-125 transition-transform" />

              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-5">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {intern.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium">
                        Completed
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {intern.company} {intern.parentCompany && `(${intern.parentCompany})`}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{intern.startDate} - {intern.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{intern.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description bullet points */}
                <ul className="space-y-2.5">
                  {intern.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Skills & Tech Used */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-purple-400" /> Key Stack:
                  </span>
                  {intern.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
