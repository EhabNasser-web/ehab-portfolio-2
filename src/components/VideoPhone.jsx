import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';

export default function VideoPhone({ entry, title, onOpen }) {
  const { t } = useLang();
  const vRef = useRef(null);
  const [missing, setMissing] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = vRef.current;
    if (!v || missing) return;
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting && !v.paused) { v.pause(); setPlaying(false); }
      });
    });
    io.observe(v);
    return () => io.disconnect();
  }, [missing]);

  if (missing) {
    return (
      <div className="phone" role="img" aria-label={title}>
        <span className="notch" aria-hidden="true" />
        <div className="fallback">
          <div>
            <div style={{ fontSize: 34 }}>▶</div>
            <b>{title}</b>
            <p className="mono">{t.misc.videoFallback}</p>
          </div>
        </div>
      </div>
    );
  }

  const toggle = () => {
    const v = vRef.current;
    if (!v) return;
    if (v.paused) { v.play().catch(() => {}); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <div className="phone">
      <span className="notch" aria-hidden="true" />
      <video
        ref={vRef}
        src={entry.src}
        poster={entry.poster}
        muted
        playsInline
        loop
        preload="none"
        aria-label={title}
        onError={() => setMissing(true)}
        onMouseEnter={(e) => {
          if (window.matchMedia?.('(pointer: coarse)').matches) return;
          e.currentTarget.play().catch(() => {});
          setPlaying(true);
        }}
        onMouseLeave={(e) => {
          if (window.matchMedia?.('(pointer: coarse)').matches) return;
          e.currentTarget.pause();
          setPlaying(false);
        }}
        onClick={toggle}
      />
      <button
        className="pill"
        style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)' }}
        onClick={() => onOpen(entry, title)}
        aria-label={`${t.misc.tapToPlay}: ${title}`}
      >
        {playing ? '❚❚' : '▶'} {t.cardLabel.play}
      </button>
    </div>
  );
}

export function Lightbox({ entry, title, onClose }) {
  const { t } = useLang();
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  if (!entry) return null;
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <video src={entry.src} controls playsInline preload="metadata" autoPlay style={{ width: 'min(320px,86vw)' }} />
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <button className="pill" onClick={onClose}>{t.misc.lightboxClose}</button>
        </div>
      </div>
    </div>
  );
}
