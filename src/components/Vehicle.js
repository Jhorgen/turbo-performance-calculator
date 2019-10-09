import React from 'react';
import {connect} from 'react-redux';

class Vehicle extends React.Component {
  constructor(props) {
  super(props);

   const RunThis = (e, horsepower, psi) => {
    let result = parseInt(horsepower) + parseInt(psi)
    let newResult
    if (result > 1) {
     newResult = result
    } else {
      console.log('test');
    }
  }

  }

render() {
  let turbo
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
     <form>
    <select ref={(input) => {turbo = input;}}>
    <option>GT28R</option>
    <option>K03</option>
    </select>
    <input ref={(input) => {psi = input;}} class='psi-input' type='number' />
    <button>Submit</button>
    </form>
   </div>
   <div>
   </div>
 </div>
  );
}
}
export default connect(state => state)(Vehicle);
