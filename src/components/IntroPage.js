import React from 'react'
import { Image } from 'react-bootstrap'
import { introImage } from '../assets/intro.png'
import { link } from 'react-router-dom'

function IntroPage() {

  return (
    <div>
    <div className='introPage'>
    <Link to='/App'>
    <img src={introImage} rounded />
    </Link>
    </div>
    <div className='introStyle'>
    <h1>Boosted Performance Calculator</h1>
    </div>

    </div>
  );
}

export default IntroPage;
