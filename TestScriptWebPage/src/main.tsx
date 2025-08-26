import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import InstallationDetails from './InstallationPage.tsx';
import About from './components/about-team.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/installation-page' element={<InstallationDetails />} />
        <Route path='/about-team' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 