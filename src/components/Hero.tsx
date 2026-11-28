import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { site } from '../data/content'
import { GlassSphere } from './GlassSphere'

type Props = {
  ready: boolean
}

export function Hero({ ready }: Props) {
  const reduce = useReducedMotion()
  const show = ready && !reduce

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Full-bleed atmospheric plane */}
      <div className="pink-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="grid-faint pointer-events-none absolute inset-0 opacity-40 mask-[linear-gradient(to_bottom,black_40%,transparent_95%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-28 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-24 lg:pb-20">
        <div className="order-2 lg:order-1">
          <motion.p
            className="mb-5 text-[11px] tracking-[0.28em] text-accent uppercase"
            initial={show ? { opacity: 0, y: 16 } : false}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.eyebrow}
          </motion.p>

          <motion.h1
            className="font-serif text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-text"
            initial={show ? { opacity: 0, y: 28 } : false}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}.
          </motion.h1>

          <motion.div
            className="mt-7 max-w-md space-y-1 text-lg leading-snug text-text/75 md:text-xl"
            initial={show ? { opacity: 0, y: 20 } : false}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.manifesto.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            className="mt-9 inline-flex items-center gap-2.5 border border-accent/30 bg-primary/40 px-4 py-2 text-sm text-text/80"
            initial={show ? { opacity: 0, y: 12 } : false}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.status}
          </motion.div>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={show ? { opacity: 0, scale: 0.92 } : false}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassSphere />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.22em] text-text/50 uppercase transition-colors hover:text-text"
        initial={show ? { opacity: 0 } : false}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        aria-label="Scroll to about"
      >
        Scroll
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  )
}
