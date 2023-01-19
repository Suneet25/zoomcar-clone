import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCarsData } from "../../Redux/CarsData/carsData.action";

const SingleCarsPage = () => {
  const dispatch = useDispatch();
  const [SinglePageData, setSinglePageData] = useState({});
  const { data } = useSelector((store) => store.CarsReducer);

  const { id } = useParams();
  console.log("id ", id);
  console.log("data ", data);
  console.log("SinglePageData ", SinglePageData);

  useEffect(() => {
    dispatch(getSingleCarsData(id))
    setSinglePageData(data)
  }, [id]);
  return <div></div>;
};

export default SingleCarsPage;
