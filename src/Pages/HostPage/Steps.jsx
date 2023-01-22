import React from "react";
import { Box, Grid, Text, Flex, Image } from "@chakra-ui/react";

const Steps = () => {
  return (
    <Box width={{ base: "90%", lg: "80%" }} margin="auto" mt="12">
      <Text
        mt="8"
        fontSize={{ base: "sm", md: "2xl", lg: "4xl" }}
        fontWeight="600"
      >
        {" "}
        3 Simple Steps to Start Earning with your car in 24 <br /> hours
      </Text>
      <Box width="100%" mt="8">
        <Grid
          width="90%"
          margin="auto"
          ml={{ md: "20", lg: "32" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="16"
        >
          <Flex width="100%%" direction="column">
            <Text textAlign="left" fontSize="xl" fontWeight="600">
              1. Sign Up for Free
            </Text>
            <Text textAlign="left" fontSize="md" mt="8">
              Become part of the Zoomcar Host program for absolutely free by
              filling up a short after sign-up. It takes less than 2 mins to
              fill the form. No hidden charges.
            </Text>
          </Flex>
          <Box width="100%">
            <Image
              width="80%"
              src="https://www.zoomcar.com/zap/subscribe/build/bb6776beb9b8bacdc711e5a43f401134.svg"
            />
          </Box>
        </Grid>
      </Box>
      <Box width="100%" mt="8">
        <Grid
          width="90%"
          margin="auto"
          ml={{ md: "20", lg: "32" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="16"
        >
          <Box width="100%">
            <Image
              width="80%"
              src="https://www.zoomcar.com/zap/subscribe/build/29d798d8bc5d57bf22445ed3cc67cff1.svg"
            />
          </Box>
          <Flex width="100%%" direction="column">
            <Text textAlign="left" fontSize="xl" fontWeight="600">
              2. Set your account for Sharing{" "}
            </Text>
            <Text textAlign="left" fontSize="md" mt="8">
              Once you have signed up on the app, you can download the Zoomcar
              Host app and within 2-4 business hours, your profile will be
              available for login. Provide your KYC details & sharing location
              and you are now ready to share your car
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Box width="100%" mt="8">
        <Grid
          width="90%"
          margin="auto"
          ml={{ md: "20", lg: "32" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="16"
        >
          <Flex width="100%%" direction="column">
            <Text textAlign="left" fontSize="xl" fontWeight="600">
              3. Share your car & Earn{" "}
            </Text>
            <Text textAlign="left" fontSize="md" mt="8">
              Share your car through the app by selecting the dates when your
              car is available. Our experts will visit your location at the
              start of sharing and install the safety devices in your car. Now
              you are ready to receive bookings and earn
            </Text>
          </Flex>
          <Box width="100%">
            <Image
              width="80%"
              src="https://www.zoomcar.com/zap/subscribe/build/fc0cb48e9b85b44423a6660ba79ad43e.svg"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Steps;
