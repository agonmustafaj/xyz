import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center md:px-8">
        <p className="font-serif text-lg tracking-wide text-text">{site.initials}</p>
        <p className="text-sm text-text/50">
          © {site.year} {site.name}
        </p>
      </div>
    </footer>
  )
}
