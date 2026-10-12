import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';

export default function Footer() {
  const { t } = useLang();
  const p = t.person;
  return (
    <footer>
      <div className="wrap">
        <p className="mono">{t.footer.cta}</p>
        <div className="ehab" aria-hidden="true">EHAB</div>
        <svg width="120" height="70" viewBox="0 0 120 70" aria-hidden="true" style={{ margin: '8px auto' }}>
          <rect x="8" y="14" width="104" height="48" rx="8" fill="#FFE680" stroke="#141414" strokeWidth="2" />
          <rect x="8" y="14" width="104" height="16" rx="8" fill="#BFE7FF" stroke="#141414" strokeWidth="2" />
          <circle cx="20" cy="22" r="3" fill="#F04B4B" />
        </svg>
        <p>
          <a className="flink" href={`mailto:${p.email}`}>Email</a>
          <a className="flink" href={p.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="flink" href={p.links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </p>
        <p className="mono" style={{ color: 'var(--muted)' }}>{t.footer.note}</p>
        <p className="mono"><Link to="/about">{t.nav.about}</Link> · <Link to="/sidequests">{t.nav.sidequests}</Link></p>
      </div>
    </footer>
  );
}
