import axios from 'axios';
import {
  GET_ALL_BUSINESS_FAIL,
  GET_ALL_BUSINESS_REQUEST,
  GET_ALL_BUSINESS_SUCCESS,
  GET_SINGLE_BUSINESS_FAIL,
  GET_SINGLE_BUSINESS_REQUEST,
  GET_SINGLE_BUSINESS_SUCCESS,
} from '../Constant/BusinessConstant';

export const getAllBusinessAction = () => async (dispatch: any) => {
  try {
    dispatch({ type: GET_ALL_BUSINESS_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/business`
    );
    dispatch({
      type: GET_ALL_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ALL_BUSINESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleBusinessAction = (id: any) => async (dispatch: any) => {
  try {
    dispatch({ type: GET_SINGLE_BUSINESS_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/business/${id}`
    );
    dispatch({
      type: GET_SINGLE_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_SINGLE_BUSINESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};