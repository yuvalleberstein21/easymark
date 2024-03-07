import axios from 'axios';
import {
  GET_USER_SERVICE_FAIL,
  GET_USER_SERVICE_REQUEST,
  GET_USER_SERVICE_SUCCESS,
} from '../Constant/ServiceConstant';

export const getUserServiceAction = (id: any) => async (dispatch: any) => {
  try {
    dispatch({ type: GET_USER_SERVICE_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/service/${id}`
    );
    dispatch({
      type: GET_USER_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_USER_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
