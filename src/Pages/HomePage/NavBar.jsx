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
import { RiLogoutBoxRLine } from "react-icons/ri";

import { FaUser, FaRegCopy, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
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
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          bg={"black"}
          color={"white"}
          px={4}
          padding="25px"
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
                    <Flex alignItems={"center"} gap="20px">
                      <FaUser size={"25px"} />
                      <Box>
                        <Text fontSize="18px">User Name</Text>
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
                      <Text fontWeight="600" fontSize="16px" color="green.500">
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
                      <Text fontWeight="600" fontSize="16px" color="green.500">
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
                      <Text fontWeight="600" fontSize="16px" color="green.500">
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
                      <Text fontWeight="600" fontSize="16px" color="green.500">
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
                      <Text
                        fontSize="16px"
                        cursor="pointer"
                        // onClick={handleLogout}
                      >
                        Logout
                      </Text>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <Box h={7} className="zoomLogoNavbar">
              <Image
                className="zoomLogoNavbar"
                width="120px"
                height="40px"
                src={bumBlebee}
                cursor="pointer"
              />
            </Box>
          </Flex>

          <Flex
            minWidth={"350px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
            className="navBarRightSide"
            // bgColor={"blue"}
          >
            <Text fontWeight={"600"} fontSize="18px">
              <Link href="/host">
                <Button
                  className="navbar_hostButton"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "30px",
                    marginRight: "80px",
                  }}
                >
                  Become a Host
                </Button>
              </Link>
            </Text>
            <Text fontWeight={"600"} fontSize="18px" marginRight="80px">
              <Link to="/zms">ZMS</Link>
            </Text>
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text
                  fontWeight={"600"}
                  fontSize="20px"
                  className="userMenuNavbar"
                >
                  User Name
                </Text>
              </MenuButton>
              <MenuList alignItems={"center"} backgroundColor="black">
                <MenuItem
                  className="menuLogoutBtn"
                  color="white"
                  backgroundColor="black"
                  // onClick={handleLogout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu> */}

            <Flex>
              <Button
                bg="black"
                color="white"
                fontSize={"16px"}
                fontWeight="bold"
                rounded="none"
                marginRight="80px"
                _hover={{ bgColor: "white", color: "black" }}
              >
                {name}
              </Button>{" "}
              <RouterLink to="/">
                <Button
                  colorScheme="#2B6CB0"
                  variant="outline"
                  _hover={{ bgColor: "white", color: "black" }}
                  mr="20px"
                  onClick={logoutUser}
                >
                  <b>Logout</b>
                </Button>
              </RouterLink>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Box className={navbar.boxW} bg={"black"} color={"white"} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
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
                      <Flex alignItems={"center"} gap="10px">
                        <FaUser size={"18px"} />
                        <Text fontSize="16px">Username</Text>
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
                        <RiLogoutBoxRLine size={"22"} />
                        <Text
                          fontSize="16px"
                          cursor="pointer"
                          // onClick={handleLogin}
                        >
                          Login
                        </Text>
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
              <Image
                className="zoomLogoNavbar"
                width="120px"
                height="60px"
                src={bumBlebee}
                cursor="pointer"
              />
            </Flex>

            <Flex
              minWidth="350px"
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              width="40%"
            >
              <Text fontWeight={"600"} fontSize="auto">
                <Link to="/host">
                  <Button
                    className="navbar_hostButton"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "30px",
                    }}
                  >
                    Become a Host
                  </Button>
                </Link>
              </Text>
              <Text fontWeight={"600"} fontSize="auto">
                <Link to="/zms">ZMS</Link>
              </Text>
              {/* <Menu className="userMenuNavbar">
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Text
                    fontWeight={"600"}
                    fontSize="auto"
                    color="white"
                    className="userMenuNavbar"
                  >
                    Login/SignUp
                  </Text>
                </MenuButton>
                <MenuList
                  alignItems={"center"}
                  backgroundColor="white"
                  color="black"
                >
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                </MenuList>
              </Menu> */}
              <RouterLink to="/signup">
                <Button
                  variant="outline"
                  _hover={{ bgColor: "white", color: "black" }}
                >
                  Sign up
                </Button>
              </RouterLink>

              <RouterLink to="/login">
                <Button
                  marginRight={"40px"}
                  variant="outline"
                  _hover={{ bgColor: "white", color: "black" }}
                >
                  Log in
                </Button>
              </RouterLink>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Navbar;
