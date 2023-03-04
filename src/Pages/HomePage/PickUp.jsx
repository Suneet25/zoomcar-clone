import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { VscCalendar } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { getLocalData } from "../HomePage/LocalStorage";
import pickup from "..//..//Styles/pickup.module.css";

const PickUp = () => {
  const [firstDate, setfirstDate] = useState("");
  const [lastDate, setlastDate] = useState("");
  const [userCity, setUserCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUserCity(getLocalData("userLocation"));
    setfirstDate(getLocalData("firstDay"));
    setlastDate(getLocalData("lastDay"));
  }, []);

  return (
    <Box alignItems="center">
      <Flex
        bottom="30px"
        right="40%"
        alignItems="center"
        direction="column"
        gap="10px"
      >
        <Box className={pickup.topbox} onClick={() => navigate("/pickup")}>
          <FaCircle size={"10px"} color="green" />
          <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
        </Box>

        <Flex
          className={pickup.bottombox}
          onClick={() => navigate("/datetime")}
        >
          <VscCalendar />
          {firstDate ? <Text color="gray">{firstDate}</Text> : "Start Date"}
          <BsArrowRight />
          {lastDate ? <Text color="gray">{lastDate}</Text> : "End Date"}
        </Flex>

        <Button
          className={pickup.button}
          backgroundColor={firstDate ? "#10a310" : "#e0e0e0"}
          onClick={() => navigate("/cars")}
        >
          FIND CARS
        </Button>
      </Flex>
    </Box>
  );
};

export default PickUp;
