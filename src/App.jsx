import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Skills from './Component/Skills';
import Experience from './Component/Experience';
import Projects from './Component/Projects';
import Services from './Component/Services';
import Certificates from './Component/Certificates';
import Contact from './Component/Contact';
import ScrollProgress from './Component/ScrollProgress';
import './style.css';

function App() {
  return (
    <>
      {/* GLOBAL ANTIGRAVITY BACKDROP */}
      <div className="backdrop">
        <div className="grid-layer"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}

export default App;