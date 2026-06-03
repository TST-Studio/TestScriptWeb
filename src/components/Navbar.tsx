
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import './navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                    setMenuOpen(false);
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
