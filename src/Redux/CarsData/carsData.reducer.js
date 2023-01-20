import {
  CARS_FAILURE,
  CARS_LOADING,
  CARS_SUCCESS,
  SINGLE_CARS_FAILURE,
  SINGLE_CARS_LOADING,
  SINGLE_CARS_SUCCESS,
} from "./carsData.types";

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

    case SINGLE_CARS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SINGLE_CARS_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case SINGLE_CARS_FAILURE: {
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
