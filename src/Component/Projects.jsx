export default function Projects() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const portfolioProjects = [
    {
      title: "Scanner Desktop App",
      description: "A robust desktop application built for document scanning and management.",
      techStack: ["Electron", "Angular", "TypeScript"]
    },
    {
      title: "Enterprise Management Systems",
      description: "Developed and deployed multiple systems including Production Monitoring, Melting, and Quality Management Systems (QMS).",
      techStack: ["Web", "API Integration", "PDF Generation"]
    },
    {
      title: "JSIR & PIR Data Integration",
      description: "Integrated new APIs for secure data saving and submission workflows.",
      techStack: ["Node.js", "REST APIs"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{project.title}</h3>
              <p style={{marginTop: "10px", marginBottom: "15px"}}>{project.description}</p>
              <div className="tech-tags">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}