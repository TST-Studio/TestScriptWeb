import React from 'react';
import { useNavigate } from 'react-router-dom'; // dont erase this
import './App.css';

function App() {
  const navigate = useNavigate(); // dont erase this

  return (
    <>
      <body className='body'>
        <header className='header-buttons'>
          <button
            className='pill-btn'
            onClick={() => navigate('/installation-page')}
          >
            Install
          </button>

          <button className='pill-btn' onClick={() => navigate('/about-page')}>
            Meet the team
          </button>
        </header>
        {/* <header>
        <button
          className='install'
          onClick={() => navigate('/installation-page')}
        >
          Install
        </button>

        <button className='about-team' onClick={() => navigate('/about-page')}>
          Meet the team
        </button>
      </header> */}
        <h1 className='title'>Tst Studios</h1>
        <h1 className='description'>
          Creating solutions for a better tomorrow.
        </h1>
      </body>
    </>
  );
}

export default App;
