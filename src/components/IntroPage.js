import React from 'react'
import introImage  from './../assets/intro.png'
import turbo from './../assets/turbo1.png'
import { Link } from 'react-router-dom'

function IntroPage() {
  return (
    <div>
    <div className='intro-page'>
    <Link to='/makes'>
    <img className='turbo-image' src={turbo} />
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
