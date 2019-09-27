import React from 'react'
import { Image } from 'react-bootstrap'
import  introImage  from './../assets/intro.png'
import { Link } from 'react-router-dom'

function IntroPage() {

  return (
    <div>
    <div className='introPage'>
    <Link to='/app'>
    <img src={introImage} />
    </Link>
    </div>
    <div className='introHeader'>
    <h1>Boosted Performance Calculator</h1>
    </div>
    </div>
  );
}

export default IntroPage;
