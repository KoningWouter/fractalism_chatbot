
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGidsResponse } from '../services/geminiService';

interface ChatInterfaceProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, setMessages }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastModelMessageRef = useRef<HTMLDivElement>(null);
  const lastUserMessageRef = useRef<HTMLDivElement>(null);

  // Scroll to show the last user message (question) at the top when it's sent
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === 'user' && lastUserMessageRef.current && scrollRef.current) {
      // Use setTimeout to ensure the DOM has updated
      setTimeout(() => {
        if (lastUserMessageRef.current && scrollRef.current) {
          const scrollContainer = scrollRef.current;
          const messageElement = lastUserMessageRef.current;
          
          // Calculate the scroll position to place the message at the top of the container
          const containerRect = scrollContainer.getBoundingClientRect();
          const messageRect = messageElement.getBoundingClientRect();
          
          // Calculate how much we need to scroll
          // Current scroll position + difference between message and container top positions
          const currentScrollTop = scrollContainer.scrollTop;
          const messageTopRelativeToContainer = messageRect.top - containerRect.top + currentScrollTop;
          const targetScrollTop = messageTopRelativeToContainer - 20; // 20px padding from top
          
          scrollContainer.scrollTo({
            top: Math.max(0, targetScrollTop),
            behavior: 'smooth'
          });
        }
      }, 100);
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
          <code key={keyCounter++} className="glass px-1.5 py-0.5 rounded text-[#D4AF37] font-mono text-sm border border-[#D4AF37]/20">
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
              parts.push(<em key={keyCounter++} className="italic text-[#708090]">{italicParts[j].slice(1, -1)}</em>);
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
          <h3 key={`h3-${lineIndex}`} className="text-lg font-display font-semibold text-[#708090] mt-2 mb-1">
            {parseInline(trimmedLine.substring(4))}
          </h3>
        );
        return;
      }
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${lineIndex}`} className="text-xl font-display font-bold text-[#D4AF37] mt-2 mb-1">
            {parseInline(trimmedLine.substring(3))}
          </h2>
        );
        return;
      }
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${lineIndex}`} className="text-2xl font-display font-bold text-[#D4AF37] mt-2 mb-1">
            {parseInline(trimmedLine.substring(2))}
          </h1>
        );
        return;
      }

      // Quotes
      if (trimmedLine.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={`quote-${lineIndex}`} className="border-l-4 border-[#D4AF37]/50 pl-4 py-1 my-1 italic text-slate-300/90 glass rounded-r-lg">
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
    const userInput = input;
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Create history from current messages only (without the new user message)
    // The userMessage will be added separately in getGidsResponse
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await getGidsResponse(userInput, history);
    
    const modelMsg: Message = { role: 'model', text: responseText || '...', timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto px-4 md:px-8 py-12 page-transition">
      {/* Fractal Header Decoration */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-8">
          <svg width="200" height="200" viewBox="0 0 200 200" className="fractal-particle">
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#chatGold)" strokeWidth="1"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="url(#chatSlate)" strokeWidth="0.8"/>
            <circle cx="100" cy="100" r="30" fill="none" stroke="url(#chatGold)" strokeWidth="0.6"/>
            <defs>
              <linearGradient id="chatGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#C9A227"/>
              </linearGradient>
              <linearGradient id="chatSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#708090"/>
                <stop offset="100%" stopColor="#5A6A7A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl font-display font-bold gradient-text relative z-10 mb-3">Fractale Dialoog</h2>
        <p className="text-sm text-[#708090]/70 font-mono mt-2 uppercase tracking-wider relative z-10">Waar patronen zich ontvouwen</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-visible space-y-4 pt-4 pb-4 px-2"
      >
        {messages.map((m, i) => {
          const isLastModelMessage = m.role === 'model' && i === messages.length - 1;
          const isLastUserMessage = m.role === 'user' && i === messages.length - 1;
          return (
            <div 
              key={i} 
              ref={isLastModelMessage ? lastModelMessageRef : isLastUserMessage ? lastUserMessageRef : null}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn relative`}
            >
              <div className={`max-w-[85%] p-6 rounded-3xl relative glass luxury-glow-sm ${
                m.role === 'user' 
                  ? 'rounded-tr-sm border border-[#D4AF37]/30' 
                  : 'rounded-tl-sm border border-[#708090]/30'
              }`}>
                {m.role === 'model' && (
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#708090] flex items-center justify-center luxury-glow-sm z-20">
                    <span className="text-[#050505] text-sm font-bold">∞</span>
                  </div>
                )}
                <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-slate-100">{formatText(m.text)}</div>
                <span className={`text-[10px] opacity-60 mt-4 block ${m.role === 'user' ? 'text-right' : 'text-left'} font-mono text-[#708090]/70`}>
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex justify-start">
            <div className="glass p-6 rounded-3xl rounded-tl-sm border border-[#708090]/30 luxury-glow-sm">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#D4AF37] to-[#708090] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#708090] to-[#D4AF37] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#D4AF37] to-[#708090] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 md:p-6 border-t border-[#D4AF37]/20 glass-strong sticky bottom-0 rounded-t-3xl mt-6">
        <div className="flex gap-2 md:gap-3 items-stretch">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Beschrijf je frictie of stel een vraag..."
            className="flex-1 min-w-0 glass border border-[#708090]/30 rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 text-white placeholder-[#708090]/50 backdrop-blur-sm transition-all text-sm md:text-base"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-gradient-to-r from-[#D4AF37] via-[#708090] to-[#D4AF37] hover:from-[#E5C158] hover:via-[#8FA0B0] hover:to-[#E5C158] text-[#050505] w-12 h-12 md:w-auto md:px-8 md:py-4 rounded-2xl transition-all font-semibold disabled:opacity-50 luxury-glow-sm fractal-button relative overflow-hidden flex items-center justify-center flex-shrink-0"
            title="Verzenden"
          >
            <span className="relative z-10 text-xl md:text-2xl">➤</span>
          </button>
        </div>
        <p className="text-[10px] text-center text-[#708090]/60 mt-4 font-mono uppercase tracking-widest">
          Axioma 8: Vrije wil is afwijking van resonantie
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
