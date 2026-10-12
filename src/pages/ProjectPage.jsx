import { Link, useParams } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';

export default function ProjectPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const i = t.projects.findIndex((p) => p.slug === slug);
  const p = t.projects[i];
  if (!p) {
    return (
      <main id="main" className="fade"><div className="wrap section"><p>404 — <Link to="/">{t.projectPage.back}</Link></p></div></main>
    );
  }
  const next = t.projects[(i + 1) % t.projects.length];
  return (
    <main id="main" className="fade">
      <section className="section">
        <div className="wrap frame">
          <p className="mono"><Link to="/">{t.projectPage.back}</Link></p>
          <h2 className="sec-title">{p.title}{p.demo && <span className="badge-demo">{t.misc.demo}</span>}</h2>
          <p style={{ textAlign: 'center' }}>{p.summary}</p>
          <img src={p.cover} alt={`${p.title} cover`} width="960" height="600" loading="lazy"
            style={{ borderRadius: 20, border: '1.5px solid var(--ink)', margin: '18px auto', width: '100%', maxWidth: 860 }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <div className="meta" style={{ justifyContent: 'center' }}>
            <div><b className="mono">{t.projectPage.meta.role}: </b>{p.role}</div>
            <div><b className="mono">{t.projectPage.meta.year}: </b>{p.year}</div>
            <div><b className="mono">{t.projectPage.meta.tools}: </b>{p.tools.join(', ')}</div>
          </div>
          <div className="prose">
            <h3>{t.projectPage.problem}</h3><p>{p.problem}</p>
            <h3>{t.projectPage.built}</h3><p>{p.solution}</p>
            <h3>{t.projectPage.how}</h3>
            <svg viewBox="0 0 600 180" role="img" aria-label="Workflow placeholder" style={{ width: '100%', border: '1.5px solid var(--ink)', borderRadius: 16, background: '#fff' }}>
              <rect x="20" y="60" width="110" height="60" rx="12" fill="#BFE7FF" stroke="#141414" strokeWidth="3" />
              <rect x="180" y="60" width="140" height="60" rx="12" fill="#E4F85A" stroke="#141414" strokeWidth="3" />
              <rect x="370" y="60" width="110" height="60" rx="12" fill="#FFE680" stroke="#141414" strokeWidth="3" />
              <rect x="500" y="60" width="80" height="60" rx="12" fill="#F67CC6" stroke="#141414" strokeWidth="3" />
              <path d="M130 90h50M320 90h50M480 90h20" stroke="#141414" strokeWidth="3" />
            </svg>
            <h3>{t.projectPage.result}</h3><p>{p.result}</p>
            <p style={{ marginTop: 26 }}><Link className="nav-cell" to={`/project/${next.slug}`}>→ {t.projectPage.next}: {next.title}</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
