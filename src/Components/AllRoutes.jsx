import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsPage from "../Pages/CarsPage";
import AboutPage from "../Pages/HomePage/AboutPage";
import Blogs from "../Pages/HomePage/Blogs";
import Careeers from "../Pages/HomePage/Careeers";
import HelpandSupport from "../Pages/HomePage/HelpandSupport";
import Home from "../Pages/HomePage/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/carrers" element={<Careeers />}></Route>
      <Route path="/help" element={<HelpandSupport />}></Route>
    </Routes>
  );
};

export default AllRoutes;
