export const links = {
  linkedin: 'https://www.linkedin.com/in/homesh-nasre-6086b51b/',
  github: 'https://github.com/homesh123/',
}

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'ai', label: 'AI' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const heroWords = ['scale', 'stay fast', 'age well', 'ship sooner']

export const stats = [
  { value: 15, suffix: '+', label: 'Years building for the web' },
  { value: 8, suffix: '', label: 'Developers led on one team' },
  { value: 6, suffix: '', label: 'Industries shipped for' },
  { value: 4, suffix: '', label: 'Continents of clients' },
]

export const domains = ['Pharma', 'Finance', 'Telecom', 'Big Data', 'E-commerce', 'Food']

export const aiPractices = [
  {
    name: 'Spec first, then code',
    desc: 'I write the spec before anything gets generated. Kiro and Claude Code build against it, and the spec is what I review the output against. It keeps the AI honest.',
  },
  {
    name: 'Agents for the heavy lifting',
    desc: 'Claude Code and Antigravity take the repetitive work: scaffolding, refactors across many files, test setup. I make the calls that need judgement and review everything.',
  },
  {
    name: 'Prompts as team tooling',
    desc: 'Reusable prompts and workflows for code generation and review automation, so a whole team gets consistent results instead of lucky ones.',
  },
]

export const aiPipeline = ['spec.md', 'AI agent', 'Review', 'Ship']

export const exploring = ['LLM orchestration', 'RAG patterns', 'Agentic coding tools', 'Core Web Vitals at scale']

