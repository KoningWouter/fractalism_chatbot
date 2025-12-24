
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGidsResponse } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Gegroet, waarnemer. Ik ben de Fractale Gids. Waar ervaar jij op dit moment frictie in je leven? Laten we samen de resolutie verhogen.", 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await getGidsResponse(input, history);
    
    const modelMsg: Message = { role: 'model', text: responseText || '...', timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Fractal Header Decoration */}
      <div className="text-center mb-8 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="fractal-particle">
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#chatGold)" strokeWidth="1"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="url(#chatPurple)" strokeWidth="0.8"/>
            <circle cx="100" cy="100" r="30" fill="none" stroke="url(#chatGold)" strokeWidth="0.6"/>
            <defs>
              <linearGradient id="chatGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="100%" stopColor="#f59e0b"/>
              </linearGradient>
              <linearGradient id="chatPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-3xl font-display font-bold gradient-text relative z-10">Fractale Dialoog</h2>
        <p className="text-sm text-purple-400/60 font-mono mt-2 uppercase tracking-wider relative z-10">Waar patronen zich ontvouwen</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-6 pb-4"
      >
        {messages.map((m, i) => (
          <div 
            key={i} 
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div className={`max-w-[85%] p-5 rounded-3xl relative ${
              m.role === 'user' 
                ? 'bg-gradient-to-br from-amber-600/20 via-purple-600/20 to-blue-600/20 text-white rounded-tr-sm border border-amber-500/30 luxury-glow-sm' 
                : 'bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 text-slate-100 rounded-tl-sm border border-purple-500/30 luxury-glow-sm backdrop-blur-sm'
            }`}>
              {m.role === 'model' && (
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center luxury-glow-sm">
                  <span className="text-white text-sm">∞</span>
                </div>
              )}
              <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">{m.text}</p>
              <span className={`text-[10px] opacity-60 mt-3 block ${m.role === 'user' ? 'text-right' : 'text-left'} font-mono text-purple-400/70`}>
                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/60 p-5 rounded-3xl rounded-tl-sm border border-purple-500/30 luxury-glow-sm backdrop-blur-sm">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-amber-400 to-purple-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-amber-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-purple-900/30 bg-gradient-to-r from-purple-950/30 via-indigo-950/30 to-blue-950/30 backdrop-blur-xl sticky bottom-0 rounded-t-3xl mt-4">
        <div className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Beschrijf je frictie of stel een vraag..."
            className="flex-1 bg-slate-950/80 border border-purple-500/30 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-purple-400/40 backdrop-blur-sm transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-gradient-to-r from-amber-600 via-purple-600 to-blue-600 hover:from-amber-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-2xl transition-all font-semibold disabled:opacity-50 luxury-glow-sm fractal-button relative overflow-hidden"
          >
            <span className="relative z-10">Verzend</span>
          </button>
        </div>
        <p className="text-[10px] text-center text-purple-400/50 mt-3 font-mono uppercase tracking-widest">
          Axioma 8: Vrije wil is afwijking van resonantie
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
