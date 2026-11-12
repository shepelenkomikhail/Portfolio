import type { ReactNode } from 'react'

export default function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string
  index: string
  title: string
  lead?: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container-x relative py-16 sm:py-24">
      <header className="reveal mb-10 sm:mb-14">
        <p className="eyebrow mb-3">
          <span className="text-faint">{index} /</span> {id}
        </p>
        <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
      </header>
      {children}
    </section>
  )
}
