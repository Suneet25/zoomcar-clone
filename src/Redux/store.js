import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CarsPageReducer } from "./CarsData/carsData.reducer";

const rootReducer = combineReducers({
  CarsReducer: CarsPageReducer,
});

// *  For redux persist we are using for storing our state in local storage
//     if we reload our web page data will never lost ...
//     it gonns store locally in local storage...
// */
const persistConfig = {
  key: "root",
  storage,
};

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
