export const reducer = (state = { vehicles: [], loading: false, error: false}, action) => {
  switch (action.type) {
    case 'REQUESTED_VEHICLE':
      return {
        vehicles: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_VEHICLE_SUCCEEDED':
      return {
        vehicles: action.vehicles,
        loading: false,
        error: false,
      };
    case 'REQUESTED_VEHICLE_FAILED':
      return {
        vehicles: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
