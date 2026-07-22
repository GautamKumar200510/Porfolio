import React, { useState } from 'react';
import { Award, Cpu, Cloud, Code2, ShieldCheck, BarChart3, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { certifications } from '../data/resumeData';
import { Certification } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Cloud,
  Code2,
  ShieldCheck,
  BarChart3,
};

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Assessments & Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            Verified technical credentials from Microsoft, AWS Academy, Cisco Networking Academy, Coursera, and LearnQuest.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComp = iconMap[cert.iconName] || Award;

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl hover:border-amber-500/40 cursor-pointer group transition-all duration-300 flex flex-col justify-between space-y-5"
                id={`card-cert-${cert.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white shadow-lg shadow-amber-500/10 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono">
                      Verified
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold block mb-1">
                      {cert.provider}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {cert.skills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-[10px] font-mono"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Detail Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 relative">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
                id="btn-close-cert-modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${selectedCert.badgeColor} flex items-center justify-center text-white shadow-lg`}>
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-500 font-bold block">{selectedCert.provider}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedCert.title}</h3>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>{selectedCert.description}</p>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase font-mono block">Validated Competencies</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  Close Drawer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
