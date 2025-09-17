// Code-conduct.tsx — TestScript Code of Conduct Page

// ---------------------- IMPORTS ----------------------
import React from 'react'; // React core library
import './Code-conduct.css'; // Local stylesheet
import { useNavigate } from 'react-router-dom'; // Hook for navigation

// ---------------------- COMPONENT ----------------------
const CodeConduct: React.FC = () => {
  const navigate = useNavigate(); // Used to programmatically route

  return (
    <div className="conduct-page">

      {/* ---------- NAV HEADER ---------- */}
      <nav className="conduct-navbar">
        <div className="nav-brand" onClick={() => navigate('/')}>
          <img
            src="/images/testscript-icon.webp"
            alt="TST Logo Banner"
            style={{ height: '2.5rem', width: 'auto' }}
          />
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about-team')}>About</li>
          <li onClick={() => navigate('/docs')}>Docs</li>
          <li onClick={() => navigate('/installation-page')}>Installation</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </nav>

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="conduct-container">
        <h1 className="conduct-title">Code of Conduct</h1>
        <p className="conduct-intro">
          At TestScript, we are committed to fostering a safe, inclusive, and
          respectful environment for everyone who participates in our community,
          whether online or in person.
        </p>

        {/* SECTION: EXPECTED BEHAVIOR */}
        <section className="conduct-section">
          <h2 className="conduct-heading">Expected Behavior</h2>
          <ul className="conduct-list">
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
        </section>

        {/* SECTION: REPORTING */}
        <section className="conduct-section">
          <h2 className="conduct-heading">Reporting Issues</h2>
          <p>
            If you experience or witness unacceptable behavior, please contact us
            at <a href="mailto:conduct@tststudios.com">conduct@tststudios.com</a>.
            All concerns will be reviewed promptly and treated confidentially.
          </p>
        </section>
      </div>
    </div>
  );
};

// ---------------------- EXPORT ----------------------
export default CodeConduct;
