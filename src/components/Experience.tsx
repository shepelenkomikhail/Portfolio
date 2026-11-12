import { education, experience, hackathons } from '../data/experience'
import { certificates, languages } from '../data/profile'
import Section from './Section'
import { ArrowUpRight, GitHub, Trophy } from './Icons'

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Where I’ve worked.">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.company} className="reveal relative" style={{ ['--delay' as string]: `${i * 100}ms` }}>
            <span
              className="absolute top-7 -left-[31px] h-3 w-3 rounded-full border-2 border-bg bg-accent shadow-[0_0_14px_rgba(var(--glow),0.9)] sm:-left-[47px]"
              aria-hidden="true"
            />
            <article className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl font-semibold">
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {job.company}
                  </a>
                </h3>
                <p className="font-mono text-xs text-faint">
                  {job.period} · {job.location}
                </p>
              </div>

              <ul className="mt-3 flex flex-col gap-1">
                {job.roles.map((r, idx) => (
                  <li key={r.title} className={idx === 0 ? 'font-medium text-accent' : 'text-sm text-muted'}>
                    {r.title}
                    <span className="ml-2 font-mono text-[11px] text-faint">{r.period}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-muted">{job.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {job.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <div id="hackathons" className="mt-16">
        <p className="reveal eyebrow mb-5">Hackathons</p>
        {hackathons.map((h) => (
          <article key={h.event + h.edition} className="reveal card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]">
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a href={h.url} target="_blank" rel="noopener noreferrer" aria-label={`${h.event} ${h.edition}`} className="group">
                    <span
                      className="start-wordmark block h-6 w-[13rem] bg-ink transition group-hover:bg-accent sm:h-7 sm:w-[15rem]"
                      style={{ maskImage: `url(${h.logo})`, WebkitMaskImage: `url(${h.logo})` }}
                      aria-hidden="true"
                    />
                  </a>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-ink shadow-[0_0_24px_rgba(var(--glow),0.45)]">
                    <Trophy width={16} height={16} /> {h.result}
                  </span>
                </div>
                <p className="mt-3 font-mono text-xs text-faint">
                  {h.edition} · {h.period} · {h.place}
                </p>
                <ul className="mt-5 space-y-2">
                  {h.facts.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  <h3 className="font-display text-xl font-semibold">
                    What we built: <span className="text-accent">{h.project.title}</span>
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{h.project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{h.project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {h.project.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-5">
                    <a href={h.project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-accent">
                      Live demo <ArrowUpRight width={15} height={15} />
                    </a>
                    <a href={h.project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-accent">
                      <GitHub width={15} height={15} /> Code
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={h.project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border-t border-line bg-bg-soft p-4 sm:p-6 lg:border-t-0 lg:border-l"
                aria-label={`${h.project.title} live demo`}
              >
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/15 to-transparent" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/20">
                  <img
                    src={h.project.image}
                    alt={`${h.project.title}: student home with thesis journey tracker and AI topic finder`}
                    width={1440}
                    height={900}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div id="education" className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
        <article className="reveal card p-6 sm:p-8">
          <p className="eyebrow mb-3">Education</p>
          <h3 className="font-display text-2xl font-semibold">
            <a href={education.url} target="_blank" rel="noopener noreferrer" className="link-underline">
              {education.school}
            </a>
          </h3>
          <p className="mt-1 font-medium text-accent">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-faint">
            {education.period} · {education.location}
          </p>
          <p className="mt-4 text-sm text-muted">
            <span className="text-ink">Thesis:</span> {education.thesis}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {education.topics.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </article>

        <article className="reveal card p-6 sm:p-8" style={{ ['--delay' as string]: '100ms' }}>
          <p className="eyebrow mb-4">Languages</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between border-b border-line/70 py-1.5">
                <span>{l.name}</span>
                <span className="font-mono text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-7 mb-3">Certificates</p>
          <ul className="space-y-2 text-sm">
            {certificates.map((c) => (
              <li key={c.name} className="flex items-start justify-between gap-4">
                <span>
                  {c.name} <span className="text-muted">— {c.issuer}</span>
                </span>
                <span className="font-mono text-xs text-faint">{c.year}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-1 text-sm text-accent transition hover:text-accent-strong"
          >
            References available on request <ArrowUpRight width={14} height={14} />
          </a>
        </article>
      </div>
    </Section>
  )
}
