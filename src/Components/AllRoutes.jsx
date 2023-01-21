import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsPage from "../Pages/CarsPage/CarsPage";
import SingleCarsPage from "../Pages/CarsPage/SingleCarsPage";
import Home from "../Pages/HomePage/Home";
import Payment from "../Pages/Payment/Payment";
import Success from "../Pages/Payment/Success";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/cars/:id" element={<SingleCarsPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />

    </Routes>
  );
};

export default AllRoutes;
