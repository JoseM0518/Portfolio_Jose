import { useEffect, useState } from 'react'
import { profile, sections, education, projects, stack, interests } from './data'

const order = ['sobre-mi', 'proyectos', 'tecnologias', 'formacion', 'intereses']
const navItems = [
  ...order.map((id) => sections.find((s) => s.id === id)),
  { id: 'contacto', label: 'Contacto' },
]

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

function Nav({ active }) {
  return (
    <nav
      aria-label="Secciones"
      className="fixed inset-x-0 top-4 z-50 mx-auto w-fit max-w-[calc(100%-1.5rem)] overflow-x-auto rounded-full border border-white/10 bg-navy-900/70 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl"
    >
      <ul className="flex items-center gap-1">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors md:px-4 ${
                active === id ? 'bg-white text-navy-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const k = 'text-sky-300'
const s = 'text-amber-300'

function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 shadow-2xl shadow-blue-950/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="ml-3 font-mono text-xs text-slate-400">GET /perfil</span>
        <span className="ml-auto rounded bg-emerald-400/10 px-2 py-0.5 font-mono text-xs text-emerald-300">200 OK</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
{'{\n'}
{'  '}<span className={k}>"rol"</span>: <span className={s}>"Backend Java"</span>,{'\n'}
{'  '}<span className={k}>"stack"</span>: [<span className={s}>"Java"</span>, <span className={s}>"Spring Boot"</span>,{'\n'}
{'            '}<span className={s}>"MySQL"</span>, <span className={s}>"MongoDB"</span>],{'\n'}
{'  '}<span className={k}>"estudios"</span>: <span className={s}>"Ing. Informática"</span>,{'\n'}
{'  '}<span className={k}>"semestre"</span>: <span className="text-emerald-300">5</span>,{'\n'}
{'  '}<span className={k}>"enfoque"</span>: <span className={s}>"APIs REST limpias"</span>{'\n'}
{'}'}
      </pre>
    </div>
  )
}

function Hero() {
  const d = (ms) => ({ animationDelay: `${ms}ms` })
  return (
    <section id="sobre-mi" className="grid items-center gap-14 pb-20 pt-36 md:pt-44 lg:grid-cols-12 lg:pb-28">
      <div className="lg:col-span-7">
        <h1 className="animate-fade-up font-display text-[clamp(3rem,8.5vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white">
          Jose Manuel
          <span className="block text-slate-500">Mesa Ospina</span>
        </h1>
        <p className="animate-fade-up mt-8 font-display text-xl font-medium text-slate-200 md:text-2xl" style={d(120)}>
          Estudiante de Ingeniería Informática · {profile.role}
        </p>
        <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={d(220)}>
          {profile.summary}
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap gap-3" style={d(320)}>
          <a href="#proyectos" className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-navy-950 transition hover:bg-amber-300">
            Ver proyectos
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40">
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>
      <div className="animate-fade-up lg:col-span-5" style={d(300)}>
        <ProfileCard />
      </div>
    </section>
  )
}

function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
        <p className="mt-4 text-lg">{lead}</p>
      </div>
      {children}
    </section>
  )
}

const Chip = ({ children, strong }) => (
  <li className={`rounded-full border px-3 py-1 text-xs font-medium ${strong ? 'border-amber-400/30 bg-amber-400/10 text-amber-200' : 'border-white/10 bg-white/5 text-slate-300'}`}>
    {children}
  </li>
)

const card = 'rounded-3xl border border-white/10 bg-navy-900/60 p-7 transition-colors hover:border-white/25'

export default function App() {
  const active = useActiveSection(navItems.map((n) => n.id))
  const [first, ...rest] = stack

  return (
    <>
      <Nav active={active} />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />

        <Section id="proyectos" title="Proyectos" lead="Aplicaciones backend que he construido, desde lo personal hasta lo académico.">
          <div className="grid gap-5 lg:grid-cols-5">
            {projects.map((p, i) => (
              <article key={p.title} className={`${card} flex flex-col ${i === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
                <p className="text-sm font-medium text-amber-300">{p.type}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed">{p.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {p.tags.map((t) => <Chip key={t}>{t}</Chip>)}
                </ul>
              </article>
            ))}
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-medium text-white underline decoration-slate-600 underline-offset-4 hover:decoration-amber-400">
            <GithubIcon /> Ver más en GitHub
          </a>
        </Section>

        <Section id="tecnologias" title="Tecnologías" lead="Las herramientas con las que construyo y pruebo mis proyectos.">
          <div className="grid gap-5 md:grid-cols-3">
            <div className={`${card} flex flex-col justify-between md:row-span-2`}>
              <p className="font-display text-7xl font-bold text-amber-400 md:text-8xl">{first.items[0]}</p>
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-white">{first.group}</h3>
                <p className="mt-2">{first.note}</p>
              </div>
            </div>
            {rest.map((g) => (
              <div key={g.group} className={card}>
                <h3 className="font-display text-xl font-semibold text-white">{g.group}</h3>
                {g.note && <p className="mt-2 text-sm">{g.note}</p>}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => <Chip key={i}>{i}</Chip>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="formacion" title="Formación" lead="Dónde estudio y qué sigo aprendiendo.">
          <ol className="relative ml-3 space-y-10 border-l border-white/10 pl-8">
            {education.map((e, i) => (
              <li key={e.title} className="relative">
                <span className={`absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-navy-950 ${i === 0 ? 'bg-amber-400' : 'bg-slate-600'}`} />
                <p className="text-sm font-medium text-amber-300">{e.period}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-white">{e.title}</h3>
                <p className="mt-1">{e.place}</p>
                {e.detail && <p className="mt-1 text-sm">{e.detail}</p>}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="intereses" title="Intereses" lead="Hacia dónde quiero llevar mi carrera.">
          <div className="grid gap-5 md:grid-cols-2">
            {interests.map((i) => (
              <article key={i.title} className={card}>
                <h3 className="font-display text-xl font-semibold text-white">{i.title}</h3>
                <p className="mt-3 leading-relaxed">{i.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <section id="contacto" className="scroll-mt-20 py-20 md:py-28">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">¿Hablamos?</h2>
          <p className="mt-4 max-w-xl text-lg">Escríbeme si tienes una oportunidad, un proyecto o quieres conocer más de mi trabajo.</p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-block break-all font-display text-2xl font-semibold text-amber-400 underline decoration-amber-400/30 underline-offset-8 transition hover:decoration-amber-400 md:text-5xl">
            {profile.email}
          </a>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Jose Manuel Mesa Ospina. Hecho con React, Vite y Tailwind CSS.
        </footer>
      </main>
    </>
  )
}
