import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';

class Vehicle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newHorsepower: null,
      newTorque:  null,
      selectValue: 0,
      upgradesRequired: null,
      active: null,
      active2: this.props.test,
      none: this.props.changed,
      turboMenu: false,
      selectedTrim: null,
      newnew: true,
      selectColor: 'white'
    }
  }

   RunThis = (e, horsepower, torque, psi) => {
     e.preventDefault();
     psi = psi === '' ? 0 : psi

     let horsepowerResult = parseInt(horsepower) + parseInt(psi*8) + parseFloat(this.state.selectValue)
     let torqueResult = parseInt(torque) + parseInt(psi) + parseFloat(this.state.selectValue)

     console.log(horsepower, torque, psi);

      this.setState({newHorsepower: 'Turbocharged horsepower: ' + horsepowerResult, newTorque: 'Turbocharged torque: ' + torqueResult})
    }

  callThis = (e) => {
    this.setState({...this.state, selectValue: e.target.value});
    console.log(this.state.selectValue);
  }

  testerTest = () => {
    let horsepower = +this.state.newHorsepower.replace(/[^0-9.]/g,"");

    if (horsepower > 500) {
    console.log('Test');
    this.setState({
      upgradesRequired: "Upgrades required!"
    })
  }
  else {
    console.log('tester');
  }
}

handleClick(turboMenu, selectedTrim, none) {
  this.setState({none: this.props.changed})
  console.log(this.props.changed);
  console.log(this.props.vehicle);
  this.setState({selectedTrim:
    <div>
      <Row>
      <Col sm={3}>{this.props.vehicle.year}</Col>
      <Col sm={3}>{this.props.vehicle.make}</Col>
      <Col sm={3}>{this.props.vehicle.model}</Col>
      <Col sm={3}>{this.props.vehicle.trim}</Col>
      </Row><br/>
      {this.props.vehicle.horsepower}<br/>
      {this.props.vehicle.torque}<br/>
    </div>})

  console.log("trim:", selectedTrim);

  this.setState({ turboMenu: !turboMenu})

this.setState({active: this.props.test})
console.log(this.props.test);

console.log(this.props.vehicles.test);
}

newnewfunc(selectColor) {

  console.log(this.state.selectColor);
}




render() {
  const { showing } = this.state;
  const { turboMenu } = this.state;
  const { selectedTrim } = this.state;

  let testernest={
    color: 'white',
    background: '#00000042'
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

     <div>

    <div style={{display: this.props.changed}} onClick={() => this.handleClick()}><p>{this.props.vehicle.trim}</p></div>

    </div>



   { turboMenu
   ? <div style={testernest} onClick={() => this.newnewfunc(clickedStyle)}>
    <div> {this.state.selectedTrim}</div>
     <form onSubmit={(e) => this.RunThis(e, this.props.vehicle.horsepower, this.props.vehicle.torque, psi.value)}>
    <select onChange={this.callThis} >
    <option value=''>Select turbo</option>
    <option value='0.5'>GT28R</option>
    <option value='1'>K03</option>
    </select>
    <input ref={(input) => {psi = input;}} class='psi-input' type='number' />
    <Button>Submit</Button>{' '}
    </form>
    <div>
    <h1>{this.state.newHorsepower}</h1>
    <h1>{this.state.newTorque}</h1>
    </div>
    <button onClick={this.testerTest}></button>
    <h2>{this.state.upgradesRequired}</h2>
   </div>
     :null
   }
 </div>

  );
}
}

export default connect(state => state)(Vehicle);
