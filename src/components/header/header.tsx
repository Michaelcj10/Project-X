import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const logo = require("../../images/logo.png");
import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 75px;
  position: relative;
  top: 0;
  z-index: 6;
  background: #eff0f3;
  width: 100%;
  .burger {
    width: 45px;
    height: 45px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 99;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: #2b2c34;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  .burger span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  .burger span:nth-child(1),
  .burger span:nth-child(2) {
    top: 3px;
  }

  .burger span:nth-child(3),
  .burger span:nth-child(4) {
    top: 15px;
  }

  .burger span:nth-child(5),
  .burger span:nth-child(6) {
    top: 27px;
  }

  .burger.open span:nth-child(1),
  .burger.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .burger.open span:nth-child(2),
  .burger.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .burger.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  .burger.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  .burger.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  .burger.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  .burger.open span:nth-child(5) {
    left: 5px;
    top: 21px;
  }

  .burger.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 21px;
  }

  img:nth-of-type(1) {
    position: absolute;
    left: 20px;
    top: 10px;
    @media (max-width: 560px) {
      width: 60px;
    }
  }
`;

const OverlayStyle = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  z-index: 5;
  top: 0;
  transition: opacity 0.5s;
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderStyle>
        {!open ? (
          <motion.div
            animate={{ y: 5 }}
            transition={{ ease: "easeOut", duration: 0.9 }}
          >
            <img src={logo} alt="logo" />
          </motion.div>
        ) : null}

        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`burger ${open ? "open" : ""}`}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </HeaderStyle>
      {open ? <OverlayStyle /> : null}
    </>
  );
}

export default Header;
