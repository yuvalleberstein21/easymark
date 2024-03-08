import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducer';
import {
  createBusinessReducer,
  getAllBusinessReducer,
  getAllUserBusinessReducer,
  getSingleBusinessReducer,
  updateBusinessReducer,
} from './Reducers/BusinessReducer';
import {
  createAppointmentReducer,
  deleteAppointmentReducer,
  getAppointmentReducer,
  getUserAppointmentReducer,
} from './Reducers/AppointmentReducer';
import { getUserServiceReducer } from './Reducers/ServiceReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  getAllBusiness: getAllBusinessReducer,
  getAllUserBusiness: getAllUserBusinessReducer,
  getSingleBusiness: getSingleBusinessReducer,
  createBusiness: createBusinessReducer,
  updateBusiness: updateBusinessReducer,
  createAppointment: createAppointmentReducer,
  getAppointment: getAppointmentReducer,
  getUserAppointment: getUserAppointmentReducer,
  getUserServiceAppointment: getUserServiceReducer,
  deleteAppointment: deleteAppointmentReducer,
});

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
