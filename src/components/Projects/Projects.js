import React from 'react';
import { useState } from 'react';
import Project from './Project/Project';
import Yoga from '../../images/yoga.jpg';
import Burger from '../../images/burger.jpg';
import Clothes from '../../images/clothes.jpg';
import Picture from '../../images/picture.jpg';
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {
  const projectPopup = (pic, name, desc, website) => {
    const content = (
      <>
        <img className='project-image-popupbox' src={pic} alt={name} />
        <p>{desc}</p>
        <b>
          {website.includes('github') ? 'View Github:' : 'Live Website:'}{' '}
        </b>{' '}
        <a href className='hyper-link' onClick={() => window.open(website)}>
          {name}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const [project, setProject] = useState([
    'Bikram Yoga Simsbury',
    'Burger Builder App',
    'Node JS: Ecommerce Store',
    // eslint-disable-next-line no-script-url
    'Javascript: Picture-in-Picture Widget',
  ]);

  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: project,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className='projects-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Projects</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <Project
            icon={'fas fa-search-plus'}
            picture={Yoga}
            alt='Bikram Yoga Simsbury'
            name='Bikramyogasimbury.com'
            onClick={() =>
              projectPopup(
                Yoga,
                'Bikram Yoga Simsbury',
                'ayyyooo',
                'https://bikramyogasimsbury.com/'
              )
            }
          />
          <Project
            icon='fas fa-search-plus'
            picture={Burger}
            alt='Burger Builder App...'
            name='React: Burger Builder App'
            onClick={() =>
              projectPopup(
                Burger,
                'Burger Builder App',
                'ayyyooo',
                'https://github.com/Blake-Mercer/burger-builder-redux'
              )
            }
          />
          <Project
            icon='fas fa-search-plus'
            picture={Clothes}
            alt='Node Ecomm'
            name='Node JS: Ecommerce Store'
            onClick={() =>
              projectPopup(
                Clothes,
                'Node JS: Ecommerce Store',
                'ayyyooo',
                'https://github.com/Blake-Mercer/ecomm-app-node-express'
              )
            }
          />
          <Project
            icon='fas fa-search-plus'
            picture={Picture}
            alt='Picture-in-Picture Widget'
            name='JS: Picture-in-Picture Widget'
            onClick={() =>
              projectPopup(
                Picture,
                // eslint-disable-next-line no-script-url
                'Javascript: Picture-in-Picture Widget',
                'ayyyooo',
                'https://github.com/Blake-Mercer/picture-in-picture-widget'
              )
            }
          />
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Projects;
