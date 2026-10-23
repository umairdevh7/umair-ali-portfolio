import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ExternalLink, FileCheck2, Maximize2, X } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import './Certificates.css';

/**
 * Certificates Component
 * 
 * Beginner React Guide:
 * 1. 'selectedCert': Tracks which certificate is currently clicked to display in a full-size modal.
 * 2. 'useEffect': Closes modal on Escape key press.
 * 3. Conditional Image Rendering: If 'cert.image' is provided, it shows a high-res thumbnail with zoom.
 *    If not, it displays a themed credential badge.
 */
export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section className="certificates-section" id="certificates" aria-label="Certificates Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials & Learning</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="highlight-lime">Milestones</span>
          </h2>
          <p className="section-description">
            Continuous learning milestones in frontend web development, modern JavaScript, and workflow automation.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cert-card"
            >
              {/* Optional Certificate Image Preview */}
              {cert.image ? (
                <div
                  className="cert-img-wrapper"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge certificate: ${cert.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedCert(cert);
                    }
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`Certificate preview for ${cert.title}`}
                    className="cert-img"
                    loading="lazy"
                  />
                  <div className="cert-img-overlay">
                    <Maximize2 size={18} />
                    <span>View Certificate</span>
                  </div>
                </div>
              ) : null}

              {/* Card Header Icon & Date */}
              <div className="cert-top-bar">
                <div className="cert-icon-wrapper">
                  <FileCheck2 size={22} className="cert-award-icon" />
                </div>
                <div className="cert-date">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              {/* Description */}
              <p className="cert-desc">{cert.description}</p>

              {/* Covered Skills */}
              <div className="cert-skills">
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Credential Link or Placeholder Note */}
              <div className="cert-action-row">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cert-link-btn"
                    aria-label={`View official credential for ${cert.title}`}
                  >
                    <span>View Credential / PDF</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="cert-placeholder-tag">
                    Image & link configurable in <code>certificates.js</code>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full-Size Certificate Inspection */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={22} />
              </button>
              <div className="cert-modal-body">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-img"
                />
                <div className="cert-modal-footer">
                  <h4>{selectedCert.title}</h4>
                  <p>{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
