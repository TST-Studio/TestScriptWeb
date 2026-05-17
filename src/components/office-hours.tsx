import React from 'react';
import './Office-hours.css';
import Navbar from './Navbar';

const OfficeHours: React.FC = () => {
  return (
    <div className="hero">
      <Navbar />

      <div className="office-page">
        <div className="office-container glass-panel">
          <h1 className="office-title">Office Hours</h1>

          <p className="office-intro">
            Our team is available to support the developer community during the
            following times. Hours are listed in <strong>Pacific Time (PST)</strong>.
          </p>

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
                  <td>Wednesday</td>
                  <td>6:00 PM – 7:00 PM</td>
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

          <div className="office-zoom">
            <p>
              Join our live office hours on{' '}
              <a
                href="https://us02web.zoom.us/j/89007572910?pwd=aib0mh2UqAnDaSQ2sPuYMJ4L8L9hl5.1"
                target="_blank"
                rel="noopener noreferrer"
                className="zoom-link"
              >
                Zoom Meeting
              </a>
            </p>
          </div>

          <p className="office-footer">
            Need assistance outside office hours? Email us anytime at{' '}
            <a href="mailto:support@tst-studio.com">
              support@tst-studio.com
            </a>
            , and we’ll respond during business hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeHours;
