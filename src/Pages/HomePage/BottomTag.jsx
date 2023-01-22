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
      <Flex
        style={{ justifyContent: "space-evenly" }}
        gap={{ base: "15px", md: "15px", lg: "20px" }}
      >
        <Box style={{ cursor: "pointer" }}>
          <Link>
            {" "}
            <Heading
              as={"h5"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              ABOUT US
            </Heading>
          </Link>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            <Heading
              as={"h5"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              BLOGS
            </Heading>
          </Link>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            <Heading
              as={"h5"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              CAREERS
            </Heading>
          </Link>
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <Link>
            {" "}
            <Heading
              as={"h5"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              HELP & SUPPORT
            </Heading>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default BottomTag;
