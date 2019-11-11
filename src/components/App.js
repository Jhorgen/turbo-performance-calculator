import React from "react";
import { connect } from "react-redux";
import { fetchVehicle } from "./../actions/index";
import Vehicle from "./Vehicle";
import VehicleSearch from "./VehicleSearch";
import RunThis from "./Vehicle";
import "./../App.css";

const App = props => {
  console.log(props.make);
  return (
    <div>
      <VehicleSearch make={props.make} />
    </div>
  );
};

export const ConnectedApp = connect(state => {
  console.log(state);
  return state;
})(App);
