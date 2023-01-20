import React, { useEffect, useState } from "react";

import PAYMENT from "../Payment/Payment.module.css";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Active from "./Active";
import Wallet from "./Wallet";
import Banking from "./Banking";
import Credit from "./Credit";

let DataObj = JSON.parse(localStorage.getItem("userdata"));

const Payment = (data) => {
  const [pageTrue, setpageTrue] = useState("upi");

  // console.log("DataObj", DataObj);
  console.log("data", data);
  const handleChange = (value) => {
    setpageTrue(value);
  };

  useEffect(() => {
    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
    });
  }, []);

  console.log(data.price);
  return (
    <div className={PAYMENT.payDiv}>
      <div id="first">
        <div>
          <h1 className={PAYMENT.tagH1}>PAYMENT OPTIONS</h1>

          <Card
            maxW="md"
            bg={"white"}
            color={"black"}
            marginTop={"10px"}
            className={PAYMENT.card}
            onClick={() => handleChange("upi")}
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center">
                  <Avatar
                    name="UPI"
                    src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                  />

                  <Box>
                    <Heading size="sm">UPI</Heading>
                    {/* <Text class="text">Google Pay, PhonePe, UPI</Text> */}
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>

          <Card
            maxW="md"
            bg={"white"}
            color={"black"}
            marginTop={"10px"}
            className={PAYMENT.card}
            onClick={() => handleChange("card")}
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="UPI"
                    src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                  />

                  <Box>
                    <Heading size="sm">Credit / Debit / ATM Card</Heading>
                    {/* <Text> major cards are supported</Text> */}
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>

          <Card
            maxW="md"
            bg={"white"}
            color={"black"}
            marginTop={"10px"}
            className={PAYMENT.card}
            onClick={() => handleChange("wallet")}
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Mobile Wallet"
                    src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                  />

                  <Box>
                    <Heading size="sm">Mobile Wallet</Heading>
                    {/* <Text>All major wallets are supported</Text> */}
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>

          <Card
            maxW="md"
            bg={"white"}
            color={"black"}
            marginTop={"10px"}
            className={PAYMENT.card}
            onClick={() => handleChange("netbank")}
          >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Net Banking"
                    src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                  />

                  <Box>
                    <Heading size="sm">Net Banking</Heading>
                    {/* <Text>All major banks are supported</Text> */}
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>
        </div>

        {/* second div starts here */}

        {pageTrue == "upi" ? (
          <Active />
        ) : pageTrue == "card" ? (
          <Credit />
        ) : pageTrue == "netbank" ? (
          <Banking />
        ) : pageTrue == "wallet" ? (
          <Wallet />
        ) : null}
      </div>

      {/* <div className={PAYMENT.SecondSection}>
        <h1 className={PAYMENT.tagH1}>car details box</h1>
        <div>
          <h1 className={PAYMENT.SecondH1}>{DataObj.title}</h1>
          <img src={DataObj.image} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Payment;
