import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';
import ShortsSection from '../components/ShortsSection.jsx';
import Reveal from '../components/Reveal.jsx';

const EXPERIMENTS = [
  { slug: 'webhook-playground', bg: 'linear-gradient(135deg,#fff6c9,#FFE680)' },
  { slug: 'prompt-recipes', bg: 'linear-gradient(135deg,#dcf2ff,#BFE7FF)' },
  { slug: 'sheet-dashboards', bg: 'linear-gradient(135deg,#ffd7ec,#F67CC6)' }
];

export default function Sidequests() {
  const { t, lang } = useLang();
  const names = lang === 'ar'
    ? ['ملعب Webhook', 'وصفات برومبتات', 'داشبورد شيتات']
    : ['Webhook playground', 'Prompt recipes', 'Sheet dashboards'];
  return (
    <main id="main" className="fade">
      <section className="section">
        <div className="wrap frame">
          <h2 className="sec-title"><span className="em">🧪</span> {t.misc.experimentsTitle} <span className="em">🧪</span></h2>
          <div className="grid2">
            {EXPERIMENTS.map((e, i) => (
              <Reveal key={e.slug}>
                <article className="pcard" style={{ background: e.bg, padding: 20 }}>
                  <p className="mono">{names[i]}<span className="badge-demo">{t.misc.demo}</span></p>
                  <p style={{ fontSize: '.9rem' }}>{lang === 'ar' ? 'تجربة صغيرة قريبًا.' : 'A small experiment, coming soon.'}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-label={t.misc.shortsTitle}>
        <div className="wrap">
          <ShortsSection />
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p><Link className="nav-cell" to="/">← {t.projectPage.back}</Link></p>
        </div>
      </section>
    </main>
  );
}
