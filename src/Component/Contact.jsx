export default function Contact() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4; 
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>Available for new opportunities and software development projects.</p>
        </div>

        <div className="contact-grid">
          <div 
            className="contact-info-card glass"
            style={{ transition: 'transform 0.15s ease-out' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="contact-info-item">
              <div className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">santhosh.kc@example.com</div>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-value">India</div>
              </div>
            </div>
          </div>

          <div 
            className="contact-form-card glass"
            style={{ transition: 'transform 0.15s ease-out' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '18px'}}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}