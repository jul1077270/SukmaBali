"use client";
import { useLanguage } from "./LanguageContext";
export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage();
  return <div className="language-switcher" aria-label="Language selector">
    {languages.map(({ code, label, flag }) => <button key={code} type="button" className={lang === code ? "active" : ""} onClick={() => setLang(code)} aria-label={label} title={label}>{flag}<span>{code.toUpperCase()}</span></button>)}
  </div>;
}
