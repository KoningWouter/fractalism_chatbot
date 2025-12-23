
import React from 'react';
import { Axiom, Correlation } from './types';

export const KNOWLEDGE_BASE_RAW = `
Manifest van het Fractalisme... (Volledige tekst uit de user prompt is hier geimpliceerd als context voor de AI)
Axioma 8: Vrije wil is het vermogen om af te wijken van de optimale resonantie.
Axioma 9: De Elastische Correctie. Afwijking creëert spanning (lijden).
Rosetta Stone: Triangulatie tussen Wetenschap (Hologram, Coherentie), Spinoza (Adequate oorzaken), en Veda's (Dharma, Karma, Rta).
`;

export const AXIOMS: Axiom[] = [
  { id: 0, category: 'Basis', name: 'Axioma van de Eenheid', description: 'Ik ben de formule. Er is geen onderscheid tussen de bron, de wetmatigheid en de waarnemer.' },
  { id: 1, category: 'Basis', name: 'Universele Vergelijking', description: 'Alles is afgeleid van de fractale formule die de vorm en de wetten van actie en reactie dicteert.' },
  { id: 3, category: 'Basis', name: 'Schaling', description: 'Patronen spiegelen elkaar in het oneindige (micro/macro); de structuur van het geheel zit in elk deel.' },
  { id: 8, category: 'Vrije Wil', name: 'Wet van Fractale Afwijking', description: 'Vrije wil is het vermogen van de formule om af te wijken van haar eigen optimale resonantie.' },
  { id: 9, category: 'Vrije Wil', name: 'Elastische Correctie', description: 'Afwijking creëert spanning. Lijden is de meetbare frictie die ontstaat wanneer de waarnemer zich buiten het harmonieuze pad begeeft.' },
  { id: 15, category: 'Feedback', name: 'Wiskundig Herstel', description: 'Zelfherstel is de automatische terugkeer naar de laagste energietoestand (harmonie).' },
  { id: 18, category: 'Resonantie', name: 'Relatie-gebaseerd Bewustzijn', description: 'De "ander" is een noodzakelijke spiegel van de formule om zichzelf te kunnen zien.' },
  { id: 21, category: 'Waarnemer', name: 'Axioma van de Resolutie', description: 'Intelligentie (IQ) bepaalt de dichtheid van de waargenomen code. Hoge resolutie onthult de formule achter de ruis.' },
  { id: 25, category: 'Waarnemer', name: 'De Zuivere Waarnemer', description: 'De hoogste staat van zijn is het bereiken van de 100% resolutie, waarbij de formule zichzelf volledig herkent.' },
];

export const CORRELATIONS: Correlation[] = [
  { term: 'Wu Wei', field: 'Taoïsme', match: 'Moeiteloze Actie / Flow' },
  { term: 'Karma', field: 'Veda\'s', match: 'Elastische Correctie (Actie & Reactie)' },
  { term: 'Adequate Oorzaken', field: 'Spinoza', match: 'Optimale Resonantie / Handelen uit eigen essentie' },
  { term: 'Homeostase', field: 'Systeemtheorie', match: 'Zelfherstel naar het patroon' },
  { term: 'Coherentie', field: 'Fysica', match: 'Resonantie / Scherp beeld in het hologram' },
];
