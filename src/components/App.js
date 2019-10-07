import React from "react";
import { connect } from 'react-redux';
import { fetchVehicle } from './../actions/index';
import Vehicle from './Vehicle';


const App = (props) => {
    console.log(props.make);
    return (
      <div>
        <div><h1 class='make-header'>{props.make}</h1></div>
        <button onClick={() => props.dispatch(fetchVehicle(props.make))}>Show Vehicles</button>
        {props.loading
          ? <p>Loading...</p>
          : props.error
          ? <p>Error, try again</p>
          : props.vehicles.map(vehicle => <Vehicle vehicle={vehicle} />)

        }
        </div>
      )
      console.log(props.make);

    }

  export const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
  })(App);
