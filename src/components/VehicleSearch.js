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
import hyundai from "./../img/hyundaibackground.jpg"
import cadillac from "./../img/cadillacbackground.jpg";
import mazda from "./../img/mazdabackground.jpg";
import kia from "./../img/kiabackground.jpg";
import infiniti from "./../img/infinitibackground.jpg";
import jaguar from "./../img/jaguarbackground.jpg";
import mercedes from "./../img/mercedesbackground.jpg";
import honda from "./../img/hondabackground.jpg";
import acura from "./../img/acurabackground.jpg";
import fiat from "./../img/fiatbackground.jpg";
import saab from "./../img/saabbackground.jpg";
import aston from "./../img/astonbackground.jpg";
import volvo from "./../img/volvobackground.jpg";
import bently from "./../img/bentlybackground.jpg";
import pontiac from "./../img/pontiacbackground.jpg";
import volkswagen from "./../img/volkswagenbackground.jpg";
import dodge from "./../img/dodgebackground.jpg";
import chrysler from "./../img/chryslerbackground.jpg";
import buick from "./../img/buickbackground.jpg";
import jeep from "./../img/jeepbackground.jpg";
import { Col, Form, FormGroup, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class VehicleSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noResults: null,
      change: 'white',
      button: null,
      changed: '',
      format: '',
      widthAdjust: '',
      containerAdjust: false,
      correctMake: '',
      year: '',
      model: '',
      formErrors: {year: '', model: ''},
      yearValid: false,
      modelValid: false,
      formValid: false
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
      case "Cadillac":
      return cadillac;
      case "Mazda":
      return mazda;
      case "Hyundai":
      return hyundai;
      case "Acura":
      return acura;
      case "Kia":
      return kia;
      case "Infiniti":
      return infiniti;
      case "Honda":
      return honda;
      case "Mercedes":
      return mercedes;
      case "Jaguar":
      return jaguar;
      case "Saab":
      return saab;
      case "Volkswagen":
      return volkswagen;
      case "Aston Martin":
      return aston;
      case "Volvo":
      return volvo;
      case "Fiat":
      return fiat;
      case "Bently":
      return bently;
      case "Pontiac":
      return pontiac;
      case "Dodge":
      return dodge;
      case "Chrysler":
      return chrysler;
      case "Buick":
      return buick;
      case "Jeep":
      return jeep;
    }
  }

  handleMakeChange(vehicles) {
      this.setState({correctMake: true})
      console.log(this.props.vehicles.length);
    }

  testThings(change, button, format, containerAdjust) {
    this.setState({ containerAdjust: !containerAdjust })
    this.setState({ widthAdjust: '100%' })
    this.setState({ changed: 'none'})
    this.setState({ format: 'center'})
    this.setState({ change: 'black' })
    this.setState({ button: <div style={{color: 'white'}}>
    <Link to={{ pathname: "/vehicles",
      state: { make: this.props.make}}
    }>
<Button class="secondary" onClick={() => window.location.reload()}>Search again!</Button></Link></div>  })
    if(this.state.button !== null ) {
    this.setState({noResults: <p>Sorry, no results found!</p>})
    }
  }

  goBack(change, button) {
    this.setState({change: 'white'})
    this.setState({button: null})
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

      return (
        <div style={backgroundStyle}>
          <Link to='/makes'>
          <Button color="info">Go Back</Button>{' '}
          </Link>
          <h1 style={{display: this.state.changed}} class="make-header">{this.props.make}</h1>
          <div style={{display: this.state.changed}} className="input-form">
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
                  <span onClick={() => this.handleMakeChange()}><Button color="info">Submit</Button>{' '}</span>
                  </Col>
                </FormGroup>
              </Form>
            </div>
              <div className="5" onClick={() => this.testThings()} style={{color: this.state.change, justifyContent: this.state.format}} className="vehicle-result">
                {this.props.loading ? (
                  <p className="loading">?</p>
                ) : this.props.error ? (
                  <p>Loading...</p>
                ) : (
                  <p>Select trim</p>,
                  this.props.vehicles.map((vehicle, test) => <Vehicle vehicle={vehicle} test={test} key={test} changed={this.state.changed} widthAdjust={this.state.widthAdjust} containerAdjust={this.state.containerAdjust} correctMake={this.state.correctMake} />)
                )}
              </div>
              <Row className="justify-content-center text-white">

                {this.state.button}
              </Row>
            </div>
        );
      }
    }

    export default connect(state => state)(VehicleSearch);
