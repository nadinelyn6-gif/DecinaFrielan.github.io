// ---------------------------------------------------------------------------
// All of the text on the site lives here. Edit this file to update content
// without touching the layout or the styles.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Freillan Decina Albo',
  shortName: 'Freillan',
  initials: 'FA',
  role: 'Student & Web Developer',
  age: 20,
  birthday: 'November 29, 2005',
  location: 'Brgy. 4, Tangub City',
  availability: 'Open to internships & opportunities',
  // Swap this with "/your-photo.jpg" after adding a photo to the public folder.
  photo: '/profile.svg',
  email: 'hello@example.com',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What I Build', href: '#build' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projectMenu = [
  { label: 'Web Design', href: '#projects' },
  { label: 'Web Apps', href: '#projects' },
  { label: 'All Projects', href: '#projects' },
]

export const buildCards = [
  {
    id: 'websites',
    tone: 'pink',
    span: 'wide',
    title: 'Responsive websites',
    text: 'Clean layouts that hold up from a phone screen to a desktop — semantic HTML, modern CSS, and a mobile-first mindset from the first line.',
  },
  {
    id: 'web-apps',
    tone: 'violet',
    span: 'narrow',
    title: 'Web apps',
    text: 'Interactive pages wired up with JavaScript and React — filters, forms, dashboards, and small tools that respond instantly.',
  },
  {
    id: 'ui',
    tone: 'lime',
    span: 'narrow',
    title: 'UI experiments',
    text: 'Landing pages, hero sections, and component studies where I test spacing, colour, and motion before using them in bigger builds.',
  },
  {
    id: 'learning',
    tone: 'cyan',
    span: 'wide',
    title: 'Learning in public',
    text: 'Small practice builds and coursework projects — each one made to learn one new thing and, most importantly, to finish it properly.',
  },
]

export const skills = [
  { label: 'HTML', level: 'core' },
  { label: 'CSS', level: 'core' },
  { label: 'JavaScript', level: 'core' },
  { label: 'React', level: 'mid' },
  { label: 'Responsive Design', level: 'mid' },
  { label: 'Git & GitHub', level: 'mid' },
  { label: 'Tailwind CSS', level: 'mid' },
  { label: 'Figma', level: 'light' },
  { label: 'REST APIs', level: 'light' },
  { label: 'Node.js basics', level: 'light' },
  { label: 'Python', level: 'light' },
]

export const projects = [
  {
    id: 'featured',
    featured: true,
    badge: 'Featured project',
    title: 'Barangay Service Tracker',
    text: 'A web app for recording and following up on community service requests — from filing to completion. Includes status updates, search, and a simple admin view so nothing gets lost on paper.',
    tech: ['React', 'CSS', 'Local Storage'],
  },
  {
    id: 'expenses',
    title: 'Student Expense Tracker',
    text: 'A day-to-day budgeting tool with categories, monthly totals, and charts that make it obvious where the allowance went.',
    tech: ['JavaScript', 'Chart.js'],
  },
  {
    id: 'weather',
    title: 'Weather Now',
    text: 'A small weather dashboard that pulls live conditions from a public API and adapts its background to the current forecast.',
    tech: ['React', 'REST API'],
  },
  {
    id: 'schedule',
    title: 'Class Schedule Planner',
    text: 'A drag-friendly timetable that keeps classes, rooms, and reminders in one grid instead of three different notes apps.',
    tech: ['React', 'CSS Grid'],
  },
  {
    id: 'quiz',
    title: 'Flashcard Quiz',
    text: 'A study companion with decks, flip animations, and a score summary — built to make reviewing for exams a little less painful.',
    tech: ['JavaScript', 'HTML/CSS'],
  },
  {
    id: 'explorer',
    title: 'Movie Search Explorer',
    text: 'A practice build for working with external data — search any title, browse the results, and open a detail view without reloading the page.',
    tech: ['JavaScript', 'REST API', 'Responsive Design'],
  },
]

export const facts = [
  { label: 'Age', value: '20 years old' },
  { label: 'Birthday', value: 'November 29, 2005' },
  { label: 'Location', value: 'Brgy. 4, Tangub City' },
]
