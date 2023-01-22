import React, { useEffect, useState } from "react";
// import homeBgImage from "../../Assets/banner_roundtrip.png";
import { FaCircle } from "react-icons/fa";
import { VscCalendar } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
// import { getLocalData } from "../localStorage";

const PickUp = () => {
  const [firstDate, setfirstDate] = useState("");
  const [lastDate, setlastDate] = useState("");
  const [userCity, setUserCity] = useState("");
  const navigate = useNavigate();

  //   useEffect(() => {
  //     setUserCity(getLocalData("userLocation"));
  //     setfirstDate(getLocalData("firstDay"));
  //     setlastDate(getLocalData("lastDay"));
  //   }, []);

  return (
    <Box>
      <Box alignItems="center">
        <Flex
          bottom="30px"
          right="40%"
          alignItems="center"
          direction="column"
          gap="10px"
        >
          <Box
            marginTop="400px"
            border="1px solid gary"
            borderRadius="7px"
            padding="10px"
            textAlign="left"
            boxShadow="2px 2px 2px gray"
            background="white"
            width="400px"
            height="50px"
            display="flex"
            alignItems="center"
            gap="10px"
            cursor="pointer"
            onClick={() => navigate("/pickup")}
          >
            <FaCircle size={"10px"} color="green" />
            <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
          </Box>
          {userCity ? (
            <Flex
              onClick={() => navigate("/datetime")}
              border="1px solid gary"
              borderRadius="7px"
              padding="10px"
              textAlign="left"
              boxShadow="2px 2px 2px gray"
              background="white"
              width="400px"
              height="50px"
              display="flex"
              alignItems="center"
              gap="10px"
              cursor="pointer"
            >
              <VscCalendar />
              {firstDate ? <Text color="gray">{firstDate}</Text> : "Start Date"}
              <BsArrowRight />
              {lastDate ? <Text color="gray">{lastDate}</Text> : "End Date"}
            </Flex>
          ) : (
            ""
          )}

          <Button
            border="1px solid gary"
            boxShadow="2px 2px 2px gray"
            width="400px"
            height="50px"
            backgroundColor={firstDate ? "#10a310" : "#e0e0e0"}
            onClick={() => navigate("/cars")}
          >
            FIND CARS
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PickUp;
