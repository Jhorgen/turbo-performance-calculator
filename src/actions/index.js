export const requestVehicle = () => {
  return { type: 'REQUESTED_VEHICLE' }
};

export const requestVehicleSuccess = (data) => {
  return { type: 'REQUESTED_VEHICLE_SUCCEEDED', vehicles: data }
};

const requestVehicleError = () => {
  return { type: 'REQUESTED_VEHICLE_FAILED' }
};

export const fetchVehicle = (make) => {
  return (dispatch) => {
    dispatch(requestVehicle());
    fetch(`http://localhost:3000/api/v1/vehicles/?make=${make}`)
      .then(res => res.json())
      .then(
        data => { console.log('data', data);
        dispatch(requestVehicleSuccess(data))},
        err => dispatch(requestVehicleError())
      );
  }
};
