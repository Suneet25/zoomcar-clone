import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import poster1 from "../../Styles/HomePage.module.css";
import PickUp from "./PickUp";
// import PickUp from "./PickUp";
const Poster1 = () => {
  return (
    <Box className={poster1.maincontainer}>
      <Box className={poster1.childcontainer}>
        <Box
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <img
            src="https://www.zoomcar.com/img/hero-banner-web.png"
            alt="d"
            // style={{ height: "100%", width: "100%" }}
            height={{ lg: "100%", md: "80%", sm: "60%" }}
            width="100%"
          />
        </Box>
        <Box
          className={poster1.topcontent}
          visibility={{ base: "hidden", md: "visible", lg: "visible" }}
        >
          <Heading
            className={poster1.topheading}
            fontSize={{ base: "20px", md: "40px", lg: "46px" }}
          >
            The perfect car for your next trip is just around the corner
          </Heading>
          <Heading
            as={"h4"}
            mt="20px"
            textAlign="center"
            fontSize={{ base: "15px", md: "32px", lg: "36px" }}
          >
            Book your drive now!
          </Heading>
        </Box>
        <Box className={poster1.pickup}>
          <PickUp />
        </Box>

        <Box
          style={{
            position: "relative",
            backgroundColor: "white",

            paddingTop: "70px",
            paddingBottom: "40px",
          }}
        >
          <Heading
            style={{
              textAlign: "center",
              fontFamily: "IBM Plex Sans",

              fontWeight: "500",
              lineHeight: "1",
              fontSize: "clamp(14px, 3vw, 32px)",
              color: "#1f1f1f",
            }}
          >
            CHOOSE FROM OUR WIDE RANGE OF CAR
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster1;
