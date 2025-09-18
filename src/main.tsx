// ==========================================================
// 🌌 main.tsx — ROOT ENTRY POINT
// ==========================================================
// This file mounts the React app, wires global routing,
// and declares the page routes for TestScript Studio Website.
// ==========================================================

// ---------------------- CORE IMPORTS ----------------------
import React from 'react';
// React core library — enables JSX + component definitions.

import ReactDOM from 'react-dom/client';
// React 18 DOM renderer. Provides createRoot() for mounting app into the DOM.

// ---------------------- ROUTER IMPORTS ----------------------
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// BrowserRouter: wraps app to handle navigation without page reloads.
// Routes: groups multiple <Route> definitions.
// Route: maps URL paths → React components (pages).

// ---------------------- GLOBAL STYLES ----------------------

// ---------------------- PAGE IMPORTS ----------------------
import App from './App.tsx';
// "/" → Homepage (hero, community, mission).

import InstallationDetails from './InstallationPage.tsx';
// "/installation-page" → Installation guide for TestScript.

import About from './components/about-team.tsx';
// "/about-team" → About Team page (introduces team + mission).

import Contact from './components/Contact.tsx';
// "/contact" → Contact + contribution form.

import Conduct from './components/Code-conduct.tsx';
// "/conduct" → Code of Conduct (community guidelines).

import Office from './components/office-hours.tsx';
// "/office" → Office Hours page (support availability).

import Roadmap from './components/Roadmap.tsx';
// "/roadmap" → Roadmap page (stretch goals + product vision).

import Docs from './components/Docs.tsx';

import './index.css';
// Base/global stylesheet (resets, variables, typography).

// ==========================================================
// 🔥 ROOT RENDER — MOUNT REACT APP
// ==========================================================
ReactDOM.createRoot(document.getElementById('root')!).render(
  // createRoot(): attaches virtual DOM tree to #root element.
  // "!" = non-null assertion → TypeScript guarantees #root exists.

  <React.StrictMode>
    {/* StrictMode: DEV-ONLY wrapper, highlights potential issues like
        unsafe lifecycles, side-effects, or deprecated APIs. */}

    <BrowserRouter>
      {/* BrowserRouter: enables SPA routing via HTML5 history API. */}

      <Routes>
        {/* ---------------------- ROUTES DECLARATION ---------------------- */}

        <Route path="/" element={<App />} />
        {/* Root "/" → renders Homepage (App). */}

        <Route path="/installation-page" element={<InstallationDetails />} />
        {/* "/installation-page" → renders Installation guide. */}

        <Route path="/about-team" element={<About />} />
        {/* "/about-team" → renders About Team page. */}

        <Route path="/contact" element={<Contact />} />
        {/* "/contact" → renders Contact page. */}

        <Route path="/conduct" element={<Conduct />} />
        {/* "/conduct" → renders Code of Conduct. */}

        <Route path="/office" element={<Office />} />
        {/* "/office" → renders Office Hours page. */}

        <Route path="/roadmap" element={<Roadmap />} />
        {/* "/roadmap" → renders Roadmap page. */}

        <Route path="/docs" element={<Docs />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
