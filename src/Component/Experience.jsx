export default function Experience() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5; 
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="experience section-padding" id="experience">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Career Path</span>
          <h2>Professional Experience</h2>
          <p>Building scalable systems and modern desktop applications.</p>
        </div>

        <div className="exp-grid">
          <div 
            className="exp-card glass" 
            style={{ transition: 'transform 0.15s ease-out' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="exp-meta">
              <h3>Software Developer</h3>
              <div className="exp-role">Enterprise Systems & Applications</div>
              <div className="exp-date">Present</div>
            </div>
            <ul className="exp-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span>Engineered and delivered a comprehensive <strong>Scanner Desktop Application</strong> utilizing Angular, Electron, and TypeScript.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span>Successfully completed over 8 enterprise-grade projects encompassing <strong>Production Monitoring, Melting, QMS, Costing, and SMES</strong>.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span>Integrated robust <strong>JSIR and PIR APIs</strong> to facilitate secure data submission and saving features across platforms.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span>Architected complex data alignment layouts and dynamic <strong>PDF generation</strong> workflows for enterprise software.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}