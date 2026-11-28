import { motion } from 'framer-motion'
import { personality } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Personality() {
  return (
    <section
      id="personality"
      className="relative scroll-mt-24 bg-bg-alt py-24 md:py-32"
      aria-labelledby="personality-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-accent uppercase">
            {personality.eyebrow}
          </p>
          <h2
            id="personality-heading"
            className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em]"
          >
            {personality.heading}
          </h2>
        </SectionReveal>

        <ul className="mt-14 grid gap-px bg-accent/20 sm:grid-cols-2">
          {personality.blocks.map((block, i) => (
            <li key={block.id}>
              <SectionReveal delay={i * 0.06}>
                <motion.div
                  className="group h-full bg-bg-alt px-7 py-10 transition-colors hover:bg-primary/40 md:px-10 md:py-14"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-serif text-4xl text-accent/25 transition-colors group-hover:text-accent/40">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 text-sm tracking-[0.2em] text-text uppercase">
                    {block.label}
                  </h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-text/70">{block.body}</p>
                </motion.div>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
