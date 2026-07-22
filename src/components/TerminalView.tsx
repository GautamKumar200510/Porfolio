import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, RotateCcw, Copy, Check } from 'lucide-react';
import {
  personalInfo,
  projects,
  certifications,
  internships,
  educationHistory,
} from '../data/resumeData';

export const TerminalView: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([
    {
      command: 'welcome',
      output: (
        <div className="space-y-2 text-slate-300">
          <p className="text-emerald-400 font-bold">
            Gautam Kumar Interactive Developer CLI Terminal v1.0.0
          </p>
          <p className="text-xs">
            Type <span className="text-amber-400 font-bold">help</span> to view available CLI commands, or run{' '}
            <span className="text-amber-400 font-bold">cat resume.txt</span> for full resume dump.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-blue-400 font-bold mb-1">Available CLI Commands:</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">cat resume.txt</span> Output full raw text resume</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">skills</span> List technical stack & proficiencies</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">projects</span> List flagship AI platforms & key skills</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">experience</span> Show internship history @ Innobyte</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">certs</span> List certifications & credentials</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">education</span> Display academic CGPA & degrees</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">contact</span> Display email, phone, location & links</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">clear</span> Clear terminal buffer</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'cat resume.txt':
      case 'resume':
        outputNode = (
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 space-y-2">
            <p className="text-emerald-400 font-bold">{personalInfo.name} - {personalInfo.title}</p>
            <p>Degree: {personalInfo.degree} ({personalInfo.specialization}) @ {personalInfo.college} | CGPA: {personalInfo.cgpa}</p>
            <p>Location: {personalInfo.location} | Phone: {personalInfo.phone}</p>
            <p>Email: {personalInfo.email}</p>
            <p className="text-slate-400 pt-1">{personalInfo.summary}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p className="text-purple-400 font-bold">Core Technical Skills:</p>
            <p>• Languages: Java, JavaScript, Python, HTML5, CSS3, SQL</p>
            <p>• Web Stack: React.js, Node.js, Flask, Tailwind CSS, JDBC, Supabase</p>
            <p>• AI / Analytics: Machine Learning, Data Analytics, Power BI, Data Modeling</p>
            <p>• Cloud & Tools: AWS Cloud Architecture, Network Security, Git & GitHub, Linux</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            {projects.map((p) => (
              <div key={p.id} className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">
                <p className="text-blue-400 font-bold">{p.title}</p>
                <p className="text-slate-400 text-[11px]">{p.summary}</p>
                <p className="text-amber-400 text-[10px]">Stack: {p.keySkills.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            {internships.map((i) => (
              <div key={i.id} className="p-2 bg-slate-950 rounded border border-slate-800">
                <p className="text-emerald-400 font-bold">{i.role} @ {i.company}</p>
                <p className="text-slate-400">{i.startDate} - {i.endDate} | {i.location}</p>
                <p className="text-slate-300 text-[11px] mt-1">{i.description[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            {certifications.map((c) => (
              <p key={c.id}>
                <span className="text-amber-400">• {c.title}</span> ({c.provider})
              </p>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            {educationHistory.map((e, idx) => (
              <p key={idx}>
                <span className="text-blue-400 font-bold">{e.institution}</span>: {e.degree} ({e.grade}) [{e.period}]
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-blue-400 underline">{personalInfo.email}</a></p>
            <p>Phone: {personalInfo.phone}</p>
            <p>GitHub: {personalInfo.github}</p>
            <p>LinkedIn: {personalInfo.linkedIn}</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: '{cmd}'. Type <span className="text-amber-400 font-bold">help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputNode }]);
    setInputVal('');
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Terminal Header Bar */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>gautam@portfolio-cli:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="p-5 font-mono text-sm max-h-[500px] overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">gautam@portfolio:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l-2 border-slate-800">{item.output}</div>
            </div>
          ))}

          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommandSubmit} className="p-4 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold text-sm">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or 'cat resume.txt'..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
            id="input-terminal-command"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </section>
  );
};
