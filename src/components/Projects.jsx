import { projects, repos } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead color="cyan">Projects</SectionHead>
        <p className="lede">
          Coursework, personal builds, and research — the work behind what I&apos;ve
          learned so far.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              data-reveal
              className={`tile project-card ${project.featured ? 'featured' : ''}`}
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

          <article className="tile github-tile" data-reveal>
            <div className="github-head">
              <div>
                <h3>On GitHub</h3>
                <p>Source code and live demos for my web work.</p>
              </div>
              <a
                className="github-profile"
                href="https://github.com/nadinelyn6-gif"
                target="_blank"
                rel="noreferrer"
              >
                @nadinelyn6-gif <span aria-hidden="true">↗</span>
              </a>
            </div>

            <ul className="repo-list">
              {repos.map((repo) => (
                <li className="repo" key={repo.name}>
                  <div className="repo-main">
                    <div className="repo-name">
                      {repo.name}
                      <span className="repo-lang">{repo.tech.join(' · ')}</span>
                    </div>
                    <p className="repo-desc">{repo.description}</p>
                  </div>
                  <div className="repo-links">
                    <a
                      href={repo.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${repo.name} source code on GitHub`}
                    >
                      Code <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href={repo.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${repo.name} live demo`}
                    >
                      Live <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
