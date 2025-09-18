// ==========================================================
// ⚔️ Office-hours.tsx — Availability Schedule with Dominion Glass
// ==========================================================

import React from 'react'; // Core React library
import './Office-hours.css'; // Page-specific dominion styles
import Navbar from './Navbar'; // 🔥 Global Navbar

// ---------------------- COMPONENT ----------------------
const OfficeHours: React.FC = () => {
  return (
    <div className="hero">
      {/* 🔥 GLOBAL NAVBAR */}
      <Navbar />

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="office-page">
        <div className="office-container glass-panel">
          {/* ---------- TITLE ---------- */}
          <h1 className="office-title">Office Hours</h1>

          <p className="office-intro">
            Our team is available to support the developer community during the
            following times. Hours are listed in <strong>Pacific Time (PST)</strong>.
          </p>

          {/* ---------- HOURS TABLE ---------- */}
          <div className="office-table-wrapper">
            <table className="office-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours (PST)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>6:00 PM – 7:00 PM</td>
                </tr>
                <tr>

                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>6:00 PM – 7:00 PM</td>
                </tr>
                <tr>

                </tr>
                <tr>
                  <td>Friday</td>
                  <td>6:00 PM – 7:00 PM</td>
                </tr>
                <tr className="office-closed">
                  <td>Saturday</td>
                  <td>Closed</td>
                </tr>
                <tr className="office-closed">
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ---------- FOOTER NOTE ---------- */}
          <p className="office-footer">
            Need assistance outside office hours? Email us anytime at{' '}
            <a href="mailto:support@tst-studio.com">support@tst-studio.com</a>, and we’ll respond during business hours.
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------- EXPORT ----------------------
export default OfficeHours;
