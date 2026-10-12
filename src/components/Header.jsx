import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';

const scribble = (
  <svg className="scribble" viewBox="0 0 120 40" aria-hidden="true">
    <path d="M8 22 C 25 6, 60 2, 112 12 C 118 20, 100 34, 40 36 C 18 37, 4 32, 10 18" />
  </svg>
);

export default function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
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
          <NavLink to="/" className="nav-cell">{t.nav.work}{scribble}</NavLink>
          <NavLink to="/sidequests" className="nav-cell">{t.nav.sidequests}{scribble}</NavLink>
          <NavLink to="/about" className="nav-cell">{t.nav.about}{scribble}</NavLink>
        </nav>
        <button ref={btnRef} className="menu-btn" aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'} {open ? t.nav.close : t.nav.menu}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {[
          { to: '/', label: t.nav.work },
          { to: '/sidequests', label: t.nav.sidequests },
          { to: '/about', label: t.nav.about }
        ].map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <button className="pill" onClick={() => setOpen(false)}>{t.nav.close}</button>
      </div>
    </header>
  );
}
