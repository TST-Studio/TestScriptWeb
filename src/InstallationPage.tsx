// ---------------------- INSTALLATION PAGE ----------------------
// InstallationPage.tsx — TestScript Installation Guide with Dominion Navbar

// ---------------------- IMPORTS ----------------------
import './InstallationPage.css'; // Page-specific styles
import React from 'react';        // Core React library
import Navbar from './components/Navbar'; // 🔥 Global Dominion Navbar

// ---------------------- COMPONENT ----------------------
const InstallationDetails: React.FC = () => {
  return (
    <>
      {/* ---------- GLOBAL NAVBAR ---------- */}
      <Navbar />

      {/* ---------- HERO CONTAINER ---------- */}
      <div className="hero">
        {/* ---------- TESTSCRIPT INFO ---------- */}
        <div className="testscript-info glass-panel">
          <h2 className="testscript-title">TestScript</h2>
          <h3 className="testscript-description">
            Evaluates project code and quickly generates runnable, high-quality
            Vitest tests with minimal effort, for a safer development
            experience.
          </h3>

          {/* ---------- TABLES ROW ---------- */}
          <div className="tables-row">
            {/* FEATURES TABLE */}
            <div className="features-wrapper glass-panel">
              <h2 className="product-name">Key Features:</h2>
              <table className="features-table">
                <tbody>
                  <tr><td>Repo-aware imports</td></tr>
                  <tr><td>Works with NodeNext/ESM</td></tr>
                  <tr><td>Supports React &amp; Express</td></tr>
                  <tr><td>Multiple Persona leverage</td></tr>
                  <tr><td>Post-process &amp; Self-heal to return runnable tests</td></tr>
                  <tr><td>CLI + Config (Current provider: OpenAI)</td></tr>
                </tbody>
              </table>
            </div>

            {/* PREREQUISITES TABLE */}
            <div className="prereq-wrapper glass-panel">
              <h2 className="product-name">Prerequisites:</h2>
              <table className="prereq-table">
                <tbody>
                  <tr><th>Runtime</th><td>Node.js 18+ &amp; npm 9+</td></tr>
                  <tr><th>Package type</th><td>ESM</td></tr>
                  <tr><th>TypeScript</th><td>Installed</td></tr>
                  <tr><th>Vitest</th><td>Installed</td></tr>
                  <tr><th>LLM provider</th><td>API Key available</td></tr>
                  <tr><th>Network</th><td>Outbound HTTPS to LLM provider</td></tr>
                </tbody>
              </table>
            </div>

            {/* INSTALLATION STEPS */}
            <div className="steps-wrapper glass-panel">
              <h2 className="product-name">Steps:</h2>
              <div className="inputs-grid">
                <span className="input-label">1.) Installation</span>
                <p>npm install -g @tst-studio/tst</p>

                <span className="input-label">2.) Configuration</span>
                <p>tst configuration --outFormat=sameLocation</p>

                <span className="input-label">3.) Usage</span>
                <p>tst generate &lt; filename &gt;</p>

                <span className="input-label">4.) API key</span>
                <p>API key is required in .env</p>
              </div>
            </div>
          </div>

          {/* ---------- VIDEO DEMO ---------- */}
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

// ---------------------- EXPORT ----------------------
export default InstallationDetails;
