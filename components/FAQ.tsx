
import React, { useState } from 'react';
import { View } from '../types';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  onNavigate?: (view: View) => void;
}

const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Wat is de Fractale Gids en hoe helpt het bij persoonlijke groei?",
      answer: (
        <>
          De Fractale Gids is een praktisch kompas voor iedereen die op zoek is naar meer balans en richting in een chaotische wereld. In plaats van symptomen te bestrijden, helpt deze gids je om de onderliggende fractale patronen in je leven te zien.
          <br /><br />
          Door gebruik te maken van de{' '}
          <button
            onClick={() => onNavigate?.(View.RESONANCE_CHECK)}
            className="text-[#D4AF37] hover:text-[#E5C158] underline font-semibold transition-colors duration-300"
          >
            Resonantie Check
          </button>
          {' '}en de fundamentele Axioma's, leer je precies waar je onbewust tegen het patroon in beweegt. De gids biedt handvaten om de 'elastische spanning' in je leven te verlagen. Of je nu kampt met keuzestress, een gebrek aan zingeving of professionele blokkades, de Fractale Gids helpt je om je vrije wil zo te gebruiken dat deze weer resoneert met het grotere geheel. Zo transformeer je moeite naar moeiteloosheid.
        </>
      )
    },
    {
      question: "Hoe gebruik ik de Fractale Gids?",
      answer: "Je kunt de Fractale Gids gebruiken door vragen te stellen in de Dialoog, de Axioma's te bestuderen in de Bibliotheek, of je resonantie te checken met de Resonantie Check tool."
    },
    {
      question: "Wat zijn de universele wetten (Axioma's) van het Fractalisme?",
      answer: "Axioma's zijn de fundamentele principes van het fractale denken. Ze vormen de basis van het systeem en helpen je patronen te herkennen in je eigen leven."
    },
    {
      question: "Wat is fractale resonantie en hoe beïnvloedt dit mijn geluk?",
      answer: "Resonantie is het principe waarbij gelijksoortige patronen elkaar versterken. Door je resonantie te verhogen, kom je in flow en vermindert lijden."
    },
    {
      question: "Hoe kom ik weer in een 'flow'?",
      answer: "Om weer in een flow te komen, is het essentieel om je optimale fractale resonantie te herstellen. Volgens de Wet van Fractale Afwijking (Axioma 8) ontstaat frictie wanneer we onze vrije wil gebruiken om tegen het universele patroon in te gaan. Door dit patroon weer te volgen, verdwijnt de weerstand."
    },
    {
      question: "Waarom ervaar ik frictie en lijden in mijn leven?",
      answer: "Het ervaren van frictie, weerstand of lijden is binnen het Fractalisme geen toeval, maar een essentieel signaal. Volgens Axioma 8 (De Wet van Fractale Afwijking) beschikken we over de vrije wil om af te wijken van onze optimale fractale resonantie. Wanneer we keuzes maken die niet in lijn liggen met het universele patroon, ontstaat er frictie.\n\nDit proces wordt versterkt door Axioma 9 (De Elastische Correctie). Hoe verder je afwijkt van je natuurlijke pad, hoe groter de spanning en de corrigerende kracht van het universum worden. Dit voelt vaak als lijden of 'tegen de stroom in zwemmen'. Het doel van deze frictie is niet om je te straffen, maar om je via een elastische correctie terug te duwen naar een staat van harmonie en flow. Door deze patronen te herkennen, kun je de weerstand verminderen en je weer verbinden met je eigen resonantie."
    },
    {
      question: "Hoe werkt de Resonantie Check?",
      answer: "De Resonantie Check analyseert je input en geeft inzicht in welke patronen en axioma's relevant zijn voor jouw situatie."
    },
    {
      question: "Is de Fractale Gids een religie?",
      answer: "Nee, de Fractale Gids en het Fractalisme zijn geen religie. Er is geen sprake van aanbidding, dogma's of een opgelegde moraal. In plaats daarvan is het een filosofisch kader en een praktische methodiek die gebaseerd is op het observeren van patronen in de natuur en het universum.\n\nWaar religies vaak vragen om geloof, vraagt het Fractalisme om waarneming. De wetten, zoals de Wet van Fractale Afwijking (Axioma 8), zijn bedoeld als instrumenten om je eigen werkelijkheid te toetsen. Je hoeft niet in de Elastische Correctie (Axioma 9) te 'geloven' om de frictie te voelen wanneer je tegen je eigen natuurlijke ritme in gaat.\n\nHet Fractalisme slaat een brug tussen wetenschappelijke concepten (zoals fractale structuren) en persoonlijke levensvragen. Het is een gereedschapskist voor zelfonderzoek. Of je nu een religieuze, atheïstische of agnostische achtergrond hebt: de Fractale Gids is universeel toepasbaar omdat het simpelweg kijkt naar de resonantie tussen het individu en het grotere geheel. Het doel is niet bekering, maar het bereiken van een staat van flow en harmonie door inzicht in je eigen patronen."
    },
    {
      question: "Helpt de Fractale Gids bij stress, burn-out of keuzestress?",
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
                  <div className="text-slate-200 leading-relaxed text-sm md:text-base">
                    {typeof faq.answer === 'string' ? (
                      <p style={{ whiteSpace: 'pre-wrap' }}>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
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

