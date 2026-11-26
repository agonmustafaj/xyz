import { motion } from 'framer-motion'
import { useState } from 'react'
import { techStack } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Tech() {
  const [active, setActive] = useState(techStack[0]?.id ?? '')

  const activeCategory = techStack.find((c) => c.id === active) ?? techStack[0]

  return (
    <section
      id="tech"
      className="relative scroll-mt-24 overflow-hidden bg-bg-alt py-24 md:py-32"
      aria-labelledby="tech-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-accent uppercase">Capabilities</p>
          <h2
            id="tech-heading"
            className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Tech stack
          </h2>
          <p className="mt-4 max-w-lg text-text/65">
            Placeholder skills — edit categories and items in{' '}
            <code className="text-sm text-accent">src/data/content.ts</code>.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap gap-2 border-b border-accent/20 pb-4" role="tablist" aria-label="Tech categories">
            {techStack.map((cat) => {
              const isActive = cat.id === active
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat.id)}
                  className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                    isActive
                      ? 'bg-text text-bg'
                      : 'text-text/60 hover:bg-primary/60 hover:text-text'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          <ul
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
            role="tabpanel"
            aria-label={activeCategory?.label}
          >
            {activeCategory?.skills.map((skill, i) => (
              <motion.li
                key={`${activeCategory.id}-${skill}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, backgroundColor: 'rgba(248, 221, 232, 0.85)' }}
                className="group relative border border-accent/20 bg-bg/60 px-4 py-5"
              >
                <span
                  className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="text-sm text-text/85 md:text-base">{skill}</span>
              </motion.li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
