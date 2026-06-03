import React from 'react';
import './InstallationPage.css';
import Navbar from './components/Navbar';

const FEATURES = [
  'Context-aware imports',
  'ESM compatible',
  'Cross-framework support',
  'Configurable LLM providers',
  'Automated test validation & repair',
  'Simple CLI & flexible configuration'
]

const PREREQUISITES = [
  { label: 'Runtime', value: 'Node.js 18+ & npm 9+' },
  { label: 'Package type', value: 'ESM' },
  { label: 'TypeScript', value: 'Installed' },
  { label: 'Vitest', value: 'Installed' },
  { label: 'LLM provider', value: 'API Key available' },
  { label: 'Network', value: 'Outbound HTTPS to LLM provider' }
];

const INSTALLATION_STEPS = [
  { label: '1.) Installation', command: 'npm install -g @tst-studio/tst' },
  { label: '2.) Configuration', command: 'tst configuration --outFormat=sameLocation' },
  { label: '3.) Usage', command: 'tst generate < filename >' },
  { label: '4.) API key', command: 'API key is required in .env' }
];


const InstallationDetails = () => {
  return (
    <>
      <Navbar />
      {}
      <div className="hero">
        <div className="testscript-info glass-panel">
          <h2 className="testscript-title">TestScript</h2>
          <h3 className="testscript-description">
            Evaluates project code and quickly generates runnable, high-quality
            Vitest tests with minimal effort, for a safer development
            experience.
          </h3>

          <div className="tables-row">
            <div className="features-wrapper glass-panel">
              <h2 className="product-name">Key Features:</h2>
              <table className="features-table">
                <tbody>
                  {FEATURES.map((feature, index) => (
                    <tr key={index}>
                      <td>{feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="prereq-wrapper glass-panel">
              <h2 className="product-name">Prerequisites:</h2>
              <table className="prereq-table">
                <tbody>
                  {PREREQUISITES.map((prereq, index) => (
                    <tr key={index}>
                      <th>{prereq.label}</th>
                      <td>{prereq.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* INSTALLATION STEPS */}
            <div className="steps-wrapper glass-panel">
              <h2 className="product-name">Steps:</h2>
              <div className="inputs-grid">
                {INSTALLATION_STEPS.map((step, index) => (
                  <React.Fragment key={index}>
                    <span className="input-label">{step.label}</span>
                    <p>{step.command}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {}
          <iframe
            className="tutorial-video"
            src="https://www.youtube.com/embed/cSW7uQHNTJE?si=2OBw8i-JGx-5CJKT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default InstallationDetails;
