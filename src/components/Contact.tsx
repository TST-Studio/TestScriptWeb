// Contact.tsx — Dominion-ready Contact Page with Dropdown Nav

// ---------------------- IMPORTS ----------------------
import React, { useState } from 'react'; // React core + state management
import '/src/components/contact.css'; // Page-specific stylesheet
import { FaEnvelope, FaGithub, FaBook, FaBars, FaTimes } from 'react-icons/fa';
// Icons: mail, GitHub, blog, menu bars, close X
import { Link } from 'react-router-dom'; // Router link navigation

// ---------------------- NAV LINKS ----------------------
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Installation', path: '/installation-page' },
  { name: 'Docs', path: '/docs' },
  { name: 'Conduct', path: '/conduct' },
  { name: 'About', path: '/about-team' },
];

// ---------------------- COMPONENT ----------------------
const Contact: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // menuOpen → toggles dropdown visibility

  return (
    <div className="contact-page">
      {/* ---------- NAVBAR ---------- */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem', // 20px → 1.25rem
          left: '1.25rem',
          zIndex: 1000,
        }}
      >
        {/* HAMBURGER / CLOSE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#00eaff',
            fontSize: '1.75rem',
            textShadow: '0 0 0.5em #00eaff, 0 0 1.25em #00eaff',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* DROPDOWN LINKS */}
        {menuOpen && (
          <div
            style={{
              marginTop: '0.75rem',
              background: 'linear-gradient(180deg, #0f1115, #1b1f27)',
              border: '0.0625em solid rgba(0,234,255,0.5)',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              boxShadow:
                '0 0 1.5625rem rgba(0,234,255,0.7), 0 0 3.125rem rgba(0,234,255,0.4)',
              animation: 'fadeSlide 0.4s ease',
            }}
          >
            {navLinks.map((link, i) => (
              <div
                key={i}
                style={{
                  margin: '0.875rem 0',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    'translateX(0.5rem) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    'translateX(0) scale(1)';
                }}
              >
                <Link
                  to={link.path}
                  style={{
                    color: '#00eaff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    letterSpacing: '0.0625em',
                    textShadow:
                      '0 0 0.625rem #00eaff, 0 0 1.25rem #00eaff, 0 0 2.5rem #00eaff',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------- HEADING ---------- */}
      <h1>Contact Us</h1>

      {/* ---------- IMAGE ---------- */}
      <div className="contact-image">
        <img src="/images/testscript-logo-1.png" alt="Contact Visual" />
      </div>

      {/* ---------- PARAGRAPHS ---------- */}
      <p className="contact-contribute">
        TestScript is an open-source project built for developers, by developers.
        We welcome contributors who want to shape the future of testing automation —
        whether through code, documentation, or creative ideas. By joining us, you’re
        not just contributing — you’re helping build tools that empower the developer
        community worldwide.
      </p>

      <p className="contact-intro">
        Got questions, ideas, or want to contribute? Reach out below.
      </p>

      {/* ---------- CONTACT LINKS ---------- */}
      <div className="contact-links">
        <div className="contact-link">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:team@tststudio.com" target="_blank" rel="noopener noreferrer">
            team@tststudios.com
          </a>
        </div>
        <div className="contact-link">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/TST-Studio" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="contact-link">
          <FaBook className="contact-icon" />
          <a href="https://medium.com/@lauraschlueter/ill-write-the-unit-tests-later-2b89b43a3264" target="_blank" rel="noopener noreferrer">
            Visit Our Blog
          </a>
        </div>
      </div>

      {/* ---------- FORM ---------- */}
      <form
        className="contact-form"
        action="https://formspree.io/f/yourFormID"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
