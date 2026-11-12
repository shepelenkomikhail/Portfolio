import { skills } from '../data/profile'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Tools I reach for.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <article
            key={group.title}
            className={`reveal card p-6 ${i === 0 ? 'lg:row-span-2' : ''}`}
            style={{ ['--delay' as string]: `${i * 70}ms` }}
          >
            <h3 className="eyebrow mb-4">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-surface-2/60 px-3 py-1.5 text-sm transition hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
