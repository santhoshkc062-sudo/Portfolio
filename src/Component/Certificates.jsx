export default function Certificates() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const certs = [
    { title: "Advanced Angular Development", issuer: "Tech Institute", date: "2025" },
    { title: "Electron Desktop Mastery", issuer: "Development Academy", date: "2024" },
    { title: "Enterprise API Integration", issuer: "CodeCamp", date: "2024" }
  ];

  return (
    <section className="certificates section-padding bg-alt" id="certificates">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Credentials</span>
          <h2>Certifications</h2>
        </div>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card glass"
              style={{ transition: 'transform 0.2s ease-out' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h4>{cert.title}</h4>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}