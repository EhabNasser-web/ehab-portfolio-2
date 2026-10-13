import { useEffect, useRef } from 'react';

// Morphing ball cursor + laser comet trail + crosshair, all driven by ONE rAF.
// Ball grows into a ring over interactive elements; native cursor hidden.
// Crosshair = 2 full-viewport 1px lines moved via transform only.
// Stops rAF when idle 150ms. Fully off when disabled (paused/reduced-motion/no mouse).
export default function Cursor({ disabled }) {
  const dotRef = useRef(null);
  const canvasRef = useRef(null);
  const crossRef = useRef(null);
  const hxRef = useRef(null);
  const hyRef = useRef(null);
  useEffect(() => {
    if (disabled) return;
    if (!window.matchMedia?.('(pointer: fine)')?.matches) return;
    const dot = dotRef.current;
    const cv = canvasRef.current;
    const cross = crossRef.current;
    const hx = hxRef.current;
    const hy = hyRef.current;
    if (!dot || !cv || !cross || !hx || !hy) return;
    document.body.classList.add('custom-cursor');
    const ctx = cv.getContext('2d');
    const fit = () => {
      cv.width = Math.min(window.innerWidth, 800);
      cv.height = Math.min(window.innerHeight, 600);
      cv.style.width = window.innerWidth + 'px';
      cv.style.height = window.innerHeight + 'px';
    };
    fit();
    window.addEventListener('resize', fit);
    let x = -100, y = -100, tx = -100, ty = -100;
    let pts = [];
    let raf = 0, idleAt = 0, running = false;
    const sx = () => cv.width / window.innerWidth;
    const sy = () => cv.height / window.innerHeight;
    const draw = () => {
      tx += (x - tx) * 0.4;
      ty += (y - ty) * 0.4;
      const px = tx.toFixed(1), py = ty.toFixed(1);
      dot.style.transform = `translate(${px}px,${py}px)`;
      hx.style.transform = `translateY(${py}px)`;
      hy.style.transform = `translateX(${px}px)`;
      pts.push({ x: tx * sx(), y: ty * sy() });
      if (pts.length > 14) pts.shift();
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.lineCap = 'round';
      const n = pts.length;
      for (let i = 1; i < n; i++) {
        const k = i / n;
        ctx.strokeStyle = `rgba(240,75,75,${(k * k * 0.75).toFixed(3)})`;
        ctx.lineWidth = Math.max(0.5, k * 4);
        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
      }
      if (performance.now() - idleAt > 150) {
        running = false;
        ctx.clearRect(0, 0, cv.width, cv.height);
        cross.style.opacity = '0';
        return;
      }
      raf = requestAnimationFrame(draw);
    };
    const kick = () => {
      idleAt = performance.now();
      cross.style.opacity = '1';
      if (!running) { running = true; raf = requestAnimationFrame(draw); }
    };
    const onMove = (e) => {
      const typing = e.target?.closest?.('input,textarea,select');
      dot.style.opacity = typing ? '0' : '1';
      cross.style.opacity = typing ? '0' : '1';
      x = e.clientX; y = e.clientY; kick();
    };
    const onOver = (e) => {
      const hot = !!e.target?.closest?.('a,button,.hcard');
      document.body.classList.toggle('cursor-hot', hot);
    };
    const onLeave = () => { cross.style.opacity = '0'; };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', fit);
      document.body.classList.remove('custom-cursor', 'cursor-hot');
      cancelAnimationFrame(raf);
    };
  }, [disabled]);
  if (disabled) return null;
  return (
    <>
      <canvas id="trail" ref={canvasRef} aria-hidden="true" />
      <div className="cross" ref={crossRef} aria-hidden="true">
        <span className="ch-x" ref={hxRef} />
        <span className="ch-y" ref={hyRef} />
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true">
        <span className="cursor-core" />
      </div>
    </>
  );
}
