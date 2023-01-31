import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  Text,
} from "@chakra-ui/react";
import navbar from "../../Styles/HomeNavbar.module.css";
import bumBlebee from "..//..//Assets/bumBlebee.jpg";
import React, { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiTwoCoins } from "react-icons/gi";
import { TbCoin } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet, MdVerifiedUser } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { RiLogoutBoxLine, RiLogoutBoxRLine } from "react-icons/ri";

import {
  FaUser,
  FaRegCopy,
  FaMapMarkerAlt,
  FaPhone,
  FaCross,
  FaWindowClose,
} from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { AuthContext } from "../../Components/AuthContext";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { name, isAuth, logoutUser } = useContext(AuthContext);

  // const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let isAuth = true;
  // const handleLogout = () => {};

  // const handleLogin = () => {};

  //   useEffect(() => {
  //
  //   }, [ dispatch]);

  // let HostClick = () => {
  //   <Navigate to="/hostpage" />;
  // };

  return (
    <>
      {isAuth ? (
        <Box className={navbar.boxW} px={4} >
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Flex gap={"15px"} alignItems="center" direction="row">
              <Box>
                <HamburgerIcon
                  w={6}
                  h={5}
                  color="white.500"
                  onClick={onOpen}
                  cursor="pointer"
                  marginRight={"20px"}
                >
                  Open
                </HamburgerIcon>
                <Drawer
                  placement="left"
                  onClose={onClose}
                  isOpen={isOpen}
                  size="sm"
                >
                  <DrawerOverlay />
                  <DrawerContent bg={"white"} color={"gray.700"}>
                    <DrawerHeader
                      borderBottomWidth="1px"
                      bg="black"
                      color="white"
                    >
                      <Flex
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="20px">
                          <FaUser size={"25px"} />
                          <Box>
                            <Text fontSize="18px">{name}</Text>
                          </Box>
                        </Flex>
                        <Box alignItems={"center"} onClick={onClose}>
                          <FaWindowClose size={"28px"} />
                        </Box>
                      </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                      <Flex
                        alignItems="center"
                        height="50px"
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="10px" height={"50px"}>
                          <GiTwoCoins size={"22"} color="black" />
                          <Text fontSize="16px" cursor="pointer">
                            Credits
                          </Text>
                        </Flex>
                        <Text
                          fontWeight="600"
                          fontSize="16px"
                          color="green.500"
                        >
                          {0}
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        height="50px"
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="10px" height={"50px"}>
                          <TbCoin size={"22"} />
                          <Text fontSize="16px" cursor="pointer">
                            Z-POINTS
                          </Text>
                        </Flex>
                        <Text
                          fontWeight="600"
                          fontSize="16px"
                          color="green.500"
                        >
                          {320}
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        height="50px"
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="10px" height={"50px"}>
                          <MdOutlineAccountBalanceWallet size={"22"} />
                          <Text fontSize="16px" cursor="pointer">
                            Paytm wallet
                          </Text>
                        </Flex>
                        <Text
                          fontWeight="600"
                          fontSize="16px"
                          color="green.500"
                        >
                          {"Link Wallet"}
                        </Text>
                      </Flex>
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <BiCar size={"22"} />
                        <Text fontSize="16px" cursor="pointer">
                          My Trips
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <MdVerifiedUser size={"22"} />
                        <Text fontSize="16px" cursor="pointer">
                          Profile Verification
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        height="50px"
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="10px" height={"50px"}>
                          <FaMapMarkerAlt size={"22"} />
                          <Text fontSize="16px">
                            <Link
                              to={"/location"}
                              style={{
                                textDecoration: "none",
                                border: "none",
                                backgroundColor: "white",
                              }}
                            >
                              Change City
                            </Link>
                          </Text>
                        </Flex>
                        <Text
                          fontWeight="600"
                          fontSize="16px"
                          color="green.500"
                        >
                          UserCity
                        </Text>
                      </Flex>
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaRegCopy size={"22"} />
                        <Text fontSize="16px" cursor="pointer">
                          Zoomcar Fleet Vehicles Policies
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaRegCopy size={"22"} />
                        <Text fontSize="16px" cursor="pointer">
                          Zoomcar Host Vehicles Policies
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaPhone size={"22"} />
                        <Text fontSize="16px" cursor="pointer">
                          Help & Support
                        </Text>
                      </Flex>
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <RiLogoutBoxRLine size={"22"} />
                        <RouterLink to="/">
                          {" "}
                          <Text
                            fontSize="16px"
                            cursor="pointer"
                            // onClick={handleLogout}
                            onClick={logoutUser}
                          >
                            Logout
                          </Text>
                        </RouterLink>
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>

              <RouterLink to="/">
                <Image
                  className="zoomLogoNavbar"
                  width="120px"
                  height="40px"
                  src={bumBlebee}
                  cursor="pointer"
                />
              </RouterLink>
            </Flex>
            {/* ///////////////////////// */}
            <Flex
              minWidth={{ lg: "320px", md: "320px", sm: "10px" }}
              alignItems="center"
              gap="20px"
              direction="row"
              width="auto"
              // bgColor={"blue"}
            >
              <Box>
                <Text
                  fontSize={{ lg: "md", md: "md", sm: "sm" }}
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <RouterLink to="/host">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      className="navbar_hostButton"
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "20px",
                      }}
                    >
                      Host
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <Link to="/zms">ZMS</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <Button
                    size={{ lg: "md", md: "md", sm: "xs" }}
                    bg="black"
                    color="white"
                    fontSize={"16px"}
                    fontWeight="bold"
                    rounded="none"
                    visibility={{
                      base: "hidden",
                      md: "visible",
                      lg: "visible",
                    }}
                    _hover={{ bgColor: "white", color: "black" }}
                  >
                    {name}
                  </Button>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <RouterLink to="/">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      visibility={{
                        base: "hidden",
                        md: "visible",
                        lg: "visible",
                      }}
                      onClick={logoutUser}
                    >
                      <b>Logout</b>
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
            </Flex>
            {/* ///////////////////////// */}
          </Flex>
        </Box>
      ) : (
        <Box className={navbar.boxW} px={4}>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Flex gap={"15px"} alignItems="center" direction="row">
              <Box>
                <HamburgerIcon
                  w={6}
                  h={5}
                  color="white.500"
                  onClick={onOpen}
                  cursor="pointer"
                >
                  Open
                </HamburgerIcon>
                <Drawer
                  placement="left"
                  onClose={onClose}
                  isOpen={isOpen}
                  size="sm"
                >
                  <DrawerOverlay />
                  <DrawerContent bg={"white"} color={"gray.700"}>
                    <DrawerHeader borderBottomWidth="1px" bg={"gray.300"}>
                      <Flex
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="10px">
                          <FaUser size={"18px"} />
                          <Text fontSize="16px">Username</Text>
                        </Flex>
                        <Box alignItems={"center"} onClick={onClose}>
                          <FaWindowClose size={"28px"} />
                        </Box>
                      </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                      <Flex
                        alignItems="center"
                        height="50px"
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="10px" height={"50px"}>
                          <FaMapMarkerAlt size={"22"} />
                          <Text fontSize="16px">
                            <Link
                              to={"/location"}
                              style={{
                                textDecoration: "none",
                                border: "none",
                                backgroundColor: "white",
                              }}
                            >
                              Change City
                            </Link>
                          </Text>
                        </Flex>
                        <Text
                          fontWeight={"600"}
                          fontSize="16px"
                          color={"green.500"}
                        >
                          User City
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaRegCopy size={"22"} />
                        <Text fontSize="16px">
                          Zoomcar Fleet Vehicles Policies
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaRegCopy size={"22"} />
                        <Text fontSize="16px">
                          Zoomcar Host Vehicles Policies
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <FaPhone size={"22"} />
                        <Text fontSize="16px">Help & Support</Text>
                      </Flex>
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <RiLogoutBoxLine size={"22"} />
                        <RouterLink to="/login">
                          <Text
                            fontSize="16px"
                            cursor="pointer"
                            // onClick={handleLogin}
                          >
                            Login
                          </Text>
                        </RouterLink>
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
              <RouterLink to="/">
                <Image
                  className="zoomLogoNavbar"
                  width={{ lg: "120px", md: "100px", sm: "50px" }}
                  height="60px"
                  src={bumBlebee}
                  cursor="pointer"
                />
              </RouterLink>
            </Flex>

            {/* //////////////////// */}

            <Flex
              minWidth={{ lg: "320px", md: "320px", sm: "10px" }}
              alignItems="center"
              gap="20px"
              direction="row"
              width="auto"
              // border="3px solid red"
            >
              <Box>
                <Text
                  fontSize={{ lg: "md", md: "md", sm: "sm" }}
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <RouterLink to="/host">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      className="navbar_hostButton"
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "20px",
                      }}
                    >
                      Host
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <Link to="/zms">ZMS</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <RouterLink to="/signup">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      visibility={{
                        base: "hidden",
                        md: "visible",
                        lg: "visible",
                      }}
                    >
                      Sign up
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <RouterLink to="/login">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      visibility={{
                        base: "hidden",
                        md: "visible",
                        lg: "visible",
                      }}
                    >
                      Log in
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
            </Flex>

            {/* /////////////////// */}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Navbar;
