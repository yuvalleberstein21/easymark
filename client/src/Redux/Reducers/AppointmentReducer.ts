import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
} from '../Constant/AppointmentConstant';

export const createAppointmentReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return { loading: true };
    case CREATE_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointment: action.payload };
    case CREATE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAppointmentReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_APPOINTMENT_REQUEST:
      return { loading: true };
    case GET_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointment: action.payload };
    case GET_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
