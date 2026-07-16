import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'certificates', 'contact'];

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">Santhosh<span>.</span></a>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#resume" className="btn btn-ghost btn-sm">
            <span className="desktop-label">Resume</span>
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">Hire Me</a>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}