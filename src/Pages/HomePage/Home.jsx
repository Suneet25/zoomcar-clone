import React from "react";
import CorouselOne from "./HomeCorouselOne";
import CorouselTwo from "./HomeCorouselTwo";
import Poster1 from "./Poster1";
import Poster2 from "./Poster2";
import Navbar from "./NavBar";
import Poster3 from "./Poster3";
import BottomTag from "./BottomTag";
import SignupCard from "../../Components/Signuppage";
import Loginpage from "../../Components/Loginpage";
// import AboutPage from "./AboutPage";

const Home = () => {
  return (
    <div className="HomeParent">
      <Navbar />
      <Poster1 />
      <CorouselOne />
      <Poster2 />
      <CorouselTwo />
      <Poster3 />
      {/* <AboutPage /> */}
      <BottomTag />
      <SignupCard />
      <Loginpage />
    </div>
  );
};

export default Home;
