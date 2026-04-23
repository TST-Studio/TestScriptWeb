import React from 'react'; // Enables JSX rendering and React features.
import './InstallationPage.css'; // Loads scoped styles for this page.
import Navbar from './components/Navbar'; // Imports shared navigation component.

const FEATURES = [ // Defines product feature list.
  'Context-aware imports', // Automatically resolves relevant imports.
  'ESM compatible', // Supports modern JavaScript modules.
  'Cross-framework support', // Works across multiple frameworks.
  'Configurable LLM providers', // Allows switching AI providers.
  'Automated test validation & repair', // Validates and fixes generated tests.
  'Simple CLI & flexible configuration' // Keeps setup minimal and flexible.
]; // Ends features array.

const PREREQUISITES = [ // Defines required setup dependencies.
  { label: 'Runtime', value: 'Node.js 18+ & npm 9+' }, // Requires supported runtime versions.
  { label: 'Package type', value: 'ESM' }, // Requires ESM-based project.
  { label: 'TypeScript', value: 'Installed' }, // Requires TypeScript environment.
  { label: 'Vitest', value: 'Installed' }, // Requires Vitest test runner.
  { label: 'LLM provider', value: 'API Key available' }, // Requires API credentials.
  { label: 'Network', value: 'Outbound HTTPS to LLM provider' } // Requires external API access.
]; // Ends prerequisites array.

const INSTALLATION_STEPS = [ // Defines CLI setup workflow.
  { label: '1.) Installation', command: 'npm install -g @tst-studio/tst' }, // Installs CLI globally.
  { label: '2.) Configuration', command: 'tst configuration --outFormat=sameLocation' }, // Generates config.
  { label: '3.) Usage', command: 'tst generate < filename >' }, // Runs test generation.
  { label: '4.) API key', command: 'API key is required in .env' } // Requires env configuration.
]; // Ends installation steps array.

const InstallationDetails = () => { // Defines main installation page component.
  return ( // Returns JSX structure.
    <> {/* Wraps multiple root elements. */}
      <Navbar /> {/* Renders navigation bar. */}

      {/* leave this V until we find a better global name*/}
      <div className="hero"> {/* Hero section container. */}
        <div className="testscript-info glass-panel"> {/* Main content panel with glass styling. */}

          <h2 className="testscript-title">TestScript</h2> {/* Displays product name. */}

          <h3 className="testscript-description"> {/* Displays product description. */}
            Evaluates project code and quickly generates runnable, high-quality
            Vitest tests with minimal effort, for a safer development
            experience.
          </h3> {/* Ends description block. */}

          <div className="tables-row"> {/* Groups feature, prerequisite, and step sections. */}

            <div className="features-wrapper glass-panel"> {/* Feature section container. */}
              <h2 className="product-name">Key Features:</h2> {/* Feature section title. */}

              <table className="features-table"> {/* Feature table structure. */}
                <tbody> {/* Table body container. */}
                  {FEATURES.map((feature, index) => ( // Iterates over features.
                    <tr key={index}> {/* Creates row per feature. */}
                      <td>{feature}</td> {/* Displays feature text. */}
                    </tr> // Ends feature row.
                  ))} {/* Ends feature iteration. */}
                </tbody> {/* Ends table body. */}
              </table> {/* Ends feature table. */}
            </div> {/* Ends feature section. */}

            <div className="prereq-wrapper glass-panel"> {/* Prerequisite section container. */}
              <h2 className="product-name">Prerequisites:</h2> {/* Prerequisite section title. */}

              <table className="prereq-table"> {/* Prerequisite table structure. */}
                <tbody> {/* Table body container. */}
                  {PREREQUISITES.map((prereq, index) => ( // Iterates over prerequisites.
                    <tr key={index}> {/* Creates row per prerequisite. */}
                      <th>{prereq.label}</th> {/* Displays requirement label. */}
                      <td>{prereq.value}</td> {/* Displays requirement value. */}
                    </tr> // Ends prerequisite row.
                  ))} {/* Ends prerequisite iteration. */}
                </tbody> {/* Ends table body. */}
              </table> {/* Ends prerequisite table. */}
            </div> {/* Ends prerequisite section. */}

            {/* INSTALLATION STEPS */}
            <div className="steps-wrapper glass-panel"> {/* Installation steps container. */}
              <h2 className="product-name">Steps:</h2> {/* Steps section title. */}

              <div className="inputs-grid"> {/* Grid layout for steps. */}
                {INSTALLATION_STEPS.map((step, index) => ( // Iterates over steps.
                  <React.Fragment key={index}> {/* Groups label and command. */}
                    <span className="input-label">{step.label}</span> {/* Displays step label. */}
                    <p>{step.command}</p> {/* Displays CLI command. */}
                  </React.Fragment> // Ends fragment.
                ))} {/* Ends steps iteration. */}
              </div> {/* Ends steps grid. */}
            </div> {/* Ends steps section. */}

          </div> {/* Ends grouped sections. */}

          {/* ---------- VIDEO DEMO ---------- */}
          <iframe // Embeds YouTube demo.
            className="tutorial-video" // Applies styling.
            src="https://www.youtube.com/embed/cSW7uQHNTJE?si=2OBw8i-JGx-5CJKT" // Sets video source.
            title="YouTube video player" // Provides accessibility label.
            frameBorder="0" // Removes default border.
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Enables features.
            referrerPolicy="strict-origin-when-cross-origin" // Controls referrer behavior.
            allowFullScreen // Enables fullscreen mode.
          ></iframe> {/* Ends iframe. */}

        </div> {/* Ends main content panel. */}
      </div> {/* Ends hero container. */}
    </> // Ends fragment.
  ); // Ends return.
}; // Ends component.

export default InstallationDetails; // Exports component for routing.
