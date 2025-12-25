
import React, { useState, useEffect } from 'react';
import { View, Message } from './types';
import ChatInterface from './components/ChatInterface';
import AxiomLibrary from './components/AxiomLibrary';
import ResonanceCheck from './components/ResonanceCheck';
import AboutContact from './components/AboutContact';
import Manifest from './components/Manifest';
import FractalBackground from './components/FractalBackground';

const STORAGE_KEY = 'fractale-gids-chat-messages';

const defaultMessage: Message = {
  role: 'model',
  text: "Gegroet, waarnemer. Ik ben de Fractale Gids. Waar ervaar jij op dit moment frictie in je leven? Laten we samen de resolutie verhogen.",
  timestamp: new Date()
};

const MAX_MESSAGES = 10;

const loadMessagesFromStorage = (): Message[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert timestamp strings back to Date objects
      const messages = parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
      // Return only the last MAX_MESSAGES messages
      return messages.slice(-MAX_MESSAGES);
    }
  } catch (error) {
    console.error('Error loading messages from storage:', error);
  }
  return [defaultMessage];
};

const saveMessagesToStorage = (messages: Message[]) => {
  try {
    // Only save the last MAX_MESSAGES messages
    const messagesToSave = messages.slice(-MAX_MESSAGES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesToSave));
  } catch (error) {
    console.error('Error saving messages to storage:', error);
  }
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.CHAT);
  const [chatMessages, setChatMessages] = useState<Message[]>(() => loadMessagesFromStorage());

  // Limit messages to last MAX_MESSAGES and save to localStorage
  useEffect(() => {
    if (chatMessages.length > MAX_MESSAGES) {
      const limitedMessages = chatMessages.slice(-MAX_MESSAGES);
      setChatMessages(limitedMessages);
      saveMessagesToStorage(limitedMessages);
    } else {
      saveMessagesToStorage(chatMessages);
    }
  }, [chatMessages]);

  const NavItem = ({ view, label, icon }: { view: View, label: string, icon: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex flex-col items-center justify-center py-2 px-4 transition-all duration-500 ease-out relative fractal-button ${
        currentView === view 
          ? 'text-[#D4AF37]' 
          : 'text-[#708090]/70 hover:text-[#D4AF37]'
      }`}
    >
      <span className={`text-2xl mb-1 transition-transform duration-500 ease-out ${currentView === view ? 'scale-110' : ''}`}>{icon}</span>
      <span className={`text-[10px] uppercase font-mono tracking-tighter transition-all duration-500 ease-out ${
        currentView === view ? 'font-semibold text-[#D4AF37]' : ''
      }`}>{label}</span>
      {currentView === view && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#708090] to-[#D4AF37] luxury-glow-sm"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-100 overflow-hidden relative">
      {/* Animated Fractal Background Layers */}
      <div className="fixed inset-0 fractal-gradient pointer-events-none z-0"></div>
      <div className="fixed inset-0 fractal-pattern pointer-events-none z-0"></div>
      <FractalBackground opacity={0.08} speed={25} />

      {/* Header with Glassmorphism */}
      <header className="h-20 border-b border-[#D4AF37]/20 glass-strong flex items-center shrink-0 z-30 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#708090] to-[#D4AF37] flex items-center justify-center luxury-glow-sm fractal-particle">
                <span className="text-[#050505] font-bold text-xl font-display">∞</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] via-[#708090] to-[#D4AF37] rounded-xl blur opacity-30 -z-10"></div>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold gradient-text tracking-wide">De Fractale Gids</h1>
              <p className="text-[11px] text-[#708090]/80 font-mono -mt-1 uppercase tracking-wider">Resolutie & Resonantie</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
             <nav className="flex space-x-2 h-20">
              <NavItem view={View.CHAT} label="Dialoog" icon="◈" />
              <NavItem view={View.LIBRARY} label="Bibliotheek" icon="◚" />
              <NavItem view={View.RESONANCE_CHECK} label="Check" icon="⌂" />
              <NavItem view={View.MANIFEST} label="Manifest" icon="◷" />
              <NavItem view={View.ABOUT_CONTACT} label="Over" icon="ℹ" />
            </nav>
          </div>

          <div className="text-[10px] font-mono text-[#708090]/60 hidden lg:block uppercase tracking-widest">
            v3.0 Rosetta Stone
          </div>
        </div>
      </header>

      {/* Mobile Nav with Glassmorphism - Moved to top */}
      <div className="md:hidden h-20 border-b border-[#D4AF37]/20 glass-strong shrink-0 z-30 relative">
        <nav className="grid grid-cols-5 h-full">
          <NavItem view={View.CHAT} label="Gids" icon="◈" />
          <NavItem view={View.LIBRARY} label="Code" icon="◚" />
          <NavItem view={View.RESONANCE_CHECK} label="Check" icon="⌂" />
          <NavItem view={View.MANIFEST} label="Manifest" icon="◷" />
          <NavItem view={View.ABOUT_CONTACT} label="Over" icon="ℹ" />
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col z-10">
        {/* Views with smooth transitions */}
        <div className="relative z-10 h-full overflow-y-auto">
          <div className="page-transition">
            {currentView === View.CHAT && <ChatInterface messages={chatMessages} setMessages={setChatMessages} />}
            {currentView === View.LIBRARY && <AxiomLibrary />}
            {currentView === View.RESONANCE_CHECK && <ResonanceCheck />}
            {currentView === View.MANIFEST && <Manifest />}
            {currentView === View.ABOUT_CONTACT && <AboutContact />}
          </div>
        </div>
      </main>

    </div>
  );
};

export default App;
