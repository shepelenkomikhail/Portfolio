import Section from './Section'
import CodeTyper from './CodeTyper'
import { Check } from './Icons'

const principles = [
  { title: 'Rules live on the server', text: 'Prices, permissions and state transitions are enforced by the backend and covered by tests — the UI only displays them.' },
  { title: 'Boring, cheap, maintainable', text: 'One deployable app, a relational database and simple hosting — until the traffic really needs more.' },
  { title: 'Fast and accessible', text: 'Lazy-loaded bundles, server-rendered SEO, keyboard and screen-reader support, reduced-motion respected.' },
]

export default function About() {
  return (
    <Section id="about" index="01" title="Backend at heart, product in mind.">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I’m a full-stack developer based in Budapest with a BSc in Computer Science from ELTE. At NIX I built{' '}
            <span className="text-ink">.NET backends</span> and managed <span className="text-ink">Azure</span> infrastructure for
            US clients in healthcare and online marketplaces; before that I worked on Ericsson’s open-source CodeChecker.
          </p>
          <p>
            In my own time I ship complete products — most recently a multilingual web shop for a Budapest florist, from the
            database schema to CI/CD.
          </p>
          <p className="text-sm">
            Away from the keyboard: football — a football academy in Ukraine, then amateur clubs in Germany and Budapest — and
            strength training.
          </p>
        </div>
        <div className="reveal min-w-0" style={{ ['--delay' as string]: '120ms' }}>
          <CodeTyper />
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {principles.map((p, i) => (
          <article key={p.title} className="reveal card p-6" style={{ ['--delay' as string]: `${i * 90}ms` }}>
            <span className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
              <Check />
            </span>
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
