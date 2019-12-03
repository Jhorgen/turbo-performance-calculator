import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';

class Vehicle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newHorsepower: null,
      newTorque:  null,
      selectValue: 0,
      upgradesRequired: null
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

render() {
  let psi
  return (
    <div>
    <div>
  Make: {this.props.vehicle.make}<br/>
Year: {this.props.vehicle.year}<br/>
Model: {this.props.vehicle.model}<br/>
Trim: {this.props.vehicle.trim}<br/>
Horsepower: {this.props.vehicle.horsepower}<br/>
Torque: {this.props.vehicle.torque}<br/>
   </div>
   <div>
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
 </div>
  );
}
}

export default connect(state => state)(Vehicle);
