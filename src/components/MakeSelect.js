import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AlfaRomeo from './../assets/alfa-romeo.png'
import Audi from './../assets/audi.png'
import Bmw from './../assets/bmw.png'
import Lexus from './../assets/lexus.png'
import Toyota from './../assets/toyota.png'

const MakeSelect = (props) => (
  <div>
    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Alfa Romeo'}
        }
      }>
     <img src={AlfaRomeo} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Audi'}
        }
      }>
     <img src={Audi} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Bmw'}
        }
      }>
     <img src={Bmw} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Lexus'}
        }
      }>
     <img src={Lexus} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Toyota'}
        }
      }>
     <img src={Toyota} className='make-select' />
    </Link>
  </div>
  );


export default MakeSelect;
