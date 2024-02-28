import axios from 'axios';
import {
  CREATE_BUSINESS_FAIL,
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
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

export const createBusinessAction =
  (businessName, city, streetAddress, services, hoursOfOperation, images) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: CREATE_BUSINESS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/business/createbusiness/`,
        {
          businessName,
          city,
          streetAddress,
          services,
          hoursOfOperation,
          images,
        },
        config
      );

      dispatch({
        type: CREATE_BUSINESS_SUCCESS,
        payload: data,
      });
      console.log(data);
    } catch (error: any) {
      dispatch({
        type: CREATE_BUSINESS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateBusinessAction =
  (
    id: any,
    businessName: string,
    streetAddress: string,
    city: string,
    hoursOfOperation: string[],
    images: string[],
    services: string | number[]
  ) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: UPDATE_BUSINESS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/business/${id}`,
        {
          businessName,
          streetAddress,
          city,
          hoursOfOperation,
          images,
          services,
        },
        config
      );
      dispatch({
        type: UPDATE_BUSINESS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_BUSINESS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
