import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/about">
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;