import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/SignUp_Login_logo.png";

export default function SignupCard() {
  const [Password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();

  const postdata = async () => {
    setload(true);
    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          Password,
        }),
      });
      let data = await res.json();
      console.log(data);
      setload(false);
      alert("Signup Successfull!");
      navigate("/login");
    } catch (error) {
      setload(false);
      console.log(error);
    }

    setname("");
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
        // border={"1px solid red"}
        spacing={6}
        mx={"auto"}
        // maxW={"450px"}
        // py={12}
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
        //   rounded={"lg"}
        //   bg={useColorModeValue("white", "gray.700")}
        //   boxShadow={"lg"}
        //   p={8}
        //   width={"500px"}
        //   height={"auto"}
        >
          <Stack spacing={4} mt={"-10px"}>
            <Box>
              <FormControl id="firstName" isRequired>
                <Flex>
                  <FormLabel color={"green"} fontSize={"md"}>
                    Enter Name
                  </FormLabel>
                  <Input
                    width={"370px"}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                  />
                </Flex>
              </FormControl>
            </Box>

            <FormControl id="email" isRequired>
              <Flex>
                <FormLabel color={"green"}>Enter Email ID</FormLabel>
                <Input
                  width={"355px"}
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </Flex>
            </FormControl>

            <FormControl id="password" isRequired>
              <Flex>
                <FormLabel color={"green"}>Enter Password</FormLabel>
                <Input
                  width={"340px"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Flex>
            </FormControl>

            <Stack spacing={10} pt={2}>
              {load ? (
                <Button isLoading colorScheme="green" variant="solid">
                  Email
                </Button>
              ) : (
                <Button
                  onClick={postdata}
                  loadingText="Submitting"
                  size="md"
                  bg={"green.600"}
                  color={"white"}
                  _hover={{
                    bg: "green.700",
                  }}
                >
                  Sign up
                </Button>
              )}
            </Stack>
            <Stack>
              <Text align={"center"} fontSize={"sm"}>
                Already a user?{" "}
                <Link color={"green"} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
