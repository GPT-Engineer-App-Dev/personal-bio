import { Container, Heading, Text, VStack, Image, Box } from "@chakra-ui/react";
import { FaUser, FaCode, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="xl">Get to know the person behind this website</Text>
        </Box>

        <Box>
          <Image src="https://via.placeholder.com/300" alt="Profile Picture" borderRadius="full" boxSize="300px" mx="auto" />
        </Box>

        <VStack spacing={6} align="start">
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              <FaUser /> Who I Am
            </Heading>
            <Text>I'm a passionate individual who loves to create and explore. My journey in life has been filled with exciting challenges and wonderful experiences.</Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={2}>
              <FaCode /> What I Do
            </Heading>
            <Text>I specialize in web development and design. My goal is to create beautiful, functional websites that make a positive impact on people's lives.</Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={2}>
              <FaHeart /> What I Love
            </Heading>
            <Text>Apart from coding, I enjoy hiking, reading science fiction novels, and experimenting with new cooking recipes. I believe in lifelong learning and constantly expanding my horizons.</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default About;