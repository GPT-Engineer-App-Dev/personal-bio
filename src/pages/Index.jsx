import { Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <FaHome size="64px" color="#3182CE" />
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to My Personal Website
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Explore my world and learn more about me!
        </Text>
        <Button colorScheme="blue" size="lg" leftIcon={<FaHome />}>
          Explore
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;