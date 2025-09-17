// Office-hours.tsx — TestScript Office Hours Page
// This file defines the Office Hours page, including navigation and hours table.

// ---------------------- IMPORTS ----------------------
import React from 'react'; // Core React library, required for JSX and components
import './Office-hours.css'; // Local stylesheet scoped for Office Hours page
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

// ---------------------- COMPONENT ----------------------
const OfficeHours: React.FC = () => {
  const navigate = useNavigate();
  // Hook allows programmatic navigation when elements (e.g., logo, links) are clicked

  return (
    <div className="office-page">
      {/* Root container for page layout and styling */}

      {/* ---------- NAVBAR ---------- */}
      <nav className="office-navbar">
        {/* Navigation bar at the top, styled separately in Office-hours.css */}

        <div className="nav-brand" onClick={() => navigate('/')}>
          {/* Clickable brand logo → navigates home */}
          <img
            src="/images/testscript-icon.webp" // Project logo graphic
            alt="TST Logo Banner" // Accessible alt text for screen readers
            style={{ height: '2.5rem', width: 'auto' }}
            // Fixed height ensures consistent navbar size, width scales proportionally
          />
        </div>

        <ul className="nav-links">
          {/* Navigation links for routing between pages */}
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about-team')}>About</li>
          <li onClick={() => navigate('/docs')}>Docs</li>
          <li onClick={() => navigate('/conduct')}>Conduct</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </nav>

      {/* ---------- CONTENT ---------- */}
      <div className="office-container">
        {/* Main content wrapper with controlled width and spacing */}

        <h1 className="office-title">Office Hours</h1>
        {/* Page title → clearly announces page purpose */}

        <p className="office-intro">
          Our team is available to support the developer community during the
          following times. Hours are listed in <strong>Pacific Time (PST)</strong>.
        </p>
        {/* Introductory paragraph explaining context and timezone */}

        {/* HOURS TABLE */}
        <div className="office-table-wrapper">
          {/* Wrapper adds padding and horizontal scroll safety */}
          <table className="office-table">
            {/* Structured hours data in semantic table */}
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours (PST)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>8:00 AM – 5:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8:00 AM – 5:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>8:00 AM – 5:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>8:00 AM – 5:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>8:00 AM – 5:00 PM</td>
              </tr>
              <tr className="office-closed">
                {/* Special styling for closed days */}
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

        {/* FOOTER NOTE */}
        <p className="office-footer">
          Need assistance outside office hours? Email us anytime at{' '}
          <a href="mailto:support@tststudios.com">support@tststudios.com</a>,
          and we’ll respond during business hours.
        </p>
        {/* Footer encourages users to email if support is needed off-hours */}
      </div>
    </div>
  );
};

// ---------------------- EXPORT ----------------------
export default OfficeHours;
// Exports component for routing integration and use in App tree
