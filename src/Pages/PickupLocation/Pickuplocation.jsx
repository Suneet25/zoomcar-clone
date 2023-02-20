import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { FaCircle, FaRegMap } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import pick from "../../Styles/Pickuplocation.module.css";

const Picklocation = () => {
  const navigate = useNavigate();
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [items, setItems] = useState("");
  const [lat, setLate] = useState();
  const [long, setLong] = useState();
  const [currLoc, setCurrLoc] = useState();
  const [msg, setMsg] = useState("");
  const [locationset, setlocationset] = useState('')

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      setMsg("Geolocation is not supported by this browser.");
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5e4264872e29e642a21ad3acae2b4e10`
    )
      .then((response) => response.json())
      .then((resData) => {
        setCurrLoc(resData.name);
        setlocationset(resData.name);
    
        
      })
      .catch((e) => console.log(e));
  };

  function showPosition(position) {
    setLate(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  const handleAdd = () => {
    navigate("/");
    console.log(locationset);
    localStorage.setItem("LocationCity",JSON.stringify(locationset))
  };

  return (
    <Box
      padding={"20px"}
      alignContent="center"
      alignItems={"center"}
      textAlign="center"
    >
      <Box>
        <Link to="/">
          <FiArrowLeft size="25px" />
        </Link>
      </Box>
      <Box margin={"auto"} maxWidth="1000px">
        <Flex
          gap="15px"
          margin={"auto"}
          alignItems="center"
          marginTop="25px"
          marginBottom="20px"
          
        >
          <Box
            border="1px solid gary"
            borderRadius="7px"
            padding="10px"
            textAlign="left"
            boxShadow="0px 0px 0px 1px gray"
            background="white"
            width="55%"
            height="50px"
            display="flex"
            alignItems="center"
            gap="10px"
            cursor="pointer"
          >
            <FaCircle size={"10px"} color="green" />
            <Text color="gray">Pick Up City, Airpot, Address or Hotel</Text>
          </Box>
          <Flex
            gap="10px"
            alignItems="center"
            onClick={getLocation}
            cursor="pointer"
          >
            <TbCurrentLocation size="30px" color="gray" cursor="poiter" />
            <Text>Current Location</Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <FaRegMap size="30px" color="gray" />
            <Text>Select Location on Map</Text>
          </Flex>
        </Flex>
        <Flex
          gap="50px"
          backgroundColor="#fbfbfb"
          textAlign="left"
          padding="25px"
        >
          {pickUpPoint ? (
            <Box width="50%">
              <Box backgroundColor="#f5f5f5" padding="5px">
                <Text fontWeight={"bold"} color="gray.700">
                  RECENTLY SEARCHED LOCATIONS
                </Text>
              </Box>
              <Flex gap="10px" padding="5px" marginTop="10px">
                <GoLocation size="20px" />
                <Text>{pickUpPoint}</Text>
              </Flex>
            </Box>
          ) : (
            <Box></Box>
          )}
          <Box width="50%">
            <Box backgroundColor="#f5f5f5" padding="5px">
              <Text fontWeight={"bold"} color="gray.700">
                SUGGESTED PICK UP LOCATIONS
              </Text>
            </Box>
            <Flex
              gap="10px"
              padding="5px"
              marginTop="10px"
              alignItems="center"
              cursor="pointer"
            >
              <GoLocation size="20px" />
              <Text
                onClick={() => setPickUpPoint(`${items} International Airport`)}
              >
                {items} International Airport
              </Text>
            </Flex>
            <Flex
              gap="10px"
              padding="5px"
              marginTop="10px"
              alignItems="center"
              cursor="pointer"
            >
              <GoLocation size="20px" />
              <Text onClick={() => setPickUpPoint(`${items} Raiway Station`)}>
                {items} Raiway Station
              </Text>
            </Flex>
            <Flex
              gap="10px"
              padding="5px"
              marginTop="10px"
              alignItems="center"
              cursor="pointer"
            >
              <GoLocation size="20px" />
              <Text onClick={() => setPickUpPoint(`${items} City Bus Station`)}>
                {items} City Bus Station
              </Text>
            </Flex>
          </Box>
        </Flex>
        {currLoc ? (
          <Box marginBottom="25px">
            <Button width="45%">{currLoc}</Button>
          </Box>
        ) : null}
        <Box>
          <Button
            onClick={handleAdd}
            width="45%"
            className={pick.locationtbtn}
            backgroundColor={pickUpPoint ? "#10a310" : "#e0e0e0"}
          >
            CONFIRM PICKUP LOCATION
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Picklocation;
