import { useEffect, useState } from 'react'
import { facts, profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timer = window.setTimeout(() => setCopied(false), 2200)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard access can be blocked — the mailto link still works.
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="tile status-tile" data-reveal>
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            Open to opportunities
          </div>
          <h2 className="status-heading">
            A student from Tangub City, building my skills one project at a time.
          </h2>
          <p className="lede">
            Open to internships, freelance work, and collaborations on anything
            interesting.
          </p>

          <dl className="facts">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="tile contact-tile" data-reveal>
          <h2>Let&apos;s talk about your project.</h2>
          <p className="lede">
            Reach out directly — I check my inbox regularly.
          </p>

          <div className="contact-links">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <span aria-hidden="true">✉</span> {profile.email}
            </a>
            <span className="contact-place">
              <span aria-hidden="true">📍</span> {profile.location}, Philippines
            </span>
          </div>

          <div className="contact-actions">
            <button type="button" className="btn btn-primary" onClick={copyEmail}>
              {copied ? 'Copied!' : 'Copy email'}
            </button>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
