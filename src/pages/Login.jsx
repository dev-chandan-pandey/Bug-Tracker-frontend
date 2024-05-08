// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   Heading,
//   Input,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { Link } from "react-router-dom";
// import { loginaction } from "../redux/Actions";

// const Login = () => {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth.auth);
//   // const url = useSelector((state) => state.auth.avatar);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const navigate = useNavigate();
//   // console.log(url);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(` ${password}  , ${email}`);
//     try {
//       const response = await axios.post(
//         "https://bug-tracker-umcg.onrender.com/api/login",
//         {
//           email,
//           password,
//         }
//       );

//       console.log(response);
//       if (response.status === 200) {
//         const token = response.data.token;
//         const user = response.data.user;
//         console.log(">>>>>>>>>", auth);
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", user.avatar);

//         setShowModal(true);
//         setModalMessage("Login successful");
//         dispatch(loginaction());

//         console.log(auth);
//         // setTimeout(() => {
//         //   navigate("/tracker");
//         // }, 1000);
//       } else {
//         console.error("Login failed");
//       }
//     } catch (error) {
//       setShowModal(true);
//       setModalMessage("Please register yourself");
//       console.error("Error:", error);
//     }
//   };
//   console.log(auth);
//   const closeModal = () => {
//     setShowModal(false);
//     if (modalMessage === "Login successful") {
//       navigate("/tracker");
//     }
//   };
//   return (
//     <div className="flex h-[38rem] items-center">
//       <Container>
//         <Box
//           p={"2rem"}
//           bg={"white"}
//           borderRadius={10}
//           boxShadow={"1px 7px 9px 1px "}
//         >
//           <form onSubmit={handleSubmit}>
//             <Heading as={"h1"} color={"#596e79"} textAlign={"center"} mb={4}>
//               Login
//             </Heading>
//             <FormControl>
//               <Stack spacing={5}>
//                 <Input
//                   type="email"
//                   placeholder="Email"
//                   border={"1px solid gray"}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   border={"1px solid gray"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button type="submit" color="black" width="full">
//                   Login
//                 </Button>

//                 <Text textAlign={"center"}>
//                   Don't have an account{" "}
//                   <Text as={Link} to="/signup" color="black" fontWeight="bold">
//                     Signup
//                   </Text>
//                 </Text>
//               </Stack>
//             </FormControl>
//           </form>
//         </Box>
//         <Modal isOpen={showModal} onClose={closeModal}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Login Status</ModalHeader>
//             <ModalBody>{modalMessage}</ModalBody>
//             <ModalFooter>
//               <Button colorScheme="blue" onClick={closeModal}>
//                 Close
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Container>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { loginaction } from "../redux/Actions";
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bug-tracker-backend-h87l.onrender.com/api/login",
        { email, password }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.avatar);
        dispatch(loginaction());
        setModalMessage("Login successful");
        setShowModal(true);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      setShowModal(true);
      setModalMessage("Please register yourself");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (modalMessage === "Login successful") {
      navigate("/tracker");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center" style={{ backgroundImage: "linear-gradient(to right, #7BC9FF, #7BC9FF)" }}>
      <Container maxW="md" p={8} borderRadius="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="2xl">
        <Box borderRadius="md" p={6} boxShadow="inner"
        //  bgGradient="linear(to-bl, teal.500, green.500)"
        bgColor={"#7BC9FF"}
         >
          <form onSubmit={handleSubmit}>
            <Heading as="h1" color={useColorModeValue('gray.800', 'white')} textAlign="center" mb={6}>
              Login
            </Heading>
            <FormControl>
              <Stack spacing={4}>
                <Input
                  type="email"
                  placeholder="Email"
                  variant="filled"
                  focusBorderColor="lime"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  variant="filled"
                  focusBorderColor="lime"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" colorScheme="teal" size="lg" width="full">
                  Login
                </Button>
                <Text textAlign="center">
                  Don't have an account?
                  <Text as={Link} to="/signup" color="teal.300" fontWeight="bold">
                    Sign up
                  </Text>
                </Text>
              </Stack>
            </FormControl>
          </form>
        </Box>
        <Modal isOpen={showModal} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login Status</ModalHeader>
            <ModalBody>{modalMessage}</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </div>
  );
};

export default Login;
