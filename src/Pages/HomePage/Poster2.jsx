import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import banner from "..//../Assets/Home-banner2.png";
import poster2 from "../../Styles/HomePage.module.css";
const Poster2 = () => {
  return (
    <Box className={poster2.maincontainer}>
      <Box className={poster2.childcontainer}>
        <Box
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <img
            src={banner}
            alt="d"
            height={{ lg: "100%", md: "80%", sm: "60%" }}
            width="100%"
          />
        </Box>
        <Box className={poster2.topcontent}>
          <Heading
            className={poster2.topheading}
            fontSize={{ base: "20px", md: "40px", lg: "46px" }}
          >
            Largest car sharing marketplace
          </Heading>
          <Heading
            as={"h4"}
            size="md"
            mt="20px"
            textAlign="center"
            fontSize={{ base: "15px", md: "32px", lg: "36px" }}
          >
            Sedans for short distances, SUVs for tough terrains, luxury cars for
            surprises - we’ve got it all!
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
            UNMATCHED BENEFITS
          </Heading>
          <Heading
            style={{
              textAlign: "center",
              fontFamily: "IBM Plex Sans",

              fontWeight: "300",

              color: "#1f1f1f",
              marginTop: "20px",
            }}
            as={"h6"}
            size="md"
          >
            Drive everywhere with freedom
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster2;
