import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Switch,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { Search2Icon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import icon from "../public/vercel.svg";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      justify="space-between"
      wrap="wrap"
      padding="0.8rem"
      backdropFilter="blur(2.5px)"
      backgroundColor="rgba(255, 255, 255, 0.3)"
      zIndex="999"
      color="blackAlpha.900"
    >
      <Flex align="center" mr={5}>
        <Box p={1} rounded="md">
          <Text fontSize="xl" fontWeight="bold">
            <Image src={icon} />
          </Text>
        </Box>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={() => {}}>
        <Menu>
          <MenuButton as={Button}>
            {" "}
            <svg
              fill="black"
              width="12px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Button
                variant="unstyled"
                mr={2}
                px={4}
                textColor={"blackAlpha.900"}
              >
                <Link href={"/"}> Home</Link>
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="unstyled"
                mr={2}
                px={4}
                textColor={"blackAlpha.900"}
              >
                <Link href={"#"}> About</Link>
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="unstyled"
                mr={2}
                px={4}
                textColor={"blackAlpha.900"}
              >
                <Link href={"#"}> Contact</Link>
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Button variant="unstyled" mr={2} px={4} textColor={"blackAlpha.900"}>
          <Link href={"/"}> Home</Link>
        </Button>
        <Button variant="unstyled" mr={2} px={4} textColor={"blackAlpha.900"}>
          {" "}
          <Link href={"#"}> About</Link>
        </Button>
        <Button variant="unstyled" mr={2} px={4} textColor={"blackAlpha.900"}>
          {" "}
          <Link href={"#"}> Contact</Link>
        </Button>
      </Box>

      <Box display={{ base: "none", md: "flex" }} alignItems="center">
        <Button variant="unstyled" mr={2} px={4} textColor={"blackAlpha.900"}>
          {" "}
          <Switch value={null} />
        </Button>
        <Button variant="unstyled" mr={2} px={4} textColor={"blackAlpha.900"}>
          {" "}
          <Search2Icon />
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
