import * as React from "react";
import { motion } from "framer-motion";
import Button from "../atoms/buttons/button";
import landingImg from "../../images/shapes-green.png";
import splat from "../../images/splat.svg";
import logo from "../../images/logo.png";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../atoms/modal/modal";

const LandingStyle = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const Hero = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  background-image: url(${landingImg});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  p {
    font-weight: bold;
    font-size: 2rem;
    color: #282c34;
  }

  .row {
    display: table-cell;
    vertical-align: middle;
  }

  .columns {
    position: relative;
  }

  img {
    width: 300px;
    max-width: 90%;
  }
  .twelve {
    min-height: 300px;
    margin-top: -70px;
  }

  h1 {
    font-size: 9rem;
    color: #282c34;
  }
`;

const Splat = styled.img`
  position: absolute;
  right: 0px;
  top: -20;
  opacity: 0.35;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 25px;
  position: fixed;
  top: 25px;
  z-index: 99;
  border-radius: 50%;
  left: 25px;
  box-shadow: 0 6px 10px 0 rgba(21, 25, 68, 0.12),
    0 8px 16px -12px rgba(21, 25, 68, 0.05),
    0 4px 8px -3px rgba(21, 25, 68, 0.02);
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

function Landing() {
  const [showModal, setModalShowing] = useState(false);
  return (
    <LandingStyle>
      <motion.div
        animate={{ y: 100 }}
        transition={{ ease: "easeOut", duration: 2.5 }}
      >
        <Splat src={splat} />
      </motion.div>
      <Logo
        src={logo}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <Hero>
        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h1>Púca Labs</h1>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p>Elegant and creative solutions to your software needs</p>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Button
                type="button"
                text="Contact Us"
                onClick={() => {
                  setModalShowing(true);
                }}
              />
            </motion.div>
          </div>
        </div>
      </Hero>
      <Modal
        showModal={showModal}
        setModalShowing={() => {
          setModalShowing(!showModal);
        }}
      />
    </LandingStyle>
  );
}

export default Landing;
