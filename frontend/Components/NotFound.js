import React from "react";
import Link from "next/link";
import { Link as CLink } from "@chakra-ui/react";
import { Text, Heading, Image, Button, Flex } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <Flex
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        backgroundColor="gray.100"
      >
        <Heading as="h1" size="4xl" fontWeight="bold" mb={10}>
          404
        </Heading>
        <Text fontSize="xl" mb={5}>
          Oops! The page you are looking for could not be found.
        </Text>
        <Text fontSize="lg" mb={10}>
          Sorry, but the page you requested was not found. It may have been
          moved or deleted, or you may have entered the wrong URL.
        </Text>
        <Link href="/" passHref>
          <CLink _hover={{ textDecoration: "none" }}>
            <Button colorScheme="blue" size="lg">
              Go back to homepage
            </Button>
          </CLink>
        </Link>
      </Flex>
    </div>
  );
};

export default NotFound;
