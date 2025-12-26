
import React, { useState } from 'react';
import { AXIOMS, CORRELATIONS } from '../constants';

const AxiomLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Het Fundament', 'Basis', 'Vrije Wil', 'Feedback', 'Resonantie', 'Waarnemer'];

  const filteredAxioms = filter === 'All' ? AXIOMS : AXIOMS.filter(a => a.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-20 page-transition">
      {/* Header Section */}
      <section className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-6">
          <svg width="300" height="300" viewBox="0 0 300 300" className="fractal-particle">
            <g transform="translate(150,150)">
              <circle r="120" fill="none" stroke="url(#libGold)" strokeWidth="1"/>
              <circle r="80" fill="none" stroke="url(#libSlate)" strokeWidth="0.8"/>
              <circle r="50" fill="none" stroke="url(#libGold)" strokeWidth="0.6"/>
              <circle r="30" fill="none" stroke="url(#libSlate)" strokeWidth="0.4"/>
            </g>
            <defs>
              <linearGradient id="libGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#C9A227"/>
              </linearGradient>
              <linearGradient id="libSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#708090"/>
                <stop offset="100%" stopColor="#5A6A7A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-4">De 26 Axioma's</h2>
        <p className="text-[#708090]/70 font-mono text-sm uppercase tracking-wider relative z-10">De fundamenten van fractale wijsheid (0-26)</p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-mono transition-all duration-500 ease-out relative overflow-hidden fractal-button ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#708090] to-[#D4AF37] text-[#050505] luxury-glow-sm' 
                    : 'glass text-[#708090]/80 hover:text-[#D4AF37] border border-[#708090]/20 hover:border-[#D4AF37]/40'
                }`}
              >
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAxioms.map(axiom => (
            <div key={axiom.id} className="glass border border-[#708090]/20 p-6 rounded-3xl hover:border-[#D4AF37]/50 transition-all duration-500 ease-out group luxury-glow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37]/10 to-[#708090]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-tighter font-semibold">Axioma {axiom.id}</span>
                  <span className="px-3 py-1 glass text-[10px] rounded-full text-[#708090] font-mono border border-[#708090]/30">{axiom.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-[#D4AF37] transition-colors duration-500 ease-out font-display">{axiom.name}</h3>
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
              <path d="M 100 50 L 150 100 L 100 150 L 50 100 Z" fill="none" stroke="url(#tableSlate)" strokeWidth="0.8"/>
              <path d="M 100 80 L 120 100 L 100 120 L 80 100 Z" fill="none" stroke="url(#tableGold)" strokeWidth="0.6"/>
              <defs>
                <linearGradient id="tableGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37"/>
                  <stop offset="100%" stopColor="#C9A227"/>
                </linearGradient>
                <linearGradient id="tableSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#708090"/>
                  <stop offset="100%" stopColor="#5A6A7A"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-4">Rosetta Stone Correlaties</h2>
          <p className="text-[#708090]/70 font-mono text-sm uppercase tracking-wider relative z-10">Interdisciplinaire resonanties</p>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-[#708090]/20 glass luxury-glow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#708090]/20 glass-strong">
                <th className="pb-4 pt-4 pl-6 pr-4 text-[#D4AF37] text-sm font-mono uppercase tracking-wider">Term</th>
                <th className="pb-4 pt-4 pr-4 text-[#D4AF37] text-sm font-mono uppercase tracking-wider">Vakgebied</th>
                <th className="pb-4 pt-4 pr-6 text-[#D4AF37] text-sm font-mono uppercase tracking-wider">Match met Fractalisme</th>
              </tr>
            </thead>
            <tbody>
              {CORRELATIONS.map((c, i) => (
                <tr key={i} className="border-b border-[#708090]/10 hover:glass-strong transition-colors duration-300">
                  <td className="py-4 pl-6 pr-4 font-semibold text-slate-200">{c.term}</td>
                  <td className="py-4 pr-4 text-[#D4AF37] text-sm font-mono">{c.field}</td>
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
