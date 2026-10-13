import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';

const MSGS = {
  en: [
    'hacking loading.....',
    'hacking 99%',
    '5 EGP deposited to Vodafone Cash wallet 😎',
    'access granted… just kidding'
  ],
  ar: [
    'hacking loading.....',
    'hacking 99%',
    'تم إيداع 5ج في محفظة فودافون كاش 😎',
    'تم الاختراق… بهزار'
  ]
};

const FLOATERS = [
  { c: '0', l: '52%', d: '2.6s', dl: '0s' },
  { c: '1', l: '58%', d: '3.1s', dl: '.4s' },
  { c: '$', l: '64%', d: '2.8s', dl: '.9s' },
  { c: '#', l: '70%', d: '3.4s', dl: '.2s' },
  { c: '>', l: '55%', d: '3s', dl: '1.2s' },
  { c: '_', l: '67%', d: '2.5s', dl: '.7s' },
  { c: '{', l: '61%', d: '3.2s', dl: '1.5s' },
  { c: '%', l: '73%', d: '2.9s', dl: '1s' }
];

export default function HackerScene({ motionOff }) {
  const { lang } = useLang();
  const msgs = MSGS[lang] || MSGS.en;
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setVis(true); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => setVis(e.isIntersecting));
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (motionOff || !vis) return;
    const t = setInterval(() => setI((v) => (v + 1) % msgs.length), 2400);
    return () => clearInterval(t);
  }, [motionOff, vis, msgs.length]);

  const live = !motionOff && vis;
  return (
    <section className="section hacker" aria-label="Ehab hacking (joke)">
      <div className="wrap">
        <p className="mono" style={{ textAlign: 'center' }}>
          {lang === 'ar' ? 'في نفس اللحظة…' : 'meanwhile…'}
        </p>
        <div className="hacker-stage" ref={ref}>
          <div className="bubble mono" key={i}>{msgs[i]}</div>
          <svg viewBox="0 0 400 260" role="img" aria-label="Cartoon of Ehab typing on a laptop">
            {/* desk */}
            <rect x="30" y="206" width="340" height="12" rx="6" fill="#D9C7A7" stroke="#141414" strokeWidth="3" />
            <rect x="52" y="218" width="10" height="26" fill="#D9C7A7" stroke="#141414" strokeWidth="3" />
            <rect x="338" y="218" width="10" height="26" fill="#D9C7A7" stroke="#141414" strokeWidth="3" />
            {/* stool */}
            <rect x="66" y="176" width="58" height="12" rx="6" fill="#BFE7FF" stroke="#141414" strokeWidth="3" />
            <rect x="90" y="188" width="10" height="20" fill="#BFE7FF" stroke="#141414" strokeWidth="3" />
            {/* coffee */}
            <rect x="300" y="182" width="24" height="24" rx="4" fill="#fff" stroke="#141414" strokeWidth="3" />
            <path className="steam" d="M306 176 q3 -6 0 -12" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
            <path className="steam s2" d="M316 176 q-3 -6 0 -12" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
            {/* hood + head */}
            <circle cx="106" cy="96" r="30" fill="#232323" stroke="#141414" strokeWidth="3" />
            <circle cx="106" cy="100" r="20" fill="#7C4A2D" />
            <path d="M89 104 Q106 118 123 104 L123 110 Q106 124 89 110 Z" fill="#161616" />
            <circle cx="98" cy="96" r="5.5" fill="#fff" stroke="#141414" strokeWidth="2" />
            <circle cx="114" cy="96" r="5.5" fill="#fff" stroke="#141414" strokeWidth="2" />
            <circle cx="99" cy="97" r="2.2" fill="#141414" />
            <circle cx="113" cy="97" r="2.2" fill="#141414" />
            <rect x="91" y="89" width="16" height="14" rx="5" fill="none" stroke="#141414" strokeWidth="2.5" />
            <rect x="107" y="89" width="16" height="14" rx="5" fill="none" stroke="#141414" strokeWidth="2.5" />
            {/* torso */}
            <rect x="82" y="122" width="48" height="56" rx="17" fill="#232323" stroke="#141414" strokeWidth="3" />
            {/* legs */}
            <rect x="104" y="168" width="58" height="14" rx="7" fill="#4A6FA5" stroke="#141414" strokeWidth="3" />
            <rect x="150" y="168" width="13" height="38" rx="6" fill="#4A6FA5" stroke="#141414" strokeWidth="3" />
            <ellipse cx="158" cy="208" rx="11" ry="5" fill="#141414" />
            {/* arms to keyboard */}
            <rect x="122" y="130" width="34" height="11" rx="5.5" fill="#232323" stroke="#141414" strokeWidth="3" transform="rotate(18 122 130)" />
            <rect x="122" y="144" width="34" height="11" rx="5.5" fill="#232323" stroke="#141414" strokeWidth="3" transform="rotate(18 122 144)" />
            <circle className="hand hand-l" cx="160" cy="152" r="7" fill="#7C4A2D" stroke="#141414" strokeWidth="3" />
            <circle className="hand hand-r" cx="160" cy="166" r="7" fill="#7C4A2D" stroke="#141414" strokeWidth="3" />
            {/* laptop */}
            <rect x="168" y="196" width="112" height="10" rx="5" fill="#BFE7FF" stroke="#141414" strokeWidth="3" />
            <rect x="176" y="128" width="96" height="68" rx="8" fill="#0E2A1A" stroke="#141414" strokeWidth="3" />
            <rect x="184" y="138" width="52" height="7" rx="3.5" fill="#4ADE80" />
            <rect x="184" y="150" width="70" height="7" rx="3.5" fill="#4ADE80" opacity="0.75" />
            <rect x="184" y="162" width="38" height="7" rx="3.5" fill="#4ADE80" opacity="0.5" />
            <rect className="cursor-blink" x="226" y="162" width="9" height="11" fill="#4ADE80" />
          </svg>
          {live && (
            <div className="codefloat mono" aria-hidden="true">
              {FLOATERS.map((f, k) => (
                <span key={k} style={{ left: f.l, animationDuration: f.d, animationDelay: f.dl }}>{f.c}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
