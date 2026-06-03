import React from 'react';
import './roadmap.css';
import Navbar from './Navbar';

const Roadmap: React.FC = () => {
  return (
    <div className="hero">
      <Navbar />

      <div className="roadmap-page">
        <div className="roadmap-container glass-panel">
          <h1 className="roadmap-title">TestScript Roadmap</h1>

          <p className="roadmap-intro">
            Our journey is just beginning. Below is a simplified roadmap with
            public stretch goals. These are milestones designed to grow TestScript
            into a world-class testing ecosystem while keeping the core strategy
            private until execution.
          </p>

          <div className="roadmap-timeline">
            <div className="roadmap-item">
              <h2 className="roadmap-phase">Phase 1 — Foundation</h2>
              <p>
                Stabilize core CLI and web experience. Build developer trust through
                reliability and speed.
              </p>
            </div>

            <div className="roadmap-item">
              <h2 className="roadmap-phase">Phase 2 — Expansion</h2>
              <p>
                Introduce multi-framework support and improve documentation for
                broader adoption.
              </p>
            </div>

            <div className="roadmap-item">
              <h2 className="roadmap-phase">Phase 3 — Community</h2>
              <p>
                Launch contributor programs, office hours, and educational content
                to grow TestScript’s ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
