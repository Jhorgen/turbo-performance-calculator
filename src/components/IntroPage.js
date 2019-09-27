import React from 'react'
import  introImage  from './../assets/intro.png'
import { Link } from 'react-router-dom'

function IntroPage() {

  return (
    <div>
    <div className='intro-page'>
    <Link to='/app'>
    <img src={introImage} />
    </Link>
    </div>
    <div className='intro-header'>
    <h1>Boosted Performance Calculator</h1>
    </div>
    </div>
  );
}

export default IntroPage;
