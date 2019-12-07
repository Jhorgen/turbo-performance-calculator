import React from "react";
import { connect } from "react-redux";
import VehicleSearch from "./VehicleSearch";
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
