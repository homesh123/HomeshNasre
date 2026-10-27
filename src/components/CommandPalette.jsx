import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sections, links } from '../data'

const commands = [
  ...sections.map((s) => ({ group: 'Navigate', label: `Go to ${s.label}`, hint: `#${s.id}`, run: () => go(s.id) })),
  { group: 'Connect', label: 'Open LinkedIn', hint: 'linkedin.com', run: () => window.open(links.linkedin, '_blank', 'noopener') },
  { group: 'Connect', label: 'Open GitHub', hint: 'github.com', run: () => window.open(links.github, '_blank', 'noopener') },
  { group: 'Connect', label: 'Copy site link', hint: 'homeshnasre.in', run: () => navigator.clipboard?.writeText('https://homeshnasre.in/') },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  history.replaceState(null, '', `#${id}`)
}

export default function CommandPalette({ open, setOpen }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)
  const lastFocus = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement
      setQuery('')
      setIndex(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      lastFocus.current?.focus?.()
    }
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands
  }, [query])

  const run = (cmd) => {
    setOpen(false)
    cmd?.run()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIndex((i) => (i + 1) % Math.max(results.length, 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1)) }
    else if (e.key === 'Enter') { e.preventDefault(); run(results[index]) }
    else if (e.key === 'Escape') { setOpen(false) }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <motion.div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <input
              ref={inputRef}
              className="palette-input"
              placeholder="Type a command or search…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setIndex(0) }}
              onKeyDown={onKeyDown}
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-list"
              aria-activedescendant={results[index] ? `cmd-${index}` : undefined}
            />
            <ul id="palette-list" className="palette-list" role="listbox">
              {results.length === 0 && <li className="palette-empty">No results for “{query}”</li>}
              {results.map((c, i) => (
                <li
                  key={c.label}
                  id={`cmd-${i}`}
                  role="option"
                  aria-selected={i === index}
                  className={i === index ? 'selected' : ''}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => run(c)}
                >
                  {(i === 0 || results[i - 1].group !== c.group) && <span className="palette-group">{c.group}</span>}
                  <span className="palette-row">
                    <span>{c.label}</span>
                    <span className="palette-hint">{c.hint}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="palette-foot">
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> select</span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
