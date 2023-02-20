import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import foot from "../../Styles/Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box className={foot.Container}>
      <Box style={{ padding: "50px" }}>
        <Heading
          as="h4"
          size="md"
          style={{
            paddingLeft: "60px",
            color: "white",
          }}
        >
          We operate in many other cities
        </Heading>
        <br />
        <Heading
          as="h4"
          size="md"
          style={{
            paddingLeft: "60px",
            color: "white",
          }}
        >
          INDIA
        </Heading>
        <br />

        <Box className={foot.FooterContent}>
          <Box>
            <Text fontSize="sm">Banagalore</Text>

            <Text fontSize="sm">Chennai</Text>

            <Text fontSize="sm">Hyderabad</Text>

            <Text fontSize="sm">Ahemadabad</Text>

            <Text fontSize="sm">Mangalore</Text>

            <Text fontSize="sm">Bhopal</Text>

            <Text fontSize="sm">Madurai</Text>

            <Text fontSize="sm">Vadodara</Text>

            <Heading marginTop="20px" as="h4" size="md">
              INDONESIA
            </Heading>

            <Text fontSize="sm">Jakarta</Text>
          </Box>
          <Box>
            <Text fontSize="sm">Bangalore</Text>

            <Text fontSize="sm">Chennai</Text>

            <Text fontSize="sm">Hyderabad</Text>

            <Text fontSize="sm">Ahemadabad</Text>

            <Text fontSize="sm">Mangalore</Text>

            <Text fontSize="sm">Bhopal</Text>

            <Text fontSize="sm">Madurai</Text>

            <Text fontSize="sm">Vadodara</Text>

            <Heading marginTop="20px" as="h4" size="md">
              VIETNAM
            </Heading>

            <Text fontSize="sm">Ho Chi Minh</Text>
          </Box>
          <Box>
            <Text fontSize="sm">Banagalore</Text>

            <Text fontSize="sm">Chennai</Text>

            <Text fontSize="sm">Hyderabad</Text>

            <Text fontSize="sm">Ahemadabad</Text>

            <Text fontSize="sm">Mangalore</Text>

            <Text fontSize="sm">Bhopal</Text>

            <Text fontSize="sm">Madurai</Text>

            <Text fontSize="sm">Vadodara</Text>

            <Heading as="h4" size="md" marginTop="20px">
              EGYPT
            </Heading>

            <Text fontSize="sm">Cairo</Text>
          </Box>
          <Box>
            <Text fontSize="sm">Banagalore</Text>

            <Text fontSize="sm">Chennai</Text>

            <Text fontSize="sm">Hyderabad</Text>

            <Text fontSize="sm">Ahemadabad</Text>

            <Text fontSize="sm">Mangalore</Text>

            <Text fontSize="sm">Bhopal</Text>

            <Text fontSize="sm">Madurai</Text>

            <Text fontSize="sm">Vadodara</Text>
          </Box>
        </Box>

        <Heading
          as="h6"
          size="md"
          style={{ paddingLeft: "60px", color: "white", marginTop: "30px" }}
        >
          Let's keep in touch
        </Heading>
        <Box className={foot.socials}>
          <Box>
            <FaTwitter style={{ width: "30px", height: "30px" }} />
          </Box>
          <Box>
            <FaInstagram style={{ width: "30px", height: "30px" }} />
          </Box>
          <Box>
            <FaYoutube style={{ width: "30px", height: "30px" }} />
          </Box>
          <Box>
            <FaFacebook style={{ width: "30px", height: "30px" }} />
          </Box>
          <Box>
            <FaLinkedin style={{ width: "30px", height: "30px" }} />
          </Box>
        </Box>

        <Box className={foot.QRcode} style={{}}>
          <Box
            style={{
              fontWeight: "600",
              lineHeight: 1,
              letterSpacing: "normal",
              color: " #e0e0e0",
              opacity: 0.5,
            }}
            fontSize={{ base: "15px", md: "50px", lg: "70px" }}
          >
            <Text>Never</Text>
            <Text>Stop</Text>
            <Text>Living.</Text>
          </Box>
          <Flex gap={"30px"}>
            <Box>
              <Image src="https://www.zoomcar.com/img/image.png"></Image>
              <Text
                color="white"
                textAlign={"center"}
                fontSize={{ base: "15px", md: "20px", lg: "20" }}
              >
                Scan this QR code to
              </Text>
              <Text color="white" textAlign={"center"}>
                download app.
              </Text>
            </Box>
            <Box>
              <Heading
                style={{ color: "white" }}
                fontSize={{ base: "10px", md: "15px", lg: "35px" }}
              >
                DOWNLOAD ZOOMCAR APP
              </Heading>
              <br />
              <Heading
                style={{ color: "white" }}
                fontSize={{ base: "10px", md: "15px", lg: "25px" }}
              >
                We have incredible offers, discounts &
              </Heading>
              <Heading
                style={{ color: "white" }}
                fontSize={{ base: "10px", md: "15px", lg: "25px" }}
              >
                much more in our app
              </Heading>
            </Box>
          </Flex>
        </Box>
        <br />
        <br />
        <hr />
        <Text paddingLeft="60px" marginTop="20px" fontSize="xs" color="#a8a8a8">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2012-2022 © Zoomcar™ Ltd. All
          rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
