import React from 'react';
import { FileText, Printer, Download, X, Mail, Phone, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import {
  personalInfo,
  expertiseCategories,
  internships,
  projects,
  certifications,
  educationHistory,
  achievements,
} from '../data/resumeData';
import { downloadResumePDF } from '../utils/downloadResume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 max-h-[90vh] overflow-y-auto relative">
        
        {/* Top Floating Controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white/90 dark:bg-slate-900/90 backdrop-blur-md pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg block">
                Gautam Kumar - Resume Sheet
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Official PDF Document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={downloadResumePDF}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all"
              id="btn-download-pdf-modal"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
              id="btn-close-resume-modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div id="printable-resume" className="space-y-6 text-slate-800 dark:text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                {personalInfo.name}
              </h1>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {personalInfo.title}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {personalInfo.college} | CGPA: {personalInfo.cgpa}
              </div>
            </div>

            <div className="text-xs font-mono space-y-1 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="text-[11px] text-slate-400">
                linkedin.com/in/gautamkumar | github.com/gautamkumar | leetcode.com/u/txODJD3DWj
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between text-xs border-l-2 border-blue-500/30 pl-3 py-0.5">
                  <div>
                    <strong className="text-slate-900 dark:text-white block">{edu.degree} | {edu.grade}</strong>
                    <span className="text-slate-600 dark:text-slate-300">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-slate-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Experience
            </h2>
            {internships.map((intern) => (
              <div key={intern.id} className="space-y-1.5 text-xs border-l-2 border-indigo-500/30 pl-3 py-0.5">
                <div className="flex flex-col sm:flex-row justify-between">
                  <strong className="text-slate-900 dark:text-white">{intern.role} – {intern.company}</strong>
                  <span className="font-mono text-slate-400">{intern.startDate} – {intern.endDate}</span>
                </div>
                <ul className="space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-300">
                  {intern.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs border-l-2 border-violet-500/30 pl-3 py-0.5">
                <strong className="text-slate-900 dark:text-white block">{proj.title}</strong>
                <div className="text-[11px] font-mono text-blue-500">{proj.keySkills.join(' · ')}</div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{proj.detailedDescription}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
              <p><strong>Technical:</strong> Java, JavaScript, SQL, React.js, Next.js, Flask, Node.js, HTML5, CSS3, Tailwind CSS, REST APIs, Git, GitHub, Power BI, AWS</p>
              <p><strong>Core Concepts:</strong> OOP, Data Structures & Algorithms, DBMS, Software Engineering, Workflow Automation</p>
              <p><strong>Soft Skills:</strong> Analytical Thinking, Leadership, Problem Solving, Team Collaboration, Business Communication, Time Management</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <strong className="text-slate-900 dark:text-white block">{c.title}</strong>
                  <span className="text-slate-500 font-mono text-[11px]">{c.provider}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Achievements
            </h2>
            <ul className="space-y-1 text-xs list-disc pl-4 text-slate-600 dark:text-slate-300">
              {achievements.map((ach, i) => (
                <li key={i}>
                  <strong>{ach.title}:</strong> {ach.description}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
