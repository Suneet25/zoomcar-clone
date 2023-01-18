import React from "react";
import Middle from "./Middle";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <div className="HomeParent">
      <Navbar />
      <Middle />
    </div>
  );
};

export default Home;
