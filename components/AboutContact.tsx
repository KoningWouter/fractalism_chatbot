
import React from 'react';

const AboutContact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
      {/* Header Section */}
      <section className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="300" height="300" viewBox="0 0 300 300" className="fractal-particle">
            <g transform="translate(150,150)">
              <circle r="120" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <circle r="80" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <circle r="50" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
              <circle r="30" fill="none" stroke="url(#aboutGold)" strokeWidth="0.4"/>
            </g>
            <defs>
              <linearGradient id="aboutGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="100%" stopColor="#f59e0b"/>
              </linearGradient>
              <linearGradient id="aboutPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
              <linearGradient id="aboutBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#2563eb"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-3">Over en Contact</h2>
        <p className="text-purple-400/60 font-mono text-sm uppercase tracking-wider relative z-10">De Fractale Gids</p>
      </section>

      {/* About Section */}
      <section className="space-y-8">
        <div className="bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/30 rounded-3xl p-8 md:p-10 luxury-glow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '1s'}}>
              <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-amber-400 mb-4">Over De Fractale Gids</h3>
              <p className="text-slate-300/90 leading-relaxed text-lg mb-4">
                De Fractale Gids is een interactieve applicatie gebaseerd op het Fractalisme, een filosofisch kader dat patronen en structuren in de werkelijkheid verkent door middel van de Rosetta Stone methode.
              </p>
              <p className="text-slate-300/80 leading-relaxed mb-4">
                Deze methode trianguleert tussen drie grote kennisgebieden:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-slate-300/80 flex items-start">
                  <span className="text-amber-400 mr-3 font-bold">•</span>
                  <span><strong className="text-purple-300">Wetenschap:</strong> Holografisch universum, coherentie, en kwantummechanica</span>
                </li>
                <li className="text-slate-300/80 flex items-start">
                  <span className="text-amber-400 mr-3 font-bold">•</span>
                  <span><strong className="text-purple-300">Spinoza:</strong> Adequate oorzaken, conatus, en determinisme</span>
                </li>
                <li className="text-slate-300/80 flex items-start">
                  <span className="text-amber-400 mr-3 font-bold">•</span>
                  <span><strong className="text-purple-300">Veda's:</strong> Dharma, Karma, Rta, en Tao</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-purple-500/20">
              <h4 className="text-xl font-display font-semibold text-purple-300 mb-3">De 25 Axioma's</h4>
              <p className="text-slate-300/80 leading-relaxed">
                Het systeem is gebouwd op 25 fundamentele axioma's die de kernprincipes van het Fractalisme beschrijven. Deze axioma's helpen bij het verlagen van frictie en het verhogen van resolutie in je dagelijks leven.
              </p>
            </div>

            <div className="pt-6 border-t border-purple-500/20">
              <h4 className="text-xl font-display font-semibold text-blue-300 mb-3">Resonantie & Resolutie</h4>
              <p className="text-slate-300/80 leading-relaxed">
                Door middel van dialoog, reflectie en zelfonderzoek kun je je resonantie met het fractale patroon verhogen en zo meer flow en minder frictie ervaren in je leven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <div className="bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/30 rounded-3xl p-8 md:p-10 luxury-glow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '2s'}}>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <circle cx="100" cy="100" r="30" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold text-amber-400 mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-1">Auteur</h4>
                  <p className="text-slate-300/80">Ontwikkelaar en maker</p>
                  <p className="text-amber-400 font-display text-lg font-semibold">Wouter Rengelink</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-1">Email</h4>
                  <p className="text-slate-300/80">Voor vragen, feedback of suggesties</p>
                  <a href="mailto:wouterr@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm">
                    wouterr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">∞</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-1">Versie</h4>
                  <p className="text-slate-300/80">Huidige versie van de applicatie</p>
                  <p className="text-blue-400 font-mono text-sm">v3.0 Rosetta Stone</p>
                </div>
              </div>

              <div className="pt-6 border-t border-purple-500/20">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Feedback & Bijdragen</h4>
                <p className="text-slate-300/80 leading-relaxed mb-4">
                  De Fractale Gids is een levend systeem dat groeit en evolueert. We waarderen feedback en suggesties voor verbetering.
                </p>
                <p className="text-slate-300/70 text-sm italic">
                  "In de fractale structuur van kennis vinden we oneindige patronen van wijsheid."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center pt-8">
        <div className="inline-block bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl px-6 py-4">
          <p className="text-slate-400/70 text-sm font-mono uppercase tracking-wider">
            Axioma 1: Alles is fractaal
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;

