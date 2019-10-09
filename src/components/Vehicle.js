import React from 'react';
import {connect} from 'react-redux';

export const RunThis = (e, horsepower, psi) => {
  e.preventDefault()
    return (
    alert(parseInt(horsepower) + parseInt(psi))
  )
}

const Vehicle = (props) => {
  let vehicle = props.vehicle
  let turbo
  let psi
  return (
    <div>
    <div onClick={(e) => RunThis(e, vehicle.horsepower, psi.value)}>
  Make: {vehicle.make}<br/>
  Year: {vehicle.year}<br/>
  Model: {vehicle.model}<br/>
  Trim: {vehicle.trim}<br/>
  Horsepower: {vehicle.horsepower}<br/>
  Torque: {vehicle.torque}<br/>
   </div>
   <div>
     <form onSubmit={(e) => RunThis(e, vehicle.horsepower)}>
    <select ref={(input) => {turbo = input;}}>
    <option>GT28R</option>
    <option>K03</option>
    </select>
    <input ref={(input) => {psi = input;}} class='psi-input' type='number' />
    <button>Submit</button>
    </form>
   </div>
 </div>
  );
}
export default connect(state => state)(Vehicle, RunThis);
