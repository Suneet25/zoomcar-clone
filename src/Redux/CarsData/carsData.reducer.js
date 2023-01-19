// import {
//   CARSDATA_GET_ERROR,
//   CARSDATA_GET_LOADING,
//   CARSDATA_GET_SUCCESS,
// } from "./carsData.types";

// const initialState = {
//   loading: false,
//   error: false,
//   data: [],
// };

// export const CarsPageReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case CARSDATA_GET_LOADING: {
//       return {
//         ...state,
//         loading: true,
//       };
//     }
//     case CARSDATA_GET_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         data: payload,
//       };
//     }
//     case CARSDATA_GET_ERROR: {
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };
//     }

//     /* in Reset case we are returning InitialState */
//     // case FEEDS_RESET: {
//     //   return {
//     //     ...initialState,
//     //   };
//     // }
//     default: {
//       return state;
//     }
//   }
// };
