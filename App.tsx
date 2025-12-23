
import React, { useState } from 'react';
import { View } from './types';
import ChatInterface from './components/ChatInterface';
import AxiomLibrary from './components/AxiomLibrary';
import ResonanceCheck from './components/ResonanceCheck';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.CHAT);

  const NavItem = ({ view, label, icon }: { view: View, label: string, icon: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex flex-col items-center justify-center py-2 px-4 transition-all border-b-2 ${
        currentView === view 
          ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' 
          : 'border-transparent text-slate-500 hover:text-slate-300'
      }`}
    >
      <span className="text-lg mb-1">{icon}</span>
      <span className="text-[10px] uppercase font-mono tracking-tighter">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-200 overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl flex items-center px-6 justify-between shrink-0 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Φ</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">De Fractale Gids</h1>
            <p className="text-[10px] text-slate-500 font-mono -mt-1 uppercase">Resolutie & Resonantie</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
           <nav className="flex space-x-1 h-16">
            <NavItem view={View.CHAT} label="Dialoog" icon="◈" />
            <NavItem view={View.LIBRARY} label="Bibliotheek" icon="◚" />
            <NavItem view={View.RESONANCE_CHECK} label="Check" icon="⌂" />
          </nav>
        </div>

        <div className="text-[10px] font-mono text-slate-600 hidden lg:block uppercase tracking-widest">
          v3.0 Rosetta Stone
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Background Decoration */}
        <div className="absolute inset-0 fractal-gradient pointer-events-none opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
           <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        {/* Views */}
        <div className="relative z-10 h-full overflow-y-auto">
          {currentView === View.CHAT && <ChatInterface />}
          {currentView === View.LIBRARY && <AxiomLibrary />}
          {currentView === View.RESONANCE_CHECK && <ResonanceCheck />}
        </div>
      </main>

      {/* Mobile Nav */}
      <footer className="md:hidden h-16 border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl shrink-0 z-20">
        <nav className="grid grid-cols-3 h-full">
          <NavItem view={View.CHAT} label="Gids" icon="◈" />
          <NavItem view={View.LIBRARY} label="Code" icon="◚" />
          <NavItem view={View.RESONANCE_CHECK} label="Check" icon="⌂" />
        </nav>
      </footer>
    </div>
  );
};

export default App;
