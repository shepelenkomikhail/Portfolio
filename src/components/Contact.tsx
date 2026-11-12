import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'
import Section from './Section'
import { ArrowUpRight, GitHub, LinkedIn, Mail, Phone, WhatsApp } from './Icons'

// EmailJS identifiers are public by design (the public key only allows sending through this template).
const EMAILJS = { service: 'service_pvr2o38', template: 'template_nvwgrzd', publicKey: 'XXUk0SDweb88v_cui' }

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string }

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: LinkedIn, label: 'LinkedIn', value: 'in/shepelenkomykhailo', href: profile.links.linkedin },
  { icon: GitHub, label: 'GitHub', value: 'shepelenkomikhail', href: profile.links.github },
  { icon: WhatsApp, label: 'WhatsApp', value: profile.phone, href: profile.links.whatsapp },
]

const inputClass =
  'w-full rounded-xl border border-line bg-bg-soft/70 px-4 py-3 text-sm text-ink placeholder:text-faint transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('company')) return // honeypot: bots fill hidden fields

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ kind: 'error', message: 'Please add your name, a valid email and a message.' })
      return
    }

    setStatus({ kind: 'sending' })
    try {
      const { default: emailjs } = await import('@emailjs/browser') // loaded only when someone sends
      await emailjs.send(EMAILJS.service, EMAILJS.template, { name, email, message }, { publicKey: EMAILJS.publicKey })
      form.reset()
      setStatus({ kind: 'sent' })
    } catch {
      setStatus({ kind: 'error', message: `Something went wrong. Please email me directly at ${profile.email}.` })
    }
  }

  return (
    <Section
      id="contact"
      index="05"
      title="Let’s build something."
      lead="Hiring for a .NET or full-stack role, or have a product in mind? I usually reply within a day."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <ul className="reveal card divide-y divide-line">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 px-5 py-4 transition hover:bg-accent-soft"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-faint">{label}</span>
                  <span className="block truncate font-medium group-hover:text-accent">{value}</span>
                </span>
                <ArrowUpRight className="text-faint transition group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} noValidate className="reveal card space-y-4 p-6 sm:p-8" style={{ ['--delay' as string]: '100ms' }}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs text-muted">Name</span>
              <input name="name" autoComplete="name" required className={inputClass} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-muted">Email</span>
              <input name="email" type="email" autoComplete="email" required className={inputClass} placeholder="you@company.com" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs text-muted">Message</span>
            <textarea name="message" rows={6} required className={`${inputClass} resize-y`} placeholder="What are you working on?" />
          </label>
          <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button type="submit" className="btn-primary" disabled={status.kind === 'sending'}>
              {status.kind === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status.kind === 'sent' && <span className="text-green-500">Thanks — your message is on its way.</span>}
              {status.kind === 'error' && <span className="text-red-400">{status.message}</span>}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}
