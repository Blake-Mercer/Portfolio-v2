import React from 'react';
import { scroller } from 'react-scroll';
import Resume from '../../images/resume.pdf'

const Footer = () => {
  const scrollTo = (path) => {
    scroller.scrollTo(path, {
      duration: 800,
      delay: 0,
      offset: -100,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row text-center justify-content-center'>
          <div className='col-lg-4 col-md-6 col-sm-6 mb-3'>
            <div className='d-flex justify-content-center'>
              <p>Former Stats Guy</p>
            </div>
            <div className='d-flex justify-content-center'>
              <a href={Resume}>Resume</a>
            </div>
            <div className='d-flex justify-content-center'>
              <p>Blake.Mercer93@gmail.com</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 mb-3'>
            <div className='row'>
              <div className='col'>
                <a
                  className='footer-nav'
                  href='#'
                  onClick={() => scrollTo('home')}>
                  Home
                </a>
                <br />
                <a
                  className='footer-nav'
                  href='#'
                  onClick={() => scrollTo('about')}>
                  About Me
                </a>
                <br />
                <a
                  className='footer-nav'
                  href='#'
                  onClick={() => scrollTo('experience')}>
                  Experience
                </a>
              </div>
              <div className='col'>
                <a
                  className='footer-nav'
                  href='#'
                  onClick={() => scrollTo('projects')}>
                  Projects
                </a>
                <br />
                <a
                  className='footer-nav'
                  href='#'
                  onClick={() => scrollTo('tech')}>
                  Tech
                </a>
                <br />
                <a
                  className='footer-nav'
                  href='#'
                  onClick={() => scrollTo('contact')}>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <h3 className='text-center'> Connect With Me!</h3>
            <div className='d-flex justify-content-center'>
              <div className='social'>
                <a
                  href='https://github.com/Blake-Mercer'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/blake-mercer-760961b9/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              </div>
            </div>
            <p className='pt-3 text-center'>
              Copyright &copy; 2020 - PortfolioHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
