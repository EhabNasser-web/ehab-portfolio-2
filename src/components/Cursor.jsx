import { useEffect, useRef, useState } from 'react';

// Morphing ball cursor + laser comet trail, driven by ONE rAF.
// Activates on the first real mouse/pen movement (reliable even on
// touchscreen laptops where matchMedia('(pointer: fine)') may lie).
// Ball grows into a ring with a tiny plus inside over clickable elements.
// Native cursor hidden while active. Stops rAF when idle 150ms.
export default function Cursor({ paused, reduced }) {
  const off = paused || reduced;
  const [mouse, setMouse] = useState(false);
  const dotRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (off) return;
    if (window.matchMedia?.('(pointer: fine)')?.matches) setMouse(true);
    const onPoint = (e) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') setMouse(true);
    };
    window.addEventListener('pointermove', onPoint, { passive: true });
    return () => window.removeEventListener('pointermove', onPoint);
  }, [off]);

  useEffect(() => {
    if (off || !mouse) return;
    const dot = dotRef.current;
    const cv = canvasRef.current;
    if (!dot || !cv) return;
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
        return;
      }
      raf = requestAnimationFrame(draw);
    };
    const kick = () => {
      idleAt = performance.now();
      if (!running) { running = true; raf = requestAnimationFrame(draw); }
    };
    const onMove = (e) => {
      const typing = e.target?.closest?.('input,textarea,select');
      dot.style.opacity = typing ? '0' : '1';
      x = e.clientX; y = e.clientY; kick();
    };
    const onOver = (e) => {
      const hot = !!e.target?.closest?.('a,button,.hcard,.shatter');
      document.body.classList.toggle('cursor-hot', hot);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('resize', fit);
      document.body.classList.remove('custom-cursor', 'cursor-hot');
      cancelAnimationFrame(raf);
    };
  }, [off, mouse]);

  if (off || !mouse) return null;
  return (
    <>
      <canvas id="trail" ref={canvasRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true">
        <span className="cursor-core" />
        <span className="cursor-plus" />
      </div>
    </>
  );
}
