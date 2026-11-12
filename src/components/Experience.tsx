import { education, experience } from '../data/experience'
import { certificates, languages } from '../data/profile'
import Section from './Section'
import { ArrowUpRight } from './Icons'

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

              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
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
