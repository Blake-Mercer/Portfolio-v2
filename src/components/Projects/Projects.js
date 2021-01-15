import React from 'react';
import Project from './Project/Project';
import Yoga from '../../images/yoga.jpg';
import Burger from '../../images/burger.jpg';
import Clothes from '../../images/clothes.jpg';
import Picture from '../../images/picture.jpg';
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {
  const projectPopup = (pic, name, desc, website, demo) => {
    let content = (
      <>
        <img className='project-image-popupbox' src={pic} alt={name} />
        <p>{desc}</p>
        <b>Demo:</b>
        <a href className='hyper-link' onClick={() => window.open(demo)}>
          {name}
        </a>
        <br />
        <b>
          {website.includes('github')
            ? 'View code on Github:'
            : 'Live Website:'}
        </b>
        <a href className='hyper-link' onClick={() => window.open(website)}>
          {name}
        </a>
      </>
    );
    if (!demo) {
      content = (
        <>
          <img className='project-image-popupbox' src={pic} alt={name} />
          <p>{desc}</p>
          <b>
            {website.includes('github')
              ? 'View code on Github:'
              : 'Live Website:'}
          </b>
          <a href className='hyper-link' onClick={() => window.open(website)}>
            {name}
          </a>
        </>
      );
    }

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: name,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
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
                'Built with WordPress, Divi.',
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
                'Built with React, Redux, Firebase, React-Router, Jest, Enzyme.',
                'https://github.com/Blake-Mercer/burger-builder-redux',
                'https://blake-mercer.github.io/burger-builder-redux/'
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
                'Built with Node, Express, Multer, Cookie-Session, FS.',
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
                'Built with ',
                'https://github.com/Blake-Mercer/picture-in-picture-widget',
                'https://blake-mercer.github.io/picture-in-picture-widget/'
              )
            }
          />
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Projects;
