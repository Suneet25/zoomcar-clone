import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

const BottomTag = () => {
  return (
    <Box
      style={{
        backgroundColor: "#383838",
        color: "white",
        padding: "30px 80px 30px 80px",
      }}
    >
      <Flex style={{ justifyContent: "space-evenly" }}>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            {" "}
            <Heading as={"h5"} size="md">
              ABOUT US
            </Heading>
          </Link>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            <Heading as={"h5"} size="md">
              BLOGS
            </Heading>
          </Link>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            <Heading as={"h5"} size="md">
              CAREERS
            </Heading>
          </Link>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            {" "}
            <Heading as={"h5"} size="md">
              HELP & SUPPORT
            </Heading>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default BottomTag;
