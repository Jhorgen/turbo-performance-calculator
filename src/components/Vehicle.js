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
      showing: true,
      turboMenu: false,
      selectedTrim: null,
      newnew: true,
      selectColor: null
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

handleClick(turboMenu, selectedTrim, showing) {
  console.log(this.props.vehicle);
  this.setState({selectedTrim:
    <div>{this.props.vehicle.make}<br/>
      {this.props.vehicle.year}<br/>
      {this.props.vehicle.model}<br/>
      {this.props.vehicle.trim}<br/>
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
  let clickedStyle = {
    color: 'black'
  }
  console.log(clickedStyle);
  this.setState({selectColor: clickedStyle})
  console.log('test');
  console.log(this.state.selectColor);
}




render() {
  const { showing } = this.state;
  const { turboMenu } = this.state;
  const { selectedTrim } = this.state;

  let testernest={
    color: 'blue',
    background: 'white'
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

  { showing
    ? <div onClick={() => this.handleClick()}><p style={this.state.selectColor}>{this.props.vehicle.trim}</p></div>
    : null
  }


   { turboMenu
   ? <div style={testernest} onClick={() => this.newnewfunc(clickedStyle)}>
    {this.state.selectedTrim}
     <form onSubmit={(e) => this.RunThis(e, this.props.vehicle.horsepower, this.props.vehicle.torque, psi.value)}>
    <select onChange={this.callThis} >
    <option value=''>Select turbo</option>
    <option value='0.5'>GT28R</option>
    <option value='1'>K03</option>
    </select>
    <input ref={(input) => {psi = input;}} class='psi-input' type='number' />
    <Button color="info">Submit</Button>{' '}
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
