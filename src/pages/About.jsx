import { useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  const { t } = useLang();
  const [imgOk, setImgOk] = useState(true);
  const p = t.person;
  return (
    <main id="main" className="fade">
      <section className="section">
        <div className="wrap frame">
          <h2 className="sec-title"><span className="em">👋</span> {t.sections.about} <span className="em">👋</span></h2>
          <div className="grid2">
            <Reveal>
              {imgOk ? (
                <img
                  src="/images/ehab.jpg"
                  alt={t.misc.portraitAlt}
                  width="480" height="560" loading="lazy"
                  style={{ borderRadius: 20, border: '1.5px solid var(--ink)', width: '100%' }}
                  onError={() => setImgOk(false)}
                />
              ) : (
                <svg viewBox="0 0 480 560" role="img" aria-label={t.misc.portraitAlt} style={{ width: '100%', borderRadius: 20, border: '1.5px solid var(--ink)' }}>
                  <rect width="480" height="560" fill="#BFE7FF" />
                  <circle cx="240" cy="220" r="90" fill="#FFE680" stroke="#141414" strokeWidth="5" />
                  <rect x="120" y="330" width="240" height="140" rx="40" fill="#F67CC6" stroke="#141414" strokeWidth="5" />
                  <circle cx="210" cy="215" r="10" fill="#141414" /><circle cx="270" cy="215" r="10" fill="#141414" />
                  <path d="M210 250q30 20 60 0" stroke="#141414" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </Reveal>
            <div className="prose">
              <Reveal><p>{p.bio}</p></Reveal>
              <Reveal><p className="mono">{p.location}</p></Reveal>
              <Reveal>
                <h3>{t.misc.skillsTitle}</h3>
                {t.skills.map((g) => (
                  <div key={g.group} style={{ marginBottom: 12 }}>
                    <p className="mono">{g.group}</p>
                    <div className="chips">{g.items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="sec-title"><span className="em">📚</span> {t.misc.eduTitle} <span className="em">📚</span></h2>
          <Reveal>
            <div className="prose">
              <p><b>{t.education.school}</b><br />{t.education.dept}</p>
              <p>{t.education.now}</p>
              <div className="chips">{t.education.courses.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="sec-title"><span className="em">💼</span> {t.misc.expTitle} <span className="em">💼</span></h2>
          <div className="tl">
            {t.experience.map((e, i) => (
              <Reveal key={i}>
                <article>
                  <b>{e.title}</b>
                  <p style={{ margin: '4px 0 0', fontSize: '.9rem' }}>{e.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="sec-title"><span className="em">✉️</span> {t.misc.contactTitle} <span className="em">✉️</span></h2>
          <p>
            <a className="nav-cell" href={`mailto:${p.email}`}>{p.email}</a>
          </p>
          <p>
            <a className="flink" href={p.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="flink" href={p.links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
      </section>
    </main>
  );
}
