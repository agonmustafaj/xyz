import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/content'

type Props = {
  visible: boolean
}

export function Loader({ visible }: Props) {
  const reduce = useReducedMotion()

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reduce ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="absolute h-40 w-40 rounded-full bg-primary/70 blur-3xl"
              animate={
                reduce
                  ? undefined
                  : { scale: [0.85, 1.15, 0.85], opacity: [0.45, 0.8, 0.45] }
              }
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <motion.span
              className="font-serif relative text-5xl tracking-[0.08em] text-text md:text-6xl"
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.08em' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.initials}
            </motion.span>
            <motion.div
              className="h-px w-16 origin-left bg-accent/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
