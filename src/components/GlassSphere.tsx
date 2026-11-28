import { motion, useReducedMotion } from 'framer-motion'

/**
 * Editorial glass orb — clean refraction, brand pink only, no muddy halo rings.
 */
export function GlassSphere() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px] lg:max-w-[440px]">
      {/* Single soft atmosphere — not concentric rings */}
      <div
        className="pointer-events-none absolute top-[18%] left-[12%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,#F8DDE8_0%,transparent_70%)] opacity-80"
        aria-hidden="true"
      />

      <motion.div
        className="relative h-full w-full"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          role="img"
          aria-label="Abstract pink glass orb"
        >
          <defs>
            <radialGradient id="orbCore" cx="36%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
              <stop offset="22%" stopColor="#FFF9FB" stopOpacity="0.88" />
              <stop offset="48%" stopColor="#F8DDE8" stopOpacity="0.78" />
              <stop offset="78%" stopColor="#E9A9C5" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#C58AA7" stopOpacity="0.8" />
            </radialGradient>

            <radialGradient id="orbSheen" cx="34%" cy="28%" r="42%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="orbRim" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#E9A9C5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#C58AA7" stopOpacity="0.55" />
            </linearGradient>

            <radialGradient id="orbShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C58AA7" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#C58AA7" stopOpacity="0" />
            </radialGradient>

            <filter id="orbSoft" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
          </defs>

          {/* Soft contact shadow */}
          <ellipse cx="200" cy="318" rx="88" ry="14" fill="url(#orbShadow)" />

          {/* Main glass orb */}
          <circle
            cx="200"
            cy="188"
            r="118"
            fill="url(#orbCore)"
            stroke="url(#orbRim)"
            strokeWidth="1.25"
          />

          {/* Inner glass edge */}
          <circle
            cx="200"
            cy="188"
            r="102"
            fill="none"
            stroke="#FFF9FB"
            strokeOpacity="0.22"
            strokeWidth="0.75"
          />

          {/* Top-left sheen */}
          <ellipse cx="168" cy="148" rx="48" ry="28" fill="url(#orbSheen)" />

          {/* Crisp specular — one only */}
          <circle cx="148" cy="128" r="7" fill="#FFFFFF" fillOpacity="0.9" />

          {/* Quiet refraction curves */}
          <path
            d="M110 200 C145 155, 250 145, 290 185"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          <path
            d="M125 240 C165 268, 240 262, 275 220"
            fill="none"
            stroke="#C58AA7"
            strokeOpacity="0.28"
            strokeWidth="1"
          />

          {/* Tiny crystal facet — sharp, not blurry */}
          <g opacity="0.55">
            <path
              d="M248 155 L268 178 L248 198 L232 175 Z"
              fill="#FFF9FB"
              fillOpacity="0.35"
              stroke="#E9A9C5"
              strokeOpacity="0.45"
              strokeWidth="0.75"
            />
          </g>

          {/* Subtle rotating accent ring */}
          <motion.circle
            cx="200"
            cy="188"
            r="128"
            fill="none"
            stroke="#E9A9C5"
            strokeOpacity="0.28"
            strokeWidth="0.75"
            strokeDasharray="4 10"
            animate={reduce ? undefined : { rotate: 360 }}
            style={{ transformOrigin: '200px 188px' }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
