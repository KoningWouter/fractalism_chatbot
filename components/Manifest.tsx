
import React from 'react';

const Manifest: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
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
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="100%" stopColor="#f59e0b"/>
              </linearGradient>
              <linearGradient id="manifestPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
              <linearGradient id="manifestBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#2563eb"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-3">Manifest</h2>
        <p className="text-purple-400/60 font-mono text-sm uppercase tracking-wider relative z-10">Het Fractalisme Manifest</p>
      </section>

      {/* PDF Viewer Section */}
      <section className="space-y-6">
        <div className="bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/30 rounded-3xl p-4 md:p-6 luxury-glow-sm backdrop-blur-sm relative overflow-hidden">
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
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-600 via-purple-600 to-blue-600 hover:from-amber-500 hover:via-purple-500 hover:to-blue-500 text-white rounded-xl transition-all font-semibold luxury-glow-sm fractal-button relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">⬇</span>
                  Download PDF
                </span>
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="w-full rounded-2xl overflow-hidden border border-purple-500/20 bg-slate-900/50">
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
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
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

