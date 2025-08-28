import React from 'react';
import { useNavigate } from 'react-router-dom'; // dont erase this
import './App.css';
import './index.css';

function App() {
  const navigate = useNavigate(); // dont erase this
  const COMMUNITY = [
    {
      name: 'Github',
      href: 'https://github.com/TST-Studio',
      desc: 'Contribute code or report a bug',
      icon: (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8 1.8-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.8 5.5-5.5 5.8.8.6 1.6 1.9 1.6 3.8v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .5z' />
        </svg>
      ),
    },
    {
      name: 'Slack',
      // need slack link
      href: 'https://slack.com/yourworkspace',
      desc: 'Connect and chat with other users',
      icon: (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M5 14a2 2 0 1 1 0-4h2v4H5zm3-7a2 2 0 1 1 4 0v2H8V7zm8 3h-2V8a2 2 0 1 1 4 0v2h-2zm-3 8a2 2 0 1 1-4 0v-2h4v2zm-6-3v-4h10v4H7z' />
        </svg>
      ),
    },
    {
      name: 'Youtube',
      // need youtube link
      href: 'https://youtube.com/@yourchannel',
      desc: 'Learn with team videos & tutorials',
      icon: (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M23 7.5a4 4 0 0 0-2.8-2.8C18.5 4.2 12 4.2 12 4.2s-6.5 0-8.2.5A4 4 0 0 0 1 7.5 41 41 0 0 0 1 12a41 41 0 0 0  .8 4.5A4 4 0 0 0 4.6 19c1.7.5 7.4.5 7.4.5s6.5 0 8.2-.5a4 4 0 0 0 2.8-2.8A41 41 0 0 0 23 12a41 41 0 0 0 0-4.5ZM10 15.3V8.7l5.6 3.3L10 15.3z' />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      // need linkedin link
      href: 'https://linkedin.com/company/yourcompany',
      desc: 'Follow us and connect with engineers!',
      icon: (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z' />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className='hero'>
        <header className='site-header'>
          <div className='header-inner'>
            <button
              className='pill-btn'
              onClick={() => navigate('/installation-page')}
            >
              Extension
            </button>
            <button
              className='pill-btn'
              onClick={() => navigate('/about-team')}
            >
              Meet the team
            </button>
          </div>
        </header>
        <h1 className='title'>Tst Studio.</h1>
        <p className='description'>Creating solutions for a better tomorrow.</p>
        <h2 className='sample-video'>Background Video Example</h2>
        <video
          className='sample-video'
          src='/videos/my-video.mp4' // put the file in /public/videos/
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%', // full width
            height: 'auto', // maintain aspect ratio
          }}
        />
        <section className='community'>
          <div className='community__inner'>
            {/* <h2 className='community__title'>Come check us out</h2> */}

            <div className='community__grid'>
              {COMMUNITY.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card'
                >
                  <span className='card__icon' aria-hidden='true'>
                    {item.icon}
                  </span>
                  <div className='card__text'>
                    <h3 className='card__title'>{item.name}</h3>
                    <p className='card__desc'>{item.desc}</p>
                  </div>

                  <span className='card__external' aria-hidden='true'></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
