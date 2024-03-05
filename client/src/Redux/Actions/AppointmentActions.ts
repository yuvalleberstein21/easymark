import axios from 'axios';
import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
} from '../Constant/AppointmentConstant';

export const createAppointmentAction =
  (
    user: string,
    business: string | undefined,
    date: Date | undefined,
    startTime: string,
    service: string,
    notes: string
  ) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: CREATE_APPOINTMENT_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/appointments/`,
        {
          user,
          business,
          date,
          startTime,
          service,
          notes,
        },
        config
      );

      dispatch({
        type: CREATE_APPOINTMENT_SUCCESS,
        payload: data,
      });
      console.log(data);
    } catch (error: any) {
      dispatch({
        type: CREATE_APPOINTMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAppointmentAction = (id: any) => async (dispatch: any) => {
  try {
    dispatch({ type: GET_APPOINTMENT_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/appointments/${id}`
    );
    dispatch({
      type: GET_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_APPOINTMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
