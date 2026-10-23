import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileConfig } from '../data/profile';
import './Contact.css';

/**
 * Contact Component
 * 
 * Central Email & Social Links:
 * 1. 'handleCopyEmail': Copies 'profileConfig.email' directly into clipboard and displays
 *    an immediate visual success state ('Copied!' badge with Check icon).
 * 2. 'Send Email': Native 'mailto:' anchor directed straight to 'profileConfig.email'.
 * 3. Accessible links: Clear descriptive aria-labels and secure new-tab attributes.
 */
export default function Contact() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopyEmail = () => {
    // Strip any "mailto:" prefix if present
    const cleanEmail = profileConfig.email.replace(/^mailto:/i, '').trim();
    navigator.clipboard.writeText(cleanEmail);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2200);
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Let's Connect</span>
          </div>
          <h2 className="section-title">
            Get in <span className="highlight-lime">Touch</span>
          </h2>
          <p className="section-description">
            Have an internship opening, junior frontend role, or an automation project in mind? Reach out directly and let's discuss.
          </p>
        </div>

        {/* Main Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="contact-card-main"
        >
          {/* Email Action Box */}
          <div className="contact-email-box">
            <div className="contact-email-icon" aria-hidden="true">
              <Mail size={28} />
            </div>
            <div className="contact-email-details">
              <span className="contact-email-label">Direct Email</span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=umairalih7%40gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-email-address"
                aria-label="Compose email to umairalih7@gmail.com in Gmail (opens in a new tab)"
              >
                {profileConfig.email}
              </a>
            </div>
            <div className="contact-email-actions">
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`contact-copy-btn ${hasCopied ? 'copied' : ''}`}
                aria-label={`Copy email address ${profileConfig.email} to clipboard`}
              >
                {hasCopied ? (
                  <>
                    <Check size={16} className="text-lime" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=umairalih7%40gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-send-btn"
                aria-label="Compose email to umairalih7@gmail.com in Gmail (opens in a new tab)"
              >
                <Send size={15} />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="contact-social-grid">
            <a
              href={profileConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer noopener"
              className="contact-channel-card"
              aria-label={`Visit ${profileConfig.name}'s GitHub Profile (opens in a new tab)`}
            >
              <div className="channel-icon-box" aria-hidden="true">
                <GithubIcon size={22} />
              </div>
              <div className="channel-text">
                <h4>GitHub Profile</h4>
                <p>Browse frontend repositories & n8n workflows</p>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" aria-hidden="true" />
            </a>

            <a
              href={profileConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="contact-channel-card"
              aria-label={`Visit ${profileConfig.name}'s LinkedIn Network (opens in a new tab)`}
            >
              <div className="channel-icon-box" aria-hidden="true">
                <LinkedinIcon size={22} />
              </div>
              <div className="channel-text">
                <h4>LinkedIn Network</h4>
                <p>Connect and message professionally</p>
              </div>
              <ArrowUpRight size={18} className="channel-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Status Footer Note */}
          <div className="contact-footer-note">
            <span className="live-status-dot" aria-hidden="true" />
            <span>Currently considering internships, junior frontend roles, and n8n automation opportunities.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
