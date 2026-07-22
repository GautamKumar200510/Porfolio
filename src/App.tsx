import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { CommandPalette } from './components/CommandPalette';
import { PromptViewerModal } from './components/PromptViewerModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode
          ? 'bg-slate-950 text-slate-100 bg-grid-pattern-dark'
          : 'bg-slate-50 text-slate-900 bg-grid-pattern-light'
      }`}
    >
      {/* Sticky Top Navigation Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCommand={() => setCommandOpen(true)}
        onOpenPromptModal={() => setPromptModalOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Single View Application */}
      <main className="space-y-4">
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenPromptModal={() => setPromptModalOpen(true)}
        />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPromptModal={() => setPromptModalOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Command Palette Overlay */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenPromptModal={() => setPromptModalOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* AI Studio Prompt Modal */}
      <PromptViewerModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />

      {/* Structured Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
