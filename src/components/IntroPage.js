import React from 'react';
import introImage  from './../assets/intro.png';
import turbo from './../assets/turbo1.png';
import { Link } from 'react-router-dom';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import turbo1 from './../carouselImages/turbo1.png';
import turbo2 from './../carouselImages/turbo2.png';
import turbo3 from './../carouselImages/turbo3.png';

export const carousel = [
  turbo1,
  turbo2,
  turbo3
];

function IntroPage() {
  return (
    <div>
    <div className='intro-page'>
    <Link to='/makes'>
      <Gallery className='Intro-page' index={0}>
        {carousel.map(image => (
          <GalleryImage className='turbo-image' src={image} />
        ))}
      </Gallery>
    </Link>
    </div>
    <div className='intro-header'>
      <h1>Turbo Concepts</h1>
    <h2>Forced Induction Calculator</h2>
    </div>
    </div>
  );
}

export default IntroPage;
