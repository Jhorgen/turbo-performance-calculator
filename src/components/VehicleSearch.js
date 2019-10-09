import React from 'react';
import {connect} from 'react-redux';
import {fetchVehicle} from './../actions/index';
import Vehicle from './Vehicle';

const VehicleSearch = (props) => {
  let model = null;
  let year = null;
  let trim = null;
  return (
  <div className='input-form'>
    <form onSubmit={(e) => { e.preventDefault();
        props.dispatch(fetchVehicle(props.make, model.value, year.value, trim.value))}}>
      <input placeholder='Model' ref={(input) => {model = input;}}/>
      <input placeholder='Year' ref={(input) => {year = input;}}/>
      <input placeholder='Trim' ref={(input) => {trim = input;}}/>
      <button>Submit</button>
    </form>
    <div>
    {props.loading
      ? <p>Loading...</p>
      : props.error
      ? <p>Error, try again</p>
      : props.vehicles.map(vehicle => <Vehicle vehicle={vehicle} />)
    }
    </div>
  </div>
  );
}

export default connect(state => state)(VehicleSearch);
