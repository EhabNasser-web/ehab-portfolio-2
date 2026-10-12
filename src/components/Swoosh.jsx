import { useEffect, useRef } from 'react';

// One static pink swoosh + flat box illustration. Cheap parallax via rAF, off in Lite.
export default function Swoosh({ lite }) {
  const ref = useRef(null);
  useEffect(() => {
    if (lite) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0, ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5
      el.style.transform = `translateY(${(-p * 40).toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (ticking || document.hidden) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [lite]);
  return (
    <div className="swoosh" aria-hidden="true">
      <svg ref={ref} viewBox="0 0 1200 150" preserveAspectRatio="none">
        <path d="M-20 95 C 250 20, 450 140, 700 70 S 1000 30, 1220 90 L1220 130 C 1000 70, 800 120, 600 105 S 200 140, -20 120 Z" fill="#F67CC6" />
        <g transform="translate(560,18)">
          <rect x="0" y="18" width="86" height="60" rx="8" fill="#FFE680" stroke="#141414" strokeWidth="4" />
          <path d="M0 34 L43 8 L86 34 Z" fill="#BFE7FF" stroke="#141414" strokeWidth="4" />
          <rect x="34" y="44" width="18" height="22" fill="#F04B4B" stroke="#141414" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}
