import React, { useState } from 'react';
import { Sparkles, Copy, Check, X, Code2 } from 'lucide-react';
import { bestPromptForGoogleStudio } from '../data/resumeData';
import confetti from 'canvas-confetti';

interface PromptViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptViewerModal: React.FC<PromptViewerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(bestPromptForGoogleStudio);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60 });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase block">
                Google AI Studio Prompt Recipe
              </span>
              <h3 className="text-xl font-bold text-white">
                Best Prompt for Portfolio Generation
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            id="btn-close-prompt-modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prompt Content Box */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-xs text-slate-300 overflow-y-auto space-y-3 leading-relaxed max-h-[400px]">
          <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-900 pb-2">
            <span>Tailored specifically for Google AI Studio Build</span>
            <span>Includes Resume Data & UI Specs</span>
          </div>
          <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200">
            {bestPromptForGoogleStudio}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            Copy and paste this into Google AI Studio Build to regenerate or adapt this portfolio.
          </p>

          <button
            onClick={handleCopy}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all shrink-0"
            id="btn-copy-best-prompt"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Prompt Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Best Prompt</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
