export const links = {
  linkedin: 'https://www.linkedin.com/in/homesh-nasre-6086b51b/',
  github: 'https://github.com/homesh123/',
}

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const heroWords = ['scalable', 'fast', 'accessible', 'AI-assisted', 'maintainable']

export const stats = [
  { value: 15, suffix: '+', label: 'Years experience' },
  { value: 7, suffix: '+', label: 'Major projects' },
  { value: 8, suffix: '', label: 'Team size led' },
  { value: 4, suffix: '', label: 'Continents served' },
]

export const domains = ['Pharma', 'Finance', 'Telecom', 'Big Data', 'E-commerce']

export const skillGroups = [
  {
    title: 'Frameworks',
    icon: '⬡',
    skills: [
      { name: 'Angular', desc: '6 years — AngularJS, Angular 7+, RxJS, Angular Material' },
      { name: 'React', desc: 'Component architecture, hooks, state management' },
      { name: 'Node.js', desc: 'Backend APIs and trading dashboard services' },
    ],
  },
  {
    title: 'Languages & Styling',
    icon: '{ }',
    skills: [
      { name: 'TypeScript', desc: 'Typed, scalable enterprise codebases' },
      { name: 'JavaScript', desc: '8 years — ES6+, modern patterns' },
      { name: 'HTML5 / CSS3 / SASS', desc: 'Pixel-perfect, responsive, cross-browser' },
    ],
  },
  {
    title: 'AI Engineering',
    icon: '✦',
    skills: [
      { name: 'AI-Assisted Dev', desc: 'Spec-driven development with Kiro, Antigravity, Claude Code' },
      { name: 'Prompt Engineering', desc: 'AI workflows, codegen, review automation' },
    ],
  },
]

export const marquee = [
  'Angular', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'RxJS', 'SASS', 'D3', 'Highcharts',
  'Chart.js', 'Keycloak', 'Angular Material', 'Azure DevOps', 'Claude Code', 'Kiro', 'Antigravity',
]

export const learning = [
  { name: 'AI-Assisted Development', desc: 'Spec-driven development with Kiro, Antigravity, Claude Code.' },
  { name: 'Prompt Engineering', desc: 'Building reliable AI workflows, codegen, and review automation.' },
  { name: 'AI Agents & Architecture', desc: 'LLM orchestration, RAG patterns, agentic coding tools.' },
  { name: 'Frontend Performance at Scale', desc: 'Core Web Vitals, runtime optimization, bundle budgets.' },
]

export const experiences = [
  { role: 'Frontend Architect & Consultant', date: 'Present', company: 'TCS', bullets: ['Leading frontend architecture and consulting for enterprise engagements.', 'Defining scalable UI standards and mentoring frontend teams.'] },
  { role: 'Remote Frontend Contractor', date: '2023 — 2026', company: 'Uplers', bullets: ['Built TradeSagar.com with React, TypeScript, Node.js, and Chart.js.', 'AI-assisted spec-driven development using Kiro, Antigravity, and Claude Code.', 'Delivered trading dashboards and market data dashboards for global clients.'] },
  { role: 'Freelance Frontend Consultant', date: '2022 — 2023', company: 'Independent', bullets: ['Forex24hr.com — responsive forex trading UI with charts and order flow.', 'Frontend architecture audits, performance optimization, and legacy modernization.'] },
  { role: 'Lead Front-end Developer', date: 'Jun 2012 — 2022', company: 'Persistent Systems Ltd., India', bullets: ['Led front-end teams; client point of contact for NA, Norway, Australia, Germany.', 'Delivered across Pharma, Finance, Telecom, Big Data, E-commerce.', 'Angular, AngularJS, Keycloak, D3, Highcharts; performance and cross-browser fixes.', 'Agile Scrum and Waterfall SDLC ownership.'] },
  { role: 'Front End', date: 'Jan 2022 — Jan 2023', company: 'The Skill Xchange', bullets: ['Next-gen UI with ES6, Angular 7+, SASS, HTML5.', 'Code reviews and CI/CD with Azure DevOps.'] },
  { role: 'UI Developer', date: 'Apr 2012 — Jun 2012', company: 'TEKsystems Inc., India', bullets: ['Converted wireframes to dynamic HTML/CSS layouts.'] },
  { role: 'UI Developer', date: 'Jan 2012 — Apr 2012', company: 'Kizora Pvt. Ltd., India', bullets: ['Norway restaurant website; WordPress theme; responsive CSS3/jQuery.'] },
  { role: 'Front-end Developer', date: 'Oct 2010 — Jan 2012', company: 'Alacrity Solution Pvt. Ltd., India', bullets: ['E-commerce templates; PSD slicing; cross-browser fixes incl. IE6.'] },
  { role: 'Web Developer', date: 'Aug 2009 — Oct 2010', company: 'Supreme Startech Pvt. Ltd., India', bullets: ['ERP application UI; HTML/CSS/JS/jQuery; .NET back-end integration.'] },
]

