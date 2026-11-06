// ---------------------------------------------------------------------------
// All of the text on the site lives here. Edit this file to update content
// without touching the layout or the styles.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Freillan Decina Albo',
  shortName: 'Freillan',
  initials: 'FA',
  role: 'CS Student & Developer',
  age: 20,
  birthday: 'November 29, 2005',
  location: 'Brgy. 4, Tangub City',
  availability: 'Open to internships & opportunities',
  // Your photo lives in the public folder; replace public/profile.jpg to change it.
  photo: './profile.jpg',
  email: 'hello@example.com',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What I Build', href: '#build' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projectMenu = [
  { label: 'Mobile Apps', href: '#projects' },
  { label: 'Web Systems', href: '#projects' },
  { label: 'All Projects', href: '#projects' },
]

export const buildCards = [
  {
    id: 'mobile',
    tone: 'pink',
    span: 'wide',
    title: 'Mobile apps',
    text: 'Flutter apps backed by Firebase and SQLite — health trackers, reservation systems, and admin tools built from the database up.',
  },
  {
    id: 'web',
    tone: 'violet',
    span: 'narrow',
    title: 'Web systems',
    text: 'PHP/MySQL systems and REST APIs with clean MVC routing, plus the HTML, CSS, and JavaScript that holds the front end together.',
  },
  {
    id: 'ui',
    tone: 'lime',
    span: 'narrow',
    title: 'UI & interaction',
    text: 'Interfaces designed for live demos — clear hierarchy, calm spacing, and small touches that make an app feel finished.',
  },
  {
    id: 'research',
    tone: 'cyan',
    span: 'wide',
    title: 'Research & documentation',
    text: 'Technical writing and security research — including an ongoing assessment of information security at Tangub City transportation terminals.',
  },
]

export const skills = [
  { label: 'Flutter', level: 'core' },
  { label: 'Dart', level: 'core' },
  { label: 'JavaScript', level: 'core' },
  { label: 'Firebase', level: 'mid' },
  { label: 'SQLite', level: 'mid' },
  { label: 'PHP / MySQL', level: 'mid' },
  { label: 'REST APIs', level: 'mid' },
  { label: 'HTML / CSS', level: 'mid' },
  { label: 'Figma', level: 'light' },
  { label: 'AI Prompting', level: 'light' },
  { label: 'Git & GitHub', level: 'light' },
  { label: 'Research & Writing', level: 'light' },
]

export const projects = [
  {
    id: 'lexical',
    featured: true,
    badge: 'Featured project',
    title: 'Lexical Analyzer — Dual Theme',
    text: 'Two Flutter apps built around a hand-written finite-state lexer that tokenizes C-like source code into eight token types, shown through a live token stream and data table.',
    tech: ['Flutter', 'Dart', 'Compilers'],
  },
  {
    id: 'healthtrack',
    title: 'HealthTrack',
    text: 'A personal health tracking app covering step counting, water intake, weight logging, BMI, and recipes — backed by a local SQLite database across multiple screens.',
    tech: ['Flutter', 'SQLite'],
  },
  {
    id: 'delapaz',
    title: 'Dela Paz Beach Resort',
    text: 'A cottage reservation app migrated from local storage to Firebase, with Firestore data modeling and Firebase Authentication for guest accounts.',
    tech: ['Flutter', 'Firebase'],
  },
  {
    id: 'petcare',
    title: 'PetCare Admin',
    text: 'An admin-facing Flutter app for managing pet records, built from scratch with SQLite and an interface designed for live presentation.',
    tech: ['Flutter', 'SQLite', 'UI'],
  },
  {
    id: 'products',
    title: 'Products REST API',
    text: 'A clean MVC-style CRUD API for a products resource, using PDO and MySQL with organized routing — packaged for easy setup.',
    tech: ['PHP', 'MySQL', 'REST'],
  },
  {
    id: 'thesis',
    badge: 'Ongoing research',
    title: 'Transportation Security Assessment',
    text: 'Research assessing information security at Tangub City transportation terminals, covering operators, drivers, dispatchers, and personnel.',
    tech: ['Research', 'Security'],
  },
]

// Real repositories from github.com/nadinelyn6-gif
export const repos = [
  {
    name: 'My-Activity',
    description: 'Atom Navbar — a JavaScript DOM activity.',
    tech: ['HTML', 'CSS', 'JS'],
    repo: 'https://github.com/nadinelyn6-gif/My-Activity',
    demo: 'https://nadinelyn6-gif.github.io/My-Activity/',
  },
  {
    name: 'decina-website',
    description: 'My earlier portfolio, with write-ups for the projects above.',
    tech: ['HTML', 'CSS'],
    repo: 'https://github.com/nadinelyn6-gif/decina-website',
    demo: 'https://nadinelyn6-gif.github.io/decina-website/',
  },
  {
    name: 'DecinaFrielan.github.io',
    description: 'This portfolio — React + Vite, deployed with GitHub Pages.',
    tech: ['React', 'Vite'],
    repo: 'https://github.com/nadinelyn6-gif/DecinaFrielan.github.io',
    demo: 'https://nadinelyn6-gif.github.io/DecinaFrielan.github.io/',
  },
]

export const facts = [
  { label: 'Age', value: '20 years old' },
  { label: 'Birthday', value: 'November 29, 2005' },
  { label: 'Location', value: 'Brgy. 4, Tangub City' },
]
