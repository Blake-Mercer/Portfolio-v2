import React from 'react';
import author from '../../images/blake.jpg';

const About = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-md-6 col-xm-12'>
          <div class='cardcontainer'>
            <div class='banner-img'></div>
            <img src={author} alt='Blake' className='profile-img' />
            <h1 class='name'>Blake Mercer</h1>
            <p class='description'>
              Thanks for viewing! I am a runner, a socializer and a yogi.
            </p>
          </div>
        </div>
        <div className='col-md-6 col-xm-12'>
          <h1 className='about-heading'>About Me</h1>
          <p>
            Hey, I'm Blake Mercer from Connecticut. I graduated from Arizona
            State University with a BS in Statistics. I have several years of
            experience in UX and Media. I use these skills to build user
            friendly web applications.
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
