import { about } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-bg-alt py-24 md:py-32" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <SectionReveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-accent uppercase">{about.eyebrow}</p>
          <h2
            id="about-heading"
            className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-balance"
          >
            {about.heading}
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-text/75 md:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12} className="flex flex-col justify-end">
          <div className="border-t border-accent/25 pt-8">
            <p className="mb-5 text-[11px] tracking-[0.22em] text-text/45 uppercase">
              {about.asideLabel}
            </p>
            <ul className="space-y-4">
              {about.asideItems.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-accent/15 pb-4 last:border-0"
                >
                  <span className="font-serif text-sm text-accent/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base text-text/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
