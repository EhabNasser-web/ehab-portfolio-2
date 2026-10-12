import { createContext, useContext, useEffect, useState } from 'react';
import { content } from '../data/content.js';

const LangCtx = createContext({ lang: 'en', t: content.en, setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('ehab-lang') || 'en'; } catch { return 'en'; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('ehab-lang', l); } catch {}
  };
  useEffect(() => {
    const c = content[lang] || content.en;
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = c.dir;
    document.title = lang === 'ar'
      ? 'إيهاب ناصر — مهندس أتمتة ووكلاء ذكاء اصطناعي'
      : 'Ehab Nasser — Junior AI Automation & Agentic Engineer';
  }, [lang]);
  return <LangCtx.Provider value={{ lang, t: content[lang] || content.en, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
