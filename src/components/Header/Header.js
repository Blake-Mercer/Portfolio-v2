import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper overlay'>
      <div className='dark-overlay'>
        <div className='main-info'>
          <h1>Blake Mercer </h1>
          <Typed
            className='text-typed'
            strings={[
              'Frontend Web Developer',
              'Analytical Thinker',
              'Philly Cheesesteak Enthusiast',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <a href='' className='btn-main-offer'>
            {' '}
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
