import React, { useEffect, useState } from 'react';
import '/src/components/about-team.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowLeft } from 'react-icons/fa';

type Member = {
  img: string;
  name: string;
  role: string;
  github: string;
  linkedin: string;
  email: string;
  description: string;
};

const team: Member[] = [
  {
    img: '/images/member1.png',
    name: 'Glen Jarvis',
    role: 'Full Stack Engineer | Mentor',
    github: 'https://github.com/username1',
    linkedin: 'https://linkedin.com/in/username1',
    email: 'member1@email.com',
    description:
      'Staff engineer with 10+ years experience building scalable systems.',
  },
  {
    img: '/images/member2.jpeg',
    name: 'Jonathan Jovel',
    role: ' Full Stack Software Engineer',
    github: 'https://github.com/username2',
    linkedin: 'https://linkedin.com/in/username2',
    email: 'Jonathan.Jovel@ts-studio.com',
    description: 'Frontend wizard and React specialist with a love for UI/UX.',
  },
  {
    img: '/images/member3.jpeg',
    name: 'Laura Schlueter',
    role: 'Full Stack Engineer | Scrum Leader',
    github: 'https://github.com/username3',
    linkedin: 'https://linkedin.com/in/username3',
    email: 'member3@email.com',
    description:
      'Creative designer blending art and tech into unique user experiences.',
  },
  {
    img: '/images/member4.jpg',
    name: 'Tucker Olsen',
    role: 'Full Stack Engineer | Product Manager',
    github: 'https://github.com/tuckerolsen',
    linkedin: 'www.linkedin.com/in/tuckerolsen23',
    email: 'Tucker.Olsen@ts-studio.com',
    description: 'Visionary PM aligning engineering with business goals.',
  },
  {
    img: '/images/member5.png',
    name: 'Aman Lally',
    role: 'Full Stack Engineer | QA Tester',
    github: 'https://github.com/username5',
    linkedin: 'https://linkedin.com/in/username5',
    email: 'member5@email.com',
    description: '',
  },
];

const About: React.FC = () => {
  const [detailIndex, setDetailIndex] = useState<number | null>(null);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting
            ? entry.target.classList.add('show')
            : entry.target.classList.remove('show')
        );
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll('.team-member');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='about-team'>
      <h1>About the Team</h1>
      <h2>Meet the Team</h2>

      <div className='team-grid'>
        {team.map((member, index) => {
          const isDetail = detailIndex === index;

          return (
            <div key={index} className='team-wrapper'>
              {!isDetail ? (
                <div
                  className='team-member hidden'
                  onClick={() => setDetailIndex(index)}
                >
                  <img src={member.img} alt={member.name} className='avatar' />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <p>
                    <FaGithub />{' '}
                    {member.github.replace('https://github.com/', '')}
                  </p>
                  <p>
                    <FaLinkedin />{' '}
                    {member.linkedin.replace('https://linkedin.com/in/', '')}
                  </p>
                  <p>
                    <FaEnvelope /> {member.email}
                  </p>
                </div>
              ) : (
                <div className='detail-view'>
                  <button
                    className='back-button'
                    onClick={() => setDetailIndex(null)}
                  >
                    <FaArrowLeft />
                  </button>
                  <h3>{member.name}</h3>
                  <p className='detail-role'>{member.role}</p>
                  <p className='detail-description'>{member.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