// Roles shown before the "earlier roles" toggle
export const visibleRoles = 4

export const projectFilters = ['All', 'React', 'Angular', 'Web']

export const projects = [
  {
    name: 'TradeSagar.com',
    desc: 'Trading and investment dashboard. Market data, watchlists, portfolio tracking.',
    tech: ['React', 'TypeScript', 'SASS', 'Node.js', 'Chart.js', 'Antigravity', 'Claude Code', 'Kilo'],
    domain: 'Fintech',
    category: 'React',
    featured: true,
  },
  {
    name: 'Luprolink',
    desc: 'Drug inventory & shipment management. Lead Front-end. Keycloak + Angular 11.',
    tech: ['Angular 11', 'Keycloak', 'D3', 'Highcharts'],
    domain: 'Pharma',
    category: 'Angular',
    featured: true,
  },
  {
    name: 'Forex24hr.com',
    desc: 'Forex trading platform. Responsive UI, charts, and order flow for traders.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    domain: 'Fintech',
    category: 'Web',
  },
  {
    name: 'Commscope Quareo',
    desc: 'Network management station web app. UI dev, catalog templates. 2014–2017.',
    tech: ['AngularJS', 'HTML/CSS', 'jQuery'],
    domain: 'Telecom',
    category: 'Angular',
  },
  {
    name: 'Motorola Mobility Catalog',
    desc: 'Sales portal for mobile devices. Responsive templates + AngularJS. 2014.',
    tech: ['AngularJS', 'HTML/CSS', 'jQuery'],
    domain: 'E-commerce',
    category: 'Angular',
  },
  {
    name: 'Harmonic SM',
    desc: 'Video processing hardware management. UI improvements. 2014.',
    tech: ['HTML/CSS', 'JavaScript'],
    domain: 'Media',
    category: 'Web',
  },
  {
    name: 'Baker Hughes FastOil',
    desc: 'Well drilling portal. GUI + JSP integration. 2013.',
    tech: ['JSP', 'HTML/CSS', 'JavaScript'],
    domain: 'Energy',
    category: 'Web',
  },
]

export const services = [
  { name: 'Frontend Architecture', desc: 'Audits, scalable structure, performance, design systems.', icon: '◇' },
  { name: 'Angular / React Apps', desc: 'From MVP to enterprise — clean, maintainable code.', icon: '▣' },
  { name: 'Team Mentoring', desc: 'Upskill developers, code reviews, best practices.', icon: '◎' },
  { name: 'Modernization', desc: 'Legacy jQuery/AngularJS → modern stack.', icon: '↻' },
]

export const process = [
  { step: '01', name: 'Discover', desc: 'Understand goals, users, constraints, and the current codebase.' },
  { step: '02', name: 'Architect', desc: 'Define structure, standards, and a pragmatic roadmap.' },
  { step: '03', name: 'Build', desc: 'Ship iteratively with reviews, tests, and performance budgets.' },
  { step: '04', name: 'Enable', desc: 'Hand over with docs and mentoring so your team owns it.' },
]

export const faqs = [
  { q: 'What does a Frontend Architect do?', a: 'Designs scalable UI architecture, design systems, performance strategy, and mentors teams to ship enterprise web apps.' },
  { q: 'Which technologies do you specialize in?', a: 'Angular, React, TypeScript, JavaScript, Node.js, SASS, HTML5/CSS3, and AI-assisted spec-driven development.' },
  { q: 'Are you available for freelance and consulting?', a: 'Yes — frontend architecture, Angular/React apps, team mentoring, legacy modernization, and delivery leadership.' },
]
