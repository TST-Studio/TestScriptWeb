
import React from 'react';
import './Code-conduct.css';
import Navbar from './Navbar';

const CodeConduct: React.FC = () => {
  return (
    <div className="hero">
      <Navbar />

      <div className="conduct-page">
        <div className="conduct-container">
          <h1 className="conduct-title">Code of Conduct</h1>
          <p className="conduct-intro">
            At TestScript, we are committed to fostering a safe, inclusive, and
            respectful environment for everyone who participates in our community,
            whether online or in person.
          </p>

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

          <section className="conduct-section">
            <h2 className="conduct-heading">Enforcement</h2>
            <p>
              Community leaders are responsible for clarifying and enforcing our
              standards of acceptable behavior. They may take appropriate corrective
              action, including warnings, temporary bans, or permanent removal from
              the community if necessary.
            </p>
          </section>

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

export default CodeConduct;
