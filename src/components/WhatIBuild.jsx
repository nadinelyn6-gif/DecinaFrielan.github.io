import { buildCards } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function WhatIBuild() {
  return (
    <section id="build">
      <div className="wrap">
        <SectionHead color="pink">What I build</SectionHead>
        <p className="lede">
          Four kinds of work keep showing up in my projects — from full pages to
          weekend practice builds.
        </p>

        <div className="build-grid">
          {buildCards.map((card) => (
            <article
              key={card.id}
              data-reveal
              className={`tile build-card b-${card.tone} span-${card.span}`}
            >
              <span className={`swatch swatch-${card.tone}`} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
