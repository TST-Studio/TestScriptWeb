// ==========================================================
// ⚔️ Navbar.tsx — GLOBAL DOMINION NAVIGATION BAR
// ==========================================================
// Transparent + sticky navbar with active link highlighting.
// Fully responsive: desktop pills → collapse to hamburger menu.
// Scroll effect: glass panel activates after scroll.
// ==========================================================

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // hamburger + close icons
import '../App.css'; // pill-btn styles
import './navbar.css'; // scoped navbar styles

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // state for responsiveness
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // dominion scroll glass effect
  const [scrolled, setScrolled] = useState(false);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // detect scroll for glass background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Installation', path: '/installation-page' },
    { name: 'About', path: '/about-team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Conduct', path: '/conduct' },
    { name: 'Office Hours', path: '/office' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Docs', path: '/docs' },

  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        {/* DESKTOP NAV */}
        {!isMobile &&
          NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              className="pill-btn"
              onClick={() => navigate(item.path)}
              style={{
                color: location.pathname === item.path ? '#fb8500' : '#ffffff',
                fontWeight: location.pathname === item.path ? 800 : 600,
                borderBottom:
                  location.pathname === item.path
                    ? '0.15rem solid #fb8500'
                    : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {item.name}
            </button>
          ))}

        {/* MOBILE NAV */}
        {isMobile && (
          <div className="mobile-nav">
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  className="pill-btn"
                  onClick={() => {
                    navigate(item.path);
                    setMenuOpen(false); // close menu on nav
                  }}
                  style={{
                    color:
                      location.pathname === item.path ? '#fb8500' : '#ffffff',
                    fontWeight:
                      location.pathname === item.path ? 800 : 600,
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