export const skillGroups = [
  {
    title: 'Architecture & Leadership',
    icon: '◇',
    skills: [
      { name: 'Frontend architecture', desc: 'App structure, design systems, standards teams can follow' },
      { name: 'Performance', desc: 'Core Web Vitals, runtime tuning, bundle budgets' },
      { name: 'Modernization', desc: 'jQuery and AngularJS to modern stacks, step by step' },
      { name: 'Team leadership', desc: 'Led teams of 8, code reviews, mentoring, client-facing delivery' },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⬡',
    skills: [
      { name: 'Angular', desc: 'AngularJS through Angular 11+, RxJS, Angular Material' },
      { name: 'React', desc: 'Component architecture, hooks, state management' },
      { name: 'Node.js', desc: 'APIs and services behind trading dashboards' },
    ],
  },
  {
    title: 'Languages & Styling',
    icon: '{ }',
    skills: [
      { name: 'TypeScript', desc: 'Typed, large enterprise codebases' },
      { name: 'JavaScript', desc: 'ES6+ and the history behind it, back to IE6' },
      { name: 'HTML5 / CSS3 / SASS', desc: 'Pixel-perfect, responsive, cross-browser' },
      { name: 'Tailwind CSS', desc: 'Utility-first design systems and component styling' },
    ],
  },
]

export const marquee = [
  'Angular', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'RxJS', 'SASS', 'D3', 'Highcharts',
  'Chart.js', 'Tailwind', 'Keycloak', 'Angular Material', 'SonarQube', 'Jest', 'Amazon Kiro',
  'Azure DevOps', 'Claude Code', 'Kiro', 'Antigravity',
]

export const experiences = [
  { role: 'Frontend Architect & Consultant', date: 'Present', company: 'TCS', bullets: ['Lead frontend architecture on enterprise engagements and set the UI standards teams build on.', 'Led the front end as lead engineer on McCain Foods shift management and the Mondelez quality management portal: Angular 17+, Node.js, Amazon Kiro, Tailwind, D3, SonarQube and Jest.', 'Gathered project requirements and brainstormed new features with clients, then translated them into shipped UI.', 'Mentor frontend developers and review the decisions that are expensive to undo later.'] },
  { role: 'Remote Frontend Contractor', date: '2023 — 2026', company: 'Uplers', bullets: ['Built TradeSagar.com, a trading and investment dashboard, with React, TypeScript, Node.js and Chart.js.', 'Worked spec-first with Kiro, Antigravity and Claude Code: AI for speed, review for quality.', 'Delivered trading and market data dashboards for clients around the world.'] },
  { role: 'Freelance Frontend Consultant', date: '2022 — 2023', company: 'Independent', bullets: ['Built the Forex24hr.com trading UI: responsive layouts, charts and order flow.', 'Ran architecture audits, performance tuning and legacy modernization for client teams.'] },
  { role: 'Front-end Developer', date: 'Jan 2022 — Jan 2023', company: 'The Skill Xchange', bullets: ['Built new UI with ES6, Angular 7+, SASS and HTML5.', 'Reviewed code and set up CI/CD on Azure DevOps.'] },
  { role: 'Lead Front-end Developer', date: 'Jun 2012 — 2022', company: 'Persistent Systems Ltd., India', bullets: ['Led front-end teams and was the main client contact for customers in North America, Norway, Australia and Germany.', 'Shipped products for pharma, finance, telecom, big data, e-commerce and food companies.', 'Worked deep in Angular, AngularJS, Keycloak, D3 and Highcharts, and owned performance and cross-browser issues.', 'Ran delivery in both Agile Scrum and Waterfall.'] },
  { role: 'UI Developer', date: 'Apr 2012 — Jun 2012', company: 'TEKsystems Inc., India', bullets: ['Turned wireframes into working HTML/CSS layouts.'] },
  { role: 'UI Developer', date: 'Jan 2012 — Apr 2012', company: 'Kizora Pvt. Ltd., India', bullets: ['Built a website and WordPress theme for a restaurant in Norway, responsive with CSS3 and jQuery.'] },
  { role: 'Front-end Developer', date: 'Oct 2010 — Jan 2012', company: 'Alacrity Solution Pvt. Ltd., India', bullets: ['E-commerce templates, PSD slicing, and a lot of IE6 fixes.'] },
  { role: 'Web Developer', date: 'Aug 2009 — Oct 2010', company: 'Supreme Startech Pvt. Ltd., India', bullets: ['Where it started: ERP application UI in HTML, CSS and jQuery on a .NET back end.'] },
]

// Roles shown before the "earlier roles" toggle
export const visibleRoles = 5

export const projectFilters = ['All', 'React', 'Angular', 'Web', 'Food']

export const projects = [
  {
    name: 'TradeSagar.com',
    desc: 'A trading and investment dashboard with market data, watchlists and portfolio tracking. Built spec-first, with AI coding tools in the loop.',
    tech: ['React', 'TypeScript', 'SASS', 'Node.js', 'Chart.js', 'Antigravity', 'Claude Code', 'Kilo'],
    domain: 'Fintech',
    category: 'React',
    featured: true,
  },
  {
    name: 'McCain Shift Management',
    desc: 'Shift and workforce scheduling for McCain Foods. Led the front end as lead engineer: Angular 17+, Node.js back end, Amazon Kiro for AI-assisted development, Tailwind for the design system.',
    tech: ['Angular 17+', 'Node.js', 'Amazon Kiro', 'Tailwind', 'TypeScript'],
    domain: 'Food',
    category: 'Angular',
    featured: true,
  },
  {
    name: 'Mondelez Quality Management Portal',
    desc: 'Quality management portal for Mondelez. Led the front end as lead engineer: requirement gathering with the client, feature brainstorming, SonarQube for code quality, Jest for tests, D3 for charting.',
    tech: ['Angular 17+', 'D3', 'SonarQube', 'Jest', 'TypeScript', 'Tailwind'],
    domain: 'Food',
    category: 'Angular',
    featured: true,
  },
  {
    name: 'Luprolink',
    desc: 'Drug inventory and shipment management for pharma. I led the front end, with Keycloak for auth and D3 and Highcharts for reporting.',
    tech: ['Angular 11', 'Keycloak', 'D3', 'Highcharts'],
    domain: 'Pharma',
    category: 'Angular',
    featured: true,
  },
  {
    name: 'Forex24hr.com',
    desc: 'A forex trading platform. I built the responsive UI, the charts and the order flow traders work in.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    domain: 'Fintech',
    category: 'Web',
  },
  {
    name: 'Commscope Quareo',
    desc: 'Web app for a network management station. UI development and catalog templates, 2014 to 2017.',
    tech: ['AngularJS', 'HTML/CSS', 'jQuery'],
    domain: 'Telecom',
    category: 'Angular',
  },
  {
    name: 'Motorola Mobility Catalog',
    desc: 'Sales portal for mobile devices. Responsive templates built on AngularJS, 2014.',
    tech: ['AngularJS', 'HTML/CSS', 'jQuery'],
    domain: 'E-commerce',
    category: 'Angular',
  },
  {
    name: 'Harmonic SM',
    desc: 'Management UI for video processing hardware. UI improvements, 2014.',
    tech: ['HTML/CSS', 'JavaScript'],
    domain: 'Media',
    category: 'Web',
  },
  {
    name: 'Baker Hughes FastOil',
    desc: 'Portal for well drilling operations. GUI work and JSP integration, 2013.',
    tech: ['JSP', 'HTML/CSS', 'JavaScript'],
    domain: 'Energy',
    category: 'Web',
  },
]

export const services = [
  { name: 'Architecture & audits', desc: "I look at your frontend, tell you plainly what's slowing the team down, and lay out how to fix it.", icon: '◇' },
  { name: 'Angular & React builds', desc: 'From MVP to enterprise app. Typed, clean code your own team can pick up and own.', icon: '▣' },
  { name: 'AI-assisted delivery', desc: 'Set your team up with spec-driven AI workflows that make them faster without lowering the bar.', icon: '✦' },
  { name: 'Modernization', desc: 'Move off jQuery or AngularJS one safe step at a time, without a risky big-bang rewrite.', icon: '↻' },
]

export const process = [
  { step: '01', name: 'Listen', desc: 'Goals, users, constraints, and an honest look at the code you have today.' },
  { step: '02', name: 'Plan', desc: 'Structure, standards and a roadmap sized to your team, not to a textbook.' },
  { step: '03', name: 'Build', desc: 'Small, reviewed increments with AI doing the grunt work and performance budgets in place.' },
  { step: '04', name: 'Hand over', desc: 'Docs and pairing until your team owns it and no longer needs me.' },
]
