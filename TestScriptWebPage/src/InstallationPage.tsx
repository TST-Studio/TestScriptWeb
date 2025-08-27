import './InstallationPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TestCase = {
  id: number;
  name: string;
  status: 'pass' | 'fail' | 'pending' | 'changed';
  body: string;
  highlightLines?: number[];
};

const mockTests: TestCase[] = [
  {
    id: 1,
    name: 'reverse() length preserved',
    status: 'pass',
    body: `expect(reverse([1,2,3]).length).toBe(3);`,
  },
  {
    id: 2,
    name: 'reverse() twice equals original',
    status: 'fail',
    body: `expect(reverse(reverse(arr))).toEqual(arr);`,
    highlightLines: [1],
  },
  {
    id: 3,
    name: 'handles empty input',
    status: 'pending',
    body: `expect(reverse([])).toEqual([]);`,
  },
];

const InstallationDetails: React.FC = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    codeSample: '',
    configJson: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand" onClick={() => navigate('/')}>TST</div>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about-team')}>About</li>
          <li onClick={() => navigate('/docs')}>Docs</li>
          <li onClick={() => navigate('/cli')}>CLI</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </nav>

      <div className="installation-detail-container">
        <h2>TestScript Installation</h2>

        {/* INPUTS */}
        <div className="inputs-grid">
          <label className="input-block">
            <span className="input-label">Installation</span>
            <textarea
              name="codeSample"
              className="long-input"
              placeholder="npm install -g @tst-studio/tst"
              value={inputs.codeSample}
              onChange={handleChange}
            />
          </label>

          <label className="input-block">
            <span className="input-label">Configuration: Add configuration file (tst.config.json)</span>
            <textarea
              name="configJson"
              className="long-input"
              placeholder="tst configure --outFormat=sameLocation"
              value={inputs.configJson}
              onChange={handleChange}
            />
          </label>

          <label className="input-block">
            <span className="input-label">Usage: Generate tests for a file</span>
            <textarea
              name="notes"
              className="long-input"
              placeholder="tst generate < filename >"
              value={inputs.notes}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* TABLE */}
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Step</th>
                <th>Command</th>
                <th>Description</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td><td>Init</td><td>npx tst init</td>
                <td>Scaffold config and folders</td><td>Pending</td><td>Creates meta + tests dir</td>
              </tr>
              <tr>
                <td>2</td><td>Generate</td><td>npx tst gen</td>
                <td>Generate tests from TS function</td><td>Pending</td><td>Reads from stdin/file</td>
              </tr>
              <tr>
                <td>3</td><td>Watch</td><td>npx tst watch</td>
                <td>Regen tests on refactors</td><td>Pending</td><td>AST-aware updates</td>
              </tr>
              <tr>
                <td>4</td><td>Check</td><td>npx tst check</td>
                <td>Pre-commit sync & gaps</td><td>Pending</td><td>Blocks stale metas</td>
              </tr>
              <tr>
                <td>5</td><td>Docs</td><td>open docs</td>
                <td>Open quick start guide</td><td>Pending</td><td>Local or web</td>
              </tr>
              <tr>
                <td>6</td><td>CI</td><td>tst ci</td>
                <td>CI mode summary outputs</td><td>Pending</td><td>PR-friendly report</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* TEST CASES SECTION */}
        <div className="tests-list">
          {mockTests.map((t) => (
            <article key={t.id} className={`test-card ${t.status}`}>
              <header className="test-card__head">
                <span className="test-badge">{t.status}</span>
                <h4 className="test-title">{t.name}</h4>
              </header>

              <pre className="code">
                {t.body.split('\n').map((line, i) => {
                  const ln = i + 1;
                  const hl = t.highlightLines?.includes(ln);
                  return (
                    <div key={i} className={`code-line ${hl ? 'line-attn' : ''}`}>
                      <span className="ln">{ln}</span>
                      <span className="code-content">{line}</span>
                    </div>
                  );
                })}
              </pre>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default InstallationDetails;
