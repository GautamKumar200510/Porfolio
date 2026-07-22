import React from 'react';
import {
  Sun,
  Moon,
  Search,
  Download,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import { downloadResumePDF } from '../utils/downloadResume';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCommand: () => void;
  onOpenPromptModal: () => void;
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenCommand,
  onOpenPromptModal,
  onOpenResumeModal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all backdrop-blur-xl border ${
          darkMode
            ? 'bg-slate-900/80 border-slate-800/80 text-slate-100 shadow-xl shadow-black/20'
            : 'bg-white/80 border-slate-200/80 text-slate-900 shadow-lg shadow-slate-200/50'
        }`}
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            id="header-brand-link"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              GK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight leading-none group-hover:text-blue-500 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium ml-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Internships & Roles</span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium">
          <a
            href="#projects"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            id="nav-link-projects"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            id="nav-link-experience"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            id="nav-link-skills"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            id="nav-link-certs"
          >
            Certifications
          </a>
          <a
            href="#education"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            id="nav-link-education"
          >
            Education
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommand}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 text-xs font-medium flex items-center gap-2 transition-all"
            title="Search projects, skills, certs (Cmd+K)"
            id="btn-command-palette-trigger"
          >
            <Search className="w-3.5 h-3.5 text-blue-500" />
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400">
              Search...
            </span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-500 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* View Structured Resume Sheet */}
          <button
            onClick={onOpenResumeModal}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all"
            title="View full structured resume sheet"
            id="btn-open-resume-modal"
          >
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span className="hidden sm:inline">View Resume</span>
          </button>

          {/* Direct Download Resume Button */}
          <button
            onClick={downloadResumePDF}
            className="p-2 sm:px-3.5 sm:py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95"
            title="Download Gautam's Resume PDF"
            id="btn-download-resume-header"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            id="btn-toggle-theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
