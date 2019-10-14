import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AlfaRomeo from './../assets/alfa-romeo.png'
import Audi from './../assets/audi.png'
import Bmw from './../assets/bmw.png'
import Lexus from './../assets/lexus.png'
import Toyota from './../assets/toyota.png'
import Honda from './../assets/honda.png'
import bgg from './../assets/makeselect.jpg'
import Nissan from './../assets/nissan.png'
import Ferrari from './../assets/ferrari.png'
import Hyundai from './../assets/hyundai.png'
import AstonMartin from './../assets/astonmartin.png'
import Bently from './../assets/bently.png'
import Volvo from './../assets/volvo.png'
import Infiniti from './../assets/infiniti.png'
import Chevrolet from './../assets/chevrolet.png'
import Ford from './../assets/ford.png'
import Cadillac from './../assets/cadillac.png'
import Dodge from './../assets/dodge.png'
import Chrysler from './../assets/chrysler.png'
import Buick from './../assets/buick.png'
import Mercury from './../assets/mercury.png'
import Jaguar from './../assets/jaguar.png'
import Acura from './../assets/acura.png'
import Mazda from './../assets/mazda.png'
import Fiat from './../assets/fiat.png'
import LandRover from './../assets/landrover.png'
import Maserati from './../assets/maserati.png'
import Porsche from './../assets/porsche.png'
import Saab from './../assets/saab.png'
import Volkswagen from './../assets/volkswagen.png'
import Subaru from './../assets/subaru.png'
import Kia from './../assets/kia.png'
import Jeep from './../assets/jeep.png'
import Mercedes from './../assets/mercedes.png'
import Lamborghini from './../assets/lamborghini.png'
import Lotus from './../assets/lotus.png'
import Saturn from './../assets/saturn.png'
import Pontiac from './../assets/pontiac.png'
import Suzuki from './../assets/suzuki.png'
import Mitsubishi from './../assets/mitsubishi.png'
import Mini from './../assets/mini.png'
import Mclaren from './../assets/mclaren.png'

//fonts for drop-downs/keglist

class MakeSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  importClicked: false,
  americanClicked: false,
  exoticClicked: false
  }
}

handleImportList = () => {
  let temp = !this.state.importClicked
  this.setState ({
    importClicked: temp
  })
}

handleAmericanList = () => {
  let temp = !this.state.americanClicked
  this.setState ({
    americanClicked: temp
  })
}

handleExoticList = () => {
  let temp = !this.state.exoticClicked
  this.setState ({
    exoticClicked: temp
  })
}

render() {
  return (
  <div className='make-list-background'>

    <div>
      <h1 className='make-list-header'>MAKE LIST HEADER</h1>
    </div>

    <div onClick={() => this.handleImportList()} className='make-dropdown'><h1>European</h1></div>
    <div className='layer'>
  { this.state.importClicked &&
    <div className='testtest'>
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

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Nissan'}
        }
      }>
     <img src={Nissan} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Ferrari'}
        }
      }>
     <img src={Ferrari} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Jaguar'}
        }
      }>
     <img src={Jaguar} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Astin Martin'}
        }
      }>
     <img src={AstonMartin} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Bently'}
        }
      }>
     <img src={Bently} className='make-select' />
    </Link>
  </div>
  }
</div>

  <div onClick={() => this.handleExoticList()} className='make-dropdown'><h1>American</h1></div>
  <div className='layer'>
  { this.state.exoticClicked &&
    <div className='testtest'>
    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Volvo'}
        }
      }>
     <img src={Volvo} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Infiniti'}
        }
      }>
     <img src={Infiniti} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Kia'}
        }
      }>
     <img src={Kia} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Ford'}
        }
      }>
     <img src={Ford} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Chevrolet'}
        }
      }>
     <img src={Chevrolet} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Cadillac'}
        }
      }>
     <img src={Cadillac} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Dodge'}
        }
      }>
     <img src={Dodge} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Chrysler'}
        }
      }>
     <img src={Chrysler} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Buick'}
        }
      }>
     <img src={Buick} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Mercury'}
        }
      }>
     <img src={Mercury} className='make-select' />
    </Link>
  </div>
  }
</div>

  <div onClick={() => this.handleAmericanList()} className='make-dropdown'><h1>Import</h1></div>
  <div className='layer'>
  { this.state.americanClicked &&
    <div className='testtest'>
    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Fiat'}
        }
      }>
     <img src={Fiat} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Land Rover'}
        }
      }>
     <img src={LandRover} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Maserati'}
        }
      }>
     <img src={Maserati} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Porsche'}
        }
      }>
     <img src={Porsche} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Saab'}
        }
      }>
     <img src={Saab} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Volkswagen'}
        }
      }>
     <img src={Volkswagen} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Lotus'}
        }
      }>
     <img src={Lotus} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Saturn'}
        }
      }>
     <img src={Saturn} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Pontiac'}
        }
      }>
     <img src={Pontiac} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Suzuki'}
        }
      }>
     <img src={Suzuki} className='make-select' />
    </Link>
    </div>
    }
    </div>

    <div onClick={() => this.handleClick()} className='make-dropdown'><h1>etc</h1></div>
    <div className='layer'>
    { this.state.clicked &&
      <div className='testtest'>
    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Mitsubishi'}
        }
      }>
     <img src={Mitsubishi} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Mini'}
        }
      }>
     <img src={Mini} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Mclaren'}
        }
      }>
     <img src={Mclaren} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Subaru'}
        }
      }>
     <img src={Subaru} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Jeep'}
        }
      }>
     <img src={Jeep} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Mercedes'}
        }
      }>
     <img src={Mercedes} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Lamborghini'}
        }
      }>
     <img src={Lamborghini} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Toyota'}
        }
      }>
     <img src={Toyota} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Toyota'}
        }
      }>
     <img src={Toyota} className='make-select' />
    </Link>

    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Mazda'}
        }
      }>
     <img src={Mazda} className='make-select' />
    </Link>
    </div>
  }
  </div>

    <div onClick={() => this.handleClick()} className='make-dropdown'><h1>etc</h1></div>
    <div className='layer'>
    { this.state.clicked &&
      <div className='testtest'>
    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Honda'}
        }
      }>
     <img src={Honda} className='make-select' />
    </Link>


    <Link to={
        {
        pathname: '/vehicles',
        state: {make: 'Acura'}
        }
      }>
     <img src={Acura} className='make-select' />
    </Link>

  <Link to={
      {
      pathname: '/vehicles',
      state: {make: 'Hyundai'}
      }
    }>
   <img src={Hyundai} className='make-select' />
  </Link>
  </div>
}
</div>
</div>

    );
  }
}


export default MakeSelect;
