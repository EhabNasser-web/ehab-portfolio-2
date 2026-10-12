import { useEffect, useRef } from 'react';

// Coral dot + comet trail on ONE canvas. Stops rAF when idle 150ms.
export default function Cursor({ disabled }) {
  const dotRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    if (disabled) return;
    if (window.matchMedia?.('(pointer: coarse)').matches) return;
    const dot = dotRef.current;
    const cv = canvasRef.current;
    if (!dot || !cv) return;
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
    let raf = 0, idleTimer = 0, running = false;
    const scaleX = () => cv.width / window.innerWidth;
    const scaleY = () => cv.height / window.innerHeight;
    const draw = () => {
      tx += (x - tx) * 0.35;
      ty += (y - ty) * 0.35;
      dot.style.transform = `translate(${tx - 6}px,${ty - 6}px)`;
      pts.push({ x: tx * scaleX(), y: ty * scaleY() });
      if (pts.length > 10) pts.shift();
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.lineCap = 'round';
      for (let i = 1; i < pts.length; i++) {
        ctx.strokeStyle = `rgba(240,75,75,${(i / pts.length) * 0.6})`;
        ctx.lineWidth = (i / pts.length) * 7;
        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
      }
      if (performance.now() - idleTimer > 150) {
        running = false;
        ctx.clearRect(0, 0, cv.width, cv.height);
        return;
      }
      raf = requestAnimationFrame(draw);
    };
    const kick = () => {
      idleTimer = performance.now();
      if (!running) { running = true; raf = requestAnimationFrame(draw); }
    };
    const onMove = (e) => {
      if (e.target?.closest?.('input,textarea,select')) { dot.style.opacity = '0'; }
      else dot.style.opacity = '1';
      x = e.clientX; y = e.clientY; kick();
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', fit);
      cancelAnimationFrame(raf);
    };
  }, [disabled]);
  if (disabled) return null;
  return (
    <>
      <canvas id="trail" ref={canvasRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
