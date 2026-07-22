import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  FileText,
  Sparkles,
} from 'lucide-react';
import {
  personalInfo,
  projects,
  certifications,
  internships,
  educationHistory,
} from '../data/resumeData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPromptModal: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenPromptModal,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent if listening, or we toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchResults = [
    // Actions
    {
      type: 'action',
      title: 'View Full Resume Sheet',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResumeModal();
      },
    },
    {
      type: 'action',
      title: 'Copy Best AI Prompt for Google AI Studio',
      category: 'Actions',
      icon: Sparkles,
      action: () => {
        onClose();
        onOpenPromptModal();
      },
    },
    // Navigation
    {
      type: 'link',
      title: 'No-Code Visual Drag-and-Drop ML Platform',
      category: 'Projects',
      icon: Code,
      href: '#projects',
      action: () => onClose(),
    },
    {
      type: 'link',
      title: 'Life Plan 360° - AI Wealth Management Platform',
      category: 'Projects',
      icon: Code,
      href: '#projects',
      action: () => onClose(),
    },
    {
      type: 'link',
      title: 'Software Developer Intern @ Innobyte (Erfinden Tech)',
      category: 'Experience',
      icon: Briefcase,
      href: '#experience',
      action: () => onClose(),
    },
    {
      type: 'link',
      title: 'AI & Machine Learning Certification (Coursera/Microsoft)',
      category: 'Certifications',
      icon: Award,
      href: '#certifications',
      action: () => onClose(),
    },
    {
      type: 'link',
      title: 'AWS Cloud Foundations (AWS Academy)',
      category: 'Certifications',
      icon: Award,
      href: '#certifications',
      action: () => onClose(),
    },
    {
      type: 'link',
      title: 'MIT School of Computing (B.Tech CSE - AI & Analytics)',
      category: 'Education',
      icon: GraduationCap,
      href: '#education',
      action: () => onClose(),
    },
    // Socials
    {
      type: 'external',
      title: 'GitHub Profile (GautamKumar200510)',
      category: 'Socials',
      icon: Github,
      href: personalInfo.github,
      action: () => onClose(),
    },
    {
      type: 'external',
      title: 'LinkedIn Profile',
      category: 'Socials',
      icon: Linkedin,
      href: personalInfo.linkedIn,
      action: () => onClose(),
    },
    {
      type: 'external',
      title: `Send Email (${personalInfo.email})`,
      category: 'Socials',
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      action: () => onClose(),
    },
  ].filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-500" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects, skills, certs, experience, links..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
            autoFocus
            id="input-command-search"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            id="btn-close-command-palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 overflow-y-auto space-y-1 divide-y divide-slate-100 dark:divide-slate-800/50">
          {searchResults.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              No matching results found for "{query}"
            </div>
          ) : (
            searchResults.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="pt-1">
                  <a
                    href={item.href || '#'}
                    target={item.type === 'external' ? '_blank' : undefined}
                    rel={item.type === 'external' ? 'noreferrer' : undefined}
                    onClick={() => {
                      if (item.action) item.action();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-500 group-hover:text-white transition-colors text-slate-600 dark:text-slate-300">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-400 group-hover:text-blue-500">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Navigate with mouse or click</span>
          <span>Press <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
};
