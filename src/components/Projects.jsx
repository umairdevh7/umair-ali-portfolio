import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Workflow, ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/projects';
import './Projects.css';

/**
 * Projects Component
 * 
 * Displays Umair Ali's 6 Frontend projects and 3 n8n AI & Automation projects.
 * Features:
 * - Active category filter tabs: 'All', 'Frontend', 'AI & Automation'.
 * - Clean neutral card headers when screenshots are not yet supplied.
 * - Working Live Demo buttons for verified Vercel deployments.
 * - Repo links only rendered when valid URLs exist.
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'AI & Automation'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="projects-section" id="projects" aria-label="Projects Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-badge">
            <Layers size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Frontend & <span className="highlight-lime">AI Automation</span>
          </h2>
          <p className="section-description">
            Explore live deployed frontend web applications alongside intelligent workflow automation pipelines.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="project-tabs" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`project-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Frontend' && <Code2 size={16} />}
              {cat === 'AI & Automation' && <Workflow size={16} />}
              <span>{cat}</span>
              <span className="tab-count">
                {cat === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45 }}
                className="project-card"
              >
                {/* Project Image Preview (or neutral fallback banner) */}
                {project.image ? (
                  <div className="project-img-wrapper">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="project-img"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="project-neutral-banner" aria-hidden="true">
                    {project.category === 'Frontend' ? (
                      <Code2 size={28} className="banner-icon" />
                    ) : (
                      <Workflow size={28} className="banner-icon" />
                    )}
                    <span className="banner-label">{project.badge}</span>
                  </div>
                )}

                {/* Top Badge & Category */}
                <div className="card-top-row">
                  <span className="project-category-tag">
                    {project.category === 'Frontend' ? (
                      <Code2 size={13} className="category-icon" />
                    ) : (
                      <Workflow size={13} className="category-icon" />
                    )}
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="project-title">{project.title}</h3>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="project-btn demo-btn"
                      aria-label={`Visit live demo for ${project.title} (opens in a new tab)`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : null}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="project-btn repo-btn"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon size={16} />
                      <span>Code Repository</span>
                    </a>
                  ) : (
                    !project.demoUrl && (
                      <span className="project-status-note">
                        Internal Workflow • In Production
                      </span>
                    )
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
