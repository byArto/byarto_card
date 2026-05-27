'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations } from '@/translations';

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)[Lang];
  hf: string; // headingFont CSS var string
};

// Unbounded for both languages — user chose brand consistency over per-lang fonts.
// The CSS var is still called --font-heading-ru for historical reasons.
const HEADING_FONT = 'var(--font-heading-ru)';

const LangContext = createContext<LangContextType>({
  lang: 'ru',
  setLang: () => {},
  t: translations.ru,
  hf: HEADING_FONT,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t, hf: HEADING_FONT }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
