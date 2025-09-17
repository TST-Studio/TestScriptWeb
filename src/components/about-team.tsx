// about-team.tsx — About Team with Dominion-level dropdown nav

// ---------------------- IMPORTS ----------------------

import React, { useEffect, useState } from 'react';
// React core import.
// - useEffect: used for running side effects (card fade-in animation).
// - useState: used for managing state (open/close nav menu).

import '/src/components/about-team.css';
// Imports your existing CSS stylesheet for About Team.
// NOTE: We are NOT altering it, just consuming it.

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
// Importing icons from react-icons library:
// - FaGithub: GitHub logo for team member links.
// - FaLinkedin: LinkedIn logo for team member links.
// - FaEnvelope: Envelope/mail logo for email links.
// - FaBars: Hamburger menu icon (menu closed).
// - FaTimes: X/close icon (menu open).

import { Link } from 'react-router-dom';
// Link component from React Router.
// Used for in-app navigation without full page reloads.

// ---------------------- TYPES ----------------------

type Member = {
  // Strict TypeScript type for a team member object.
  img: string; // Image path for avatar photo.
  name: string; // Member’s name.
  role: string; // Member’s role (title/job).
  github: string; // GitHub profile URL.
  linkedin: string; // LinkedIn profile URL.
  email: string; // Email address.
};

// ---------------------- TEAM DATA ----------------------

const team: Member[] = [
  // Array of objects. Each object represents one team member.
  {
    img: '/images/member1.png',
    name: 'Glen Jarvis',
    role: 'Full Stack Software Engineer',
    github: 'https://github.com/glenjarvis/',
    linkedin: 'https://linkedin.com/in/glenjarvis',
    email: 'Glen.Jarvis@tst-studio.com',
  },
  {
    img: '/images/member2.jpeg',
    name: 'Jonathan Jovel',
    role: 'Full Stack Software Engineer',
    github: 'https://github.com/jalexjovel',
    linkedin: 'https://linkedin.com/in/jonathan-jovel',
    email: 'Jonathan.Jovel@tst-studio.com',
  },
  {
    img: '/images/member3.jpeg',
    name: 'Laura Schlueter',
    role: 'Full Stack Software Engineer | Scrum Leader',
    github: 'https://github.com/LauraSchlueter22',
    linkedin: 'https://linkedin.com/in/lauraschlueter22',
    email: 'Laura.Schlueter@tst-studio.com',
  },
  {
    img: '/images/member4.jpg',
    name: 'Tucker Olsen',
    role: 'Full Stack Engineer | Product Manager',
    github: 'https://github.com/tuckerolsen',
    linkedin: 'https://linkedin.com/in/tuckerolsen23',
    email: 'Tucker.Olsen@tst-studio.com',
  },
  {
    img: '/images/amanimg.png',
    name: 'Aman Lally',
    role: 'Full Stack Engineer | QA Tester',
    github: 'https://github.com/CodeRepeater',
    linkedin: 'https://linkedin.com/in/amanlally',
    email: 'Aman.Lally@tst-studio.com',
  },
];
// 💎 This centralizes team data in one place. Easy to update or add new members.

// ---------------------- NAV LINKS ----------------------

const navLinks = [
  // Array of objects representing nav menu links.
  { name: 'Home', path: '/' }, // Root route
  { name: 'Installation', path: '/installation-page' }, // Installation guide page
  { name: 'Docs', path: '/docs' }, // Documentation page
  { name: 'CLI', path: '/cli' }, // CLI tool page
  { name: 'Contact', path: '/contact' }, // Contact page
];

// ---------------------- COMPONENT ----------------------

