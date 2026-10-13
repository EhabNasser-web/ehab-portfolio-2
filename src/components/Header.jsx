import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';

const scribble = (
  <svg className="scribble" viewBox="0 0 120 44" preserveAspectRatio="none" aria-hidden="true">
    <path
      d="M10 24 C 14 10, 45 5, 75 6 C 105 7, 116 14, 113 24 C 110 35, 75 40, 45 39 C 20 38, 6 33, 9 22"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const SECTIONS = [
  { hash: '#work', key: 'work' },
  { hash: '#sidequests', key: 'sidequests' },
  { hash: '#about', key: 'about' }
];

export default function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open ]);
  return (
    <header className="site-header">
      <a href="#main" className="skip">{t.misc.skip}</a>
      <div className="wrap nav">
        <Link to="/" className="logo" aria-label="Ehab Nasser home">
          <span className="logo-mark">E</span>
          <span>EHAB</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {SECTIONS.map((s) => (
            <Link key={s.key} to={`/${s.hash}`} className="nav-cell">{t.nav[s.key]}{scribble}</Link>
          ))}
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'} {open ? t.nav.close : t.nav.menu}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {SECTIONS.map((s) => (
          <Link key={s.key} to={`/${s.hash}`} onClick={() => setOpen(false)}>{t.nav[s.key]}</Link>
        ))}
        <button className="pill" onClick={() => setOpen(false)}>{t.nav.close}</button>
      </div>
    </header>
  );
}
