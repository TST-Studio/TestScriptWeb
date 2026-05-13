// ⚔️ Linkedin.tsx — Self-contained LinkedIn Badge Component
// ========================================================
import React, { useEffect } from 'react';

type LinkedinProps = {
  vanity: string; // e.g. "glenjarvis"
  name: string;   // fallback display name
};

const Linkedin: React.FC<LinkedinProps> = ({ vanity, name }) => {
  useEffect(() => {
    // Inject LinkedIn script if not already in the DOM
    if (!document.getElementById('linkedin-badge-script')) {
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      script.id = 'linkedin-badge-script';
      document.body.appendChild(script);

      script.onload = () => {
        if ((window as any).IN && (window as any).IN.parse) {
          (window as any).IN.parse();
        }
      };
    } else {
      // If script already present, re-parse
      if ((window as any).IN && (window as any).IN.parse) {
        (window as any).IN.parse();
      }
    }
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity={vanity}
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href={`https://www.linkedin.com/in/${vanity}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
};

export default Linkedin;

