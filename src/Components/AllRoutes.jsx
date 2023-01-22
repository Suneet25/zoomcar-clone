import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsPage from "../Pages/CarsPage/CarsPage";
import SingleCarsPage from "../Pages/CarsPage/SingleCarsPage";
import Home from "../Pages/HomePage/Home";
import Payment from "../Pages/Payment/Payment";
import Picklocation from "../Pages/PickupLocation/Pickuplocation";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/cars/:id" element={<SingleCarsPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/pickup" element={<Picklocation />} />
    </Routes>
  );
};

export default AllRoutes;
