export const requestVehicle = () => {
  return { type: 'REQUESTED_VEHICLE' }
};

export const requestVehicleSuccess = (data) => {
  return { type: 'REQUESTED_VEHICLE_SUCCEEDED', vehicles: data }
};

const requestVehicleError = (err) => {
  return { type: 'REQUESTED_VEHICLE_FAILED', payload: err }
};

export const fetchVehicle = (make, model, year, trim) => {
  return (dispatch) => {
    dispatch(requestVehicle());
    fetch(`https://sleepy-waters-58808.herokuapp.com/api/v1/vehicles/?make=${make}&model=${model}&year=${year}`)
      .then(res => res.json())
      .then(
        data => { console.log('data', data);
        dispatch(requestVehicleSuccess(data))},
        err => console.log('error', err),
        dispatch(requestVehicleError())

      );
  }
};
