import { useEffect, useRef } from 'react';

// Adds .in once when visible. Respects paused/lite via CSS.
export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add('in');
    if (!('IntersectionObserver' in window)) { show(); return; }
    let done = false;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) { done = true; show(); io.disconnect(); }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    // Safety: never leave content invisible if IO never fires (hidden tab, odd browsers).
    const t = setTimeout(() => { if (!done) { show(); io.disconnect(); } }, 1500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return <Tag ref={ref} className={`rv ${className}`}>{children}</Tag>;
}
