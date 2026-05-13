// ---------------------- CODE OF CONDUCT PAGE ----------------------
// Purpose: Static informational page defining community expectations and enforcement.
// Design: Reuses global layout (Navbar + hero wrapper) for consistency across the app.

// ---------------------- IMPORTS ----------------------
import React from 'react'; // Core React dependency for functional component rendering.
import './Code-conduct.css'; // Page-scoped styles to isolate layout and typography.
import Navbar from './Navbar'; // Shared navigation component to maintain global UX consistency.

// ---------------------- COMPONENT ----------------------
const CodeConduct: React.FC = () => {
  return (
    <div className="hero">
      {/* Global layout wrapper ensures consistent spacing/visual identity across pages */}
      <Navbar />

      {/* Main content container: structured for readability and semantic grouping */}
      <div className="conduct-page">
        <div className="conduct-container">

          {/* Page header establishes context and purpose for the user */}
          <h1 className="conduct-title">Code of Conduct</h1>
          <p className="conduct-intro">
            At TestScript, we are committed to fostering a safe, inclusive, and
            respectful environment for everyone who participates in our community,
            whether online or in person.
          </p>

          {/* Section: Defines expected norms to guide user behavior proactively */}
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

          {/* Section: Clearly defines boundaries to prevent ambiguity in enforcement */}
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

          {/* Section: Explains governance model and how rules are enforced */}
          <section className="conduct-section">
            <h2 className="conduct-heading">Enforcement</h2>
            <p>
              Community leaders are responsible for clarifying and enforcing our
              standards of acceptable behavior. They may take appropriate corrective
              action, including warnings, temporary bans, or permanent removal from
              the community if necessary.
            </p>
          </section>

          {/* Section: Provides escalation path for issues — critical for trust and accountability */}
          <section className="conduct-section">
            <h2 className="conduct-heading">Reporting Issues</h2>
            <p>
              If you experience or witness unacceptable behavior, please contact us
              at <a href="mailto:conduct@tst-studio.com">conduct@tst-studio.com</a>.
              All concerns will be reviewed promptly and treated confidentially.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

// ---------------------- EXPORT ----------------------
// Export as default to allow simple route-level import
export default CodeConduct;
