'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations } from '@/translations';

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
  hf: string; // headingFont CSS var string
};

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  hf: 'var(--font-heading)',
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang] as typeof translations.en;
  const hf = lang === 'ru' ? 'var(--font-heading-ru)' : 'var(--font-heading)';
  return (
    <LangContext.Provider value={{ lang, setLang, t, hf }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
