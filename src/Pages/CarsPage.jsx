import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContextProvider";

const CarsPage = () => {
  const { carsData } = useContext(AppContext);
  console.log(carsData);

  return <>hy</>;
};

export default CarsPage;
