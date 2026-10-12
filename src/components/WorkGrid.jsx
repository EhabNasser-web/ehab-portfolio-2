import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';
import Reveal from './Reveal.jsx';

let pillEl = null;
export function setPill(text, x, y) {
  if (!pillEl) pillEl = document.getElementById('card-pill');
  if (!pillEl) return;
  if (!text) { pillEl.style.opacity = '0'; return; }
  pillEl.textContent = text;
  pillEl.style.opacity = '1';
  pillEl.style.transform = `translate(${x + 14}px,${y - 14}px)`;
}

function Card({ p, labelView, labelPlay }) {
  const ref = useRef(null);
  const label = p.realVideo ? labelPlay : labelView;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.('(pointer: coarse)').matches) return;
    let raf = 0;
    const move = (e) => {
      cancelAnimationFrame(raf);
      const x = e.clientX, y = e.clientY;
      raf = requestAnimationFrame(() => setPill(label, x, y));
    };
    const leave = () => { cancelAnimationFrame(raf); setPill(null); };
    el.addEventListener('mousemove', move, { passive: true });
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, [label]);
  const color = p.statusColor === 'green' ? 's-green' : p.statusColor === 'orange' ? 's-orange' : 's-blue';
  return (
    <Reveal>
      <Link ref={ref} to={`/project/${p.slug}`} className="pcard" aria-label={`${p.title}`}>
        <span className="cover">
          <img className="base" src={p.cover} alt={`${p.title} cover`} width="640" height="400" loading="lazy" onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
          <img className="alt" src={p.coverAlt} alt="" aria-hidden="true" width="640" height="400" loading="lazy" onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
          <span className="tint" aria-hidden="true" />
        </span>
        <span className="row">
          <span className="t">{p.title}{p.demo && <span className="badge-demo">DEMO</span>}</span>
          <span className={`s ${color}`}>{p.status}</span>
        </span>
      </Link>
    </Reveal>
  );
}

export default function WorkGrid({ projects }) {
  const { t } = useLang();
  return (
    <>
      <div id="card-pill" className="card-pill" aria-hidden="true" />
      <div className="grid2">
        {projects.map((p) => (
          <Card key={p.slug} p={p} labelView={t.cardLabel.view} labelPlay={t.cardLabel.play} />
        ))}
      </div>
    </>
  );
}
