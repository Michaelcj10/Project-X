import * as React from "react";
import { motion } from "framer-motion";
import Button from "../atoms/button";
import landingImg from "../../images/landing-2.png";
import dotsImg from "../../images/landing-4.png";
import styled from "styled-components";

const LandingStyle = styled.div`
  background: #41228e;
  .hero-block {
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    height: 85vh;
    width: 100%;
    background-image: url(${landingImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .hero-block p {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }

  .hero-block .row {
    display: table-cell;
    vertical-align: middle;
  }

  .hero-block .columns {
    position: relative;
  }

  .hero-block svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  .hero-block svg:nth-child(1) {
    bottom: -15px;
  }

  .hero-block img {
    width: 300px;
    max-width: 90%;
  }

  button {
    margin-bottom: 50px;
  }

  .twelve {
    min-height: 300px;
    margin-top: -70px;
  }
  .six:nth-of-type(1) {
    margin-top: -50px;
  }
  .six:nth-of-type(2) {
    min-height: 300px;
  }
  #dots {
    width: 100px;
    margin-bottom: 25px;
  }
`;

function Landing() {
  return (
    <LandingStyle>
      <div className="hero-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,117.3C480,128,549,160,617,192C685.7,224,754,256,823,245.3C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,197.3C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
              <h1>Púca Labs</h1>
              <img id="dots" src={dotsImg} />
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p> Elegant and creative solutions.</p>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Button text="Contact Us" />
            </motion.div>
          </div>
        </div>
      </div>
    </LandingStyle>
  );
}

export default Landing;
