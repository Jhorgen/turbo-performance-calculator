import React from 'react';

const Vehicle = (props) => {
  let vehicle = props.vehicle
  return (
    <div>
    <p>{vehicle.make} <br/>
    HP:{vehicle.horsepower}</p>
    </div>
  );
}
export default Vehicle;
