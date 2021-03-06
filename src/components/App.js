import React, { Component } from "react";
import { connect } from "react-redux";
import "./../App.css";
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
import mini from "./../img/minibackground.jpg";
import chevy from "./../img/chevybackground.jpg";
import jeep from "./../img/jeepbackground.jpg";
import { Col, Form, FormGroup, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      change: 'white',
      button: '',
      changed: '',
      format: '',
      widthAdjust: '',
      containerAdjust: false,
      correctMake: '',
      trimNotificaton: "",
      backgroundHide: "100vh",
      backgroundImageHide: true,
      buttonChange: '',
      yearInput: '',
      modelInput: null,
      colAdjust: 5
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
      case "Mini":
      return mini;
      case "Chevrolet":
      return chevy;
    }
  }

  onSubmit() {
    setTimeout( () => {
      this.setState({modelInput: '', yearInput: ''})
      this.setState({colAdjust: 5})
      this.setState({buttonChange: ''})
    }, 500);

    setTimeout( () => {
      if(this.props.vehicles.length > 0){
        this.setState({trimNotificaton: <Row className="justify-content-center mt-2 text-white ml-3" style={{width: '100%'}}>
        <Col sm={1}><h2 className="pr-2">Year</h2></Col>
        <Col sm={1} className="mr-2"><h2 className="pr-2">Model</h2></Col>
        <Col sm={1} className="ml-3"><h2>Trim</h2></Col>
      </Row>
    }); this.setState({backgroundImageHide: false})
  }
}, 500);

this.setState({correctMake: true})
setTimeout( () => {
  if(this.props.vehicles.length > 5) {
    this.setState({backgroundHide: "100%"})
  } else {
    this.setState({backgroundHide: "100vh"})
  }
}, 400);

}

onSearchResultClick() {
  let container = this.state.containerAdjust
  this.setState({backgroundHide: '100vh', containerAdjust: !container, trimNotificaton: '', widthAdjust: '100%', changed: 'none', format: 'center', change: 'black' })
  this.setState({ button: <div style={{color: 'white'}}>
  <Link to={{ pathname: "/search",
    state: { make: this.props.make}}
  }>
  <Button color="secondary" onClick={() => window.location.reload()}>Search again!</Button></Link></div>})
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(this.state.yearInput.length > 3 && this.state.modelInput !== null) {
      this.setState({buttonChange: <Button className="vehicle-scale" color="info">Submit</Button>})
      this.setState({colAdjust: 4})
    } else {
      this.setState({buttonChange: '', colAdjust: 5})
    }
  }

  render() {

    var backgroundStyle = {
      backgroundImage: `url(${this.imageForMake(this.props.make)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: this.state.backgroundHide,
      backgroundColor: 'Black'
    };

    var backgroundStyleHidden = {
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: this.state.backgroundHide,
      backgroundColor: 'Black'
    }

    let model = null;
    let year = null;

    return (
      <div style={this.state.backgroundImageHide ? backgroundStyle : backgroundStyleHidden}>
        <Row className="justify-content-between">
          <Link to='/'>
            <Button className="mt-3 ml-5" color="info">Main menu</Button>
          </Link>
          <span className="mt-3 mr-5">{this.state.button}</span>
          <span style={{display: this.state.changed}} onClick={() => this.onSubmit()}><Button onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(
                fetchVehicle(this.props.make, model.value, year.value)
              );
            }} className="mt-3 mr-5" color="secondary">Search all</Button></span>
          </Row>

          <h1 style={{display: this.state.changed}} class="make-header">{this.props.make}</h1>
          <div style={{display: this.state.changed}} className="input-form">
            <Form autocomplete="off" className="input-form-adjust"
              onSubmit={(e) => {
                e.preventDefault();
                this.props.dispatch(
                  fetchVehicle(this.props.make, model.value, year.value)
                );
              }}
              >
              <FormGroup row>
                <Col sm={this.state.colAdjust}>
                  <input className="input-bs"
                    placeholder="Year"
                    ref={input => {
                      year = input;
                    }} value={this.state.yearInput} name="yearInput" onChange={this.handleInput}
                    />
                </Col>
                <Col sm={2} className="text-center vehicle-scale-2">
                  <span className="make-form-prop">{this.props.make}</span>
                </Col>
                <Col className="vehicle-scale-col" sm={this.state.colAdjust}>
                  <input className="input-bs"
                    placeholder="Model"
                    ref={input2 => {
                      model = input2;
                    }} value={this.state.modelInput} name="modelInput" onChange={this.handleInput}
                    onKeyDown={this.onKeyDown}
                    />
                </Col>
                <Col sm={2}>
                  <span onClick={() => this.onSubmit()}>{this.state.buttonChange}</span>
                </Col>
              </FormGroup>
            </Form>
          </div>
          {this.state.trimNotificaton}
          <div className="5" onClick={() => this.onSearchResultClick()} style={{color: this.state.change, justifyContent: this.state.format}} className="vehicle-result">
            {this.props.loading ? (
              <p className="loading">test</p>
            ) : this.props.error ? (
              <p>Loading...</p>
            ) : (
              this.props.vehicles.map((vehicle) => <Vehicle vehicle={vehicle} key={vehicle.id} changed={this.state.changed} widthAdjust={this.state.widthAdjust} containerAdjust={this.state.containerAdjust} correctMake={this.state.correctMake} />)
            )}
          </div>
        </div>
      );
    }
  }


  export const VehicleSearch = connect(state => state)(App);
