import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFire } from '@fortawesome/free-solid-svg-icons';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const scrollTo = (path) => {
    scroller.scrollTo(path, {
      duration: 800,
      delay: 0,
      offset: -100,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
        <div className='container'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='s'>
              PortfolioHub
              <FontAwesomeIcon
                icon={faFire}
                style={{ color: 'white', marginLeft: '5px' }}
              />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarDiv'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
            </button>
            <div className='collapse navbar-collapse' id='navbarDiv'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a
                    to='home'
                    data-toggle='collapse'
                    data-target='.navbar-collapse.show'
                    className='nav-link'
                    href='s'
                    onClick={() => scrollTo('home')}
                    aria-current='page'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    to='about'
                    className='nav-link'
                    data-toggle='collapse'
                    data-target='.navbar-collapse.show'
                    href='s'
                    onClick={() => scrollTo('about')}>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    to='tech'
                    href='s'
                    data-toggle='collapse'
                    data-target='.navbar-collapse.show'
                    className='nav-link'
                    onClick={() => scrollTo('tech')}>
                    Tech
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    to='experience'
                    className='nav-link'
                    data-toggle='collapse'
                    data-target='.navbar-collapse.show'
                    href='s'
                    onClick={() => scrollTo('experience')}>
                    Experience
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    to='projects'
                    className='nav-link'
                    data-toggle='collapse'
                    data-target='.navbar-collapse.show'
                    href='s'
                    onClick={() => scrollTo('projects')}>
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    to='contact'
                    className='nav-link'
                    data-toggle='collapse'
                    data-target='.navbar-collapse.show'
                    onClick={() => scrollTo('contact')}
                    href='s'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
