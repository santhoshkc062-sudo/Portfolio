export default function Skills() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const skillCategories = [
    { 
      title: "Frontend & Web", 
      skills: [
        { 
          name: "Angular", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.5l5.5 12h-2.5l-1.5-3.5h-3L9 18.5H6.5L12 6.5z"/></svg> 
        },
        { 
          name: "React", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4"/></svg> 
        },
        { 
          name: "TypeScript", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h16v16H4V4zm9.5 11.5c.3.5.8.8 1.4.8 1.1 0 1.6-.7 1.6-1.5 0-1.7-2.6-1.5-2.6-3 0-.6.4-1.2 1.3-1.2.7 0 1.2.3 1.5.8l1.1-.9C17 9.4 16 9 14.8 9c-1 0-1.8.6-1.8 1.6 0 1.6 2.6 1.4 2.6 3 0 .7-.6 1.1-1.3 1.1-.9 0-1.5-.4-1.9-1l-1.1 1zM9.9 10.3h2.3V9H6.9v1.3h2.3v6.3h1.3v-6.3z"/></svg> 
        },
        { 
          name: "HTML/CSS", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> 
        }
      ] 
    },
    { 
      title: "Desktop & Backend", 
      skills: [
        { 
          name: "Electron", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(-45 12 12)"/></svg> 
        },
        { 
          name: "Node.js", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2L2.7 7.4v9.2L12 22l9.3-5.4V7.4L12 2zm6.6 13.5l-6.6 3.8-6.6-3.8v-7.6l6.6-3.8 6.6 3.8v7.6z"/></svg> 
        },
        { 
          name: "API Integration", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg> 
        }
      ] 
    },
    { 
      title: "Tools & Practices", 
      skills: [
        { 
          name: "Git", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 15v-6"></path><path d="M6 9v6"></path><path d="M18 15A6 6 0 0 0 12 9H6"></path></svg> 
        },
        { 
          name: "System Architecture", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> 
        },
        { 
          name: "Clean Code", 
          icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z"></path></svg> 
        }
      ] 
    }
  ];

  return (
    <section id="skills" className="section-padding bg-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Expertise</span>
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card glass"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{category.title}</h3>
              <ul className="tech-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="tech-tag"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    {skill.icon}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}