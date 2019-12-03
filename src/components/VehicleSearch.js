import React from "react";
import { connect } from "react-redux";
import { fetchVehicle } from "./../actions/index";
import Vehicle from "./Vehicle";
import image from "./../assets/makeselect.jpg";
import audi from "./../img/audibackground.png";
import alfa_romeo from "./../img/alfabackground.jpg";
import toyota from "./../img/toyotabackground.jpg";
import lexus from "./../img/lexusbackground.jpg";
import bmw from "./../img/bmwbackground.jpg";

import subaru from "./../img/subarubackground.jpg";
import mclaren from "./../img/mclarenbackground.jpg";
import lotus from "./../img/lotusbackground.jpg";
import suzuki from "./../img/suzukibackground.jpg";
import nissan from "./../img/nissanbackground.jpg";
import mitsubishi from "./../img/mitsubishibackground.jpg";
import lamborghini from "./../img/lambobackground.jpg";
import maserati from "./../img/maseratibackground.jpg";
import porsche from "./../img/porschebackground.jpg";
import landrover from "./../img/landroverbackground.jpg";
import insuzu from "./../img/insuzubackground.jpg";
import ford from "./../img/fordbackground.jpg";
import ferrari from "./../img/ferraribackground.jpg";

function imageForMake(make) {
  switch (make) {
    case "Audi":
      return audi;
    case "Alfa Romeo":
      return alfa_romeo;
    case "BMW":
      return bmw;
    case "Toyota":
      return toyota;
    case "Lexus":
      return lexus;
    case "Subaru":
      return subaru;
    case "Mclaren":
      return mclaren;
    case "Lotus":
      return lotus;
    case "Suzuki":
      return suzuki;
    case "Nissan":
      return nissan;
    case "Mitsubishi":
      return mitsubishi;
    case "Lamborghini":
      return lamborghini;
    case "Maserati":
      return maserati;
    case "Porsche":
      return porsche;
    case "Land Rover":
      return landrover;
    case "Insuzu":
      return insuzu;
    case "Ford":
      return ford;
    case "Ferrari":
      return ferrari;
  }
}

const VehicleSearch = props => {
  var backgroundStyle = {
    backgroundImage: `url(${imageForMake(props.make)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh"
  };
  let model = null;
  let year = null;
  let trim = null;
  return (
    <div style={backgroundStyle}>
      <h1 class="make-header">{props.make}</h1>
      <div className="input-form">
        <form
          onSubmit={e => {
            e.preventDefault();
            props.dispatch(
              fetchVehicle(props.make, model.value, year.value, trim.value)
            );
          }}
        >
          <input
            placeholder="Year"
            ref={input => {
              year = input;
            }}
          />
          <span className="make-form-prop">{props.make}</span>
          <input
            placeholder="Model"
            ref={input => {
              model = input;
            }}
          />
          <input
            placeholder="Trim"
            ref={input => {
              trim = input;
            }}
          />
          <button>Submit</button>
        </form>
        <div className="vehicle-result">
          {props.loading ? (
            <p className="loading">Loading...</p>
          ) : props.error ? (
            <p>Error, try again</p>
          ) : (
            props.vehicles.map(vehicle => <Vehicle vehicle={vehicle} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(state => state)(VehicleSearch);
