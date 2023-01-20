import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Poster3 = () => {
  return (
    <Box>
      <Box style={{ position: "relative" }}>
        <Box
          style={{
            width: "100%",
            height: "540px",
            // border: "2px solid red",
          }}
        >
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/25371b7b5084fc451b0c3ec9eda278f791188c69.png?1672044863"
            alt="d"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "5%",
            left: "30%",

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
            Drive worry free with Zoomcar
          </Heading>
          <Heading as={"h4"} size="md" mt="20px" textAlign="center">
            24X7 Roadside assistance whenever you need
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster3;
