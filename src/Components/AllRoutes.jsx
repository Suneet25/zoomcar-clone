import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsPage from "../Pages/CarsPage";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
    </Routes>
  );
};

export default AllRoutes;
