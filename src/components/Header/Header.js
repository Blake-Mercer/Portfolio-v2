import React from 'react';
import Typed from 'react-typed';
import { scroller } from 'react-scroll';

const Header = () => {
  const scrollTo = (path) => {
    scroller.scrollTo(path, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div id='home' className='header-wrapper overlay'>
      <div className='dark-overlay'>
        <div className='main-info'>
          <h1>Blake Mercer </h1>
          <Typed
            className='text-typed'
            strings={[
              'Philly Cheesesteak Enthusiast',
              'Frontend Web Developer',
              'Astronaut Philanthropist',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <a
            onClick={() => scrollTo('contact')}
            href='#'
            className='btn-main-offer'>
            {' '}
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
