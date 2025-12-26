
export enum View {
  CHAT = 'chat',
  LIBRARY = 'library',
  RESONANCE_CHECK = 'resonance_check',
  ABOUT_CONTACT = 'about_contact',
  MANIFEST = 'manifest',
  FAQ = 'faq',
  ROSETTA_STONE = 'rosetta_stone'
}

export interface Axiom {
  id: number;
  name: string;
  description: string;
  category: 'Het Fundament' | 'Basis' | 'Vrije Wil' | 'Feedback' | 'Resonantie' | 'Waarnemer';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Correlation {
  term: string;
  field: string;
  match: string;
}
