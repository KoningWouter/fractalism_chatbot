
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

  const formatText = (text: string): React.ReactNode => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listType: 'ordered' | 'unordered' | null = null;
    let listItems: React.ReactNode[] = [];
    let listCounter = 1;

    const parseInline = (line: string): React.ReactNode => {
      const parts: React.ReactNode[] = [];
      let currentIndex = 0;
      let keyCounter = 0;

      // First handle code blocks (backticks)
      const codeRegex = /`([^`]+)`/g;
      let lastIndex = 0;
      let match;

      while ((match = codeRegex.exec(line)) !== null) {
        // Add text before code
        if (match.index > lastIndex) {
          const beforeText = line.substring(lastIndex, match.index);
          parts.push(...parseInlineText(beforeText, keyCounter));
          keyCounter += 100;
        }
        // Add code
        parts.push(
          <code key={keyCounter++} className="bg-slate-800/60 px-1.5 py-0.5 rounded text-amber-400 font-mono text-sm">
            {match[1]}
          </code>
        );
        lastIndex = codeRegex.lastIndex;
      }
      // Add remaining text
      if (lastIndex < line.length) {
        parts.push(...parseInlineText(line.substring(lastIndex), keyCounter));
      }

      return <>{parts}</>;
    };

    const parseInlineText = (text: string, startKey: number): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      let keyCounter = startKey;
      
      // Split on bold (**) first
      const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
      
      for (let i = 0; i < boldParts.length; i++) {
        if (boldParts[i].startsWith('**') && boldParts[i].endsWith('**')) {
          // Bold text - parse italic inside
          const boldContent = boldParts[i].slice(2, -2);
          const italicParts = boldContent.split(/(\*[^*]+\*)/g);
          const boldElements: React.ReactNode[] = [];
          
          for (let j = 0; j < italicParts.length; j++) {
            if (italicParts[j].startsWith('*') && italicParts[j].endsWith('*') && italicParts[j].length > 2) {
              boldElements.push(
                <em key={keyCounter++} className="italic">
                  <strong className="font-semibold">{italicParts[j].slice(1, -1)}</strong>
                </em>
              );
            } else if (italicParts[j]) {
              boldElements.push(<strong key={keyCounter++} className="font-semibold">{italicParts[j]}</strong>);
            }
          }
          parts.push(...boldElements);
        } else if (boldParts[i]) {
          // Regular text - parse italic
          const italicParts = boldParts[i].split(/(\*[^*]+\*)/g);
          for (let j = 0; j < italicParts.length; j++) {
            if (italicParts[j].startsWith('*') && italicParts[j].endsWith('*') && italicParts[j].length > 2) {
              parts.push(<em key={keyCounter++} className="italic text-purple-300">{italicParts[j].slice(1, -1)}</em>);
            } else if (italicParts[j]) {
              parts.push(<span key={keyCounter++}>{italicParts[j]}</span>);
            }
          }
        }
      }

      return parts;
    };

    const flushList = () => {
      if (listItems.length > 0) {
        if (listType === 'ordered') {
          elements.push(
            <ol key={`list-${elements.length}`} className="list-decimal list-inside space-y-0.5 ml-4 my-1">
              {listItems}
            </ol>
          );
        } else {
          elements.push(
            <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-0.5 ml-4 my-1">
              {listItems}
            </ul>
          );
        }
        listItems = [];
        listType = null;
        listCounter = 1;
        inList = false;
      }
    };

    // Collapse multiple consecutive empty lines into single empty lines
    const processedLines: string[] = [];
    let lastWasEmpty = false;
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine === '') {
        if (!lastWasEmpty) {
          processedLines.push('');
          lastWasEmpty = true;
        }
      } else {
        processedLines.push(line);
        lastWasEmpty = false;
      }
    }

    processedLines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();

      // Headers
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${lineIndex}`} className="text-lg font-display font-semibold text-blue-300 mt-2 mb-1">
            {parseInline(trimmedLine.substring(4))}
          </h3>
        );
        return;
      }
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${lineIndex}`} className="text-xl font-display font-bold text-purple-300 mt-2 mb-1">
            {parseInline(trimmedLine.substring(3))}
          </h2>
        );
        return;
      }
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${lineIndex}`} className="text-2xl font-display font-bold text-amber-400 mt-2 mb-1">
            {parseInline(trimmedLine.substring(2))}
          </h1>
        );
        return;
      }

      // Quotes
      if (trimmedLine.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={`quote-${lineIndex}`} className="border-l-4 border-amber-500/50 pl-4 py-1 my-1 italic text-slate-300/90 bg-slate-900/30 rounded-r-lg">
            {parseInline(trimmedLine.substring(2))}
          </blockquote>
        );
        return;
      }

      // Ordered list
      const orderedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
      if (orderedMatch) {
        if (!inList || listType !== 'ordered') {
          flushList();
          inList = true;
          listType = 'ordered';
        }
        listItems.push(
          <li key={`ol-${lineIndex}`} className="my-0.5">
            {parseInline(orderedMatch[2])}
          </li>
        );
        return;
      }

      // Unordered list
      const unorderedMatch = trimmedLine.match(/^[-*]\s+(.+)$/);
      if (unorderedMatch) {
        if (!inList || listType !== 'unordered') {
          flushList();
          inList = true;
          listType = 'unordered';
        }
        listItems.push(
          <li key={`ul-${lineIndex}`} className="my-0.5">
            {parseInline(unorderedMatch[1])}
          </li>
        );
        return;
      }

      // Regular line
      flushList();
      if (trimmedLine) {
        elements.push(
          <p key={`p-${lineIndex}`} className="my-1">
            {parseInline(trimmedLine)}
          </p>
        );
      } else {
        // Empty line - only add one br for spacing
        elements.push(<br key={`br-${lineIndex}`} />);
      }
    });

    flushList();
    return <>{elements}</>;
  };

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
        className="flex-1 overflow-y-auto space-y-3 pb-4"
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
              <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{formatText(m.text)}</div>
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
