import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Input, Button, Label } from 'reactstrap';

class Vehicle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newHorsepower: null,
      newTorque:  null,
      selectValue: 0,
      upgradesRequired: null,
      none: this.props.changed,
      turboMenu: false,
      selectedTrim: null,
      selectColor: 'white',
      trimSelection: this.props.correctMake,
    }
  }

   calculateRestult = (e, horsepower, torque, psi) => {
     e.preventDefault();
     psi = psi === '' ? 0 : psi

     let horsepowerResult = parseInt(horsepower) + parseInt(psi*8) + parseFloat(this.state.selectValue)
     let torqueResult = parseInt(torque) + parseInt(psi) + parseFloat(this.state.selectValue)

     console.log("hp, torque, psi:", horsepower, torque, psi);

      this.setState({newHorsepower: 'Turbocharged horsepower: ' + horsepowerResult, newTorque: 'Turbocharged torque: ' + torqueResult})
    }

  turboInput = (e) => {
    this.setState({...this.state, selectValue: e.target.value});
    console.log("turbo input:", this.state.selectValue);
  }

  powerCheck = () => {
    let horsepower = +this.state.newHorsepower.replace(/[^0-9.]/g,"");

    if (horsepower > 500) {
    this.setState({
      upgradesRequired: "Upgrades required!"
    })
  }
  else {
    console.log('Ran');
  }
}

handleClick(turboMenu, selectedTrim, none) {
  this.setState({none: this.props.changed})
  this.setState({selectedTrim:
    <div className="1">
      <Row className="justify-content-center">
      <Col sm={1}>{this.props.vehicle.year}</Col>
      <Col sm={1}>{this.props.vehicle.make}</Col>
      <Col sm={1}>{this.props.vehicle.model}</Col>
      <Col sm={1}>{this.props.vehicle.trim}</Col>
      </Row><br/>
    <Row className="justify-content-center mb-3">
      <Col sm={4}>
    <span style={{fontSize: '1.2rem'}}>Standard horsepower: <strong style={{textShadow: '1px 1px 1px crimson'}}>{this.props.vehicle.horsepower}</strong></span><br/>
      </Col>
      <Col sm={4}>
    <span style={{fontSize: '1.2rem'}}>Standard torque: <strong style={{textShadow: '1px 1px 1px crimson'}}>{this.props.vehicle.torque}</strong></span><br/>
      </Col>
    </Row>
  <hr style={{background: 'white'}} />
    </div>
        })
    this.setState({ turboMenu: !turboMenu})
}


render() {
  const { trimSelection } = this.state;
  const { turboMenu } = this.state;
  const { selectedTrim } = this.state;

  let turboMenuContainer={
    color: 'white',
    background: '#00000042',
    fontSize: '2rem'
  }

  var unclickedStyle = {
    color: 'black'
  }

  var clickedStyle = {
    color: "white"
  }

  let psi

  return (
      <div>
          { trimSelection
    ? <div className="mapped-v" style={{display: this.props.changed}} onClick={() => this.handleClick()}><Row className="justify-content-center"><p className="pr-2">{this.props.vehicle.year}</p>
    <p className="pr-2">{this.props.vehicle.model}</p>
    <p>{this.props.vehicle.trim}</p></Row></div>
  : null
  }

   { turboMenu
   ? <div className="3" style={turboMenuContainer} >
    <div className="4"> {this.state.selectedTrim}</div>
     <form onSubmit={(e) => this.calculateRestult(e, this.props.vehicle.horsepower, this.props.vehicle.torque, psi.value)}>
       <Row className="justify-content-center">
         <Col sm={4}>
           <Label>Turbocharger Selection</Label>
    <Input type="select" onChange={this.turboInput} >
    <option value=''>Select turbo</option>
    <option value='0.5'>GT28R</option>
    <option value='1'>K03</option>
    </Input>
    </Col>
    <Col sm={4}>
      <Label>Boost Pressure (PSI)</Label>
    <input ref={(input) => {psi = input;}} class='psi-input input-bs' type='number' placeholder="1" />
    </Col>
    </Row>
    <Button className="mt-4" size="lg" color="info">Submit</Button>{' '}
    </form>
    <div>
    <h1>{this.state.newHorsepower}</h1>
    <h1>{this.state.newTorque}</h1>
    </div>
    <h2>{this.state.upgradesRequired}</h2>
   </div>
     :null
   }
 </div>

  );
}
}

export default connect(state => state)(Vehicle);
