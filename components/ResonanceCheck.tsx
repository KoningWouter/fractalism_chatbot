
import React, { useState } from 'react';

const ResonanceCheck: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({
    1: 50, 2: 50, 3: 50, 4: 50
  });

  const questions = [
    { id: 1, text: "Ervaar je op dit moment 'Flow' in je dagelijkse bezigheden?", low: "Veel Frictie", high: "Moeiteloos" },
    { id: 2, text: "In hoeverre voel je weerstand van je lichaam (vermoeidheid/blokkades)?", low: "Hoge Weerstand", high: "Geen Weerstand" },
    { id: 3, text: "Heb je het gevoel dat synchroniciteit een rol speelt in je leven?", low: "Toeval is Chaos", high: "Alles Klopt" },
    { id: 4, text: "Ben je aan het 'forceren' om resultaten te behalen?", low: "Hard Forceren", high: "Navigeren" }
  ];

  // Fix: Explicitly type reduce arguments to avoid 'unknown' type errors in certain environments
  const avg = Object.values(answers).reduce((a: number, b: number) => a + b, 0) / questions.length;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="250" height="250" viewBox="0 0 250 250" className="fractal-particle">
            <circle cx="125" cy="125" r="100" fill="none" stroke="url(#resGold)" strokeWidth="1"/>
            <circle cx="125" cy="125" r="70" fill="none" stroke="url(#resPurple)" strokeWidth="0.8"/>
            <circle cx="125" cy="125" r="45" fill="none" stroke="url(#resGold)" strokeWidth="0.6"/>
            <circle cx="125" cy="125" r="25" fill="none" stroke="url(#resPurple)" strokeWidth="0.4"/>
            <defs>
              <linearGradient id="resGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="100%" stopColor="#f59e0b"/>
              </linearGradient>
              <linearGradient id="resPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10">Resonantie Check</h2>
        <p className="text-purple-400/70 font-mono text-sm uppercase tracking-wider relative z-10">Meet je huidige afwijking van het optimale fractale pad</p>
      </div>

      <div className="bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/30 rounded-3xl p-8 md:p-10 space-y-10 luxury-glow-sm backdrop-blur-sm relative overflow-hidden">
        {/* Fractal background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '2s'}}>
            <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#resGold)" strokeWidth="1"/>
            <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#resPurple)" strokeWidth="0.8"/>
            <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#resGold)" strokeWidth="0.6"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-8 relative z-10">
          {questions.map(q => (
            <div key={q.id} className="space-y-4">
              <label className="text-slate-200 font-medium block text-lg">{q.text}</label>
              <div className="flex items-center space-x-4">
                <span className="text-xs text-purple-400/60 w-28 text-right font-mono">{q.low}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={answers[q.id]}
                  onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: parseInt(e.target.value) }))}
                  className="flex-1 h-3 bg-slate-900/60 rounded-lg appearance-none cursor-pointer accent-gradient"
                  style={{
                    background: `linear-gradient(to right, 
                      rgba(168, 85, 247, 0.3) 0%, 
                      rgba(168, 85, 247, 0.3) ${answers[q.id]}%, 
                      rgba(30, 41, 59, 0.6) ${answers[q.id]}%, 
                      rgba(30, 41, 59, 0.6) 100%)`
                  }}
                />
                <span className="text-xs text-amber-400/70 w-28 text-left font-mono">{q.high}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-purple-500/20 flex flex-col items-center relative z-10">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Outer fractal circles */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="rgba(30, 41, 59, 0.6)"
                strokeWidth="6"
              />
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke={`url(#progressGradient${avg > 50 ? 'High' : 'Low'})`}
                strokeWidth="6"
                strokeDasharray={691.15}
                strokeDashoffset={691.15 * (1 - avg / 100)}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
              {/* Inner fractal circles */}
              <circle
                cx="128"
                cy="128"
                r="80"
                fill="none"
                stroke="rgba(30, 41, 59, 0.4)"
                strokeWidth="4"
              />
              <circle
                cx="128"
                cy="128"
                r="80"
                fill="none"
                stroke={`url(#progressGradient${avg > 50 ? 'High' : 'Low'})`}
                strokeWidth="4"
                strokeDasharray={502.65}
                strokeDashoffset={502.65 * (1 - avg / 100)}
                className="transition-all duration-1200 ease-out"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="progressGradientHigh" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24"/>
                  <stop offset="50%" stopColor="#a855f7"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
                <linearGradient id="progressGradientLow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444"/>
                  <stop offset="100%" stopColor="#f59e0b"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Center fractal decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
                <circle cx="40" cy="40" r="35" fill="none" stroke="url(#resGold)" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="25" fill="none" stroke="url(#resPurple)" strokeWidth="0.4"/>
                <circle cx="40" cy="40" r="15" fill="none" stroke="url(#resGold)" strokeWidth="0.3"/>
              </svg>
            </div>
            <div className="text-center z-10">
              <span className={`text-6xl font-bold font-mono ${avg > 70 ? 'gradient-text' : avg > 40 ? 'text-purple-400' : 'text-red-400'}`}>
                {Math.round(avg)}%
              </span>
              <p className="text-[11px] text-purple-400/60 uppercase tracking-widest mt-2 font-mono">Flow Index</p>
            </div>
          </div>

          <div className="mt-10 text-center max-w-lg">
            {avg > 70 ? (
              <div className="bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 border border-amber-500/30 rounded-2xl p-6 luxury-glow-sm">
                <p className="text-amber-400 font-semibold italic text-lg leading-relaxed">"Je resoneert sterk met het patroon. Behoud je koers via Wu Wei."</p>
              </div>
            ) : avg > 40 ? (
              <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-2xl p-6 luxury-glow-sm">
                <p className="text-purple-300 italic text-lg leading-relaxed">"Er is lichte frictie merkbaar. Onderzoek waar je vrije wil probeert af te wijken van je Dharma."</p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 luxury-glow-sm">
                <p className="text-red-400 font-semibold italic text-lg leading-relaxed">"Hoge frictie gedetecteerd. Pas op voor de Elastische Correctie van Axioma 9. Laat de spanning vieren."</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResonanceCheck;
