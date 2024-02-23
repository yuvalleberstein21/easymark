import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducer';
import {
  getAllBusinessReducer,
  getSingleBusinessReducer,
  updateBusinessReducer,
} from './Reducers/BusinessReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  getAllBusiness: getAllBusinessReducer,
  getSingleBusiness: getSingleBusinessReducer,
  updateBusiness: updateBusinessReducer,
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
