import { createContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import en from '../translations/en';
import mr from '../translations/mr';
import type { Translation } from '../translations/types';

export type Locale = 'en' | 'mr';

const translations: Record<string, Translation> = { en, mr } as const;

interface LanguageContextValue {
  locale: Locale;
  setLanguage: (locale: Locale) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export { LanguageContext };

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const storedLocale = window.localStorage.getItem('heritage-locale') as Locale | null;
  if (storedLocale === 'en' || storedLocale === 'mr') {
    return storedLocale;
  }

  const browserLocale = window.navigator.language.toLowerCase();
  return browserLocale.startsWith('mr') ? 'mr' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('heritage-locale', locale);
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLanguage: setLocale,
    t: translations[locale],
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

