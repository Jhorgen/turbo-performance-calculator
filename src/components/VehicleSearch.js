import React from 'react';
import {connect} from 'react-redux';
import {fetchVehicle} from './../actions/index';
import Vehicle from './Vehicle';
import image from './../assets/makeselect.jpg';
import audi from './../img/audibackground.png';
import alfa_romeo from './../img/alfabackground.jpg'
import toyota from './../img/toyotabackground.jpg'
import lexus from './../img/lexusbackground.jpg'
import bmw from './../img/bmwbackground.jpg'

function imageForMake(make) {
  switch(make) {
    case 'Audi': return audi;
    case 'Alfa Romeo': return alfa_romeo;
    case 'Bmw': return bmw;
    case 'Toyota': return toyota;
    case 'Lexus': return lexus;

  }

}


const VehicleSearch = (props) => {
  var backgroundStyle = {
    backgroundImage: `url(${imageForMake(props.make)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '80rem'
  }
  let model = null;
  let year = null;
  let trim = null;
  return (
    <div style={backgroundStyle}>
    <h1 class='make-header'>{props.make}</h1>
  <div className='input-form'>
    <form onSubmit={(e) => { e.preventDefault();
        props.dispatch(fetchVehicle(props.make, model.value, year.value, trim.value))}}>
      <input placeholder='Model' ref={(input) => {model = input;}}/>
      <input placeholder='Year' ref={(input) => {year = input;}}/>
      <input placeholder='Trim' ref={(input) => {trim = input;}}/>
      <button>Submit</button>
    </form>
    <div className='vehicle-result'>
    {props.loading
      ? <p className='loading'>Loading...</p>
      : props.error
      ? <p>Error, try again</p>
      : props.vehicles.map(vehicle => <Vehicle vehicle={vehicle} />)
    }
    </div>
  </div>
</div>
  );
}

export default connect(state => state)(VehicleSearch);
