// Exactly 12 dots. CSS float only; optional mouse depth via one shared rAF (desktop).
const DOTS = [
  { l: '6%', t: '12%', c: '#F04B4B', s: 10, d: '5s' },
  { l: '14%', t: '64%', c: '#BFE7FF', s: 14, d: '7s' },
  { l: '22%', t: '22%', c: '#E4F85A', s: 9, d: '6s' },
  { l: '31%', t: '70%', c: '#F04B4B', s: 8, d: '8s' },
  { l: '40%', t: '10%', c: '#BFE7FF', s: 12, d: '5.5s' },
  { l: '48%', t: '58%', c: '#E4F85A', s: 10, d: '7.5s' },
  { l: '58%', t: '16%', c: '#F04B4B', s: 9, d: '6.5s' },
  { l: '66%', t: '66%', c: '#BFE7FF', s: 13, d: '5.2s' },
  { l: '74%', t: '28%', c: '#E4F85A', s: 8, d: '7.2s' },
  { l: '82%', t: '60%', c: '#F04B4B', s: 11, d: '6.2s' },
  { l: '90%', t: '18%', c: '#BFE7FF', s: 9, d: '8.2s' },
  { l: '95%', t: '44%', c: '#E4F85A', s: 12, d: '5.8s' }
];

export default function FloatingDots({ lite }) {
  if (lite) return null;
  return (
    <div aria-hidden="true">
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="dot"
          style={{
            left: d.l, top: d.t, background: d.c,
            width: d.s, height: d.s,
            animationDuration: d.d, animationDelay: `${-i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}
