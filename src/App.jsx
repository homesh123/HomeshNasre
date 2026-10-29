import { useEffect, useState } from 'react'
import { motion, AnimatePresence, MotionConfig, LayoutGroup } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CommandPalette from './components/CommandPalette'
import { Section, RevealGroup, CountUp, reveal, usePointerGlow, useActiveSection, Arrow, ExternalIcon } from './components/ui'
import {
  sections, stats, domains, skillGroups, marquee, experiences, visibleRoles, aiPractices, aiPipeline,
  exploring, projects, projectFilters, services, process, links,
} from './data'

const sectionIds = sections.map((s) => s.id)

function About() {
  return (
    <Section id="about" eyebrow="About" title="I think in systems, and ship like a builder.">
      <div className="about-grid">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="about-text">
            In 2009 I was building ERP screens with jQuery, and soon after that, slicing PSDs and fighting IE6. Then
            came ten years at Persistent Systems as a lead front-end developer: running a team of eight and being the
            main point of contact for clients in North America, Norway, Australia and Germany.
          </p>
          <p className="about-text">
            These days I work as a UI architect and consultant. Most of the job is helping teams make good structural
            calls early, the kind that keep a codebase pleasant to work in two years later. I care about clean code,
            fast pages, and products people actually enjoy using.
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
    <Section id="skills" eyebrow="Skills" title="What I work with" intro="The tools I reach for every day, and know well enough to teach.">
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
    </Section>
  )
}

function AI() {
  return (
    <Section
      id="ai"
      eyebrow="AI in practice"
      title="AI is in my workflow, not just my bio."
      intro="Here's how I actually use AI coding tools on real projects, without the hype."
    >
      <motion.ol
        className="pipeline"
        aria-label="How I build with AI"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {aiPipeline.map((p, i) => (
          <li key={p} className={i === aiPipeline.length - 1 ? 'pipe-end' : ''}>
            <span className="pipe-node">{p}</span>
          </li>
        ))}
      </motion.ol>

      <RevealGroup className="ai-grid">
        {aiPractices.map((a, i) => (
          <motion.article key={a.name} className="card spotlight ai-card" variants={reveal}>
            <span className="ai-index">0{i + 1}</span>
            <h3>{a.name}</h3>
            <p>{a.desc}</p>
          </motion.article>
        ))}
      </RevealGroup>

      <motion.div className="ai-proof" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div>
          <p className="ai-proof-label">Case in point</p>
          <p className="ai-proof-text">
            <strong>TradeSagar.com</strong> was built this way: React, TypeScript and Node.js, with Kiro, Antigravity
            and Claude Code doing the heavy lifting against a written spec.
          </p>
        </div>
        <div>
          <p className="ai-proof-label">Exploring now</p>
          <ul className="tag-row">
            {exploring.map((e) => <li key={e} className="tag">{e}</li>)}
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}

function Experience() {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? experiences : experiences.slice(0, visibleRoles)
  const hidden = experiences.length - visibleRoles

  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been">
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
    <Section id="projects" eyebrow="Work" title="Selected work" intro="Enterprise platforms and trading products, from pharma logistics to forex, and food supply chains.">
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
    <Section id="services" eyebrow="Services" title="How I can help" intro="Most engagements start with one of these. Some turn into all four.">
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
    </Section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <motion.div className="contact-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-eyebrow"><span>Contact</span></p>
          <h2 id="contact-title">Got a frontend that needs a steady hand?</h2>
          <p>
            A new build, a codebase that's become hard to change, or a team that wants to get real value out of AI.
            Tell me what you're working on. LinkedIn is the best place to reach me.
          </p>
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
        <AI />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Homesh Nasre</span>
          <span className="muted">Designed and built with React, Vite and a little help from AI</span>
          <button type="button" className="footer-k" onClick={() => setPaletteOpen(true)}>
            Press <kbd>⌘</kbd>/<kbd>Ctrl</kbd><kbd>K</kbd> to navigate
          </button>
        </div>
      </footer>
      <BackToTop />
    </MotionConfig>
  )
}
