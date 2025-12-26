
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Wat is de Fractale Gids?",
      answer: "De Fractale Gids is een filosofisch raamwerk gebaseerd op de wetten van resonantie en fractale patronen. Het helpt je navigeren door keuzestress en lijden door je positie in het universele patroon te herstellen."
    },
    {
      question: "Hoe gebruik ik de Fractale Gids?",
      answer: "Je kunt de Fractale Gids gebruiken door vragen te stellen in de Dialoog, de Axioma's te bestuderen in de Bibliotheek, of je resonantie te checken met de Resonantie Check tool."
    },
    {
      question: "Wat zijn Axioma's?",
      answer: "Axioma's zijn de fundamentele principes van het fractale denken. Ze vormen de basis van het systeem en helpen je patronen te herkennen in je eigen leven."
    },
    {
      question: "Wat is resonantie?",
      answer: "Resonantie is het principe waarbij gelijksoortige patronen elkaar versterken. Door je resonantie te verhogen, kom je in flow en vermindert lijden."
    },
    {
      question: "Hoe werkt de Resonantie Check?",
      answer: "De Resonantie Check analyseert je input en geeft inzicht in welke patronen en axioma's relevant zijn voor jouw situatie."
    },
    {
      question: "Is de Fractale Gids een religie?",
      answer: "Nee, de Fractale Gids is een filosofisch en praktisch raamwerk. Het is een manier van kijken naar de wereld en je eigen positie daarin, zonder religieuze verplichtingen."
    },
    {
      question: "Kan ik de Fractale Gids gebruiken voor specifieke problemen?",
      answer: "Ja, de Fractale Gids is ontworpen om te helpen bij allerlei vormen van frictie en keuzestress. Stel je vraag in de Dialoog en de Gids zal je begeleiden."
    },
    {
      question: "Wat betekent 'fractaal' in deze context?",
      answer: "Fractaal verwijst naar patronen die zich op verschillende schalen herhalen. Net zoals een fractaal in de wiskunde, zien we dat levenspatronen zich op verschillende niveaus herhalen."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16 page-transition">
      {/* Header Section */}
      <section className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="300" height="300" viewBox="0 0 300 300" className="fractal-particle">
            <g transform="translate(150,150)">
              <circle r="120" fill="none" stroke="url(#faqGold)" strokeWidth="1"/>
              <circle r="80" fill="none" stroke="url(#faqSlate)" strokeWidth="0.8"/>
              <circle r="50" fill="none" stroke="url(#faqGold)" strokeWidth="0.6"/>
              <circle r="30" fill="none" stroke="url(#faqSlate)" strokeWidth="0.4"/>
            </g>
            <defs>
              <linearGradient id="faqGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#C9A227"/>
              </linearGradient>
              <linearGradient id="faqSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#708090"/>
                <stop offset="100%" stopColor="#5A6A7A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10 mb-4">Veelgestelde Vragen</h2>
        <p className="text-[#708090]/70 font-mono text-sm uppercase tracking-wider relative z-10">FAQ - Veelgestelde Vragen</p>
      </section>

      {/* FAQ Items */}
      <section className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-strong border border-[#708090]/30 rounded-3xl overflow-hidden luxury-glow-sm transition-all duration-500"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors duration-300"
            >
              <h3 className="text-lg md:text-xl font-display font-semibold text-[#D4AF37] pr-4 flex-1">
                {faq.question}
              </h3>
              <span className={`text-2xl text-[#708090] transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <div className="border-t border-[#708090]/20 pt-6">
                  <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Help Section */}
      <section className="glass-strong border border-[#D4AF37]/30 rounded-3xl p-8 md:p-10 luxury-glow-sm text-center">
        <h3 className="text-2xl font-display font-bold text-[#D4AF37] mb-4">
          Nog meer vragen?
        </h3>
        <p className="text-slate-200 mb-6">
          Stel je vraag in de Dialoog of bekijk de Axioma's in de Bibliotheek voor meer diepgang.
        </p>
      </section>
    </div>
  );
};

export default FAQ;

