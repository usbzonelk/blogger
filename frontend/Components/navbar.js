import React from "react";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("navbar-menu");
  const [burgerState, setBurgerState] = useState("navbar-burger");

  const handleMenuOpen = () => {
    isOpen === "navbar-menu"
      ? setIsOpen("navbar-menu is-active")
      : setIsOpen("navbar-menu");
    burgerState === "navbar-burger"
      ? setBurgerState("navbar-burger is-active")
      : setBurgerState("navbar-burger");
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        justify: "space-between",
        wrap: "wrap",
        padding: "0.8rem",
        /*         filter: "blur(2.5px)",
         */ backgroundColor: "rgba(255, 255, 255, 0.3)",
        zIndex: "999",
      }}
    >
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          backdropFilter: "blur(1.5px)",
          justify: "space-between",
          wrap: "wrap",
          padding: "0.8rem",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: "999",
        }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className={burgerState}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleMenuOpen}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={isOpen}>
          <div className="navbar-start">
            <a className="navbar-item">
              <Link href="/">Home</Link>
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <Link href="#">About</Link>
                </a>
                <a className="navbar-item">
                  <Link href="#">Jobs</Link>
                </a>
                <a className="navbar-item">
                  <Link href="#">Contact</Link>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <Link href="#">Report an issue</Link>
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  /*  <Flex
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
    </Flex> */
};

export default Navbar;
