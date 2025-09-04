import './InstallationPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

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
  function DemoVideo() {
    return (
      <div className='demo-video'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/dQw4w9WgXcQ' // replace with your video
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <>
      <div className='hero'>
        <nav className='navbar'>
          <div className='nav-brand' onClick={() => navigate('/')}>
            TST
          </div>
          <ul className='nav-links'>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about-team')}>About</li>
            <li onClick={() => navigate('/docs')}>Docs</li>
            <li onClick={() => navigate('/cli')}>CLI</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
          </ul>
        </nav>

        <div className='testscript-info'>
          <h2 className='testscript-title'>TestScript</h2>
          <h3 className='testscript-description'>
            Evaluates project code and quickly generates runnable, high-quality
            Vitest tests with minimal effort, for a safer development
            experience.
          </h3>
          <div className='tables-row'>
            <div className='features-wrapper'>
              <h2 className='product-name'>Key Features:</h2>
              <table className='features-table'>
                <tbody>
                  <tr>
                    <td>Repo-aware imports</td>
                  </tr>
                  <tr>
                    <td>Works with NodeNext/ESM</td>
                  </tr>
                  <tr>
                    <td>Supports React &amp; Express</td>
                  </tr>
                  <tr>
                    <td>Multiple Persona leverage</td>
                  </tr>
                  <tr>
                    <td>
                      Post-process &amp; Self-heal to return runnable tests
                    </td>
                  </tr>
                  <tr>
                    <td>CLI + Config (Current provider: OpenAI)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='prereq-wrapper'>
              <h2 className='product-name'>Prerequisites:</h2>
              <table className='prereq-table'>
                <tbody>
                  <tr>
                    <th>Runtime</th>
                    <td>Node.js 18+ &amp; npm 9+</td>
                  </tr>
                  <tr>
                    <th>Package type</th>
                    <td>ESM</td>
                  </tr>
                  <tr>
                    <th>TypeScript</th>
                    <td>Installed</td>
                  </tr>
                  <tr>
                    <th>Vitest</th>
                    <td>Installed</td>
                  </tr>
                  <tr>
                    <th>LLM provider</th>
                    <td>API Key available</td>
                  </tr>
                  <tr>
                    <th>Network</th>
                    <td>Outbound HTTPS to LLM provider</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='steps-wrapper'>
              <h2 className='product-name'>Steps:</h2>
              {/* INPUTS */}
              <div className='inputs-grid'>
                <label className='input-block'>
                  <span className='input-label'>{'1.) Installation'}</span>
                  <p className='long-input'>npm install -g @tst-studio/tst</p>
                </label>

                <label className='input-block'>
                  <span className='input-label'>
                    {`2.) Configuration: Add configuration file (tst.config.json)`}
                  </span>
                  <p className='long-input'>
                    {'tst configuration --outFormat=sameLocation'}
                  </p>
                </label>

                <label className='input-block'>
                  <span className='input-label'>
                    {`3.) Usage: Generate tests for a file`}
                  </span>
                  <p className='long-input'>{'tst generate < filename >'}</p>
                </label>
                <label className='input-block'>
                  <span className='input-label'>{'4.) API key'}</span>
                  <p className='long-input'>
                    {'API key is required for .env file'}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <h2 className='testscript-installation'>Tutorial:</h2>
          <iframe
            className='demo-video'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/cSW7uQHNTJE?si=2OBw8i-JGx-5CJKT'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default InstallationDetails;
