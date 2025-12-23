
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
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Resonantie Check</h2>
        <p className="text-slate-400">Meet je huidige afwijking van het optimale fractale pad.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-10">
        <div className="grid grid-cols-1 gap-8">
          {questions.map(q => (
            <div key={q.id} className="space-y-4">
              <label className="text-slate-200 font-medium block">{q.text}</label>
              <div className="flex items-center space-x-4">
                <span className="text-xs text-slate-500 w-24 text-right">{q.low}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={answers[q.id]}
                  onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: parseInt(e.target.value) }))}
                  className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <span className="text-xs text-slate-500 w-24 text-left">{q.high}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col items-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="#1e293b"
                strokeWidth="8"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke={avg > 50 ? '#4f46e5' : '#ef4444'}
                strokeWidth="8"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 * (1 - avg / 100)}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="text-center z-10">
              <span className="text-5xl font-bold font-mono">{Math.round(avg)}%</span>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Flow Index</p>
            </div>
          </div>

          <div className="mt-8 text-center max-w-md">
            {avg > 70 ? (
              <p className="text-indigo-400 font-semibold italic">"Je resoneert sterk met het patroon. Behoud je koers via Wu Wei."</p>
            ) : avg > 40 ? (
              <p className="text-slate-400 italic">"Er is lichte frictie merkbaar. Onderzoek waar je vrije wil probeert af te wijken van je Dharma."</p>
            ) : (
              <p className="text-red-400 font-semibold italic">"Hoge frictie gedetecteerd. Pas op voor de Elastische Correctie van Axioma 9. Laat de spanning vieren."</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResonanceCheck;
