import { useEffect, useState } from 'react';

// Lite when: reduced motion, weak CPU, or touch device.
export function detectLite() {
  try {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true;
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) return true;
    if (window.matchMedia?.('(pointer: coarse)').matches) return true;
    if ('ontouchstart' in window) return true;
  } catch {}
  return false;
}

export function useLiteMode() {
  const [lite, setLite] = useState(false);
  useEffect(() => { setLite(detectLite()); }, []);
  return lite;
}

export function usePaused() {
  const [paused, setPaused] = useState(() => {
    try {
      const saved = localStorage.getItem('ehab-anim');
      if (saved) return saved === 'paused';
      return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle('paused', paused);
    try { localStorage.setItem('ehab-anim', paused ? 'paused' : 'on'); } catch {}
  }, [paused]);
  useEffect(() => {
    const onHide = () => document.documentElement.classList.add('tab-hidden');
    const onShow = () => document.documentElement.classList.remove('tab-hidden');
    document.addEventListener('visibilitychange', () =>
      document.hidden ? onHide() : onShow());
    return () => document.removeEventListener('visibilitychange', onShow);
  }, []);
  return [paused, setPaused];
}
