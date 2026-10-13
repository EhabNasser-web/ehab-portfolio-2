import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MiniEhab from './MiniEhab.jsx';

function sectionOf(pathname, hash) {
  if (pathname.startsWith('/project')) return 'work';
  if (pathname.startsWith('/sidequests')) return 'shorts';
  if (pathname.startsWith('/about')) return 'about';
  if (hash === '#work') return 'work';
  if (hash === '#sidequests') return 'shorts';
  if (hash === '#about') return 'about';
  return 'hero';
}

const CONF = {
  hero: { outfit: 'tee', pose: 'wave' },
  work: { outfit: 'vest', pose: 'point' },
  shorts: { outfit: 'director', pose: 'play' },
  about: { outfit: 'tee', pose: 'wave' }
};

function Walker({ outfit }) {
  const ref = useRef(null);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const w = window.innerWidth;
    const rtl = document.documentElement.dir === 'rtl';
    const from = rtl ? w + 140 : -140;
    const to = rtl ? -140 : w + 140;
    const anim = el.animate(
      [{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
      { duration: 3200, easing: 'linear' }
    );
    anim.onfinish = () => setGone(true);
    const t = setTimeout(() => setGone(true), 3700);
    return () => { try { anim.cancel(); } catch {} clearTimeout(t); };
  }, []);
  if (gone) return null;
  return (
    <div className="walker" ref={ref} aria-hidden="true">
      <MiniEhab outfit={outfit} pose="idle" walk />
    </div>
  );
}

export default function Mascot({ motionOff }) {
  const { pathname, hash } = useLocation();
  const [pointing, setPointing] = useState(false);
  const [walkKey, setWalkKey] = useState(0);
  const first = useRef(true);
  const sec = sectionOf(pathname, hash);
  const conf = CONF[sec];

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
        <MiniEhab outfit={conf.outfit} pose={pointing ? 'point' : conf.pose} />
      </div>
      {walkKey > 0 && <Walker key={walkKey} outfit={conf.outfit} />}
    </>
  );
}
