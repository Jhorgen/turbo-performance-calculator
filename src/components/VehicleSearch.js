import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVehicle } from "./../actions/index";
import Vehicle from "./Vehicle";
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
import { Col, Form, FormGroup, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


class VehicleSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noResults: null
    }
  }

  imageForMake(make) {
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

  handleThisThing(test) {
    const xyz = test
    console.log(xyz);
  }

  testHandle(vehicles) {
    console.log('test');
    if(this.props.vehicles.length === 0 ) {
    this.setState({noResults: <div class="no-results">Sorry, no results found!</div>})
    }
  }


  render() {
    var backgroundStyle = {
      backgroundImage: `url(${this.imageForMake(this.props.make)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100vh",
      backgroundColor: 'Black'
    };

      let model = null;
      let year = null;
      let trim = null;
      let x ="test"
      return (
        <div style={backgroundStyle}>

          <Link to='/makes'>
          <Button color="info">Go Back</Button>{' '}
          </Link>
          <h1 class="make-header">{this.props.make}</h1>

          <div className="input-form">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.props.dispatch(
                  fetchVehicle(this.props.make, model.value, year.value, trim.value)
                );
              }}
              >
              <FormGroup row>
                <Col sm={3}>
                  <input className="input-bs"
                    placeholder="Year"
                    ref={input => {
                      year = input;
                    }}
                    />
                </Col>
                <Col sm={1}>
                  <span className="make-form-prop">{this.props.make}</span>
                </Col>
                <Col sm={3}>
                  <input className="input-bs"
                    placeholder="Model"
                    ref={input => {
                      model = input;
                    }}
                    />
                </Col>
                <Col sm={3}>
                  <input className="input-bs"
                    placeholder="Trim"
                    ref={input => {
                      trim = input;
                    }}
                    />
                </Col>
                <Col sm={2}>
                  <span onClick={() => this.testHandle()}><Button color="info">Submit</Button>{' '}</span>
                  </Col>
                </FormGroup>
              </Form>
            </div>
              <div className="vehicle-result">

                {this.props.loading ? (
                  <p className="loading">?</p>
                ) : this.props.error ? (
                  <p>Loading...</p>
                ) : (
                  this.props.vehicles.map((vehicle, test) => <Vehicle vehicle={vehicle} test={test} key={test} onClick={() => this.handleThisThing(test)} />)
                )}
              </div>
              <Row>
                {this.state.noResults}
              </Row>
            </div>
        );
      }
    }

    export default connect(state => state)(VehicleSearch);
