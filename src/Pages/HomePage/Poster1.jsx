import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Poster1 = () => {
  return (
    <Box>
      <Box style={{ position: "relative" }}>
        <Box
          style={{
            width: "100%",
            height: "auto",
            // border: "2px solid red",
          }}
        >
          <img
            src="https://www.zoomcar.com/img/hero-banner-web.png"
            alt="d"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "5%",
            left: "17%",

            backgroundColor: "rgba(0,0,0,0.4)",
            color: "white",
            // paddingRight: "20px",
            // fontSize: "34px",
            // fontWeight: "600",
            // lineHeight: "1.29",
            padding: "20px",
          }}
        >
          <Heading
            style={{
              fontSize: "34px",
              fontWeight: "600",
              lineHeight: "1.29",
              textAlign: "center",
            }}
          >
            The perfect car for your next trip is just around the corner
          </Heading>
          <Heading as={"h4"} size="md" mt="20px" textAlign="center">
            Book your drive now!
          </Heading>
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
