import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Team</h1>
      <h2> Meet the Team</h2>
      <div className='team-grid'>
        <div className='team-member'>
          <img src='/public/images/member1' alt='Team Member 1' />
          <h3> Member Name 1</h3>
          <p>
            <strong>Role</strong>
          </p>
        </div>

        <div className='team-member'>
          <img src='/public/images/member1' alt='Team Member 2' />
          <h3> Member Name 2</h3>
          <p>
            <strong>Role</strong>
          </p>
        </div>

        <div className='team-member'>
          <img src='/public/images/member1' alt='Team Member 3' />
          <h3> Member Name 3</h3>
          <p>
            <strong>Role</strong>
          </p>
        </div>

        <div className='team-member'>
          <img src='/public/images/member1' alt='Team Member 4' />
          <h3> Member Name 4</h3>
          <p>
            <strong>Role</strong>
          </p>
        </div>

        <div className='team-member'>
          <img src='/public/images/member1' alt='Team Member 5' />
          <h3> Member Name 5</h3>
          <p>
            <strong>Role</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
