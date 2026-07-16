import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/Demo.jpg';

const ROLES = ['Software Developer.', 'Frontend Engineer.', 'Desktop App Builder.'];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = ROLES[roleIndex.current];
      if (!deleting.current) {
        charIndex.current += 1;
        setTypedText(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          return 1200;
        }
      } else {
        charIndex.current -= 1;
        setTypedText(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % ROLES.length;
        }
      }
      return deleting.current ? 40 : 80;
    };

    let timeoutId;
    const loop = () => {
      const delay = tick();
      timeoutId = setTimeout(loop, delay);
    };
    loop();
    return () => clearTimeout(timeoutId);
  }, []);

// ... (keep all your existing imports and useEffect logic at the top)

  return (
    <section className="hero" id="home">
      {/* Note: The backdrop div has been removed from here! */}
      
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="status-dot"></span> Available for new opportunities
          </div>
          <h1>
            <span className="line">Hi, I'm Santhosh K C —</span>
            <span className="line gradient-text">Building Modern Web</span>
            <span className="line gradient-text">Applications &amp; Desktop Software</span>
          </h1>
          <div className="typing-line">
            <span className="prompt">&gt;</span> <span className="type-target">{typedText}</span>
            <span className="caret"></span>
          </div>
          <p className="lead">
            I'm a Software Developer passionate about creating modern web applications,
            desktop software, and intuitive user interfaces — solving real problems through
            clean code, scalable architecture, and thoughtful design.
          </p>
          <div className="hero-actions">
            <a href="#resume" className="btn btn-primary">Download Resume</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
          <div className="hero-socials">
            <a className="icon-btn" href="https://github.com/santhoshKC" target="_blank" rel="noopener" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>
            </a>
            <a className="icon-btn" href="https://linkedin.com/in/santhoshKC" target="_blank" rel="noopener" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
            </a>
            <a className="icon-btn" href="mailto:santhosh.kc@example.com" aria-label="Send an email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 6 12 13 2 6"/><path d="M2 6h20v12H2z"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal glass">
            <div className="terminal-bar">
              <span></span><span></span><span></span>
              <span className="terminal-title">santhosh.dev — zsh</span>
            </div>
            <div className="terminal-body">
              <div><span className="c-key">const</span> <span className="c-var">developer</span> = {'{'}</div>
              <div>&nbsp;&nbsp;name: <span className="c-str">'Santhosh K C'</span>,</div>
              <div>&nbsp;&nbsp;role: <span className="c-str">'Software Developer'</span>,</div>
              <div>&nbsp;&nbsp;stack: [<span className="c-str">'Angular'</span>, <span className="c-str">'Node.js'</span>, <span className="c-str">'Electron'</span>],</div>
              <div>&nbsp;&nbsp;focus: <span className="c-str">'clean, scalable code'</span>,</div>
              <div>&nbsp;&nbsp;<span className="c-fn">isAvailable</span>: () =&gt; <span className="c-key">true</span>,</div>
              <div>{'}'};</div>
              <div className="c-com">// building things that ship 🚀</div>
            </div>
          </div>
         <img 
            src={profileImg} 
            alt="Santhosh K C" 
            className="avatar-badge" 
            style={{ objectFit: 'cover', padding: 0 }} 
          />
        </div>
      </div>
      

      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="wheel"></div>
      </div>
    </section>
  );
}