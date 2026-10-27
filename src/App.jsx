import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const heroVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const projects = [
  {
    name: 'Luprolink',
    desc: 'Drug inventory & shipment management. Lead Front-end. Keycloak + Angular 11.',
    tech: 'Angular 11, Keycloak, D3, Highcharts',
  },
  {
    name: 'Commscope Quareo',
    desc: 'Network management station web app. UI dev, catalog templates. 2014–2017.',
    tech: 'AngularJS, HTML/CSS, jQuery',
  },
  {
    name: 'Motorola Mobility Catalog',
    desc: 'Sales portal for mobile devices. Responsive templates + AngularJS. 2014.',
    tech: 'AngularJS, HTML/CSS, jQuery',
  },
  {
    name: 'Harmonic SM',
    desc: 'Video processing hardware management. UI improvements. 2014.',
    tech: 'HTML/CSS, JavaScript',
  },
  {
    name: 'Baker Hughes FastOil',
    desc: 'Well drilling portal. GUI + JSP integration. 2013.',
    tech: 'JSP, HTML/CSS, JavaScript',
  },
  {
    name: 'Forex24hr.com',
    desc: 'Forex trading platform. Responsive UI, charts, and order flow for traders.',
    tech: 'HTML5, CSS3, JavaScript, Chart.js',
  },
  {
    name: 'TradeSagar.com',
    desc: 'Trading and investment dashboard. Market data, watchlists, portfolio tracking.',
    tech: 'React, TypeScript, SASS, Node.js, Chart.js · Antigravity, Claude Code, Kilo',
  },
]

const experiences = [
  { role: "Frontend Architect & Consultant", date: "Present", company: "TCS", bullets: ["Leading frontend architecture and consulting for enterprise engagements.", "Defining scalable UI standards and mentoring frontend teams."] },
  { role: "Remote Frontend Contractor", date: "2023 — 2026", company: "Uplers", bullets: ["Built TradeSagar.com with React, TypeScript, Node.js, and Chart.js.", "AI-assisted spec-driven development using Kiro, Antigravity, and Claude Code.", "Delivered trading dashboards and market data dashboards for global clients."] },
  { role: "Freelance Frontend Consultant", date: "2022 — 2023", company: "Independent", bullets: ["Forex24hr.com — responsive forex trading UI with charts and order flow.", "Frontend architecture audits, performance optimization, and legacy modernization."] },
  { role: "Lead Front-end Developer", date: "Jun 2012 — 2022", company: "Persistent Systems Ltd., India", bullets: ["Led front-end teams; client point of contact for NA, Norway, Australia, Germany.", "Delivered across Pharma, Finance, Telecom, Big Data, E-commerce.", "Angular, AngularJS, Keycloak, D3, Highcharts; performance and cross-browser fixes.", "Agile Scrum and Waterfall SDLC ownership."] },
  { role: "Front End", date: "Jan 2022 — Jan 2023", company: "The Skill Xchange", bullets: ["Next-gen UI with ES6, Angular 7+, SASS, HTML5.", "Code reviews and CI/CD with Azure DevOps."] },
  { role: "UI Developer", date: "Apr 2012 — Jun 2012", company: "TEKsystems Inc., India", bullets: ["Converted wireframes to dynamic HTML/CSS layouts."] },
  { role: "UI Developer", date: "Jan 2012 — Apr 2012", company: "Kizora Pvt. Ltd., India", bullets: ["Norway restaurant website; WordPress theme; responsive CSS3/jQuery."] },
  { role: "Front-end Developer", date: "Oct 2010 — Jan 2012", company: "Alacrity Solution Pvt. Ltd., India", bullets: ["E-commerce templates; PSD slicing; cross-browser fixes incl. IE6."] },
  { role: "Web Developer", date: "Aug 2009 — Oct 2010", company: "Supreme Startech Pvt. Ltd., India", bullets: ["ERP application UI; HTML/CSS/JS/jQuery; .NET back-end integration."] },
];


const skills = [
  { name: 'Angular', desc: '6 years — AngularJS, Angular 7+, RxJS, Angular Material' },
  { name: 'React', desc: 'Component architecture, hooks, state management' },
  { name: 'TypeScript', desc: 'Typed, scalable enterprise codebases' },
  { name: 'JavaScript', desc: '8 years — ES6+, modern patterns' },
  { name: 'Node.js', desc: 'Backend APIs and trading dashboard services' },
  { name: 'HTML5 / CSS3 / SASS', desc: 'Pixel-perfect, responsive, cross-browser' },
  { name: 'AI-Assisted Dev', desc: 'Spec-driven development with Kiro, Antigravity, Claude Code' },
  { name: 'Prompt Engineering', desc: 'AI workflows, codegen, review automation' },
]

