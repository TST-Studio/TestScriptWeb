// ==========================================================
// ⚔️ Contact.tsx — Dominion Contact Page with Glass Panel
// ==========================================================

import React, { useState } from 'react';
import '/src/components/contact.css';
import { FaEnvelope, FaGithub, FaBook } from 'react-icons/fa';
import Navbar from './Navbar';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'SUCCESS' | 'ERROR' | 'LIMIT' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xrbawvwy', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else if (response.status === 402) {
      setStatus('LIMIT');
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="hero">
      <Navbar />

      <div className="contact-page">
        {/* 🔥 Glass Panel for Text + Links + Form */}
        <div className="glass-panel">
          <h1>Contact Us</h1>

          {/* ---------- IMAGE ---------- */}
          <div className="contact-image">
            <img src="/images/tst-banner.png" alt="Contact Visual" />
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
                team@tst-studio.com
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
              <a
                href="https://medium.com/@lauraschlueter/ill-write-the-unit-tests-later-2b89b43a3264"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Blog
              </a>
            </div>
          </div>

          {/* ---------- FORM ---------- */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send</button>
          </form>

          {/* ---------- STATUS MESSAGES ---------- */}
          {status === 'SUCCESS' && <p>🔥 Message sent! We’ll reply soon.</p>}
          {status === 'ERROR' && <p>⚠️ Something went wrong. Try again.</p>}
          {status === 'LIMIT' && (
            <p>⚠️ Form limit reached. Please email us directly at team@tst-studio.com</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
