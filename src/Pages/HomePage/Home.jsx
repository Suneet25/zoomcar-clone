import React from "react";
import CorouselOne from "./HomeCorouselOne";
import Poster1 from "./Poster1";
import Poster2 from "./Poster2";
import Poster3 from "./Poster3";
import BottomTag from "./BottomTag";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="HomeParent">
      <Poster1 />
      <CorouselOne />
      <Poster2 />
      <Poster3 />
      <BottomTag />
      <Footer />
    </div>
  );
};

export default Home;
