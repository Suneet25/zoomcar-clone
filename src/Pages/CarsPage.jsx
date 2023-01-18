import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "../Redux/CarsData/carsData.action";

const CarsPage = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.cars);

  console.log("datamain Cars Page", data);
  useEffect(() => {
    dispatch(getCarData());
  }, []);

  return <>hy</>;
};

export default CarsPage;
