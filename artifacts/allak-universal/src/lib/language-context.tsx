import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "ar";

interface LanguageContextValue {
  lang: Language;
  dir: "ltr" | "rtl";
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "allak-universal-lang";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    toggleLanguage: () => setLang((prev) => (prev === "en" ? "ar" : "en")),
    setLanguage: (next) => setLang(next),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
