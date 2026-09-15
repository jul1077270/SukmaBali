"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES, translations } from "./translations";

const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");
  useEffect(() => { const saved = localStorage.getItem("sukma-language"); if (saved && translations[saved]) setLang(saved); }, []);
  useEffect(() => { localStorage.setItem("sukma-language", lang); document.documentElement.lang = lang; }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: translations[lang], languages: LANGUAGES }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { const ctx = useContext(LanguageContext); if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider"); return ctx; }
