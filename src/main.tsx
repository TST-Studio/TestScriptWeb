import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import InstallationDetails from './InstallationPage.tsx';
import About from './components/about-team.tsx';
import Contact from './components/Contact.tsx';
import Conduct from './components/Code-conduct.tsx';
import Office from './components/office-hours.tsx';
import Roadmap from './components/Roadmap.tsx';
import Docs from './components/Docs.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/installation-page" element={<InstallationDetails />} />
        <Route path="/about-team" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conduct" element={<Conduct />} />
        <Route path="/office" element={<Office />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
