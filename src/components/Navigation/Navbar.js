import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFire } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <div className='container'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              PortfolioHub
              <FontAwesomeIcon
                icon={faFire}
                style={{ color: 'white', marginLeft: '5px' }}
              />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a className='nav-link ' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Experience
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Tech
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
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
