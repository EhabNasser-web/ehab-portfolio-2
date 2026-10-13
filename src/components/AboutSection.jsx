import { useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';
import Reveal from './Reveal.jsx';

export default function AboutSection() {
  const { t } = useLang();
  const [imgOk, setImgOk] = useState(true);
  const p = t.person;

  // Glass-shatter burst on click: cracks + flying shards + flash.
  // transform/opacity only (WAAPI, no libs). Skipped under reduced motion.
  const burst = (e) => {
    const fig = e.currentTarget;
    const layer = fig.querySelector('.shards');
    const pic = fig.querySelector('img, svg.photo-fallback');
    if (!layer) return;
    if (document.documentElement.classList.contains('paused')) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const r = fig.getBoundingClientRect();
    let cx = r.width / 2, cy = r.height / 2;
    if (e.clientX != null && r.width > 0) { cx = e.clientX - r.left; cy = e.clientY - r.top; }
    pic?.animate(
      [{ transform: 'translate(0,0)' }, { transform: 'translate(-5px,3px)' }, { transform: 'translate(4px,-3px)' }, { transform: 'translate(0,0)' }],
      { duration: 220 }
    );
    const flash = document.createElement('div');
    flash.className = 'flash';
    layer.appendChild(flash);
    flash.animate([{ opacity: 0.55 }, { opacity: 0 }], { duration: 180 }).onfinish = () => flash.remove();
    setTimeout(() => flash.remove(), 400);
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'crack-svg');
    svg.setAttribute('viewBox', `0 0 ${Math.round(r.width)} ${Math.round(r.height)}`);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + Math.random() * 0.5;
      const len = 60 + Math.random() * 120;
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', cx); l.setAttribute('y1', cy);
      l.setAttribute('x2', cx + Math.cos(a) * len); l.setAttribute('y2', cy + Math.sin(a) * len);
      l.setAttribute('stroke', '#141414'); l.setAttribute('stroke-width', '2'); l.setAttribute('stroke-linecap', 'round');
      svg.appendChild(l);
    }
    layer.appendChild(svg);
    svg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 650 }).onfinish = () => svg.remove();
    setTimeout(() => svg.remove(), 900);
    const cols = ['rgba(255,255,255,.9)', 'rgba(191,231,255,.9)', 'rgba(228,248,90,.85)', 'rgba(246,124,198,.6)'];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement('div');
      s.className = 'shard';
      const w = 18 + Math.random() * 36;
      s.style.left = cx + 'px';
      s.style.top = cy + 'px';
      s.style.width = w + 'px';
      s.style.height = w + 'px';
      s.style.marginLeft = -w / 2 + 'px';
      s.style.marginTop = -w / 2 + 'px';
      s.style.background = cols[i % 4];
      s.style.clipPath = ['polygon(50% 0,100% 100%,0 100%)', 'polygon(0 0,100% 20%,20% 100%)', 'polygon(20% 0,100% 60%,0 100%)'][i % 3];
      layer.appendChild(s);
      const a = (i / 14) * Math.PI * 2 + Math.random() * 0.6;
      const d = 70 + Math.random() * 110;
      const dx = Math.cos(a) * d, dy = Math.sin(a) * d - 30;
      const rot = Math.random() * 360 - 180;
      s.animate(
        [
          { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
          { transform: `translate(${dx}px,${dy}px) rotate(${rot}deg)`, opacity: 0 }
        ],
        { duration: 550 + Math.random() * 250, easing: 'cubic-bezier(.2,.7,.3,1)' }
      ).onfinish = () => s.remove();
      setTimeout(() => s.remove(), 1000);
    }
  };
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); burst(e); }
  };
  return (
    <>
      <section className="section" id="about" aria-label={t.sections.about}>
        <div className="wrap frame">
          <h2 className="sec-title"><span className="em">👋</span> {t.sections.about} <span className="em">👋</span></h2>
          <div className="grid2">
            <Reveal>
              <figure
                className="photo-card shatter"
                role="button"
                tabIndex={0}
                aria-label={t.misc.shatterHint}
                onClick={burst}
                onKeyDown={onKey}
              >
                <span className="tape t1" aria-hidden="true" />
                <span className="tape t2" aria-hidden="true" />
                <div className="shards" aria-hidden="true" />
                {imgOk ? (
                  <img
                    src="/images/ehab.jpg"
                    alt={t.misc.portraitAlt}
                    width="480" height="600" loading="lazy"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <svg viewBox="0 0 480 560" role="img" aria-label={t.misc.portraitAlt} className="photo-fallback">
                    <rect width="480" height="560" fill="#BFE7FF" />
                    <circle cx="240" cy="220" r="90" fill="#FFE680" stroke="#141414" strokeWidth="5" />
                    <rect x="120" y="330" width="240" height="140" rx="40" fill="#F67CC6" stroke="#141414" strokeWidth="5" />
                    <circle cx="210" cy="215" r="10" fill="#141414" /><circle cx="270" cy="215" r="10" fill="#141414" />
                    <path d="M210 250q30 20 60 0" stroke="#141414" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                )}
                <figcaption className="mono">{p.display} — {p.location} 📍<span className="shatter-hint">{t.misc.shatterHint} 👆</span></figcaption>
              </figure>
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
      <section className="section" aria-label={t.misc.eduTitle}>
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
      <section className="section" aria-label={t.misc.expTitle}>
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
      <section className="section" aria-label={t.misc.contactTitle}>
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
    </>
  );
}
