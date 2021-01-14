import React from 'react';
import author from '../../images/riding.png';

const About = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 col-xm-12'>
          <div className='photo-wrapper mb-4'>
            <img className='profile-img' src={author} alt='blake...' />
          </div>
        </div>
        <div className='col-md-6 col-xm-12'>
          <h1 className='about-heading'>About Me</h1>
          <p>
            Hey, I'm Blake Mercer from Connecticut. I studied statistics at
            Arizona State University. I have several years experience in UX and
            Media. Now I use those skills to build user friendly web
            applications.
          </p>
          <p>
            The logic of web development strengthens my analytical side. While
            designing websites and web apps allow for some awesome creative
            expression.
          </p>
          <p>
            Apart from coding, some other activities that I like are trivia,
            pickup soccer, and light reading!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
