// Contact.tsx — Dominion-ready Contact Page with Dropdown Nav

// ---------------------- IMPORTS ----------------------
import React, { useState } from 'react';
// Imports React core library.
// useState hook manages local state (dropdown open/close).

import '/src/components/contact.css';
// Imports page-specific CSS for consistent styling.

import { FaEnvelope, FaGithub, FaBook, FaBars, FaTimes } from 'react-icons/fa';
// Imports icons from react-icons library:
// - FaEnvelope: mail icon
// - FaGithub: GitHub logo
// - FaBook: book/blog icon
// - FaBars: hamburger menu icon
// - FaTimes: close (X) icon

import { Link } from 'react-router-dom';
// Imports Link component for client-side navigation (no reloads).

// ---------------------- NAV LINKS ----------------------
const navLinks = [
  { name: 'Home', path: '/' },                 // Root route → homepage
  { name: 'Installation', path: '/installation-page' }, // Installation guide
  { name: 'Docs', path: '/docs' },             // Documentation page
  { name: 'Conduct', path: '/conduct' },       // Code of Conduct page
  { name: 'About', path: '/about-team' },      // About the team
];
// Centralized nav menu items → easily extended/edited.

// ---------------------- COMPONENT ----------------------
const Contact: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // State variable: menuOpen = true → dropdown visible, false → hidden.

  return (
    <div className="contact-page">
      {/* ---------- NAVBAR ---------- */}
      <div
        style={{
          position: 'absolute',   // Navbar floats independently
          top: '1.25rem',         // Positioned down from top (20px ≈ 1.25rem)
          left: '1.25rem',        // Positioned right from left edge
          zIndex: 1000,           // High stacking context so always on top
        }}
      >
        {/* HAMBURGER / CLOSE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle open/close on click
          style={{
            background: 'transparent', // No button background
            border: 'none',            // Removes default border
            cursor: 'pointer',         // Pointer on hover
            color: '#00eaff',          // Neon cyan text/icon color
            fontSize: '1.75rem',       // Icon size
            textShadow: '0 0 0.5em #00eaff, 0 0 1.25em #00eaff', // Glow effect
            transition: 'transform 0.2s ease', // Smooth scale animation
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)';
            // On hover → scale up slightly
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            // On leave → reset scale
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
          {/* If menu is open → show X icon; else show hamburger */}
        </button>

        {/* DROPDOWN LINKS */}
        {menuOpen && (
          <div
            style={{
              marginTop: '0.75rem', // Spacing below button
              background: 'linear-gradient(180deg, #0f1115, #1b1f27)', // Dark gradient
              border: '0.0625em solid rgba(0,234,255,0.5)', // Cyan border
              borderRadius: '0.75rem', // Rounded corners
              padding: '1.25rem', // Inner padding
              boxShadow:
                '0 0 1.5625rem rgba(0,234,255,0.7), 0 0 3.125rem rgba(0,234,255,0.4)',
              // Neon glow aura
              animation: 'fadeSlide 0.4s ease', // Slide + fade animation
            }}
          >
            {navLinks.map((link, i) => (
              <div
                key={i} // Unique key for list rendering
                style={{
                  margin: '0.875rem 0',          // Vertical spacing
                  transition: 'transform 0.3s ease', // Smooth transform on hover
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    'translateX(0.5rem) scale(1.05)';
                  // Hover → slight slide right + scale up
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    'translateX(0) scale(1)';
                  // Reset transform
                }}
              >
                <Link
                  to={link.path} // Route destination
                  style={{
                    color: '#00eaff',       // Cyan text
                    textDecoration: 'none', // Remove underline
                    fontWeight: 700,        // Bold font
                    fontSize: '1.125rem',   // Slightly larger
                    letterSpacing: '0.0625em', // Spaced-out letters
                    textShadow:
                      '0 0 0.625rem #00eaff, 0 0 1.25rem #00eaff, 0 0 2.5rem #00eaff',
                    // Multi-layer neon glow
                  }}
                  onClick={() => setMenuOpen(false)}
                  // Clicking link closes dropdown
                >
                  {link.name}
                  {/* Render visible label (Home, Docs, etc.) */}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------- HEADING ---------- */}
      <h1>Contact Us</h1>
      {/* Page title */}

      {/* ---------- IMAGE ---------- */}
      <div className="contact-image">
        <img src="/images/testscript-logo-1.png" alt="Contact Visual" />
        {/* Decorative image or logo */}
      </div>

      {/* ---------- PARAGRAPHS ---------- */}
      <p className="contact-contribute">
        TestScript is an open-source project built for developers, by developers.
        We welcome contributors who want to shape the future of testing automation —
        whether through code, documentation, or creative ideas. By joining us, you’re
        not just contributing — you’re helping build tools that empower the developer
        community worldwide.
      </p>
      {/* Contribution statement → explains mission and call for community help */}

      <p className="contact-intro">
        Got questions, ideas, or want to contribute? Reach out below.
      </p>
      {/* Intro paragraph → invites engagement */}

      {/* ---------- CONTACT LINKS ---------- */}
      <div className="contact-links">
        <div className="contact-link">
          <FaEnvelope className="contact-icon" />
          {/* Envelope icon */}
          <a href="mailto:team@tststudio.com" target="_blank" rel="noopener noreferrer">
            team@tststudios.com
          </a>
        </div>
        <div className="contact-link">
          <FaGithub className="contact-icon" />
          {/* GitHub icon */}
          <a href="https://github.com/TST-Studio" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
        <div className="contact-link">
          <FaBook className="contact-icon" />
          {/* Blog/book icon */}
          <a href="https://medium.com/@lauraschlueter/ill-write-the-unit-tests-later-2b89b43a3264" target="_blank" rel="noopener noreferrer">
            Visit Our Blog
          </a>
        </div>
      </div>
      {/* Links section → contact channels with icons */}

      {/* ---------- FORM ---------- */}
      <form
        className="contact-form"
        action="https://formspree.io/f/yourFormID"
        // Formspree endpoint — replace with live ID for production
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        {/* Name field */}

        <input type="email" name="email" placeholder="Your Email" required />
        {/* Email field */}

        <textarea name="message" placeholder="Your Message" required />
        {/* Message field */}

        <button type="submit">Send</button>
        {/* Submit button */}
      </form>
    </div>
  );
};

// ---------------------- EXPORT ----------------------
export default Contact;
// Exports Contact component so router can render at "/contact".
