import { projects } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead color="cyan">Projects</SectionHead>
        <p className="lede">
          A mix of coursework, personal builds, and experiments made to figure out
          how something works.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              data-reveal
              className={`tile project-card ${project.featured ? 'featured' : ''} ${
                project.id === 'explorer' ? 'full' : ''
              }`}
            >
              {project.badge && (
                <span className="flagship-badge">{project.badge}</span>
              )}
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <ul className="tech-tags" aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => (
                  <li key={tech} className="tech-tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
