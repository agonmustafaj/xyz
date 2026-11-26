import { motion } from 'framer-motion'
import { journey } from '../data/content'
import { SectionReveal } from './SectionReveal'

const kindLabel: Record<(typeof journey)[number]['kind'], string> = {
  education: 'Education',
  milestone: 'Milestone',
  certification: 'Certification',
  learning: 'Learning',
}

export function Journey() {
  return (
    <section
      id="journey"
      className="relative scroll-mt-24 bg-bg py-24 md:py-32"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-accent uppercase">Path</p>
          <h2
            id="journey-heading"
            className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Education & journey
          </h2>
          <p className="mt-4 max-w-lg text-text/65">
            Timeline placeholders — fill in real years and details when ready.
          </p>
        </SectionReveal>

        <div className="relative mt-16">
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-accent/25 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12 md:space-y-16">
            {journey.map((item, index) => {
              const left = index % 2 === 0
              return (
                <li key={item.id} className="relative">
                  <SectionReveal>
                    <div className="grid md:grid-cols-2 md:gap-12">
                      <div
                        className={`pl-10 md:pl-0 ${
                          left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                        }`}
                      >
                        <p className="text-[11px] tracking-[0.2em] text-accent uppercase">
                          {kindLabel[item.kind]} · {item.year}
                        </p>
                        <h3 className="font-serif mt-2 text-2xl tracking-[-0.02em] md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-text/65">{item.detail}</p>
                      </div>
                    </div>

                    <motion.span
                      className="absolute top-2 left-0 h-3.5 w-3.5 rounded-full border border-accent bg-primary md:left-1/2 md:-translate-x-1/2"
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      aria-hidden="true"
                    />
                  </SectionReveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
