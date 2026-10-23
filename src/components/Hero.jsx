import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileConfig } from '../data/profile';
import './Hero.css';

/**
 * Hero Component
 * 
 * Beginner React Guide:
 * 1. 'avatarFailed' state: Automatically detects if 'public/profile.jpg' is available.
 *    If available, it renders the user's real portrait with a smooth electric-lime halo.
 *    If not yet placed in public/, it cleanly falls back to a stylish monogram avatar ("UA")
 *    so the site looks polished at all times.
 * 2. Accessible links: Icon-only buttons have descriptive aria-labels and security attributes.
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const [avatarFailed, setAvatarFailed] = useState(false);

  const handleScrollTo = (e, targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="Hero Section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photograph Box */}
          <motion.div variants={itemVariants} className="hero-avatar-wrapper">
            <div className="hero-avatar-frame">
              {!avatarFailed ? (
                <img
                  src={profileConfig.avatarUrl}
                  alt={`Professional portrait of ${profileConfig.name}`}
                  className="hero-avatar-img"
                  onError={() => setAvatarFailed(true)}
                />
              ) : (
                <div className="hero-avatar-fallback" aria-label="Portrait avatar">
                  <span className="hero-avatar-monogram">UA</span>
                </div>
              )}
              <div className="hero-avatar-border-glow" aria-hidden="true" />
              <span
                className="hero-avatar-status"
                title="Active & Open to Opportunities"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="hero-badge-wrapper">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              <span className="hero-badge-text">{profileConfig.status}</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="hero-title">
            Building digital experiences that{' '}
            <span className="hero-highlight">feel different.</span>
          </motion.h1>

          {/* Concise Introduction */}
          <motion.p variants={itemVariants} className="hero-bio">
            {profileConfig.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-actions">
            <a
              href="#projects"
              className="hero-btn-primary"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              <span>Explore My Work</span>
              <ArrowDown size={18} className="hero-btn-icon" />
            </a>

            <a
              href="#contact"
              className="hero-btn-secondary"
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div variants={itemVariants} className="hero-social-row">
            <span className="hero-social-label">Connect with me:</span>
            <div className="hero-social-links">
              <a
                href={profileConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hero-social-link"
                aria-label={`Visit ${profileConfig.name}'s GitHub Profile`}
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={profileConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hero-social-link"
                aria-label={`Visit ${profileConfig.name}'s LinkedIn Profile`}
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={profileConfig.socialLinks.email}
                target="_blank"
                rel="noreferrer noopener"
                className="hero-social-link"
                aria-label={`Send direct email to ${profileConfig.name} via Gmail`}
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
