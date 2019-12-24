import React, { Component } from "react";
import { connect } from "react-redux";
import { loadVehicleData } from "./../actions/index";
import {Row, Col} from 'reactstrap'
import { Link } from "react-router-dom";
import AlfaRomeo from "./../assets/alfa-romeo.png";
import Audi from "./../assets/audi.png";
import BMW from "./../assets/bmw.png";
import Lexus from "./../assets/lexus.png";
import Toyota from "./../assets/toyota.png";
import Honda from "./../assets/honda.png";
import Nissan from "./../assets/nissan.png";
import Ferrari from "./../assets/ferrari.png";
import Hyundai from "./../assets/hyundai.png";
import AstonMartin from "./../assets/astonmartin.png";
import Bently from "./../assets/bently.png";
import Volvo from "./../assets/volvo.png";
import Infiniti from "./../assets/infiniti.png";
import Chevrolet from "./../assets/chevrolet.png";
import Ford from "./../assets/ford.png";
import Cadillac from "./../assets/cadillac.png";
import Dodge from "./../assets/dodge.png";
import Chrysler from "./../assets/chrysler.png";
import Buick from "./../assets/buick.png";
import Mercury from "./../assets/mercury.png";
import Jaguar from "./../assets/jaguar.png";
import Acura from "./../assets/acura.png";
import Mazda from "./../assets/mazda.png";
import Fiat from "./../assets/fiat.png";
import LandRover from "./../assets/landrover.png";
import Maserati from "./../assets/maserati.png";
import Porsche from "./../assets/porsche.png";
import Saab from "./../assets/saab.png";
import Volkswagen from "./../assets/volkswagen.png";
import Subaru from "./../assets/subaru.png";
import Kia from "./../assets/kia.png";
import Jeep from "./../assets/jeep.png";
import Mercedes from "./../assets/mercedes.png";
import Lamborghini from "./../assets/lamborghini.png";
import Lotus from "./../assets/lotus.png";
import Saturn from "./../assets/saturn.png";
import Pontiac from "./../assets/pontiac.png";
import Suzuki from "./../assets/suzuki.png";
import Mitsubishi from "./../assets/mitsubishi.png";
import Mini from "./../assets/mini.png";
import Mclaren from "./../assets/mclaren.png";

//fonts for drop-downs/keglist

class MakeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      europeanClicked: false,
      importClicked: false,
      domesticClicked: false,
      exoticClicked: false
    };
  }

  componentDidMount() {
    this.props.dispatch(
      loadVehicleData())
    }

    handleEuropeanList = () => {
      let temp = !this.state.europeanClicked;
      this.setState({
        europeanClicked: temp
      });
    };

    handleDomesticList = () => {
      let temp = !this.state.domesticClicked;
      this.setState({
        domesticClicked: temp
      });
    };

    handleImportList = () => {
      let temp = !this.state.importClicked;
      this.setState({
        importClicked: temp
      });
    };

    handleExoticList = () => {
      let temp = !this.state.exoticClicked;
      this.setState({
        exoticClicked: temp
      });
    };

    render() {
      return (
        <div className="make-list-background">
          <div className="mb-4">
            <h1 className="make-list-header">Make selection</h1>
          </div>
          <div
            onClick={() => this.handleEuropeanList()}
            className="make-dropdown"
            >
            <h1>European</h1>
          </div>
          <div className="layer">
            {this.state.europeanClicked && (
              <div className="testtest">
                <Row className="align-items-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Aston Martin" }
                      }}
                      >
                      <img src={AstonMartin} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Alfa Romeo" }
                      }}
                      >
                      <img src={AlfaRomeo} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Audi" }
                      }}
                      >
                      <img src={Audi} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Bently" }
                      }}
                      >
                      <img src={Bently} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search/",
                        state: { make: "BMW" }
                      }}
                      >
                      <img src={BMW} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Fiat" }
                      }}
                      >
                      <img src={Fiat} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Maserati" }
                      }}
                      >
                      <img src={Maserati} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Mercedes" }
                      }}
                      >
                      <img src={Mercedes} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Mini" }
                      }}
                      >
                      <img src={Mini} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Jaguar" }
                      }}
                      >
                      <img src={Jaguar} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Land Rover" }
                      }}
                      >
                      <img src={LandRover} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Porsche" }
                      }}
                      >
                      <img src={Porsche} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Saab" }
                      }}
                      >
                      <img src={Saab} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Volkswagen" }
                      }}
                      >
                      <img src={Volkswagen} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Volvo" }
                      }}
                      >
                      <img src={Volvo} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
              </div>
            )}
          </div>

          <div
            onClick={() => this.handleDomesticList()}
            className="make-dropdown"
            >
            <h1>Domestic</h1>
          </div>
          <div className="layer">
            {this.state.domesticClicked && (
              <div className="testtest">
                <Row className="align-items-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Ford" }
                      }}
                      >
                      <img src={Ford} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Chevrolet" }
                      }}
                      >
                      <img src={Chevrolet} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Cadillac" }
                      }}
                      >
                      <img src={Cadillac} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Dodge" }
                      }}
                      >
                      <img src={Dodge} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Chrysler" }
                      }}
                      >
                      <img src={Chrysler} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Buick" }
                      }}
                      >
                      <img src={Buick} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Mercury" }
                      }}
                      >
                      <img src={Mercury} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Jeep" }
                      }}
                      >
                      <img src={Jeep} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Pontiac" }
                      }}
                      >
                      <img src={Pontiac} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Saturn" }
                      }}
                      >
                      <img src={Saturn} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
              </div>
            )}
          </div>

          <div onClick={() => this.handleImportList()} alt="vehicle" className="make-dropdown">
            <h1>Import</h1>
          </div>
          <div className="layer">
            {this.state.importClicked && (
              <div className="testtest">
                <Row className="align-items-center justify-content-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Mazda" }
                      }}
                      >
                      <img src={Mazda} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Honda" }
                      }}
                      >
                      <img src={Honda} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Infiniti" }
                      }}
                      >
                      <img src={Infiniti} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Kia" }
                      }}
                      >
                      <img src={Kia} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Lexus" }
                      }}
                      >
                      <img src={Lexus} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Acura" }
                      }}
                      >
                      <img src={Acura} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Hyundai" }
                      }}
                      >
                      <img src={Hyundai} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Toyota" }
                      }}
                      >
                      <img src={Toyota} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Nissan" }
                      }}
                      >
                      <img src={Nissan} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Mitsubishi" }
                      }}
                      >
                      <img src={Mitsubishi} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Subaru" }
                      }}
                      >
                      <img src={Subaru} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Suzuki" }
                      }}
                      >
                      <img src={Suzuki} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
              </div>
            )}
          </div>

          <div onClick={() => this.handleExoticList()} alt="vehicle" className="make-dropdown">
            <h1>Exotic</h1>
          </div>
          <div className="layer">
            {this.state.exoticClicked && (
              <div className="testtest">
                <Row className="justify-content-center align-items-center">
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Mclaren" }
                      }}
                      >
                      <img src={Mclaren} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Lamborghini" }
                      }}
                      >
                      <img src={Lamborghini} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Lotus" }
                      }}
                      >
                      <img src={Lotus} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                  <Col sm={2}>
                    <Link
                      to={{
                        pathname: "/search",
                        state: { make: "Ferrari" }
                      }}
                      >
                      <img src={Ferrari} alt="vehicle" className="make-select" />
                    </Link>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </div>
      );
    }
  }

  export default connect(state => state)(MakeSelect);
