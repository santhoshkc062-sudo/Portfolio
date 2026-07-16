import profileImg from '../assets/Demo.jpg';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Discover</span>
          <h2>About Me</h2>
        </div>

        <div className="about-visual">
            <img 
              src={profileImg} 
              alt="Santhosh K C" 
              className="glass" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} 
            />
          </div>
        <div className="about-content glass" style={{ padding: '2rem' }}>
          <p>
            I am a Software Developer with a strong focus on building robust desktop and web applications. 
            I specialize in creating clean, scalable architectures and intuitive user interfaces. 
          </p>
          <br/>
          <p>
            Over the course of my career, I've successfully delivered over 8 enterprise-level projects 
            spanning Production Monitoring, Quality Management Systems (QMS), Costing, and SMES. 
            I thrive on tackling complex technical challenges, whether that involves intricate data 
            alignment for PDF generation layouts or integrating custom APIs for secure data submissions.
          </p>
        </div>
      </div>
    </section>
  );
}