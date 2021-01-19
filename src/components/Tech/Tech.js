import React from 'react';
import TechItem from './TechItem/TechItem';

const Tech = () => {
  return (
    <div id='tech' className='tech-wrapper'>
      <h1 className='py-5'>My Tech Toolkit</h1>
      <div className='container'>
        <div className='row row-2'>
          <TechItem name='Javascript' iconName='devicon-javascript-plain ' />
          <TechItem name='React' iconName='devicon-react-original ' />
          <TechItem name='Node' iconName='devicon-nodejs-plain ' />
          <TechItem name='Express' iconName='devicon-express-original' />
          <TechItem name='CSS' iconName='devicon-css3-plain ' />
          <TechItem name='Git' iconName='devicon-git-plain ' />
        </div>
      </div>
    </div>
  );
};

export default Tech;
