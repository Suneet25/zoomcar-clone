import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CarsPageReducer } from "./CarsData/carsData.reducer";

/* Combine all reducer and passing into store for global accessing things... */
const rootReducer = combineReducers({
  CarsReducer: CarsPageReducer,
});

/* This is for dev tools and pass into argument and invoke as a function because 
    composeEnchancer is a function */

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

/*  Thunk - will help diffrence between object and functions 

    so u don't get any confusion into your action, otherwise if 
    u have any api call change it to in a function..
*/
