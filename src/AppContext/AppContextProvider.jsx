import React, { useState } from "react";
import { createContext, useEffect } from "react";
import {fetchData} from "./FetchData"

export const AppContext = createContext();



export const AppContextProvider = ({ children }) => {
  const [carsData, setCarsData] = useState([]);
  useEffect(() => {
    fetchData().then((res) => {
      setCarsData(res.data);
    });
  }, []);

  return <AppContext.Provider value={{ carsData }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
