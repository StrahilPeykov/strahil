export function NoiseOverlay() {
  return (
    <div className="noise-overlay">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>
    </div>
  )
}

