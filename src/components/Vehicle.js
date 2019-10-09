import React from 'react';
import {connect} from 'react-redux';

class Vehicle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      selectValue: ''
    }
  }

   RunThis = (e, horsepower, psi) => {

     psi = psi === '' ? 0 : psi

     let result = parseInt(horsepower) + parseInt(psi) + parseFloat(this.state.selectValue)

     console.log(horsepower, psi);

     console.log(this.state.result);

      this.setState({result: result})

    }

  callThis = (e) => {

    this.setState({...this.state, selectValue: e.target.value},

    ()=> {console.log(this.state.selectValue)}
    );
  }

render() {
  let psi
  return (
    <div>
    <div onClick={(e) => this.RunThis(e, this.props.vehicle.horsepower, psi.value)}>
  Make: {this.props.vehicle.make}<br/>
Year: {this.props.vehicle.year}<br/>
  Model: {this.props.vehicle.model}<br/>
Trim: {this.props.vehicle.trim}<br/>
  Horsepower: {this.props.vehicle.horsepower}<br/>
Torque: {this.props.vehicle.torque}<br/>
   </div>
   <div>
     <form>
    <select onChange={this.callThis} >
    <option value=''>Select turbo</option>
    <option value='0.5'>GT28R</option>
    <option value= '1'>K03</option>
    </select>
    <input ref={(input) => {psi = input;}} class='psi-input' type='number' />
    <button>Submit</button>
    </form>
    <div>
    <h1>{this.state.result}</h1>
    </div>
   </div>
 </div>
  );
}
}

export default connect(state => state)(Vehicle);
