import axios from "axios";
import {
  CARS_FAILURE,
  CARS_LOADING,
  CARS_SUCCESS,
  SINGLE_CARS_FAILURE,
  SINGLE_CARS_LOADING,
  SINGLE_CARS_SUCCESS,
} from "./carsData.types";

export const getCarsData = () => (dispatch) => {
  dispatch({ type: CARS_LOADING });
  return axios
    .get("https://zoomcarapi.onrender.com/cars")
    .then((response) =>
      dispatch({ type: CARS_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: CARS_FAILURE }));
};

export const getSingleCarsData = (id) => (dispatch) => {
  dispatch({ type: SINGLE_CARS_LOADING });
  return axios
    .get(`https://zoomcarapi.onrender.com/cars/${id}`)
    .then((response) =>
      dispatch({ type: SINGLE_CARS_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: SINGLE_CARS_FAILURE }));
};
