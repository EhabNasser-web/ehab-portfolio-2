import { useEffect, useRef } from 'react';
import { useLang } from '../i18n/LangContext.jsx';
import FloatingDots from './FloatingDots.jsx';

function Doodle({ kind }) {
  if (kind === 0) return (
    <svg viewBox="0 0 200 96" role="img" aria-label="Automation nodes doodle">
      <rect x="14" y="30" width="52" height="36" rx="10" fill="#fff" stroke="#141414" strokeWidth="3" />
      <rect x="134" y="30" width="52" height="36" rx="10" fill="#fff" stroke="#141414" strokeWidth="3" />
      <circle cx="100" cy="48" r="18" fill="#F04B4B" stroke="#141414" strokeWidth="3" />
      <path d="M66 48h16M118 48h16" stroke="#141414" strokeWidth="3" />
      <circle cx="30" cy="42" r="4" fill="#141414" /><circle cx="150" cy="42" r="4" fill="#141414" />
    </svg>
  );
  if (kind === 1) return (
    <svg viewBox="0 0 200 96" role="img" aria-label="AI agent robot doodle">
      <rect x="70" y="18" width="60" height="52" rx="14" fill="#fff" stroke="#141414" strokeWidth="3" />
      <circle cx="88" cy="42" r="5" fill="#141414" /><circle cx="112" cy="42" r="5" fill="#141414" />
      <path d="M88 58q12 8 24 0" fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 18V8M78 30L64 22M122 30l14-8" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="8" r="4" fill="#E4F85A" stroke="#141414" strokeWidth="2" />
    </svg>
  );
  return (
    <svg viewBox="0 0 200 96" role="img" aria-label="Play button doodle">
      <rect x="40" y="14" width="120" height="68" rx="16" fill="#fff" stroke="#141414" strokeWidth="3" />
      <circle cx="100" cy="48" r="18" fill="#E4F85A" stroke="#141414" strokeWidth="3" />
      <path d="M94 38l16 10-16 10z" fill="#141414" />
      <path d="M40 78l-12 8M160 78l12 8" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero({ lite }) {
  const { t } = useLang();
  const uRef = useRef(null);
  useEffect(() => {
    const el = uRef.current;
    if (!el || lite) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { el.classList.add('draw'); io.disconnect(); } });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [lite]);
  return (
    <section className="hero" aria-label="Intro">
      <FloatingDots lite={lite} />
      <div className="wrap">
        <h1>
          {t.hero.line1}
          <br />
          {t.hero.line2a} <span className="marker lime">{t.hero.highlight1}</span> {t.hero.line2b} <span className="marker sky">{t.hero.highlight2}</span>
          <br />
          <span style={{ fontSize: '0.55em', fontWeight: 500 }}>{t.hero.line3}</span>
        </h1>
        <svg ref={uRef} className="scribble-u" viewBox="0 0 420 24" aria-hidden="true">
          <path d="M8 14 C 90 4, 200 22, 300 10 S 390 12, 412 8" />
        </svg>
        <div className="hero-cards">
          {t.hero.cards.map((c, i) => (
            <div className="hcard" key={c}>
              <Doodle kind={i} />
              <b>{c}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
