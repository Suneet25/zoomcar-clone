import axios from "axios";
import {
  CARSDATA_GET_ERROR,
  CARSDATA_GET_LOADING,
  CARSDATA_GET_SUCCESS,
} from "./carsData.types";

export const getCarData = () => async (dispatch) => {
  /* Here we are showing loading thing */
  dispatch({ type: CARSDATA_GET_LOADING });
  try {
    let data = await axios.get(
      `http://localhost:8080/cars`,
      // `https://backend-by-nitin.onrender.com/api/cars`
    );
    data = await data.data;
    dispatch({ type: CARSDATA_GET_SUCCESS, payload: data });
    // console.log("data in action page", data);
  } catch (error) {
    dispatch({ type: CARSDATA_GET_ERROR });
  }
};

// export const getCarDataASC = () => async (dispatch) => {
//   /* Here we are showing loading thing */
//   dispatch({ type: CARSDATA_GET_LOADING });
//   try {
//     let data = await axios.get(
//       ``
//       // `https://backend-by-nitin.onrender.com/api/cars`
//     );
//     data = await data.data;
//     dispatch({ type: CARSDATA_GET_SUCCESS, payload: data });
//     // console.log("data in action page", data);
//   } catch (error) {
//     dispatch({ type: CARSDATA_GET_ERROR });
//   }
// };
