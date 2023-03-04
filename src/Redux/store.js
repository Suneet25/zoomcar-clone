import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CarsPageReducer } from "./CarsData/carsData.reducer";


const rootReducer = combineReducers({
  CarsReducer: CarsPageReducer,
});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


