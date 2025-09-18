// ==========================================================
// ⚔️ Docs.tsx — Dominion Documentation Page
// ==========================================================

import React from 'react';
import Navbar from './Navbar';
import '/src/components/docs.css';

const Docs: React.FC = () => {
  return (
    <div className="hero">
      {/* 🔥 NAVBAR (shared across site) */}
      <Navbar />

      <div className="docs-page">
        <div className="glass-panel">
          <h1 className="docs-title">Documentation</h1>
          <p className="docs-intro">
            Welcome to the TestScript CLI guide. Here you’ll find configuration,
            authentication, and usage instructions to empower your development workflow.
          </p>

          {/* ---------------- CONFIGURE ---------------- */}
          <section className="docs-section">
            <h2>⚙️ Configure</h2>
            <pre>
{`bash
tst configure
# Generates tst.config.json

tst configure --provider=openai --model=gpt-4o-mini --outFormat=testDir --outBaseSrc=./src --outBaseTest=./tests --astLibrary=ts-morph --testingFramework=vitest --moduleType=module`}
            </pre>
          </section>

          {/* ---------------- GENERATE ---------------- */}
          <section className="docs-section">
            <h2>⚡ Generate</h2>
            <pre>
{`bash
tst generate ./src/utils/math.js                  # Generate unit tests for a file
tst generate ./src/utils/math.js --function=add   # Generate tests for a function`}
            </pre>
          </section>

          {/* ---------------- AUTH ---------------- */}
          <section className="docs-section">
            <h2>🔑 Auth</h2>
            <pre>
{`bash
tst auth set --provider=openai --api-key=$TST_OPENAI_API_KEY
# Store API key

tst auth status
# Show current authentication status`}
            </pre>
          </section>

          {/* ---------------- OTHER COMMANDS ---------------- */}
          <section className="docs-section">
            <h2>📜 Other Commands</h2>
            <pre>
{`bash
tst --help      # Display usage
tst --version   # Show current CLI version`}
            </pre>
          </section>

          {/* ---------------- ENV VARIABLES ---------------- */}
          <section className="docs-section">
            <h2>🌍 Environment Variables</h2>
            <pre>
{`export TST_OPENAI_API_KEY=sk-...
# Required to communicate with the LLM`}
            </pre>
          </section>

          {/* ---------------- DEFAULT OPTIONS ---------------- */}
          <section className="docs-section">
            <h2>⚔️ Default Options</h2>
            <pre>
{`provider: openai
model: gpt-4o-mini
outFormat: sameLocation
astLibrary: ts-morph
testingFramework: vitest
moduleType: module`}
            </pre>
          </section>

          {/* ---------------- ENUMS ---------------- */}
          <section className="docs-section">
            <h2>🔮 Supported Values</h2>
            <p><strong>Provider:</strong> 'openai' | 'anthropic' | 'vertex' | 'azure-openai' | 'bedrock'</p>
            <p><strong>AST Library:</strong> 'ts-morph' | 'babel'</p>
            <p><strong>Testing Framework:</strong> 'vitest' | 'jest'</p>
            <p><strong>Module Type:</strong> 'module' | 'commonjs'</p>
            <p><strong>OutFormat:</strong> 'sameLocation' | 'testDir'</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Docs;
