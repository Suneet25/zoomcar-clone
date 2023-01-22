import React from "react";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HostBanner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/zms");
  };

  return (
    <Box>
      <Box
        width="80%"
        top="0"
        position="relative"
        margin="auto"
        visibility={{ base: "visible", lg: "visible" }}
      >
        <Image
          boxSize="100%"
          objectFit="cover"
          src="https://www.zoomcar.com/zap/subscribe/build/a2ff940380f1315a0c0aacefb766e858.jpg"
          alt="Hero Banner"
        />
        <VStack
          width={{ base: "90%", md: "80%", lg: "60%" }}
          left={{ base: "5%", md: "10%", lg: "35%" }}
          position="absolute"
          top="70"
        >
          <Box visibility={{ base: "hidden", lg: "visible" }}>
            <Text
              textAlign="left"
              fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
              fontWeight="bold"
              fontFamily="IBM Plex Sans!important"
              color="white"
            >
              Share Your Car And Earn
              <br />
              up to ₹50,0000 per month
            </Text>
          </Box>
          <Box visibility={{ base: "hidden", lg: "visible" }}>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "sm " }}
              mt="5"
              color="white"
              textAlign="left"
            >
              Get upto ₹7,500 on signup
            </Text>
          </Box>
          <Box visibility={{ base: "hidden", lg: "visible" }}>
            <Button
              bg="rgb(16,163,16)"
              color="white"
              fontWeight="400"
              mt="8"
              width={{ base: "100%" }}
              onClick={handleClick}
            >
              Start Earning
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default HostBanner;
