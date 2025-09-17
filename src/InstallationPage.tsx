// InstallationPage.tsx — Responsive Navbar with Dropdown Column

// ---------------------- IMPORTS ----------------------
import './InstallationPage.css'; // Local CSS for page-specific styling
import React, { useState } from 'react'; // React core + useState hook
import { useNavigate } from 'react-router-dom'; // Hook for programmatic route navigation
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu open/close
import './index.css'; // Global CSS baseline

// ---------------------- COMPONENT ----------------------
const InstallationDetails: React.FC = () => {
  const navigate = useNavigate(); // React Router navigation hook
  const [menuOpen, setMenuOpen] = useState(false);
  // menuOpen controls dropdown state (true = open, false = closed)

  return (
    <>
      {/* ---------- HERO CONTAINER ---------- */}
      <div className="hero">
        {/* ---------- NAVBAR ---------- */}
        <nav className="navbar">
          {/* NAV BRAND → LOGO IMAGE */}
          <div
            className="nav-brand"
            onClick={() => navigate('/')} // Click brand → go home
            style={{ cursor: 'pointer' }} // Cursor pointer for clarity
          >
            <img
              src="/images/testscript-icon.webp" // Banner logo image
              alt="TST Logo Banner" // Alt text for accessibility
              style={{ height: '2.5rem', width: 'auto' }}
              // Height fixed, width auto to keep proportions
            />
          </div>

          {/* NAV LINKS (DESKTOP) */}
          <ul className="nav-links">
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about-team')}>About</li>
            <li onClick={() => navigate('/docs')}>Docs</li>
            <li onClick={() => navigate('/conduct')}>Conduct</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
          </ul>

          {/* HAMBURGER MENU (MOBILE) */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu open/close
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
            {/* Show X when open, Bars when closed */}
          </button>
        </nav>

        {/* DROPDOWN NAV (MOBILE) */}
        {menuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li
                onClick={() => {
                  navigate('/');
                  setMenuOpen(false);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate('/about-team');
                  setMenuOpen(false);
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  navigate('/docs');
                  setMenuOpen(false);
                }}
              >
                Docs
              </li>
              <li
                onClick={() => {
                  navigate('/conduct');
                  setMenuOpen(false);
                }}
              >
                Conduct
              </li>
              <li
                onClick={() => {
                  navigate('/contact');
                  setMenuOpen(false);
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        )}

        {/* ---------- TESTSCRIPT INFO ---------- */}
        <div className="testscript-info">
          <h2 className="testscript-title">TestScript</h2>
          <h3 className="testscript-description">
            Evaluates project code and quickly generates runnable, high-quality
            Vitest tests with minimal effort, for a safer development
            experience.
          </h3>

          {/* ---------- TABLES ROW ---------- */}
          <div className="tables-row">
            {/* FEATURES TABLE */}
            <div className="features-wrapper">
              <h2 className="product-name">Key Features:</h2>
              <table className="features-table">
                <tbody>
                  <tr>
                    <td>Repo-aware imports</td>
                  </tr>
                  <tr>
                    <td>Works with NodeNext/ESM</td>
                  </tr>
                  <tr>
                    <td>Supports React &amp; Express</td>
                  </tr>
                  <tr>
                    <td>Multiple Persona leverage</td>
                  </tr>
                  <tr>
                    <td>
                      Post-process &amp; Self-heal to return runnable tests
                    </td>
                  </tr>
                  <tr>
                    <td>CLI + Config (Current provider: OpenAI)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PREREQUISITES TABLE */}
            <div className="prereq-wrapper">
              <h2 className="product-name">Prerequisites:</h2>
              <table className="prereq-table">
                <tbody>
                  <tr>
                    <th>Runtime</th>
                    <td>Node.js 18+ &amp; npm 9+</td>
                  </tr>
                  <tr>
                    <th>Package type</th>
                    <td>ESM</td>
                  </tr>
                  <tr>
                    <th>TypeScript</th>
                    <td>Installed</td>
                  </tr>
                  <tr>
                    <th>Vitest</th>
                    <td>Installed</td>
                  </tr>
                  <tr>
                    <th>LLM provider</th>
                    <td>API Key available</td>
                  </tr>
                  <tr>
                    <th>Network</th>
                    <td>Outbound HTTPS to LLM provider</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* INSTALLATION STEPS */}
            <div className="steps-wrapper">
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
            className="demo-video"
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

// Export default component for router
export default InstallationDetails;
