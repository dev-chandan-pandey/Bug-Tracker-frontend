import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setbugdata } from "../redux/Actions";
import Bugscard from "../components/Bugscard";

const Tracker = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [severity, setSeverity] = useState("");
  const [filteredCritical, setFilteredCritical] = useState([]);
  const [filteredMajor, setFilteredMajor] = useState([]);
  const [filteredMedium, setFilteredMedium] = useState([]);
  const [filteredLow, setFilteredLow] = useState([]);
  const dispatch = useDispatch();
  const bugsdata = useSelector((state) => state.auth.bugsdata);
  const [newbugsdata, setnewugsData] = useState([]);
  useEffect(() => {
    const fetchBugs = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://bug-tracker-backend-h87l.onrender.com/api/bugs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setbugdata(response.data.bugs));
        console.log(response.data);
        setnewugsData(response.data);
      } catch (error) {
        console.error("Error fetching bugs:", error);
      }
    };
    fetchBugs();
  }, [bugsdata]);

  useEffect(() => {
    const filterBugs = () => {
      const critical = bugsdata.filter((bug) => bug.severity === "Critical");
      setFilteredCritical(critical);

      const major = bugsdata.filter((bug) => bug.severity === "Major");
      setFilteredMajor(major);

      const medium = bugsdata.filter((bug) => bug.severity === "Medium");
      setFilteredMedium(medium);

      const low = bugsdata.filter((bug) => bug.severity === "Low");
      setFilteredLow(low);
    };

    filterBugs();
  }, [bugsdata]);

  const postBug = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://bug-tracker-backend-h87l.onrender.com/api/bugs",
        {
          title,
          description,
          source,
          severity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("New bug added:", response.data);
      setTitle("");
      setDescription("");
      setSource("");
      setSeverity("");
    } catch (error) {
      console.error("Error adding bug:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBug();
  };

  return (
    <>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        display={"flex"}
        flexDirection={"column"}
        w="100%"
        h="200px"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <form
          display={"flex"}
          flexDirection={"column"}
          w="100%"
          h="200px"
          onSubmit={handleSubmit}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            h="200px"
            w="100%"
            spacing={4}
            gap={"10px"}
          >
            <Box display={"flex"} flexDirection={"row"} w="100%">
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Source</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Severity</FormLabel>
                <Select
                  placeholder="Select severity"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                >
                  <option value="Critical">Critical</option>
                  <option value="Major">Major</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button type="submit" colorScheme="blue">
                Add Bug
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          gap: "10px",
        }}
      >
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#f81f1f",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>
            Critical Bugs
          </h1>
          {filteredCritical.map((bug) => (
            <Box
              style={{
                borderRadius: "10px",
                backgroundColor: "#f65252",
                gap: "10px",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "10px",
              }}
            >
              <Bugscard key={bug.id} bug={bug} />
            </Box>
          ))}
        </Box>
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#f99c00",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>Major Bugs</h1>
          {filteredMajor.map((bug) => (
            <Box
              style={{
                marginTop: "10px",
                borderRadius: "10px",
                backgroundColor: "#ffba46",
                gap: "10px",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            >
              <Bugscard key={bug.id} bug={bug} />
            </Box>
          ))}
        </Box>
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#67c4c8",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>
            Medium Bugs
          </h1>
          {filteredMedium.map((bug) => (
            <Box
              style={{
                marginTop: "10px",
                borderRadius: "10px",
                backgroundColor: "#c8fdff",
                gap: "10px",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            >
              <Bugscard key={bug.id} bug={bug} />
            </Box>
          ))}
        </Box>
        <Box
          style={{
            width: "25%",
            padding: "10px",
            backgroundColor: "#2ee32e",
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          {" "}
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>Low Bugs</h1>
          {filteredLow.map((bug) => (
            <Box
              style={{
                borderRadius: "10px",
                backgroundColor: "#9dfd9d",
                gap: "10px",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "10px",
              }}
            >
              <Bugscard key={bug.id} bug={bug} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Tracker;


// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Flex,
//   VStack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setbugdata } from "../redux/Actions";
// import Bugscard from "../components/Bugscard";

// const Tracker = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [source, setSource] = useState("");
//   const [severity, setSeverity] = useState("");
//   const dispatch = useDispatch();
//   const bugsdata = useSelector((state) => state.auth.bugsdata);

//   useEffect(() => {
//     const fetchBugs = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const response = await axios.get(
//           "https://bug-tracker-umcg.onrender.com/api/bugs",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         dispatch(setbugdata(response.data.bugs));
//       } catch (error) {
//         console.error("Error fetching bugs:", error);
//       }
//     };
//     fetchBugs();
//   }, [dispatch, bugsdata]);

//   const postBug = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       await axios.post(
//         "https://bug-tracker-umcg.onrender.com/api/bugs",
//         { title, description, source, severity },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setTitle("");
//       setDescription("");
//       setSource("");
//       setSeverity("");
//     } catch (error) {
//       console.error("Error adding bug:", error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postBug();
//   };

//   return (
//     <>
//       <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="xl" bg={useColorModeValue("white", "gray.700")}>
//         <form onSubmit={handleSubmit}>
//           <VStack spacing={4}>
//             <Flex gap="4" wrap="wrap" justifyContent="center">
//               <FormControl id="title" isRequired>
//                 <FormLabel>Title</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="description" isRequired>
//                 <FormLabel>Description</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="source" isRequired>
//                 <FormLabel>Source</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter source"
//                   value={source}
//                   onChange={(e) => setSource(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="severity" isRequired>
//                 <FormLabel>Severity</FormLabel>
//                 <Select
//                   placeholder="Select severity"
//                   value={severity}
//                   onChange={(e) => setSeverity(e.target.value)}
//                 >
//                   <option value="Critical">Critical</option>
//                   <option value="Major">Major</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </Select>
//               </FormControl>
//             </Flex>
//             <Button type="submit" colorScheme="blue" size="lg">
//               Add Bug
//             </Button>
//           </VStack>
//         </form>
//       </Box>
//       <Box mt={5} bg={useColorModeValue("gray.100", "gray.800")} p={5} borderRadius="lg">
//         <Flex gap="10px" wrap="wrap" justifyContent="space-between">
//           {['Critical', 'Major', 'Medium', 'Low'].map((severity, index) => (
//             <Box key={index} bg={useColorModeValue("white", "gray.700")} p={5} borderRadius="lg" flex="1" minW="250px">
//               <Text fontSize="xl" fontWeight="bold" mb={3}>{severity} Bugs</Text>
//               {bugsdata.filter(bug => bug.severity === severity).map(bug => (
//                 <Bugscard key={bug.id} bug={bug} />
//               ))}
//             </Box>
//           ))}
//         </Flex>
//       </Box>
//     </>
//   );
// };

// export default Tracker;
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Flex,
//   VStack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setbugdata } from "../redux/Actions";
// import Bugscard from "../components/Bugscard";

// const Tracker = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [source, setSource] = useState("");
//   const [severity, setSeverity] = useState("");
//   const dispatch = useDispatch();
//   const bugsdata = useSelector((state) => state.auth.bugsdata);

//   useEffect(() => {
//     const fetchBugs = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const response = await axios.get(
//           "https://bug-tracker-umcg.onrender.com/api/bugs",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         dispatch(setbugdata(response.data.bugs));
//       } catch (error) {
//         console.error("Error fetching bugs:", error);
//       }
//     };
//     fetchBugs();
//   }, [dispatch, bugsdata]);

//   const postBug = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       await axios.post(
//         "https://bug-tracker-umcg.onrender.com/api/bugs",
//         { title, description, source, severity },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setTitle("");
//       setDescription("");
//       setSource("");
//       setSeverity("");
//     } catch (error) {
//       console.error("Error adding bug:", error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postBug();
//   };

//   return (
//     <>
//       <Box as="section" p={4} maxW="1200px" mx="auto">
//         <Heading as="h2" mb={5} color={useColorModeValue("blue.800", "blue.200")}>
//           Bug Tracker Dashboard
//         </Heading>
//         <form onSubmit={handleSubmit}>
//           <VStack spacing={4} align="stretch">
//             <Flex gap="4" wrap="wrap" justifyContent="center">
//               <FormControl isRequired>
//                 <FormLabel>Title</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel>Description</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel>Source</FormLabel>
//                 <Input
//                   type="text"
//                   placeholder="Enter source"
//                   value={source}
//                   onChange={(e) => setSource(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel>Severity</FormLabel>
//                 <Select
//                   placeholder="Select severity"
//                   value={severity}
//                   onChange={(e) => setSeverity(e.target.value)}
//                 >
//                   <option value="Critical">Critical</option>
//                   <option value="Major">Major</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </Select>
//               </FormControl>
//             </Flex>
//             <Button type="submit" colorScheme="blue" size="lg">
//               Add Bug
//             </Button>
//           </VStack>
//         </form>
//         <Box mt={10}>
//           <Text fontSize="xl" mb={2} fontWeight="bold" color={useColorModeValue("gray.700", "gray.200")}>
//             Listed Bugs
//           </Text>
//           {/* Mapping over filtered bugs based on severity, the Bugscard component should accept a bug as a prop */}
//           <Flex gap="10px" wrap="wrap" justifyContent="space-between">
//             {['Critical', 'Major', 'Medium', 'Low'].map((severity, index) => (
//               <Box key={index} bg={useColorModeValue("white", "gray.700")} p={5} borderRadius="lg" flex="1" minW="250px">
//                 <Text fontSize="xl" fontWeight="bold" mb={3}>{severity} Bugs</Text>
//                 {bugsdata.filter(bug => bug.severity === severity).map(bug => (
//                   <Bugscard key={bug.id} bug={bug} />
//                 ))}
//               </Box>
//             ))}
//           </Flex>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Tracker;
