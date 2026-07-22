import React, { useState } from 'react';
import {
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Check,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { downloadResumePDF } from '../utils/downloadResume';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenPromptModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  onOpenPromptModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-600/10 via-indigo-500/15 to-violet-600/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 text-left">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Full Stack Developer & AI Specialist</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Roles</span>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
            {personalInfo.title}
          </p>
        </div>

        {/* Location & Academic Tag */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
            <GraduationCap className="w-4 h-4 text-indigo-500" />
            <span>MIT-ADT University, Pune (CGPA: 8.32 / 10)</span>
          </div>
        </div>

        {/* Professional Summary */}
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* CTA Action Buttons & Social Links */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {/* Primary Download Resume PDF */}
          <button
            onClick={downloadResumePDF}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95"
            id="hero-btn-download-resume"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </button>

          {/* View Resume Sheet */}
          <button
            onClick={onOpenResumeModal}
            className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-700/80 transition-all"
            id="hero-btn-view-resume"
          >
            <FileText className="w-4 h-4 text-blue-500" />
            <span>View Resume</span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-2 border border-slate-200 dark:border-slate-700/60 transition-all"
            id="hero-btn-copy-email"
            title="Copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-slate-500" />
                <span>gautamkr.71019@gmail.com</span>
              </>
            )}
          </button>

          {/* Social Quick Links */}
          <div className="flex items-center gap-2 ml-auto">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700/60 shadow-sm"
              title="LinkedIn Profile"
              id="hero-social-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700/60 shadow-sm"
              title="GitHub Profile"
              id="hero-social-github"
            >
              <Github className="w-4 h-4" />
            </a>
            {personalInfo.leetcode && (
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-amber-500 hover:text-white text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700/60 shadow-sm"
                title="LeetCode Profile"
                id="hero-social-leetcode"
              >
                <Code2 className="w-4 h-4 text-amber-500 hover:text-white" />
              </a>
            )}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700/60 shadow-sm"
              title="Phone Call"
              id="hero-social-phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Metrics & Highlights Row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-2">
            <GraduationCap className="w-5 h-5" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">8.32</span>
          </div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">CGPA / 10.0</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">MIT School of Computing</p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 mb-2">
            <Briefcase className="w-5 h-5" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Innobyte</span>
          </div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Software Developer Intern</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">Jun 2025 – Nov 2025</p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md">
          <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400 mb-2">
            <Code2 className="w-5 h-5" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">3 Core</span>
          </div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Full-Stack & AI Projects</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">ML, Java ATM & FinTech</p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md">
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 mb-2">
            <Award className="w-5 h-5" />
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">5 Certs</span>
          </div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Industry Certifications</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">AWS, Microsoft, Cisco</p>
        </div>
      </div>
    </section>
  );
};
