import { Box, Image, Text, Container } from "@chakra-ui/react";
import React from "react";

import Footer from "../HomePage/Footer";
import FAQ from "./Faq/Faq";
import HostBanner from "./HostBanner";

import NavbarHost from "./NavbarHost";
import Steps from "./Steps";
import Video from "./Video";

const Hosts = () => {
  return (
    <Box>
      <NavbarHost />
      <HostBanner />
      <Video />
      <Box width="80%" margin="auto" mt="10">
        <Image src="https://www.zoomcar.com/zap/subscribe/build/2a59620f522135d45def6fbc74162966.webp"></Image>
      </Box>
      <Steps />

      <Box
        width="80%"
        height="300px"
        margin="auto"
        mt="10"
        bg="rgb(245,244,246)"
        borderRadius="lg"
      >
        <Text
          p="6"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="600"
        >
          Users Love Zoomcar Host Program. Our App has 4.5+ rating on Play
          Store!
        </Text>
      </Box>

      <FAQ />
      <Container maxW="container.4xl">
        <Image
          w="900px"
          h="300px"
          src="https://i.ibb.co/JR3QFhq/image-5-1.png"
          alt="Dan Abramov"
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default Hosts;
