import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import banner from "..//../Assets/Home-banner3.png";
import poster3 from "../../Styles/HomePage.module.css";
const Poster3 = () => {
  return (
    <Box className={poster3.maincontainer}>
      <Box className={poster3.childcontainer}>
        <Box
          style={{
            width: "100%",
            height: "auto",
          
          }}
        >
          <img src={banner} alt="d" style={{ height: "100%", width: "100%" }} />
        </Box>
        <Box className={poster3.topcontent}>
          <Heading
            className={poster3.topheading}
            fontSize={{ base: "20px", md: "40px", lg: "46px" }}
          >
            Drive worry free with Zoomcar
          </Heading>
          <Heading
            as={"h4"}
            size="md"
            mt="20px"
            textAlign="center"
            fontSize={{ base: "15px", md: "32px", lg: "36px" }}
          >
            24X7 Roadside assistance whenever you need
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster3;
