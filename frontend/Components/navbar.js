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
        backgroundColor: "rgba(255, 255, 255, 0.3)",
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
              <a href="/">Home</a>
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <a href="#">About</a>
                </a>
                <a className="navbar-item">
                  <a href="#">Jobs</a>
                </a>
                <a className="navbar-item">
                  <a href="#">Contact</a>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <a href="#">Report an issue</a>
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
};

export default Navbar;
