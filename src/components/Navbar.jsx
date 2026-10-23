import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profileConfig } from '../data/profile';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Beginner React Guide:
 * 1. 'isMenuOpen' state tracks mobile drawer open/close.
 * 2. 'isScrolled' state applies an enhanced backdrop blur when scrolled.
 * 3. 'handleNavClick': Handles reliable smooth navigation to in-page section IDs
 *    (#about, #projects, #certificates, #contact) while keeping standard href for accessibility.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to enhance navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when 'Escape' key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Robust smooth scrolling handler for anchor links
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a
          href="#"
          className="nav-logo"
          aria-label="Umair Ali Home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', ' ');
          }}
        >
          <span className="logo-text">{profileConfig.name}</span>
          <span className="logo-dot" aria-hidden="true" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-links">
            {profileConfig.navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get in Touch
            <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            aria-label="Mobile Navigation"
          >
            <div className="container mobile-menu-content">
              <ul className="mobile-nav-links">
                {profileConfig.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-cta-wrapper">
                <a
                  href="#contact"
                  className="mobile-cta-btn"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Get in Touch
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