const About: React.FC = () => {
  // React functional component named About.
  // Responsible for rendering nav menu + about page content.

  const [menuOpen, setMenuOpen] = useState(false);
  // State hook.
  // menuOpen = true → nav dropdown visible.
  // menuOpen = false → nav dropdown hidden.
  // setMenuOpen toggles this state.

  // ---------------------- EFFECT: FADE-IN CARDS ----------------------

  useEffect(() => {
    // Effect runs once after component mounts.
    const observer = new IntersectionObserver(
      (entries) => {
        // Callback triggered when observed elements appear/disappear in viewport.
        entries.forEach(
          (entry) =>
            entry.isIntersecting
              ? entry.target.classList.add('show') // Add .show class → CSS animates fade-in.
              : entry.target.classList.remove('show') // Remove .show if scrolled out.
        );
      },
      { threshold: 0.15 } // Trigger when 15% of element visible.
    );
    const elements = document.querySelectorAll('.team-member');
    // Select all elements with class .team-member.

    elements.forEach((el) => observer.observe(el));
    // Attach observer to every team card.

    return () => observer.disconnect();
    // Cleanup → disconnect observer on unmount.
  }, []);
  // Empty dependency array = runs once.

  // ---------------------- RENDER ----------------------

  return (
    <div className="about-team">
      {/* Root container. Uses existing CSS layout. */}

      {/* ---------- NAVBAR HAMBURGER + DROPDOWN ---------- */}
      <div
        style={{
          position: 'absolute', // Floats element absolutely relative to parent.
          top: 20, // 20px from top of page.
          left: 20, // 20px from left of page.
          zIndex: 1000, // High z-index → always above other content.
        }}
      >
        {/* HAMBURGER / CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          // Toggle menuOpen state when clicked.
          style={{
            background: 'transparent', // No background.
            border: 'none', // No border.
            cursor: 'pointer', // Pointer cursor on hover.
            color: '#00eaff', // Neon cyan text color.
            fontSize: '1.75em', // Icon size.
            textShadow: '0 0 0.5em #00eaff, 0 0 1.25em #00eaff', // Neon glow effect.
            transition: 'transform 0.2s ease', // Smooth scaling animation.
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)';
            // On hover → enlarge button.
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            // Reset scale when mouse leaves.
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
          {/* Conditional render:
              If menuOpen = true → show X icon (FaTimes).
              If false → show hamburger bars (FaBars). */}
        </button>

        {/* DROPDOWN MENU */}
        {menuOpen && (
          // Render dropdown only if menuOpen = true.
          <div
            style={{
              marginTop: '0.75em', // Space between button and menu.
              background: 'linear-gradient(180deg, #0f1115, #1b1f27)', // Dark gradient background.
              border: '0.0625em solid rgba(0, 234, 255, 0.5)', // Neon cyan border.
              borderRadius: '0.75em', // Rounded corners.
              padding: '1.25em', // Inner padding for breathing space.
              boxShadow:
                '0 0 1.5625em rgba(0, 234, 255, 0.7), 0 0 3.125em rgba(0, 234, 255, 0.4)',
              // Glowing aura shadow.
              animation: 'fadeSlide 0.4s ease', // Entry animation (defined in global CSS).
            }}
          >
            {navLinks.map((link, i) => (
              // Map through navLinks array → generate clickable links.
              <div
                key={i} // React key for list item.
                style={{
                  margin: '0.875em 0', // Space between links.
                  transition: 'transform 0.3s ease', // Smooth hover scaling.
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    'translateX(0.5em) scale(1.05)';
                  // On hover → slide right + enlarge.
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    'translateX(0) scale(1)';
                  // Reset on leave.
                }}
              >
                <Link
                  to={link.path} // Route path.
                  style={{
                    color: '#00eaff', // Neon cyan text.
                    textDecoration: 'none', // No underline.
                    fontWeight: 700, // Bold weight.
                    fontSize: '1.125em', // Larger text.
                    letterSpacing: '0.0625em', // Spaced-out letters.
                    textShadow:
                      '0 0 0.625em #00eaff, 0 0 1.25em #00eaff, 0 0 2.5em #00eaff',
                    // Multi-layer glowing aura.
                    transition: 'color 0.3s ease', // Smooth color changes.
                  }}
                  onClick={() => setMenuOpen(false)}
                  // Close menu when link clicked.
                >
                  {link.name}
                  {/* Display nav link label (Home, Docs, etc). */}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------- PAGE HEADING SECTION ---------- */}
      <h1>About the Team</h1>
      {/* Main heading. Styled by CSS. */}
      <h2>Meet the Team</h2>
      {/* Subheading. */}
      <p className="mission">
        {/* Mission statement text, styled with CSS class. */}
        We are a dedicated team of full stack engineers, designers, and leaders
        united by one mission: to deliver high-quality software solutions that
        empower businesses and create positive impact. Collaboration,
        creativity, and craftsmanship define our culture — and we bring that
        energy into every project.
      </p>

      {/* ---------- TEAM GRID ---------- */}
      <div className="team-grid">
        {/* Grid container for team cards. Styled in CSS. */}
        {team.map((member, index) => (
          // Loop through team array, render each card.
          <div key={index} className="team-member hidden">
            {/* Team member card, initially hidden until fade-in observer triggers. */}
            <img src={member.img} alt={member.name} className="avatar" />
            {/* Avatar image with alt text. */}
            <h3>{member.name}</h3>
            {/* Member’s name. */}
            <p>{member.role}</p>
            {/* Member’s role/title. */}
            <p>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> {member.github.replace('https://github.com/', '')}
                {/* GitHub link with icon + username (stripped). */}
              </a>
            </p>
            <p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{' '}
                {member.linkedin.replace('https://linkedin.com/in/', '')}
                {/* LinkedIn link with icon + profile slug. */}
              </a>
            </p>
            <p>
              <a href={`mailto:${member.email}`}>
                <FaEnvelope /> {member.email}
                {/* Email link with icon + address. */}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export default About component to be imported elsewhere.
export default About;
