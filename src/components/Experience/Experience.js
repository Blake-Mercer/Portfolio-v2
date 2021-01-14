import React from 'react';

const Experience = () => {
  return (
    <div className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>Experience</h1>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio iusto earum eos, numquam quidem odit expedita ipsa
              reprehenderit alias doloribus?
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio iusto earum eos, numquam quidem odit expedita ipsa
              reprehenderit alias doloribus?
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio iusto earum eos, numquam quidem odit expedita ipsa
              reprehenderit alias doloribus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
