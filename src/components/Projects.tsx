import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects, type Project } from '../data/content'
import { GitHubIcon } from './icons'
import { SectionReveal } from './SectionReveal'

const toneClass: Record<Project['tone'], string> = {
  blush: 'from-primary via-[#F3C9D9] to-secondary/70',
  rose: 'from-secondary/50 via-primary to-accent/40',
  mist: 'from-bg-alt via-primary/80 to-secondary/40',
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${toneClass[project.tone]}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,138,167,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(197,138,167,0.2) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-[clamp(4rem,12vw,7rem)] text-text/10 select-none">
          {project.number}
        </span>
      </div>
      {project.placeholder && (
        <span className="absolute top-4 left-4 border border-accent/30 bg-bg/70 px-2.5 py-1 text-[10px] tracking-[0.16em] text-text/60 uppercase backdrop-blur-sm">
          Placeholder
        </span>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-bg py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-accent uppercase">Selected work</p>
          <h2
            id="projects-heading"
            className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Projects
          </h2>
          <p className="mt-4 max-w-lg text-text/65">
            Case-study placeholders — replace titles, descriptions, and links in{' '}
            <code className="text-sm text-accent">src/data/content.ts</code>.
          </p>
        </SectionReveal>

        <ul className="mt-16 space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1
            return (
              <li key={project.id}>
                <SectionReveal>
                  <article
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                      reverse ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ProjectVisual project={project} />
                    </motion.div>

                    <div className={reverse ? 'lg:pr-6' : 'lg:pl-2'}>
                      <p className="font-serif text-sm text-accent/80">{project.number}</p>
                      <h3 className="mt-2 font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-md leading-relaxed text-text/70">
                        {project.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                        {project.tech.map((t) => (
                          <li
                            key={t}
                            className="text-xs tracking-[0.14em] text-text/50 uppercase"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap items-center gap-5">
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 text-sm text-text/80 transition-colors hover:text-accent"
                          aria-label={`GitHub for ${project.title}`}
                        >
                          <GitHubIcon size={16} />
                          GitHub
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            className="inline-flex items-center gap-1.5 text-sm text-text/80 transition-colors hover:text-accent"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            Live
                            <ArrowUpRight size={15} strokeWidth={1.5} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </SectionReveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
