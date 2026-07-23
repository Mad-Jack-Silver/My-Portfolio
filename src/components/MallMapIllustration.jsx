export default function MallMapIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 420 340" className={className} role="img" aria-label="Illustration of an indoor mall map with a highlighted navigation path from an entrance to a destination shop">
      <defs>
        <linearGradient id="mapPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-amber)" />
          <stop offset="100%" stopColor="var(--color-coral)" />
        </linearGradient>
      </defs>

      {/* shop units */}
      {[
        [20, 20, 90, 60], [130, 20, 90, 60], [240, 20, 80, 60], [340, 20, 60, 60],
        [20, 100, 70, 50], [340, 100, 60, 90],
        [20, 260, 90, 60], [130, 260, 90, 60], [240, 260, 80, 60], [340, 210, 60, 110],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill="var(--color-surface-2)" stroke="var(--color-line)" strokeWidth="1" />
      ))}

      {/* destination shop, highlighted */}
      <rect x="240" y="130" width="80" height="70" rx="6" fill="var(--color-surface-2)" stroke="var(--color-coral)" strokeWidth="1.5" />
      <text x="280" y="170" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="var(--color-coral)">Shop</text>

      {/* the guided path */}
      <path
        id="wayfindingPath"
        d="M 65 210 C 65 250, 100 230, 140 220 C 190 208, 220 190, 260 165"
        fill="none"
        stroke="url(#mapPathGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />

      {/* start marker */}
      <circle cx="65" cy="210" r="7" fill="var(--color-amber)" />
      {/* Shifted x from 65 to 45 to move the label left */}
      <text x="45" y="232" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="var(--color-sage)">You</text>

      {/* destination marker */}
      <circle cx="260" cy="165" r="6" fill="var(--color-coral)" />

      {/* moving direction arrow, follows the path continuously */}
      <g>
        <polygon points="-5,-4 5,0 -5,4" fill="var(--color-amber)">
          <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto" path="M 65 210 C 65 250, 100 230, 140 220 C 190 208, 220 190, 260 165" />
        </polygon>
      </g>
    </svg>
  );
}