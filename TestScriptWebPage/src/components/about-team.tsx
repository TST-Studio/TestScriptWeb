// about-team.tsx — clean business card grid with mission statement

import React, { useEffect } from "react";
import "/src/components/about-team.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Strict type for team members
type Member = {
  img: string;
  name: string;
  role: string;
  github: string;
  linkedin: string;
  email: string;
};

// Team data array — centralized for easy updates
const team: Member[] = [
  {
    img: "/images/member1.png",
    name: "Glen Jarvis",
    role: "Full Stack Software Engineer",
    github: "https://github.com/glenjarvis/",
    linkedin: "https://linkedin.com/in/glenjarvis",
    email: "Glen.Jarvis@tst-studio.com",
  },
  {
    img: "/images/member2.jpeg",
    name: "Jonathan Jovel",
    role: "Full Stack Software Engineer",
    github: "https://github.com/jalexjovel",
    linkedin: "https://linkedin.com/in/jonathan-jovel",
    email: "Jonathan.Jovel@tst-studio.com",
  },
  {
    img: "/images/member3.jpeg",
    name: "Laura Schlueter",
    role: "Full Stack Software Engineer | Scrum Leader",
    github: "https://github.com/LauraSchlueter22",
    linkedin: "https://linkedin.com/in/lauraschlueter22",
    email: "Laura.Schlueter@tst-studio.com",
  },
  {
    img: "/images/member4.jpg",
    name: "Tucker Olsen",
    role: "Full Stack Engineer | Product Manager",
    github: "https://github.com/tuckerolsen",
    linkedin: "https://linkedin.com/in/tuckerolsen23",
    email: "Tucker.Olsen@tst-studio.com",
  },
  {
    img: "/images/amanimg.png",
    name: "Aman Lally",
    role: "Full Stack Engineer | QA Tester",
    github: "https://github.com/CodeRepeater",
    linkedin: "https://linkedin.com/in/amanlally",
    email: "Aman.Lally@tst-studio.com",
  },
];

const About: React.FC = () => {
  // IntersectionObserver → fade-in cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting
            ? entry.target.classList.add("show")
            : entry.target.classList.remove("show")
        );
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll(".team-member");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-team">
      {/* Heading Section */}
      <h1>About the Team</h1>
      <h2>Meet the Team</h2>
      <p className="mission">
        We are a dedicated team of full stack engineers, designers, and leaders
        united by one mission: to deliver high-quality software solutions that
        empower businesses and create positive impact. Collaboration,
        creativity, and craftsmanship define our culture — and we bring that
        energy into every project.
      </p>

      {/* Team Grid */}
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-member hidden">
            <img src={member.img} alt={member.name} className="avatar" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> {member.github.replace("https://github.com/", "")}
              </a>
            </p>
            <p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
                {member.linkedin.replace("https://linkedin.com/in/", "")}
              </a>
            </p>
            <p>
              <a href={`mailto:${member.email}`}>
                <FaEnvelope /> {member.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
