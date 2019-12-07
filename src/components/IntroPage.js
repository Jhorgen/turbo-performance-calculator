import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import turbo3 from './../carouselImages/turbo3.png';
import {Row, Col} from 'reactstrap';

export const carousel = [
  turbo3
];

function IntroPage() {
  return (
    <div>
      <Row>
    <div className='intro-page'>
    <Link to='/makes'>
    <img src={turbo3}/>
    </Link>
    </div>
  </Row>
    <Row>
    <div className='intro-header'>
      <h1>Turbo Concepts</h1>
    <h2>Forced Induction Calculator</h2>
    </div>
  </Row>
    </div>
  );
}

export default IntroPage;
