// about-team.tsx full file with articulation

import React, { useEffect, useState } from 'react'; // Import React, hooks
import '/src/components/about-team.css'; // Import custom stylesheet

const About: React.FC = () => { // Define About component
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track expanded card index

  // Fade-in on scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver( // Create observer
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { // Element visible
            entry.target.classList.add('show'); // Add show class
          } else {
            entry.target.classList.remove('show'); // Remove when leaving
          }
        });
      },
      { threshold: 0.15 } // Trigger threshold
    );

    const hiddenElements = document.querySelectorAll('.team-member'); // Select hidden elements
    hiddenElements.forEach((el) => observer.observe(el)); // Observe each element
    return () => observer.disconnect(); // Cleanup observer
  }, []);

  const toggleCard = (index: number) => { // Toggle folder expansion
    setActiveIndex(activeIndex === index ? null : index); // Toggle state O(1)
  };

  return (
    <div className="about-team"> {/* Root container */}
      <h1>About the Team</h1> {/* Main heading */}
      <h2>Meet the Team</h2> {/* Subheading */}

      <div className="team-grid"> {/* Team cards row */}
        {[
          { img: "/images/member1.png", name: "G", role: "Staff Engineer", email: "member1@email.com" },
          { img: "/images/member2.jpeg", name: "Member Name 2", role: "Role", email: "member2@email.com" },
          { img: "/images/member3.jpeg", name: "Member Name 3", role: "Role", email: "member3@email.com" },
          { img: "/images/member4.jpg", name: "Member Name 4", role: "Role", email: "member4@email.com" },
          { img: "/images/member5.png", name: "Member Name 5", role: "Role", email: "member5@email.com" }
        ].map((member, index) => (
          <div
            key={index}
            className={`team-member hidden ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleCard(index)}
          >
            <img src={member.img} alt={member.name} /> {/* Member image */}
            <h3>{member.name}</h3> {/* Member name */}
            {activeIndex === index && ( // Expanded folder
              <div className="expanded-card">
                <p><strong>{member.role}</strong></p> {/* Role */}
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={`mailto:${member.email}`}>Email</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About; // Export component