const faqs = [
  { q: 'What does a Frontend Architect do?', a: 'Designs scalable UI architecture, design systems, performance strategy, and mentors teams to ship enterprise web apps.' },
  { q: 'Which technologies do you specialize in?', a: 'Angular, React, TypeScript, JavaScript, Node.js, SASS, HTML5/CSS3, and AI-assisted spec-driven development.' },
  { q: 'Are you available for freelance and consulting?', a: 'Yes — frontend architecture, Angular/React apps, team mentoring, legacy modernization, and delivery leadership.' },
]

const services = [
  { name: 'Frontend Architecture', desc: 'Audits, scalable structure, performance, design systems.' },
  { name: 'Angular / React Apps', desc: 'From MVP to enterprise — clean, maintainable code.' },
  { name: 'Team Mentoring', desc: 'Upskill developers, code reviews, best practices.' },
  { name: 'Modernization', desc: 'Legacy jQuery/AngularJS → modern stack.' },
]

const learning = [
  { name: 'AI-Assisted Development', desc: 'Spec-driven development with Kiro, Antigravity, Claude Code.' },
  { name: 'Prompt Engineering', desc: 'Building reliable AI workflows, codegen, and review automation.' },
  { name: 'AI Agents & Architecture', desc: 'LLM orchestration, RAG patterns, agentic coding tools.' },
  { name: 'Frontend Performance at Scale', desc: 'Core Web Vitals, runtime optimization, bundle budgets.' },
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let W, H, pts = []
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 70; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.5 + 0.5 })
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(34,211,238,0.5)'; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 140) {
            ctx.strokeStyle = `rgba(20,184,166,${0.1 * (1 - d / 140)})`
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} style={{position:'fixed',inset:0,zIndex:-1,pointerEvents:'none'}} />
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="logo" onClick={() => setMobileOpen(false)}>HN</a>
          {!mobileOpen && (
            <div className="nav-links">
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#learning">Learning</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="hero">
        <motion.div
          className="hero-content"
          variants={heroVariants}
          initial="hidden"
          animate="show"
        >
          <p className="eyebrow">Frontend Architect & Consultant</p>
          <h1>Homesh Nasre</h1>
          <p className="lead">
            I'm Homesh — a frontend architect and consultant with 15+ years turning complex ideas into fast, beautiful web products. Open to freelance projects and consulting engagements.
          </p>
          <div className="cta">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="https://github.com/homesh123/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>About</h2>
            <p className="about-text">
              I've spent 15+ years building web products end to end — from gathering requirements and shaping architecture to shipping, testing, and maintaining. I've led teams of 8+, mentored developers, and worked with clients across North America, Norway, Australia, and Germany in Pharma, Finance, Telecom, Big Data, and E-commerce. I care about clean code, performance, and shipping products people actually enjoy using.
            </p>
            <div className="stats">
              <div className="stat"><span className="stat-num">15+</span><span className="stat-label">Years Experience</span></div>
              <div className="stat"><span className="stat-num">7+</span><span className="stat-label">Major Projects</span></div>
              <div className="stat"><span className="stat-num">8</span><span className="stat-label">Team Size Led</span></div>
              <div className="stat"><span className="stat-num">4</span><span className="stat-label">Continents</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Skills</h2>
            <div className="grid">
              {skills.map((s) => (
                <motion.div key={s.name} className="card" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Experience</h2>
            <div className="timeline">
              {experiences.map((e) => (
                <motion.div key={e.role} className="item" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
                  <div className="item-head"><h3>{e.role}</h3><span className="item-date">{e.date}</span></div>
                  <p className="item-company">{e.company}</p>
                  <ul>
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Projects</h2>
            <div className="grid">
              {projects.map((p) => (
                <motion.div key={p.name} className="card" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <small>{p.tech}</small>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="learning" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Currently Learning</h2>
            <div className="grid">
              {learning.map((l) => (
                <motion.div key={l.name} className="card" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
                  <h3>{l.name}</h3>
                  <p>{l.desc}</p>
                </motion.div>
              ))}
            </div>
            <p style={{ marginTop: 28, color: 'var(--muted)', maxWidth: 700, margin: '28px auto 0', lineHeight: 1.6 }}>
              I study AI courses and certifications on generative AI, agentic workflows, and modern frontend architecture to keep my consulting practice current.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Freelance & Consulting</h2>
            <div className="grid">
              {services.map((s) => (
                <motion.div key={s.name} className="card" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Frequently Asked</h2>
            <div className="faq">
              {faqs.map((f) => (
                <motion.div key={f.q} className="card" variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
                  <details>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact">
          <motion.div variants={container} initial="hidden" animate="show">
            <h2>Let's build something great</h2>
            <p>Have a project, idea, or team that needs frontend leadership? I'm available for freelance work and consulting.</p>
            <div className="cta">
              <a href="https://www.linkedin.com/in/homesh-nasre-6086b51b/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/homesh123/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Homesh Nasre</footer>
    </>
  )
}
