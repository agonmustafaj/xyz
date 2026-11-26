import { ArrowUpRight, Mail } from 'lucide-react'
import { contact } from '../data/content'
import { GitHubIcon, LinkedInIcon } from './icons'
import { SectionReveal } from './SectionReveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-bg py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,#F8DDE8_0%,transparent_65%)] opacity-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-accent uppercase">
            {contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="font-serif max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.05] tracking-[-0.02em] text-balance"
          >
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-md text-lg text-text/65">{contact.body}</p>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 border border-text bg-text px-7 py-3.5 text-sm tracking-[0.12em] text-bg uppercase transition-colors hover:border-accent hover:bg-accent"
            >
              {contact.cta}
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <ul className="flex flex-wrap gap-6">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text/70 transition-colors hover:text-text"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-text/70 transition-colors hover:text-text"
                  aria-label="LinkedIn (placeholder)"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  className="inline-flex items-center gap-2 text-sm text-text/70 transition-colors hover:text-text"
                  aria-label="GitHub (placeholder)"
                >
                  <GitHubIcon size={16} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
