import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_FAIL,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_RESET,
  DELETE_APPOINTMENT_SUCCESS,
  GET_ADMIN_APPOINTMENT_FAIL,
  GET_ADMIN_APPOINTMENT_REQUEST,
  GET_ADMIN_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_RESET,
  GET_APPOINTMENT_SUCCESS,
  GET_BUSINESS_APPOINTMENT_FAIL,
  GET_BUSINESS_APPOINTMENT_REQUEST,
  GET_BUSINESS_APPOINTMENT_SUCCESS,
  GET_USER_APPOINTMENT_FAIL,
  GET_USER_APPOINTMENT_REQUEST,
  GET_USER_APPOINTMENT_RESET,
  GET_USER_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_APPROVAL,
} from '../Constant/AppointmentConstant';

export const getBusinessAppointmentsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_BUSINESS_APPOINTMENT_REQUEST:
      return { loading: true };
    case GET_BUSINESS_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointments: action.payload };
    case GET_BUSINESS_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

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
    case GET_APPOINTMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getUserAppointmentReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_USER_APPOINTMENT_REQUEST:
      return { loading: true };
    case GET_USER_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointment: action.payload };
    case GET_USER_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case GET_USER_APPOINTMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteAppointmentReducer = (state = {}, action: any) => {
  switch (action.type) {
    case DELETE_APPOINTMENT_REQUEST:
      return { loading: true };
    case DELETE_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointment: {} };
    case DELETE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_APPOINTMENT_RESET:
      return {};
    default:
      return state;
  }
};

// ADMIN
export const getAdminAppointmentReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_ADMIN_APPOINTMENT_REQUEST:
      return { loading: true };
    case GET_ADMIN_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, appointments: action.payload };
    case GET_ADMIN_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateAdminAppointmentReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_APPOINTMENT_APPROVAL:
      return { loading: false, success: true, appointments: action.payload };
    default:
      return state;
  }
};
