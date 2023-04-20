import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
 
  Image,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import Logo from "../Images/SignUp_Login_logo.png";
import "../Styles/Login.css";

export default function Loginpage() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { isAuth, loginUser, logoutUser } = useContext(AuthContext);
  if (isAuth) {
    navigate("/");
  }
  const login = async () => {
    setload(true);

    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`);
      let data = await res.json();
      console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].Password === Password) {
          Auth = true;
          loginUser(data[i].name);
          console.log(data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        alert("Please enter right email or password!");
      } else {
        alert("Login Successfull!");

        navigate("");
      }
      console.log(Auth);
    } catch (error) {
      setload(false);
      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  return (
    <Flex
      bg={"rgb(247,250,252)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        spacing={6}
        mx={"auto"}
        px={6}
      >
        <Image src={Logo} alt="logo" marginBottom={"20px"} />
        <Stack align={"center"}>
          <Heading
            mt={"-30px"}
            fontSize={"xl"}
            fontWeight={"700"}
            textAlign={"center"}
          >
            Enter details to login/sign-up
          </Heading>
        </Stack>

        <Box
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <Flex>
                <FormLabel color={"green"} fontSize={"md"}>
                  Enter Email ID
                </FormLabel>
                <Input
                  width={"383px"}
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </Flex>
            </FormControl>

            <FormControl id="password">
              <Flex>
                <FormLabel color={"green"} fontSize={"md"}>
                  {" "}
                  Enter Password
                </FormLabel>
                <Input
                  width={"370px"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Flex>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox color={"green"} fontSize={"md"}>
                  Remember me
                </Checkbox>
                <Link color={"green"} fontSize={"sm"}>
                  Forgot password?
                </Link>
              </Stack>
              {load ? (
                <Button isLoading colorScheme="teal" variant="solid">
                  Email
                </Button>
              ) : (
                <Button
                  onClick={login}
                  size="md"
                  bg={"green.600"}
                  color={"white"}
                  _hover={{
                    bg: "green.700",
                  }}
                >
                  Log in
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
