export function PlanetSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="planetCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3c9fff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#3c9fff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3c9fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3c9fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3c9fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        <circle cx="150" cy="150" r="90" fill="url(#planetCore)" opacity="0.6" />
        <circle cx="150" cy="150" r="92" fill="none" stroke="url(#rim)" strokeWidth="2" />
        <ellipse cx="150" cy="160" rx="130" ry="38" fill="none" stroke="#3c9fff" strokeOpacity="0.15" />
        <ellipse cx="150" cy="160" rx="110" ry="32" fill="none" stroke="#3c9fff" strokeOpacity="0.1" />
      </g>
    </svg>
  )
}
