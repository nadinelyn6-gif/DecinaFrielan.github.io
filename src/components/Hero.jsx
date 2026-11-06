import { profile } from '../data.js'

const orbitIcons = [
  { label: 'HTML', className: 'html' },
  { label: 'CSS', className: 'css' },
  { label: 'JS', className: 'js' },
  { label: 'REACT', className: 'php' },
  { label: 'GIT', className: 'sql' },
  { label: 'UI', className: 'py' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-intro">
          <span className="eyebrow-glow">{profile.availability}</span>
          <h1>
            Hi, I&apos;m {profile.shortName} — I build{' '}
            <span className="glow-word">apps and websites</span> that solve real
            problems.
          </h1>
          <p>
            I&apos;m a 20-year-old Computer Science student from Brgy. 4, Tangub
            City. I build things end to end — from Flutter apps backed by Firebase
            and SQLite to PHP/MySQL systems and REST APIs — and I&apos;m always
            working on the next one.
          </p>

          <ul className="hero-facts" aria-label="Quick facts">
            <li>{profile.age} years old</li>
            <li>Born {profile.birthday}</li>
            <li>{profile.location}</li>
          </ul>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s talk
            </a>
          </div>
        </div>

        <div className="hero-photo-tile">
          {orbitIcons.map((icon) => (
            <span key={icon.label} className={`orbit-icon ${icon.className}`}>
              {icon.label}
            </span>
          ))}

          <div className="avatar-frame">
            <div className="avatar-inner">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="420"
                height="420"
              />
            </div>
          </div>

          <div className="photo-caption">
            {profile.role} · Tangub City
          </div>
        </div>
      </div>
    </section>
  )
}
