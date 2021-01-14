import React from 'react';
import '@fortawesome/free-brands-svg-icons';

const TechItem = (props) => {
  const { name, desc, iconName } = props;
  return (
    <div className='col-md-4 col-sm-6 col-6'>
      <div className='box'>
        <h3>{name}</h3>
        <p>{desc}</p>
        <i className={`${iconName} box-images`}></i>
      </div>
    </div>
  );
};

export default TechItem;
