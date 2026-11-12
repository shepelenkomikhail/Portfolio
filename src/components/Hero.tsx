import { profile, stats } from '../data/profile'
import { ArrowDown, Download, GitHub, LinkedIn, MapPin, WhatsApp } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="container-x relative pt-28 pb-16 sm:pt-36 lg:pb-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="reveal mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/90 px-3.5 py-1.5 text-xs text-muted">
            <span className="pulse-dot h-2 w-2 rounded-full bg-green-400" />
            Open to new opportunities
          </div>

          <p className="reveal eyebrow mb-4" style={{ ['--delay' as string]: '60ms' }}>
            Hi, I’m {profile.shortName} —
          </p>
          <h1
            className="reveal font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ ['--delay' as string]: '120ms' }}
          >
            <span className="text-glow">{profile.name}</span>
          </h1>
          <p
            className="reveal mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ ['--delay' as string]: '180ms' }}
          >
            Full-stack developer. I build web products end to end — from the{' '}
            <span className="text-ink">ASP.NET Core</span> API and <span className="text-ink">PostgreSQL</span> schema to the{' '}
            <span className="text-ink">React</span> interface and the <span className="text-ink">Azure</span> deployment — and I’m
            going deep on <span className="text-accent">AI systems engineering</span>.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ ['--delay' as string]: '240ms' }}>
            <a href="#projects" className="btn-primary">
              See my work <ArrowDown width={16} height={16} />
            </a>
            <a href={profile.cv} download="Shepelenko_Mykhailo_CV.pdf" className="btn-ghost">
              <Download width={16} height={16} /> Download CV
            </a>
          </div>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
            style={{ ['--delay' as string]: '300ms' }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin width={16} height={16} /> {profile.location}
            </span>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent" aria-label="GitHub">
              <GitHub width={20} height={20} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent" aria-label="LinkedIn">
              <LinkedIn width={20} height={20} />
            </a>
            <a href={profile.links.whatsapp} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent" aria-label="WhatsApp">
              <WhatsApp width={20} height={20} />
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-56 sm:w-72 lg:w-80" style={{ ['--delay' as string]: '200ms' }}>
          <div className="absolute -inset-10 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          {/* Animated gradient border: a rotating conic gradient clipped by the rounded frame */}
          <div className="relative overflow-hidden rounded-[2.2rem] p-[3px]">
            <div className="photo-ring absolute -inset-1/2" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={400}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="card absolute -bottom-5 -left-6 px-4 py-3 text-sm sm:-left-10">
            <p className="font-mono text-[11px] text-faint">currently building</p>
            <p className="font-medium">Garden Rose web shop</p>
          </div>
        </div>
      </div>

      <dl className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col justify-start bg-bg-soft/90 p-5 sm:p-6"
          >
            <dt className="order-2 mt-1.5 text-sm leading-snug text-muted">{s.label}</dt>
            <dd className="order-1 font-display text-3xl leading-none font-semibold text-accent sm:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
