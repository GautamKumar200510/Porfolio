import React, { useState } from 'react';
import { Cpu, Check, Search, Terminal, Code2, Database, Cloud, Shield } from 'lucide-react';
import { expertiseCategories } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState('');

  const categoryNames = ['All', ...expertiseCategories.map((c) => c.title)];

  const allSkills = expertiseCategories.flatMap((cat) => cat.skills);

  const filteredSkills = allSkills.filter((sk) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      expertiseCategories.find((c) => c.title === selectedCategory)?.skills.some((s) => s.name === sk.name);
    const matchesSearch = sk.name.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Stack & Proficiency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Key Technical Expertise
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
              Engineered with modern languages, web frameworks, machine learning libraries, analytics tools, and cloud infrastructure.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search skill (e.g. Java, React)..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              id="input-skill-search"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categoryNames.map((catName) => (
            <button
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === catName
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              id={`btn-skill-cat-${catName.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((sk) => (
            <div
              key={sk.name}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:border-blue-500/40 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-500 transition-colors">
                  {sk.name}
                </span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {sk.category}
                </span>
              </div>

              {/* Progress Level Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Proficiency Index</span>
                  <span>{sk.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${sk.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
