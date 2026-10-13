// ClayEhab: original handmade clay-doll mascot of Ehab.
// Craft aesthetic (clay skin, yarn hair, visible stitches) drawn from scratch.
// Poses: wave / point / idle / play. CSS keyframes only (transform).
const SKIN = '#7C4A2D';
const SKIN_D = '#5E3720';
const INK = '#141414';

function DownArm({ x, hand, sw, rev }) {
  return (
    <g className={sw ? `arm-sw${rev ? ' rev' : ''}` : ''}>
      <rect x={x} y="78" width="13" height="34" rx="6.5" fill="#D9C7A7" stroke={INK} strokeWidth="3" />
      <circle cx={hand} cy="115" r="7.5" fill={SKIN} stroke={INK} strokeWidth="3" />
    </g>
  );
}

// scattered clay mottling (static dots, no filters)
function Mottle({ pts }) {
  return (
    <g opacity="0.10">
      {pts.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={i % 2 ? SKIN_D : '#FFF3E2'} />
      ))}
    </g>
  );
}

export default function ClayEhab({ pose = 'idle', walk = false }) {
  return (
    <svg className={`mini pose-${pose}${walk ? ' walk' : ''}`} viewBox="0 0 140 170" aria-hidden="true" focusable="false">
      <ellipse cx="70" cy="162" rx="28" ry="6" fill={INK} opacity="0.12" />
      {/* legs: jeans + sneakers */}
      <rect className="leg leg-l" x="53" y="126" width="15" height="26" rx="7" fill="#4A6FA5" stroke={INK} strokeWidth="3" />
      <rect className="leg leg-r" x="72" y="126" width="15" height="26" rx="7" fill="#4A6FA5" stroke={INK} strokeWidth="3" />
      <ellipse cx="60" cy="155" rx="12" ry="6" fill="#FFF6E8" stroke={INK} strokeWidth="3" />
      <ellipse cx="80" cy="155" rx="12" ry="6" fill="#FFF6E8" stroke={INK} strokeWidth="3" />
      {/* neck + tee body */}
      <rect x="62" y="58" width="16" height="14" fill={SKIN} />
      <rect x="38" y="66" width="64" height="66" rx="22" fill="#D9C7A7" stroke={INK} strokeWidth="3" />
      <rect x="43" y="71" width="54" height="56" rx="17" fill="none" stroke={INK} strokeWidth="1.6" strokeDasharray="5 4" opacity="0.55" />
      <path d="M61 70 q9 8 18 0" stroke={INK} strokeWidth="2.5" fill="none" />
      <rect x="76" y="88" width="14" height="12" rx="3" fill="none" stroke={INK} strokeWidth="2.5" />
      <rect x="46" y="100" width="16" height="16" rx="2" fill="#F67CC6" stroke={INK} strokeWidth="2.5" transform="rotate(-8 54 108)" />
      {/* arms */}
      <DownArm x={24} hand={30.5} sw={walk} />
      {pose === 'wave' && (
        <g transform="translate(103,78)">
          <g className="arm-wave">
            <rect x="-6.5" y="-42" width="13" height="38" rx="6.5" fill="#D9C7A7" stroke={INK} strokeWidth="3" />
            <circle cx="0" cy="-44" r="7.5" fill={SKIN} stroke={INK} strokeWidth="3" />
          </g>
        </g>
      )}
      {pose === 'point' && (
        <g transform="translate(101,80)">
          <rect x="0" y="-6.5" width="34" height="13" rx="6.5" fill="#D9C7A7" stroke={INK} strokeWidth="3" />
          <circle cx="36" cy="0" r="7.5" fill={SKIN} stroke={INK} strokeWidth="3" />
        </g>
      )}
      {(pose === 'idle' || pose === 'play') && <DownArm x={103} hand={109.5} sw={walk} rev />}
      {/* head */}
      <circle cx="70" cy="38" r="28" fill={SKIN} stroke={INK} strokeWidth="3" />
      <Mottle pts={[[52, 28, 3], [86, 30, 2.4], [62, 48, 2], [78, 46, 2.6], [46, 44, 2.2]]} />
      {/* yarn hair coils */}
      <g fill="none" stroke="#241407" strokeWidth="4" strokeLinecap="round">
        <path d="M48 14 q-3 -8 5 -9 q8 -1 6 7" />
        <path d="M62 10 q-2 -8 6 -8 q8 0 5 8" />
        <path d="M76 12 q3 -7 9 -4 q6 3 1 9" />
        <path d="M88 20 q6 -4 10 1" />
        <path d="M42 24 q-6 -1 -7 5" />
      </g>
      {/* felt beard with stitched edge */}
      <path d="M47 46 Q70 68 93 46 L93 54 Q70 76 47 54 Z" fill="#1D130C" />
      <path d="M50 48 Q70 64 90 48" fill="none" stroke="#FFF3E2" strokeWidth="1.6" strokeDasharray="3 3" opacity="0.7" />
      <path d="M61 56 Q70 62 79 56" stroke="#FFF3E2" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* big clay eyes + round glasses */}
      <circle cx="59" cy="36" r="8" fill="#fff" stroke={INK} strokeWidth="2" />
      <circle cx="81" cy="36" r="8" fill="#fff" stroke={INK} strokeWidth="2" />
      <circle cx="60" cy="37" r="3.2" fill={INK} />
      <circle cx="80" cy="37" r="3.2" fill={INK} />
      <circle cx="61" cy="36" r="1" fill="#fff" />
      <circle cx="81" cy="36" r="1" fill="#fff" />
      <g fill="none" stroke={INK} strokeWidth="3">
        <rect x="49" y="26" width="21" height="19" rx="8" />
        <rect x="71" y="26" width="21" height="19" rx="8" />
        <line x1="49" y1="33" x2="44" y2="32" />
        <line x1="92" y1="33" x2="96" y2="32" />
      </g>
      {pose === 'play' && (
        <g>
          <circle cx="70" cy="102" r="15" fill="#E4F85A" stroke={INK} strokeWidth="3" />
          <g stroke={INK} strokeWidth="3">
            <line x1="70" y1="83" x2="70" y2="89" />
            <line x1="70" y1="115" x2="70" y2="121" />
            <line x1="51" y1="102" x2="57" y2="102" />
            <line x1="83" y1="102" x2="89" y2="102" />
          </g>
          <path d="M66 94 L77 102 L66 110 Z" fill={INK} />
        </g>
      )}
    </svg>
  );
}
