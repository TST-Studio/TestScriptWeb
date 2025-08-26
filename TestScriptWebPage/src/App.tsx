import React from 'react';
import { useNavigate } from 'react-router-dom'; // dont erase this
import './App.css';
import './index.css';

function App() {
  const navigate = useNavigate(); // dont erase this

  return (
    <>
      <h1 className='header-buttons'>
        <button
          className='pill-btn'
          onClick={() => navigate('/installation-page')}
        >
          Install
        </button>

        <button className='pill-btn' onClick={() => navigate('/about-page')}>
          Meet the team
        </button>
      </h1>
      <h1 className='title'>Tst Studios.</h1>
      <h1 className='description'>Creating solutions for a better tomorrow.</h1>
    </>
  );
}

export default App;
