
import React, { useState } from 'react';
import { AXIOMS, CORRELATIONS } from '../constants';

const AxiomLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Het Fundament', 'Basis', 'Vrije Wil', 'Feedback', 'Resonantie', 'Waarnemer'];

  const filteredAxioms = filter === 'All' ? AXIOMS : AXIOMS.filter(a => a.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-16">
      {/* Header Section */}
      <section className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="300" height="300" viewBox="0 0 300 300" className="fractal-particle">
            <g transform="translate(150,150)">
              <circle r="120" fill="none" stroke="url(#libGold)" strokeWidth="1"/>
              <circle r="80" fill="none" stroke="url(#libPurple)" strokeWidth="0.8"/>
              <circle r="50" fill="none" stroke="url(#libGold)" strokeWidth="0.6"/>
              <circle r="30" fill="none" stroke="url(#libPurple)" strokeWidth="0.4"/>
            </g>
            <defs>
              <linearGradient id="libGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="100%" stopColor="#f59e0b"/>
              </linearGradient>
              <linearGradient id="libPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-3">De 26 Axioma's</h2>
        <p className="text-purple-400/60 font-mono text-sm uppercase tracking-wider relative z-10">De fundamenten van fractale wijsheid (0-25)</p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-mono transition-all duration-300 relative overflow-hidden fractal-button ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-amber-600 via-purple-600 to-blue-600 text-white luxury-glow-sm' 
                    : 'bg-slate-900/60 text-purple-400/70 hover:text-purple-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm'
                }`}
              >
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAxioms.map(axiom => (
            <div key={axiom.id} className="bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/20 p-6 rounded-3xl hover:border-purple-500/50 transition-all duration-300 group luxury-glow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-tighter font-semibold">Axioma {axiom.id}</span>
                  <span className="px-3 py-1 bg-purple-900/40 text-[10px] rounded-full text-purple-300 font-mono border border-purple-500/30">{axiom.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors duration-300 font-display">{axiom.name}</h3>
                <p className="text-slate-300/80 text-sm leading-relaxed">{axiom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg width="200" height="200" viewBox="0 0 200 200" className="fractal-particle" style={{animationDelay: '1s'}}>
              <path d="M 100 20 L 180 100 L 100 180 L 20 100 Z" fill="none" stroke="url(#tableGold)" strokeWidth="1"/>
              <path d="M 100 50 L 150 100 L 100 150 L 50 100 Z" fill="none" stroke="url(#tablePurple)" strokeWidth="0.8"/>
              <path d="M 100 80 L 120 100 L 100 120 L 80 100 Z" fill="none" stroke="url(#tableGold)" strokeWidth="0.6"/>
              <defs>
                <linearGradient id="tableGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24"/>
                  <stop offset="100%" stopColor="#f59e0b"/>
                </linearGradient>
                <linearGradient id="tablePurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7"/>
                  <stop offset="100%" stopColor="#7c3aed"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-3">Rosetta Stone Correlaties</h2>
          <p className="text-purple-400/60 font-mono text-sm uppercase tracking-wider relative z-10">Interdisciplinaire resonanties</p>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 via-indigo-950/30 to-slate-900/50 backdrop-blur-sm luxury-glow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-purple-500/20 bg-purple-950/20">
                <th className="pb-4 pt-4 pl-6 pr-4 text-purple-300 text-sm font-mono uppercase tracking-wider">Term</th>
                <th className="pb-4 pt-4 pr-4 text-purple-300 text-sm font-mono uppercase tracking-wider">Vakgebied</th>
                <th className="pb-4 pt-4 pr-6 text-purple-300 text-sm font-mono uppercase tracking-wider">Match met Fractalisme</th>
              </tr>
            </thead>
            <tbody>
              {CORRELATIONS.map((c, i) => (
                <tr key={i} className="border-b border-purple-500/10 hover:bg-purple-950/20 transition-colors duration-200">
                  <td className="py-4 pl-6 pr-4 font-semibold text-slate-200">{c.term}</td>
                  <td className="py-4 pr-4 text-amber-400 text-sm font-mono">{c.field}</td>
                  <td className="py-4 pr-6 text-slate-300/80 text-sm">{c.match}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AxiomLibrary;
