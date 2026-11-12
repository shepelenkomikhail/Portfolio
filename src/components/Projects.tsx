import { useState, type ReactNode } from 'react'
import { featured, moreProjects, projects, type Project } from '../data/projects'
import Section from './Section'
import { ArrowUpRight, GitHub, Lock } from './Icons'

function ExtLink({ href, children, label }: { href: string; children: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition hover:text-accent"
    >
      {children}
    </a>
  )
}

function FeaturedProject() {
  const [active, setActive] = useState(0)
  const image = featured.images[active]

  return (
    <article className="reveal card overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        <div className="relative border-b border-line bg-bg-soft p-4 sm:p-6 lg:border-r lg:border-b-0">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/15 to-transparent" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/30">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate font-mono text-[11px] text-faint">gardenrose.shepelenkomykhailo.com</span>
            </div>
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1440}
              height={900}
              loading="lazy"
              className="aspect-[16/10] w-full animate-[fade_0.5s_ease] object-cover object-top"
            />
          </div>
          <div className="relative mt-4 flex gap-3" role="tablist" aria-label="Garden Rose screenshots">
            {featured.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={img.alt}
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-lg border-2 transition ${
                  i === active ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt="" width={144} height={90} loading="lazy" className="aspect-[16/10] w-20 object-cover object-top sm:w-28" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] font-medium text-accent-ink">#01 · Featured</span>
            <span className="chip">Full-stack · solo</span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{featured.title}</h3>
          <p className="mt-1 text-accent">{featured.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{featured.intro}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {featured.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse rounded-xl border border-line bg-bg-soft/60 px-4 py-3">
                <dt className="text-xs text-muted">{m.label}</dt>
                <dd className="font-display text-2xl font-semibold text-accent">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={featured.live} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5!">
              Open live demo <ArrowUpRight width={16} height={16} />
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs text-faint">
              <Lock width={14} height={14} /> {featured.note}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 border-t border-line p-6 sm:p-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h4 className="eyebrow mb-4">What’s inside</h4>
          <ul className="space-y-3">
            {featured.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Stack</h4>
          <ul className="flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function Cover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        width={800}
        height={500}
        className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
      />
    )
  }
  // Generated cover for projects without a screenshot
  return (
    <div className="relative grid aspect-[16/10] w-full place-items-center overflow-hidden bg-bg-soft" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--glow),0.25),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(var(--glow-2),0.2),transparent_50%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      <pre className="relative font-mono text-[11px] leading-5 text-muted">
        <span className="text-accent">const</span> app = <span className="text-ink">build</span>(
        {'\n'}  <span className="text-accent">'{project.title}'</span>
        {'\n'});
      </pre>
    </div>
  )
}

function ProjectCard({ project, rank }: { project: Project; rank: number }) {
  return (
    <article className="reveal group card flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="relative overflow-hidden border-b border-line">
        <Cover project={project} />
        <span className="absolute top-3 left-3 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-ink backdrop-blur">
          #{String(rank).padStart(2, '0')}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur">
          {project.kind}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-5 pt-5">
          {project.live && (
            <ExtLink href={project.live} label={`${project.title} live`}>
              Live <ArrowUpRight width={15} height={15} />
            </ExtLink>
          )}
          {project.github && (
            <ExtLink href={project.github} label={`${project.title} on GitHub`}>
              <GitHub width={15} height={15} /> Code
            </ExtLink>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 6)

  return (
    <Section
      id="projects"
      index="03"
      title="Things I’ve built."
      lead="Ordered by how much they show — the strongest first. Most are live; every public one has its code on GitHub."
    >
      <FeaturedProject />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={p.slug} project={p} rank={i + 2} />
        ))}
      </div>

      {!showAll && (
        <div className="mt-10 flex justify-center">
          <button type="button" className="btn-ghost" onClick={() => setShowAll(true)}>
            Show {projects.length - 6} more projects
          </button>
        </div>
      )}

      {showAll && (
        <div className="reveal is-visible mt-12">
          <h3 className="eyebrow mb-4">Smaller & university projects</h3>
          <ul className="card divide-y divide-line">
            {moreProjects.map((p) => (
              <li key={p.title}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-4 transition hover:bg-accent-soft"
                >
                  <span>
                    <span className="font-medium group-hover:text-accent">{p.title}</span>
                    <span className="ml-3 text-sm text-muted">{p.note}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-faint">
                    {p.stack} <ArrowUpRight width={14} height={14} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-10 text-center text-sm text-muted">
        More on{' '}
        <a href="https://github.com/shepelenkomikhail" target="_blank" rel="noopener noreferrer" className="text-accent link-underline">
          GitHub
        </a>
        .
      </p>
    </Section>
  )
}
