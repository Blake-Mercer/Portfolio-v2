import React from 'react';

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
        <h1>Experience</h1>
        <br />
        <a
          // eslint-disable-next-line
          href={'bro'}
          target='_blank'
          rel='noreferrer'
          className='btn-resume'>
          {' '}
          Download CV/Resume
        </a>
      </div>
      <div className='container experience-wrapper'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h2>
              <strong>Web Dev / Asst. Director | Bikram Yoga Simsbury</strong>
            </h2>
            <h3>2020-Present</h3>
            <p>
              Developed bikramyogasimbury.com hosted on Wordpress styled with
              DIVI. Integrated the website with the platform MindBody allowing
              studio members to signup for classes online.
            </p>
          </div>
        </div>
        {/* **** */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h2>
              <strong>Media Analyst | Tallwave </strong>
            </h2>
            <h3>2019-2020</h3>
            <p>
              Improve client website effectiveness by measuring, collecting,
              analyzing, and reporting web-traffic data using Google Analytics.
              Create client dashboards using client data to screen for
              actionable data points. Proficient in Microsoft Excel.
            </p>
          </div>
        </div>
        {/* **** */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h2>
              <strong>Media Analyst | Digital Air Strike</strong>
            </h2>
            <h3>2016-2019</h3>
            <p>
              4 years of hands-on paid media experience including execution of
              paid search, paid social advertising and programmatic display for
              clients in various industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
