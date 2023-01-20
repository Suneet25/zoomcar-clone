import React from "react";
import { Avatar, Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";

const mainDiv = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

const Banking = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          width: "500px",
          margin: "auto",
          padding: "5px",
          marginTop: "5px",
          overflow: "visible",
          scrollBehavior: "smooth",
        }}
      >
        <div style={mainDiv}>
          <div>
            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>
              Net Banking
            </h1>
            <p> Amount: ₹5000.0</p>
          </div>

          <div>
            <img
              src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
              alt="lock"
              width="50px"
              height={"50px"}
            />
          </div>
        </div>

        {/* using chakra */}
        <Card maxW="md" bg={"white"} color={"black"} marginTop={"10px"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Hdfc Bank"
                  src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955"
                />

                <Box>
                  <Heading size="sm">Hdfc Bank</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>

        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="ICICI Netbanking"
                  src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979"
                />

                <Box>
                  <Heading size="sm">ICICI Netbanking</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>

        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Axis Bank"
                  src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931"
                />

                <Box>
                  <Heading size="sm">Axis Bank</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>
        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Kotak Bank"
                  src="https://zoomcar-assets.zoomcar.com/images/original/cf379c07cb78c1e7bc476990125e2f2dfc48c46c.png?1584602048"
                />

                <Box>
                  <Heading size="sm">Kotak Bank</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>

        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Yes Bank"
                  src="https://zoomcar-assets.zoomcar.com/images/original/c60a9d56b73f754951266d949ebadaf86cc0bb3f.png?1584602027"
                />

                <Box>
                  <Heading size="sm">Yes Bank</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>

        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Canara Bank"
                  src="https://zoomcar-assets.zoomcar.com/images/original/b231e4ec4fc0862465537b9f916908ceb9ad8486.png?1584454582"
                />

                <Box>
                  <Heading size="sm">Canara Bank</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>

        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="State Bank of India"
                  src="https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001"
                />

                <Box>
                  <Heading size="sm">State Bank of India</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>

        <Card maxW="md" bg={"white"} color={"black"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Union Bank of India"
                  src="https://zoomcar-assets.zoomcar.com/images/original/e240b3b08e01c6526a1e3a8eb8601f6c16e793e5.png?1584454522"
                />

                <Box>
                  <Heading size="sm">Union Bank of India</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Banking;
