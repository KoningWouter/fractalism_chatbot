
import React from 'react';

const Manifest: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-10 page-transition">
      {/* Header Section */}
      <section className="text-center mb-8 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="300" height="300" viewBox="0 0 300 300" className="fractal-particle">
            <g transform="translate(150,150)">
              <circle r="120" fill="none" stroke="url(#manifestGold)" strokeWidth="1"/>
              <circle r="80" fill="none" stroke="url(#manifestPurple)" strokeWidth="0.8"/>
              <circle r="50" fill="none" stroke="url(#manifestBlue)" strokeWidth="0.6"/>
              <circle r="30" fill="none" stroke="url(#manifestGold)" strokeWidth="0.4"/>
            </g>
            <defs>
              <linearGradient id="manifestGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#C9A227"/>
              </linearGradient>
              <linearGradient id="manifestPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#708090"/>
                <stop offset="100%" stopColor="#5A6A7A"/>
              </linearGradient>
              <linearGradient id="manifestBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#708090"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-4">Manifest</h2>
        <p className="text-[#708090]/70 font-mono text-sm uppercase tracking-wider relative z-10">Het Fractalisme Manifest</p>
      </section>

      {/* PDF Viewer Section */}
      <section className="space-y-6">
        <div className="glass-strong border border-[#708090]/30 rounded-3xl p-4 md:p-6 luxury-glow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fractal-particle" style={{animationDelay: '1s'}}>
              <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#manifestGold)" strokeWidth="1"/>
              <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#manifestPurple)" strokeWidth="0.8"/>
              <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#manifestBlue)" strokeWidth="0.6"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            {/* Download Button */}
            <div className="mb-4 flex justify-end">
              <a
                href="/fractalisme-manifest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#708090] to-[#D4AF37] hover:from-[#E5C158] hover:via-[#8FA0B0] hover:to-[#E5C158] text-[#050505] rounded-xl transition-all font-semibold luxury-glow-sm fractal-button relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">⬇</span>
                  Download PDF
                </span>
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="w-full rounded-2xl overflow-hidden border border-[#708090]/20 glass">
              <iframe
                src="/fractalisme-manifest.pdf"
                className="w-full h-[calc(100vh-300px)] min-h-[600px]"
                title="Fractalisme Manifest PDF"
                style={{ border: 'none' }}
              />
            </div>

            {/* Fallback message */}
            <div className="mt-4 text-center">
              <p className="text-slate-400/70 text-sm font-mono">
                Kan de PDF niet laden?{' '}
                <a
                  href="/fractalisme-manifest.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#E5C158] transition-colors underline"
                >
                  Open in nieuw tabblad
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifest;

