// Code-conduct.tsx — TestScript Code of Conduct Page
// File defines a dedicated page outlining community rules and expectations.

// ---------------------- IMPORTS ----------------------
import React from 'react';
// React core library. Required for all JSX components.

import './Code-conduct.css';
// Local stylesheet scoped to this page. Controls layout, colors, and branding.

import { useNavigate } from 'react-router-dom';
// Hook from React Router that allows programmatic navigation (imperative routing).

// ---------------------- COMPONENT ----------------------
const CodeConduct: React.FC = () => {
  const navigate = useNavigate();
  // Assign useNavigate() to variable → enables navigation via click events.

  return (
    <div className="conduct-page">
      {/* Root container with class "conduct-page". CSS defines dark gradient, flex layout. */}

      {/* ---------- NAV HEADER ---------- */}
      <nav className="conduct-navbar">
        {/* Top navbar container for logo + navigation links. */}

        <div className="nav-brand" onClick={() => navigate('/')}>
          {/* Brand section. Clickable → navigates back to homepage. */}
          <img
            src="/images/testscript-icon.webp"
            alt="TST Logo Banner"
            style={{ height: '2.5rem', width: 'auto' }}
            // Logo banner image. Fixed height = 2.5rem, auto width to maintain ratio.
          />
        </div>

        <ul className="nav-links">
          {/* Unordered list → each <li> acts as a nav link. Styled in CSS. */}
          <li onClick={() => navigate('/')}>Home</li>
          {/* Navigates to homepage. */}
          <li onClick={() => navigate('/about-team')}>About</li>
          {/* Navigates to About Team page. */}
          <li onClick={() => navigate('/docs')}>Docs</li>
          {/* Navigates to Documentation page. */}
          <li onClick={() => navigate('/installation-page')}>Installation</li>
          {/* Navigates to Installation page. */}
          <li onClick={() => navigate('/contact')}>Contact</li>
          {/* Navigates to Contact page. */}
        </ul>
      </nav>

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="conduct-container">
        {/* Main container for all textual content. Max-width + padding in CSS. */}

        <h1 className="conduct-title">Code of Conduct</h1>
        {/* Page title. Large text, glowing accent color. */}

        <p className="conduct-intro">
          At TestScript, we are committed to fostering a safe, inclusive, and
          respectful environment for everyone who participates in our community,
          whether online or in person.
        </p>
        {/* Introductory statement describing mission of inclusivity and safety. */}

        {/* SECTION: EXPECTED BEHAVIOR */}
        <section className="conduct-section">
          <h2 className="conduct-heading">Expected Behavior</h2>
          {/* Section heading styled with orange accent + glow. */}
          <ul className="conduct-list">
            {/* List of community expectations. Styled with bullet points. */}
            <li>Be respectful of differing opinions and experiences.</li>
            <li>Use welcoming and inclusive language.</li>
            <li>Collaborate in a constructive and positive manner.</li>
            <li>Focus on what is best for the community.</li>
            <li>Show empathy toward other participants.</li>
          </ul>
        </section>

        {/* SECTION: UNACCEPTABLE BEHAVIOR */}
        <section className="conduct-section">
          <h2 className="conduct-heading">Unacceptable Behavior</h2>
          <ul className="conduct-list">
            <li>Harassment, intimidation, or abusive behavior in any form.</li>
            <li>Discriminatory remarks based on race, gender, religion, or identity.</li>
            <li>Unwelcome sexual attention or inappropriate advances.</li>
            <li>Deliberate disruption of community events or discussions.</li>
            <li>Sharing private information without consent.</li>
          </ul>
          {/* Defines strict boundaries to protect the community. */}
        </section>

        {/* SECTION: ENFORCEMENT */}
        <section className="conduct-section">
          <h2 className="conduct-heading">Enforcement</h2>
          <p>
            Community leaders are responsible for clarifying and enforcing our
            standards of acceptable behavior. They may take appropriate corrective
            action, including warnings, temporary bans, or permanent removal from
            the community if necessary.
          </p>
          {/* Clarifies authority and potential consequences of violations. */}
        </section>

        {/* SECTION: REPORTING */}
        <section className="conduct-section">
          <h2 className="conduct-heading">Reporting Issues</h2>
          <p>
            If you experience or witness unacceptable behavior, please contact us
            at <a href="mailto:conduct@tststudios.com">conduct@tststudios.com</a>.
            All concerns will be reviewed promptly and treated confidentially.
          </p>
          {/* Provides reporting channel via email. Emphasizes confidentiality. */}
        </section>
      </div>
    </div>
  );
};

// ---------------------- EXPORT ----------------------
export default CodeConduct;
// Exports the component so router can map `/conduct` → CodeConduct page.
