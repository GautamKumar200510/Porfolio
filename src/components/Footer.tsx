import React from 'react';
import { ArrowUp, Heart, Sparkles, FileText, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface FooterProps {
  onOpenPromptModal: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPromptModal,
  onOpenResumeModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">
              GK
            </div>
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Software Developer & AI/ML Engineer | B.Tech CSE (AI & Analytics)
          </p>
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Gautam Kumar. All rights reserved.
          </p>
        </div>

        {/* Center Quick Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <button
            onClick={onOpenPromptModal}
            className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
            id="footer-btn-open-prompt"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Studio Prompt</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
            id="footer-btn-open-resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume Sheet</span>
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-500 flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-500 flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          {personalInfo.leetcode && (
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>
          )}
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-md"
          title="Back to Top"
          id="btn-scroll-top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
