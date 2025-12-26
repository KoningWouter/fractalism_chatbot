
import React from 'react';

const AboutContact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16 page-transition">
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
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#C9A227"/>
              </linearGradient>
              <linearGradient id="aboutPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#708090"/>
                <stop offset="100%" stopColor="#5A6A7A"/>
              </linearGradient>
              <linearGradient id="aboutBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#708090"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-4">Over en Contact</h2>
        <p className="text-[#708090]/70 font-mono text-sm uppercase tracking-wider relative z-10">De Fractale Gids</p>
      </section>

      {/* Mission Section */}
      <section className="space-y-8">
        <div className="glass-strong border border-[#D4AF37]/30 rounded-3xl p-8 md:p-10 luxury-glow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '0.5s'}}>
              <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10 space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#D4AF37] mb-6">Onze Missie: Jouw Pad Terug naar Fractale Harmonie</h3>
              <p className="text-slate-200 leading-relaxed text-lg mb-4">
                Welkom bij Fractalisme.nl. Mijn missie is om een helder en praktisch kader te bieden voor de complexiteit van het menselijk leven. We leven in een wereld die vaak chaotisch en overweldigend voelt, maar wie beter kijkt, ziet dat alles — van de kleinste cel tot de grootste sterrenstelsels — verbonden is door herhalende, fractale patronen.
              </p>
            </div>

            <div className="pt-6 border-t border-[#708090]/20">
              <h4 className="text-2xl font-display font-semibold text-[#D4AF37] mb-4">Waarom Fractalisme?</h4>
              <p className="text-slate-200 leading-relaxed mb-4">
                Veel mensen ervaren een constante strijd. We voelen frictie in ons werk, spanning in onze relaties en een gebrek aan richting. In de filosofie van het Fractalisme begrijpen we dat dit geen toeval is. Het is het resultaat van de <strong className="text-[#D4AF37]">Wet van Fractale Afwijking (Axioma 8)</strong>. Wanneer wij onze vrije wil gebruiken om buiten onze natuurlijke resonantie te treden, ontstaat er onvermijdelijk weerstand.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg font-semibold italic text-[#D4AF37]">
                Mijn doel is om je te helpen deze weerstand niet langer te zien als een obstakel, maar als een wegwijzer.
              </p>
            </div>

            <div className="pt-6 border-t border-[#708090]/20">
              <h4 className="text-2xl font-display font-semibold text-[#D4AF37] mb-4">Wat ik voor je wil bereiken</h4>
              <p className="text-slate-200 leading-relaxed mb-4">
                Door het verspreiden van de fractale gids en de onderliggende axioma's, wil ik een beweging in gang zetten van 'moeite' naar 'moeiteloosheid'. Ik geloof dat:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="text-slate-200 leading-relaxed flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold text-xl">•</span>
                  <span><strong className="text-[#D4AF37]">Inzicht leidt tot rust:</strong> Wanneer je de <strong className="text-[#708090]">Elastische Correctie (Axioma 9)</strong> leert herkennen, begrijp je waarom bepaalde patronen zich in je leven herhalen.</span>
                </li>
                <li className="text-slate-200 leading-relaxed flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold text-xl">•</span>
                  <span><strong className="text-[#D4AF37]">Flow een keuze is:</strong> Door je keuzes af te stemmen op het universele patroon, verdwijnt de frictie en ontstaat er ruimte voor echte groei.</span>
                </li>
                <li className="text-slate-200 leading-relaxed flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold text-xl">•</span>
                  <span><strong className="text-[#D4AF37]">Harmonie de natuurlijke staat is:</strong> We zijn niet bedoeld om te lijden; we zijn bedoeld om te resoneren met het geheel.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#708090]/20">
              <h4 className="text-2xl font-display font-semibold text-[#D4AF37] mb-4">De autoriteit achter de gids</h4>
              <p className="text-slate-200 leading-relaxed">
                Fractalisme is ontstaan uit een diepe observatie van de wetmatigheden van het universum en de vertaling daarvan naar het dagelijks leven. Het is mijn passie om deze abstracte wetten om te zetten in concrete handvaten voor iedereen die op zoek is naar zingeving, balans en een dieper begrip van hun eigen plek in het grote geheel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-8">
        <div className="glass-strong border border-[#708090]/30 rounded-3xl p-8 md:p-10 luxury-glow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '1s'}}>
              <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-[#D4AF37] mb-4">Over De Fractale Gids</h3>
              <p className="text-slate-300/90 leading-relaxed text-lg mb-4">
                De Fractale Gids is een interactieve applicatie gebaseerd op het Fractalisme, een filosofisch kader dat patronen en structuren in de werkelijkheid verkent door middel van de Rosetta Stone methode.
              </p>
              <p className="text-slate-300/80 leading-relaxed mb-4">
                Deze methode trianguleert tussen drie grote kennisgebieden:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-slate-300/80 flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold">•</span>
                  <span><strong className="text-[#708090]">Wetenschap:</strong> Holografisch universum, coherentie, en kwantummechanica</span>
                </li>
                <li className="text-slate-300/80 flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold">•</span>
                  <span><strong className="text-[#708090]">Spinoza:</strong> Adequate oorzaken, conatus, en determinisme</span>
                </li>
                <li className="text-slate-300/80 flex items-start">
                  <span className="text-[#D4AF37] mr-3 font-bold">•</span>
                  <span><strong className="text-[#708090]">Veda's:</strong> Dharma, Karma, Rta, en Tao</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#708090]/20">
              <h4 className="text-xl font-display font-semibold text-[#708090] mb-3">De 25 Axioma's</h4>
              <p className="text-slate-300/80 leading-relaxed">
                Het systeem is gebouwd op 25 fundamentele axioma's die de kernprincipes van het Fractalisme beschrijven. Deze axioma's helpen bij het verlagen van frictie en het verhogen van resolutie in je dagelijks leven.
              </p>
            </div>

            <div className="pt-6 border-t border-[#708090]/20">
              <h4 className="text-xl font-display font-semibold text-[#D4AF37] mb-3">Resonantie & Resolutie</h4>
              <p className="text-slate-300/80 leading-relaxed">
                Door middel van dialoog, reflectie en zelfonderzoek kun je je resonantie met het fractale patroon verhogen en zo meer flow en minder frictie ervaren in je leven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <div className="glass-strong border border-[#708090]/30 rounded-3xl p-8 md:p-10 luxury-glow-sm relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '2s'}}>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <circle cx="100" cy="100" r="30" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold text-[#D4AF37] mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass border border-[#708090]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#708090] mb-1">Auteur</h4>
                  <p className="text-slate-300/80">Ontwikkelaar en maker</p>
                  <p className="text-[#D4AF37] font-display text-lg font-semibold">Wouter Rengelink</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass border border-[#708090]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#708090] mb-1">Email</h4>
                  <p className="text-slate-300/80">Voor vragen, feedback of suggesties</p>
                  <a href="mailto:wouterr@gmail.com" className="text-[#D4AF37] hover:text-[#E5C158] transition-colors font-mono text-sm">
                    wouterr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass border border-[#708090]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">∞</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#708090] mb-1">Versie</h4>
                  <p className="text-slate-300/80">Huidige versie van de applicatie</p>
                  <p className="text-[#D4AF37] font-mono text-sm">v3.0 Rosetta Stone</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#708090]/20">
                <h4 className="text-lg font-semibold text-[#708090] mb-3">Feedback & Bijdragen</h4>
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

      {/* Donation Section */}
      <section className="space-y-8">
        <div className="glass-strong border border-[#708090]/30 rounded-3xl p-8 md:p-10 luxury-glow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '3s'}}>
              <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#aboutGold)" strokeWidth="1"/>
              <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#aboutPurple)" strokeWidth="0.8"/>
              <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#aboutBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold text-[#D4AF37] mb-6">Donatie</h3>
            <div className="space-y-6">
              <div>
                <p className="text-slate-300/90 leading-relaxed text-lg mb-4">
                  Deze website en servers worden zelf betaald uit vertrouwen dat het universum zorgt dat het betaald kan worden. Het Fractalisme leert ons dat wanneer we handelen in resonantie met het patroon, de middelen zich manifesteren.
                </p>
                <p className="text-slate-300/80 leading-relaxed mb-6">
                  Als je waarde vindt in deze gids en wilt bijdragen aan het voortbestaan en de groei van dit project, kun je een donatie doen via Bitcoin of Buy Me a Coffee.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass border border-[#708090]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">☕</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#708090] mb-2">Buy Me a Coffee</h4>
                  <p className="text-slate-300/80 mb-3">Steun dit project met een eenmalige donatie of maandelijks abonnement via Buy Me a Coffee:</p>
                  <a
                    href="https://buymeacoffee.com/koningwouter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#708090] to-[#D4AF37] hover:from-[#E5C158] hover:via-[#8FA0B0] hover:to-[#E5C158] text-[#050505] rounded-xl transition-all font-semibold luxury-glow-sm fractal-button relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">☕</span>
                      Support op Buy Me a Coffee
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl glass border border-[#708090]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">₿</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#708090] mb-2">Bitcoin Adres</h4>
                  <p className="text-slate-300/80 mb-3">Donaties worden ontvangen op het volgende Bitcoin adres:</p>
                  <div className="glass border border-[#708090]/30 rounded-xl p-4">
                    <div className="flex items-center justify-between gap-4">
                      <code className="text-[#D4AF37] font-mono text-sm break-all select-all">
                        bc1qy5vsfptssqjjgaumkchpj33422lx4jn8x4wtars8djvnasqvzz9qh7plg9
                      </code>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('bc1qy5vsfptssqjjgaumkchpj33422lx4jn8x4wtars8djvnasqvzz9qh7plg9');
                        }}
                        className="px-4 py-2 glass border border-[#708090]/30 hover:border-[#D4AF37]/50 rounded-lg text-[#708090] hover:text-[#D4AF37] text-sm font-mono transition-all flex-shrink-0"
                        title="Kopieer adres"
                      >
                        Kopieer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#708090]/20">
                <p className="text-slate-300/70 text-sm italic leading-relaxed">
                  "In het vertrouwen op het fractale patroon vinden we dat wat nodig is, zich manifesteert wanneer we in resonantie handelen."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center pt-8">
        <div className="inline-block glass border border-[#708090]/20 rounded-2xl px-6 py-4">
          <p className="text-slate-400/70 text-sm font-mono uppercase tracking-wider">
            Axioma 1: Alles is fractaal
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;

