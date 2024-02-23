import {
  GET_ALL_BUSINESS_FAIL,
  GET_ALL_BUSINESS_REQUEST,
  GET_ALL_BUSINESS_SUCCESS,
  GET_SINGLE_BUSINESS_FAIL,
  GET_SINGLE_BUSINESS_REQUEST,
  GET_SINGLE_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_FAIL,
  UPDATE_BUSINESS_REQUEST,
  UPDATE_BUSINESS_SUCCESS,
} from '../Constant/BusinessConstant';

export const getAllBusinessReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_ALL_BUSINESS_REQUEST:
      return { loading: true };
    case GET_ALL_BUSINESS_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case GET_ALL_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSingleBusinessReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_SINGLE_BUSINESS_REQUEST:
      return { loading: true };
    case GET_SINGLE_BUSINESS_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case GET_SINGLE_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateBusinessReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_BUSINESS_REQUEST:
      return { loading: true };
    case UPDATE_BUSINESS_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case UPDATE_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
