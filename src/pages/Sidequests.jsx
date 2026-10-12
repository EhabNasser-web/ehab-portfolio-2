import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';
import { VIDEOS } from '../data/content.js';
import VideoPhone, { Lightbox } from '../components/VideoPhone.jsx';
import Reveal from '../components/Reveal.jsx';

const EXPERIMENTS = [
  { slug: 'webhook-playground', bg: 'linear-gradient(135deg,#fff6c9,#FFE680)' },
  { slug: 'prompt-recipes', bg: 'linear-gradient(135deg,#dcf2ff,#BFE7FF)' },
  { slug: 'sheet-dashboards', bg: 'linear-gradient(135deg,#ffd7ec,#F67CC6)' }
];

export default function Sidequests() {
  const { t, lang } = useLang();
  const [lb, setLb] = useState(null);
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
          <h2 className="sec-title"><span className="em">🎬</span> {t.misc.shortsTitle} <span className="em">🎬</span></h2>
          <div className="phones">
            {[0, 1].map((i) => {
              const key = i === 0 ? 'short1' : 'short2';
              const proj = t.projects.find((p) => p.realVideo === key);
              return (
                <Reveal key={key}>
                  <VideoPhone
                    entry={VIDEOS[key]}
                    title={proj ? proj.title : `Short #${i + 1}`}
                    onOpen={(entry, title) => setLb({ entry, title })}
                  />
                  <p className="mono" style={{ textAlign: 'center', marginTop: 8 }}>
                    <Link to={`/project/${proj ? proj.slug : 'motion-short-1'}`}>{proj ? proj.title : ''}</Link>
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {lb && <Lightbox entry={lb.entry} title={lb.title} onClose={() => setLb(null)} />}
    </main>
  );
}
