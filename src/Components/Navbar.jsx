import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Heading,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, isAuth, logoutUser } = useContext(AuthContext);

  return (
    <Box position="sticky" top="0" zIndex="100">
      <div
        style={{
          width: "100%",
          margin: "auto",
          position: "sticky",
          top: 0,
          zIndex: "10",
        }}
      >
        <Box
          boxShadow="md"
          //   bg={useColorModeValue("white", "gray.900")}
          bg={"black"}
          color={"white"}
          height={"auto"}
          width={"100%"}
          margin={"auto"}
        >
          <Flex
            alignItems="center"
            h={20}
            justifyContent={"space-between"}
            width="87%"
            m={"auto"}
          >
            <Flex width={"450px"} justifyContent={"space-around"}>
              {isAuth ? (
                <Flex>
                  <Button
                    backgroundColor={"black"}
                    color="white"
                    ml="-80px"
                    fontSize={"16px"}
                    fontWeight="bold"
                    rounded="none"
                    _hover={{ bgColor: "#086F83" }}
                  >
                    {name}
                  </Button>{" "}
                  <RouterLink to="/">
                    <Button
                      colorScheme="#2B6CB0"
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      ml="20px"
                      onClick={logoutUser}
                    >
                      <b>Logout</b>
                    </Button>
                  </RouterLink>
                </Flex>
              ) : (
                <div>
                  <RouterLink to="/signup">
                    <Button
                      colorScheme="black"
                      variant="solid"
                      _hover={{ bgColor: "white", color: "black" }}
                    >
                      Sign up
                    </Button>
                  </RouterLink>

                  <RouterLink to="/login">
                    <Button
                      colorScheme="blue"
                      color="white"
                      variant="ghost"
                      _hover={{ bgColor: "white", color: "black" }}
                    >
                      Log in
                    </Button>
                  </RouterLink>
                </div>
              )}
            </Flex>
          </Flex>
        </Box>
      </div>
    </Box>
  );
}
