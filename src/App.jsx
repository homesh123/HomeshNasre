import { useEffect, useState } from 'react'
import { motion, AnimatePresence, MotionConfig, LayoutGroup } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CommandPalette from './components/CommandPalette'
import { Section, RevealGroup, CountUp, reveal, usePointerGlow, useActiveSection, Arrow, ExternalIcon } from './components/ui'
import {
  sections, stats, domains, skillGroups, marquee, learning, experiences, visibleRoles,
  projects, projectFilters, services, process, faqs, links,
} from './data'

const sectionIds = sections.map((s) => s.id)

function About() {
  return (
    <Section id="about" eyebrow="About" title="Architecture-minded. Product-focused.">
      <div className="about-grid">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="about-text">
            I've spent 15+ years building web products end to end — from gathering requirements and shaping
            architecture to shipping, testing, and maintaining. I've led teams of 8+, mentored developers, and worked
            with clients across North America, Norway, Australia, and Germany.
          </p>
          <p className="about-text">
            I care about clean code, performance, and shipping products people actually enjoy using.
          </p>
          <ul className="tag-row" aria-label="Industries">
            {domains.map((d) => <li key={d} className="tag">{d}</li>)}
          </ul>
        </motion.div>
        <RevealGroup className="stats">
          {stats.map((s) => (
            <motion.div key={s.label} className="stat spotlight" variants={reveal}>
              <span className="stat-num"><CountUp value={s.value} suffix={s.suffix} /></span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolkit" intro="Deep in the Angular & React ecosystems, with AI-assisted workflows on top.">
      <RevealGroup className="skill-groups">
        {skillGroups.map((g) => (
          <motion.article key={g.title} className="card skill-group spotlight" variants={reveal}>
            <div className="skill-group-head">
              <span className="icon-tile" aria-hidden="true">{g.icon}</span>
              <h3>{g.title}</h3>
            </div>
            <ul className="skill-list">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <strong>{s.name}</strong>
                  <span>{s.desc}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </RevealGroup>

      <div className="marquee" aria-label="Technologies">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="marquee-item" aria-hidden={i >= marquee.length}>{t}</span>
          ))}
        </div>
      </div>

      <motion.div className="learning" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="learning-head">
          <span className="live-dot" aria-hidden="true" />
          <h3>Currently learning</h3>
        </div>
        <ul className="learning-list">
          {learning.map((l) => (
            <li key={l.name}><strong>{l.name}</strong><span>{l.desc}</span></li>
          ))}
        </ul>
        <p className="muted small">
          I study AI courses and certifications on generative AI, agentic workflows, and modern frontend architecture
          to keep my consulting practice current.
        </p>
      </motion.div>
    </Section>
  )
}

function Experience() {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? experiences : experiences.slice(0, visibleRoles)
  const hidden = experiences.length - visibleRoles

  return (
    <Section id="experience" eyebrow="Experience" title="15+ years, one timeline">
      <ol className="timeline">
        <AnimatePresence initial={false}>
          {shown.map((e, i) => (
            <motion.li
              key={e.role + e.company}
              className={`tl-item ${i === 0 ? 'current' : ''}`}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              exit={{ opacity: 0, y: -10 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-card spotlight">
                <div className="tl-head">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="tl-company">{e.company}</p>
                  </div>
                  <span className="tl-date">{e.date}</span>
                </div>
                <ul className="tl-bullets">
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
      {hidden > 0 && (
        <div className="center">
          <button type="button" className="btn btn-ghost" aria-expanded={showAll} onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Show fewer roles' : `Show ${hidden} earlier roles`}
            <span className={`chev ${showAll ? 'up' : ''}`} aria-hidden="true">▾</span>
          </button>
        </div>
      )}
    </Section>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" intro="Enterprise platforms and trading products across Fintech, Pharma, Telecom, and more.">
      <LayoutGroup>
        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter ${filter === f ? 'active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {filter === f && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
              <span>{f}</span>
            </button>
          ))}
        </div>
        <motion.ul layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.li
                layout
                key={p.name}
                className={`card project spotlight ${p.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-top">
                  <span className="domain">{p.domain}</span>
                  {p.featured && <span className="featured-tag">Featured</span>}
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <ul className="tech" aria-label="Tech stack">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </Section>
  )
}

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Freelance & consulting" intro="Bring me in for a focused audit, a full build, or to level up your team.">
      <RevealGroup className="service-grid">
        {services.map((s) => (
          <motion.article key={s.name} className="card service spotlight" variants={reveal}>
            <span className="icon-tile" aria-hidden="true">{s.icon}</span>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </motion.article>
        ))}
      </RevealGroup>

      <h3 className="sub-title">How I work</h3>
      <RevealGroup as="ol" className="process">
        {process.map((p) => (
          <motion.li key={p.step} variants={reveal}>
            <span className="process-step">{p.step}</span>
            <strong>{p.name}</strong>
            <span>{p.desc}</span>
          </motion.li>
        ))}
      </RevealGroup>

      <h3 className="sub-title">Frequently asked</h3>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}<span className="plus" aria-hidden="true" /></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <motion.div className="contact-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-eyebrow"><span>Contact</span></p>
          <h2 id="contact-title">Let's build something great.</h2>
          <p>Have a project, idea, or team that needs frontend leadership? I'm available for freelance work and consulting.</p>
          <div className="cta">
            <a href={links.linkedin} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Message on LinkedIn <Arrow /></a>
            <a href={links.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub profile <ExternalIcon /></a>
          </div>
          <p className="contact-note">Open to remote engagements with teams worldwide.</p>
        </motion.div>
      </div>
    </section>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#hero"
          className="to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
        >
          ↑
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  usePointerGlow()

  useEffect(() => {
    console.log(
      '%cHey there, fellow developer 👋%c\nLike what you see? Let\'s talk → ' + links.linkedin,
      'font:600 16px system-ui;color:#14b8a6',
      'font:13px system-ui;color:#9a9aa3',
    )
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="bg" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow" />
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
      </div>

      <Nav active={active} onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Homesh Nasre</span>
          <span className="muted">Designed &amp; engineered with React + Vite</span>
          <button type="button" className="footer-k" onClick={() => setPaletteOpen(true)}>
            Press <kbd>⌘</kbd>/<kbd>Ctrl</kbd><kbd>K</kbd> to navigate
          </button>
        </div>
      </footer>
      <BackToTop />
    </MotionConfig>
  )
}
