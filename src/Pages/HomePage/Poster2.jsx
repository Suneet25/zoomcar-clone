import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Poster2 = () => {
  return (
    <Box>
      <Box style={{ position: "relative" }}>
        <Box
          style={{
            width: "100%",
            height: "680px",
            // border: "2px solid red",
          }}
        >
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/97c77ce8da5affded5e3c4bde712044a90728781.png?1672044755"
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
            Largest car sharing marketplace
          </Heading>
          <Heading as={"h4"} size="md" mt="20px" textAlign="center">
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
