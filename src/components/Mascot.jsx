import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ClayEhab from './ClayEhab.jsx';

function sectionOf(pathname, hash) {
  if (pathname.startsWith('/project')) return 'work';
  if (pathname.startsWith('/sidequests')) return 'shorts';
  if (pathname.startsWith('/about')) return 'about';
  if (hash === '#work') return 'work';
  if (hash === '#sidequests') return 'shorts';
  if (hash === '#about') return 'about';
  return 'hero';
}

const POSE = { hero: 'wave', work: 'point', shorts: 'play', about: 'wave' };

function Walker() {
  const ref = useRef(null);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const w = window.innerWidth;
    const rtl = document.documentElement.dir === 'rtl';
    const from = rtl ? w + 160 : -160;
    const to = rtl ? -160 : w + 160;
    const anim = el.animate(
      [{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
      { duration: 3400, easing: 'linear' }
    );
    anim.onfinish = () => setGone(true);
    const t = setTimeout(() => setGone(true), 3900);
    return () => { try { anim.cancel(); } catch {} clearTimeout(t); };
  }, []);
  if (gone) return null;
  return (
    <div className="walker" ref={ref} aria-hidden="true">
      <ClayEhab pose="idle" walk />
    </div>
  );
}

export default function Mascot({ motionOff }) {
  const { pathname, hash } = useLocation();
  const [pointing, setPointing] = useState(false);
  const [walkKey, setWalkKey] = useState(0);
  const first = useRef(true);
  const sec = sectionOf(pathname, hash);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setWalkKey((k) => k + 1);
  }, [pathname, hash]);

  useEffect(() => {
    if (motionOff) return;
    const onOver = (e) => setPointing(!!e.target?.closest?.('.pcard'));
    document.addEventListener('mouseover', onOver, { passive: true });
    return () => document.removeEventListener('mouseover', onOver);
  }, [motionOff]);

  if (motionOff) return null;
  return (
    <>
      <div className="companion" key={sec} aria-hidden="true">
        <ClayEhab pose={pointing ? 'point' : POSE[sec]} />
      </div>
      {walkKey > 0 && <Walker key={walkKey} />}
    </>
  );
}
