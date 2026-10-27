import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { heroWords, links } from '../data'
import { Arrow, ExternalIcon } from './ui'

// Each line is a list of [className, text] tokens so the typed output keeps
// its syntax colouring.
const code = [
  [['k', 'const '], ['v', 'homesh'], ['p', ' = {']],
  [['p', '  '], ['key', 'role'], ['p', ': '], ['s', "'UI Architect & Consultant'"], ['p', ',']],
  [['p', '  '], ['key', 'since'], ['p', ': '], ['n', '2009'], ['p', ',']],
  [['p', '  '], ['key', 'stack'], ['p', ': ['], ['s', "'Angular'"], ['p', ', '], ['s', "'React'"], ['p', ', '], ['s', "'TS'"], ['p', '],']],
  [['p', '  '], ['key', 'ai'], ['p', ': ['], ['s', "'Claude Code'"], ['p', ', '], ['s', "'Kiro'"], ['p', ', '], ['s', "'Antigravity'"], ['p', '],']],
  [['p', '  '], ['key', 'domains'], ['p', ': ['], ['s', "'Fintech'"], ['p', ', '], ['s', "'Pharma'"], ['p', ', '], ['s', "'Telecom'"], ['p', '],']],
  [['p', '  '], ['key', 'available'], ['p', ': '], ['k', 'true'], ['p', ','], ['c', ' // freelance & consulting']],
  [['p', '}']],
]
const total = code.flat().reduce((n, [, t]) => n + t.length, 0)

function CodeWindow() {
  const reduce = useReducedMotion()
  const [chars, setChars] = useState(reduce ? total : 0)

  useEffect(() => {
    if (reduce) return
    let i = 0
    const id = setInterval(() => {
      i += 2
      setChars(Math.min(i, total))
      if (i >= total) clearInterval(id)
    }, 22)
    return () => clearInterval(id)
  }, [reduce])

  // The caret sits on the line currently being typed (or the last line once done).
  let caretLine = code.length - 1
  for (let li = 0, seen = 0; li < code.length; li++) {
    seen += code[li].reduce((n, [, t]) => n + t.length, 0)
    if (seen >= chars) { caretLine = li; break }
  }

  let budget = chars
  return (
    <div className="code-window spotlight" aria-label="Profile summary as a TypeScript object">
      <div className="code-bar">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
        <span className="code-file">homesh.config.ts</span>
      </div>
      <pre className="code-body" aria-hidden="true">
        {code.map((line, li) => (
          <div key={li} className="code-line">
            <span className="ln">{li + 1}</span>
            <span>
              {line.map(([cls, text], ti) => {
                if (budget <= 0) return null
                const shown = text.slice(0, budget)
                budget -= text.length
                return <span key={ti} className={`t-${cls}`}>{shown}</span>
              })}
              {li === caretLine && <span className="caret" />}
            </span>
          </div>
        ))}
      </pre>
    </div>
  )
}

function RotatingWord() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % heroWords.length), 2400)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <span className="rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroWords[i]}
          className="rotator-word"
          initial={{ y: '60%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-60%', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="badge" {...fade(0)}>
            <span className="pulse" aria-hidden="true" /> Open to consulting &amp; freelance work
          </motion.p>
          <motion.h1 {...fade(0.08)}>
            Homesh Nasre
          </motion.h1>
          <motion.p className="hero-tagline" {...fade(0.16)}>
            UI architect. I build frontends that <RotatingWord />.
          </motion.p>
          <motion.p className="lead" {...fade(0.24)}>
            I've been building for the web since 2009, from IE6 fixes to enterprise Angular and React platforms.
            Now I help teams get their frontend architecture right, and I build with AI in the loop, from the
            spec to the code review.
          </motion.p>
          <motion.div className="cta" {...fade(0.32)}>
            <a href="#contact" className="btn btn-primary">Work with me <Arrow /></a>
            <a href="#projects" className="btn btn-ghost">See my work</a>
            <a href={links.github} className="btn btn-link" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeWindow />
          <div className="float-chip chip-a" aria-hidden="true">⚡ Core Web Vitals</div>
          <div className="float-chip chip-b" aria-hidden="true">✦ AI-assisted</div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span className="mouse"><span /></span>
      </a>
    </section>
  )
}
