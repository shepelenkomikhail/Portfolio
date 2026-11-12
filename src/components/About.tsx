import Section from './Section'
import CodeTyper from './CodeTyper'
import { Compass, Scales, Sparkles } from './Icons'

const principles = [
  {
    icon: Compass,
    title: 'Problem first, stack second',
    text: 'I start from the user and the business constraint, then choose the tool that fits — .NET, Node, Python, a managed cloud service or a language model. No favourite hammer.',
  },
  {
    icon: Sparkles,
    title: 'AI as part of the system',
    text: 'I build features on top of LLMs and work with AI agents every day. I treat models as components with context, cost, latency and failure modes — and I’m deepening into RAG, evals and agent design.',
  },
  {
    icon: Scales,
    title: 'Trade-offs in the open',
    text: 'Decisions written down as ADRs, honest estimates, early demos and quick feedback loops — and changing course when the data or the client says so.',
  },
]

export default function About() {
  return (
    <Section id="about" index="01" title="An engineer, not just a coder.">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I’m a full-stack developer based in Budapest with a BSc in Computer Science from ELTE. At NIX I built{' '}
            <span className="text-ink">.NET backends</span> and managed <span className="text-ink">Azure</span> infrastructure for
            US clients in healthcare and online marketplaces; before that I worked on Ericsson’s open-source CodeChecker.
          </p>
          <p>
            In my own time I ship complete products — most recently a multilingual web shop for a Budapest florist, from the
            database schema to CI/CD — and AI tools: a translator on OpenAI, a recipe assistant on Gemini and an agent that
            analyses Apple Notes. Where I’m heading: <span className="text-ink">AI systems engineering</span> — putting LLMs
            into real products reliably.
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
              <p.icon />
            </span>
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
