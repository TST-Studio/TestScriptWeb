import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import InstallationDetails from './InstallationPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/installation-page" element={<InstallationDetails />} />
      {/* <Route path='/about-team' element={ /* PLACEHOLDER FOR ABOUT TEAM */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
