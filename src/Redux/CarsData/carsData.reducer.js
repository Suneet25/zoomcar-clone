import { CARS_FAILURE, CARS_LOADING, CARS_SUCCESS } from "./carsData.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const CarsPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CARS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case CARS_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case CARS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
