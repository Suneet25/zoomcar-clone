import axios from "axios";
import { CARS_FAILURE, CARS_LOADING, CARS_SUCCESS } from "./carsData.types";

export const getCarsData = (params) => (dispatch) => {
  dispatch({ type: CARS_LOADING });
  return axios
    .get("http://localhost:8080/cars", params)
    .then((response) =>
      dispatch({ type: CARS_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: CARS_FAILURE }));
};
