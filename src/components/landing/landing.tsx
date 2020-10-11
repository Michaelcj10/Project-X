import * as React from "react";
import { motion } from "framer-motion";
import Button from "../atoms/buttons/button";
import landingImg from "../../images/shapes-green.png";
import splat from "../../images/splat.svg";
import styled from "styled-components";
import Header from "../helper/header";

const LandingStyle = styled.div`
  background: #fff;
  border-radius: 4px;
  position: relative;
`;

const Hero = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  height: 90vh;
  width: 100%;
  background-image: url(${landingImg});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  @media only screen and (max-width: 660px) {
    background: rgba(255, 255, 255, 0.5);
  }

  p {
    font-size: 1.4em;
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

function Landing() {
  return (
    <LandingStyle>
      <Header />

      <motion.div
        animate={{ y: 100 }}
        transition={{ ease: "easeOut", duration: 2.5 }}
      >
        <Splat src={splat} />
      </motion.div>

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
              <p>
                We aim to create elegant and creative solutions to your software
                needs
              </p>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.9 }}
              animate={{ y: 100 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Button type="button" text="Contact Us" />
            </motion.div>
          </div>
        </div>
      </Hero>
    </LandingStyle>
  );
}

export default Landing;
