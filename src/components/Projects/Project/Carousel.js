import React from 'react';

import Pokemon from '../../../images/pokemon.jpg';
import Burger from '../../../images/burger.jpg';
import Clothes from '../../../images/clothes.jpg';
import Picture from '../../../images/picture.jpg';
import Project from './Project';

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

export const Carousel = () => {
  const projectPopup = (pic, name, desc, website, demo) => {
    let content = (
      <>
        <img className='project-image-popupbox' src={pic} alt={name} />
        <p>{desc}</p>
        <b>Demo:</b>
        <a href='#' className='hyper-link' onClick={() => window.open(demo)}>
          {name}
        </a>
        <br />
        <b>
          {website.includes('github')
            ? 'View code on Github:'
            : 'Live Website:'}
        </b>
        <a href='#' className='hyper-link' onClick={() => window.open(website)}>
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
          <a
            href='#'
            className='hyper-link'
            onClick={() => window.open(website)}>
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
    <>
      <div id='carouselExampleControls' class='carousel ' data-ride='carousel'>
        <div class='carousel-inner'>
          <div className='carousel-item active'>
            <Project
              icon={'fas fa-search-plus'}
              picture={Pokemon}
              alt='Blake Pokedex'
              name='Blakes Pokédex'
              onClick={() =>
                projectPopup(
                  Pokemon,
                  'React Pokédex',
                  'Built with React, React-Router, Axios',
                  'https://github.com/Blake-Mercer/pokedex',
                  'https://blake-mercer.github.io/pokedex/#/'
                )
              }
            />
          </div>
          <div className='carousel-item'>
            <Project
              icon='fas fa-search-plus'
              picture={Burger}
              alt='Burger Builder App...'
              name='React: Burger Builder App'
              onClick={() =>
                projectPopup(
                  Burger,
                  'Burger Builder App',
                  'Burger building application. Built with React, Redux, Firebase, React-Router, Jest, Enzyme.',
                  'https://github.com/Blake-Mercer/burger-builder-redux',
                  'https://blake-mercer.github.io/burger-builder-redux/'
                )
              }
            />
          </div>
          <div className='carousel-item'>
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
          </div>
          <div className='carousel-item'>
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
                  'Built with Vanilla JS and Media Web Devices API.',
                  'https://github.com/Blake-Mercer/picture-in-picture-widget',
                  'https://blake-mercer.github.io/picture-in-picture-widget/'
                )
              }
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
      <PopupboxContainer />
    </>
  );
};
