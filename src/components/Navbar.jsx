import { useEffect, useRef, useState } from 'react'
import { navLinks, profile, projectMenu } from '../data.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close the projects dropdown on outside click or Escape.
  useEffect(() => {
    function onPointerDown(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  // Don't leave the page scrollable behind an open mobile menu.
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="nav" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeAll}>
            <span className="logo-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="logo-name">{profile.name}</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeAll}>
              Home
            </a>
            <a href="#build" onClick={closeAll}>
              What I Build
            </a>
            <a href="#skills" onClick={closeAll}>
              Skills
            </a>

            <div className="nav-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`dropdown-btn ${dropdownOpen ? 'open' : ''}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((value) => !value)}
              >
                Projects <span className="arrow" aria-hidden="true">&#9660;</span>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {projectMenu.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={closeAll}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" onClick={closeAll}>
              Contact
            </a>

            <a className="btn btn-primary nav-cta-mobile" href="#contact" onClick={closeAll}>
              Get in touch
            </a>
          </div>

          <a className="btn btn-primary nav-cta" href="#contact">
            Get in touch
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  )
}
