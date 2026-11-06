import { skills } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="tile skills-tile" data-reveal>
          <SectionHead color="violet">Technologies I work with</SectionHead>
          <p className="lede skills-lede">
            No percentages — just what I actually reach for, sized by how often I
            use it.
          </p>

          <ul className="pill-cloud" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill.label} className={`pill ${skill.level}`}>
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
