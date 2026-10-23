import { motion } from 'motion/react';
import { User, Code, Sparkles, Workflow, CheckCircle } from 'lucide-react';
import { profileConfig } from '../data/profile';
import './About.css';

/**
 * About Component
 * 
 * Beginner React Guide:
 * - Highlights Umair Ali's story, learning focus, and technical values.
 * - Simple grid layout presenting 3 core focus pillars with Lucide icons.
 */
export default function About() {
  const pillars = [
    {
      icon: <Code size={22} className="pillar-icon" />,
      title: "Frontend Engineering",
      desc: "Committed to mastering modern React, clean component architecture, and responsive layouts that adapt seamlessly across devices."
    },
    {
      icon: <Sparkles size={22} className="pillar-icon" />,
      title: "Micro-Interactions & UX",
      desc: "Passionate about creating tactile user interfaces with thoughtful feedback, smooth transitions, and accessible design."
    },
    {
      icon: <Workflow size={22} className="pillar-icon" />,
      title: "AI & Workflow Automation",
      desc: "Building intelligent automation pipelines, AI lead triage, and document processing systems that save time and reduce manual toil."
    }
  ];

  return (
    <section className="about-section" id="about" aria-label="About Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-badge">
            <User size={14} />
            <span>My Journey</span>
          </div>
          <h2 className="section-title">
            About <span className="highlight-lime">{profileConfig.name}</span>
          </h2>
          <p className="section-description">
            An aspiring frontend developer combining modern web technologies with intelligent automation solutions.
          </p>
        </div>

        {/* Story & Pillars */}
        <div className="about-grid">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-story-card"
          >
            <h3>Crafting Digital Interfaces with Purpose</h3>
            <p>
              I am an aspiring frontend developer enthusiastic about the evolving web ecosystem. 
              My focus is on transforming conceptual ideas into performant, clean, and delightful user experiences 
              using React, modern JavaScript, and purposeful CSS.
            </p>
            <p>
              Beyond the visual interface, I enjoy exploring how AI workflows and automation can eliminate 
              repetitive tasks—from CRM lead enrichment to intelligent document parsing. I am constantly expanding 
              my skillset and eager to contribute to collaborative engineering teams.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle size={16} className="text-lime" />
                <span>Responsive & Mobile-First Design</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={16} className="text-lime" />
                <span>Modern React & Component Patterns</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={16} className="text-lime" />
                <span>Continuous Learning Mindset</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars List */}
          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="pillar-card"
              >
                <div className="pillar-icon-box">{pillar.icon}</div>
                <div className="pillar-content">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
