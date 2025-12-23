
import React, { useState } from 'react';
import { AXIOMS, CORRELATIONS } from '../constants';

const AxiomLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Basis', 'Vrije Wil', 'Feedback', 'Resonantie', 'Waarnemer'];

  const filteredAxioms = filter === 'All' ? AXIOMS : AXIOMS.filter(a => a.category === filter);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold text-indigo-400">De 25 Axioma's</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all ${
                  filter === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAxioms.map(axiom => (
            <div key={axiom.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-indigo-500 uppercase tracking-tighter">Axioma {axiom.id}</span>
                <span className="px-2 py-0.5 bg-slate-800 text-[10px] rounded text-slate-400 font-mono">{axiom.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">{axiom.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{axiom.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-emerald-400 mb-8">Rosetta Stone Correlaties</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-sm font-mono uppercase">
                <th className="pb-4 pr-4">Term</th>
                <th className="pb-4 pr-4">Vakgebied</th>
                <th className="pb-4">Match met Fractalisme</th>
              </tr>
            </thead>
            <tbody>
              {CORRELATIONS.map((c, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 pr-4 font-semibold text-slate-200">{c.term}</td>
                  <td className="py-4 pr-4 text-emerald-500 text-sm font-mono">{c.field}</td>
                  <td className="py-4 text-slate-400 text-sm">{c.match}</td>
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
