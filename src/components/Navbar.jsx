// import {
//   Box,
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
//   Flex,
//   Heading,
//   IconButton,
//   Spacer,
//   Text,
//   Image,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// import axios from "axios";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { logoutaction } from "../redux/Actions";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [avatarUrl, setAvatarURL] = useState("");

//   useEffect(() => {
//     const url = localStorage.getItem("user");
//     setAvatarURL(url);
//   }, []);

//   console.log(avatarUrl);

//   const auth = useSelector((state) => state.auth.auth);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   // console.log({ before: auth });
//   const handleLogout = async () => {
//     try {
//       const response = await axios.get(
//         "https://bug-tracker-umcg.onrender.com/api/logout",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//     setTimeout(() => {
//       dispatch(logoutaction());
//       localStorage.clear();
//       console.log({ "<<<<": auth });
//       navigate("/");
//     }, 2000);
//   };
//   return (
//     <>
//       <Box>
//         <Flex
//           p={"1.5rem"}
//           boxShadow="base"
//           bg={"#596e79"}
//           display={"flex"}
//           alignItems={"center"}
//           direction={{ base: "row", md: "row" }}
//           justifyContent={"center"}
//         >
//           <Box>
//             <Link to={"/"}>
//               <Heading
//                 as="h2"
//                 fontSize={{ base: "1.6rem", md: "2rem" }}
//                 color={"white"}
//                 ml={"80px"}
//               >
//                 BugsTracker
//               </Heading>
//             </Link>
//           </Box>
//           <Spacer />
//           <Box>
//             <IconButton
//               icon={<HamburgerIcon color="white" fontSize={"1.6rem"} />}
//               aria-label="Open navigation"
//               onClick={onOpen}
//               display={{ base: "flex", md: "none" }}
//               bgColor="green"
//             />

//             <Flex
//               gap={4}
//               display={{ base: "none", md: "flex" }}
//               justifyContent="space-around"
//               mr={"80px"}
//             >
//               <Link to="/">
//                 <Button
//                   fontSize={"1.3rem"}
//                   color={"white"}
//                   bg={"transparent"}
//                   _hover={{ bg: "transparent", color: "#aedadd" }}
//                 >
//                   Home
//                 </Button>
//               </Link>

//               {auth ? (
//                 <>
//                   <Link to="/tracker">
//                     <Button
//                       fontSize={"1.3rem"}
//                       color={"white"}
//                       bg={"transparent"}
//                       _hover={{ bg: "transparent", color: "#aedadd" }}
//                     >
//                       Dashboard
//                     </Button>
//                   </Link>

//                   <Button
//                     fontSize={"1.3rem"}
//                     color={"white"}
//                     bg={"transparent"}
//                     onClick={handleLogout}
//                     _hover={{ bg: "transparent", color: "#aedadd" }}
//                   >
//                     Logout
//                   </Button>
//                   <Image
//                     w="50px"
//                     h="50px"
//                     borderRadius={"50%"}
//                     src={avatarUrl}
//                     alt="profilepictures"
//                   />
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login">
//                     <Button
//                       fontSize={"1.3rem"}
//                       color={"white"}
//                       bg={"transparent"}
//                       _hover={{ bg: "transparent", color: "#aedadd" }}
//                     >
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button
//                       fontSize={"1.3rem"}
//                       color={"white"}
//                       bg={"transparent"}
//                       _hover={{ bg: "transparent", color: "#aedadd" }}
//                     >
//                       SignUp
//                     </Button>
//                   </Link>
//                 </>
//               )}
//             </Flex>
//           </Box>
//         </Flex>

//         <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Menu</DrawerHeader>
//             <DrawerBody>
//               <Box>
//                 <Link
//                   className="hover:bg-primeGreen-600 block py-2"
//                   color="#2f4e44"
//                   to="/"
//                   onClick={onClose}
//                 >
//                   Home
//                 </Link>
//               </Box>
//               {auth ? (
//                 <>
//                   <Link
//                     to="/tracker"
//                     className="hover:bg-primeGreen-600 block py-2"
//                     color="#2f4e44"
//                     onClick={onClose}
//                   >
//                     Dashboard
//                   </Link>

//                   <Text
//                     className="hover:bg-primeGreen-600 block py-2"
//                     color="#2f4e44"
//                     onClick={onClose}
//                   >
//                     Logout
//                   </Text>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="hover:bg-primeGreen-600 block py-2"
//                     color="#2f4e44"
//                     onClick={onClose}
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/signup"
//                     className="hover:bg-primeGreen-600 block py-2"
//                     color="#2f4e44"
//                     onClick={onClose}
//                   >
//                     SingUp
//                   </Link>
//                 </>
//               )}
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
//       </Box>
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import { Box, Flex, Heading, IconButton, Button, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Text, Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutaction } from '../redux/Actions';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth);
    const avatarUrl = useSelector((state) => state.auth.user?.avatarUrl);

    const handleLogout = () => {
        // Implementing logout logic
        dispatch(logoutaction());
        localStorage.clear();
        navigate('/');
    };

    return (
        <Box bg="#0D47A1" p={4} color="#ECEFF1" boxShadow="base">
            <Flex alignItems="center" justifyContent="space-between">
                <Link to="/">
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        BugsTracker
                    </Heading>
                </Link>
                <IconButton
                    aria-label="Open Menu"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    display={{ base: "block", md: "none" }}
                    bgColor="transparent"
                    _hover={{ bgColor: "blue.700" }}
                />
                <Flex display={{ base: "none", md: "flex" }} alignItems="center">
                    <Link to="/">
                        <Button variant="ghost" _hover={{ color: "#B3E5FC" }}>
                            Home
                        </Button>
                    </Link>
                    {auth ? (
                        <>
                            <Link to="/dashboard">
                                <Button variant="ghost" _hover={{ color: "#B3E5FC" }}>
                                    Dashboard
                                </Button>
                            </Link>
                            <Button onClick={handleLogout} variant="ghost" _hover={{ color: "#B3E5FC" }}>
                                Logout
                            </Button>
                            <Image borderRadius="full" boxSize="40px" src={avatarUrl} alt="Avatar" />
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button variant="ghost" _hover={{ color: "#B3E5FC" }}>
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="ghost" _hover={{ color: "#B3E5FC" }}>
                                    SignUp
                                </Button>
                            </Link>
                        </>
                    )}
                </Flex>
            </Flex>

            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="#0D47A1" color="#ECEFF1">
                    <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                    <DrawerBody>
                        <ChakraLink as={Link} to="/" p={2} display="block" _hover={{ bg: "blue.700", color: "white" }}>
                            Home
                        </ChakraLink>
                        {auth && (
                            <>
                                <ChakraLink as={Link} to="/dashboard" p={2} display="block" _hover={{ bg: "blue.700", color: "white" }}>
                                    Dashboard
                                </ChakraLink>
                                <Text p={2} onClick={handleLogout} _hover={{ bg: "blue.700", color: "white" }}>
                                    Logout
                                </Text>
                            </>
                        )}
                        {!auth && (
                            <>
                                <ChakraLink as={Link} to="/login" p={2} display="block" _hover={{ bg: "blue.700", color: "white" }}>
                                    Login
                                </ChakraLink>
                                <ChakraLink as={Link} to="/signup" p={2} display="block" _hover={{ bg: "blue.700", color: "white" }}>
                                    SignUp
                                </ChakraLink>
                            </>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;

