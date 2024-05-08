// import { Box, Button, Heading, Image } from "@chakra-ui/react";
// 4;
// import bug from "../assets/bug.jpg";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Home = () => {
//   const auth = useSelector((state) => state.auth.auth);
//   console.log(auth);

//   return (
//     <>
//       <Box className="flex justify-center" mt={{ base: "0", md: "4rem" }}>
//         <Box
//           className="flex items-center justify-center   gap-[3rem]"
//           flexDirection={{ base: "column", md: "row" }}
//           w={{ base: "100%", md: "80%" }}
//           p={"2rem"}
//         >
//           <Box>
//             <Image src={bug} alt="Notes" />
//           </Box>
//           <Box width={{ base: "100%", md: "40%" }}>
//             <Heading
//               as={"h1"}
//               fontSize={{ base: "2rem", md: "3rem" }}
//               color={"#596e79"}
//             >
//               The simplest way to Track bugs.
//             </Heading>
//             {auth ? (
//               <>
//                 <Link to="/tracker">
//                   <Button
//                     mt={"2rem"}
//                     fontSize={"1.3rem"}
//                     color={"black"}
//                     bg={"white"}
//                     p={"1.3rem 3rem"}
//                     fontWeight={"bold"}
//                     border={" 1px solid black"}
//                     _hover={{ bg: "#aedadd", color: "#596e79" }}
//                   >
//                     Dashboard
//                   </Button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/signup">
//                   <Button
//                     mt={"2rem"}
//                     fontSize={"1.3rem"}
//                     color={"#596e79"}
//                     bg={"white"}
//                     p={"1.3rem 3rem"}
//                     border={" 1px solid black"}
//                     _hover={{ bg: "#aedadd", color: "#596e79" }}
//                   >
//                     SignUp
//                   </Button>
//                 </Link>
//               </>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Home;
import { Box, Button, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import bug from "../assets/bug.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector((state) => state.auth.auth);
  const bgButton = useColorModeValue("white", "#2D3748"); // Adaptive color mode for button background
  const colorText = useColorModeValue("#596e79", "white"); // Adaptive text color for dark/light mode
  const hoverBg = useColorModeValue("#aedadd", "#4A5568"); // Button hover background color for light/dark mode
  const hoverColor = useColorModeValue("#596e79", "white"); // Button hover text color for light/dark mode

  return (
    <Box mt={{ base: "0", md: "4rem" }} p="4" bgGradient="linear(to-r, cyan.500, blue.500)">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="3rem"
        flexDirection={{ base: "column", md: "row" }}
        w={{ base: "100%", md: "80%" }}
        mx="auto"
      >
        <Box boxShadow="2xl" p="6" rounded="md" bg={bgButton}>
          <Image src={bug} alt="Bug Image" borderRadius="lg" />
        </Box>
        <Box width={{ base: "100%", md: "40%" }}>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color={colorText}>
            The simplest way to track bugs.
          </Heading>
          {auth ? (
            <Link to="/tracker">
              <Button
                mt="4"
                fontSize="lg"
                color={colorText}
                bg={bgButton}
                px="8"
                py="4"
                fontWeight="bold"
                borderWidth="1px"
                borderColor="gray.200"
                _hover={{ bg: hoverBg, color: hoverColor }}
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/signup">
              <Button
                mt="4"
                fontSize="lg"
                color={colorText}
                bg={bgButton}
                px="8"
                py="4"
                fontWeight="bold"
                borderWidth="1px"
                borderColor="gray.200"
                _hover={{ bg: hoverBg, color: hoverColor }}
              >
                Sign Up
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
