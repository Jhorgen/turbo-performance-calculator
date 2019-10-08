import React from "react";
import { connect } from 'react-redux';
import { fetchVehicle } from './../actions/index';
import Vehicle from './Vehicle';
import VehicleSearch from './VehicleSearch';


const App = (props) => {
    console.log(props.make);
    return (
      <div>
        <div><h1 class='make-header'>{props.make}</h1></div>
        <VehicleSearch make={props.make} />
      </div>
      )
    }

  export const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
  })(App);
