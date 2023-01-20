import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsPage from "../Pages/CarsPage/CarsPage";
import SingleCarsPage from "../Pages/CarsPage/SingleCarsPage";
import Home from "../Pages/Home";
import SignupCard from "./Signuppage";
import Loginpage from "./Loginpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/cars/:id" element={<SingleCarsPage />} />
    </Routes>
  );
};

export default AllRoutes;
