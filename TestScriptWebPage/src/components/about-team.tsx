import React from 'react';
import '../index.css';

const About: React.FC = () => {
  return (
    <>
      <div className='hero'>
        <h1>About Team</h1>
        <h2> Meet the Team</h2>
        <div className='team-grid'>
          <div className='team-member'>
            <img
              src='../images/member1.png'
              alt='Team Member 1'
              style={{ width: '500px', height: '600px' }}
            />
            <h3> Member Name 1</h3>
            <p>
              <strong>Role</strong>
            </p>
          </div>

          <div className='team-member'>
            <img
              src='/images/member2.jpeg'
              alt='Team Member 2'
              style={{ width: '500px', height: '600px' }}
            />
            <h3> Member Name 2</h3>
            <p>
              <strong>Role</strong>
            </p>
          </div>

          <div className='team-member'>
            <img
              src='/images/member3.jpeg'
              alt='Team Member 3'
              style={{ width: '500px', height: '600px' }}
            />
            <h3> Member Name 3</h3>
            <p>
              <strong>Role</strong>
            </p>
          </div>

          <div className='team-member'>
            <img
              src='/images/member4.jpg'
              alt='Team Member 4'
              style={{ width: '500px', height: '600px' }}
            />
            <h3> Member Name 4</h3>
            <p>
              <strong>Role</strong>
            </p>
          </div>

          <div className='team-member'>
            <img
              src='/images/member5.png'
              alt='Team Member 5'
              style={{ width: '500px', height: '600px' }}
            />

            <h3> Member Name 5</h3>
            <p>
              <strong>Role</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
