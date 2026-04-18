'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations } from '@/translations';

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)[Lang];
  hf: string; // headingFont CSS var string
};

const LangContext = createContext<LangContextType>({
  lang: 'ru',
  setLang: () => {},
  t: translations.ru,
  hf: 'var(--font-heading-ru)',
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');
  const t = translations[lang];
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
