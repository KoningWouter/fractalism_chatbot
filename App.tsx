
import React, { useState } from 'react';
import { View } from './types';
import ChatInterface from './components/ChatInterface';
import AxiomLibrary from './components/AxiomLibrary';
import ResonanceCheck from './components/ResonanceCheck';
import AboutContact from './components/AboutContact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.CHAT);

  const NavItem = ({ view, label, icon }: { view: View, label: string, icon: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex flex-col items-center justify-center py-2 px-4 transition-all duration-300 relative fractal-button ${
        currentView === view 
          ? 'text-amber-400' 
          : 'text-purple-400/60 hover:text-purple-300'
      }`}
    >
      <span className={`text-2xl mb-1 transition-transform duration-300 ${currentView === view ? 'scale-110' : ''}`}>{icon}</span>
      <span className={`text-[10px] uppercase font-mono tracking-tighter transition-all duration-300 ${
        currentView === view ? 'font-semibold text-amber-400' : ''
      }`}>{label}</span>
      {currentView === view && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 luxury-glow-sm"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100 overflow-hidden relative">
      {/* Animated Fractal Background Layers */}
      <div className="fixed inset-0 fractal-gradient pointer-events-none z-0"></div>
      <div className="fixed inset-0 fractal-pattern pointer-events-none z-0"></div>
      
      {/* Fractal Decorative Elements */}
      <div className="fixed top-20 right-10 w-96 h-96 opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="fractal1" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5"/>
              <circle cx="25" cy="25" r="15" fill="none" stroke="url(#purpleGradient)" strokeWidth="0.3"/>
              <circle cx="75" cy="25" r="15" fill="none" stroke="url(#purpleGradient)" strokeWidth="0.3"/>
              <circle cx="25" cy="75" r="15" fill="none" stroke="url(#purpleGradient)" strokeWidth="0.3"/>
              <circle cx="75" cy="75" r="15" fill="none" stroke="url(#purpleGradient)" strokeWidth="0.3"/>
            </pattern>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#fractal1)" className="fractal-particle"/>
        </svg>
      </div>
      
      <div className="fixed bottom-20 left-10 w-64 h-64 opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 100 10 L 190 100 L 100 190 L 10 100 Z" fill="none" stroke="url(#goldGradient)" strokeWidth="1" className="fractal-particle" style={{animationDelay: '2s'}}/>
          <path d="M 100 40 L 160 100 L 100 160 L 40 100 Z" fill="none" stroke="url(#purpleGradient)" strokeWidth="0.8" className="fractal-particle" style={{animationDelay: '3s'}}/>
          <path d="M 100 70 L 130 100 L 100 130 L 70 100 Z" fill="none" stroke="url(#goldGradient)" strokeWidth="0.6" className="fractal-particle" style={{animationDelay: '4s'}}/>
        </svg>
      </div>

      {/* Header */}
      <header className="h-20 border-b border-purple-900/30 bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-blue-950/20 backdrop-blur-2xl flex items-center px-6 justify-between shrink-0 z-30 relative">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-purple-600 to-blue-600 flex items-center justify-center luxury-glow-sm fractal-particle">
              <span className="text-white font-bold text-xl font-display">∞</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 via-purple-600 to-blue-600 rounded-xl blur opacity-30 -z-10"></div>
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold gradient-text tracking-tight">De Fractale Gids</h1>
            <p className="text-[11px] text-purple-400/70 font-mono -mt-1 uppercase tracking-wider">Resolutie & Resonantie</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
           <nav className="flex space-x-2 h-20">
            <NavItem view={View.CHAT} label="Dialoog" icon="◈" />
            <NavItem view={View.LIBRARY} label="Bibliotheek" icon="◚" />
            <NavItem view={View.RESONANCE_CHECK} label="Check" icon="⌂" />
            <NavItem view={View.ABOUT_CONTACT} label="Over" icon="ℹ" />
          </nav>
        </div>

        <div className="text-[10px] font-mono text-purple-500/50 hidden lg:block uppercase tracking-widest">
          v3.0 Rosetta Stone
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col z-10">
        {/* Views */}
        <div className="relative z-10 h-full overflow-y-auto">
          {currentView === View.CHAT && <ChatInterface />}
          {currentView === View.LIBRARY && <AxiomLibrary />}
          {currentView === View.RESONANCE_CHECK && <ResonanceCheck />}
          {currentView === View.ABOUT_CONTACT && <AboutContact />}
        </div>
      </main>

      {/* Mobile Nav */}
      <footer className="md:hidden h-20 border-t border-purple-900/30 bg-gradient-to-r from-purple-950/30 via-indigo-950/30 to-blue-950/30 backdrop-blur-2xl shrink-0 z-30 relative">
        <nav className="grid grid-cols-4 h-full">
          <NavItem view={View.CHAT} label="Gids" icon="◈" />
          <NavItem view={View.LIBRARY} label="Code" icon="◚" />
          <NavItem view={View.RESONANCE_CHECK} label="Check" icon="⌂" />
          <NavItem view={View.ABOUT_CONTACT} label="Over" icon="ℹ" />
        </nav>
      </footer>
    </div>
  );
};

export default App;
