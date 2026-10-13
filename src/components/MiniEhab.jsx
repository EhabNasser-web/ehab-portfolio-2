// MiniEhab: original minion-style mascot of Ehab (glasses + beard).
// Outfits per section, poses per mood. CSS keyframes only (transform).
const SLEEVE = { tee: '#D9C7A7', vest: '#F59E0B', director: '#232323' };
const SKIN = '#7C4A2D';

function DownArm({ x, hand, sleeve, sw, rev }) {
  return (
    <g className={sw ? `arm-sw${rev ? ' rev' : ''}` : ''}>
      <rect x={x} y="64" width="11" height="30" rx="5.5" fill={sleeve} stroke="#141414" strokeWidth="3" />
      <circle cx={hand} cy="97" r="6" fill={SKIN} stroke="#141414" strokeWidth="3" />
    </g>
  );
}

export default function MiniEhab({ outfit = 'tee', pose = 'idle', walk = false }) {
  const sleeve = SLEEVE[outfit] || SLEEVE.tee;
  return (
    <svg className={`mini pose-${pose}${walk ? ' walk' : ''}`} viewBox="0 0 120 150" aria-hidden="true" focusable="false">
      <ellipse cx="60" cy="143" rx="24" ry="5" fill="#141414" opacity="0.12" />
      <rect className="leg leg-l" x="45" y="110" width="13" height="28" rx="6.5" fill="#2B2B2B" />
      <rect className="leg leg-r" x="62" y="110" width="13" height="28" rx="6.5" fill="#2B2B2B" />
      <ellipse cx="51" cy="140" rx="10" ry="5" fill="#141414" />
      <ellipse cx="69" cy="140" rx="10" ry="5" fill="#141414" />
      <rect x="54" y="48" width="12" height="12" fill={SKIN} />
      <rect x="34" y="56" width="52" height="62" rx="19" fill={outfit === 'vest' ? '#F59E0B' : outfit === 'director' ? '#232323' : '#D9C7A7'} stroke="#141414" strokeWidth="3" />
      {outfit === 'tee' && (
        <g stroke="#141414" strokeWidth="2.5" fill="none">
          <path d="M52 60 q8 7 16 0" />
          <rect x="62" y="78" width="12" height="10" rx="3" />
        </g>
      )}
      {outfit === 'vest' && (
        <g>
          <rect x="37" y="76" width="46" height="8" fill="#FFE680" />
          <rect x="37" y="94" width="46" height="8" fill="#FFE680" />
          <line x1="60" y1="58" x2="60" y2="116" stroke="#141414" strokeWidth="2.5" />
        </g>
      )}
      {outfit === 'director' && (
        <g stroke="#FFF6E8" strokeWidth="2.5" fill="none">
          <path d="M52 58 L60 70 L68 58" />
          <circle cx="60" cy="80" r="2.5" fill="#FFF6E8" stroke="none" />
        </g>
      )}
      <DownArm x={23} hand={28.5} sleeve={sleeve} sw={walk} />
      {pose === 'wave' && (
        <g transform="translate(88,66)">
          <g className="arm-wave">
            <rect x="-5.5" y="-36" width="11" height="32" rx="5.5" fill={sleeve} stroke="#141414" strokeWidth="3" />
            <circle cx="0" cy="-38" r="6" fill={SKIN} stroke="#141414" strokeWidth="3" />
          </g>
        </g>
      )}
      {pose === 'point' && (
        <g transform="translate(86,68)">
          <rect x="0" y="-5.5" width="30" height="11" rx="5.5" fill={sleeve} stroke="#141414" strokeWidth="3" />
          <circle cx="32" cy="0" r="6" fill={SKIN} stroke="#141414" strokeWidth="3" />
        </g>
      )}
      {(pose === 'idle' || pose === 'play') && <DownArm x={86} hand={91.5} sleeve={sleeve} sw={walk} rev />}
      <circle cx="60" cy="34" r="23" fill={SKIN} stroke="#141414" strokeWidth="3" />
      <path d="M38 32 C38 14 48 11 60 11 C72 11 82 14 82 32 C76 22 68 22 60 24 C52 26 44 24 38 32 Z" fill="#161616" />
      <path d="M41 40 Q60 60 79 40 L79 47 Q60 67 41 47 Z" fill="#161616" />
      <path d="M52 50 Q60 56 68 50" stroke="#FFF3E2" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="51" cy="32" r="6" fill="#fff" stroke="#141414" strokeWidth="2" />
      <circle cx="69" cy="32" r="6" fill="#fff" stroke="#141414" strokeWidth="2" />
      <circle cx="52" cy="33" r="2.6" fill="#141414" />
      <circle cx="68" cy="33" r="2.6" fill="#141414" />
      <g fill="none" stroke="#141414" strokeWidth="3">
        <rect x="42" y="24" width="19" height="16" rx="6" />
        <rect x="61" y="24" width="19" height="16" rx="6" />
        <line x1="42" y1="30" x2="38" y2="30" />
        <line x1="80" y1="30" x2="82" y2="30" />
      </g>
      {outfit === 'director' && (
        <g fill="#141414">
          <ellipse cx="60" cy="18" rx="22" ry="9" />
          <rect x="66" y="14" width="26" height="7" rx="3.5" />
        </g>
      )}
      {pose === 'play' && (
        <g>
          <circle cx="60" cy="90" r="13" fill="#E4F85A" stroke="#141414" strokeWidth="3" />
          <path d="M56 82 L68 90 L56 98 Z" fill="#141414" />
        </g>
      )}
    </svg>
  );
}
