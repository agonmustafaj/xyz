import { motion, useReducedMotion } from 'framer-motion'

export function GlassSphere() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-none">
      {/* Soft atmospheric glow behind the sphere */}
      <div
        className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,#F8DDE8_0%,#E9A9C566_40%,transparent_68%)]"
        aria-hidden="true"
      />

      <motion.div
        className="relative h-full w-full"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full drop-shadow-[0_30px_60px_rgba(197,138,167,0.28)]"
          role="img"
          aria-label="Abstract pink glass sphere"
        >
          <defs>
            <radialGradient id="sphereBody" cx="38%" cy="32%" r="62%">
              <stop offset="0%" stopColor="#FFF9FB" stopOpacity="0.95" />
              <stop offset="28%" stopColor="#F8DDE8" stopOpacity="0.9" />
              <stop offset="62%" stopColor="#E9A9C5" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#C58AA7" stopOpacity="0.85" />
            </radialGradient>
            <radialGradient id="sphereHighlight" cx="32%" cy="28%" r="35%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sphereRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9FB" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#E9A9C5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C58AA7" stopOpacity="0.55" />
            </linearGradient>
            <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>

          {/* Organic crystal facets behind */}
          <g opacity="0.35" filter="url(#softBlur)">
            <ellipse cx="210" cy="190" rx="145" ry="155" fill="#E9A9C5" />
            <ellipse cx="160" cy="220" rx="90" ry="110" fill="#C58AA7" />
          </g>

          {/* Main glass sphere */}
          <circle cx="200" cy="200" r="132" fill="url(#sphereBody)" stroke="url(#sphereRim)" strokeWidth="1.5" />

          {/* Inner refraction rings */}
          <circle
            cx="200"
            cy="200"
            r="108"
            fill="none"
            stroke="#FFF9FB"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <ellipse
            cx="175"
            cy="155"
            rx="55"
            ry="32"
            fill="url(#sphereHighlight)"
          />

          {/* Specular spark */}
          <circle cx="145" cy="128" r="10" fill="#FFFFFF" fillOpacity="0.85" />
          <circle cx="250" cy="255" r="4" fill="#FFF9FB" fillOpacity="0.45" />

          {/* Subtle facet lines */}
          <path
            d="M95 210 C140 160, 260 150, 305 195"
            fill="none"
            stroke="#FFF9FB"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
          <path
            d="M120 265 C170 300, 250 295, 290 240"
            fill="none"
            stroke="#C58AA7"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>
      </motion.div>
    </div>
  )
}
