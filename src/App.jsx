import Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { profileConfig } from './data/profile';
import './App.css';

/**
 * App Root Component
 * 
 * Beginner React Guide:
 * Here we assemble all the distinct modular sections of Umair's portfolio:
 * - <Spotlight />: Cursor-following ambient electric-lime glow.
 * - <Navbar />: Sticky navigation with smooth scrolling and mobile drawer.
 * - <Hero />: High-impact introduction, status badge, and primary CTAs.
 * - <About />: Story, focus areas, and development pillars.
 * - <Projects />: Tabbed showcase of AI automation pipelines & frontend web apps.
 * - <Certificates />: Continuous learning milestones and verifiable credentials.
 * - <Contact />: Functional email action cards, copy-to-clipboard, and social links.
 */
function App() {
  return (
    <div className="app-wrapper">
      {/* Background Engineering Grid with Radial Mask */}
      <div className="bg-grid" aria-hidden="true" />

      {/* Interactive Ambient Electric-Lime Spotlight */}
      <Spotlight />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer-bar">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} {profileConfig.name}. Built with React, Vite & Motion.</p>
          <p className="footer-subtext">Designed with modern dark aesthetics & electric-lime accents.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
