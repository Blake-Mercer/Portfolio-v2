import React from 'react';

const Project = (props) => {
  const { icon, picture, alt, name, onClick } = props;
  return (
    <div className='project-image-box' onClick={onClick}>
      <div className='project-name'>{name}</div>
      <img className='project-img' src={picture} alt={alt} />
      <div className='overflow'></div>
      <i className={`${icon} project-icon`}></i>
    </div>
  );
};

export default Project;
