import {
  GET_USER_SERVICE_FAIL,
  GET_USER_SERVICE_REQUEST,
  GET_USER_SERVICE_SUCCESS,
} from '../Constant/ServiceConstant';

export const getUserServiceReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_USER_SERVICE_REQUEST:
      return { loading: true };
    case GET_USER_SERVICE_SUCCESS:
      return { loading: false, success: true, appointment: action.payload };
    case GET_USER_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    case GET_USER_SERVICE_FAIL:
      return {};
    default:
      return state;
  }
};
