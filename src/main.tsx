// ---------------------- CORE IMPORTS ----------------------
import React from 'react';
// React core library — required for all JSX elements and React components.

import ReactDOM from 'react-dom/client';
// ReactDOM client renderer (React 18). Provides createRoot() for mounting app into DOM.

// ---------------------- ROUTER IMPORTS ----------------------
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// BrowserRouter: enables navigation with HTML5 history API (no page reloads).
// Routes: container that holds all defined <Route> paths.
// Route: maps a specific URL path to a component element (page).

// ---------------------- GLOBAL STYLES ----------------------
import './index.css';
// Global stylesheet applied across entire app (base typography, resets, themes).

// ---------------------- PAGE IMPORTS ----------------------
import App from './App.tsx';
// App = homepage component, shown when visiting "/".

import InstallationDetails from './InstallationPage.tsx';
// InstallationDetails = installation guide page, shown when visiting "/installation-page".

import About from './components/about-team.tsx';
// About = About Team page, introduces team members, shown when visiting "/about-team".

import Contact from './components/Contact.tsx';
// Contact = Contact page with form + contributor details, shown when visiting "/contact".

import Conduct from './components/Code-conduct.tsx';
// Conduct = Code of Conduct page, community rules, shown when visiting "/conduct".

import Office from './components/office-hours.tsx';
// Office = Office Hours page, lists availability schedule, shown when visiting "/office".

// ---------------------- ROOT RENDER ----------------------
ReactDOM.createRoot(document.getElementById('root')!).render(
  // createRoot: attaches React virtual DOM to real DOM element with id="root".
  // Non-null assertion (!) ensures TypeScript knows "root" exists.

  <React.StrictMode>
    {/* StrictMode: dev-only wrapper. Highlights potential problems (deprecated APIs, side effects). */}

    <BrowserRouter>
      {/* BrowserRouter wraps the entire app, enabling route navigation without full reload. */}

      <Routes>
        {/* Routes container: holds all defined paths mapping to components. */}

        <Route path="/" element={<App />} />
        {/* "/" root path → renders App (homepage). */}

        <Route path="/installation-page" element={<InstallationDetails />} />
        {/* "/installation-page" path → renders InstallationDetails page. */}

        <Route path="/about-team" element={<About />} />
        {/* "/about-team" path → renders About Team page. */}

        <Route path="/contact" element={<Contact />} />
        {/* "/contact" path → renders Contact page. */}

        <Route path="/conduct" element={<Conduct />} />
        {/* "/conduct" path → renders Code of Conduct page. */}

        <Route path="/office" element={<Office />} />
        {/* "/office" path → renders Office Hours page. */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
